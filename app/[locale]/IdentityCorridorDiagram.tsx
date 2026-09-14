import { t, tx, type Lang } from '@/lib/translations';

// Stage 4 batch 2, item 1 — "A coordination layer, not a counterparty." CATEGORY-CRITICAL:
// this geometry is load-bearing for the non-custodial lock, so the structure below is
// deliberate at every point:
//   - The execution corridor (where the four licensed actors sit) and the SWAQAR rail are
//     two entirely separate horizontal planes that never touch or cross. The corridor line
//     itself never passes anywhere near the rail.
//   - SWAQAR is the whole rail — never a single node — and nothing sits "on" the corridor
//     representing SWAQAR.
//   - The four thin connectors between rail and corridor are dashed, not solid or arrowed,
//     so they read as oversight/visibility rather than a pipe something could flow through.
//   - Zero arrowheads anywhere in this file, on any line.
//   - Zero money/cargo/people iconography — only lines and dots.
// All text is live: actor labels from t.identity.actor.*, verb captions from
// t.identity.corridorLabel / .railLabel (verb distinction preserved exactly as supplied:
// actors PERFORM/EXECUTE, SWAQAR COORDINATES), rail name from the locked "SWAQAR" plus the
// existing t.identity.isItems[0] "Trade Coordination Layer" string (same reuse as batch 1).
//
// RTL: per the confirmed ruling for this diagram (unlike Corridor Architecture, item 2),
// reading-order flow is allowed to follow locale direction. Built as a CSS grid (like batch
// 1's Model spine diagram) rather than fixed SVG coordinates, so it naturally reorders under
// dir="rtl" the same proven way — geometry and text both stay correctly aligned per actor.
export default function IdentityCorridorDiagram({ locale }: { locale: string }) {
  const lang: Lang = (['en', 'ar', 'fr', 'zh'] as const).includes(locale as Lang) ? (locale as Lang) : 'en';
  const actors = [t.identity.actor.verification, t.identity.actor.banks, t.identity.actor.logistics, t.identity.actor.counterparties];
  const railName = `SWAQAR — ${(t.identity.isItems[lang] ?? t.identity.isItems['en'])[0]}`;

  const RailBar = () => (
    <svg viewBox="0 0 1200 30" preserveAspectRatio="none" className="id-diagram-rail-svg" aria-hidden="true">
      <rect x="0" y="0" width="1200" height="22" fill="var(--navy)" />
      <line x1="0" y1="23" x2="1200" y2="23" stroke="var(--gold)" strokeWidth="2" />
    </svg>
  );
  const CorridorLine = () => (
    <svg viewBox="0 0 1200 6" preserveAspectRatio="none" className="id-diagram-corridor-svg" aria-hidden="true">
      <line x1="0" y1="3" x2="1200" y2="3" stroke="var(--body-grey)" strokeWidth="1.4" />
    </svg>
  );
  const Connector = () => (
    <svg viewBox="0 0 10 60" className="id-diagram-connector-svg" aria-hidden="true">
      <line x1="5" y1="0" x2="5" y2="60" stroke="var(--navy)" strokeWidth="1.2" strokeDasharray="3 4" strokeOpacity="0.5" />
    </svg>
  );
  const Node = () => (
    <svg viewBox="0 0 20 20" className="id-diagram-node-svg" aria-hidden="true">
      <circle cx="10" cy="10" r="4.5" fill="var(--navy)" />
    </svg>
  );

  return (
    <div className="id-diagram r" data-d="3">
      {/* ── Desktop/tablet: rail above, corridor below, never touching ── */}
      <div className="id-diagram-desktop">
        <div className="id-diagram-rail-label">{railName}</div>
        <div className="id-diagram-rail-track"><RailBar /></div>
        <div className="id-diagram-rail-caption">{tx(t.identity.railLabel, lang)}</div>
        <div className="id-diagram-connectors-row">
          {actors.map((_, i) => <div className="id-diagram-connector" key={i}><Connector /></div>)}
        </div>
        <div className="id-diagram-corridor-track">
          <CorridorLine />
          <div className="id-diagram-nodes-row">
            {actors.map((_, i) => <div className="id-diagram-node" key={i}><Node /></div>)}
          </div>
        </div>
        <div className="id-diagram-corridor-caption">{tx(t.identity.corridorLabel, lang)}</div>
        <div className="id-diagram-actors-row">
          {actors.map((actor, i) => <div className="id-diagram-actor-label" key={i}>{tx(actor, lang)}</div>)}
        </div>
      </div>

      {/* ── Mobile: one vertical execution corridor with a parallel SWAQAR rail beside it,
          linked by short perpendicular marks — not the rail sitting between/on the corridor. */}
      <div className="id-diagram-mobile-grid">
        <div className="id-diagram-mobile-rail-line" />
        <div className="id-diagram-mobile-corridor-line" />
        {actors.map((actor, i) => (
          <div className="id-diagram-mobile-row" key={i}>
            <div className="id-diagram-mobile-marker" style={{ gridRow: i + 1 }}>
              <svg viewBox="0 0 60 40" aria-hidden="true">
                <line x1="10" y1="14" x2="10" y2="26" stroke="var(--gold)" strokeWidth="2" />
                <line x1="10" y1="20" x2="46" y2="20" stroke="var(--navy)" strokeWidth="1.2" strokeDasharray="3 4" strokeOpacity="0.5" />
                <circle cx="50" cy="20" r="4" fill="var(--navy)" />
              </svg>
            </div>
            <div className="id-diagram-mobile-text" style={{ gridRow: i + 1 }}>{tx(actor, lang)}</div>
          </div>
        ))}
        <div className="id-diagram-mobile-caption id-diagram-mobile-caption-rail">
          <span className="id-diagram-rail-label">{railName}</span>
          <span className="id-diagram-rail-caption">{tx(t.identity.railLabel, lang)}</span>
        </div>
        <div className="id-diagram-mobile-caption">
          <span className="id-diagram-corridor-caption">{tx(t.identity.corridorLabel, lang)}</span>
        </div>
      </div>
    </div>
  );
}
