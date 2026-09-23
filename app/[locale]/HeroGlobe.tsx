'use client';
import { useEffect, useRef } from 'react';
import { t, tx, type Lang } from '@/lib/translations';

// Hero/page background — Stage 6: static map rebuild (brand exception, still hero-only in
// spirit, but the resulting IMAGE is applied as a fixed backdrop behind the whole home page —
// see .hero-map-frame in swaqar.css). The live Three.js globe (WebGL rendering, rotation,
// texture fetch/SRI hardening, 3D-specific reduced-motion handling) has been removed entirely,
// not paused — this component now renders a single pre-rendered image (exported from that same
// scene at a fixed camera/rotation, see the export tooling notes in the implementation summary)
// plus two lightweight overlays on top of it:
//   - a percent-positioned DOM label layer, so city/region names stay LIVE and localized
//     through lib/translations.ts (unchanged from the previous round) instead of being baked
//     into the image;
//   - a percent-coordinate SVG overlay tracing the exact same corridor curves and node
//     positions baked into the image (captured from the same export pass, not re-traced by
//     eye), plus a CSS-keyframe pulsing halo on each city dot.
// Both overlays sit inside .hero-map-surface, which is sized with the same object-fit:cover
// math as the image itself (see swaqar.css) so everything stays pixel-aligned at any viewport
// size without a resize handler.
//
// Production fix — no traveling dots: this used to also animate a pair of small dots per
// corridor along the line (SMIL <animateMotion>), which read as generic "leftover placeholder"
// motion rather than a deliberate design choice. The corridor arcs are gold 3D tube meshes
// baked directly into the export image itself (not just this SVG retrace), so removing the
// traveling dots leaves clean, static, continuous gold lines — the only markers left anywhere
// are the glowing dot + pulsing halo exactly at each city's position, matching the reference.
//
// Reduced motion: the CSS media query disables the halo keyframe animation (swaqar.css) —
// no JS branching needed, unlike the old 3D version.
//
// Label suppression: unlike the old live-projected version, label positions are fixed percent
// constants (they don't need per-frame recomputation), but .hero-body is normal in-flow text
// that scrolls away while this layer stays position:fixed — so whether a given label overlaps
// the (currently on-screen) hero copy is checked on mount/scroll/resize and only ever matters
// while the hero is still in view.

interface NodeDef {
  id: string;
  xPct: number;
  yPct: number;
  kind: 'city' | 'region';
}

// Percent-of-image coordinates captured directly from the static export's render pass (same
// camera/rotation used to bake the image) — not eyeballed. Re-captured for the wide-framing fix:
// fov 40, baseZ 18, rotY -153deg, rotX 17deg, 3200x1800 (previous baseZ 13/rotY -148 pulled
// Abuja/Douala/Johannesburg/Shanghai too close to the sphere's limb — near-horizon grazing
// angles that read as "out of frame" even though their raw 2D projection was technically
// on-canvas. Re-solved by minimizing the worst-case angular distance from camera-facing point
// across all 12 cities, then picking the smallest baseZ that keeps every city's facing >= ~0.36
// and >=18% margin from every edge, so the whole network — Europe through East Asia — reads at
// a glance without any city sitting in the foreshortened, hard-to-read edge of the globe.
const NODE_DEFS: NodeDef[] = [
  { id: 'istanbul', xPct: 39.554, yPct: 30.441, kind: 'city' },
  { id: 'cairo', xPct: 38.504, yPct: 38.180, kind: 'city' },
  { id: 'tehran', xPct: 45.775, yPct: 35.006, kind: 'city' },
  { id: 'dubai', xPct: 46.792, yPct: 43.203, kind: 'city' },
  { id: 'mumbai', xPct: 54.281, yPct: 48.104, kind: 'city' },
  { id: 'nairobi', xPct: 38.868, yPct: 62.736, kind: 'city' },
  { id: 'shanghai', xPct: 66.894, yPct: 34.956, kind: 'city' },
  { id: 'singapore', xPct: 65.867, yPct: 58.575, kind: 'city' },
  { id: 'jeddah', xPct: 40.296, yPct: 45.299, kind: 'city' },
  { id: 'abuja', xPct: 31.112, yPct: 50.505, kind: 'city' },
  { id: 'douala', xPct: 31.410, yPct: 54.426, kind: 'city' },
  { id: 'johannesburg', xPct: 38.104, yPct: 76.220, kind: 'city' },
  { id: 'europe', xPct: 40.443, yPct: 35.609, kind: 'region' },
  { id: 'middleEast', xPct: 47.974, yPct: 41.022, kind: 'region' },
  { id: 'asia', xPct: 57.460, yPct: 40.547, kind: 'region' },
  { id: 'africa', xPct: 36.581, yPct: 51.837, kind: 'region' },
];

