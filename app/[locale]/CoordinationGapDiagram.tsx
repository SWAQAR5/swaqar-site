import type { CSSProperties } from 'react';
import { t, type Lang } from '@/lib/translations';

// Stage 4 batch 1, item 2 — replaces the old text-card ".pillars" grid as the section's
// primary visual. All labels come from live translation props (t.gap.items[].name for the
// four strand labels, t.identity.isItems[0] — the existing, approved "Trade Coordination
// Layer" phrase — for the centre caption, paired with the locked, untranslated "SWAQAR").
// Nothing is baked into the SVG as hardcoded copy.
//
// Two hand-built layouts (not one SVG reused via CSS transform/rotation, which would turn
// every label sideways and illegible): a horizontal desktop version and a vertical mobile
// version ("stack top -> centre -> bottom"), toggled by the sitewide 768px breakpoint.
//
// RTL: deliberately NOT mirrored. This is a fixed-narrative diagram (fragmented -> coordinated
// reads left-to-right / top-to-bottom regardless of script direction), the same way the
// existing Africa/Middle East/Asia corridor map elsewhere on this page already stays
// unmirrored under RTL — flipping it would make this one diagram inconsistent with that
// established, unmirrored convention rather than more correct. Strand labels sit ABOVE (or,
// on the desktop version, to the left of, at a text-anchor the browser's own bidi shaping
// handles correctly for a single short run of RTL text) their strand, not before/after it in
// a reading-order-dependent way, so no direction-specific logic was needed for the text itself.
export default function CoordinationGapDiagram({ locale }: { locale: string }) {
  const lang: Lang = (['en', 'ar', 'fr', 'zh'] as const).includes(locale as Lang) ? (locale as Lang) : 'en';
  const items = t.gap.items[lang] ?? t.gap.items['en'];
  // "Trade Coordination Layer" — the existing, already-reviewed t.identity.isItems[0] string,
  // reused here (not retyped) paired with the locked, untranslated "SWAQAR" brand name.
  const coordinationLayerLabel = (t.identity.isItems[lang] ?? t.identity.isItems['en'])[0];
  const centreLabel = `SWAQAR — ${coordinationLayerLabel}`;

  // Per-strand fragmentation character (jitter offset + dash rhythm + opacity) — restrained
  // variation, not randomness, so it reads as "structurally fragmented" rather than messy.
  const strandStyle = [
    { jitter: 6, dash: '11 9', opacity: 0.34 },
    { jitter: -5, dash: '15 6', opacity: 0.42 },
    { jitter: 8, dash: '8 10', opacity: 0.3 },
    { jitter: -4, dash: '13 7', opacity: 0.38 },
  ];

  const labelStyle: CSSProperties = {
    fontFamily: 'var(--sans)',
    fontSize: '11px',
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    fill: 'var(--muted)',
  };
  const captionStyle: CSSProperties = {
    fontFamily: 'var(--sans)',
    fontSize: '10px',
    letterSpacing: '.22em',
    textTransform: 'uppercase',
    fill: 'var(--gold)',
    fontWeight: 600,
  };

  return (
    <div className="gap-diagram r" data-d="2">
      {/* ── Desktop: horizontal ──
          Left margin (195 units before the strand lines start at x=210) is sized for the
          longest real label across all four locales — "Stakeholders" / "أصحاب المصلحة" /
          "Parties prenantes" — not just the shortest one, so nothing clips. */}
      <svg className="gap-diagram-desktop" viewBox="0 0 1350 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <text x="700" y="26" textAnchor="middle" style={captionStyle}>{centreLabel}</text>

        {[90, 160, 230, 300].map((rowY, i) => {
          const s = strandStyle[i];
          return (
            <g key={i}>
              <text x="195" y={rowY} textAnchor="end" dominantBaseline="middle" style={labelStyle}>{items[i]?.name}</text>
              {/* fragmented segment — jittered, dashed, converges to the row baseline by the
                  time it reaches the coordination plane */}
              <path
                d={`M 210,${rowY + s.jitter} Q 440,${rowY + s.jitter * 0.4} 660,${rowY}`}
                fill="none"
                stroke="var(--body-grey)"
                strokeWidth="1.4"
                strokeDasharray={s.dash}
                strokeOpacity={s.opacity}
              />
              {/* coordinated segment — clean, solid, identical weight/opacity across all four */}
              <line x1="740" y1={rowY} x2="1290" y2={rowY} stroke="var(--body-grey)" strokeWidth="1.4" strokeOpacity="0.55" />
            </g>
          );
        })}

        {/* Coordination plane — narrow navy band, single gold edge rule at the exit side only.
            No line is drawn through it: the strands end at its left edge and resume, realigned,
            at its right edge — there is nothing here that reads as receiving or passing
            through goods, funds, or a transaction. */}
        <rect x="660" y="55" width="80" height="285" fill="var(--navy)" />
        <line x1="740" y1="55" x2="740" y2="340" stroke="var(--gold)" strokeWidth="1" />

        {/* Right-side bracket marking the coordinated, equally-spaced result. */}
        <path d="M 1282,90 L 1290,90 L 1290,300 L 1282,300" fill="none" stroke="var(--gold)" strokeWidth="1" />
      </svg>

      {/* ── Mobile: vertical, top -> centre -> bottom ──
          Column spacing (130 units) and a smaller 9px label size are both sized to keep the
          two-word labels ("Stakeholders" / "أصحاب المصلحة" / "Parties prenantes") from
          colliding with their neighbours — the 11px desktop size collided badly here. */}
      <svg className="gap-diagram-mobile" viewBox="0 0 520 620" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {[75, 205, 335, 465].map((colX, i) => (
          <text key={i} x={colX} y="18" textAnchor="middle" style={{ ...labelStyle, fontSize: '9px', letterSpacing: '.1em' }}>{items[i]?.name}</text>
        ))}

        {[75, 205, 335, 465].map((colX, i) => {
          const s = strandStyle[i];
          return (
            <g key={i}>
              <path
                d={`M ${colX + s.jitter},36 Q ${colX + s.jitter * 0.4},165 ${colX},310`}
                fill="none"
                stroke="var(--body-grey)"
                strokeWidth="1.4"
                strokeDasharray={s.dash}
                strokeOpacity={s.opacity}
              />
              <line x1={colX} y1="390" x2={colX} y2="560" stroke="var(--body-grey)" strokeWidth="1.4" strokeOpacity="0.55" />
            </g>
          );
        })}

        <rect x="40" y="310" width="440" height="80" fill="var(--navy)" />
        <line x1="40" y1="390" x2="480" y2="390" stroke="var(--gold)" strokeWidth="1" />
        <text x="260" y="355" textAnchor="middle" style={captionStyle}>{centreLabel}</text>

        <path d="M 75,568 L 75,576 L 465,576 L 465,568" fill="none" stroke="var(--gold)" strokeWidth="1" />
      </svg>

      {/* State/desc copy preserved (not dropped) — the old .pillars text-card grid carried
          this alongside each strand name; kept here as a compact, secondary caption row so
          nothing approved is lost, while the diagram above is now the section's primary
          visual. */}
      <div className="gap-diagram-captions">
        {items.map((item, i) => (
          <div className="gap-diagram-caption" key={i}>
            <span className="gap-diagram-caption-state">{item.state}</span>
            <span className="gap-diagram-caption-desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
