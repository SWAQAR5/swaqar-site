'use client';
import { useEffect, useState } from 'react';

// Hero background — an abstract, partial "globe-curve" anchored off the right edge of the
// hero, plus a whisper of film grain over the whole section. Purely decorative (aria-hidden),
// no text, no real map, no claimed routes — see the build brief this was written against for
// the full rationale. Two motion layers:
//   - the wireframe (.hero-globe-lines) drifts ±1deg over ~54s via a plain CSS animation, so it
//     freezes for free under prefers-reduced-motion (a CSS media query below turns it off).
//   - the three gold-arc shimmer dots use SMIL <animateMotion>, which does NOT listen to the
//     CSS media feature on its own. motionOK below starts false (so server-rendered/first-paint
//     markup is always the still) and flips true only after confirming, client-side, that the
//     visitor hasn't asked for reduced motion — the shimmer is progressive enhancement, never a
//     flash of movement someone asked not to see.
export default function HeroGlobe() {
  const [motionOK, setMotionOK] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotionOK(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <>
      <div className="hero-globe" aria-hidden="true">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
          <defs>
            {/* Soft inner light upper-left, deepening toward the edges — value/opacity does the
                work, not colour: three navy stops, no other hue involved. */}
            <radialGradient id="hgBody" cx="38%" cy="34%" r="72%">
              <stop offset="0%" stopColor="#173a6c" />
              <stop offset="52%" stopColor="#0e2444" />
              <stop offset="100%" stopColor="#071223" />
            </radialGradient>
            {/* Darker limb at the very edge of the sphere, layered on top of hgBody. */}
            <radialGradient id="hgLimb" cx="50%" cy="50%" r="50%">
              <stop offset="75%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
            </radialGradient>
            <filter id="hgBlurWide"><feGaussianBlur stdDeviation="55" /></filter>
            <filter id="hgBlurSoft"><feGaussianBlur stdDeviation="2.2" /></filter>
            {/* Shared fade for every arc — transparent at both ends, gold only at the middle, so
                nothing reads as a route with a claimed start/end point. */}
            <linearGradient id="hgArcFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B8923A" stopOpacity="0" />
              <stop offset="50%" stopColor="#B8923A" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#B8923A" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* The sphere body. */}
          <circle cx="500" cy="500" r="470" fill="url(#hgBody)" />

          {/* One warm tonal wash suggesting the Africa/ME/Asia arc — a blurred, formless patch,
              never a continent silhouette. Gold at ~5% opacity before the blur softens it further. */}
          <ellipse cx="600" cy="410" rx="230" ry="185" fill="#B8923A" opacity="0.055" filter="url(#hgBlurWide)" />

          {/* Latitude/longitude wireframe — thin white lines, 6-8% opacity, the only hint of
              form. This whole group is what drifts ±1deg (see .hero-globe-lines in swaqar.css). */}
          <g className="hero-globe-lines">
            <ellipse cx="500" cy="500" rx="470" ry="470" fill="none" stroke="#fff" strokeOpacity="0.08" strokeWidth="1" />
            <ellipse cx="500" cy="500" rx="470" ry="290" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="1" />
            <ellipse cx="500" cy="500" rx="470" ry="130" fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />
            <ellipse cx="500" cy="330" rx="360" ry="75" fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />
            <ellipse cx="500" cy="670" rx="360" ry="75" fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />
            <ellipse cx="500" cy="500" rx="290" ry="470" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="1" />
            <ellipse cx="500" cy="500" rx="130" ry="470" fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />
          </g>

          <circle cx="500" cy="500" r="470" fill="url(#hgLimb)" />

          {/* Exactly 3 sparse gold arcs — abstract "connection", not named routes: no endpoints
              pinned to anything, no dots-with-labels, both ends fade to nothing. All three are
              routed through the mid-tone band of the sphere, away from both the brightest
              upper-left highlight and the darkest limb edge, so each one actually reads against
              the gradient instead of washing out against it. */}
          <g className="hero-globe-arcs">
            <path d="M 90,600 Q 340,470 560,330" fill="none" stroke="url(#hgArcFade)" strokeWidth="1.3" />
            <path d="M 160,790 Q 430,715 720,580" fill="none" stroke="url(#hgArcFade)" strokeWidth="1.1" />
            <path d="M 300,150 Q 470,330 430,560" fill="none" stroke="url(#hgArcFade)" strokeWidth="1" />
            {motionOK && (
              <>
                <circle r="3" fill="#B8923A" opacity="0.8" filter="url(#hgBlurSoft)">
                  <animateMotion dur="9s" repeatCount="indefinite" path="M 90,600 Q 340,470 560,330" />
                </circle>
                <circle r="2.4" fill="#B8923A" opacity="0.65" filter="url(#hgBlurSoft)">
                  <animateMotion dur="10s" begin="2.4s" repeatCount="indefinite" path="M 160,790 Q 430,715 720,580" />
                </circle>
                <circle r="2" fill="#B8923A" opacity="0.55" filter="url(#hgBlurSoft)">
                  <animateMotion dur="8.5s" begin="4.8s" repeatCount="indefinite" path="M 300,150 Q 470,330 430,560" />
                </circle>
              </>
            )}
          </g>
        </svg>
      </div>

      {/* Whole-hero film grain — a code-generated noise filter (no image asset), capped to a
          very low alpha inside the matrix itself so it stays a whisper regardless of blend mode. */}
      <svg className="hero-grain" preserveAspectRatio="none" aria-hidden="true">
        <filter id="hgGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hgGrain)" />
      </svg>
    </>
  );
}