// Each corridor's exact curve, sampled at 21 points from the same export pass (percent-of-
// image [x,y] pairs) — the SVG path below draws straight segments between them, which at this
// sample density reproduces the original quadratic-bezier arc with no visible faceting.
const CORRIDOR_PATHS: Record<string, [number, number][]> = {
  istanbul_cairo: [[39.554,30.441],[39.349,30.445],[39.143,30.469],[38.937,30.518],[38.732,30.598],[38.529,30.716],[38.329,30.882],[38.138,31.113],[37.961,31.426],[37.811,31.842],[37.705,32.366],[37.654,32.972],[37.656,33.612],[37.701,34.25],[37.776,34.872],[37.871,35.471],[37.981,36.049],[38.102,36.607],[38.23,37.147],[38.365,37.671],[38.504,38.18]],
  cairo_nairobi: [[38.504,38.18],[38.204,39.156],[37.917,40.189],[37.648,41.283],[37.4,42.439],[37.179,43.659],[36.99,44.941],[36.839,46.28],[36.731,47.669],[36.673,49.094],[36.668,50.537],[36.716,51.978],[36.816,53.396],[36.964,54.775],[37.155,56.101],[37.382,57.367],[37.639,58.568],[37.92,59.703],[38.222,60.775],[38.539,61.784],[38.868,62.736]],
  istanbul_tehran: [[39.554,30.441],[39.626,30.26],[39.716,30.097],[39.827,29.958],[39.964,29.847],[40.13,29.772],[40.331,29.741],[40.572,29.764],[40.858,29.853],[41.189,30.017],[41.563,30.261],[41.971,30.582],[42.402,30.969],[42.844,31.407],[43.287,31.881],[43.725,32.38],[44.156,32.894],[44.576,33.418],[44.986,33.946],[45.386,34.476],[45.775,35.006]],
  tehran_dubai: [[45.775,35.006],[45.747,35.089],[45.722,35.193],[45.7,35.323],[45.683,35.483],[45.672,35.681],[45.669,35.927],[45.677,36.235],[45.699,36.622],[45.741,37.103],[45.805,37.677],[45.89,38.313],[45.988,38.96],[46.091,39.588],[46.195,40.184],[46.298,40.748],[46.401,41.284],[46.501,41.794],[46.6,42.283],[46.696,42.751],[46.792,43.203]],
  dubai_mumbai: [[46.792,43.203],[47.07,43.289],[47.366,43.39],[47.684,43.507],[48.024,43.643],[48.389,43.801],[48.782,43.985],[49.204,44.199],[49.654,44.445],[50.126,44.722],[50.61,45.028],[51.092,45.355],[51.557,45.69],[51.996,46.026],[52.405,46.356],[52.782,46.676],[53.129,46.984],[53.45,47.281],[53.748,47.566],[54.024,47.84],[54.281,48.104]],
  nairobi_mumbai: [[38.868,62.736],[39.325,62.375],[39.825,61.971],[40.372,61.519],[40.969,61.015],[41.617,60.455],[42.319,59.838],[43.074,59.162],[43.878,58.429],[44.726,57.643],[45.61,56.811],[46.52,55.943],[47.443,55.05],[48.367,54.143],[49.284,53.234],[50.184,52.331],[51.061,51.442],[51.912,50.572],[52.732,49.724],[53.522,48.901],[54.281,48.104]],
  nairobi_singapore: [[38.868,62.736],[40.091,63.183],[41.382,63.592],[42.738,63.956],[44.16,64.265],[45.642,64.51],[47.177,64.679],[48.754,64.765],[50.359,64.758],[51.974,64.654],[53.578,64.449],[55.15,64.147],[56.671,63.752],[58.124,63.274],[59.496,62.724],[60.781,62.116],[61.974,61.461],[63.076,60.77],[64.089,60.053],[65.018,59.319],[65.867,58.575]],
  mumbai_shanghai: [[54.281,48.104],[55.275,47.167],[56.271,46.222],[57.266,45.272],[58.252,44.323],[59.222,43.38],[60.168,42.452],[61.08,41.548],[61.946,40.677],[62.757,39.85],[63.501,39.078],[64.17,38.368],[64.76,37.728],[65.268,37.159],[65.697,36.661],[66.05,36.233],[66.333,35.869],[66.552,35.566],[66.714,35.316],[66.826,35.115],[66.894,34.956]],
  mumbai_singapore: [[54.281,48.104],[55.098,48.663],[55.925,49.239],[56.759,49.833],[57.596,50.443],[58.431,51.067],[59.257,51.702],[60.066,52.343],[60.848,52.985],[61.592,53.62],[62.287,54.238],[62.923,54.834],[63.495,55.398],[64,55.926],[64.436,56.416],[64.808,56.866],[65.119,57.277],[65.374,57.65],[65.581,57.99],[65.743,58.297],[65.867,58.575]],
  shanghai_singapore: [[66.894,34.956],[67.296,35.771],[67.678,36.641],[68.034,37.573],[68.358,38.568],[68.645,39.631],[68.886,40.762],[69.074,41.96],[69.2,43.219],[69.258,44.53],[69.243,45.882],[69.154,47.256],[68.993,48.636],[68.763,50.006],[68.473,51.352],[68.129,52.664],[67.74,53.936],[67.313,55.164],[66.855,56.346],[66.371,57.483],[65.867,58.575]],
  istanbul_shanghai: [[39.554,30.441],[40.906,29.558],[42.318,28.736],[43.788,27.99],[45.314,27.333],[46.889,26.784],[48.504,26.359],[50.148,26.074],[51.803,25.944],[53.452,25.98],[55.073,26.185],[56.646,26.559],[58.152,27.091],[59.575,27.768],[60.906,28.57],[62.14,29.478],[63.275,30.471],[64.313,31.531],[65.259,32.641],[66.117,33.786],[66.894,34.956]],
  cairo_jeddah: [[38.504,38.18],[38.392,38.275],[38.286,38.388],[38.188,38.523],[38.099,38.683],[38.023,38.876],[37.963,39.109],[37.928,39.393],[37.926,39.742],[37.971,40.168],[38.072,40.667],[38.23,41.212],[38.428,41.762],[38.649,42.291],[38.881,42.791],[39.117,43.263],[39.355,43.709],[39.592,44.133],[39.829,44.538],[40.063,44.926],[40.296,45.299]],
  jeddah_dubai: [[40.296,45.299],[40.396,45.12],[40.515,44.937],[40.655,44.752],[40.82,44.563],[41.016,44.373],[41.246,44.181],[41.519,43.991],[41.84,43.807],[42.21,43.633],[42.626,43.48],[43.073,43.352],[43.534,43.255],[43.993,43.186],[44.44,43.143],[44.872,43.12],[45.287,43.114],[45.685,43.122],[46.068,43.14],[46.436,43.168],[46.792,43.203]],
  douala_abuja: [[31.41,54.426],[31.183,54.341],[30.955,54.249],[30.728,54.148],[30.502,54.035],[30.276,53.909],[30.053,53.763],[29.834,53.59],[29.625,53.378],[29.441,53.097],[29.336,52.715],[29.383,52.312],[29.522,51.99],[29.696,51.728],[29.884,51.502],[30.081,51.302],[30.283,51.12],[30.488,50.952],[30.695,50.794],[30.903,50.646],[31.112,50.505]],
  abuja_nairobi: [[31.112,50.505],[31.013,51.113],[30.946,51.743],[30.917,52.397],[30.93,53.073],[30.994,53.77],[31.114,54.486],[31.299,55.217],[31.554,55.957],[31.883,56.696],[32.287,57.424],[32.762,58.132],[33.302,58.808],[33.898,59.447],[34.539,60.044],[35.216,60.596],[35.919,61.103],[36.641,61.569],[37.376,61.994],[38.12,62.382],[38.868,62.736]],
  nairobi_johannesburg: [[38.868,62.736],[38.554,63.791],[38.251,64.853],[37.962,65.918],[37.692,66.981],[37.443,68.036],[37.221,69.074],[37.031,70.084],[36.88,71.05],[36.772,71.955],[36.711,72.784],[36.699,73.523],[36.734,74.161],[36.812,74.699],[36.927,75.139],[37.074,75.49],[37.246,75.76],[37.439,75.959],[37.649,76.097],[37.871,76.181],[38.104,76.22]],
};

