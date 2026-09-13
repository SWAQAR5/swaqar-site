'use client';
import { t, tx, type Lang } from '@/lib/translations';
import { useSiteChrome } from '@/lib/useSiteChrome';
import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';

const SUPPORTED_LOCALES: Lang[] = ['en', 'ar', 'fr', 'zh'];

// Stage 3 split — The Model, moved verbatim off the home page onto its own route. Content,
// markup, and classes are unchanged from the original .gates section; only the surrounding
// page shell (SiteHeader/SiteFooter/useSiteChrome) is new, shared with home and /arms so
// behaviour (scroll-reveal, nav, mobile menu, language switcher) is identical everywhere.
export default function ModelClient({ locale }: { locale: string }) {
  const lang: Lang = SUPPORTED_LOCALES.includes(locale as Lang) ? (locale as Lang) : 'en';

  useSiteChrome(lang);

  return (
    <>
      <SiteHeader locale={locale} />

      <main>
        <section className="gates" id="model">
          <div className="wrap">
            <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.gates.sectionTag, lang)}</span></div>
            <h2 className="sec-h r" data-d="1">{tx(t.gates.heading, lang)}<br/><em>{tx(t.gates.headingEm, lang)}</em></h2>
            <p className="sec-p r" data-d="2">{tx(t.gates.subDesc, lang)}</p>
            <div className="gates-grid">
              {(t.gates.gatesList[lang] ?? t.gates.gatesList['en']).map((gate, i) => (
                <div className="gate r" key={i} data-d={i}>
                  <div className="gate-n">{['01','02','03','04'][i]}</div>
                  <div className="gate-ico">
                    {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>}
                    {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6M9 16h6M9 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"/></svg>}
                    {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l10 5v5c0 5.55-3.84 10.74-10 12C5.84 22.74 2 17.55 2 12V7l10-5z"/></svg>}
                    {i === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                  </div>
                  <div className="gate-tag">{gate.tag}</div>
                  <div className="gate-name">{gate.name}</div>
                  <div className="gate-desc">{gate.desc}</div>
                  {'chips' in gate && gate.chips.length > 0 && (
                    <div className="foot-badges" style={{marginTop:'16px'}}>
                      {gate.chips.map((chip, j) => <span className="foot-badge" key={j}>{chip}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
