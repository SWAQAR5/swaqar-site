import { t, type Lang } from '@/lib/translations';

// Stage 4 batch 1, item 3 — the signature "four-gate governance spine" visual, replacing the
// old .gates-grid four-card layout entirely (no cards, no icons, no progress states — per the
// brief). Roman numerals I-IV are baked directly as locale-invariant visual markers (confirmed
// by the user — not translation keys, not converted to Arabic-Indic digits on /ar). Titles and
// supporting phrases are pulled live from t.gates.gatesList[locale][i].name/.desc — copy
// already approved and unchanged since Stage 3; nothing new invented here.
//
// The spine itself (the gold line + navy gate-marker strokes) is real, minimal SVG geometry —
// only Roman numerals live inside it, which are fixed-width, locale-invariant, and safe.
// Translated title/desc text renders as ordinary HTML beneath/beside each marker instead of as
// SVG <text>, deliberately: the Coordination Gap diagram (item 2, same batch) hit real clipping
// and overlap bugs putting full translated strings inside fixed SVG viewBox coordinates, and
// gate titles here can run considerably longer in some locales (e.g. "Renouvellement ou
// Désengagement", "التجديد أو الانسحاب") plus a full supporting sentence beneath each — content
// that needs to wrap naturally per column width, which SVG <text> can't do on its own. This
// still satisfies "text comes from live translation props, nothing baked into SVG": the SVG
// itself carries zero translatable copy.
//
// Desktop: horizontal spine, 4 gates left-to-right. Mobile: vertical spine down the left
// (CSS grid, column 1), gates stacked with title/desc to the right (column 2) — a single grid
// so marker and text always align to the same row regardless of how many lines a given
// locale's description wraps to.
export default function ModelSpineDiagram({ locale }: { locale: string }) {
  const lang: Lang = (['en', 'ar', 'fr', 'zh'] as const).includes(locale as Lang) ? (locale as Lang) : 'en';
  const gates = t.gates.gatesList[lang] ?? t.gates.gatesList['en'];
  const numerals = ['I', 'II', 'III', 'IV'];

  const GateMarkerDesktop = () => (
    <svg viewBox="0 0 40 40" className="model-gate-marker-svg" aria-hidden="true">
      <line x1="15" y1="4" x2="15" y2="36" stroke="var(--navy)" strokeWidth="1.6" />
      <line x1="25" y1="4" x2="25" y2="36" stroke="var(--navy)" strokeWidth="1.6" />
    </svg>
  );
  const GateMarkerMobile = () => (
    <svg viewBox="0 0 40 40" className="model-gate-marker-svg" aria-hidden="true">
      <line x1="4" y1="15" x2="36" y2="15" stroke="var(--navy)" strokeWidth="1.6" />
      <line x1="4" y1="25" x2="36" y2="25" stroke="var(--navy)" strokeWidth="1.6" />
    </svg>
  );

  return (
    <div className="model-spine r" data-d="2">
      {/* ── Desktop: horizontal spine ── */}
      <div className="model-spine-desktop">
        <div className="model-spine-track">
          <svg className="model-spine-line-svg" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="20" x2="1200" y2="20" stroke="var(--gold)" strokeWidth="1" />
          </svg>
          <div className="model-gates-row">
            {gates.map((_, i) => (
              <div className="model-gate-marker" key={i}><GateMarkerDesktop /></div>
            ))}
          </div>
        </div>
        <div className="model-gates-text">
          {gates.map((gate, i) => (
            <div className="model-gate-col" key={i}>
              <div className="model-gate-numeral">{numerals[i]}</div>
              <div className="model-gate-title">{gate.name}</div>
              <div className="model-gate-desc">{gate.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: vertical spine down the left ──
          Fragment, not a wrapping row div: the marker and text cells are placed directly as
          grid items of .model-spine-mobile-grid (each pinned to its own gridRow) so they line
          up on one shared row regardless of how many lines that row's description wraps to. A
          wrapping div here wouldn't work — display:contents removes a row wrapper's own box
          from the grid, taking any gridRow set on the wrapper itself with it. */}
      <div className="model-spine-mobile-grid">
        <div className="model-spine-mobile-line" />
        {gates.map((gate, i) => (
          <div className="model-gate-mobile-row" key={i}>
            <div className="model-gate-marker-mobile" style={{ gridRow: i + 1 }}><GateMarkerMobile /></div>
            <div className="model-gate-mobile-text" style={{ gridRow: i + 1 }}>
              <div className="model-gate-numeral">{numerals[i]}</div>
              <div className="model-gate-title">{gate.name}</div>
              <div className="model-gate-desc">{gate.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