function nodeName(id: string, lang: Lang): string {
  switch (id) {
    case 'istanbul': return tx(t.hero.globe.istanbul, lang);
    case 'cairo': return tx(t.hero.globe.cairo, lang);
    case 'tehran': return tx(t.hero.globe.tehran, lang);
    case 'dubai': return tx(t.hero.globe.dubai, lang);
    case 'mumbai': return tx(t.hero.globe.mumbai, lang);
    case 'nairobi': return tx(t.hero.globe.nairobi, lang);
    case 'shanghai': return tx(t.hero.globe.shanghai, lang);
    case 'singapore': return tx(t.hero.globe.singapore, lang);
    case 'jeddah': return tx(t.hero.globe.jeddah, lang);
    case 'abuja': return tx(t.hero.globe.abuja, lang);
    case 'douala': return tx(t.hero.globe.douala, lang);
    case 'johannesburg': return tx(t.hero.globe.johannesburg, lang);
    case 'europe': return tx(t.hero.globe.europe, lang);
    case 'middleEast': return tx(t.corridors.map.middleEast, lang);
    case 'asia': return tx(t.corridors.map.asia, lang);
    case 'africa': return tx(t.corridors.map.africa, lang);
    default: return id;
  }
}

function pathD(points: [number, number][]): string {
  return points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
}

