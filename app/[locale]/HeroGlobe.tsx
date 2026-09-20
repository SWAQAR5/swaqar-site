'use client';
import { useEffect, useRef } from 'react';
import type * as ThreeNS from 'three';
import { t, tx, type Lang } from '@/lib/translations';

// Hero background — Stage 5 hero rebuild (brand exception, hero-only per founder approval):
// a full-bleed, rotating 3D globe with the Africa/Middle-East/Asia trade-corridor network
// traced in gold, city/region labels, and a scroll-tied "sunrise dome" that lets the globe
// sink behind a rising horizon as the visitor scrolls past the hero. Ported from the approved
// preview (swaqar-hero-preview.html) — the preview is the literal source of truth for the
// motion/behaviour here; this file adapts it to React's mount/unmount lifecycle, the real
// header/hero DOM this site actually has, and this site's own locked navy/gold tokens (no new
// brand colours were introduced — every hue below is derived from --ink/--gold at runtime).
//
// Everywhere else on the site the flat/no-3D/no-map convention from frontend-design/SKILL.md
// and swaqar-web/SKILL.md still applies untouched (nav, diagrams, other sections) — see the
// approval notes for this change; this is a scoped exception for the hero only.
//
// Three.js is dynamically imported inside the mount effect so its ~600KB payload never enters
// the initial bundle and never runs during SSR. `prefers-reduced-motion` is honoured twice:
// swaqar.css collapses the scroll-pin/rising-horizon rig back to the original static
// min-height:92vh hero via a media query (so a reduced-motion visitor never has to scroll
// further than before), and this component itself renders one still frame with rotation and
// the traveling corridor pulses frozen, re-rendering only in response to the visitor's own
// scroll (never on a timer) rather than looping requestAnimationFrame.
//
// City/region labels localize through lib/translations.ts (t.hero.globe.*, plus the region
// names reused verbatim from t.corridors.map.* — same real-world places, already localized for
// the Corridor Architecture diagram) — see nodeName() in mount() below. Per founder decision,
// this is no longer an English-only exception. The label's spatial offset relative to its dot
// (translate(10px,-52%) in swaqar.css) stays fixed regardless of locale/direction: this is a
// map-style point label, not flowing text, so it follows the same precedent already documented
// in CorridorArchitectureDiagram.tsx ("RTL... deliberately fixed... only <text> label content
// localizes") rather than mirroring under dir="rtl". The globe canvas itself (rotation, camera,
// geometry) is likewise unmirrored, consistent with that same precedent.

type Vec3 = ThreeNS.Vector3;

interface NodeDef {
  id: string;
  lat: number;
  lon: number;
  kind: 'city' | 'region';
}

const NODE_DEFS: NodeDef[] = [
  { id: 'istanbul', lat: 41.01, lon: 28.98, kind: 'city' },
  { id: 'cairo', lat: 30.04, lon: 31.24, kind: 'city' },
  { id: 'tehran', lat: 35.7, lon: 51.42, kind: 'city' },
  { id: 'dubai', lat: 25.2, lon: 55.27, kind: 'city' },
  { id: 'mumbai', lat: 19.08, lon: 72.88, kind: 'city' },
  { id: 'nairobi', lat: -1.29, lon: 36.82, kind: 'city' },
  { id: 'shanghai', lat: 31.23, lon: 121.47, kind: 'city' },
  { id: 'singapore', lat: 1.35, lon: 103.82, kind: 'city' },
  { id: 'europe', lat: 34, lon: 36, kind: 'region' },
  { id: 'middleEast', lat: 28, lon: 58, kind: 'region' },
  { id: 'asia', lat: 28, lon: 82, kind: 'region' },
  { id: 'africa', lat: 12, lon: 30, kind: 'region' },
];

const CORRIDORS: [string, string][] = [
  ['istanbul', 'cairo'],
  ['cairo', 'nairobi'],
  ['istanbul', 'tehran'],
  ['tehran', 'dubai'],
  ['dubai', 'mumbai'],
  ['nairobi', 'mumbai'],
  ['nairobi', 'singapore'],
  ['mumbai', 'shanghai'],
  ['mumbai', 'singapore'],
  ['shanghai', 'singapore'],
  ['istanbul', 'shanghai'],
];

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
    case 'europe': return tx(t.hero.globe.europe, lang);
    case 'middleEast': return tx(t.corridors.map.middleEast, lang);
    case 'asia': return tx(t.corridors.map.asia, lang);
    case 'africa': return tx(t.corridors.map.africa, lang);
    default: return id;
  }
}

