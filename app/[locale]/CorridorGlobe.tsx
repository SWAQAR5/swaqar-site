'use client';
import { useEffect, useRef } from 'react';
import { t, tx, type Lang } from '@/lib/translations';

// Hero-dedicated globe visualization — the full 11/12-node corridor globe (Jeddah hub, core +
// secondary cities, animated routes, descriptor labels), owned exclusively by the homepage hero.
// Deliberately NOT shared with the Corridors section: Corridors renders its own, independent,
// simpler diagram component so the two never fork from a common file or drift into needing
// coordinated edits. If a city, a route, or the hero's descriptor copy changes, this is the only
// file that needs it — Corridors is untouched by definition, not by convention.
//
// Node positions are percent-of-image coordinates from the EXACT camera projection used to
// render hero-map.webp/png itself (fov 40, baseZ 18, rotY -153deg, rotX 17deg) — proper
// perspective projection matching the sphere's actual rotation, not a naive equirectangular
// lat/lon->x/y formula (which would be wrong for a perspective-rendered globe).
//
// Region + descriptor label pattern: hub/core nodes show city name + a smaller region tag + a
// one-line role descriptor beneath (translations.corridorsGlobe.* — flagged there as draft
// copy). Secondary nodes show name only, staying lower-emphasis rather than repeating the full
// 3-line stack 12 times over.
//
// Animation: RouteArc renders the always-visible static gold line (base geometry, motionless).
// MovingParticle is a separate overlay per route — a short bright dash within an otherwise
// near-invisible dasharray, animated via stroke-dashoffset (not SMIL animateMotion) for a
// continuous "flow" effect. PulseRing expands+fades on hub/core nodes only. Both purely-
// decorative animations are removed entirely under prefers-reduced-motion via CSS.
//
// Collision zones: this component doesn't know or care WHERE it's placed — the caller passes
// `textSafeSelectors`, a list of CSS selectors whose bounding boxes (padded) every label must
// clear. The hero passes its headline column AND its CTA buttons as two separate zones.

type Region = 'africa' | 'middle-east' | 'asia';
type Priority = 'hub' | 'core' | 'secondary';

interface CityNode {
  id: string;
  name: string;
  region: Region;
  x: number;
  y: number;
  priority: Priority;
}

interface NodeCoord {
  id: string;
  x: number;
  y: number;
  region: Region;
  priority: Priority;
}

const NODE_COORDS: NodeCoord[] = [
  { id: 'jeddah', x: 40.296, y: 45.299, region: 'middle-east', priority: 'hub' },
  { id: 'douala', x: 31.410, y: 54.426, region: 'africa', priority: 'core' },
  { id: 'lagos', x: 30.516, y: 51.545, region: 'africa', priority: 'core' },
  { id: 'dubai', x: 46.792, y: 43.203, region: 'middle-east', priority: 'core' },
  { id: 'mumbai', x: 54.281, y: 48.104, region: 'asia', priority: 'core' },
  { id: 'singapore', x: 65.867, y: 58.575, region: 'asia', priority: 'core' },
  { id: 'shanghai', x: 66.894, y: 34.956, region: 'asia', priority: 'core' },
  { id: 'cairo', x: 38.504, y: 38.180, region: 'middle-east', priority: 'secondary' },
  { id: 'istanbul', x: 39.554, y: 30.441, region: 'middle-east', priority: 'secondary' },
  { id: 'tehran', x: 45.775, y: 35.006, region: 'middle-east', priority: 'secondary' },
  { id: 'nairobi', x: 38.868, y: 62.736, region: 'africa', priority: 'secondary' },
  { id: 'johannesburg', x: 38.104, y: 76.220, region: 'africa', priority: 'secondary' },
];

const HUB_ROUTES: [string, string][] = ['douala', 'lagos', 'dubai', 'mumbai', 'singapore', 'shanghai'].map(
  (id) => ['jeddah', id] as [string, string]
);
const ILLUSTRATIVE_ROUTES: [string, string][] = [
  ['dubai', 'mumbai'],
  ['mumbai', 'singapore'],
  ['nairobi', 'douala'],
];
const ALL_ROUTES: [string, string][] = [...HUB_ROUTES, ...ILLUSTRATIVE_ROUTES];