export default function HeroGlobe({ lang }: { lang: Lang }) {
  const labelLayerRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Label suppression against the hero copy: this layer is position:fixed (it doesn't scroll),
  // while .hero-body is normal in-flow text that scrolls away — so a label only ever risks
  // overlapping the copy while the hero is still in view. Recomputed on mount/scroll/resize;
  // cheap (a few getBoundingClientRect reads), no per-frame cost.
  //
  // Found during validation: once the map image/pulses became a whole-page backdrop (founder
  // decision), the bright uppercase city/region labels — a hero-specific annotation layer —
  // started bleeding through the now-transparent .gap section with no scrim, clashing directly
  // with that section's own heading. The quieter image/corridor-lines/pulses working as an
  // ambient backdrop everywhere is exactly what was asked for; the labels specifically were
  // never meant to float behind unrelated page copy. Fix: hide the whole label layer once the
  // hero has scrolled out of view, not just the per-label hero-body/nav overlap check below.
  useEffect(() => {
    function update() {
      const hero = document.querySelector('.hero');
      const heroVisible = hero ? hero.getBoundingClientRect().bottom > 0 : true;
      if (labelLayerRef.current) labelLayerRef.current.style.opacity = heroVisible ? '1' : '0';
      if (!heroVisible) return;

      const body = document.querySelector('.hero-body');
      const banner = document.querySelector('.banner');
      const nav = document.getElementById('nav');
      const bodyRect = body?.getBoundingClientRect() ?? null;
      const navBottom = Math.max(banner?.getBoundingClientRect().bottom ?? 0, nav?.getBoundingClientRect().bottom ?? 0);

      const textSafe = bodyRect
        ? { left: bodyRect.left - 14, right: bodyRect.right + 34, top: bodyRect.top - 22, bottom: bodyRect.bottom + 10 }
        : null;
      const navSafe = { left: 0, right: window.innerWidth, top: 0, bottom: navBottom + 18 };

      labelRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const overlapsText = !!textSafe && r.left < textSafe.right && r.right > textSafe.left && r.top < textSafe.bottom && r.bottom > textSafe.top;
        const overlapsNav = r.left < navSafe.right && r.right > navSafe.left && r.top < navSafe.bottom && r.bottom > navSafe.top;
        el.style.opacity = overlapsText || overlapsNav ? '0' : '1';
      });

      // Second pass — label-vs-label overlap: the "contained, whole image always visible" hero
      // layout (no more cropping/zooming into a sub-region) means the full 16-label spread can
      // render small enough that neighboring labels collide (Dubai/Jeddah/Middle East/Tehran/
      // Europe sit close together in real geography, hence in percent-space too). Rather than
      // force the box bigger (which would either shrink the headline's clearance or make the
      // globe bleed off an edge again — the exact thing this round moved away from), hide a
      // later label if it collides with one already kept visible. NODE_DEFS order is the
      // priority: cities first, region labels last, so a region label only ever yields to a
      // city, never the other way around. Runs after the text/nav pass above so only labels
      // still visible at this point are considered.
      const keptRects: { left: number; right: number; top: number; bottom: number }[] = [];
      labelRefs.current.forEach((el) => {
        if (!el || el.style.opacity === '0') return;
        const r = el.getBoundingClientRect();
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
  }, [lang]);

  const cityNodes = NODE_DEFS.filter((n) => n.kind === 'city');

  return (
    <div className="hero-map-frame" aria-hidden="true">
      <div className="hero-map-surface">
        <picture>
          <source srcSet="/hero-map.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed decorative background, not a Next/Image-managed content image */}
          <img src="/hero-map.png" alt="" className="hero-map-img" />
        </picture>

        <svg className="hero-map-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Object.entries(CORRIDOR_PATHS).map(([key, points]) => (
            <path key={key} id={`corridor-${key}`} className="hero-map-corridor" d={pathD(points)} />
          ))}
          {cityNodes.map((n) => (
            <g key={n.id}>
              <circle className="hero-map-halo" cx={n.xPct} cy={n.yPct} r="0.5" />
              <circle className="hero-map-dot" cx={n.xPct} cy={n.yPct} r="0.35" />
            </g>
          ))}
        </svg>

        <div className="hero-map-label-layer" ref={labelLayerRef}>
          {NODE_DEFS.map((n, i) => (
            <div
              key={n.id}
              ref={(el) => { labelRefs.current[i] = el; }}
              className={n.kind === 'region' ? 'hero-region-label' : 'hero-node-label'}
              style={{ left: `${n.xPct}%`, top: `${n.yPct}%` }}
            >
              {nodeName(n.id, lang)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
