import { t, tx, type Lang } from '@/lib/translations';

// Coordination Gap diagram — full rebuild replacing the old fragmented-strand SVG (raw pixel
// coordinates, no dir-awareness by design) with a semantic before/after comparison built from
// plain HTML + CSS Grid, per the approved reference (CoordinationGapSection.tsx /
// coordination-gap.css). Adapted, not copied: reference used its own `--cg-*` token set and
// rem-based CSS-module sizing; this reuses the site's existing locked palette (var(--navy) etc.,
// see :root in swaqar.css) and the sitewide px-based convention, and drops the reference's
// six-<i>-per-line markup for broken strands in favour of a single repeating-gradient
// background (same dashed-vs-solid visual, far less markup, same technique the reference itself
// already used for the mobile broken-line variant).
//
// RTL: unlike the old map-style diagrams elsewhere on this page (deliberately unmirrored,
// geography-anchored), this is a plain grid-based comparison with no fixed geography to
// preserve, so it DOES mirror under RTL — CSS Grid reverses column order automatically per the
// container's direction, and every position/spacing rule below is a logical property
// (inset-inline-*, border-inline-*, margin-inline, padding-inline) rather than left/right, so
// "without coordination" correctly lands on the reading-first side in both directions.
export default function CoordinationGapDiagram({ locale }: { locale: string }) {
  const lang: Lang = (['en', 'ar', 'fr', 'zh'] as const).includes(locale as Lang) ? (locale as Lang) : 'en';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const items = t.gap.items[lang] ?? t.gap.items['en'];
  // "Trade Coordination Layer" — the existing, already-reviewed t.identity.isItems[0] string,
  // reused here (not retyped) paired with the locked, untranslated "SWAQAR" brand name.
  const layerRole = (t.identity.isItems[lang] ?? t.identity.isItems['en'])[0];

  return (
    <div className="gap-diagram r" data-d="2" dir={dir}>
      <div className="gap-rail gap-desktop-only" aria-hidden="true">
        <strong>SWAQAR</strong>
        <span>{layerRole}</span>
      </div>

      <div className="gap-cmp-head gap-desktop-only">
        <div>
          <div className="gap-kicker">{tx(t.gap.withoutLabel, lang)}</div>
          <div className="gap-state">{tx(t.gap.fragmentedLabel, lang)}</div>
        </div>
        <div className="gap-cmp-mid-note">{tx(t.gap.coordinatesAcross, lang)}</div>
        <div className="gap-cmp-head-end">
          <div className="gap-kicker">{tx(t.gap.withLabel, lang)}</div>
          <div className="gap-state">{tx(t.gap.coordinatedLabel, lang)}</div>
        </div>
      </div>

      <div className="gap-cmp-rows gap-desktop-only" role="img" aria-label={tx(t.gap.diagramAriaLabel, lang)}>
        {items.map((item) => (
          <div className="gap-cmp-row" key={item.name}>
            <div className="gap-cmp-side">
              <div className="gap-cmp-meta">
                <div className="gap-cmp-name">{item.name}</div>
                <div className="gap-cmp-state">{item.state}</div>
              </div>
              <div className="gap-broken" aria-hidden="true" />
            </div>
            <div className="gap-cmp-mid" aria-hidden="true" />
            <div className="gap-cmp-side gap-cmp-side-end">
              <div className="gap-cmp-meta">
                <div className="gap-cmp-name">{item.name}</div>
              </div>
              <div className="gap-solid" aria-hidden="true" />
            </div>
          </div>
        ))}
        <div className="gap-cmp-bracket" aria-hidden="true" />
      </div>
      <div className="gap-cmp-caption gap-desktop-only">{tx(t.gap.coordinatedCaption, lang)}</div>

      <div className="gap-mobile">
        <div className="gap-mobile-state">
          <div className="gap-kicker">{tx(t.gap.withoutLabel, lang)}</div>
          <div className="gap-mobile-title">{tx(t.gap.fragmentedLabel, lang)}</div>
          <div className="gap-mobile-list">
            {items.map((item) => (
              <div className="gap-mobile-item" key={`before-${item.name}`}>
                <div>
                  <div className="gap-mobile-label">{item.name}</div>
                  <div className="gap-broken gap-mobile-line" aria-hidden="true" />
                </div>
                <div className="gap-mobile-state-txt">{item.state}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="gap-rail gap-mobile-rail" aria-hidden="true">
          <strong>SWAQAR</strong>
          <span>{layerRole}</span>
        </div>

        <div className="gap-mobile-state">
          <div className="gap-kicker">{tx(t.gap.withLabel, lang)}</div>
          <div className="gap-mobile-title">{tx(t.gap.coordinatedLabel, lang)}</div>
          <div className="gap-mobile-list">
            {items.map((item) => (
              <div key={`after-${item.name}`}>
                <div className="gap-mobile-label">{item.name}</div>
                <div className="gap-solid gap-mobile-line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