function cityName(id: string, lang: Lang): string {
  switch (id) {
    case 'jeddah': return tx(t.hero.globe.jeddah, lang);
    case 'douala': return tx(t.hero.globe.douala, lang);
    case 'lagos': return tx(t.hero.globe.lagos, lang);
    case 'dubai': return tx(t.hero.globe.dubai, lang);
    case 'mumbai': return tx(t.hero.globe.mumbai, lang);
    case 'singapore': return tx(t.hero.globe.singapore, lang);
    case 'shanghai': return tx(t.hero.globe.shanghai, lang);
    case 'cairo': return tx(t.hero.globe.cairo, lang);
    case 'istanbul': return tx(t.hero.globe.istanbul, lang);
    case 'tehran': return tx(t.hero.globe.tehran, lang);
    case 'nairobi': return tx(t.hero.globe.nairobi, lang);
    case 'johannesburg': return tx(t.hero.globe.johannesburg, lang);
    default: return id;
  }
}

function regionLabel(region: Region, lang: Lang): string {
  switch (region) {
    case 'africa': return tx(t.corridors.map.africa, lang);
    case 'middle-east': return tx(t.corridors.map.middleEast, lang);
    case 'asia': return tx(t.corridors.map.asia, lang);
  }
}

function regionDescriptor(region: Region, priority: Priority, lang: Lang): string {
  if (priority === 'hub') return tx(t.corridorsGlobe.hubDescriptor, lang);
  switch (region) {
    case 'africa': return tx(t.corridorsGlobe.africaDescriptor, lang);
    case 'middle-east': return tx(t.corridorsGlobe.middleEastDescriptor, lang);
    case 'asia': return tx(t.corridorsGlobe.asiaDescriptor, lang);
  }
}

function pathD(a: NodeCoord, b: NodeCoord): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.abs(a.x - b.x) * 0.06 - 4;
  return `M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`;
}

function RouteArc({ id, d }: { id: string; d: string }) {
  return <path id={`cor-route-${id}`} className="cor-globe-route" d={d} />;
}

function MovingParticle({ d, delay }: { d: string; delay: number }) {
  return <path className="cor-globe-particle" d={d} style={{ animationDelay: `${delay}s` }} />;
}

function PulseRing({ x, y, priority }: { x: number; y: number; priority: Priority }) {
  if (priority === 'secondary') return null;
  return <circle className={`cor-globe-pulse cor-globe-pulse--${priority}`} cx={x} cy={y} r={priority === 'hub' ? 1.4 : 0.9} />;
}

function CityNode({ x, y, priority }: { x: number; y: number; priority: Priority }) {
  return (
    <g>
      <circle className={`cor-globe-halo cor-globe-halo--${priority}`} cx={x} cy={y} r={priority === 'hub' ? 1.1 : priority === 'core' ? 0.6 : 0.4} />
      <circle className={`cor-globe-dot cor-globe-dot--${priority}`} cx={x} cy={y} r={priority === 'hub' ? 0.65 : priority === 'core' ? 0.4 : 0.28} />
    </g>
  );
}

const REGION_CENTROIDS: Record<Region, { x: number; y: number }> = {
  'africa': { x: 34.72, y: 61.23 },
  'middle-east': { x: 42.18, y: 38.43 },
  'asia': { x: 62.35, y: 47.21 },
};
const REGIONS: Region[] = ['africa', 'middle-east', 'asia'];

function RegionLabel({
  region,
  lang,
  labelRef,
}: {
  region: Region;
  lang: Lang;
  labelRef: (el: HTMLDivElement | null) => void;
}) {
  const { x, y } = REGION_CENTROIDS[region];
  return (
    <div ref={labelRef} className="cor-globe-region-label" style={{ left: `${x}%`, top: `${y}%` }}>
      {regionLabel(region, lang)}
    </div>
  );
}

function CityLabel({
  node,
  lang,
  labelRef,
}: {
  node: CityNode;
  lang: Lang;
  labelRef: (el: HTMLDivElement | null) => void;
}) {
  const showDetail = node.priority !== 'secondary';
  return (
    <div
      ref={labelRef}
      className={`cor-globe-label cor-globe-label--${node.priority}`}
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <span className="cor-globe-label-name">{node.name}</span>
      {showDetail && <span className="cor-globe-label-region">{regionLabel(node.region, lang)}</span>}
      {showDetail && <span className="cor-globe-label-desc">{regionDescriptor(node.region, node.priority, lang)}</span>}
    </div>
  );
}

