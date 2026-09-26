'use client';
import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import DottedMap from 'dotted-map';

// Aceternity UI's "World Map" component, adapted for this codebase: same underlying mechanism
// (dotted-map for the background grid, framer-motion for the animated connecting path, real
// lat/lng projection instead of hand-placed abstract coordinates), but styled with plain CSS
// classes (see .cor-worldmap-* in swaqar.css) instead of the reference's Tailwind utility
// classes. Tailwind is present in package.json/postcss.config but never actually wired into
// this app (globals.css, which has `@import "tailwindcss"`, isn't imported by any layout) — this
// site's whole styling system is hand-authored CSS, so pulling in Tailwind's reset/utilities for
// one component risked side effects on every other section rather than a contained addition.
//
// Default start/end point markers are opt-in (showPoints, default true, matching the reference)
// rather than always-on: a caller that already draws its own node circles/pulse rings (like
// CorridorsDiagram) needs to suppress these, not layer a second set on top.
//
// Full world (no region crop) per explicit direction — a regional crop was tried in an earlier
// round to solve Africa/Middle East/Asia compressing together at full-world scale, but that's
// the wrong lever: it stops looking like "the world," just a fragment. The actual fix lives on
// the caller's side (CorridorsDiagram's panel width + label sizing), not here. height:90 (rather
// than dotted-map's own resolution) is chosen for a real, measured reason: generation time scales
// badly — 70=~0.5s, 90=~0.8s, 100=~1.1s, 130=~8s, 160=~16s (measured directly, not the README's
// vague "1 to 30s" estimate) — and this runs synchronously on every page load (SSR and again on
// client hydration), so 90 is close to the practical ceiling before it becomes a real perceived-
// performance cost, not just a cosmetic one.
export const WORLD_MAP_SETTINGS = {
  height: 90,
  grid: 'diagonal' as const,
};

export interface WorldMapDot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

interface WorldMapProps {
  dots?: WorldMapDot[];
  lineColor?: string;
  dotColor?: string;
  showPoints?: boolean;
}

export function WorldMap({
  dots = [],
  lineColor = '#d7b75c',
  dotColor = '#b8d3e8',
  showPoints = true,
}: WorldMapProps) {
  const shouldReduceMotion = useReducedMotion();

  const { svgMap, width, height, projected } = useMemo(() => {
    const map = new DottedMap(WORLD_MAP_SETTINGS);
    // getPin (not addPin) — addPin's ONLY purpose is registering a permanently-rendered marker
    // in this.pins, which getSVG() below draws into the background image unconditionally,
    // completely outside this component's own showPoints prop. That's the actual stray-marker
    // bug: addPin(..., { svgOptions: { radius: 0 } }) was meant to add an "invisible" tracking
    // pin just to read back its projected x/y, but dotted-map's getSVG() computes
    // `svgOptions.radius || radius` — 0 is falsy in JS, so it silently fell back to the default
    // radius (0.22) instead of actually being zero, baking a visible dot into the image at every
    // one of these "invisible" pins (Jeddah appears twice, once as each segment's shared
    // midpoint, doubling up there). getPin() returns the identical projected coordinate without
    // ever touching this.pins, so nothing extra reaches the rendered image.
    const proj = dots.map(({ start, end }) => ({
      start: map.getPin({ lat: start.lat, lng: start.lng })!,
      end: map.getPin({ lat: end.lat, lng: end.lng })!,
    }));
    const svg = map.getSVG({
      radius: 0.22,
      color: dotColor,
      shape: 'circle',
      backgroundColor: 'transparent',
    });
    return { svgMap: svg, width: map.image.width, height: map.image.height, projected: proj };
  }, [dots, dotColor]);

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - height * 0.12;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    // aspectRatio is set from the ACTUAL computed width/height (varies with WORLD_MAP_SETTINGS'
    // region — mercator projection doesn't scale latitude/longitude 1:1, so a lat/lng box picked
    // to visually read as "roughly 2:1" doesn't actually come out to exactly 2/1; this region
    // computes to 132x70, ~1.89:1) rather than a hardcoded 2/1. A mismatched hardcoded ratio
    // would letterbox the image/svg (object-fit:contain / preserveAspectRatio both center-fit
    // within the box, leaving blank margin on whichever axis doesn't match), while the label
    // layer's plain CSS percentages assume the box has NO margin — silently shifting every label
    // and this component's own path/points away from where the caller's percent-positioned
    // overlay (CorridorsDiagram's node circles) actually expects them.
    <div className="cor-worldmap" style={{ aspectRatio: `${width} / ${height}` }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- generated data: URI SVG, not a Next/Image-managed content image */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="cor-worldmap-img"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <svg viewBox={`0 0 ${width} ${height}`} className="cor-worldmap-svg" aria-hidden="true">
        <defs>
          <linearGradient id="cor-worldmap-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="12%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="88%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        {projected.map((p, i) => (
          <motion.path
            key={`path-${i}`}
            d={createCurvedPath(p.start, p.end)}
            fill="none"
            stroke="url(#cor-worldmap-gradient)"
            strokeWidth={height * 0.02}
            strokeLinecap="round"
            initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1.4, delay: 0.4 * i, ease: 'easeInOut' }
            }
          />
        ))}
        {showPoints &&
          projected.flatMap((p, i) => [
            { pt: p.start, key: `start-${i}` },
            { pt: p.end, key: `end-${i}` },
          ]).map(({ pt, key }) => (
            <circle key={key} cx={pt.x} cy={pt.y} r={height * 0.03} fill={lineColor} />
          ))}
      </svg>
    </div>
  );
}