const RADIUS = 4.6;
const BASE_ROT_Y = (-150 * Math.PI) / 180;
const ROTATE_SPEED = (2 * Math.PI) / 150; // one full turn every ~150s
const X_TILT = (23 * Math.PI) / 180;

// Photographic Earth texture (progressive enhancement — see mount() below). Pinned to a
// specific three-globe release, not a floating "latest" path, so the served file can't change
// under us; the SRI hash below was computed directly from the bytes this exact pinned URL
// serves, so a fetch only succeeds if jsdelivr returns those exact bytes.
const PHOTO_TEXTURE_URL = 'https://cdn.jsdelivr.net/npm/three-globe@2.45.2/example/img/earth-blue-marble.jpg';
const PHOTO_TEXTURE_SRI = 'sha384-WYiguPtKwuPEK83DE9Mqd1R5lyFaETsDP4D++ot+fAjbjwmg0v+6gelxSOTyCOH2';

// ---- token-derived colour helpers (no new brand hex values — everything below is mixed
// from the locked --ink/--gold custom properties read live off the document) ----
function readToken(name: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const int = parseInt(n, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}
function rgbToHexNum(r: number, g: number, b: number): number {
  return (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b);
}
function mix(hex: string, toward: 'white' | 'black', amount: number): [number, number, number] {
  const [r, g, b] = hexToRgb(hex);
  const t = toward === 'white' ? 255 : 0;
  return [r + (t - r) * amount, g + (t - g) * amount, b + (t - b) * amount];
}
function rgbaStr(rgb: [number, number, number], a: number): string {
  return `rgba(${Math.round(rgb[0])},${Math.round(rgb[1])},${Math.round(rgb[2])},${a})`;
}

export default function HeroGlobe({ lang }: { lang: Lang }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelLayerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    import('three').then((THREE) => {
      if (cancelled) return;
      cleanup = mount(THREE);
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function mount(THREE: typeof ThreeNS): () => void {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const labelLayer = labelLayerRef.current;
    const mask = maskRef.current;
    const glow = glowRef.current;
    const heroSection = canvas?.closest('.hero') as HTMLElement | null;
    if (!canvas || !stage || !labelLayer || !mask || !glow || !heroSection) return () => {};
    // Re-bound as definitely-non-null so nested closures below (applyScrollEffects, onResize)
    // don't need repeated `!` assertions — TS narrowing from the guard above doesn't persist
    // into those nested function bodies.
    const stageEl = stage;
    const maskEl = mask;
    const glowEl = glow;
    const heroEl = heroSection;
    let disposed = false;

    const reduceMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduceMotion = reduceMotionMq.matches;
    const isMobile = window.innerWidth < 768;

    const navyHex = readToken('--ink', '#0B1F3A');
    const goldHex = readToken('--gold', '#B8923A');
    const [goldR, goldG, goldB] = hexToRgb(goldHex);
    const goldLightRgb = mix(goldHex, 'white', 0.55);
    const goldLightHex = rgbToHexNum(...goldLightRgb);
    const goldHexNum = rgbToHexNum(goldR, goldG, goldB);
    const navyDeepRgb = mix(navyHex, 'black', 0.45);
    const navyMidRgb = mix(navyHex, 'black', 0.18);
    const navyLightRgb = mix(navyHex, 'white', 0.18);

    let W = heroEl.clientWidth;
    let H = heroEl.clientHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.setSize(W, H);
    if ((THREE as unknown as { sRGBEncoding?: number }).sRGBEncoding !== undefined) {
      // r128 colour-management API — deliberately matching the pinned three@0.128.0 the
      // preview targets, not a newer colour-space API.
      (renderer as unknown as { outputEncoding: number }).outputEncoding = (
        THREE as unknown as { sRGBEncoding: number }
      ).sRGBEncoding;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 1000);
    let baseZ = 13;
    camera.position.set(0, 0, baseZ);

    const disposables: { dispose: () => void }[] = [];
    const track = <T extends { dispose: () => void }>(x: T): T => {
      disposables.push(x);
      return x;
    };

    // ---- starfield ----
    (function stars() {
      const count = isMobile ? 140 : 260;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const r = 40 + Math.random() * 40;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
        positions[i * 3 + 2] = r * Math.cos(phi) - 10;
      }
      const geo = track(new THREE.BufferGeometry());
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = track(
        new THREE.PointsMaterial({ color: 0xbfd0ea, size: 0.06, transparent: true, opacity: 0.55 })
      );
      scene.add(new THREE.Points(geo, mat));
    })();

    // ---- globe group ----
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    function fitCameraToWidth() {
      const halfV = ((camera.fov / 2) * Math.PI) / 180;
      const halfH = Math.atan(Math.tan(halfV) * camera.aspect);
      const halfBinding = Math.max(halfV, halfH);
      const exactFitZ = RADIUS / Math.sin(halfBinding);
      const overflow = 1.0;
      baseZ = exactFitZ * overflow;
      baseZ = Math.max(baseZ, RADIUS * 1.45);
    }

    function makeEarthTexture() {
      const texW = 2048,
        texH = 1024;
      const c = document.createElement('canvas');
      c.width = texW;
      c.height = texH;
      const ctx = c.getContext('2d')!;

      const ocean = ctx.createLinearGradient(0, 0, 0, texH);
      ocean.addColorStop(0, rgbaStr(navyLightRgb, 1));
      ocean.addColorStop(0.5, navyHex);
      ocean.addColorStop(1, rgbaStr(navyDeepRgb, 1));
      ctx.fillStyle = ocean;
      ctx.fillRect(0, 0, texW, texH);

      const sheen = ctx.createRadialGradient(texW * 0.5, texH * 0.46, texH * 0.05, texW * 0.5, texH * 0.46, texH * 0.75);
      sheen.addColorStop(0, 'rgba(159,190,232,0.10)');
      sheen.addColorStop(1, 'rgba(159,190,232,0)');
      ctx.fillStyle = sheen;
      ctx.fillRect(0, 0, texW, texH);

      function uv(lat: number, lon: number): [number, number] {
        return [((lon + 180) / 360) * texW, ((90 - lat) / 180) * texH];
      }
      function landmass(lat: number, lon: number, rx: number, ry: number, alpha: number, rot?: number) {
        const [x, y] = uv(lat, lon);
        ctx.save();
        ctx.filter = 'blur(3px)';
        ctx.translate(x, y);
        if (rot) ctx.rotate((rot * Math.PI) / 180);
        ctx.scale(1, ry / rx);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
        g.addColorStop(0, `rgba(179,165,132,${alpha})`);
        g.addColorStop(0.78, `rgba(168,154,120,${alpha * 0.96})`);
        g.addColorStop(0.94, `rgba(150,138,108,${alpha * 0.7})`);
        g.addColorStop(1, `rgba(150,138,108,0)`);
        ctx.beginPath();
        ctx.arc(0, 0, rx, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      }

      landmass(50, -105, 95, 62, 0.85, -18);
      landmass(58, -75, 46, 30, 0.8, 20);
      landmass(-14, -58, 42, 78, 0.85, 8);
      landmass(50, 12, 46, 34, 0.85);
      landmass(3, 20, 62, 92, 0.88);
      landmass(58, 90, 108, 46, 0.82);
      landmass(38, 100, 62, 36, 0.85);
      landmass(24, 78, 34, 34, 0.85, -12);
      landmass(36, 45, 30, 24, 0.85);
      landmass(10, 112, 46, 30, 0.78, -6);
      landmass(-25, 134, 48, 34, 0.85);

      const tex = track(new THREE.CanvasTexture(c));
      const enc = (THREE as unknown as { sRGBEncoding?: number }).sRGBEncoding;
      if (enc !== undefined) (tex as unknown as { encoding: number }).encoding = enc;
      return tex;
    }

    const coreGeo = track(new THREE.SphereGeometry(RADIUS, isMobile ? 40 : 64, isMobile ? 40 : 64));
    const coreMat = track(new THREE.MeshBasicMaterial({ map: makeEarthTexture() }));
    const core = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(core);

    // Progressive enhancement only: if a real photographic world map can be fetched AND its
    // integrity verified, swap it in for extra fidelity. If it can't (offline, restrictive
    // network, a visitor on a metered connection, or the fetched bytes don't match the pinned
    // SRI hash — e.g. a compromised or altered CDN response), the hand-painted texture above
    // already stands as a complete, on-brand map — never a blank/solid sphere, and never a
    // surfaced error either way. Loaded via fetch() rather than THREE.TextureLoader because
    // TextureLoader (backed by a plain <img> element) has no way to attach an integrity check;
    // fetch()'s own `integrity` option enforces the SRI hash before the response ever reaches
    // this code, so a mismatched response is rejected by the browser itself.
    const saveData = (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!saveData) {
      fetch(PHOTO_TEXTURE_URL, { integrity: PHOTO_TEXTURE_SRI, mode: 'cors', credentials: 'omit' })
        .then((res) => {
          if (!res.ok) throw new Error(`photo texture fetch failed: ${res.status}`);
          return res.blob();
        })
        .then((blob) => {
          if (disposed) return;
          const objectUrl = URL.createObjectURL(blob);
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            URL.revokeObjectURL(objectUrl);
            if (disposed) return;
            const tex = track(new THREE.Texture(img));
            tex.needsUpdate = true;
            const enc = (THREE as unknown as { sRGBEncoding?: number }).sRGBEncoding;
            if (enc !== undefined) (tex as unknown as { encoding: number }).encoding = enc;
            const maxAniso = renderer.capabilities?.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1;
            tex.anisotropy = maxAniso;
            coreMat.map = tex;
            coreMat.needsUpdate = true;
          };
          img.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            /* silent — decode failure on an already-fetched blob; the procedural texture
               already applied stands */
          };
          img.src = objectUrl;
        })
        .catch(() => {
          /* silent — network failure, non-OK status, or an SRI hash mismatch: the procedural
             texture already applied stands, same as any other load failure */
        });
    }

    const wireGeo = track(new THREE.SphereGeometry(RADIUS * 1.002, 36, 22));
    const wireMat = track(new THREE.MeshBasicMaterial({ color: goldHexNum, wireframe: true, transparent: true, opacity: 0.075 }));
    globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

    const edgeGeo = track(new THREE.SphereGeometry(RADIUS * 1.006, 48, 48));
    const edgeMat = track(new THREE.MeshBasicMaterial({ color: goldLightHex, transparent: true, opacity: 0.05 }));
    globeGroup.add(new THREE.Mesh(edgeGeo, edgeMat));

    (function glowSprite() {
      const size = 256;
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const ctx = c.getContext('2d')!;
      const g = ctx.createRadialGradient(size / 2, size / 2, size * 0.28, size / 2, size / 2, size / 2);
      g.addColorStop(0, rgbaStr(goldLightRgb, 0.55));
      g.addColorStop(0.5, rgbaStr([goldR, goldG, goldB], 0.18));
      g.addColorStop(1, rgbaStr([goldR, goldG, goldB], 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      const tex = track(new THREE.CanvasTexture(c));
      const mat = track(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(RADIUS * 3.4, RADIUS * 3.4, 1);
      globeGroup.add(sprite);
    })();

    const haloTexture = (function () {
      const size = 64;
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const ctx = c.getContext('2d')!;
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      g.addColorStop(0, 'rgba(255,244,222,0.9)');
      g.addColorStop(0.4, rgbaStr(goldLightRgb, 0.4));
      g.addColorStop(1, rgbaStr(goldLightRgb, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      return track(new THREE.CanvasTexture(c));
    })();

    function latLonToVec3(lat: number, lon: number, r: number): Vec3 {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lon + 180) * Math.PI) / 180;
      return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
    }

    interface RuntimeNode extends NodeDef {
      name: string;
      vec: Vec3;
      mesh?: ThreeNS.Mesh;
      dotMat?: ThreeNS.MeshBasicMaterial;
      haloMat?: ThreeNS.SpriteMaterial;
      baseDotOpacity?: number;
      baseHaloOpacity?: number;
    }
    const nodePoints: RuntimeNode[] = NODE_DEFS.map((n) => ({
      ...n,
      name: nodeName(n.id, lang),
      vec: latLonToVec3(n.lat, n.lon, RADIUS),
    }));
    const byId: Record<string, RuntimeNode> = {};
    nodePoints.forEach((n) => {
      byId[n.id] = n;
    });

    nodePoints.forEach((n) => {
      if (n.kind === 'region') return;
      const isCity = n.kind === 'city';
      const dotMat = track(
        new THREE.MeshBasicMaterial({ color: isCity ? 0xfff4de : goldLightHex, transparent: true, opacity: isCity ? 1 : 0.7 })
      );
      const dot = new THREE.Mesh(track(new THREE.SphereGeometry(isCity ? 0.05 : 0.028, 14, 14)), dotMat);
      dot.position.copy(n.vec);
      globeGroup.add(dot);
      n.mesh = dot;
      n.dotMat = dotMat;
      n.baseDotOpacity = dotMat.opacity;
      if (isCity) {
        const haloMat = track(
          new THREE.SpriteMaterial({ map: haloTexture, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55 })
        );
        const halo = new THREE.Sprite(haloMat);
        halo.position.copy(n.vec);
        halo.scale.set(0.22, 0.22, 1);
        globeGroup.add(halo);
        n.haloMat = haloMat;
        n.baseHaloOpacity = haloMat.opacity;
      }
    });

    const pulseTexture = (function () {
      const size = 64;
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const ctx = c.getContext('2d')!;
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      g.addColorStop(0, 'rgba(255,248,224,1)');
      g.addColorStop(0.32, 'rgba(255,236,180,0.95)');
      g.addColorStop(1, rgbaStr(goldLightRgb, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      return track(new THREE.CanvasTexture(c));
    })();

    interface Arc {
      curve: ThreeNS.QuadraticBezierCurve3;
      pulses: { sprite: ThreeNS.Sprite; mat: ThreeNS.SpriteMaterial; offset: number }[];
      period: number;
    }
    function makeArc(p1: Vec3, p2: Vec3, weight: number): Arc {
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      mid.setLength(RADIUS * (1.16 + Math.min(p1.distanceTo(p2) / RADIUS, 1.9) * 0.11));
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const tube = new THREE.Mesh(
        track(new THREE.TubeGeometry(curve, 72, weight, 6, false)),
        track(new THREE.MeshBasicMaterial({ color: goldLightHex, transparent: true, opacity: 0.58 }))
      );
      globeGroup.add(tube);

      const pulseCount = 2;
      const pulses = Array.from({ length: pulseCount }, (_, i) => {
        const mat = track(
          new THREE.SpriteMaterial({ map: pulseTexture, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })
        );
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(0.12, 0.12, 1);
        globeGroup.add(sprite);
        return { sprite, mat, offset: i / pulseCount + Math.random() * 0.12 };
      });

      return { curve, pulses, period: 6.5 + Math.random() * 2.5 };
    }

    const arcs = CORRIDORS.map(([a, b]) => makeArc(byId[a].vec, byId[b].vec, a === 'istanbul' && b === 'shanghai' ? 0.007 : 0.01));

    globeGroup.rotation.y = BASE_ROT_Y;
    globeGroup.rotation.x = X_TILT;

    // ---- labels (English/LTR by design at this stage — see file header) ----
    const labelEls: HTMLDivElement[] = nodePoints.map((n) => {
      const el = document.createElement('div');
      el.className = n.kind === 'region' ? 'hero-region-label' : 'hero-node-label';
      el.textContent = n.name;
      labelLayer.appendChild(el);
      return el;
    });

    let textSafeRect: { left: number; right: number; top: number; bottom: number } | null = null;
    let navSafeRect: { left: number; right: number; top: number; bottom: number } | null = null;
    function measureTextSafeZone() {
      const body = document.querySelector('.hero-body');
      if (body) {
        const r = body.getBoundingClientRect();
        textSafeRect = { left: r.left - 14, right: r.right + 34, top: r.top - 22, bottom: r.bottom + 10 };
      }
      const banner = document.querySelector('.banner');
      const nav = document.getElementById('nav');
      const bottom = Math.max(banner?.getBoundingClientRect().bottom ?? 0, nav?.getBoundingClientRect().bottom ?? 0);
      navSafeRect = { left: 0, right: W, top: 0, bottom: bottom + 18 };
    }
    function inRect(x: number, y: number, r: typeof textSafeRect) {
      return !!r && x > r.left && x < r.right && y > r.top && y < r.bottom;
    }

    const tmpVec = new THREE.Vector3();
    function updateLabels() {
      nodePoints.forEach((n, i) => {
        const worldPos = n.mesh ? n.mesh.getWorldPosition(tmpVec.clone()) : n.vec.clone().applyMatrix4(globeGroup.matrixWorld);
        const toCam = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
        const normal = worldPos.clone().sub(globeGroup.position).normalize();
        const facing = normal.dot(toCam);

        const proj = worldPos.clone().project(camera);
        const x = (proj.x * 0.5 + 0.5) * W;
        const y = (1 - (proj.y * 0.5 + 0.5)) * H;
        const el = labelEls[i];
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        const threshold = n.kind === 'region' ? -0.05 : 0.05;
        let opacity = facing > threshold ? Math.min(1, (facing - threshold) * 2.4) : 0;

        const suppressed = inRect(x, y, textSafeRect) || inRect(x, y, navSafeRect);
        if (suppressed) opacity = 0;
        el.style.opacity = String(opacity);

        if (n.dotMat && n.baseDotOpacity !== undefined) n.dotMat.opacity = suppressed ? n.baseDotOpacity * 0.4 : n.baseDotOpacity;
        if (n.haloMat && n.baseHaloOpacity !== undefined) n.haloMat.opacity = suppressed ? n.baseHaloOpacity * 0.25 : n.baseHaloOpacity;
      });
    }

    // ---- scroll-driven progress (0 at hero start, 1 once the pinned hero fully resolves) ----
    const wrapper = heroSection.closest('.hero-scroll-wrapper') as HTMLElement | null;
    let progress = 0;
    function computeProgress() {
      if (!wrapper) {
        progress = 0;
        return;
      }
      const wrapRect = wrapper.getBoundingClientRect();
      const total = wrapper.offsetHeight - window.innerHeight;
      const scrolled = -wrapRect.top;
      progress = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
    }

    const heroBody = document.querySelector<HTMLElement>('.hero-body');
    function applyScrollEffects() {
      if (!wrapper) return; // reduced-motion fallback: no pin, no rig — nothing to animate
      const driftPx = progress * 0.48 * H;
      stageEl.style.transform = `translateY(${driftPx}px)`;

      const maskTop = 100 - progress * 50;
      maskEl.style.top = maskTop + '%';
      glowEl.style.top = maskTop + '%';
      glowEl.style.opacity = String(Math.min(1, progress * 1.6));
      glowEl.style.filter = `blur(${4 + progress * 10}px)`;

      camera.position.z = baseZ - progress * (baseZ * 0.14);
      if (heroBody) heroBody.style.opacity = String(1 - progress * 0.55);
    }

    function renderFrame() {
      renderer.render(scene, camera);
    }

    function onScroll() {
      computeProgress();
      applyScrollEffects();
      if (reduceMotion) {
        updateLabels();
        renderFrame();
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    function onResize() {
      W = heroEl.clientWidth;
      H = heroEl.clientHeight;
      camera.aspect = W / H;
      fitCameraToWidth();
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      measureTextSafeZone();
      applyScrollEffects();
      if (reduceMotion) {
        updateLabels();
        renderFrame();
      }
    }
    window.addEventListener('resize', onResize);

    function onMotionPrefChange() {
      reduceMotion = reduceMotionMq.matches;
    }
    reduceMotionMq.addEventListener('change', onMotionPrefChange);

    fitCameraToWidth();
    camera.position.z = baseZ;
    measureTextSafeZone();
    computeProgress();
    applyScrollEffects();

    // The headline renders in Playfair Display (a webfont loaded via a Google Fonts <link>,
    // not next/font) and can reflow once it swaps in after this first synchronous measurement
    // — re-measure once it's actually settled so the label safe-zone matches the final layout,
    // not a pre-swap approximation.
    document.fonts?.ready?.then(() => {
      if (disposed) return;
      measureTextSafeZone();
    });

    let rafId = 0;
    const clock = new THREE.Clock();
    function animate() {
      rafId = requestAnimationFrame(animate);
      const tsec = clock.getElapsedTime();

      globeGroup.rotation.y = BASE_ROT_Y + tsec * ROTATE_SPEED;

      arcs.forEach((arc) => {
        arc.pulses.forEach((p) => {
          let u = (tsec / arc.period + p.offset) % 1;
          if (u < 0) u += 1;
          const pos = arc.curve.getPointAt(u);
          p.sprite.position.copy(pos);
          const edgeT = Math.min(u, 1 - u);
          const fade = Math.min(1, edgeT * 9);
          p.mat.opacity = fade * 0.85;
        });
      });

      updateLabels();
      renderFrame();
    }

    if (reduceMotion) {
      // One still frame; rotation and the traveling pulses stay frozen. Scroll (if the rig is
      // even present — swaqar.css removes it under this same media query) still re-renders.
      updateLabels();
      renderFrame();
    } else {
      animate();
    }

    return () => {
      disposed = true;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      reduceMotionMq.removeEventListener('change', onMotionPrefChange);
      if (rafId) cancelAnimationFrame(rafId);
      labelEls.forEach((el) => el.remove());
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }

  return (
    <div aria-hidden="true">
      <div className="hero-globe-stage" ref={stageRef}>
        <canvas ref={canvasRef} />
        <div className="hero-label-layer" ref={labelLayerRef} />
      </div>
      <div className="hero-text-scrim" />
      <div className="hero-horizon-mask" ref={maskRef} />
      <div className="hero-horizon-glow" ref={glowRef} />
    </div>
  );
}
