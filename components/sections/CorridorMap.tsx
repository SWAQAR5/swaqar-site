export default function CorridorMap() {
  const CORRIDORS = [
    {region:'Africa Corridor',title:'Origin & Supply',body:'Agricultural commodities, industrial minerals, and verified exporter networks. SWAQAR coordinates verification readiness and documentation alignment for African supply-side participants.',tags:['Verified Exporters','Documentation','Corridor Readiness']},
    {region:'Middle East Corridor',title:'Trust & Capital Hub',body:'The institutional anchor of the SWAQAR model. Trade finance coordination, sovereign engagement, and free zone interface. SWAQAR does not custody funds or act as financial principal.',tags:['Trade Finance','Sovereign Engagement','Free Zone Interface']},
    {region:'Asia Corridor',title:'Demand & Industrial Scale',body:'Verified offtake counterparties, institutional buyers, and industrial demand coordination. SWAQAR aligns documentation and governance readiness for Asia-side engagement.',tags:['Verified Buyers','Offtake Coordination','Industrial Scale']},
  ];
  return (
    <section style={{background:'#071530',padding:'96px 0'}}>
      <div className="swaqar-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'52px',flexWrap:'wrap',gap:'24px'}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}>
              <div style={{width:'28px',height:'1px',background:'#B8923A'}}></div>
              <span style={{fontFamily:'var(--font-ibm-plex-mono, monospace)',fontSize:'0.58rem',letterSpacing:'0.32em',textTransform:'uppercase',color:'#B8923A'}}>Corridor Architecture</span>
            </div>
            <h2 style={{fontFamily:'var(--font-cormorant, serif)',fontSize:'clamp(26px,3vw,46px)',fontWeight:500,color:'#fff',lineHeight:1.15}}>
              Three regions.<br/><em style={{fontStyle:'italic',color:'#d4a94a'}}>One coordination layer.</em>
            </h2>
          </div>
          <p style={{maxWidth:'34ch',fontSize:'0.84rem',lineHeight:1.78,color:'rgba(255,255,255,0.38)',textAlign:'right'}}>SWAQAR coordinates verified trade flow across the three most strategically aligned regions in global South–South trade.</p>
        </div>
        <div style={{background:'#0d2444',border:'1px solid rgba(184,146,58,0.18)',padding:'48px',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'280px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at center,rgba(184,146,58,0.04),transparent 70%)',pointerEvents:'none'}}></div>
          <svg viewBox="0 0 780 240" style={{width:'100%',maxWidth:'780px',position:'relative'}}>
            <path d="M 160,120 Q 330,72 440,120 Q 550,168 620,120" fill="none" stroke="rgba(184,146,58,0.22)" strokeWidth="1.4" strokeDasharray="6 10">
              <animate attributeName="stroke-dashoffset" from="0" to="-80" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 160,120 Q 390,180 620,120" fill="none" stroke="rgba(184,146,58,0.09)" strokeWidth="1" strokeDasharray="4 8"/>
            <circle cx="160" cy="120" r="11" fill="rgba(184,146,58,0.13)" stroke="rgba(184,146,58,0.45)" strokeWidth="1"/>
            <circle cx="160" cy="120" r="4.5" fill="rgba(184,146,58,0.8)">
              <animate attributeName="r" values="4.5;7;4.5" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;0.35;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <text x="160" y="144" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(184,146,58,0.6)" letterSpacing="2">AFRICA</text>
            <circle cx="440" cy="120" r="13" fill="rgba(184,146,58,0.18)" stroke="rgba(184,146,58,0.6)" strokeWidth="1.5"/>
            <circle cx="440" cy="120" r="5.5" fill="#B8923A">
              <animate attributeName="r" values="5.5;9;5.5" dur="3s" repeatCount="indefinite" begin="0.8s"/>
              <animate attributeName="opacity" values="1;0.45;1" dur="3s" repeatCount="indefinite" begin="0.8s"/>
            </circle>
            <text x="440" y="147" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(184,146,58,0.75)" letterSpacing="2">MIDDLE EAST</text>
            <circle cx="620" cy="120" r="11" fill="rgba(184,146,58,0.13)" stroke="rgba(184,146,58,0.45)" strokeWidth="1"/>
            <circle cx="620" cy="120" r="4.5" fill="rgba(184,146,58,0.8)">
              <animate attributeName="r" values="4.5;7;4.5" dur="2.8s" repeatCount="indefinite" begin="1.6s"/>
              <animate attributeName="opacity" values="0.8;0.35;0.8" dur="2.8s" repeatCount="indefinite" begin="1.6s"/>
            </circle>
            <text x="620" y="144" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(184,146,58,0.6)" letterSpacing="2">ASIA</text>
            <text x="390" y="96" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="rgba(184,146,58,0.3)" letterSpacing="3">SWAQAR COORDINATION LAYER</text>
            <circle r="3.5" fill="rgba(184,146,58,0.9)" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 160,120 Q 330,72 440,120 Q 550,168 620,120"/>
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'rgba(184,146,58,0.18)',marginTop:'1px'}}>
          {CORRIDORS.map((c) => (
            <div key={c.region} style={{background:'rgba(13,36,68,0.8)',padding:'32px 28px',position:'relative',overflow:'hidden'}}>
              <p style={{fontFamily:'var(--font-ibm-plex-mono, monospace)',fontSize:'0.56rem',letterSpacing:'0.3em',textTransform:'uppercase',color:'#B8923A',marginBottom:'8px'}}>{c.region}</p>
              <h3 style={{fontFamily:'var(--font-cormorant, serif)',fontSize:'1.2rem',fontWeight:500,color:'#fff',marginBottom:'10px',lineHeight:1.2}}>{c.title}</h3>
              <p style={{fontSize:'0.82rem',lineHeight:1.72,color:'rgba(255,255,255,0.38)',marginBottom:'18px'}}>{c.body}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'5px'}}>
                {c.tags.map((t) => (
                  <span key={t} style={{fontFamily:'var(--font-ibm-plex-mono, monospace)',fontSize:'0.52rem',letterSpacing:'0.16em',textTransform:'uppercase',color:'#B8923A',border:'1px solid rgba(184,146,58,0.18)',padding:'3px 9px'}}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
