'use client';
import { useState } from 'react';
import { t, tx, type Lang } from '@/lib/translations';
import { useSiteChrome } from '@/lib/useSiteChrome';
import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';

const SUPPORTED_LOCALES: Lang[] = ['en', 'ar', 'fr', 'zh'];

// Stage 3 split — Strategic Arms, moved verbatim off the home page onto its own route.
// Content, markup, classes, and the accordion behaviour are unchanged from the original .arms
// section; only the surrounding page shell is new (shared with home and /model).
export default function ArmsClient({ locale }: { locale: string }) {
  const lang: Lang = SUPPORTED_LOCALES.includes(locale as Lang) ? (locale as Lang) : 'en';

  useSiteChrome(lang);

  // Same accordion mechanism as before the split — first arm open by default, rest collapsed.
  // Panels stay mounted in the DOM at all times (visibility is CSS-driven) so every description
  // remains readable by search engines and screen readers regardless of open/closed state.
  const [openArms, setOpenArms] = useState<boolean[]>([true, false, false, false, false, false, false]);
  const toggleArm = (i: number) => setOpenArms((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <>
      <SiteHeader locale={locale} />

      <main>
        <section className="arms" id="arms">
          <div className="wrap">
            <div className="arms-inner">
              <div>
                <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.arms.sectionTag, lang)}</span></div>
                <h2 className="sec-h r" data-d="1">{tx(t.arms.heading, lang)} <em>{tx(t.arms.headingEm, lang)}</em> {tx(t.arms.headingLine2, lang)}</h2>
                <div className="arm-list" style={{marginTop:'36px'}}>
                  {(t.arms.armsList[lang] ?? t.arms.armsList['en']).map(([n, name, desc], i) => {
                    const isOpen = openArms[i] ?? false;
                    const btnId = `arm-btn-${i}`;
                    const panelId = `arm-panel-${i}`;
                    return (
                      <div className="arm r" key={n}>
                        <span className="arm-n">{n}</span>
                        <div className="arm-body">
                          <button
                            type="button"
                            id={btnId}
                            className="arm-toggle"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleArm(i)}
                          >
                            <span className="arm-name">{name}</span>
                            <svg className="arm-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <div className="arm-panel" id={panelId} role="region" aria-labelledby={btnId} data-open={isOpen}>
                            <div className="arm-panel-inner">
                              <div className="arm-desc">{desc}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="abx r" data-d="2">
                <div className="abx-tag">{tx(t.arms.abxTag, lang)}</div>
                <div className="abx-h">{tx(t.arms.abxH, lang)}</div>
                <div className="abx-p">{tx(t.arms.abxP, lang)}</div>
                <div className="abx-metrics">
                  {(t.arms.abxMetrics[lang] ?? t.arms.abxMetrics['en']).map(([val, lbl], i) => (
                    <div className="abx-m" key={i}><div className="abx-mv">{val}</div><div className="abx-ml">{lbl}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
