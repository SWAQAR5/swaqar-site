'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('en');

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
          const t = setInterval(() => {
            s += step;
            if (s >= num) { c.textContent = tgt; clearInterval(t); }
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
        <p className="banner-txt"><strong>Phase I — Foundation Stage</strong> &nbsp;·&nbsp; Not yet operationally active. All corridor activation subject to Four-Gate Model completion and Supreme Council mandate.</p>
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
          <li><a href="#mission">Mission</a></li>
          <li><a href="#identity">Identity</a></li>
          <li><a href="#corridors">Corridors</a></li>
          <li><a href="#model">The Model</a></li>
          <li><a href="#arms">Strategic Arms</a></li>
          <li><a href="#governance">Governance</a></li>
          <li><a href="#contact" className="nav-cta">Engage</a></li>
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
            {lang === 'ar'
              ? 'Arabic translation in preparation — approved institutional translator appointed. Content currently displayed in English.'
              : 'French translation in preparation — approved institutional translator appointed. Content currently displayed in English.'}
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
          <div className="eyebrow r"><div className="eyebrow-line"></div><span className="eyebrow-text">Trade Coordination · Africa · Middle East · Asia</span></div>
          <h1 className="hero-h1 r" data-d="1">Corridors<br/>of <em>Trust</em></h1>
          <p className="hero-sub r" data-d="2">Where Governance Meets Execution</p>
          <p className="hero-desc r" data-d="3">A governance-led, asset-light, non-custodial Trade Coordination Layer — governing verification, execution, institutional trust, and corridor discipline across Africa, the Middle East, and Asia.</p>
          <div className="hero-btns r" data-d="4">
            <a href="#corridors" className="btn-gold"><span>Explore Corridors</span><svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a href="#contact" className="btn-ghost-light">Institutional Inquiry</a>
          </div>
        </div>
        <div className="hero-scroll"><div className="hero-scroll-line"></div><span className="hero-scroll-txt">Scroll</span></div>
      </section>

      <div className="stats">
        <div className="stat r"><span className="stat-n">3</span><span className="stat-l">Corridor Regions</span></div>
        <div className="stat r" data-d="1"><span className="stat-n">4</span><span className="stat-l">Institutional Gates</span></div>
        <div className="stat r" data-d="2"><span className="stat-n">100%</span><span className="stat-l">Non-Custodial Structure</span></div>
        <div className="stat r" data-d="3"><span className="stat-n">7</span><span className="stat-l">Strategic Arms</span></div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_,i) => (
            <span key={i} style={{display:'contents'}}>
              {['Governance-Led','Verification-First','Asset-Light','Non-Custodial','Africa ⇄ Middle East ⇄ Asia','Four-Gate Protocol','Phase I — Foundation Stage','Counsel-Validated','Supreme Council Governed'].map((item,j) => (
                <span className="mq-item" key={j}><span className="mq-dot"></span>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="mission" id="mission">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line" /><span className="sec-tag-txt">Mission · Vision · Purpose</span></div>
          <h2 className="sec-h r" data-d="1" style={{color:'#fff'}}>Why SWAQAR Exists.<br /><em>Where It Is Going.</em></h2>
          <div className="mv-inner">
            <div className="mv-block r" data-d="1">
              <div className="mv-block-tag">Mission</div>
              <div className="mv-block-h">The Trusted Trade Coordination Layer</div>
              <p className="mv-block-p">To serve as the trusted Trade Coordination Layer through which verified cross-regional trade is coordinated between Africa, the Middle East, and Asia — with <em>institutional governance</em>, verified counterparties, and disciplined corridor execution.</p>
            </div>
            <div className="mv-block r" data-d="2">
              <div className="mv-block-tag">Vision</div>
              <div className="mv-block-h">Corridors Where Trust is a Standing Condition</div>
              <p className="mv-block-p">That cross-regional trade between Africa, the Middle East, and Asia is conducted through coordinated corridors in which <em>verification, institutional trust, and governance are standing conditions</em> — and that SWAQAR Group is the institution through which those corridors are coordinated.</p>
            </div>
          </div>
          <div className="mv-values">
            <div className="mv-value r" data-d="1">
              <div className="mv-value-name">Governance</div>
              <div className="mv-value-desc">The operating substrate, not a compliance overlay. Every material decision moves through constitutional procedure.</div>
            </div>
            <div className="mv-value r" data-d="2">
              <div className="mv-value-name">Trust</div>
              <div className="mv-value-desc">Institutional infrastructure, not transactional outcome. Built through consistency, verification, and reciprocity.</div>
            </div>
            <div className="mv-value r" data-d="3">
              <div className="mv-value-name">Verification</div>
              <div className="mv-value-desc">Verification precedes execution, always. No corridor operates on unverified trust at any stage.</div>
            </div>
            <div className="mv-value r" data-d="4">
              <div className="mv-value-name">Institutional Continuity</div>
              <div className="mv-value-desc">The institution must outlast every leadership generation that serves it. Identity is constitutional — not personal.</div>
            </div>
          </div>
          <div className="mv-intent r" data-d="3">
            <div className="mv-intent-line" />
            <p className="mv-intent-txt"><strong>Strategic Intent:</strong> SWAQAR intends to become the institutional reference point for corridor coordination governance across Africa, the Middle East, and Asia — the infrastructure layer that makes trade between these regions more verified, more trusted, and more executable. This is a multi-decade intention, subject to evidence, governance discipline, and counsel-validated milestones.</p>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section className="identity" id="identity">
        <div className="wrap">
          <div className="id-inner">
            <div>
              <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">Institutional Identity</span></div>
              <h2 className="sec-h r" data-d="1">A coordination layer,<br/>not a <em>counterparty</em>.</h2>
              <p className="sec-p r" data-d="2">SWAQAR Group governs the institutional space between verified exporters, buyers, banks, logistics operators, and governments — coordinating without owning, verifying without brokering, connecting without custodying.</p>
              <div className="pillars r" data-d="3">
                <div className="pillar"><div className="pillar-name">Governance-Led</div><div className="pillar-desc">Supreme Council, Ethics &amp; Oversight Council, External Trustee Panel</div></div>
                <div className="pillar"><div className="pillar-name">Verification-First</div><div className="pillar-desc">Every counterparty verified through licensed firms before engagement</div></div>
                <div className="pillar"><div className="pillar-name">Asset-Light</div><div className="pillar-desc">No owned infrastructure, cargo, or capital positions</div></div>
                <div className="pillar"><div className="pillar-name">Non-Custodial</div><div className="pillar-desc">SWAQAR never holds funds, title, or goods under any circumstance</div></div>
              </div>
            </div>
            <div className="id-card r" data-d="2">
              <div className="id-quote">&ldquo;SWAQAR coordinates without owning. Verifies without brokering. Connects without <strong>custodying.</strong>&rdquo;</div>
              <div className="id-meta">
                <div className="id-badge-circle"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CEA437" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                <div><div className="id-badge-name">SWAQAR Group</div><div className="id-badge-role">Founding Governance Doctrine</div></div>
              </div>
              <div className="id-medallion"><span className="id-medallion-n">I</span><span className="id-medallion-t">Foundation</span></div>
            </div>
          </div>
          <div className="id-grid r">
            <div className="id-col id-col-yes">
              <div className="id-col-head">✦ — SWAQAR IS</div>
              {['A governance-led Trade Coordination Layer','Verification-first across all corridors and counterparties','Asset-light and non-custodial by constitutional design','A coordination layer working above licensed operators — not replacing them','Governed by Supreme Council, Ethics & Oversight Council, and External Trustee Panel','Operating under counsel-validated legal and compliance frameworks','Phase I — Foundation Stage · Not yet operationally active','Built for a multi-decade institutional horizon'].map((t,i) => (
                <div className="id-row" key={i}><div className="id-pip">—</div><span className="id-txt">{t}</span></div>
              ))}
            </div>
            <div className="id-col id-col-no">
              <div className="id-col-head">✕ — SWAQAR IS NOT</div>
              {['A commodity trader, broker, or dealer of any kind','A bank, lender, escrow provider, or regulated financial institution','A logistics operator, freight company, or cargo owner','A marketplace, exchange, or transactional platform of any kind','A custodian or paymaster of any kind','A fintech, SaaS company, or speculative technology startup','A counterparty to any transaction it coordinates','An investment vehicle or capital-raising vehicle of any kind'].map((t,i) => (
                <div className="id-row" key={i}><div className="id-pip">✕</div><span className="id-txt">{t}</span></div>
              ))}
            </div>
          </div>
          <div className="gov-note r" data-d="3" style={{marginTop:'32px'}}>
            <div className="gov-note-tag">Revenue Model</div>
            <p className="gov-note-txt">SWAQAR earns disclosed, fixed-scope governance coordination fees upon engagement mandate confirmation — structured as institutional fixed fees paid by corridor participants, not percentage-based commissions. SWAQAR holds no position in, and earns no fees from, the transactions it coordinates.</p>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      <section className="corridors" id="corridors">
        <div className="wrap">
          <div className="cor-head">
            <div>
              <div className="sec-tag r"><div className="sec-tag-line" /><span className="sec-tag-txt">Corridor Architecture</span></div>
              <h2 className="sec-h r" data-d="1">Three Regions. <em>One Coordination Layer.</em></h2>
            </div>
            <p className="sec-p r" data-d="2">SWAQAR coordinates institutional trust, verification, and execution readiness across the Africa ↔ Middle East ↔ Asia corridor system. Each region plays a defined role. SWAQAR&apos;s coordination layer operates above licensed operators across all three — not within them.</p>
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
              <text x="110" y="212" textAnchor="middle" fontSize="7" fill="#1A1A1A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">AFRICA</text>
              <text x="110" y="221" textAnchor="middle" fontSize="6" fill="#535256" fontFamily="DM Sans,sans-serif" letterSpacing="2">ORIGIN &amp; SUPPLY</text>
              <circle cx="390" cy="109" r="9" fill="rgba(26,26,26,.1)" stroke="#1A1A1A" strokeWidth="1.5" />
              <circle cx="390" cy="109" r="4" fill="#1A1A1A" />
              <circle cx="390" cy="109" r="16" fill="rgba(26,26,26,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" begin=".9s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" begin=".9s" repeatCount="indefinite" /></circle>
              <text x="390" y="88" textAnchor="middle" fontSize="7" fill="#1A1A1A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">MIDDLE EAST</text>
              <text x="390" y="97" textAnchor="middle" fontSize="6" fill="#535256" fontFamily="DM Sans,sans-serif" letterSpacing="2">TRUST &amp; CAPITAL · JEDDAH</text>
              <rect x="340" y="130" width="100" height="22" rx="2" fill="#1A1A1A" />
              <text x="390" y="145" textAnchor="middle" fontSize="6" fill="#CEA437" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">SWAQAR</text>
              <circle cx="776" cy="108" r="9" fill="rgba(26,26,26,.1)" stroke="#1A1A1A" strokeWidth="1.5" />
              <circle cx="776" cy="108" r="4" fill="#1A1A1A" />
              <circle cx="776" cy="108" r="16" fill="rgba(26,26,26,.05)"><animate attributeName="r" values="9;20;9" dur="2.8s" begin="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".4;0;.4" dur="2.8s" begin="1.8s" repeatCount="indefinite" /></circle>
              <text x="776" y="87" textAnchor="middle" fontSize="7" fill="#1A1A1A" fontFamily="DM Sans,sans-serif" letterSpacing="3" fontWeight="600">ASIA</text>
              <text x="776" y="96" textAnchor="middle" fontSize="6" fill="#535256" fontFamily="DM Sans,sans-serif" letterSpacing="2">DEMAND &amp; SCALE</text>
              <circle r="4" fill="#CEA437" filter="url(#bf)" opacity=".7"><animateMotion dur="3s" repeatCount="indefinite" path="M 110,188 C 200,163 270,133 360,113" /></circle>
              <circle r="3.5" fill="#CEA437" filter="url(#bf)" opacity=".55"><animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M 420,106 C 530,90 640,82 768,108" /></circle>
            </svg>
          </div>

          <div className="cor-tier r" data-d="1">
            <div className="cor-tier-head">
              <span className="cor-tier-num">01</span>
              <span className="cor-tier-title">Current Strategic Focus — Phase I Active Pilot Corridor</span>
              <span className="cor-tier-badge">Active</span>
            </div>
            <div className="cor-card-active">
              <div className="cor-gov-note" style={{marginTop:'28px'}}>
                <div className="cor-gov-note-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
                </div>
                <div>
                  <div className="cor-gov-note-tag">Governance Note — Phase I Candidate Corridor</div>
                  <p className="cor-gov-note-txt">This corridor is SWAQAR Group&apos;s designated Phase I pilot corridor, currently in preparation. No corridor is operationally active. Activation is subject to completion of the Four-Gate Model, counterparty qualification through the Partner Qualification Gate, banking and TIC panel readiness, and Supreme Council mandate. This is a governance-architecture illustration only — subject to counsel-validated legal, regulatory, and governance review before any activation proceeds.</p>
                </div>
              </div>
              <div className="cor-card-active-inner">
                <div className="cor-active-left">
                  <div className="cor-phase-label"><div className="cor-phase-dot" /><span className="cor-phase-txt">Agriculture &amp; Food Security · Africa ↔ Middle East ↔ Asia</span></div>
                  <p className="cor-active-desc">Coordinating agricultural commodity flows between verified African exporters and institutional buyers in the Middle East and Asia. SWAQAR coordinates the institutional conditions — it does not trade, broker, hold title, or act as logistics operator at any stage.</p>
                  <div className="cor-active-roles">
                    <div className="cor-role"><div className="cor-role-region">Africa</div><div className="cor-role-name">Origin &amp; Supply</div><div className="cor-role-desc">Verified agricultural exporters across East and West Africa. Commodity readiness, documentation alignment, and counterparty qualification coordinated through licensed TIC partners.</div></div>
                    <div className="cor-role"><div className="cor-role-region">Middle East · Jeddah</div><div className="cor-role-name">Trust &amp; Capital Anchor</div><div className="cor-role-desc">Institutional capital depth, Islamic trade finance infrastructure, and GCC sovereign food security demand. SWAQAR&apos;s institutional centre of gravity — coordinating alongside, not within, regional financial institutions.</div></div>
                    <div className="cor-role"><div className="cor-role-region">Asia</div><div className="cor-role-name">Demand &amp; Industrial Scale</div><div className="cor-role-desc">Institutional buyers, processing entities, and industrial demand anchors across India, China, and Southeast Asia. Counterparty verification and documentation governance coordinated for Asian demand-side engagement.</div></div>
                  </div>
                </div>
                <div className="cor-active-right">
                  <div className="cor-coordinates">
                    <div className="cor-coord-item">
                      <div className="cor-coord-pip" />
                      <div className="cor-coord-txt">
                        <strong>Counterparty verification</strong>
                        Exporters and buyers qualified through the Partner Qualification Gate via licensed TIC firms — SGS, Bureau Veritas, and Intertek.
                      </div>
                    </div>
                    <div className="cor-coord-item">
                      <div className="cor-coord-pip" />
                      <div className="cor-coord-txt">
                        <strong>Documentation alignment</strong>
                        Commercial, regulatory, financial, and logistics documentation coordinated across all corridor jurisdictions under a counsel-validated framework.
                      </div>
                    </div>
                    <div className="cor-coord-item">
                      <div className="cor-coord-pip" />
                      <div className="cor-coord-txt">
                        <strong>Banking panel readiness</strong>
                        Corridor participants aligned with Islamic trade finance instruments — Murabaha, Wakala, L/C under UCP 600 — through ITFC and GCC banking partners.
                      </div>
                    </div>
                    <div className="cor-coord-item">
                      <div className="cor-coord-pip" />
                      <div className="cor-coord-txt">
                        <strong>Stakeholder synchronization</strong>
                        Banks, TIC firms, exporters, buyers, logistics operators, and regulators sequenced under SWAQAR&apos;s Corridor Operating System.
                      </div>
                    </div>
                    <div className="cor-coord-item" style={{gridColumn:'1 / -1'}}>
                      <div className="cor-coord-pip" />
                      <div className="cor-coord-txt">
                        <strong>Governance oversight</strong>
                        Every coordinated transaction moves through the full Four-Gate Model under Supreme Council mandate. The escalation path is defined before any execution begins.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cor-active-footer">
                <p className="cor-active-footer-txt">SWAQAR holds no title, cargo, funds, or physical assets in this corridor at any stage. Licensed parties execute; counterparties contract directly with each other. SWAQAR coordinates the institutional conditions under which they engage.</p>
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
              <span className="cor-tier-title">Corridor Domains Under Strategic Evaluation</span>
              <span className="cor-tier-badge eval">Phase II+ · Subject to Phase I Proof</span>
            </div>
            <div className="cor-eval-grid" data-cols="2" style={{gridTemplateColumns:'1fr 1fr'}}>
              <div className="cor-eval-card">
                <div className="cor-eval-reg">Industrial Development</div>
                <div className="cor-eval-title">Building Materials &amp; Industrial Goods</div>
                <p className="cor-eval-body">Africa&apos;s infrastructure development — housing, roads, industrial parks, ports — creates structural demand for building materials flowing from Asian manufacturers through Middle Eastern free zone infrastructure to African project developers. Multi-stakeholder verification requirements, cross-jurisdictional documentation complexity, and the absence of a neutral institutional governance layer make this domain a natural fit for SWAQAR&apos;s four-gate coordination architecture.</p>
                <div className="cor-tags" style={{marginBottom:'14px'}}><span className="cor-tag">Asia → Middle East → Africa</span><span className="cor-tag">Verification</span><span className="cor-tag">Documentation Governance</span><span className="cor-tag">Multi-Stakeholder</span></div>
                <p className="cor-eval-note">SWAQAR coordinates verification, documentation, and institutional counterparty readiness — it does not act as procurement agent, project developer, contractor, or capital provider in this domain. Evaluation is subject to Phase I proof and Supreme Council mandate. If your institutional interest is in this corridor domain, you may register your interest for Phase II consideration through the Engage section.</p>
              </div>
              <div className="cor-eval-card">
                <div className="cor-eval-reg">Agricultural Value Chain</div>
                <div className="cor-eval-title">Agricultural Inputs &amp; Commodity Processing</div>
                <p className="cor-eval-body">Beyond raw agricultural commodity flows, the verified coordination of agricultural inputs — fertilisers, seeds, agrochemicals, processing equipment — and agro-processing capacity represents a natural institutional extension of SWAQAR&apos;s Phase I Agriculture corridor. GCC and Asian demand for processed agricultural products, and Africa&apos;s growing agro-processing sector, create the same multi-stakeholder verification and documentation requirements SWAQAR&apos;s four-gate model is designed to govern.</p>
                <div className="cor-tags" style={{marginBottom:'14px'}}><span className="cor-tag">Africa ↔ Middle East ↔ Asia</span><span className="cor-tag">Agricultural Inputs</span><span className="cor-tag">Agro-Processing</span><span className="cor-tag">Verification</span></div>
                <p className="cor-eval-note">SWAQAR coordinates verification readiness, documentation alignment, and institutional counterparty qualification — it does not trade, aggregate, procure, or act as a logistics operator in this domain. Evaluation subject to Phase I proof and Supreme Council mandate. If your institutional interest is in this corridor domain, you may register your interest for Phase II consideration through the Engage section.</p>
              </div>
            </div>
            <div className="cor-cap-row">
              <div className="cor-cap-item">
                <div className="cor-cap-name">Counterparty Verification</div>
                <div className="cor-cap-status">Active — Phase I</div>
                <p className="cor-cap-desc">Licensed TIC panel engaged for all corridor participants. Verification precedes every engagement.</p>
              </div>
              <div className="cor-cap-item">
                <div className="cor-cap-name">Documentation Governance</div>
                <div className="cor-cap-status">Active — Phase I</div>
                <p className="cor-cap-desc">Counsel-validated documentation framework per corridor jurisdiction, aligned with ICC standards.</p>
              </div>
              <div className="cor-cap-item">
                <div className="cor-cap-name">Trade Finance Readiness</div>
                <div className="cor-cap-status">Building toward Phase II</div>
                <p className="cor-cap-desc">Alignment with ITFC, Afreximbank, and GCC banking panel partners for Islamic and conventional instruments.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="gates" id="model">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">Corridor Entry Protocol</span></div>
          <h2 className="sec-h r" data-d="1">Every coordinated corridor moves through<br/><em>four governance gates.</em></h2>
          <p className="sec-p r" data-d="2">No corridor engagement proceeds until all four gates are passed. This is a constitutional governance requirement, not a process preference.</p>
          <div className="gates-grid">
            <div className="gate r"><div className="gate-n">I</div><div className="gate-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg></div><div className="gate-tag">Gate I</div><div className="gate-name">Counterparty Verification</div><div className="gate-desc">Every participant — exporter, buyer, logistics operator, financial intermediary — passes SWAQAR&apos;s verification protocol before any coordination mandate is issued.</div></div>
            <div className="gate r" data-d="1"><div className="gate-n">II</div><div className="gate-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6M9 16h6M9 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"/></svg></div><div className="gate-tag">Gate II</div><div className="gate-name">Documentation Readiness</div><div className="gate-desc">All trade documentation must meet SWAQAR&apos;s standard prior to corridor activation. A counsel-reviewed documentation package is required in full before Gate II closes.</div></div>
            <div className="gate r" data-d="2"><div className="gate-n">III</div><div className="gate-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l10 5v5c0 5.55-3.84 10.74-10 12C5.84 22.74 2 17.55 2 12V7l10-5z"/></svg></div><div className="gate-tag">Gate III</div><div className="gate-name">Governance Alignment</div><div className="gate-desc">The corridor structure must align to SWAQAR&apos;s governance architecture and applicable legal frameworks across all participating jurisdictions. Supreme Council confirmation required.</div></div>
            <div className="gate r" data-d="3"><div className="gate-n">IV</div><div className="gate-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><div className="gate-tag">Gate IV</div><div className="gate-name">Execution Mandate</div><div className="gate-desc">Only after Gates I–III are cleared does SWAQAR issue a formal Execution Mandate. This governs the coordination engagement and defines the boundaries of SWAQAR&apos;s role.</div></div>
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="arms" id="arms">
        <div className="wrap">
          <div className="arms-inner">
            <div>
              <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">Institutional Architecture</span></div>
              <h2 className="sec-h r" data-d="1">Seven <em>Institutional Arms.</em> One Architecture.</h2>
              <div className="arm-list" style={{marginTop:'36px'}}>
                {[
                  ['01','SWAQAR Corridors of Trust','Core corridor governance across Africa, the Middle East, and Asia — verification-governed and non-custodial.'],
                  ['02','SWAQAR Intelligence','Corridor intelligence, market signals, and counterparty risk data — lawfully gathered, ethically sourced.'],
                  ['03','SWAQAR Capital & Trade Finance Coordination','Facilitating access to licensed trade finance institutions. Never custodial. Never a financial principal.'],
                  ['04','SWAQAR Verification & Compliance','Counterparty verification through licensed TIC partners. The Partner Qualification Gate is a prerequisite for all corridor activations — maintaining verification integrity as a standing corridor condition, not a one-time gate.'],
                  ['05','SWAQAR Institutional Relations','Sovereign, government, and ministerial engagement at institutional grade. The dedicated interface for government ministries and sovereign bodies engaging with SWAQAR at institutional standard.'],
                  ['06','SWAQAR Industrial Corridors','Industrial trade development across SWAQAR\'s corridor regions. Documentation alignment and stakeholder synchronization for licensed logistics operators and qualified industrial counterparties.'],
                  ['07','SWAQAR Advisory','Strategic advisory on corridor architecture and governance design. Capital and strategic partners engage through this arm at governance level, subject to Supreme Council review.']
                ].map(([n,name,desc]) => (
                  <div className="arm r" key={n}><span className="arm-n">{n}</span><div><div className="arm-name">{name}</div><div className="arm-desc">{desc}</div></div></div>
                ))}
              </div>
            </div>
            <div className="abx r" data-d="2">
              <div className="abx-tag">Institutional Foundation</div>
              <div className="abx-h">Built for a multi-decade institutional horizon.</div>
              <div className="abx-p">SWAQAR is not a startup seeking scale. It is a coordination institution being built to last — verification-governed, governance-anchored, designed to compound institutional credibility over time, not transaction volume.</div>
              <div className="abx-metrics">
                <div className="abx-m"><div className="abx-mv">Phase I</div><div className="abx-ml">Foundation Stage</div></div>
                <div className="abx-m"><div className="abx-mv">IV Gates</div><div className="abx-ml">Entry Protocol</div></div>
                <div className="abx-m"><div className="abx-mv">3</div><div className="abx-ml">Corridor Regions</div></div>
                <div className="abx-m"><div className="abx-mv">100%</div><div className="abx-ml">Non-Custodial</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="gov" id="governance">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">Governance Structure</span></div>
          <h2 className="sec-h r" data-d="1">Three layers of institutional <em>governance oversight.</em></h2>
          <div className="gov-grid">
            <div className="gov-card r"><div className="gov-name">Supreme Council</div><div className="gov-desc">The highest governance authority. Oversees constitutional mandate, reserved matters, and institutional continuity. Supermajority required on all mission-critical decisions.</div></div>
            <div className="gov-card r" data-d="1"><div className="gov-name">Ethics &amp; Oversight Council</div><div className="gov-desc">Independent institutional review body responsible for ethical governance, mission alignment, and counterparty conduct standards across all corridor engagements. KYC and AML compliance discipline operates in alignment with FATF guidelines and applicable regulatory requirements per corridor jurisdiction.</div></div>
            <div className="gov-card r" data-d="2"><div className="gov-name">External Trustee Panel</div><div className="gov-desc">Senior external advisors providing independent institutional oversight. Ensures non-substitution discipline and multi-jurisdictional governance accountability.</div></div>
          </div>
          <div className="gov-note r">
            <div className="gov-note-tag">Governance Position</div>
            <div className="gov-note-txt">All corridor activation is subject to Supreme Council mandate and counsel-validated legal review. SWAQAR Group is currently in Phase I — Foundation Stage and is not yet operationally active. Nothing on this site constitutes a financial solicitation, investment advice, or offer of any regulated service.</div>
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="sec-tag r"><div className="sec-tag-line"></div><span className="sec-tag-txt">Institutional Inquiry</span></div>
          <div className="con-inner">
            <div>
              <h2 className="sec-h r" data-d="1" style={{color:'#fff'}}>Submit a governed<br/><em>institutional inquiry.</em></h2>
              <p className="sec-p r" data-d="2" style={{color:'rgba(255,255,255,0.45)',marginBottom:'40px'}}>All inquiries reviewed against counterparty eligibility criteria. Submission does not initiate an engagement or create any obligation.</p>
              <div className="con-grp r" data-d="2"><label className="con-lbl">Organisation / Institution</label><input className="con-input" type="text" placeholder="Full registered legal entity name"/></div>
              <div className="con-grp r" data-d="2"><label className="con-lbl">Authorised Representative Name</label><input className="con-input" type="text" placeholder="Full name of authorised representative"/></div>
              <div className="con-grp r" data-d="3"><label className="con-lbl">Engagement Category</label><select className="con-sel"><option value="">Select inquiry category</option><option>Government / Ministerial Engagement</option><option>Banking / Trade-Finance Coordination</option><option>Verified Exporter — Corridor Participation</option><option>Verified Buyer — Corridor Participation</option><option>Verification / Compliance Partnership</option><option>Logistics / Infrastructure Partnership</option><option>Institutional Capital Partner Engagement</option><option>Other Institutional Inquiry</option></select></div>
              <div className="con-grp r" data-d="3"><label className="con-lbl">Nature of Inquiry</label><textarea className="con-area" placeholder="Describe the institutional engagement purpose. Be specific."></textarea></div>
              <div style={{marginBottom:'24px',padding:'20px 22px',background:'var(--stone)',border:'1px solid var(--rule)',borderLeft:'2px solid var(--gold)'}}>
                <div style={{fontSize:'.54rem',letterSpacing:'.28em',textTransform:'uppercase' as const,color:'var(--gold)',fontWeight:600,marginBottom:'12px'}}>What Happens After You Submit</div>
                <div style={{display:'flex',flexDirection:'column' as const,gap:'10px'}}>
                  <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                    <span style={{fontFamily:'var(--serif)',fontSize:'.75rem',color:'var(--gold)',flexShrink:0,marginTop:'1px'}}>01</span>
                    <span style={{fontSize:'.8rem',lineHeight:'1.65',color:'var(--body)'}}><strong style={{color:'var(--ink)'}}>Inquiry received</strong> — your submission enters SWAQAR&apos;s institutional review queue. All inquiries are acknowledged.</span>
                  </div>
                  <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                    <span style={{fontFamily:'var(--serif)',fontSize:'.75rem',color:'var(--gold)',flexShrink:0,marginTop:'1px'}}>02</span>
                    <span style={{fontSize:'.8rem',lineHeight:'1.65',color:'var(--body)'}}><strong style={{color:'var(--ink)'}}>Eligibility review</strong> — your inquiry is assessed against SWAQAR&apos;s counterparty eligibility criteria and engagement category requirements.</span>
                  </div>
                  <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                    <span style={{fontFamily:'var(--serif)',fontSize:'.75rem',color:'var(--gold)',flexShrink:0,marginTop:'1px'}}>03</span>
                    <span style={{fontSize:'.8rem',lineHeight:'1.65',color:'var(--body)'}}><strong style={{color:'var(--ink)'}}>Qualification gate initiated</strong> — eligible counterparties are invited to begin the Partner Qualification Gate process under SWAQAR&apos;s governance framework.</span>
                  </div>
                  <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                    <span style={{fontFamily:'var(--serif)',fontSize:'.75rem',color:'var(--gold)',flexShrink:0,marginTop:'1px'}}>04</span>
                    <span style={{fontSize:'.8rem',lineHeight:'1.65',color:'var(--body)'}}><strong style={{color:'var(--ink)'}}>Engagement confirmed or declined</strong> — all outcomes are communicated in writing. SWAQAR does not proceed without a confirmed governance-compliant engagement framework in place.</span>
                  </div>
                </div>
              </div>
              <p className="con-disc r" data-d="4">All inquiries are reviewed against SWAQAR&apos;s counterparty eligibility criteria before any response is issued. Submission does not initiate an engagement, create contractual obligation, or constitute regulated advice of any kind.</p>
              <button className="btn-gold r" data-d="4" style={{width:'100%',justifyContent:'center'}}>Submit Institutional Inquiry</button>
            </div>
            <div className="r" data-d="2">
              <div className="con-info-h">Engage SWAQAR at institutional standard.</div>
              <div className="con-info-p">SWAQAR Group operates under strict counterparty verification and engagement protocols. Institutional engagement begins with verification, proceeds through the Four-Gate Model, and is governed at every stage by the Supreme Council mandate.</div>
              <div className="con-details">
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><div><div className="con-detail-lbl">Headquarters</div><div className="con-detail-val">Jeddah, Kingdom of Saudi Arabia</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div className="con-detail-lbl">Engagement Type</div><div className="con-detail-val">Institutional counterparts only. No retail engagement accepted.</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div><div className="con-detail-lbl">Current Stage</div><div className="con-detail-val">Phase I — Foundation. Not yet operationally active.</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg></div><div><div className="con-detail-lbl">Institutional Contact</div><div className="con-detail-val">engage@swaqar.com</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/></svg></div><div><div className="con-detail-lbl">Legal Standing</div><div className="con-detail-val">SWAQAR Group is a registered legal entity operating under counsel-validated governance frameworks across applicable jurisdictions. Legal registration details are available to qualified institutional counterparties upon engagement.</div></div></div>
                <div className="con-detail"><div className="con-detail-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg></div><div><div className="con-detail-lbl">Legal Position</div><div className="con-detail-val">Subject to counsel-validated legal and regulatory review in all applicable jurisdictions.</div></div></div>
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
              <p className="foot-desc">A governance-led, non-custodial Trade Coordination Layer governing verification, institutional trust, corridor execution, and intelligence across Africa, the Middle East, and Asia.</p>
            </div>
            <div className="foot-col"><h5>The Model</h5><ul><li><a href="#corridors">Corridor Architecture</a></li><li><a href="#model">4-Gate Model</a></li><li><a href="#governance">Governance Architecture</a></li><li><a href="#arms">Strategic Arms</a></li></ul></div>
            <div className="foot-col"><h5>Engage</h5><ul><li><a href="#contact">Institutional Inquiry</a></li><li><a href="#identity">Identity</a></li><li><a href="#governance">Review Governance</a></li><li style={{color:'rgba(255,255,255,0.32)'}}>Jeddah · Kingdom of Saudi Arabia</li></ul></div>
            <div className="foot-col"><h5>Corridor Regions</h5><ul><li><a href="#corridors">Africa ↔ Middle East</a></li><li><a href="#corridors">Middle East ↔ Asia</a></li><li><a href="#corridors">Africa ↔ Asia</a></li><li><a href="#model">4-Gate Process</a></li></ul></div>
          </div>
          <p className="foot-legal">SWAQAR Group is a governance-led, non-custodial Trade Coordination Layer. This website is for institutional information only and does not constitute an offer, solicitation, recommendation, or investment advice of any kind. SWAQAR Group does not custody funds, hold title to goods, own cargo, operate logistics assets, act as a broker, trader, or commercial agent, or replace regulated financial, banking, customs, or logistics operators. Engagement with SWAQAR Group is subject to jurisdictional legal review, counsel-validated due diligence per jurisdiction, and institutional governance approval. For institutional audiences only.</p>
          <div className="foot-btm">
            <div style={{display:'flex',gap:'24px',alignItems:'center',flexWrap:'wrap'}}>
              <span className="foot-copy">© 2025 SWAQAR Group · All rights reserved</span>
              <span className="foot-copy" style={{opacity:.5}}>Counsel-Cleared · Governance-Led · Non-Custodial</span>
            </div>
            <div className="foot-badges"><span className="foot-badge">Asset-Light</span><span className="foot-badge">Non-Custodial</span><span className="foot-badge">Verification-Governed</span></div>
          </div>
        </div>
      </footer>
    </>
  );
}
