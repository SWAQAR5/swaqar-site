import type { CSSProperties } from 'react';
import { t, type Lang } from '@/lib/translations';

// Stage 4 batch 3-R, item B — REBUILD as a dark focal band (hero-grade depth), replacing the
// flat/wireframe batch-2 version. Still "Three Regions. One Coordination Layer." — NOT a
// literal map: three substantial region nodes (gold-rimmed glow, echoing the hero globe's
// node treatment) sit ON a refined navy frame spanning them, with ONE restrained gold segment
// at its centre. The frame's outer, neutral-grey segments read as the interregional
// relationship (Africa<->ME, ME<->Asia) — never a highlighted trade route — while the gold
// centre segment is SWAQAR's coordination accent. The frame carries the "SWAQAR — Trade
// Coordination Layer" label on its own line above the nodes; nothing ever routes "through"
// it as a transaction path.
//
// Depth (item B2) comes from three layered background elements, same visual grammar as
// HeroGlobe.tsx: a soft radial glow anchoring the composition, two ultra-faint curved guide
// lines (3-4% opacity) echoing the hero's meridian geometry, and blurred halos behind each
// node. The section's own vignette (dark corners) is CSS on the .corridors band, not SVG —
// see swaqar.css.
//
// RTL — unchanged ruling from batch 2, still deliberately fixed: raw SVG with hardcoded
// coordinates (not a CSS grid), so dir="rtl" cannot reorder Africa/Middle East/Asia. Only
// <text> label content localizes.
export default function CorridorArchitectureDiagram({ locale }: { locale: string }) {
  const lang: Lang = (['en', 'ar', 'fr', 'zh'] as const).includes(locale as Lang) ? (locale as Lang) : 'en';
  const africa = (t.corridors.map.africa[lang] ?? t.corridors.map.africa['en']);
  const middleEast = (t.corridors.map.middleEast[lang] ?? t.corridors.map.middleEast['en']);
  const asia = (t.corridors.map.asia[lang] ?? t.corridors.map.asia['en']);
  const railName = `SWAQAR — ${(t.identity.isItems[lang] ?? t.identity.isItems['en'])[0]}`;

  const labelStyle: CSSProperties = {
    fontFamily: 'var(--sans)',
    fontSize: '12px',
    letterSpacing: '.22em',
    textTransform: 'uppercase',
    fontWeight: 600,
    fill: 'rgba(255,255,255,.82)',
  };
  const railLabelStyle: CSSProperties = {
    fontFamily: 'var(--sans)',
    fontSize: '11px',
    letterSpacing: '.26em',
    textTransform: 'uppercase',
    fontWeight: 600,
    fill: 'var(--gold)',
  };

  const defs = (
    <defs>
      <radialGradient id="corGlow" cx="50%" cy="46%" r="55%">
        <stop offset="0%" stopColor="#1a3f72" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#1a3f72" stopOpacity="0" />
      </radialGradient>
      <filter id="corNodeHalo"><feGaussianBlur stdDeviation="7" /></filter>
    </defs>
  );

  // Substantial node: blurred gold halo behind a light-filled, gold-rimmed circle — echoes
  // the hero globe's node/shimmer treatment rather than the old thin open-ring tick mark.
  const Node = ({ x, y }: { x: number; y: number }) => (
    <g>
      <circle cx={x} cy={y} r="17" fill="var(--gold)" opacity="0.28" filter="url(#corNodeHalo)" />
      <circle cx={x} cy={y} r="7" fill="#0e2444" stroke="var(--gold)" strokeWidth="1.6" />
    </g>
  );

  return (
    <div className="cor-arch-diagram r" data-d="2">
      {/* ── Desktop/tablet: wide horizontal, generous negative space ── */}
      <svg className="cor-arch-desktop" viewBox="0 0 1400 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {defs}
        <ellipse className="cor-arch-glow" cx="700" cy="200" rx="520" ry="260" fill="url(#corGlow)" />

        {/* Two ultra-faint curved guide lines echoing the hero's meridian geometry — texture
            only, within the 3-5% opacity band. */}
        <path d="M 100,370 Q 700,270 1300,370" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.04" />
        <path d="M 150,60 Q 700,150 1250,60" fill="none" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.035" />

        {/* The frame: outer segments are the neutral interregional relationship; the centre
            segment is SWAQAR's one restrained gold accent. Nodes sit directly on it. */}
        <line x1="260" y1="210" x2="620" y2="210" stroke="var(--rule-grey)" strokeWidth="1.3" strokeOpacity="0.4" />
        <line x1="620" y1="210" x2="780" y2="210" stroke="var(--gold)" strokeWidth="1.6" />
        <line x1="780" y1="210" x2="1140" y2="210" stroke="var(--rule-grey)" strokeWidth="1.3" strokeOpacity="0.4" />

        <Node x={260} y={210} />
        <Node x={700} y={210} />
        <Node x={1140} y={210} />
        <text x="260" y="280" textAnchor="middle" style={labelStyle}>{africa}</text>
        <text x="700" y="280" textAnchor="middle" style={labelStyle}>{middleEast}</text>
        <text x="1140" y="280" textAnchor="middle" style={labelStyle}>{asia}</text>

        <text x="700" y="130" textAnchor="middle" style={railLabelStyle}>{railName}</text>
      </svg>

      {/* ── Mobile: vertical Africa / Middle East / Asia; SWAQAR as a parallel vertical
          bracket beside them (not a node between them). Same fixed-coordinate approach. ── */}
      <svg className="cor-arch-mobile" viewBox="0 0 420 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {defs}
        <ellipse className="cor-arch-glow" cx="150" cy="340" rx="220" ry="320" fill="url(#corGlow)" />
        <path d="M 40,80 Q 210,140 380,80" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.04" />

        {/* Main region line — uninterrupted, fully neutral (no gold here): on mobile, SWAQAR
            is represented ONLY by the separate parallel bracket below, per the brief (B7) —
            unlike desktop, where the frame and the relationship line are the same element. */}
        <line x1="90" y1="150" x2="90" y2="530" stroke="var(--rule-grey)" strokeWidth="1.3" strokeOpacity="0.4" />

        <Node x={90} y={150} />
        <Node x={90} y={340} />
        <Node x={90} y={530} />
        <text x="150" y="155" style={labelStyle}>{africa}</text>
        <text x="150" y="345" style={labelStyle}>{middleEast}</text>
        <text x="150" y="535" style={labelStyle}>{asia}</text>

        {/* Parallel SWAQAR bracket — its own vertical plane, not sitting between the anchors.
            Stroked in a light tone (not navy): the whole band is navy now, so a navy-stroked
            bracket would be invisible against it — a real bug caught before this shipped. */}
        <path d="M 350,150 L 370,150 L 370,320" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" />
        <path d="M 370,320 L 370,370" fill="none" stroke="var(--gold)" strokeWidth="1.6" />
        <path d="M 370,370 L 370,530 L 350,530" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" />
        {/* textAnchor="middle" + rotating about the bracket's own vertical midpoint (340) —
            confirmed via getBBox in batch 2 that the default "start" anchor let the longest
            locale string (French) overflow the viewBox; centring keeps every locale inside it. */}
        <text x="380" y="340" textAnchor="middle" style={{ ...railLabelStyle, fontSize: '9.5px' }} transform="rotate(90 380 340)">{railName}</text>
      </svg>
    </div>
  );
}
