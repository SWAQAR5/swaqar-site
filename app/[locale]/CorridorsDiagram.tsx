'use client';
import { useMemo } from 'react';
import DottedMap from 'dotted-map';
import { t, tx, type Lang } from '@/lib/translations';
import { WorldMap, WORLD_MAP_SETTINGS, type WorldMapDot } from '@/components/ui/world-map';

// Corridors' own 3-node diagram — self-contained, deliberately NOT built on or sharing any code
// with CorridorGlobe.tsx (the hero's dense 12-node globe). Three fixed region nodes (Africa,
// Middle East as the larger/dominant hub, Asia), no per-viewport overlap suppression needed
// (unlike the hero) since three non-competing labels at fixed, well-spaced positions never
// collide with each other or with any surrounding text at any width.
//
// Background dot-grid and the Africa->hub->Asia connecting line are rendered by WorldMap (see
// components/ui/world-map.tsx) — a real dotted-map + framer-motion world map, replacing an
// earlier hand-built version whose stroke-dasharray flow-line read as a broken, disconnected arc
// in a static view instead of a continuous connection. Node positions below are REAL lat/lng
// (Douala/Jeddah/Mumbai as stand-ins for Africa/Middle East/Asia) run through the exact same
// dotted-map projection WorldMap uses internally, rather than hand-placed abstract coordinates —
// otherwise the custom node circles/labels here would land in different spots than where
// WorldMap's own line actually starts/ends/passes through, which would look just as broken as
// what this replaces.
const NODE_COORDS = [
  { id: 'africa', lat: 4.0511, lng: 9.7679, hub: false }, // Douala
  { id: 'middle-east', lat: 21.4858, lng: 39.1925, hub: true }, // Jeddah
  { id: 'asia', lat: 19.0760, lng: 72.8777, hub: false }, // Mumbai
] as const;

const MAP_DOTS: WorldMapDot[] = [
  { start: { lat: NODE_COORDS[0].lat, lng: NODE_COORDS[0].lng }, end: { lat: NODE_COORDS[1].lat, lng: NODE_COORDS[1].lng } },
  { start: { lat: NODE_COORDS[1].lat, lng: NODE_COORDS[1].lng }, end: { lat: NODE_COORDS[2].lat, lng: NODE_COORDS[2].lng } },
];

// Matches the site's existing gold tokens (see the --gold-bright/--map values on .cor-diagram in
// swaqar.css) — passed as literal hex here rather than read from CSS, since WorldMap's colors are
// React props (baked into the generated SVG string / framer-motion stroke), not a CSS cascade.
// Keep these in sync with .cor-diagram's token block if that block ever changes.
const LINE_COLOR = '#d7b75c';
const DOT_COLOR = '#b8d3e8';

function nodeLabel(id: (typeof NODE_COORDS)[number]['id'], lang: Lang): string {
  switch (id) {
    case 'africa': return tx(t.corridors.map.africa, lang);
    case 'middle-east': return tx(t.corridors.map.middleEast, lang);
    case 'asia': return tx(t.corridors.map.asia, lang);
  }
}

function nodeDesc(id: (typeof NODE_COORDS)[number]['id'], lang: Lang): string {
  switch (id) {
    case 'africa': return tx(t.corridorsDiagram.africaDesc, lang);
    case 'middle-east': return tx(t.corridorsDiagram.middleEastDesc, lang);
    case 'asia': return tx(t.corridorsDiagram.asiaDesc, lang);
  }
}

export default function CorridorsDiagram({ lang }: { lang: Lang }) {
  const { width, height, positions } = useMemo(() => {
    const map = new DottedMap(WORLD_MAP_SETTINGS);
    const positions = Object.fromEntries(
      NODE_COORDS.map((n) => [n.id, map.addPin({ lat: n.lat, lng: n.lng, svgOptions: { radius: 0 } })])
    ) as Record<(typeof NODE_COORDS)[number]['id'], { x: number; y: number }>;
    return { width: map.image.width, height: map.image.height, positions };
  }, []);

  const pctX = (x: number) => `${(x / width) * 100}%`;
  const pctY = (y: number) => `${(y / height) * 100}%`;

  return (
    <div className="cor-diagram">
      <div className="cor-diagram-eyebrow">
        <span className="cor-diagram-eyebrow-line" />
        <span className="cor-diagram-eyebrow-txt">{tx(t.corridorsDiagram.eyebrow, lang)}</span>
        <span className="cor-diagram-eyebrow-line" />
      </div>

      <div className="cor-diagram-panel">
        {/* .cor-diagram-stage has no padding of its own — it's the exact box the label layer's
            percent positions, WorldMap's own box, and the node svg's viewBox all share. Padding
            lives on .cor-diagram-panel instead: putting it here too would put these layers in
            different coordinate spaces, skewing every label/node off WorldMap's line by the
            padding amount (the exact bug that shipped once already on the old hand-built arc). */}
        <div className="cor-diagram-stage">
          <WorldMap dots={MAP_DOTS} lineColor={LINE_COLOR} dotColor={DOT_COLOR} showPoints={false} />

          <svg className="cor-diagram-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            {NODE_COORDS.map((n) => {
              const p = positions[n.id];
              // Adjacent points sit only ~14 units apart in this projection (real geographic
              // distance, not the old hand-placed layout's ~128-unit spacing) — radii this small
              // are deliberate, not a typo. The first attempt reused the old layout's height*0.11/
              // 0.07 fractions and the three circles rendered on top of each other (caught by
              // screenshot: verified the actual projected distance is ~14 units before picking
              // these numbers, rather than guessing a second time).
              const r = n.hub ? height * 0.037 : height * 0.026;
              return (
                <g key={n.id} className={`cor-diagram-node${n.hub ? ' cor-diagram-node--hub' : ''}`}>
                  <circle className="cor-diagram-pulse cor-diagram-pulse--outer" cx={p.x} cy={p.y} r={r} />
                  <circle className="cor-diagram-pulse cor-diagram-pulse--inner" cx={p.x} cy={p.y} r={r} />
                  <circle className="cor-diagram-dot" cx={p.x} cy={p.y} r={r} />
                </g>
              );
            })}
          </svg>

          <div className="cor-diagram-labels">
            {NODE_COORDS.map((n) => {
              const p = positions[n.id];
              return (
                <div
                  key={n.id}
                  className={`cor-diagram-label${n.hub ? ' cor-diagram-label--hub' : ''}`}
                  style={{ left: pctX(p.x), top: pctY(p.y) }}
                >
                  <span className="cor-diagram-label-name">{nodeLabel(n.id, lang)}</span>
                  <span className="cor-diagram-label-desc">{nodeDesc(n.id, lang)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="cor-diagram-strap">
        <span className="cor-diagram-strap-line" />
        <div className="cor-diagram-strap-text">
          <span>{tx(t.corridorsDiagram.strapLine1, lang)}</span>
          <span>{tx(t.corridorsDiagram.strapLine2, lang)}</span>
        </div>
        <span className="cor-diagram-strap-line" />
      </div>
    </div>
  );
}
