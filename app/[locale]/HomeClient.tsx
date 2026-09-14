'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { t, tx, type Lang } from '@/lib/translations';
import { useSiteChrome } from '@/lib/useSiteChrome';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import HeroGlobe from './HeroGlobe';
import CoordinationGapDiagram from './CoordinationGapDiagram';

const SUPPORTED_LOCALES: Lang[] = ['en', 'ar', 'fr', 'zh'];

export default function HomeClient({ locale }: { locale: string }) {
  // Derive lang from the URL locale prop. Only fall back to 'en' if `locale` isn't one of the
  // locales lib/translations.ts actually has data for — never override a valid non-en locale.
  const lang: Lang = SUPPORTED_LOCALES.includes(locale as Lang) ? (locale as Lang) : 'en';
  const router = useRouter();
  const [formData, setFormData] = useState({
    organisation: '',
    representative: '',
    email: '',
    category: '',
    inquiry: '',
    fax_number: '', // honeypot — must stay empty; hidden from real users, see input below
  });
  const [formStatus, setFormStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  // Two disclosures (copy trim v2.1) — same collapse/expand mechanism the old arms accordion
  // used (.arm-toggle/.arm-panel/.arm-chevron), reused rather than a new component. Both start
  // collapsed, since the point of collapsing this legal/governance text is to shorten the page.
  const [corGovNoteOpen, setCorGovNoteOpen] = useState(false);
  const [govPositionOpen, setGovPositionOpen] = useState(false);

  useSiteChrome(lang);

  // Stage 3 old-link safety: The Model and Strategic Arms moved off the home page onto their
  // own routes (/model, /arms). #model and #arms were never separate crawlable URLs (nothing
  // for search engines to redirect), but a real person with an old bookmarked or shared
  // /{locale}#model or /{locale}#arms link would otherwise silently land at the top of the
  // home page with no explanation. Send them on to the real page instead. One-time check on
  // mount against a fixed set of two hashes — cannot loop (the destination pages carry no
  // matching effect of their own).
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#model') router.replace(`/${lang}/model`);
    else if (hash === '#arms') router.replace(`/${lang}/arms`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SiteHeader locale={locale} />

      <section className="hero" id="home">
        <HeroGlobe />
        <div className="hero-body">
          <div className="eyebrow r"><div className="eyebrow-line"></div><span className="eyebrow-text">{tx(t.hero.eyebrow, lang)}</span></div>
          <h1 className="hero-h1 r" data-d="1">{tx(t.hero.h1line1, lang)}<br/>{tx(t.hero.h1line2, lang)} <em>{tx(t.hero.h1em, lang)}</em></h1>
          {/* Stage 4 batch 1 — .hero-sub already existed in swaqar.css (italic serif, gold-
              tinted, generous margin) but was never wired to any JSX until now: exactly the
              "clearly secondary" treatment this subtitle needs, so reused rather than
              inventing new styling. */}
          {tx(t.hero.subtitle, lang) && <p className="hero-sub r" data-d="2">{tx(t.hero.subtitle, lang)}</p>}
          <p className="hero-desc r" data-d="3">{tx(t.hero.desc, lang)}</p>
          <div className="eyebrow r" data-d="3"><div className="eyebrow-line"></div><span className="eyebrow-text">{tx(t.hero.tag, lang)}</span></div>
          <div className="hero-btns r" data-d="4">
            <a href="#contact" className="btn-gold"><span>{tx(t.hero.btnInquiry, lang)}</span><svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a href="#corridors" className="btn-ghost-light">{tx(t.hero.btnExplore, lang)}</a>
          </div>
        </div>
        <div className="hero-scroll"><div className="hero-scroll-line"></div><span className="hero-scroll-txt">{tx(t.hero.scroll, lang)}</span></div>
      </section>

      <div className="stats">
        <div className="stat r"><span className="stat-n">3</span><span className="stat-l">{tx(t.stats.corridorRegions, lang)}</span></div>
        <div className="stat r" data-d="1"><span className="stat-n">4</span><span className="stat-l">{tx(t.stats.institutionalGates, lang)}</span></div>
        <div className="stat r" data-d="2"><span className="stat-n">Phase I</span><span className="stat-l">{tx(t.stats.phaseFoundation, lang)}</span></div>
        <div className="stat r" data-d="3"><span className="stat-n">Non-custodial</span><span className="stat-l">{tx(t.stats.nonCustodialByDesign, lang)}</span></div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_,i) => (
            <span key={i} style={{display:'contents'}}>
              {(t.marquee.items[lang] ?? t.marquee.items['en']).map((item,j) => (
                <span className="mq-item" key={j}><span className="mq-dot"></span>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* NEW — V2.0 copy lock: "The Coordination Gap". Built from existing sitewide components
          (.sec-tag/.sec-h/.pillars/.gov-note) per instruction — no new styling invented. */}
      <section className="gap" id="gap">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.gap.sectionTag, lang)}</span></div>
          <h2 className="sec-h r" data-d="1">{tx(t.gap.heading, lang)} <em>{tx(t.gap.headingEm, lang)}</em></h2>
          <CoordinationGapDiagram locale={locale} />
          <div className="gov-note r" data-d="3" style={{marginTop:'32px'}}>
            <p className="gov-note-txt">{tx(t.gap.closing, lang)}</p>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section className="mission" id="mission">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line" /><span className="sec-tag-txt">{tx(t.mission.sectionTag, lang)}</span></div>
          <h2 className="sec-h r" data-d="1" style={{color:'var(--white)'}}>{tx(t.mission.heading, lang)}<br /><em>{tx(t.mission.headingEm, lang)}</em></h2>
          <div className="mv-inner">
            <div className="mv-block r" data-d="1">
              <div className="mv-block-tag">{tx(t.mission.missionTag, lang)}</div>
              <div className="mv-block-h">{tx(t.mission.missionH, lang)}</div>
              <p className="mv-block-p">{tx(t.mission.missionP, lang)}</p>
            </div>
            <div className="mv-block r" data-d="2">
              <div className="mv-block-tag">{tx(t.mission.visionTag, lang)}</div>
              <div className="mv-block-h">{tx(t.mission.visionH, lang)}</div>
              <p className="mv-block-p">{tx(t.mission.visionP, lang)}</p>
            </div>
          </div>
          <div className="mv-values">
            <div className="mv-value r" data-d="1">
              <div className="mv-value-name">{tx(t.mission.values.governance.name, lang)}</div>
              <div className="mv-value-desc">{tx(t.mission.values.governance.desc, lang)}</div>
            </div>
            <div className="mv-value r" data-d="2">
              <div className="mv-value-name">{tx(t.mission.values.trust.name, lang)}</div>
              <div className="mv-value-desc">{tx(t.mission.values.trust.desc, lang)}</div>
            </div>
            <div className="mv-value r" data-d="3">
              <div className="mv-value-name">{tx(t.mission.values.verification.name, lang)}</div>
              <div className="mv-value-desc">{tx(t.mission.values.verification.desc, lang)}</div>
            </div>
            <div className="mv-value r" data-d="4">
              <div className="mv-value-name">{tx(t.mission.values.continuity.name, lang)}</div>
              <div className="mv-value-desc">{tx(t.mission.values.continuity.desc, lang)}</div>
            </div>
          </div>
          <div className="mv-intent r" data-d="3">
            <div className="mv-intent-line" />
            <p className="mv-intent-txt"><strong>{tx(t.mission.intentLabel, lang)}</strong> {tx(t.mission.intentTxt, lang)}</p>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section className="identity" id="identity">
        <div className="wrap">
          <div className="id-inner">
            <div>
              <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.identity.sectionTag, lang)}</span></div>
              <h2 className="sec-h r" data-d="1">{tx(t.identity.heading, lang)}<br/><em>{tx(t.identity.headingEm, lang)}</em></h2>
              <p className="sec-p r" data-d="2">{tx(t.identity.desc, lang)}</p>
              <div className="pillars r" data-d="3">
                {(t.identityPillars.items[lang] ?? t.identityPillars.items['en']).map((p, i) => (
                  <div className="pillar" key={i}><div className="pillar-name">{p.name}</div><div className="pillar-desc">{p.desc}</div></div>
                ))}
              </div>
            </div>
            <div className="id-card r" data-d="2">
              <div className="id-quote">{tx(t.identity.quote, lang)}</div>
              <div className="id-meta">
                <div className="id-badge-circle"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8923A" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                <div><div className="id-badge-name">{tx(t.identity.badgeName, lang)}</div><div className="id-badge-role">{tx(t.identity.badgeRole, lang)}</div></div>
              </div>
              <div className="id-medallion"><span className="id-medallion-n">I</span><span className="id-medallion-t">{tx(t.identity.medallionT, lang)}</span></div>
            </div>
          </div>
          <div className="id-grid r">
            <div className="id-col id-col-yes">
              <div className="id-col-head">{tx(t.identity.isHead, lang)}</div>
              {(t.identity.isItems[lang] ?? t.identity.isItems['en']).map((item, i) => (
                <div className="id-row" key={i}><div className="id-pip">—</div><span className="id-txt">{item}</span></div>
              ))}
            </div>
            <div className="id-col id-col-no">
              <div className="id-col-head">{tx(t.identity.isNotHead, lang)}</div>
              {(t.identity.isNotItems[lang] ?? t.identity.isNotItems['en']).map((item, i) => (
                <div className="id-row" key={i}><div className="id-pip">✕</div><span className="id-txt">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="gov-note r" data-d="3" style={{marginTop:'32px'}}>
            <div className="gov-note-tag">{tx(t.identity.revenueTag, lang)}</div>
            <p className="gov-note-txt">{tx(t.identity.revenueTxt, lang)}</p>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section className="corridors" id="corridors">
        <div className="wrap">
          <div className="cor-head">
            <div>
              <div className="sec-tag r"><div className="sec-tag-line" /><span className="sec-tag-txt">{tx(t.corridors.sectionTag, lang)}</span></div>
              <h2 className="sec-h r" data-d="1">{tx(t.corridors.heading, lang)} <em>{tx(t.corridors.headingEm, lang)}</em></h2>
            </div>
            <p className="sec-p r" data-d="2">{tx(t.corridors.subDesc, lang)}</p>
          </div>

          <div className="cor-map-box r">
            <svg viewBox="0 0 900 295" fill="none" style={{width:'100%',display:'block'}}>
              <defs><filter id="bf"><feGaussianBlur stdDeviation="3" /></filter></defs>
              <line x1="0" y1="74" x2="900" y2="74" stroke="rgba(11,31,58,.06)" strokeWidth=".5" strokeDasharray="4 8" />
              <line x1="0" y1="148" x2="900" y2="148" stroke="rgba(11,31,58,.06)" strokeWidth=".5" strokeDasharray="4 8" />
              <line x1="0" y1="222" x2="900" y2="222" stroke="rgba(11,31,58,.06)" strokeWidth=".5" strokeDasharray="4 8" />
              <path d="M 110,188 C 200,163 270,133 360,113" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 8" />
              <path d="M 420,106 C 530,90 640,82 768,108" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 8" />
              <path d="M 110,188 C 200,163 270,133 360,113" stroke="#B8923A" strokeWidth="1.2" strokeDasharray="3 7" opacity=".5"><animate attributeName="stroke-dashoffset" from="0" to="-60" dur="3s" repeatCount="indefinite" /></path>
              <path d="M 420,106 C 530,90 640,82 768,108" stroke="#B8923A" strokeWidth="1.2" strokeDasharray="3 7" opacity=".35"><animate attributeName="stroke-dashoffset" from="0" to="-60" dur="4.5s" repeatCount="indefinite" /></path>
              <circle cx="110" cy="188" r="9" fill="rgba(11,31,58,.1)" stroke="#0B1F3A" strokeWidth="1.5" />
              <circle cx="110" cy="188" r="4" fill="#0B1F3A" />
              <circle cx="110" cy="188" r="16" fill="rgba(11,31,58,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" repeatCount="indefinite" /></circle>
              <text x="110" y="212" textAnchor="middle" fontSize="7" fill="#0B1F3A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">{tx(t.corridors.map.africa, lang)}</text>
              <text x="110" y="221" textAnchor="middle" fontSize="6" fill="#718096" fontFamily="DM Sans,sans-serif" letterSpacing="2">{tx(t.corridors.map.africaSub, lang)}</text>
              <circle cx="390" cy="109" r="9" fill="rgba(11,31,58,.1)" stroke="#0B1F3A" strokeWidth="1.5" />
              <circle cx="390" cy="109" r="4" fill="#0B1F3A" />
              <circle cx="390" cy="109" r="16" fill="rgba(11,31,58,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" begin=".9s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" begin=".9s" repeatCount="indefinite" /></circle>
              <text x="390" y="88" textAnchor="middle" fontSize="7" fill="#0B1F3A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">{tx(t.corridors.map.middleEast, lang)}</text>
              <text x="390" y="97" textAnchor="middle" fontSize="6" fill="#718096" fontFamily="DM Sans,sans-serif" letterSpacing="2">{tx(t.corridors.map.middleEastSub, lang)}</text>
              <rect x="340" y="130" width="100" height="22" rx="2" fill="#0B1F3A" />
              <text x="390" y="145" textAnchor="middle" fontSize="6" fill="#B8923A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">SWAQAR</text>
              <circle cx="776" cy="108" r="9" fill="rgba(11,31,58,.1)" stroke="#0B1F3A" strokeWidth="1.5" />
              <circle cx="776" cy="108" r="4" fill="#0B1F3A" />
              <circle cx="776" cy="108" r="16" fill="rgba(11,31,58,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" begin="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" begin="1.8s" repeatCount="indefinite" /></circle>
              <text x="776" y="87" textAnchor="middle" fontSize="7" fill="#0B1F3A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">{tx(t.corridors.map.asia, lang)}</text>
              <text x="776" y="96" textAnchor="middle" fontSize="6" fill="#718096" fontFamily="DM Sans,sans-serif" letterSpacing="2">{tx(t.corridors.map.asiaSub, lang)}</text>
              <circle r="4" fill="#B8923A" filter="url(#bf)" opacity=".7"><animateMotion dur="3s" repeatCount="indefinite" path="M 110,188 C 200,163 270,133 360,113" /></circle>
              <circle r="3.5" fill="#B8923A" filter="url(#bf)" opacity=".55"><animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M 420,106 C 530,90 640,82 768,108" /></circle>
            </svg>
          </div>

          <div className="cor-tier r" data-d="1">
            <div className="cor-tier-head">
              <span className="cor-tier-num">01</span>
              <span className="cor-tier-title">{tx(t.corridors.tierOneTitle, lang)}</span>
              <span className="cor-tier-badge">{tx(t.corridors.tierOneBadge, lang)}</span>
            </div>
            <div className="cor-card-active">
              <div className="cor-gov-note" style={{marginTop:'28px'}}>
                <div className="cor-gov-note-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
                </div>
                <div style={{flex:1}}>
                  <button
                    type="button"
                    id="cor-gov-note-btn"
                    className="arm-toggle"
                    aria-expanded={corGovNoteOpen}
                    aria-controls="cor-gov-note-panel"
                    onClick={() => setCorGovNoteOpen(v => !v)}
                  >
                    <span className="cor-gov-note-tag">{tx(t.corridors.govNoteTag, lang)}</span>
                    <svg className="arm-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="arm-panel" id="cor-gov-note-panel" role="region" aria-labelledby="cor-gov-note-btn" data-open={corGovNoteOpen}>
                    <div className="arm-panel-inner">
                      <p className="cor-gov-note-txt">{tx(t.corridors.govNoteTxt, lang)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cor-phase-label" style={{marginTop:'28px'}}><div className="cor-phase-dot" /><span className="cor-phase-txt">{tx(t.corridors.phaseLabel, lang)}</span></div>
              <p className="cor-active-desc">{tx(t.corridors.activeDesc, lang)}</p>
              <div className="cor-active-footer">
                <p className="cor-active-footer-txt">{tx(t.corridors.activeFooterTxt, lang)}</p>
                <div className="cor-active-footer-tags">
                  {(t.corridors.activeFooterTags[lang] ?? t.corridors.activeFooterTags['en']).map((tag, i) => (
                    <span className="cor-tag-gold" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="gold-rule"></div>

      {/* NEW — V2.0 copy lock: readiness states. Built from existing sitewide components
          (.sec-tag/.sec-h/.pillars/.gov-note) per instruction — no new styling invented. */}
      <section className="reality" id="reality">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.reality.sectionTag, lang)}</span></div>
          <h2 className="sec-h r" data-d="1">{tx(t.reality.heading, lang)} <em>{tx(t.reality.headingEm, lang)}</em></h2>
          <div className="pillars r" data-d="2">
            {(t.reality.items[lang] ?? t.reality.items['en']).map((item, i) => (
              <div className="pillar" key={i}><div className="pillar-name">{item.name}</div></div>
            ))}
          </div>
          <div className="gov-note r" data-d="3" style={{marginTop:'32px'}}>
            <p className="gov-note-txt">{tx(t.reality.closing, lang)}</p>
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="gov" id="governance">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.governance.sectionTag, lang)}</span></div>
          <h2 className="sec-h r" data-d="1">{tx(t.governance.heading, lang)} <em>{tx(t.governance.headingEm, lang)}</em></h2>
          <p className="sec-p r" data-d="2">{tx(t.governance.leadLine, lang)}</p>
          <div className="gov-grid">
            <div className="gov-card r"><div className="gov-name">{tx(t.governance.supremeCouncil.name, lang)}</div><div className="gov-desc">{tx(t.governance.supremeCouncil.desc, lang)}</div></div>
            <div className="gov-card r" data-d="1"><div className="gov-name">{tx(t.governance.ethicsCouncil.name, lang)}</div><div className="gov-desc">{tx(t.governance.ethicsCouncil.desc, lang)}</div></div>
            <div className="gov-card r" data-d="2"><div className="gov-name">{tx(t.governance.trustePanel.name, lang)}</div><div className="gov-desc">{tx(t.governance.trustePanel.desc, lang)}</div></div>
          </div>
          <div className="gov-note r">
            <div className="gov-note-tag">{tx(t.governance.noteTag, lang)}</div>
            <button
              type="button"
              id="gov-position-btn"
              className="arm-toggle"
              aria-expanded={govPositionOpen}
              aria-controls="gov-position-panel"
              onClick={() => setGovPositionOpen(v => !v)}
              style={{marginTop:'8px'}}
            >
              <span className="arm-name">{tx(t.footer.footerLinks.reviewGov, lang)}</span>
              <svg className="arm-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="arm-panel" id="gov-position-panel" role="region" aria-labelledby="gov-position-btn" data-open={govPositionOpen}>
              <div className="arm-panel-inner">
                <div className="gov-note-txt">{tx(t.governance.noteTxt, lang)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.contact.sectionTag, lang)}</span></div>
          <div className="con-inner">
            <div>
              <h2 className="sec-h r" data-d="1" style={{color:'var(--white)'}}>{tx(t.contact.heading, lang)}<br/><em>{tx(t.contact.headingEm, lang)}</em></h2>
              <p className="sec-p r" data-d="2" style={{color:'rgba(255,255,255,0.45)',marginBottom:'40px'}}>{tx(t.contact.subDesc, lang)}</p>
              <div className="con-grp r" data-d="2"><label className="con-lbl">{tx(t.contact.orgLabel, lang)}</label><input className="con-input" type="text" placeholder={tx(t.contact.orgPlaceholder, lang)} value={formData.organisation} onChange={(e) => setFormData({...formData, organisation: e.target.value})}/></div>
              <div className="con-grp r" data-d="2"><label className="con-lbl">{tx(t.contact.repLabel, lang)}</label><input className="con-input" type="text" placeholder={tx(t.contact.repPlaceholder, lang)} value={formData.representative} onChange={(e) => setFormData({...formData, representative: e.target.value})}/></div>
              <div className="con-grp r" data-d="2"><label className="con-lbl">{tx(t.contact.emailLabel, lang)}</label><input className="con-input" type="email" placeholder={tx(t.contact.emailPlaceholder, lang)} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/></div>
              <div className="con-grp r" data-d="3"><label className="con-lbl">{tx(t.contact.categoryLabel, lang)}</label><select className="con-sel" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}><option value="">{tx(t.contact.categoryDefault, lang)}</option>{(t.contact.categories[lang] ?? t.contact.categories['en']).map((opt, i) => (<option key={i}>{opt}</option>))}</select></div>
              <div className="con-grp r" data-d="3"><label className="con-lbl">{tx(t.contact.inquiryLabel, lang)}</label><textarea className="con-area" placeholder={tx(t.contact.inquiryPlaceholder, lang)} value={formData.inquiry} onChange={(e) => setFormData({...formData, inquiry: e.target.value})}></textarea></div>
              {/* Honeypot spam trap — invisible to real users and screen readers. Real visitors
                  never fill this in; if it arrives non-empty the API route silently discards it.
                  No off-canvas offset (previously a physical `left:-9999px`): under dir="rtl" that
                  produced a ~9999px leftward scrollWidth blowout on this whole section (a documented
                  browser quirk — RTL scrollWidth accounts for leftward overflow, LTR doesn't), which
                  is exactly the kind of physical-property-under-RTL bug the logical-properties rule
                  exists to avoid. The 1x1px size + overflow:hidden + aria-hidden + tabIndex={-1}
                  already fully hide and disable it without needing an offset in either direction. */}
              <input
                type="text"
                name="fax_number"
                value={formData.fax_number}
                onChange={(e) => setFormData({...formData, fax_number: e.target.value})}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden'}}
              />
              <div style={{marginBottom:'24px',padding:'20px 22px',background:'var(--stone)',border:'1px solid var(--rule)',borderLeft:'2px solid var(--gold)'}}>
                <div style={{fontSize:'.54rem',letterSpacing:'.28em',textTransform:'uppercase' as const,color:'var(--ink)',fontWeight:600,marginBottom:'12px'}}>{tx(t.contact.processTag, lang)}</div>
                <div style={{display:'flex',flexDirection:'column' as const,gap:'10px'}}>
                  {(t.contact.processSteps[lang] ?? t.contact.processSteps['en']).map((step, i) => (
                    <div key={i} style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                      <span style={{fontFamily:'var(--serif)',fontSize:'.75rem',color:'var(--ink)',flexShrink:0,marginTop:'1px'}}>{String(i+1).padStart(2,'0')}</span>
                      <span style={{fontSize:'.8rem',lineHeight:'1.65',color:'var(--body)'}}><strong style={{color:'var(--ink)'}}>{step.strong}</strong>{step.rest}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="con-disc r" data-d="4">{tx(t.contact.disclaimer, lang)}</p>
              <button
                className="btn-gold btn-submit r"
                data-d="4"
                onClick={async () => {
                  if (!formData.organisation || !formData.representative ||
                      !formData.email || !formData.category || !formData.inquiry) {
                    setFormStatus('error');
                    return;
                  }
                  setFormStatus('sending');
                  try {
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify(formData),
                    });
                    if (res.ok) {
                      setFormStatus('success');
                      setFormData({organisation:'',representative:'',email:'',category:'',inquiry:'',fax_number:''});
                    } else {
                      setFormStatus('error');
                    }
                  } catch {
                    setFormStatus('error');
                  }
                }}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? tx(t.contact.submitBtnSending, lang) :
                 formStatus === 'success' ? tx(t.contact.submitBtnSuccess, lang) :
                 tx(t.contact.submitBtn, lang)}
              </button>
              {formStatus === 'success' && (
                <div style={{marginTop:'16px',padding:'14px 18px',background:'rgba(184,146,58,0.1)',borderLeft:'2px solid #B8923A',fontSize:'.8rem',color:'rgba(255,255,255,0.7)',lineHeight:'1.6'}}>
                  {tx(t.contact.successMsg, lang)}
                </div>
              )}
              {formStatus === 'error' && (
                <div style={{marginTop:'16px',padding:'14px 18px',background:'rgba(255,255,255,0.05)',borderLeft:'2px solid rgba(255,255,255,0.2)',fontSize:'.8rem',color:'rgba(255,255,255,0.5)',lineHeight:'1.6'}}>
                  {tx(t.contact.errorMsg, lang)}
                </div>
              )}
            </div>
            <div className="r" data-d="2">
              <div className="con-info-h">{tx(t.contact.infoH, lang)}</div>
              <div className="con-info-p">{tx(t.contact.infoP, lang)}</div>
              <div className="con-details">
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><div><div className="con-detail-lbl">{tx(t.contact.details.hq.label, lang)}</div><div className="con-detail-val">{tx(t.contact.details.hq.val, lang)}</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div className="con-detail-lbl">{tx(t.contact.details.engType.label, lang)}</div><div className="con-detail-val">{tx(t.contact.details.engType.val, lang)}</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div><div className="con-detail-lbl">{tx(t.contact.details.stage.label, lang)}</div><div className="con-detail-val">{tx(t.contact.details.stage.val, lang)}</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg></div><div><div className="con-detail-lbl">{tx(t.contact.details.contact.label, lang)}</div><div className="con-detail-val">{tx(t.contact.details.contact.val, lang)}</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/></svg></div><div><div className="con-detail-lbl">{tx(t.contact.details.legal.label, lang)}</div><div className="con-detail-val">{tx(t.contact.details.legal.val, lang)}</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg></div><div><div className="con-detail-lbl">{tx(t.contact.details.legalPos.label, lang)}</div><div className="con-detail-val">{tx(t.contact.details.legalPos.val, lang)}</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </>
  );
}