export default function CorridorGlobe({
  lang,
  textSafeSelectors,
  showSecondary = true,
}: {
  lang: Lang;
  /** CSS selectors whose (padded) bounding boxes every label must clear. The hero passes its
   * headline column AND its CTA buttons as two separate zones. */
  textSafeSelectors: string[];
  /** false = hub+core only (7 nodes) — a reduced-density option for a placement with a
   * competing text column, rather than relying on overlap-suppression alone to thin out
   * secondary nodes. Defaults to true (all 12), the hero's current density. */
  showSecondary?: boolean;
}) {
  const labelLayerRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const visibleCoords = showSecondary ? NODE_COORDS : NODE_COORDS.filter((c) => c.priority !== 'secondary');
  const nodes: CityNode[] = visibleCoords.map((c) => ({
    id: c.id,
    name: cityName(c.id, lang),
    region: c.region,
    x: c.x,
    y: c.y,
    priority: c.priority,
  }));
  const byId = Object.fromEntries(NODE_COORDS.map((c) => [c.id, c]));
  const visibleIds = new Set(visibleCoords.map((c) => c.id));
  const visibleRoutes = ALL_ROUTES.filter(([a, b]) => visibleIds.has(a) && visibleIds.has(b));

  // Overlap suppression — two passes: (1) hide a label if it collides with ANY of the caller's
  // text-safe zones; (2) hide a label if it collides with another label already kept visible,
  // processing nodes in priority order (hub, then core, then secondary; region labels last) so
  // a lower-priority label always yields, never the reverse.
  useEffect(() => {
    function update() {
      const textSafeZones = textSafeSelectors
        .map((sel) => document.querySelector(sel))
        .filter((el): el is Element => !!el)
        .map((el) => {
          const r = el.getBoundingClientRect();
          return { left: r.left - 14, right: r.right + 14, top: r.top - 10, bottom: r.bottom + 14 };
        });

      labelRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const overlapsText = textSafeZones.some((z) => r.left < z.right && r.right > z.left && r.top < z.bottom && r.bottom > z.top);
        el.style.opacity = overlapsText ? '0' : '1';
      });

      // Padded by a few px on every side, not a bare rect intersection — two labels only 3-5px
      // apart pass a strict "do these rects touch" test but still read as visually cluttered
      // (confirmed on /ar, where shorter Arabic text let two region-tag lines land close enough
      // to blur together under their own text-shadow glow even though their raw boxes didn't
      // technically intersect). This margin is what actually fixes that.
      const LABEL_MARGIN = 6;
      const keptRects: { left: number; right: number; top: number; bottom: number }[] = [];
      labelRefs.current.forEach((el) => {
        if (!el || el.style.opacity === '0') return;
        const rr = el.getBoundingClientRect();
        const r = { left: rr.left - LABEL_MARGIN, right: rr.right + LABEL_MARGIN, top: rr.top - LABEL_MARGIN, bottom: rr.bottom + LABEL_MARGIN };
        const overlapsKept = keptRects.some((k) => r.left < k.right && r.right > k.left && r.top < k.bottom && r.bottom > k.top);
        if (overlapsKept) {
          el.style.opacity = '0';
        } else {
          keptRects.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
        }
      });
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    document.fonts?.ready?.then(update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [lang, textSafeSelectors]);

  return (
    <>
      <picture>
        <source srcSet="/hero-map.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element -- fixed decorative background, not a Next/Image-managed content image */}
        <img src="/hero-map.png" alt="" className="cor-globe-img" />
      </picture>

      <svg className="cor-globe-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {visibleRoutes.map(([a, b]) => {
          const d = pathD(byId[a], byId[b]);
          const id = `${a}-${b}`;
          return <RouteArc key={id} id={id} d={d} />;
        })}
        {visibleRoutes.map(([a, b], i) => (
          <MovingParticle key={`p-${a}-${b}`} d={pathD(byId[a], byId[b])} delay={i * 0.4} />
        ))}
        {nodes.map((n) => (
          <PulseRing key={`pulse-${n.id}`} x={n.x} y={n.y} priority={n.priority} />
        ))}
        {nodes.map((n) => (
          <CityNode key={`dot-${n.id}`} x={n.x} y={n.y} priority={n.priority} />
        ))}
      </svg>

      <div className="cor-globe-label-layer" ref={labelLayerRef}>
        {nodes.map((n, i) => (
          <CityLabel key={n.id} node={n} lang={lang} labelRef={(el) => { labelRefs.current[i] = el; }} />
        ))}
        {REGIONS.map((r, i) => (
          <RegionLabel key={r} region={r} lang={lang} labelRef={(el) => { labelRefs.current[nodes.length + i] = el; }} />
        ))}
      </div>
    </>
  );
}
