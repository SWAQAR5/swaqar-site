'use client';

export default function Home() {
  return (
    <>
      <nav>
        <a href="#" className="nl">
          <span className="nl-main">SWAQAR</span>
          <span className="nl-sub">Corridors of Trust</span>
        </a>
        <ul className="nlinks">
          <li><a href="#category">Category</a></li>
          <li><a href="#corridors">Corridors</a></li>
          <li><a href="#gates">Four Gates</a></li>
          <li><a href="#arms">Architecture</a></li>
          <li><a href="#contact" className="ncta">Institutional Inquiry</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hbg"></div>
        <div className="hgrid">
          <svg viewBox="0 0 1400 850" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(184,146,58,0.04)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <path d="M 130,660 Q 370,500 590,375 Q 770,265 940,205" fill="none" stroke="rgba(184,146,58,0.22)" strokeWidth="1.3" strokeDasharray="6 12">
              <animate attributeName="stroke-dashoffset" from="0" to="-144" dur="4s" repeatCount="indefinite"/>
            </path>
            <path d="M 940,205 Q 1090,165 1240,235 Q 1345,295 1390,385" fill="none" stroke="rgba(184,146,58,0.16)" strokeWidth="1" strokeDasharray="6 12">
              <animate attributeName="stroke-dashoffset" from="0" to="-144" dur="5.5s" repeatCount="indefinite"/>
            </path>
            <circle r="3.5" fill="rgba(184,146,58,0.8)">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 130,660 Q 370,500 590,375 Q 770,265 940,205"/>
            </circle>
            <circle r="2.5" fill="rgba(184,146,58,0.55)">
              <animateMotion dur="5.5s" repeatCount="indefinite" begin="1.5s" path="M 940,205 Q 1090,165 1240,235 Q 1345,295 1390,385"/>
            </circle>
            <text x="118" y="692" fontSize="8" fill="rgba(184,146,58,0.28)" letterSpacing="4" fontFamily="DM Mono,monospace" textAnchor="middle">AFRICA</text>
            <text x="940" y="188" fontSize="8" fill="rgba(184,146,58,0.28)" letterSpacing="4" fontFamily="DM Mono,monospace" textAnchor="middle">MIDDLE EAST</text>
            <text x="1350" y="374" fontSize="8" fill="rgba(184,146,58,0.28)" letterSpacing="4" fontFamily="DM Mono,monospace" textAnchor="middle">ASIA</text>
          </svg>
        </div>
        <div className="horb"></div>
        <svg className="merid" viewBox="0 0 600 600" style={{position:'absolute',right:'-4vw',top:'50%',transform:'translateY(-50%)',width:'50vw',height:'50vw',pointerEvents:'none'}}>
          <ellipse cx="300" cy="300" rx="200" ry="295" fill="none" stroke="rgba(184,146,58,0.06)" strokeWidth="0.8"/>
          <ellipse cx="300" cy="300" rx="120" ry="295" fill="none" stroke="rgba(184,146,58,0.05)" strokeWidth="0.8"/>
          <ellipse cx="300" cy="300" rx="295" ry="120" fill="none" stroke="rgba(184,146,58,0.04)" strokeWidth="0.8"/>
        </svg>
        <svg className="merid merid2" viewBox="0 0 600 600" style={{position:'absolute',right:'-4vw',top:'50%',transform:'translateY(-50%)',width:'50vw',height:'50vw',pointerEvents:'none'}}>
          <ellipse cx="300" cy="300" rx="50" ry="295" fill="none" stroke="rgba(184,146,58,0.04)" strokeWidth="0.6"/>
          <ellipse cx="300" cy="300" rx="295" ry="50" fill="none" stroke="rgba(184,146,58,0.04)" strokeWidth="0.6"/>
        </svg>
        <div className="hcontent">
          <div className="heyebrow">
            <div className="heline"></div>
            <div className="hetext">Trade Coordination · Africa · Middle East · Asia</div>
          </div>
          <h1 className="htitle">Corridors<br/>of <em>Trust.</em></h1>
          <p className="hthesis">
            Cross-regional trade does not fail for lack of goods.<br/>
            It fails for lack of <em>trusted coordination infrastructure.</em>
          </p>
          <p className="hdesc">SWAQAR Group is the institutional Trade Coordination Layer built to fill this gap — governance-led, verification-first, asset-light, and non-custodial — coordinating verified counterparties across Africa, the Middle East, and Asia.</p>
          <div className="hactions">
            <a href="#category" className="btnp">Understand the Category →</a>
            <a href="#contact" className="btng">Institutional Inquiry</a>
          </div>
        </div>
        <div className="hscroll">
          <div className="hsline"></div>
          <div className="hstext">Scroll</div>
        </div>
        <div className="govbar">
          <div className="gitem">
            <div className="gprinciple">Governance-Led</div>
            <div className="glabel">Supreme Council · Ethics Council · Trustee Panel</div>
          </div>
          <div className="gitem">
            <div className="gprinciple">Verification-First</div>
            <div className="glabel">Every counterparty verified before engagement</div>
          </div>
          <div className="gitem">
            <div className="gprinciple">Non-Custodial</div>
            <div className="glabel">No funds held · No cargo owned · No principal risk</div>
          </div>
          <div className="gitem">
            <div className="gprinciple">Four-Gate Protocol</div>
            <div className="glabel">Constitutional corridor entry requirement</div>
          </div>
        </div>
      </section>

      <div className="govstrip">
        <div className="gstrip-inner">
          <span className="gstrip-item">Governance-Led</span>
          <div className="gstrip-sep"></div>
          <span className="gstrip-item">Verification-First</span>
          <div className="gstrip-sep"></div>
          <span className="gstrip-item">Asset-Light</span>
          <div className="gstrip-sep"></div>
          <span className="gstrip-item">Non-Custodial</span>
          <div className="gstrip-sep"></div>
          <span className="gstrip-item">Africa ⇄ Middle East ⇄ Asia</span>
          <div className="gstrip-sep"></div>
          <span className="gstrip-item">Four-Gate Protocol</span>
          <div className="gstrip-sep"></div>
          <span className="gstrip-item">Phase I — Foundation Stage</span>
        </div>
      </div>

      <div className="grule"></div>

      <section className="sec category" id="category">
        <div className="con">
          <div className="cat-header-block">
            <div className="stag"><div className="stagline"></div><div className="stagtext">Category Definition</div></div>
            <h2 className="stitle">The category is defined by what SWAQAR <em>is</em> — as much as what it is not.</h2>
            <p className="sbody" style={{marginTop:0}}>Institutional clarity requires both columns. This is not a disclaimer. It is the constitutional governance position of SWAQAR Group.</p>
          </div>
          <div className="cat-cols">
            <div className="catcol catcol-l">
              <div className="catheader ch-is">✓ — SWAQAR IS</div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">A governance-led Trade Coordination Layer</span></div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">Verification-first across all corridors and counterparties</span></div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">Asset-light and non-custodial by constitutional design</span></div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">A coordination layer working above licensed operators — not replacing them</span></div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">Governed by Supreme Council, Ethics &amp; Oversight Council, and External Trustee Panel</span></div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">Operating under counsel-validated legal and compliance frameworks</span></div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">Phase 1 — Foundation Stage · Not yet operationally active</span></div>
              <div className="catrow"><span className="catmark cm-yes">—</span><span className="cattext">Built for a multi-decade institutional horizon</span></div>
            </div>
            <div className="catcol catcol-r">
              <div className="catheader ch-not">✕ — SWAQAR IS NOT</div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">A commodity trader, broker, or dealer of any kind</span></div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">A bank, lender, escrow provider, or regulated financial institution</span></div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">A logistics operator, freight company, or cargo owner</span></div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">A marketplace, exchange, or transactional platform of any kind</span></div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">A custodian or paymaster of any kind</span></div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">A fintech, SaaS company, or speculative technology startup</span></div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">A counterparty to any transaction it coordinates</span></div>
              <div className="catrow"><span className="catmark cm-no">✕</span><span className="cattext">An investment vehicle or capital-raising vehicle of any kind</span></div>
            </div>
          </div>
          <div className="cat-notice">This category definition is a constitutional governance statement of SWAQAR Group. It is not marketing language. Any engagement inconsistent with this definition falls outside SWAQAR&apos;s institutional mandate and will not proceed.</div>
        </div>
      </section>

      <div className="grule"></div>

      <section className="sec identity" id="identity">
        <div className="con">
          <div className="id-inner">
            <div>
              <div className="stag"><div className="stagline"></div><div className="stagtext">Institutional Identity</div></div>
              <h2 className="stitle">A coordination layer,<br/>not a counterparty.</h2>
              <p className="sbody">SWAQAR governs the space between verified exporters, institutional buyers, licensed operators, and trade finance providers. It coordinates without owning. Verifies without brokering. Connects without custodying.</p>
              <div className="id-pillars">
                <div className="pillar"><div className="pname">Governance-Led</div><div className="pdesc">Supreme Council, Ethics Council, External Trustee Panel</div></div>
                <div className="pillar"><div className="pname">Verification-First</div><div className="pdesc">Every counterparty verified before engagement</div></div>
                <div className="pillar"><div className="pname">Asset-Light</div><div className="pdesc">No owned infrastructure, cargo, or capital positions</div></div>
                <div className="pillar"><div className="pname">Non-Custodial</div><div className="pdesc">SWAQAR never holds funds or title to goods</div></div>
              </div>
            </div>
            <div className="id-card">
              <div className="id-quote">&ldquo;SWAQAR coordinates without owning. Verifies without brokering. Connects without <strong>custodying.</strong>&rdquo;</div>
              <div className="id-meta">
                <div className="id-dot">✦</div>
                <div>
                  <div className="id-who">SWAQAR Group</div>
                  <div className="id-sub">Founding Governance Doctrine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grule"></div>

      <section className="sec corridors" id="corridors">
        <div className="con">
          <div className="ch">
            <div>
              <div className="stag"><div className="stagline"></div><div className="stagtext">Corridor Architecture</div></div>
              <h2 className="stitle">Three regions.<br/><em>One coordination layer.</em></h2>
            </div>
            <p style={{maxWidth:'34ch',fontSize:'.84rem',lineHeight:'1.78',color:'rgba(255,255,255,.38)',textAlign:'left'}}>SWAQAR coordinates verified trade flow across the three most strategically aligned regions in global South–South trade.</p>
          </div>
          <div className="corr-vis">
            <svg viewBox="0 0 780 240" style={{width:'100%',maxWidth:'780px',position:'relative'}}>
              <rect width="780" height="240" fill="none"/>
              <path d="M 160,120 Q 330,72 440,120 Q 550,168 620,120" fill="none" stroke="rgba(184,146,58,0.22)" strokeWidth="1.4" strokeDasharray="6 10">
                <animate attributeName="stroke-dashoffset" from="0" to="-80" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M 160,120 Q 390,180 620,120" fill="none" stroke="rgba(184,146,58,0.09)" strokeWidth="1" strokeDasharray="4 8"/>
              <circle cx="160" cy="120" r="11" fill="rgba(184,146,58,0.13)" stroke="rgba(184,146,58,0.45)" strokeWidth="1"/>
              <circle cx="160" cy="120" r="4.5" fill="rgba(184,146,58,0.8)">
                <animate attributeName="r" values="4.5;7;4.5" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.35;0.8" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <text x="160" y="144" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(184,146,58,0.6)" letterSpacing="2">AFRICA</text>
              <circle cx="440" cy="120" r="13" fill="rgba(184,146,58,0.18)" stroke="rgba(184,146,58,0.6)" strokeWidth="1.5"/>
              <circle cx="440" cy="120" r="5.5" fill="var(--gold)">
                <animate attributeName="r" values="5.5;9;5.5" dur="3s" repeatCount="indefinite" begin="0.8s"/>
                <animate attributeName="opacity" values="1;0.45;1" dur="3s" repeatCount="indefinite" begin="0.8s"/>
              </circle>
              <text x="440" y="147" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(184,146,58,0.75)" letterSpacing="2">MIDDLE EAST</text>
              <circle cx="620" cy="120" r="11" fill="rgba(184,146,58,0.13)" stroke="rgba(184,146,58,0.45)" strokeWidth="1"/>
              <circle cx="620" cy="120" r="4.5" fill="rgba(184,146,58,0.8)">
                <animate attributeName="r" values="4.5;7;4.5" dur="2.8s" repeatCount="indefinite" begin="1.6s"/>
                <animate attributeName="opacity" values="0.8;0.35;0.8" dur="2.8s" repeatCount="indefinite" begin="1.6s"/>
              </circle>
              <text x="620" y="144" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(184,146,58,0.6)" letterSpacing="2">ASIA</text>
              <text x="390" y="96" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="6.5" fill="rgba(184,146,58,0.3)" letterSpacing="3">SWAQAR COORDINATION LAYER</text>
              <circle r="3.5" fill="rgba(184,146,58,0.9)" opacity="0">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 160,120 Q 330,72 440,120 Q 550,168 620,120"/>
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div className="corr-cards">
            <div className="cc"><div className="ccr">Africa Corridor</div><div className="cct">Origin &amp; Supply</div><div className="ccb">Agricultural commodities, industrial minerals, and verified exporter networks. SWAQAR coordinates verification readiness and documentation alignment for African supply-side participants.</div><div className="cctags"><span className="cctag">Verified Exporters</span><span className="cctag">Documentation</span><span className="cctag">Corridor Readiness</span></div></div>
            <div className="cc"><div className="ccr">Middle East Corridor</div><div className="cct">Trust &amp; Capital Hub</div><div className="ccb">The institutional anchor of the SWAQAR model. Trade finance coordination, sovereign engagement, and free zone interface. SWAQAR does not custody funds or act as financial principal.</div><div className="cctags"><span className="cctag">Trade Finance</span><span className="cctag">Sovereign Engagement</span><span className="cctag">Free Zone Interface</span></div></div>
            <div className="cc"><div className="ccr">Asia Corridor</div><div className="cct">Demand &amp; Industrial Scale</div><div className="ccb">Verified offtake counterparties, institutional buyers, and industrial demand coordination. SWAQAR aligns documentation and governance readiness for Asia-side engagement.</div><div className="cctags"><span className="cctag">Verified Buyers</span><span className="cctag">Offtake Coordination</span><span className="cctag">Industrial Scale</span></div></div>
          </div>
        </div>
      </section>

      <div className="grule"></div>

      <section className="sec gates" id="gates">
        <div className="con">
          <div className="stag"><div className="stagline"></div><div className="stagtext">Corridor Entry Protocol</div></div>
          <h2 className="stitle">Every coordinated corridor moves through<br/><em>four governance gates.</em></h2>
          <p className="sbody">No corridor engagement proceeds until all four gates are passed. This is not a process preference. It is a constitutional governance requirement.</p>
          <div className="ggrid">
            <div className="gate"><div className="gbgn">I</div><div className="gicon">I</div><div className="glbl">Gate I</div><div className="gname">Counterparty Verification</div><div className="gdesc">Every participant — exporter, buyer, logistics operator, financial intermediary — passes SWAQAR&apos;s verification protocol before any coordination mandate is issued.</div><div className="greq">Required: Verified identity, legal standing, documentation readiness</div><div className="gline"></div></div>
            <div className="gate"><div className="gbgn">II</div><div className="gicon">II</div><div className="glbl">Gate II</div><div className="gname">Documentation Readiness</div><div className="gdesc">All trade documentation must meet SWAQAR&apos;s documentation standard prior to corridor activation. Counsel-reviewed documentation package required in full.</div><div className="greq">Required: Counsel-reviewed documentation package complete</div><div className="gline"></div></div>
            <div className="gate"><div className="gbgn">III</div><div className="gicon">III</div><div className="glbl">Gate III</div><div className="gname">Governance Alignment</div><div className="gdesc">The corridor structure must be aligned to SWAQAR&apos;s governance architecture and applicable legal frameworks across all participating jurisdictions.</div><div className="greq">Required: Supreme Council governance alignment confirmed</div><div className="gline"></div></div>
            <div className="gate"><div className="gbgn">IV</div><div className="gicon">IV</div><div className="glbl">Gate IV</div><div className="gname">Execution Mandate</div><div className="gdesc">Only after Gates I–III are cleared does SWAQAR issue a formal Execution Mandate. This governs the coordination engagement and defines the boundaries of SWAQAR&apos;s role.</div><div className="greq">Required: Execution Mandate issued and filed under institutional record</div><div className="gline"></div></div>
          </div>
          <div className="gate-notice">
            <div className="gate-notice-label">Governance Position</div>
            <div className="gate-notice-text">The Four-Gate Model is a constitutional governance mechanism, not a service workflow. Any engagement that bypasses any gate falls outside SWAQAR&apos;s institutional mandate and will not proceed. Corridor preparation does not constitute a commitment by SWAQAR to activate any corridor. All activation is subject to Supreme Council mandate and counsel-validated legal review.</div>
          </div>
        </div>
      </section>

      <div className="grule"></div>

      <section className="sec arms" id="arms">
        <div className="con">
          <div className="arms-inner">
            <div>
              <div className="stag"><div className="stagline"></div><div className="stagtext">Institutional Architecture</div></div>
              <h2 className="stitle">Six strategic arms.<br/><em>One institutional mission.</em></h2>
              <div style={{marginTop:'28px'}}>
                <div className="arm"><div className="anum">01</div><div><div className="aname">Industrial Trade Development</div><div className="adesc">Commodity corridor development, supply-side verification, and industrial trade readiness coordination across Africa ⇄ Middle East ⇄ Asia.</div></div></div>
                <div className="arm"><div className="anum">02</div><div><div className="aname">Capital &amp; Trade Finance Coordination</div><div className="adesc">Facilitating access to licensed trade finance institutions. SWAQAR does not custody funds or act as financial principal under any circumstance.</div></div></div>
                <div className="arm"><div className="anum">03</div><div><div className="aname">Infrastructure &amp; Logistics Coordination</div><div className="adesc">Coordinating timing signals, documentation alignment, and synchronization context for licensed logistics operators. SWAQAR does not own or operate logistics infrastructure.</div></div></div>
                <div className="arm"><div className="anum">04</div><div><div className="aname">Intelligence &amp; Research</div><div className="adesc">Corridor intelligence, market signals, counterparty risk data, and regulatory monitoring as a standing institutional function — lawfully gathered, ethically sourced.</div></div></div>
                <div className="arm"><div className="anum">05</div><div><div className="aname">Digital Systems</div><div className="adesc">Governance-layer digital coordination: documentation and verification management. Counsel-validated, governance-aligned. Standardise before digitise.</div></div></div>
                <div className="arm"><div className="anum">06</div><div><div className="aname">Institutional Advisory</div><div className="adesc">Government, ministry, and institutional counterpart engagement at sovereign-grade discretion. Non-substitution discipline preserved.</div></div></div>
              </div>
            </div>
            <div className="afbox">
              <div className="aflbl">Institutional Foundation</div>
              <div className="aftitle">Built for a multi-decade institutional horizon.</div>
              <div className="afdesc">SWAQAR is not a startup seeking scale. It is a coordination institution being built to last — verification-governed, governance-anchored, designed to compound institutional credibility over time, not transaction volume.</div>
              <div className="afmetrics">
                <div><div className="afmv">Phase I</div><div className="afml">Foundation Stage</div></div>
                <div><div className="afmv">IV Gates</div><div className="afml">Entry Protocol</div></div>
                <div><div className="afmv">3 Regions</div><div className="afml">Corridor Mandate</div></div>
                <div><div className="afmv">100%</div><div className="afml">Non-Custodial</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grule"></div>

      <section className="sec governance" id="governance">
        <div className="con">
          <div className="stag"><div className="stagline"></div><div className="stagtext">Governance Structure</div></div>
          <h2 className="stitle">Three layers of institutional<br/><em>governance oversight.</em></h2>
          <div className="ggov">
            <div className="gcard">
              <div className="gcacc"></div>
              <div className="gcbadge">Layer I</div>
              <div className="gcname">Supreme Council</div>
              <div className="gcdesc">The highest governance authority. Oversees constitutional mandate, reserved matters, and institutional continuity. Supermajority required on all mission-critical decisions.</div>
            </div>
            <div className="gcard">
              <div className="gcacc"></div>
              <div className="gcbadge">Layer II</div>
              <div className="gcname">Ethics &amp; Oversight Council</div>
              <div className="gcdesc">Independent institutional review body responsible for ethical governance, mission alignment, and counterparty conduct standards across all corridor engagements.</div>
            </div>
            <div className="gcard">
              <div className="gcacc"></div>
              <div className="gcbadge">Layer III</div>
              <div className="gcname">External Trustee Panel</div>
              <div className="gcdesc">Senior external advisors providing independent institutional oversight. Ensures non-substitution discipline and multi-jurisdictional governance accountability.</div>
              <div className="gc-external-note">The externally visible layer of SWAQAR&apos;s governance — designed specifically to sustain institutional counterpart confidence.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grule"></div>

      <section className="sec contact" id="contact">
        <div className="con">
          <div className="contact-inner">
            <div>
              <div className="stag"><div className="stagline"></div><div className="stagtext">Institutional Inquiry</div></div>
              <h2 className="stitle" style={{marginBottom:'20px'}}>Submit a governed<br/><em>institutional inquiry.</em></h2>
              <div className="phase-section">
                <div className="phase-label"><div className="pdot"></div>Phase 1 — Foundation Stage</div>
                <div className="phase-body">SWAQAR Group is currently in Phase 1 — Foundation Stage and is not yet operationally active. All corridor activation is subject to completion of the Four-Gate Model and Supreme Council mandate. Submission of this form does not initiate an engagement, create a commitment on the part of SWAQAR Group, or constitute any form of agreement.</div>
              </div>
              <div className="fg"><label className="flbl">Legal Entity Name</label><input className="finput" type="text" placeholder="Full registered legal name"/></div>
              <div className="fg"><label className="flbl">Jurisdiction of Incorporation</label><input className="finput" type="text" placeholder="Country or jurisdiction"/></div>
              <div className="fg">
                <label className="flbl">Engagement Category</label>
                <select className="fselect">
                  <option value="">Select category</option>
                  <option>Government &amp; Ministry</option>
                  <option>Bank &amp; Trade Finance Institution</option>
                  <option>Verified Exporter or Buyer</option>
                  <option>Capital &amp; Strategic Partner</option>
                  <option>Licensed Logistics or Infrastructure Operator</option>
                </select>
              </div>
              <div className="fg"><label className="flbl">Nature of Inquiry</label><textarea className="ftextarea" placeholder="Describe the institutional engagement purpose. Be specific."></textarea></div>
              <div className="intake-notice">All inquiries are reviewed against SWAQAR&apos;s counterparty eligibility criteria before any response is issued. Submission does not initiate an engagement, create contractual obligation, or constitute regulated advice of any kind. SWAQAR engages institutional counterparts only.</div>
              <button className="fsubmit">Submit Institutional Inquiry</button>
            </div>
            <div>
              <div className="cinfo-title">Engage SWAQAR at institutional standard.</div>
              <div className="cinfo-body">SWAQAR Group operates under strict counterparty verification and engagement protocols. Institutional engagement is not transactional — it begins with verification, proceeds through the Four-Gate Model, and is governed at every stage by the Supreme Council mandate.</div>
              <div className="cdetails">
                <div className="cdet"><div className="cdet-icon">✦</div><div><div className="cdet-lbl">Headquarters</div><div className="cdet-val">Jeddah, Kingdom of Saudi Arabia</div></div></div>
                <div className="cdet"><div className="cdet-icon">→</div><div><div className="cdet-lbl">Engagement Type</div><div className="cdet-val">Institutional counterparts only. No retail engagement accepted.</div></div></div>
                <div className="cdet"><div className="cdet-icon">⊕</div><div><div className="cdet-lbl">Current Stage</div><div className="cdet-val">Phase I — Foundation. Not yet operationally active.</div></div></div>
                <div className="cdet"><div className="cdet-icon">⚖</div><div><div className="cdet-lbl">Legal Position</div><div className="cdet-val">Subject to counsel-validated legal and regulatory review in all applicable jurisdictions.</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grule"></div>

      <footer>
        <div className="con">
          <div className="fi">
            <div><div className="flm">SWAQAR</div><div className="fls">Corridors of Trust</div><div className="fd">A governance-led, verification-first, asset-light, non-custodial Trade Coordination Layer coordinating verified cross-regional trade corridors across Africa ⇄ Middle East ⇄ Asia.</div></div>
            <div className="fc"><h5>Architecture</h5><ul><li><a href="#">Identity &amp; Category</a></li><li><a href="#">Corridor Model</a></li><li><a href="#">Governance Structure</a></li><li><a href="#">Four-Gate Protocol</a></li><li><a href="#">Strategic Arms</a></li></ul></div>
            <div className="fc"><h5>Engagement</h5><ul><li><a href="#">Government &amp; Ministry</a></li><li><a href="#">Bank &amp; Trade Finance</a></li><li><a href="#">Exporter &amp; Buyer</a></li><li><a href="#">Capital &amp; Partner</a></li><li><a href="#">Institutional Inquiry</a></li></ul></div>
            <div className="fc"><h5>Institutional</h5><ul><li><a href="#">Corporate Profile</a></li><li><a href="#">Investor Teaser</a></li><li><a href="#">Partnership Brief</a></li><li><a href="#">Compliance Position</a></li><li><a href="#">Data &amp; Privacy</a></li></ul></div>
          </div>
          <div className="flegal">SWAQAR Group is a governance-led, asset-light, non-custodial Trade Coordination Layer. It is not a commodity trader, broker, bank, lender, marketplace, logistics operator, investment fund, or regulated financial institution in any jurisdiction. All corridor engagement is subject to completion of the Four-Gate Model and Supreme Council mandate. SWAQAR Group is currently in Phase 1 — Foundation Stage and is not yet operationally active. Nothing on this site constitutes a financial solicitation, investment advice, or offer of any regulated service. Subject to counsel-validated legal and regulatory review in all applicable jurisdictions.</div>
          <div className="fb">
            <div className="fcopy">© 2025 SWAQAR Group. All rights reserved.</div>
            <div className="fbadges"><span className="fbadge">Governance-Led</span><span className="fbadge">Non-Custodial</span><span className="fbadge">Verification-First</span><span className="fbadge">Phase I Foundation</span></div>
          </div>
        </div>
      </footer>
    </>
  );
}
