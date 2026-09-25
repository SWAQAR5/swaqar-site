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
// region is cropped to West Africa - South Asia rather than the full world: a full world map
// compresses Africa/Middle East/Asia (all fairly close together in real geography) into a small
// central cluster, leaving their node circles and labels overlapping (caught by screenshot — at
// full-world scale Africa and Middle East were only ~14 units apart, less than the two circles'
// combined radius). This crop widens that to ~45 units apart while still being a real,
// recognizable regional map, not an abstract/cropped-looking fragment.
export const WORLD_MAP_SETTINGS = {
  height: 70,
  grid: 'diagonal' as const,
  region: { lat: { min: -12, max: 38 }, lng: { min: -12, max: 88 } },
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
    const proj = dots.map(({ start, end }) => ({
      start: map.addPin({ lat: start.lat, lng: start.lng, svgOptions: { radius: 0 } }),
      end: map.addPin({ lat: end.lat, lng: end.lng, svgOptions: { radius: 0 } }),
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
    <div className="cor-worldmap">
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
