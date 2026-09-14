'use client';
import { t, tx, type Lang } from '@/lib/translations';
import { useSiteChrome } from '@/lib/useSiteChrome';
import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';
import ModelSpineDiagram from '../ModelSpineDiagram';

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
            <ModelSpineDiagram locale={locale} />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
