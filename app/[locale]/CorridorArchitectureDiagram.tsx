import type { CSSProperties } from 'react';
import { t, type Lang } from '@/lib/translations';

// Stage 4 batch 2, item 2 — "Three Regions. One Coordination Layer." NOT a literal map: three
// calm architectural anchor forms (thin navy stelae, not map pins), thin neutral-grey
// relationship lines between them (interregional relationship only, never a highlighted trade
// route), and a partially-open navy frame spanning all three with one restrained gold segment
// carrying the "SWAQAR — Trade Coordination Layer" label. The frame sits on its own plane
// above the anchors and their relationship lines — it never touches them, so nothing here
// reads as trade physically passing through SWAQAR.
//
// RTL — deliberately fixed, NOT locale-direction-aware (the opposite ruling from item 1):
// both the desktop and mobile layouts below are raw SVG with hardcoded coordinates, the same
// technique the Coordination Gap diagram (batch 1) used, specifically because a CSS-grid
// layout (as item 1 and the Model spine diagram use) auto-reorders under dir="rtl" — which
// would silently swap Africa and Asia's visual positions on /ar. Only the <text> label content
// changes per locale via tx(); Africa/Middle East/Asia keep the same x (desktop) / y (mobile)
// position in every locale.
export default function CorridorArchitectureDiagram({ locale }: { locale: string }) {
  const lang: Lang = (['en', 'ar', 'fr', 'zh'] as const).includes(locale as Lang) ? (locale as Lang) : 'en';
  const africa = (t.corridors.map.africa[lang] ?? t.corridors.map.africa['en']);
  const middleEast = (t.corridors.map.middleEast[lang] ?? t.corridors.map.middleEast['en']);
  const asia = (t.corridors.map.asia[lang] ?? t.corridors.map.asia['en']);
  const railName = `SWAQAR — ${(t.identity.isItems[lang] ?? t.identity.isItems['en'])[0]}`;

  const labelStyle: CSSProperties = {
    fontFamily: 'var(--sans)',
    fontSize: '12px',
    letterSpacing: '.16em',
    textTransform: 'uppercase',
    fontWeight: 600,
    fill: 'var(--navy)',
  };
  const railLabelStyle: CSSProperties = {
    fontFamily: 'var(--sans)',
    fontSize: '11px',
    letterSpacing: '.22em',
    textTransform: 'uppercase',
    fontWeight: 600,
    fill: 'var(--gold)',
  };

  // Anchor form: a slender upright bar with a small open ring at the top — a calm
  // "architectural waypoint," deliberately not a map-pin teardrop shape and not a dot.
  const Anchor = ({ x, y }: { x: number; y: number }) => (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + 58} stroke="var(--navy)" strokeWidth="2" strokeOpacity="0.55" />
      <circle cx={x} cy={y - 8} r="5" fill="none" stroke="var(--navy)" strokeWidth="1.4" strokeOpacity="0.7" />
    </g>
  );
  const AnchorVertical = ({ x, y }: { x: number; y: number }) => (
    <g>
      <line x1={x} y1={y} x2={x + 58} y2={y} stroke="var(--navy)" strokeWidth="2" strokeOpacity="0.55" />
      <circle cx={x - 8} cy={y} r="5" fill="none" stroke="var(--navy)" strokeWidth="1.4" strokeOpacity="0.7" />
    </g>
  );

  return (
    <div className="cor-arch-diagram r" data-d="2">
      {/* ── Desktop/tablet: wide horizontal, generous negative space ── */}
      <svg className="cor-arch-desktop" viewBox="0 0 1400 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {/* At most two ultra-faint curved lines echoing the hero's meridian geometry —
            texture only, capped well under the ≤4% opacity ceiling. */}
        <path d="M 100,380 Q 700,280 1300,380" fill="none" stroke="var(--navy)" strokeWidth="1" strokeOpacity="0.035" />
        <path d="M 150,60 Q 700,140 1250,60" fill="none" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.03" />

        {/* Relationship lines — thin, neutral-grey, interregional relationship only. */}
        <line x1="260" y1="230" x2="700" y2="230" stroke="var(--rule-grey)" strokeWidth="1.2" />
        <line x1="700" y1="230" x2="1140" y2="230" stroke="var(--rule-grey)" strokeWidth="1.2" />

        {/* Three anchors — fixed x positions, never reordered by direction. */}
        <Anchor x={260} y={200} />
        <Anchor x={700} y={200} />
        <Anchor x={1140} y={200} />
        <text x="260" y="300" textAnchor="middle" style={labelStyle}>{africa}</text>
        <text x="700" y="300" textAnchor="middle" style={labelStyle}>{middleEast}</text>
        <text x="1140" y="300" textAnchor="middle" style={labelStyle}>{asia}</text>

        {/* Partially-open institutional frame — navy, one restrained gold segment, on its own
            plane above the anchors; never touches the relationship lines below it. */}
        <path d="M 260,110 L 260,90 L 610,90" fill="none" stroke="var(--navy)" strokeWidth="1.2" />
        <path d="M 610,90 L 790,90" fill="none" stroke="var(--gold)" strokeWidth="1.4" />
        <path d="M 790,90 L 1140,90 L 1140,110" fill="none" stroke="var(--navy)" strokeWidth="1.2" />
        <text x="700" y="62" textAnchor="middle" style={railLabelStyle}>{railName}</text>
      </svg>

      {/* ── Mobile: vertical Africa / Middle East / Asia; SWAQAR as a parallel vertical
          bracket beside them (not a node between them). Same fixed-coordinate approach. ── */}
      <svg className="cor-arch-mobile" viewBox="0 0 420 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M 40,80 Q 210,140 380,80" fill="none" stroke="var(--navy)" strokeWidth="1" strokeOpacity="0.035" />

        <line x1="90" y1="150" x2="90" y2="340" stroke="var(--rule-grey)" strokeWidth="1.2" />
        <line x1="90" y1="340" x2="90" y2="530" stroke="var(--rule-grey)" strokeWidth="1.2" />

        <AnchorVertical x={90} y={150} />
        <AnchorVertical x={90} y={340} />
        <AnchorVertical x={90} y={530} />
        <text x="170" y="155" style={labelStyle}>{africa}</text>
        <text x="170" y="345" style={labelStyle}>{middleEast}</text>
        <text x="170" y="535" style={labelStyle}>{asia}</text>

        {/* Parallel SWAQAR bracket — its own vertical plane, not sitting between the anchors. */}
        <path d="M 330,150 L 350,150 L 350,320" fill="none" stroke="var(--navy)" strokeWidth="1.2" />
        <path d="M 350,320 L 350,370" fill="none" stroke="var(--gold)" strokeWidth="1.4" />
        <path d="M 350,370 L 350,530 L 330,530" fill="none" stroke="var(--navy)" strokeWidth="1.2" />
        {/* textAnchor="middle" + rotating about the bracket's own vertical midpoint (340) is
            required, not cosmetic: with the default "start" anchor the un-rotated text ran
            outward from the pivot in one direction only, so after rotation the longest locale
            string (French, "SWAQAR — Couche de Coordination Commerciale") measured past the
            bottom of the viewBox — confirmed via getBBox before this fix. Anchoring to the
            centre lets it grow equally in both directions from the bracket's midpoint instead. */}
        <text x="360" y="340" textAnchor="middle" style={{ ...railLabelStyle, fontSize: '9.5px' }} transform="rotate(90 360 340)">{railName}</text>
      </svg>
    </div>
  );
}
