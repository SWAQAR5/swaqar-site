'use client';
import { useEffect, useState } from 'react';
import { t, tx, type Lang } from '@/lib/translations';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.body.classList.add('lang-ar');
    } else {
      document.documentElement.removeAttribute('dir');
      document.body.classList.remove('lang-ar');
    }
  }, [lang]);

  useEffect(() => {
    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    };
    const animRing = () => {
      rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(animRing);
    };
    document.addEventListener('mousemove', onMove);
    animRing();
    document.querySelectorAll('a,button,.arm,.pillar,.gate,.cor-card,.gov-card,.partner').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
    });
    const nav = document.getElementById('nav');
    const onScroll = () => { if (nav) nav.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    burger?.addEventListener('click', () => {
      if (!navLinks || !burger) return;
      const open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('up'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
      document.querySelectorAll('.r').forEach(el => io.observe(el));
    } else {
      document.querySelectorAll('.r').forEach(el => el.classList.add('up'));
    }
    document.querySelectorAll('.stat-n').forEach(c => {
      const tgt = c.textContent || '';
      const num = parseFloat(tgt);
      if (isNaN(num)) return;
      c.textContent = '0';
      const io2 = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          let s = 0; const step = num / 40;
          const timer = setInterval(() => {
            s += step;
            if (s >= num) { c.textContent = tgt; clearInterval(timer); }
            else c.textContent = tgt.includes('%') ? Math.round(s) + '%' : Math.round(s) + tgt.replace(/[0-9.]/g, '');
          }, 30);
          io2.unobserve(e.target);
        });
      }, { threshold: 0.5 });
      io2.observe(c as Element);
    });
    const orb = document.querySelector('.hero-orb') as HTMLElement;
    const onScrollOrb = () => { if (orb) orb.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.08}px))`; };
    window.addEventListener('scroll', onScrollOrb, { passive: true });
    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScrollOrb);
    };
  }, []);

  return (
    <>
      <div id="cur"><div id="cur-dot"></div><div id="cur-ring"></div></div>

      <div className="banner">
        <div className="banner-dot"></div>
        <p className="banner-txt">{tx(t.banner, lang)}</p>
      </div>

      <nav id="nav">
        <a className="nav-brand" href="#home">
          <svg className="nav-mark" viewBox="508 252 1024 900" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#CEA437" d="M917.74,952.98c4.78-0.46,9.55-0.93,14.33-1.39c6.44-0.49,12.88-1.11,19.33-1.43c25.94-1.31,51.9-2.34,77.88-2.62c47.48-0.51,94.95,0.16,142.38,2.41c22.77,1.08,45.55,2.3,68.28,4.07c21.07,1.64,42.08,3.97,63.01,7.01c3.94,0.95,7.88,1.9,11.82,2.85c-3.55-2.77-7.73-3.62-11.85-4.67c-6.68-2.03-13.36-4.1-20.05-6.1c-22.04-6.58-44.49-11.42-67.18-15.06c-4.25-0.68-5.69-2.26-5.49-6.66c0.37-8.31,0.03-16.66,0.03-24.99c-0.02-51.99-0.05-103.99,0.04-155.98c0.01-3.5-0.49-4.93-4.52-4.76c-8.48,0.37-17,0.33-25.48-0.04c-3.96-0.17-4.63,1.18-4.59,4.75c0.19,15,0.08,29.99,0.08,44.99c-0.01,44.33-0.02,88.65-0.05,132.98c0,2.01,0.69,4.89-3.06,3.86c-2.52-0.69-6.79,1.58-6.51-4.13c0.31-6.48,0.02-12.99,0.03-19.49c0.09-52.82,0.15-105.65,0.35-158.47c0.01-3.42-0.81-4.5-4.33-4.39c-8.16,0.26-16.34,0.3-24.49-0.06c-4.46-0.2-5.77,1.01-5.76,5.66c0.21,57.49,0.12,114.98,0.35,172.48c0.02,4.57-1.16,5.53-5.47,5.25c-29.78-1.94-59.6-1.9-89.42-1.93c-3.65,0-7.3-0.16-10.95-0.25c2.43-1.03,4.81-2.18,7.29-3.06c20.54-7.3,40.69-15.49,58.76-27.94c14.43-9.95,25.93-21.26,24.23-41.39c-1.47-17.44-14.89-33.77-32.83-36.73c-11.76-5.64-24.32-9-36.65-13.02c-8.88-2.9-17.63-6.15-25.46-11.34c-9.31-6.16-9.94-14.45-1.6-21.81c5.27-4.65,11.41-8.04,17.86-10.84c19.76-8.56,40.31-14.55,61.23-19.54c39.29-9.38,78.92-14.05,119.28-9.65c3.69,0.4,3.99-0.95,3.96-3.97c-0.11-14.16-0.04-28.32,0-42.48c0.01-3-0.58-6.12,1.71-8.8c-8.87,5.69-18.19,10.05-27.51,14.34c-38.47,17.69-78.65,30.69-118.97,43.34c-26.16,8.21-52.77,15.03-78.29,25.26c-11.99,4.8-23.28,10.75-32.42,20.11c-10.9,11.15-11.62,24.96-1.83,36.31c4.98,5.77,11.36,9.73,18.14,13.03c12.01,5.85,24.86,9.4,37.51,13.5c9.16,2.97,18.5,5.84,25.72,12.72c5.91,5.63,5.92,12.06,0.36,18.04c-4.13,4.44-9.14,7.74-14.37,10.69c-11.92,6.74-24.65,11.62-37.53,16.13c-14.14,4.95-28.54,9.01-43.01,12.84c-5.69,1.51-5.74,1.32-5.78-4.5c-0.05-9.33-0.13-18.66-0.15-27.99c-0.07-42.98-0.17-85.96-0.1-128.95c0.01-3.62-0.71-4.83-4.61-4.65c-7.64,0.37-15.34,0.34-22.98-0.07c-4.14-0.22-5.26,0.82-5.25,5.06c0.12,53.31,0.04,106.63-0.03,159.94c-0.01,9.07-0.1,9.07-9.87,10.23c0-10.69,0-21.34,0-31.98c0.01-45.82-0.02-91.63,0.13-137.45c0.01-4.3-0.74-6.13-5.59-5.84c-7.8,0.47-15.67,0.47-23.48,0.03c-4.9-0.28-5.96,1.24-5.95,6.01c0.21,57.64,0.14,115.29,0.26,172.93c0.01,3.49-0.68,4.98-4.5,5.96c-24.49,6.26-48.92,12.76-73.26,19.57c-12.77,3.57-25.64,6.98-37.63,12.87l0.07,0.15l-0.01-0.24c15.44-2.5,30.88-4.99,46.33-7.49c-0.91,3.5,0.79,4.18,3.95,4.23c12.67,0.18,25.25-1.49,37.88-1.59c16.99-0.13,33.93-1.22,50.87-2.25C898.58,955.15,908.15,953.92,917.74,952.98z"/>
            <path fill="#E5C97A" d="M1074.04,881.79c0.22,1.4-1.06,2.28-1.6,3.49c11.7,1.87,36.72-19.2,41.05-34.5c2.5,6.8-0.26,12.02-3.87,17.03c-6.76,9.36-16.55,14.7-26.39,20.01c-30.82,16.63-63.94,26.96-97.5,36.28c-33.2,9.22-67,15.63-100.88,21.5c-23.72,4.11-47.66,6.96-71.55,9.99c-3.77,0.48-8.05,1.74-11.76-0.93c30.24-6.3,60.52-12.43,90.71-18.95c42.23-9.13,84.38-18.65,125.67-31.57C1037.18,898.13,1056.21,891.45,1074.04,881.79z"/>
          </svg>
          <div className="nav-text">
            <span className="nav-name">SWAQAR</span>
            <span className="nav-sub">Group · Corridors of Trust</span>
          </div>
        </a>
        <ul className="nav-links" id="navLinks">
          <li><a href="#mission">{tx(t.nav.mission, lang)}</a></li>
          <li><a href="#identity">{tx(t.nav.identity, lang)}</a></li>
          <li><a href="#corridors">{tx(t.nav.corridors, lang)}</a></li>
          <li><a href="#model">{tx(t.nav.model, lang)}</a></li>
          <li><a href="#arms">{tx(t.nav.arms, lang)}</a></li>
          <li><a href="#governance">{tx(t.nav.governance, lang)}</a></li>
          <li><a href="#contact" className="nav-cta">{tx(t.nav.engage, lang)}</a></li>
        </ul>
        <div className="lang-toggle" aria-label="Language selection">
          <button className={`lang-btn${lang==='en'?' active':''}`} onClick={()=>setLang('en')} aria-label="Switch to English" aria-pressed={lang==='en'}>EN</button>
          <span className="lang-sep" aria-hidden="true">|</span>
          <button className={`lang-btn${lang==='ar'?' active':''}`} onClick={()=>setLang('ar')} aria-label="Switch to Arabic" aria-pressed={lang==='ar'}>AR</button>
          <span className="lang-sep" aria-hidden="true">|</span>
          <button className={`lang-btn${lang==='fr'?' active':''}`} onClick={()=>setLang('fr')} aria-label="Switch to French" aria-pressed={lang==='fr'}>FR</button>
        </div>
        <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </nav>
      {lang !== 'en' && (
        <div className="banner">
          <div className="banner-dot"></div>
          <p className="banner-txt">
            {tx(t.translationPending, lang)}
          </p>
        </div>
      )}

      <section className="hero" id="home">
        <div className="hero-grid">
          <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="g" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(206,164,55,0.045)" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
            <path d="M 100,620 Q 340,490 560,380 Q 750,272 910,212" fill="none" stroke="rgba(206,164,55,0.22)" strokeWidth="1.1" strokeDasharray="6 12"><animate attributeName="stroke-dashoffset" from="0" to="-144" dur="4s" repeatCount="indefinite"/></path>
            <path d="M 910,212 Q 1060,175 1200,235 Q 1318,292 1378,372" fill="none" stroke="rgba(206,164,55,0.15)" strokeWidth="1" strokeDasharray="6 12"><animate attributeName="stroke-dashoffset" from="0" to="-144" dur="5.5s" repeatCount="indefinite"/></path>
            <circle r="3" fill="rgba(206,164,55,0.75)"><animateMotion dur="4s" repeatCount="indefinite" path="M 100,620 Q 340,490 560,380 Q 750,272 910,212"/></circle>
            <circle r="2.5" fill="rgba(206,164,55,0.55)"><animateMotion dur="5.5s" repeatCount="indefinite" begin="1.5s" path="M 910,212 Q 1060,175 1200,235 Q 1318,292 1378,372"/></circle>
            <text x="95" y="658" fontSize="8.5" fill="rgba(206,164,55,0.28)" letterSpacing="4" fontFamily="DM Sans,sans-serif" textAnchor="middle">AFRICA</text>
            <text x="910" y="192" fontSize="8.5" fill="rgba(206,164,55,0.28)" letterSpacing="4" fontFamily="DM Sans,sans-serif" textAnchor="middle">MIDDLE EAST</text>
            <text x="1338" y="356" fontSize="8.5" fill="rgba(206,164,55,0.28)" letterSpacing="4" fontFamily="DM Sans,sans-serif" textAnchor="middle">ASIA</text>
          </svg>
        </div>
        <div className="hero-orb"></div>
        <svg className="mer" viewBox="0 0 600 600" style={{position:'absolute',right:'-8vw',top:'50%',transform:'translateY(-50%)',width:'54vw',height:'54vw',pointerEvents:'none'}}>
          <ellipse cx="300" cy="300" rx="198" ry="295" fill="none" stroke="rgba(206,164,55,0.06)" strokeWidth="0.8"/>
          <ellipse cx="300" cy="300" rx="118" ry="295" fill="none" stroke="rgba(206,164,55,0.045)" strokeWidth="0.8"/>
          <ellipse cx="300" cy="300" rx="295" ry="118" fill="none" stroke="rgba(206,164,55,0.04)" strokeWidth="0.8"/>
        </svg>
        <svg className="mer mer2" viewBox="0 0 600 600" style={{position:'absolute',right:'-8vw',top:'50%',transform:'translateY(-50%)',width:'54vw',height:'54vw',pointerEvents:'none'}}>
          <ellipse cx="300" cy="300" rx="52" ry="295" fill="none" stroke="rgba(206,164,55,0.035)" strokeWidth="0.6"/>
          <ellipse cx="300" cy="300" rx="295" ry="52" fill="none" stroke="rgba(206,164,55,0.035)" strokeWidth="0.6"/>
        </svg>
        <div className="hero-body">
          <div className="eyebrow r"><div className="eyebrow-line"></div><span className="eyebrow-text">{tx(t.hero.eyebrow, lang)}</span></div>
          <h1 className="hero-h1 r" data-d="1">{tx(t.hero.h1line1, lang)}<br/>{tx(t.hero.h1line2, lang)} <em>{tx(t.hero.h1em, lang)}</em></h1>
          <p className="hero-sub r" data-d="2">{tx(t.hero.sub, lang)}</p>
          <p className="hero-desc r" data-d="3">{tx(t.hero.desc, lang)}</p>
          <div className="hero-btns r" data-d="4">
            <a href="#corridors" className="btn-gold"><span>{tx(t.hero.btnExplore, lang)}</span><svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a href="#contact" className="btn-ghost-light">{tx(t.hero.btnInquiry, lang)}</a>
          </div>
        </div>
        <div className="hero-scroll"><div className="hero-scroll-line"></div><span className="hero-scroll-txt">{tx(t.hero.scroll, lang)}</span></div>
      </section>

      <div className="stats">
        <div className="stat r"><span className="stat-n">3</span><span className="stat-l">{tx(t.stats.corridorRegions, lang)}</span></div>
        <div className="stat r" data-d="1"><span className="stat-n">4</span><span className="stat-l">{tx(t.stats.institutionalGates, lang)}</span></div>
        <div className="stat r" data-d="2"><span className="stat-n">100%</span><span className="stat-l">{tx(t.stats.nonCustodial, lang)}</span></div>
        <div className="stat r" data-d="3"><span className="stat-n">7</span><span className="stat-l">{tx(t.stats.strategicArms, lang)}</span></div>
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

      <section className="mission" id="mission">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line" /><span className="sec-tag-txt">{tx(t.mission.sectionTag, lang)}</span></div>
          <h2 className="sec-h r" data-d="1" style={{color:'#fff'}}>{tx(t.mission.heading, lang)}<br /><em>{tx(t.mission.headingEm, lang)}</em></h2>
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
                <div className="id-badge-circle"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CEA437" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
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
              <line x1="0" y1="74" x2="900" y2="74" stroke="rgba(26,26,26,.06)" strokeWidth=".5" strokeDasharray="4 8" />
              <line x1="0" y1="148" x2="900" y2="148" stroke="rgba(26,26,26,.06)" strokeWidth=".5" strokeDasharray="4 8" />
              <line x1="0" y1="222" x2="900" y2="222" stroke="rgba(26,26,26,.06)" strokeWidth=".5" strokeDasharray="4 8" />
              <path d="M 110,188 C 200,163 270,133 360,113" stroke="#D4D0CA" strokeWidth="1" strokeDasharray="4 8" />
              <path d="M 420,106 C 530,90 640,82 768,108" stroke="#D4D0CA" strokeWidth="1" strokeDasharray="4 8" />
              <path d="M 110,188 C 200,163 270,133 360,113" stroke="#CEA437" strokeWidth="1.2" strokeDasharray="3 7" opacity=".5"><animate attributeName="stroke-dashoffset" from="0" to="-60" dur="3s" repeatCount="indefinite" /></path>
              <path d="M 420,106 C 530,90 640,82 768,108" stroke="#CEA437" strokeWidth="1.2" strokeDasharray="3 7" opacity=".35"><animate attributeName="stroke-dashoffset" from="0" to="-60" dur="4.5s" repeatCount="indefinite" /></path>
              <circle cx="110" cy="188" r="9" fill="rgba(26,26,26,.1)" stroke="#1A1A1A" strokeWidth="1.5" />
              <circle cx="110" cy="188" r="4" fill="#1A1A1A" />
              <circle cx="110" cy="188" r="16" fill="rgba(26,26,26,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" repeatCount="indefinite" /></circle>
              <text x="110" y="212" textAnchor="middle" fontSize="7" fill="#1A1A1A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">{tx(t.corridors.map.africa, lang)}</text>
              <text x="110" y="221" textAnchor="middle" fontSize="6" fill="#535256" fontFamily="DM Sans,sans-serif" letterSpacing="2">{tx(t.corridors.map.africaSub, lang)}</text>
              <circle cx="390" cy="109" r="9" fill="rgba(26,26,26,.1)" stroke="#1A1A1A" strokeWidth="1.5" />
              <circle cx="390" cy="109" r="4" fill="#1A1A1A" />
              <circle cx="390" cy="109" r="16" fill="rgba(26,26,26,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" begin=".9s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" begin=".9s" repeatCount="indefinite" /></circle>
              <text x="390" y="88" textAnchor="middle" fontSize="7" fill="#1A1A1A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">{tx(t.corridors.map.middleEast, lang)}</text>
              <text x="390" y="97" textAnchor="middle" fontSize="6" fill="#535256" fontFamily="DM Sans,sans-serif" letterSpacing="2">{tx(t.corridors.map.middleEastSub, lang)}</text>
              <rect x="340" y="130" width="100" height="22" rx="2" fill="#1A1A1A" />
              <text x="390" y="145" textAnchor="middle" fontSize="6" fill="#CEA437" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">SWAQAR</text>
              <circle cx="776" cy="108" r="9" fill="rgba(26,26,26,.1)" stroke="#1A1A1A" strokeWidth="1.5" />
              <circle cx="776" cy="108" r="4" fill="#1A1A1A" />
              <circle cx="776" cy="108" r="16" fill="rgba(26,26,26,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" begin="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" begin="1.8s" repeatCount="indefinite" /></circle>
              <text x="776" y="87" textAnchor="middle" fontSize="7" fill="#1A1A1A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">{tx(t.corridors.map.asia, lang)}</text>
              <text x="776" y="96" textAnchor="middle" fontSize="6" fill="#535256" fontFamily="DM Sans,sans-serif" letterSpacing="2">{tx(t.corridors.map.asiaSub, lang)}</text>
              <circle r="4" fill="#CEA437" filter="url(#bf)" opacity=".7"><animateMotion dur="3s" repeatCount="indefinite" path="M 110,188 C 200,163 270,133 360,113" /></circle>
              <circle r="3.5" fill="#CEA437" filter="url(#bf)" opacity=".55"><animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M 420,106 C 530,90 640,82 768,108" /></circle>
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
                <div>
                  <div className="cor-gov-note-tag">{tx(t.corridors.govNoteTag, lang)}</div>
                  <p className="cor-gov-note-txt">{tx(t.corridors.govNoteTxt, lang)}</p>
                </div>
              </div>
              <div className="cor-card-active-inner">
                <div className="cor-active-left">
                  <div className="cor-phase-label"><div className="cor-phase-dot" /><span className="cor-phase-txt">{tx(t.corridors.phaseLabel, lang)}</span></div>
                  <p className="cor-active-desc">{tx(t.corridors.activeDesc, lang)}</p>
                  <div className="cor-active-roles">
                    {(t.corridors.roles[lang] ?? t.corridors.roles['en']).map((role, i) => (
                      <div className="cor-role" key={i}><div className="cor-role-region">{role.region}</div><div className="cor-role-name">{role.name}</div><div className="cor-role-desc">{role.desc}</div></div>
                    ))}
                  </div>
                </div>
                <div className="cor-active-right">
                  <div className="cor-coordinates">
                    {(t.corridors.coordinates[lang] ?? t.corridors.coordinates['en']).map((coord, i) => (
                      <div className="cor-coord-item" key={i} style={i === 4 ? {gridColumn:'1 / -1'} : undefined}>
                        <div className="cor-coord-pip" />
                        <div className="cor-coord-txt"><strong>{coord.strong}</strong>{coord.rest}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cor-active-footer">
                <p className="cor-active-footer-txt">{tx(t.corridors.activeFooterTxt, lang)}</p>
                <div className="cor-active-footer-tags">
                  <span className="cor-tag-gold">Agriculture &amp; Food Security</span>
                  <span className="cor-tag-gold">Verification-Governed</span>
                  <span className="cor-tag-gold">Non-Custodial</span>
                  <span className="cor-tag-gold">Four-Gate Protocol</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cor-tier r" data-d="2" style={{marginTop:'2px'}}>
            <div className="cor-tier-head">
              <span className="cor-tier-num">02</span>
              <span className="cor-tier-title">{tx(t.corridors.tierTwoTitle, lang)}</span>
              <span className="cor-tier-badge eval">{tx(t.corridors.tierTwoBadge, lang)}</span>
            </div>
            <div className="cor-eval-grid" data-cols="2" style={{gridTemplateColumns:'1fr 1fr'}}>
              {(t.corridors.evalCards[lang] ?? t.corridors.evalCards['en']).map((card, i) => (
                <div className="cor-eval-card" key={i}>
                  <div className="cor-eval-reg">{card.reg}</div>
                  <div className="cor-eval-title">{card.title}</div>
                  <p className="cor-eval-body">{card.body}</p>
                  <div className="cor-tags" style={{marginBottom:'14px'}}>{card.tags.map((tag, j) => <span className="cor-tag" key={j}>{tag}</span>)}</div>
                  <p className="cor-eval-note">{card.note}</p>
                </div>
              ))}
            </div>
            <div className="cor-cap-row">
              {(t.corridors.capRow[lang] ?? t.corridors.capRow['en']).map((cap, i) => (
                <div className="cor-cap-item" key={i}>
                  <div className="cor-cap-name">{cap.name}</div>
                  <div className="cor-cap-status">{cap.status}</div>
                  <p className="cor-cap-desc">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="gates" id="model">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.gates.sectionTag, lang)}</span></div>
          <h2 className="sec-h r" data-d="1">{tx(t.gates.heading, lang)}<br/><em>{tx(t.gates.headingEm, lang)}</em></h2>
          <p className="sec-p r" data-d="2">{tx(t.gates.subDesc, lang)}</p>
          <div className="gates-grid">
            {(t.gates.gatesList[lang] ?? t.gates.gatesList['en']).map((gate, i) => (
              <div className="gate r" key={i} data-d={i}>
                <div className="gate-n">{['I','II','III','IV'][i]}</div>
                <div className="gate-ico">
                  {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>}
                  {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6M9 16h6M9 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l10 5v5c0 5.55-3.84 10.74-10 12C5.84 22.74 2 17.55 2 12V7l10-5z"/></svg>}
                  {i === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                </div>
                <div className="gate-tag">{gate.tag}</div>
                <div className="gate-name">{gate.name}</div>
                <div className="gate-desc">{gate.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="arms" id="arms">
        <div className="wrap">
          <div className="arms-inner">
            <div>
              <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.arms.sectionTag, lang)}</span></div>
              <h2 className="sec-h r" data-d="1">{tx(t.arms.heading, lang)} <em>{tx(t.arms.headingEm, lang)}</em> {tx(t.arms.headingLine2, lang)}</h2>
              <div className="arm-list" style={{marginTop:'36px'}}>
                {(t.arms.armsList[lang] ?? t.arms.armsList['en']).map(([n, name, desc]) => (
                  <div className="arm r" key={n}><span className="arm-n">{n}</span><div><div className="arm-name">{name}</div><div className="arm-desc">{desc}</div></div></div>
                ))}
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

      <div className="gold-rule"></div>

      <section className="gov" id="governance">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.governance.sectionTag, lang)}</span></div>
          <h2 className="sec-h r" data-d="1">{tx(t.governance.heading, lang)} <em>{tx(t.governance.headingEm, lang)}</em></h2>
          <div className="gov-grid">
            <div className="gov-card r"><div className="gov-name">{tx(t.governance.supremeCouncil.name, lang)}</div><div className="gov-desc">{tx(t.governance.supremeCouncil.desc, lang)}</div></div>
            <div className="gov-card r" data-d="1"><div className="gov-name">{tx(t.governance.ethicsCouncil.name, lang)}</div><div className="gov-desc">{tx(t.governance.ethicsCouncil.desc, lang)}</div></div>
            <div className="gov-card r" data-d="2"><div className="gov-name">{tx(t.governance.trustePanel.name, lang)}</div><div className="gov-desc">{tx(t.governance.trustePanel.desc, lang)}</div></div>
          </div>
          <div className="gov-note r">
            <div className="gov-note-tag">{tx(t.governance.noteTag, lang)}</div>
            <div className="gov-note-txt">{tx(t.governance.noteTxt, lang)}</div>
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">{tx(t.contact.sectionTag, lang)}</span></div>
          <div className="con-inner">
            <div>
              <h2 className="sec-h r" data-d="1" style={{color:'#fff'}}>{tx(t.contact.heading, lang)}<br/><em>{tx(t.contact.headingEm, lang)}</em></h2>
              <p className="sec-p r" data-d="2" style={{color:'rgba(255,255,255,0.45)',marginBottom:'40px'}}>{tx(t.contact.subDesc, lang)}</p>
              <div className="con-grp r" data-d="2"><label className="con-lbl">{tx(t.contact.orgLabel, lang)}</label><input className="con-input" type="text" placeholder={tx(t.contact.orgPlaceholder, lang)}/></div>
              <div className="con-grp r" data-d="2"><label className="con-lbl">{tx(t.contact.repLabel, lang)}</label><input className="con-input" type="text" placeholder={tx(t.contact.repPlaceholder, lang)}/></div>
              <div className="con-grp r" data-d="3"><label className="con-lbl">{tx(t.contact.categoryLabel, lang)}</label><select className="con-sel"><option value="">{tx(t.contact.categoryDefault, lang)}</option>{(t.contact.categories[lang] ?? t.contact.categories['en']).map((opt, i) => (<option key={i}>{opt}</option>))}</select></div>
              <div className="con-grp r" data-d="3"><label className="con-lbl">{tx(t.contact.inquiryLabel, lang)}</label><textarea className="con-area" placeholder={tx(t.contact.inquiryPlaceholder, lang)}></textarea></div>
              <div style={{marginBottom:'24px',padding:'20px 22px',background:'var(--stone)',border:'1px solid var(--rule)',borderLeft:'2px solid var(--gold)'}}>
                <div style={{fontSize:'.54rem',letterSpacing:'.28em',textTransform:'uppercase' as const,color:'var(--gold)',fontWeight:600,marginBottom:'12px'}}>{tx(t.contact.processTag, lang)}</div>
                <div style={{display:'flex',flexDirection:'column' as const,gap:'10px'}}>
                  {(t.contact.processSteps[lang] ?? t.contact.processSteps['en']).map((step, i) => (
                    <div key={i} style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                      <span style={{fontFamily:'var(--serif)',fontSize:'.75rem',color:'var(--gold)',flexShrink:0,marginTop:'1px'}}>{String(i+1).padStart(2,'0')}</span>
                      <span style={{fontSize:'.8rem',lineHeight:'1.65',color:'var(--body)'}}><strong style={{color:'var(--ink)'}}>{step.strong}</strong>{step.rest}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="con-disc r" data-d="4">{tx(t.contact.disclaimer, lang)}</p>
              <button className="btn-gold r" data-d="4" style={{width:'100%',justifyContent:'center'}}>{tx(t.contact.submitBtn, lang)}</button>
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

      <footer>
        <div className="wrap">
          <div className="foot-inner">
            <div>
              <div className="foot-mark">
                <svg className="foot-mark-svg" viewBox="508 252 1024 900" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fill="#CEA437" d="M917.74,952.98c4.78-0.46,9.55-0.93,14.33-1.39c6.44-0.49,12.88-1.11,19.33-1.43c25.94-1.31,51.9-2.34,77.88-2.62c47.48-0.51,94.95,0.16,142.38,2.41c22.77,1.08,45.55,2.3,68.28,4.07c21.07,1.64,42.08,3.97,63.01,7.01c3.94,0.95,7.88,1.9,11.82,2.85c-3.55-2.77-7.73-3.62-11.85-4.67c-6.68-2.03-13.36-4.1-20.05-6.1c-22.04-6.58-44.49-11.42-67.18-15.06c-4.25-0.68-5.69-2.26-5.49-6.66c0.37-8.31,0.03-16.66,0.03-24.99c-0.02-51.99-0.05-103.99,0.04-155.98c0.01-3.5-0.49-4.93-4.52-4.76c-8.48,0.37-17,0.33-25.48-0.04c-3.96-0.17-4.63,1.18-4.59,4.75c0.19,15,0.08,29.99,0.08,44.99c-0.01,44.33-0.02,88.65-0.05,132.98c0,2.01,0.69,4.89-3.06,3.86c-2.52-0.69-6.79,1.58-6.51-4.13c0.31-6.48,0.02-12.99,0.03-19.49c0.09-52.82,0.15-105.65,0.35-158.47c0.01-3.42-0.81-4.5-4.33-4.39c-8.16,0.26-16.34,0.3-24.49-0.06c-4.46-0.2-5.77,1.01-5.76,5.66c0.21,57.49,0.12,114.98,0.35,172.48c0.02,4.57-1.16,5.53-5.47,5.25c-29.78-1.94-59.6-1.9-89.42-1.93c-3.65,0-7.3-0.16-10.95-0.25c2.43-1.03,4.81-2.18,7.29-3.06c20.54-7.3,40.69-15.49,58.76-27.94c14.43-9.95,25.93-21.26,24.23-41.39c-1.47-17.44-14.89-33.77-32.83-36.73c-11.76-5.64-24.32-9-36.65-13.02c-8.88-2.9-17.63-6.15-25.46-11.34c-9.31-6.16-9.94-14.45-1.6-21.81c5.27-4.65,11.41-8.04,17.86-10.84c19.76-8.56,40.31-14.55,61.23-19.54c39.29-9.38,78.92-14.05,119.28-9.65c3.69,0.4,3.99-0.95,3.96-3.97c-0.11-14.16-0.04-28.32,0-42.48c0.01-3-0.58-6.12,1.71-8.8c-8.87,5.69-18.19,10.05-27.51,14.34c-38.47,17.69-78.65,30.69-118.97,43.34c-26.16,8.21-52.77,15.03-78.29,25.26c-11.99,4.8-23.28,10.75-32.42,20.11c-10.9,11.15-11.62,24.96-1.83,36.31c4.98,5.77,11.36,9.73,18.14,13.03c12.01,5.85,24.86,9.4,37.51,13.5c9.16,2.97,18.5,5.84,25.72,12.72c5.91,5.63,5.92,12.06,0.36,18.04c-4.13,4.44-9.14,7.74-14.37,10.69c-11.92,6.74-24.65,11.62-37.53,16.13c-14.14,4.95-28.54,9.01-43.01,12.84c-5.69,1.51-5.74,1.32-5.78-4.5c-0.05-9.33-0.13-18.66-0.15-27.99c-0.07-42.98-0.17-85.96-0.1-128.95c0.01-3.62-0.71-4.83-4.61-4.65c-7.64,0.37-15.34,0.34-22.98-0.07c-4.14-0.22-5.26,0.82-5.25,5.06c0.12,53.31,0.04,106.63-0.03,159.94c-0.01,9.07-0.1,9.07-9.87,10.23c0-10.69,0-21.34,0-31.98c0.01-45.82-0.02-91.63,0.13-137.45c0.01-4.3-0.74-6.13-5.59-5.84c-7.8,0.47-15.67,0.47-23.48,0.03c-4.9-0.28-5.96,1.24-5.95,6.01c0.21,57.64,0.14,115.29,0.26,172.93c0.01,3.49-0.68,4.98-4.5,5.96c-24.49,6.26-48.92,12.76-73.26,19.57c-12.77,3.57-25.64,6.98-37.63,12.87l0.07,0.15l-0.01-0.24c15.44-2.5,30.88-4.99,46.33-7.49c-0.91,3.5,0.79,4.18,3.95,4.23c12.67,0.18,25.25-1.49,37.88-1.59c16.99-0.13,33.93-1.22,50.87-2.25C898.58,955.15,908.15,953.92,917.74,952.98z"/>
                </svg>
                <div><div className="foot-name">SWAQAR</div><div className="foot-sub">Group · Corridors of Trust</div></div>
              </div>
              <p className="foot-desc">{tx(t.footer.desc, lang)}</p>
            </div>
            <div className="foot-col"><h5>{tx(t.footer.model, lang)}</h5><ul><li><a href="#corridors">{tx(t.footer.footerLinks.corridorArch, lang)}</a></li><li><a href="#model">{tx(t.footer.footerLinks.gateModel, lang)}</a></li><li><a href="#governance">{tx(t.footer.footerLinks.govArch, lang)}</a></li><li><a href="#arms">{tx(t.footer.footerLinks.strategicArms, lang)}</a></li></ul></div>
            <div className="foot-col"><h5>{tx(t.footer.engage, lang)}</h5><ul><li><a href="#contact">{tx(t.footer.footerLinks.instInquiry, lang)}</a></li><li><a href="#identity">{tx(t.footer.footerLinks.identity, lang)}</a></li><li><a href="#governance">{tx(t.footer.footerLinks.reviewGov, lang)}</a></li><li style={{color:'rgba(255,255,255,0.32)'}}>{tx(t.footer.footerLinks.jeddah, lang)}</li></ul></div>
            <div className="foot-col"><h5>{tx(t.footer.corridorRegions, lang)}</h5><ul><li><a href="#corridors">{tx(t.footer.footerLinks.africaME, lang)}</a></li><li><a href="#corridors">{tx(t.footer.footerLinks.meAsia, lang)}</a></li><li><a href="#corridors">{tx(t.footer.footerLinks.africaAsia, lang)}</a></li><li><a href="#model">{tx(t.footer.footerLinks.gateProcess, lang)}</a></li></ul></div>
          </div>
          <p className="foot-legal">{tx(t.footer.legal, lang)}</p>
          <div className="foot-btm">
            <div style={{display:'flex',gap:'24px',alignItems:'center',flexWrap:'wrap'}}>
              <span className="foot-copy">{tx(t.footer.copyright, lang)}</span>
              <span className="foot-copy" style={{opacity:.5}}>{tx(t.footer.secondaryLine, lang)}</span>
            </div>
            <div className="foot-badges">{(t.footer.badges[lang] ?? t.footer.badges['en']).map((badge, i) => <span className="foot-badge" key={i}>{badge}</span>)}</div>
          </div>
        </div>
      </footer>
    </>
  );
}
