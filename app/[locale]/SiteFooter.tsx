import Link from 'next/link';
import { t, tx, type Lang } from '@/lib/translations';

// Shared across every page (home, /model, /arms — Stage 3 split). Links use the same
// absolute `/{locale}#anchor` strategy as SiteHeader (see comment there) except for the two
// links that used to point at the now-removed #model / #arms anchors — those become real
// page links to /{locale}/model and /{locale}/arms (Stage 3 item 2.1).
export default function SiteFooter({ locale }: { locale: string }) {
  const lang: Lang = (['en', 'ar', 'fr', 'zh'] as const).includes(locale as Lang) ? (locale as Lang) : 'en';
  return (
    <footer>
      <div className="wrap">
        <div className="foot-inner">
          <div>
            <div className="foot-mark">
              <img className="foot-mark-img" src="/emblem_reversed.png" alt="SWAQAR Trade" />
              <div><div className="foot-name">SWAQAR</div><div className="foot-sub">{tx(t.nav.lockupSub, lang)}</div></div>
            </div>
            <p className="foot-desc">{tx(t.footer.desc, lang)}</p>
          </div>
          <div className="foot-col"><h3>{tx(t.footer.model, lang)}</h3><ul><li><a href={`/${locale}#corridors`}>{tx(t.footer.footerLinks.corridorArch, lang)}</a></li><li><a href={`/${locale}/model`}>{tx(t.footer.footerLinks.gateModel, lang)}</a></li><li><a href={`/${locale}#governance`}>{tx(t.footer.footerLinks.govArch, lang)}</a></li><li><a href={`/${locale}/arms`}>{tx(t.footer.footerLinks.strategicArms, lang)}</a></li></ul></div>
          <div className="foot-col"><h3>{tx(t.footer.engage, lang)}</h3><ul><li><a href={`/${locale}#contact`}>{tx(t.footer.footerLinks.instInquiry, lang)}</a></li><li><a href={`/${locale}#identity`}>{tx(t.footer.footerLinks.identity, lang)}</a></li><li><a href={`/${locale}#governance`}>{tx(t.footer.footerLinks.reviewGov, lang)}</a></li><li style={{color:'rgba(255,255,255,0.32)'}}>{tx(t.footer.footerLinks.jeddah, lang)}</li></ul></div>
          <div className="foot-col"><h3>{tx(t.footer.corridorRegions, lang)}</h3><ul><li><a href={`/${locale}#corridors`}>{tx(t.footer.footerLinks.africaME, lang)}</a></li><li><a href={`/${locale}#corridors`}>{tx(t.footer.footerLinks.meAsia, lang)}</a></li><li><a href={`/${locale}#corridors`}>{tx(t.footer.footerLinks.africaAsia, lang)}</a></li><li><a href={`/${locale}/model`}>{tx(t.footer.footerLinks.gateProcess, lang)}</a></li></ul></div>
        </div>
        <p className="foot-legal">{tx(t.footer.legal, lang)}</p>
        <div className="foot-btm">
          <div style={{display:'flex',gap:'24px',alignItems:'center',flexWrap:'wrap'}}>
            <span className="foot-copy">© {new Date().getFullYear()} {tx(t.footer.copyright, lang)}</span>
            <span className="foot-copy" style={{opacity:.5}}>{tx(t.footer.secondaryLine, lang)}</span>
          </div>
          <div className="foot-badges">{(t.footer.badges[lang] ?? t.footer.badges['en']).map((badge, i) => <span className="foot-badge" key={i}>{badge}</span>)}</div>
          <a href="https://swaqargroup.com" target="_blank" rel="noopener noreferrer" style={{fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,.35)',textDecoration:'none',marginLeft:'auto'}}>{tx(t.footer.parentLink, lang)}</a>
          <Link href={`/${locale}/privacy`} style={{fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,.35)',textDecoration:'none'}}>{tx(t.footer.privacyPolicy, lang)}</Link>
        </div>
      </div>
    </footer>
  );
}
