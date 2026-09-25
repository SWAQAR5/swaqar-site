'use client';
import { t, tx, type Lang } from '@/lib/translations';

// Corridors' own 3-node diagram — self-contained, deliberately NOT built on or sharing any code
// with CorridorGlobe.tsx (the hero's dense 12-node globe). Three fixed region nodes (Africa,
// Middle East as the larger/dominant hub, Asia) joined by one continuous gold arc, no per-
// viewport overlap suppression needed (unlike the hero) since three non-competing labels at
// fixed, well-spaced positions never collide with each other or with any surrounding text at
// any width — the whole reason this component doesn't need the hero's JS collision-detection
// machinery at all.
//
// Node/waypoint coordinates below are hand-placed points on a single continuous path
// (M72,128 Q136,56 200,72 Q264,56 328,128) rather than data-driven, since there are only ever
// these three fixed regions — no future "add a city" edit is expected here the way there is on
// the hero's dense globe.
//
// viewBox is 400x200, not the more usual 0-100 percentage grid: the spec's exact
// stroke-dasharray:22 38 / dashoffset:-120 values are a matched set (120 = 2 x (22+38), for a
// seamless loop) sized for a path with real length in the hundreds of units. On a 0-100 grid
// this arc is only ~80-90 units long, so a 60-unit dash-repeat leaves most of it sitting in the
// "off" phase at any given moment — it read as a broken, disconnected line rather than a flowing
// arc (caught by screenshot, not assumed). Scaling the whole coordinate space up 4x instead of
// rescaling the given dasharray/dashoffset numbers keeps those exact spec values intact.
const NODES = [
  { id: 'africa', x: 72, y: 128, hub: false },
  { id: 'middle-east', x: 200, y: 72, hub: true },
  { id: 'asia', x: 328, y: 128, hub: false },
] as const;

const WAYPOINTS = [
  { x: 136, y: 78 },
  { x: 264, y: 78 },
];

const ARC_D = 'M72,128 Q136,56 200,72 Q264,56 328,128';

// Node x/y above are in raw SVG viewBox units (0-400 / 0-200), not percent — the label layer is
// a plain HTML overlay sized to match the panel's own box, so it needs a real unit conversion,
// not the viewBox numbers used directly as CSS percentages (that bug shipped once already here:
// with a non-square viewBox, y=128 became "top:128%", pushing the label below the whole panel).
const VIEWBOX_W = 400;
const VIEWBOX_H = 200;
const pctX = (x: number) => `${(x / VIEWBOX_W) * 100}%`;
const pctY = (y: number) => `${(y / VIEWBOX_H) * 100}%`;

function nodeLabel(id: (typeof NODES)[number]['id'], lang: Lang): string {
  switch (id) {
    case 'africa': return tx(t.corridors.map.africa, lang);
    case 'middle-east': return tx(t.corridors.map.middleEast, lang);
    case 'asia': return tx(t.corridors.map.asia, lang);
  }
}

function nodeDesc(id: (typeof NODES)[number]['id'], lang: Lang): string {
  switch (id) {
    case 'africa': return tx(t.corridorsDiagram.africaDesc, lang);
    case 'middle-east': return tx(t.corridorsDiagram.middleEastDesc, lang);
    case 'asia': return tx(t.corridorsDiagram.asiaDesc, lang);
  }
}

export default function CorridorsDiagram({ lang }: { lang: Lang }) {
  return (
    <div className="cor-diagram">
      <div className="cor-diagram-eyebrow">
        <span className="cor-diagram-eyebrow-line" />
        <span className="cor-diagram-eyebrow-txt">{tx(t.corridorsDiagram.eyebrow, lang)}</span>
        <span className="cor-diagram-eyebrow-line" />
      </div>

      <div className="cor-diagram-panel">
        {/* .cor-diagram-stage has no padding of its own — it's the exact box the label layer's
            percent positions and the svg's viewBox share. Padding lives on .cor-diagram-panel
            instead: putting it on this element too would put the svg and the label layer in two
            different coordinate spaces (svg = padded content box, labels = whole panel including
            padding), skewing every label off its dot by the padding amount. */}
        <div className="cor-diagram-stage">
          <svg className="cor-diagram-svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <path className="cor-diagram-arc" d={ARC_D} />
            {WAYPOINTS.map((w, i) => (
              <circle key={i} className="cor-diagram-waypoint-pulse" cx={w.x} cy={w.y} r={4} />
            ))}
            {WAYPOINTS.map((w, i) => (
              <circle key={`dot-${i}`} className="cor-diagram-waypoint-dot" cx={w.x} cy={w.y} r={2.5} />
            ))}
            {NODES.map((n) => (
              <g key={n.id} className={`cor-diagram-node${n.hub ? ' cor-diagram-node--hub' : ''}`}>
                <circle className="cor-diagram-pulse cor-diagram-pulse--outer" cx={n.x} cy={n.y} r={n.hub ? 11 : 7} />
                <circle className="cor-diagram-pulse cor-diagram-pulse--inner" cx={n.x} cy={n.y} r={n.hub ? 11 : 7} />
                <circle className="cor-diagram-dot" cx={n.x} cy={n.y} r={n.hub ? 11 : 7} />
              </g>
            ))}
          </svg>

          <div className="cor-diagram-labels">
            {NODES.map((n) => (
              <div
                key={n.id}
                className={`cor-diagram-label${n.hub ? ' cor-diagram-label--hub' : ''}`}
                style={{ left: pctX(n.x), top: pctY(n.y) }}
              >
                <span className="cor-diagram-label-name">{nodeLabel(n.id, lang)}</span>
                <span className="cor-diagram-label-desc">{nodeDesc(n.id, lang)}</span>
              </div>
            ))}
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
