'use client';
import { useEffect, useRef } from 'react';

export default function Home() {
  const progressRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const progress = progressRef.current;
    const handleScroll = () => {
      if (!nav || !progress) return;
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 40);
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (dh > 0 ? (y / dh) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    setTimeout(() => {
      document.querySelectorAll('.reveal,.reveal-stagger').forEach(el => io.observe(el));
      document.querySelectorAll('.hero .reveal,.hero .reveal-stagger').forEach(el => el.classList.add('visible'));
    }, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const m = mobileMenuRef.current;
    if (!m) return;
    const open = m.classList.contains('open');
    m.classList.toggle('open', !open);
    m.setAttribute('aria-hidden', open ? 'true' : 'false');
    document.body.style.overflow = open ? '' : 'hidden';
  };

  return (
    <>
      <div className="scroll-progress" ref={progressRef as React.RefObject<HTMLDivElement>} aria-hidden="true"></div>

      <header className="nav" ref={navRef as React.RefObject<HTMLElement>} id="nav">
        <div className="nav-inner">
          <a href="#hero" className="logo" aria-label="SWAQAR Group home">
            <span className="logo-rule" aria-hidden="true"></span>
            <span className="logo-stack">
              <span className="logo-name">SWAQAR <em>GROUP</em></span>
              <span className="logo-tag">Corridors of Trust</span>
            </span>
          </a>
          <div className="nav-cluster">
            <nav aria-label="Primary">
              <ul className="nav-links">
                <li><a href="#problem">Problem</a></li>
                <li><a href="#corridors">Corridors</a></li>
                <li><a href="#gates">Model</a></li>
                <li><a href="#governance">Governance</a></li>
                <li><a href="#pilot">Candidate Corridor</a></li>
                <li><a href="#engage">Engage</a></li>
              </ul>
            </nav>
            <a href="#engage" className="btn nav-cta">Institutional Inquiry →</a>
            <button className="nav-toggle" aria-label="Open menu" onClick={toggleMenu}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </header>

      <aside className="mobile-menu" ref={mobileMenuRef as React.RefObject<HTMLElement>} aria-hidden="true">
        <ul>
          <li><a href="#problem" onClick={toggleMenu}>Problem We Address</a></li>
          <li><a href="#corridors" onClick={toggleMenu}>Corridors</a></li>
          <li><a href="#approach" onClick={toggleMenu}>Operating Approach</a></li>
          <li><a href="#gates" onClick={toggleMenu}>4-Gate Model</a></li>
          <li><a href="#boundaries" onClick={toggleMenu}>Institutional Boundaries</a></li>
          <li><a href="#pilot" onClick={toggleMenu}>Candidate Corridor</a></li>
          <li><a href="#governance" onClick={toggleMenu}>Governance</a></li>
          <li><a href="#arms" onClick={toggleMenu}>Strategic Arms</a></li>
          <li><a href="#engage" onClick={toggleMenu}>Engage</a></li>
        </ul>
        <a href="#engage" className="btn btn-solid" onClick={toggleMenu}>Institutional Inquiry</a>
      </aside>

      <main id="main">

        <section className="hero" id="hero" aria-label="SWAQAR Group introduction">
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="hero-lines" aria-hidden="true">
            <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,640 C300,580 600,620 900,540 C1050,500 1150,520 1200,480"/>
              <path d="M0,520 C200,460 500,500 800,400 C1000,340 1100,360 1200,300"/>
              <path d="M0,720 C350,680 700,700 1000,640 C1100,620 1180,610 1200,600"/>
            </svg>
          </div>
          <div className="container hero-inner">
            <div className="hero-grid">
              <div className="hero-content reveal">
                <div className="eyebrow">Corridors of Trust</div>
                <h1 className="hero-title">A Trusted <span className="accent">Trade Coordination Layer</span><br/>for Africa — Middle East — Asia</h1>
                <p className="hero-sub">A governance-led coordination institution for cross-regional trade corridors. Verification-first. Non-custodial. Built for institutional durability.</p>
                <div className="hero-actions">
                  <a href="#engage" className="btn btn-solid">Request Institutional Engagement</a>
                  <a href="#corridors" className="btn btn-ghost">Explore the Coordination Layer</a>
                </div>
                <div className="hero-meta">
                  <div><span className="label">Posture</span><span className="value">Non-Custodial · Asset-Light</span></div>
                  <div><span className="label">Structure</span><span className="value">Governance-Led · Verification-First</span></div>
                  <div><span className="label">Horizon</span><span className="value">Multi-Decade Institutional</span></div>
                </div>
              </div>
              <div className="hero-visual reveal" aria-label="Corridor coordination visualization">
                <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                  <defs><radialGradient id="ng" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#B8923A" stopOpacity="0.85"/><stop offset="100%" stopColor="#B8923A" stopOpacity="0"/></radialGradient></defs>
                  <circle cx="80" cy="120" r="20" fill="url(#ng)"/><circle cx="320" cy="200" r="20" fill="url(#ng)"/><circle cx="200" cy="380" r="20" fill="url(#ng)"/>
                  <circle className="corridor-node" cx="80" cy="120" r="3.5"/><circle className="corridor-node" cx="320" cy="200" r="3.5"/><circle className="corridor-node" cx="200" cy="380" r="3.5"/><circle className="corridor-node" cx="200" cy="240" r="5"/>
                  <path className="corridor-line d1" d="M80,120 Q140,160 200,240"/>
                  <path className="corridor-line d2" d="M320,200 Q260,220 200,240"/>
                  <path className="corridor-line d3" d="M200,240 Q200,310 200,380"/>
                  <text x="92" y="100" fontFamily="DM Mono" fontSize="9" fill="#B8923A" letterSpacing="2">AFRICA</text>
                  <text x="332" y="182" fontFamily="DM Mono" fontSize="9" fill="#B8923A" letterSpacing="2">ASIA</text>
                  <text x="148" y="408" fontFamily="DM Mono" fontSize="9" fill="#B8923A" letterSpacing="2">MIDDLE EAST</text>
                  <text x="162" y="234" fontFamily="DM Mono" fontSize="7" fill="rgba(255,255,255,0.7)" letterSpacing="1.5">SWAQAR</text>
                </svg>
                <div className="visual-caption">Verification, documentation, synchronization across three regions — one coordination layer.</div>
              </div>
            </div>
          </div>
          <div className="scroll-hint" aria-hidden="true"><span>SCROLL</span><span className="ln"></span></div>
        </section>

        <div className="trust-strip">
          <div className="container">
            <div className="trust-grid reveal-stagger">
              <div className="trust-item"><svg className="trust-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 4l10 5v8c0 5-4 9-10 11C10 26 6 22 6 17V9l10-5z"/></svg><h4>Governance-Led</h4><p>Supreme Council, Ethics &amp; Oversight Council, External Trustee Panel as standing institutional surface.</p></div>
              <div className="trust-item"><svg className="trust-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="10"/><path d="M11 16l4 4 7-8"/></svg><h4>Verification-First</h4><p>Every counterparty verified through licensed firms before any corridor engagement proceeds.</p></div>
              <div className="trust-item"><svg className="trust-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 12h16M8 16h16M8 20h10"/><rect x="4" y="6" width="24" height="22" rx="1"/></svg><h4>Non-Custodial</h4><p>SWAQAR holds no funds, cargo, or title at any stage of any corridor engagement.</p></div>
              <div className="trust-item"><svg className="trust-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 16h4l4-8 4 16 4-10 3 6h5"/></svg><h4>Asset-Light</h4><p>No owned logistics infrastructure, cargo, or capital positions. Coordination without ownership.</p></div>
              <div className="trust-item"><svg className="trust-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="10"/><path d="M16 10v6l4 3"/></svg><h4>Multi-Decade Horizon</h4><p>Built for institutional durability — corridor credibility compounds over time, not transaction volume.</p></div>
            </div>
          </div>
        </div>

        <section id="problem" style={{background:'var(--bg)'}}>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">The Problem We Address</div>
              <h2>Cross-regional trade does not fail for lack of goods.<br/>It fails for lack of <span className="accent">trusted coordination infrastructure</span>.</h2>
              <p className="lede">The institutional gap is not supply. It is not demand. It is the absence of a governed, verified coordination layer capable of holding the institutional surface across Africa, the Middle East, and Asia.</p>
            </div>
            <div className="problem-grid reveal-stagger">
              <div className="problem-card"><span className="pm">Gap 01</span><h4>No Verified Counterparty Layer</h4><p>Exporters and buyers lack institutional-grade verification infrastructure. Counterparty risk is managed informally, if at all.</p></div>
              <div className="problem-card"><span className="pm">Gap 02</span><h4>Documentation Fragmentation</h4><p>Trade documentation is jurisdiction-specific, unsynchronized, and institutionally disconnected across corridors.</p></div>
              <div className="problem-card"><span className="pm">Gap 03</span><h4>Absent Governance Layer</h4><p>No standing institutional body governs corridor integrity, escalates material matters, or preserves reputational discipline across participants.</p></div>
              <div className="problem-card"><span className="pm">Gap 04</span><h4>Institutional Trust Deficit</h4><p>Banks, governments, and trade finance institutions require institutional-grade counterpart trust that current corridor structures cannot provide.</p></div>
            </div>
          </div>
        </section>

        <section id="corridors" style={{background:'var(--bg)'}}>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Corridor Architecture</div>
              <h2>Three regions. <span className="accent">One coordination layer.</span></h2>
              <p className="lede">SWAQAR coordinates verified trade flow across the three most strategically aligned regions in global South–South trade — without owning, brokering, or operating any part of the corridor.</p>
            </div>
            <div className="cmw reveal">
              <svg className="cms" viewBox="0 0 780 240">
                <rect width="780" height="240" fill="none"/>
                <path d="M 160,120 Q 330,72 440,120 Q 550,168 620,120" fill="none" stroke="rgba(184,146,58,0.35)" strokeWidth="1.4" strokeDasharray="6 10"><animate attributeName="stroke-dashoffset" from="0" to="-80" dur="3s" repeatCount="indefinite"/></path>
                <path d="M 160,120 Q 390,180 620,120" fill="none" stroke="rgba(184,146,58,0.12)" strokeWidth="1" strokeDasharray="4 8"/>
                <circle cx="160" cy="120" r="11" fill="rgba(184,146,58,0.1)" stroke="rgba(184,146,58,0.4)" strokeWidth="1"/>
                <circle cx="160" cy="120" r="4.5" fill="#B8923A"><animate attributeName="r" values="4.5;7;4.5" dur="2.5s" repeatCount="indefinite"/></circle>
                <text x="160" y="144" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(184,146,58,0.7)" letterSpacing="2">AFRICA</text>
                <circle cx="440" cy="120" r="13" fill="rgba(184,146,58,0.15)" stroke="rgba(184,146,58,0.5)" strokeWidth="1.5"/>
                <circle cx="440" cy="120" r="5.5" fill="#B8923A"><animate attributeName="r" values="5.5;9;5.5" dur="3s" repeatCount="indefinite"/></circle>
                <text x="440" y="147" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(184,146,58,0.7)" letterSpacing="2">MIDDLE EAST</text>
                <circle cx="620" cy="120" r="11" fill="rgba(184,146,58,0.1)" stroke="rgba(184,146,58,0.4)" strokeWidth="1"/>
                <circle cx="620" cy="120" r="4.5" fill="#B8923A"><animate attributeName="r" values="4.5;7;4.5" dur="2.8s" repeatCount="indefinite"/></circle>
                <text x="620" y="144" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(184,146,58,0.7)" letterSpacing="2">ASIA</text>
                <text x="390" y="94" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="6.5" fill="rgba(184,146,58,0.35)" letterSpacing="3">SWAQAR COORDINATION LAYER</text>
              </svg>
            </div>
            <div className="cl reveal-stagger">
              <div className="li sw"><div className="lt">Africa Corridor</div><h4>Origin &amp; Supply</h4><p>Agricultural commodities, industrial minerals, and verified exporter networks coordinated for corridor readiness.</p></div>
              <div className="li"><div className="lt">Middle East Corridor</div><h4>Trust &amp; Capital Hub</h4><p>Trade finance coordination, sovereign engagement, and free zone interface. SWAQAR does not custody funds.</p></div>
              <div className="li"><div className="lt">Asia Corridor</div><h4>Demand &amp; Industrial Scale</h4><p>Verified offtake counterparties and institutional buyers coordinated for governance-aligned engagement.</p></div>
              <div className="li"><div className="lt">Coordination Layer</div><h4>SWAQAR</h4><p>Governs the institutional surface across all three corridors — verification, documentation, synchronization.</p></div>
            </div>
          </div>
        </section>

        <section id="approach" style={{background:'var(--bg)'}}>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Operating Approach</div>
              <h2>How SWAQAR <span className="accent">coordinates</span> without owning.</h2>
              <p className="lede">SWAQAR&apos;s operating model is defined by what it governs and what it does not touch. The coordination layer operates above licensed parties — synchronizing, verifying, and governing without substituting.</p>
            </div>
            <div className="apg reveal-stagger">
              <div className="fn"><div className="fm">I</div><div className="fl">Foundation</div><h3>Verification Governance</h3><p>Licensed verification firms perform regulated due diligence. SWAQAR governs the verification mandate — it does not perform or substitute for regulated verification activity.</p></div>
              <div className="fn"><div className="fm">II</div><div className="fl">Foundation</div><h3>Documentation Coordination</h3><p>Counsel-validated documentation frameworks coordinated across counterparties and jurisdictions. SWAQAR standardizes — licensed parties execute under their own authority.</p></div>
              <div className="fn"><div className="fm">III</div><div className="fl">Foundation</div><h3>Institutional Synchronization</h3><p>Live coordination across exporters, buyers, banks, logistics operators, and governments. One institutional voice governing the corridor surface.</p></div>
              <div className="fn"><div className="fm">IV</div><div className="fl">Foundation</div><h3>Governance Oversight</h3><p>Material matters surface through constitutional escalation. Routine deviations operate within governance-set parameters. The institutional record is preserved.</p></div>
            </div>
            <div className="an">SWAQAR coordinates without owning. Verifies without brokering. Connects without custodying. Every licensed activity remains with the licensed party under their own regulatory authority.</div>
          </div>
        </section>

        <section id="gates" style={{background:'var(--bg-soft)'}}>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Corridor Coordination Model</div>
              <h2>Every coordinated corridor moves through <span className="accent">four institutional gates</span>.</h2>
              <p className="lede">Each gate has a defined purpose, governance-closing authority, and gate-pass criteria. No corridor proceeds until all gates are cleared.</p>
            </div>
            <div className="gf reveal-stagger">
              <article className="gate"><div className="gn">01</div><div className="gl">Gate One</div><h3>Verification</h3><p>Counterparty status, regulatory standing, and corridor-specific compliance posture verified through licensed firms under counsel-validated due diligence.</p></article>
              <article className="gate"><div className="gn">02</div><div className="gl">Gate Two</div><h3>Documentation</h3><p>Counterparty, regulatory, financial, verification, and logistics documentation coordinated under counsel-validated framework per jurisdiction.</p></article>
              <article className="gate"><div className="gn">03</div><div className="gl">Gate Three</div><h3>Coordination</h3><p>Live institutional synchronization across counterparties: sequencing, dependency, communication, and visibility maintained as standing condition.</p></article>
              <article className="gate"><div className="gn">04</div><div className="gl">Gate Four</div><h3>Escalation &amp; Oversight</h3><p>Material matters surface through institutional escalation; routine deviations operate within governance-set parameters; record preserved.</p></article>
            </div>
          </div>
        </section>

        <section id="boundaries" style={{background:'var(--bg)'}}>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Institutional Boundaries</div>
              <h2>What SWAQAR <span className="accent">does</span>, and what it does not.</h2>
              <p className="lede">Boundary clarity protects counterparties and the institution. The lines below are constitutional and operate continuously across every engagement.</p>
            </div>
            <div className="bg2 reveal">
              <div className="bc does"><h3><span className="mk">[ + SWAQAR DOES ]</span></h3><ul><li>Coordinates trade execution across institutional counterparts</li><li>Verifies counterparties through licensed verification firms</li><li>Standardizes workflows and corridor documentation</li><li>Synchronizes corridor stakeholders under one institutional voice</li><li>Strengthens institutional trust as corridor infrastructure</li><li>Operates governance oversight across the corridor lifecycle</li></ul></div>
              <div className="bc dn"><h3><span className="mk">[ − SWAQAR DOES NOT ]</span></h3><ul><li>Buy, sell, or take title to any commodity at any point</li><li>Custody funds, transfer value, or finance as principal</li><li>Own, charter, or operate any logistics fleet or infrastructure</li><li>Act as broker, agent, or commercial intermediary</li><li>Replace banks, customs authorities, or licensed operators</li><li>Guarantee payment, delivery, or any commercial outcome</li></ul></div>
            </div>
          </div>
        </section>

        <section id="identity-guard" style={{background:'var(--bg-soft)'}}>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Category Clarity</div>
              <h2>The category is defined by what <span className="accent">the institution is not</span> as much as what it is.</h2>
              <p className="lede">These boundaries are constitutional operating reality — not marketing language. They are enforced through institutional governance, not personal preference.</p>
            </div>
            <div className="ig-grid reveal">
              <div className="ig-col ig-col-is">
                <h3><span className="ig-dot" aria-hidden="true"></span>SWAQAR Group Is</h3>
                <ul>
                  <li>A Trade Coordination Layer — governance, verification, documentation, and execution coordination</li>
                  <li>Asset-light and non-custodial by constitutional design</li>
                  <li>Verification-governed across all corridors and counterparties</li>
                  <li>A coordination layer working above licensed operators — not replacing them</li>
                  <li>Constitutionally governed through Supreme Council, Ethics &amp; Oversight Council, and External Trustee Panel</li>
                  <li>Multi-decade in institutional horizon — corridor durability over transactional volume</li>
                  <li>Fee-for-coordination; disclosed, mission-aligned revenue model</li>
                </ul>
              </div>
              <div className="ig-col ig-col-not">
                <h3><span className="ig-dot" aria-hidden="true"></span>SWAQAR Group Is Not</h3>
                <ul>
                  <li>A commodity trader — does not buy, sell, or hold title to goods</li>
                  <li>A broker — licensed parties contract directly with each other</li>
                  <li>A marketplace or transactional platform of any kind</li>
                  <li>A bank, fund manager, or regulated financial institution</li>
                  <li>A logistics operator, freight company, or cargo owner</li>
                  <li>A custodian, escrow provider, or paymaster</li>
                  <li>A lender, investment platform, or capital vehicle</li>
                  <li>A SaaS platform, fintech company, or speculative technology startup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pilot" style={{background:'var(--bg)'}}>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Candidate Corridor Preparation</div>
              <h2>How a coordinated transaction moves through <span className="accent">institutional discipline</span>.</h2>
              <p className="lede">The stages below illustrate the institutional mechanics under which SWAQAR would coordinate a hypothetical corridor transaction. No specific transaction or party is represented.</p>
            </div>
            <div className="pd reveal"><span className="dm">Governance Note</span><span>This section illustrates the <strong>candidate corridor preparation structure</strong> SWAQAR Group is building toward. No corridor is currently operational. No pilot has been confirmed. This is a governance-architecture illustration only — subject to counsel-validated legal, regulatory, and governance review before any corridor activation proceeds.</span></div>
            <div className="pf reveal-stagger">
              <article className="ps"><div className="sm">I</div><div className="sl">Stage 01</div><h4>Qualification</h4><p>Counterparties move through the institutional qualification gate. Engagement is counsel-validated, governance-ratified, and by-invitation.</p></article>
              <article className="ps"><div className="sm">II</div><div className="sl">Stage 02</div><h4>Verification</h4><p>Licensed verification firms perform regulated due diligence. Outputs are integrated into the institutional coordination record under counsel-validated discipline.</p></article>
              <article className="ps"><div className="sm">III</div><div className="sl">Stage 03</div><h4>Coordination</h4><p>Live institutional synchronization across counterparties. Licensed parties perform their licensed activities; SWAQAR coordinates the institutional surface across them.</p></article>
              <article className="ps"><div className="sm">IV</div><div className="sl">Stage 04</div><h4>Oversight &amp; Closure</h4><p>Material matters surface through institutional escalation. The coordination record is preserved; institutional learning is captured; reputational standing is maintained.</p></article>
            </div>
            <p className="pn">For demonstration purposes only. SWAQAR coordinates the institutional context; licensed parties perform principal commercial, financial, operating, verification, and regulatory activities under their own authority.</p>
          </div>
        </section>

        <section id="governance" style={{background:'var(--bg-soft)'}}>
          <div className="container">
            <div className="gg">
              <div className="reveal">
                <div className="eyebrow">Governance Architecture</div>
                <h2>Trust is institutional infrastructure — <span className="accent">built across cycles</span>.</h2>
                <p style={{marginTop:'18px',maxWidth:'54ch',color:'var(--text-muted)',fontSize:'0.93rem'}}>Governance is the operating substrate of the institution, not a compliance overlay. Material decisions move through constitutional procedure. Counterparties engage an institution they can hold institutionally accountable through standing bodies, counsel of record, and reserved-matter discipline.</p>
                <div className="gps">
                  <div className="pl"><div className="pn2">01</div><div><h4>Verification-First Structure</h4><p>Continuous verification through licensed firms; verification integrity sustained as standing corridor condition.</p></div></div>
                  <div className="pl"><div className="pn2">02</div><div><h4>Non-Custodial Model</h4><p>Constitutional perimeter: no custody of funds, goods, title, or documents at any point in any corridor.</p></div></div>
                  <div className="pl"><div className="pn2">03</div><div><h4>Governance Discipline</h4><p>Supreme Council, Ethics &amp; Oversight Council, External Trustee Panel, and counsel of record as standing surface.</p></div></div>
                  <div className="pl"><div className="pn2">04</div><div><h4>Compliance Orientation</h4><p>Compliance operated per jurisdiction under counsel-validated discipline, aligned with licensed partner frameworks.</p></div></div>
                  <div className="pl"><div className="pn2">05</div><div><h4>Corridor Safeguards</h4><p>Reciprocal reputation discipline; sovereign-grade discretion; stop-scaling discipline preserved across every phase.</p></div></div>
                </div>
              </div>
              <div className="gv reveal" aria-label="Governance architecture diagram">
                <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                  <defs><radialGradient id="gg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#B8923A" stopOpacity="0.3"/><stop offset="100%" stopColor="#B8923A" stopOpacity="0"/></radialGradient></defs>
                  <circle cx="200" cy="250" r="160" fill="url(#gg1)"/>
                  <circle cx="200" cy="250" r="140" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 4"/>
                  <circle cx="200" cy="250" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <circle cx="200" cy="250" r="60" fill="none" stroke="#B8923A" strokeWidth="1"/>
                  <g fill="#B8923A"><circle cx="200" cy="110" r="4"/><circle cx="340" cy="250" r="4"/><circle cx="200" cy="390" r="4"/><circle cx="60" cy="250" r="4"/></g>
                  <rect x="180" y="230" width="40" height="40" fill="rgba(17,40,71,0.8)" stroke="#B8923A" strokeWidth="1"/>
                  <text x="200" y="256" textAnchor="middle" fontFamily="Playfair Display" fontSize="13" fontStyle="italic" fill="#B8923A">SWAQAR</text>
                  <text x="200" y="96" textAnchor="middle" fontFamily="DM Mono" fontSize="7.5" letterSpacing="1.5" fill="rgba(255,255,255,0.4)">SUPREME COUNCIL</text>
                  <text x="348" y="244" textAnchor="start" fontFamily="DM Mono" fontSize="7.5" letterSpacing="1.5" fill="rgba(255,255,255,0.4)">ETHICS</text>
                  <text x="200" y="408" textAnchor="middle" fontFamily="DM Mono" fontSize="7.5" letterSpacing="1.5" fill="rgba(255,255,255,0.4)">TRUSTEE PANEL</text>
                  <text x="52" y="244" textAnchor="end" fontFamily="DM Mono" fontSize="7.5" letterSpacing="1.5" fill="rgba(255,255,255,0.4)">COUNSEL</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="engage" className="engage-section">
          <div className="container">
            <div className="eyebrow">Institutional Engagement</div>
            <div className="engw">
              <div className="engt">
                <h2>Engage SWAQAR at <span className="accent">institutional standard</span>.</h2>
                <p>SWAQAR Group is currently in Phase I — Foundation Stage and is not yet operationally active. All corridor activation is subject to completion of the Four-Gate Model and Supreme Council mandate. Institutional engagement begins with qualification and counsel-validated due diligence.</p>
              </div>
              <div className="enga">
                <a href="#contact" className="btn btn-solid">Submit Institutional Inquiry</a>
                <a href="#governance" className="btn btn-ghost">Review Governance Structure</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="cg">
              <aside className="ca">
                <div className="eyebrow">Institutional Inquiry</div>
                <h2>Submit a governed institutional inquiry.</h2>
                <p>All inquiries are reviewed against SWAQAR&apos;s counterparty eligibility criteria. Submission does not initiate an engagement or create any obligation.</p>
                <div className="cdet2">
                  <div className="dr"><span className="lbl">Headquarters</span><span className="val">Jeddah, Kingdom of Saudi Arabia</span></div>
                  <div className="dr"><span className="lbl">Engagement Type</span><span className="val">Institutional counterparts only</span></div>
                  <div className="dr"><span className="lbl">Current Stage</span><span className="val">Phase I — Foundation. Not yet operationally active.</span></div>
                  <div className="dr"><span className="lbl">Legal Position</span><span className="val">Subject to counsel-validated legal review in all applicable jurisdictions.</span></div>
                </div>
              </aside>
              <form className="cf reveal" onSubmit={(e) => { e.preventDefault(); const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement; if(btn){const orig=btn.innerHTML;btn.innerHTML='Inquiry Received — Under Institutional Review';btn.disabled=true;setTimeout(()=>{(e.target as HTMLFormElement).reset();btn.innerHTML=orig;btn.disabled=false;},3200);} }} noValidate>
                <div className="ff"><div className="phase-notice"><div className="phase-dot"></div><div><div className="phase-notice-label">Phase I — Foundation Stage</div><div className="phase-notice-body">SWAQAR Group is currently in Phase I — Foundation Stage and is not yet operationally active. All corridor activation is subject to completion of the Four-Gate Model and Supreme Council mandate. Submission of this form does not initiate an engagement or create any commitment on the part of SWAQAR Group.</div></div></div></div>
                <div><label htmlFor="fn">Full Name *</label><input type="text" id="fn" name="name" required autoComplete="name"/></div>
                <div><label htmlFor="org">Organisation *</label><input type="text" id="org" name="organisation" required/></div>
                <div><label htmlFor="role">Role / Title *</label><input type="text" id="role" name="role" required/></div>
                <div><label htmlFor="email">Institutional Email *</label><input type="email" id="email" name="email" required autoComplete="email"/></div>
                <div><label htmlFor="country">Country / Jurisdiction *</label><input type="text" id="country" name="country" required/></div>
                <div><label htmlFor="website">Organisation Website</label><input type="url" id="website" name="website" placeholder="https://"/></div>
                <div className="ff"><label htmlFor="itype">Inquiry Type *</label><select id="itype" name="inquiry_type" required><option value="">Select inquiry category</option><option>Government / Ministerial Engagement</option><option>Banking / Trade-Finance Coordination</option><option>Exporter / Buyer Corridor Participation</option><option>Logistics / Infrastructure Partnership</option><option>Verification / Compliance Partnership</option><option>Industrial Stakeholder Engagement</option><option>Institutional Capital Partner Engagement</option><option>Other Institutional Inquiry</option></select></div>
                <div className="ff"><label htmlFor="msg">Institutional Purpose of Engagement *</label><textarea id="msg" name="message" required placeholder="Briefly describe the institutional purpose. Counsel-validated due diligence will follow under standing institutional procedure."></textarea></div>
                <div className="fdis">By submitting this inquiry you acknowledge that institutional engagement with SWAQAR Group is subject to qualification, counsel-validated due diligence per jurisdiction, and institutional governance approval. Nothing in this form constitutes an offer, solicitation, or institutional commitment of any kind.</div>
                <div className="sr"><button type="submit" className="btn btn-solid">Submit Institutional Inquiry</button></div>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
          <div className="ft">
            <div className="fb">
              <div className="logo">
                <span className="logo-rule" aria-hidden="true"></span>
                <span className="logo-stack">
                  <span className="logo-name">SWAQAR <em>GROUP</em></span>
                  <span className="logo-tag">Corridors of Trust</span>
                </span>
              </div>
              <p>A governance-led Trade Coordination Layer for cross-regional corridors connecting Africa, the Middle East, and Asia under verification, institutional trust, and disciplined execution.</p>
            </div>
            <div className="fc"><h5>Institution</h5><ul><li><a href="#problem">Problem We Address</a></li><li><a href="#corridors">Corridors</a></li><li><a href="#approach">Operating Approach</a></li><li><a href="#gates">4-Gate Model</a></li><li><a href="#governance">Governance</a></li></ul></div>
            <div className="fc"><h5>Engagement</h5><ul><li><a href="#boundaries">Institutional Boundaries</a></li><li><a href="#identity-guard">Category Clarity</a></li><li><a href="#pilot">Candidate Corridor</a></li><li><a href="#engage">Partnership Inquiry</a></li><li><a href="#contact">Contact</a></li></ul></div>
            <div className="fc"><h5>Governance</h5><ul><li><a href="#governance">Governance Architecture</a></li><li><a href="#gates">Corridor Gates</a></li><li><a href="#approach">Operating Approach</a></li><li><a href="#identity-guard">Institutional Boundaries</a></li><li><a href="#contact">Institutional Inquiry</a></li></ul></div>
          </div>
          <div className="fl2">
            <p className="fdisc">SWAQAR Group is a governance-led, non-custodial Trade Coordination Layer. This website is for institutional information only and does not constitute an offer, solicitation, recommendation, or investment advice of any kind. SWAQAR Group does not custody funds, hold title to goods, own cargo, operate logistics assets, act as a broker, trader, or commercial agent, or replace regulated financial, banking, customs, or logistics operators. Engagement with SWAQAR Group is subject to jurisdictional legal review, counsel-validated due diligence per jurisdiction, and institutional governance approval. SWAQAR Group does not accept unsolicited commodity offers, speculative investment proposals, or brokerage representations. Confidential — for institutional audiences only.</p>
            <div className="fbot"><span>© 2025 SWAQAR GROUP · ALL RIGHTS RESERVED · INSTITUTIONAL COORDINATION LAYER</span><span className="gold">Counsel-Cleared · Governance-Led · Non-Custodial</span></div>
          </div>
        </div>
      </footer>
    </>
  );
}
