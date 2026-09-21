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
//     eye), animating the traveling gold pulses (SMIL <animateMotion>, no JS per-frame cost)
//     and a CSS-keyframe pulsing halo on each city dot.
// Both overlays sit inside .hero-map-surface, which is sized with the same object-fit:cover
// math as the image itself (see swaqar.css) so everything stays pixel-aligned at any viewport
// size without a resize handler.
//
// Reduced motion: the CSS media query alone disables the SMIL pulses (display:none) and the
// halo keyframe animation (swaqar.css) — no JS branching needed, unlike the old 3D version.
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
// camera/rotation used to bake the image) — not eyeballed. See export config in the
// implementation summary: fov 40, baseZ 13, rotY -148deg, rotX 23deg, 3200x1800.
const NODE_DEFS: NodeDef[] = [
  { id: 'istanbul', xPct: 35.585, yPct: 25.764, kind: 'city' },
  { id: 'cairo', xPct: 34.305, yPct: 38.633, kind: 'city' },
  { id: 'tehran', xPct: 46.125, yPct: 33.569, kind: 'city' },
  { id: 'dubai', xPct: 48.178, yPct: 47.085, kind: 'city' },
  { id: 'mumbai', xPct: 60.095, yPct: 54.140, kind: 'city' },
  { id: 'nairobi', xPct: 35.880, yPct: 76.753, kind: 'city' },
  { id: 'shanghai', xPct: 76.021, yPct: 30.166, kind: 'city' },
  { id: 'singapore', xPct: 75.465, yPct: 65.820, kind: 'city' },
  { id: 'jeddah', xPct: 37.611, yPct: 50.439, kind: 'city' },
  { id: 'abuja', xPct: 23.045, yPct: 56.260, kind: 'city' },
  { id: 'douala', xPct: 23.711, yPct: 62.224, kind: 'city' },
  { id: 'johannesburg', xPct: 34.838, yPct: 92.735, kind: 'city' },
  { id: 'europe', xPct: 37.370, yPct: 34.499, kind: 'region' },
  { id: 'middleEast', xPct: 50.000, yPct: 43.457, kind: 'region' },
  { id: 'asia', xPct: 64.604, yPct: 41.543, kind: 'region' },
  { id: 'africa', xPct: 31.801, yPct: 60.291, kind: 'region' },
];

// Each corridor's exact curve, sampled at 21 points from the same export pass (percent-of-
// image [x,y] pairs) — the SVG path below draws straight segments between them, which at this
// sample density reproduces the original quadratic-bezier arc with no visible faceting.
const CORRIDOR_PATHS: Record<string, [number, number][]> = {
  istanbul_cairo: [[35.585,25.764],[35.274,25.842],[34.962,25.954],[34.649,26.106],[34.337,26.309],[34.027,26.574],[33.725,26.919],[33.437,27.366],[33.174,27.946],[32.957,28.685],[32.813,29.586],[32.759,30.598],[32.792,31.644],[32.891,32.667],[33.036,33.645],[33.211,34.575],[33.407,35.46],[33.618,36.304],[33.84,37.112],[34.07,37.887],[34.305,38.633]],
  cairo_nairobi: [[34.305,38.633],[33.887,40.36],[33.49,42.181],[33.122,44.098],[32.788,46.111],[32.498,48.217],[32.26,50.409],[32.084,52.671],[31.98,54.983],[31.955,57.315],[32.013,59.631],[32.155,61.893],[32.377,64.068],[32.67,66.128],[33.024,68.055],[33.429,69.84],[33.873,71.483],[34.347,72.987],[34.844,74.361],[35.357,75.613],[35.88,76.753]],
  istanbul_tehran: [[35.585,25.764],[35.724,25.559],[35.895,25.383],[36.103,25.243],[36.354,25.145],[36.656,25.103],[37.018,25.128],[37.448,25.237],[37.952,25.444],[38.532,25.764],[39.182,26.202],[39.886,26.751],[40.621,27.391],[41.368,28.099],[42.109,28.851],[42.834,29.629],[43.539,30.42],[44.221,31.214],[44.878,32.006],[45.513,32.792],[46.125,33.569]],
  tehran_dubai: [[46.125,33.569],[46.134,33.8],[46.148,34.066],[46.169,34.374],[46.198,34.733],[46.237,35.154],[46.29,35.653],[46.359,36.249],[46.45,36.967],[46.568,37.825],[46.713,38.811],[46.877,39.862],[47.047,40.9],[47.213,41.878],[47.372,42.784],[47.523,43.624],[47.666,44.404],[47.803,45.135],[47.933,45.821],[48.058,46.47],[48.178,47.085]],
  dubai_mumbai: [[48.178,47.085],[48.693,47.346],[49.238,47.626],[49.818,47.928],[50.434,48.253],[51.089,48.604],[51.786,48.982],[52.524,49.39],[53.297,49.825],[54.092,50.282],[54.889,50.749],[55.661,51.211],[56.385,51.654],[57.046,52.069],[57.642,52.451],[58.174,52.8],[58.649,53.118],[59.072,53.408],[59.45,53.673],[59.79,53.916],[60.095,54.14]],
  nairobi_mumbai: [[35.88,76.753],[36.637,76.564],[37.467,76.291],[38.376,75.923],[39.367,75.448],[40.444,74.853],[41.607,74.128],[42.854,73.264],[44.178,72.257],[45.567,71.108],[47.002,69.826],[48.465,68.427],[49.934,66.931],[51.386,65.364],[52.805,63.751],[54.176,62.114],[55.49,60.474],[56.74,58.845],[57.925,57.241],[59.043,55.671],[60.095,54.14]],
  nairobi_singapore: [[35.88,76.753],[37.871,77.682],[39.972,78.524],[42.179,79.258],[44.485,79.863],[46.879,80.314],[49.341,80.586],[51.848,80.659],[54.368,80.514],[56.866,80.14],[59.301,79.538],[61.637,78.716],[63.84,77.695],[65.888,76.502],[67.763,75.167],[69.459,73.725],[70.979,72.204],[72.328,70.632],[73.517,69.033],[74.558,67.424],[75.465,65.82]],
  mumbai_shanghai: [[60.095,54.14],[61.663,52.629],[63.222,51.083],[64.761,49.508],[66.267,47.911],[67.726,46.304],[69.118,44.698],[70.427,43.11],[71.632,41.559],[72.715,40.064],[73.662,38.644],[74.463,37.317],[75.115,36.096],[75.62,34.988],[75.987,33.995],[76.227,33.116],[76.356,32.344],[76.386,31.672],[76.332,31.091],[76.206,30.592],[76.021,30.166]],
  mumbai_singapore: [[60.095,54.14],[61.43,55.029],[62.769,55.927],[64.105,56.831],[65.428,57.736],[66.728,58.633],[67.988,59.515],[69.194,60.371],[70.326,61.189],[71.367,61.957],[72.299,62.662],[73.11,63.296],[73.795,63.852],[74.352,64.328],[74.788,64.726],[75.112,65.052],[75.336,65.311],[75.472,65.51],[75.532,65.657],[75.526,65.758],[75.465,65.82]],
  shanghai_singapore: [[76.021,30.166],[76.737,31.448],[77.423,32.818],[78.07,34.28],[78.669,35.841],[79.207,37.503],[79.673,39.266],[80.052,41.126],[80.33,43.074],[80.495,45.094],[80.537,47.162],[80.454,49.252],[80.247,51.337],[79.924,53.391],[79.497,55.393],[78.979,57.328],[78.384,59.188],[77.724,60.967],[77.011,62.664],[76.255,64.281],[75.465,65.82]],
  istanbul_shanghai: [[35.585,25.764],[37.771,24.38],[40.066,23.076],[42.462,21.874],[44.949,20.8],[47.512,19.883],[50.129,19.151],[52.77,18.632],[55.401,18.348],[57.981,18.317],[60.471,18.543],[62.832,19.02],[65.033,19.73],[67.051,20.646],[68.875,21.736],[70.502,22.965],[71.938,24.3],[73.194,25.712],[74.282,27.173],[75.22,28.663],[76.021,30.166]],
  cairo_jeddah: [[34.305,38.633],[34.148,38.894],[34.0,39.186],[33.865,39.513],[33.746,39.883],[33.648,40.304],[33.579,40.79],[33.551,41.356],[33.579,42.019],[33.685,42.79],[33.885,43.655],[34.174,44.557],[34.524,45.433],[34.905,46.246],[35.299,46.991],[35.695,47.675],[36.089,48.306],[36.478,48.892],[36.862,49.439],[37.24,49.953],[37.611,50.439]],
  jeddah_dubai: [[37.611,50.439],[37.802,50.302],[38.023,50.157],[38.279,50.003],[38.577,49.837],[38.924,49.659],[39.33,49.469],[39.804,49.264],[40.353,49.045],[40.981,48.817],[41.677,48.586],[42.415,48.36],[43.166,48.149],[43.903,47.958],[44.611,47.787],[45.286,47.635],[45.927,47.499],[46.533,47.378],[47.109,47.27],[47.657,47.173],[48.178,47.085]],
  douala_abuja: [[23.711,62.224],[23.351,62.174],[22.99,62.112],[22.628,62.036],[22.265,61.941],[21.902,61.824],[21.541,61.677],[21.184,61.486],[20.84,61.228],[20.531,60.856],[20.343,60.295],[20.397,59.651],[20.602,59.099],[20.866,58.631],[21.154,58.216],[21.457,57.838],[21.768,57.487],[22.083,57.158],[22.402,56.845],[22.723,56.547],[23.045,56.26]],
  abuja_nairobi: [[23.045,56.26],[22.911,57.419],[22.828,58.617],[22.803,59.854],[22.849,61.127],[22.975,62.43],[23.194,63.757],[23.518,65.096],[23.956,66.431],[24.515,67.743],[25.196,69.009],[25.991,70.209],[26.889,71.324],[27.874,72.342],[28.928,73.257],[30.033,74.068],[31.175,74.778],[32.339,75.395],[33.517,75.924],[34.699,76.374],[35.88,76.753]],
  nairobi_johannesburg: [[35.88,76.753],[35.434,78.418],[35.004,80.072],[34.595,81.709],[34.212,83.315],[33.862,84.876],[33.551,86.374],[33.288,87.785],[33.081,89.084],[32.937,90.244],[32.861,91.239],[32.854,92.055],[32.913,92.684],[33.032,93.135],[33.201,93.42],[33.412,93.559],[33.656,93.573],[33.926,93.482],[34.216,93.302],[34.521,93.049],[34.838,92.735]],
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
              <circle className="hero-map-halo" cx={n.xPct} cy={n.yPct} r="1.1" />
              <circle className="hero-map-dot" cx={n.xPct} cy={n.yPct} r="0.35" />
            </g>
          ))}
          {Object.keys(CORRIDOR_PATHS).map((key) => (
            <g key={key}>
              <circle className="hero-map-pulse" r="0.45">
                <animateMotion dur={`${7 + (key.length % 5)}s`} repeatCount="indefinite" begin="0s">
                  <mpath href={`#corridor-${key}`} />
                </animateMotion>
              </circle>
              <circle className="hero-map-pulse" r="0.45" opacity="0.7">
                <animateMotion dur={`${7 + (key.length % 5)}s`} repeatCount="indefinite" begin={`${3.5 + (key.length % 3)}s`}>
                  <mpath href={`#corridor-${key}`} />
                </animateMotion>
              </circle>
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
