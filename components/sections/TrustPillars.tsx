export default function TrustPillars() {
  return (
    <section style={{background:'#0d2444',padding:'96px 0'}}>
      <div className="swaqar-container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'72px',alignItems:'center'}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}>
              <div style={{width:'28px',height:'1px',background:'#B8923A'}}></div>
              <span style={{fontFamily:'var(--font-ibm-plex-mono, monospace)',fontSize:'0.58rem',letterSpacing:'0.32em',textTransform:'uppercase',color:'#B8923A'}}>Institutional Identity</span>
            </div>
            <h2 style={{fontFamily:'var(--font-cormorant, serif)',fontSize:'clamp(26px,3vw,46px)',fontWeight:500,color:'#fff',lineHeight:1.15,marginBottom:'18px'}}>
              A coordination layer,<br/>not a counterparty.
            </h2>
            <p style={{fontSize:'0.95rem',lineHeight:1.82,color:'rgba(255,255,255,0.45)',maxWidth:'55ch',marginBottom:'28px'}}>
              SWAQAR governs the space between verified exporters, institutional buyers, licensed operators, and trade finance providers. It coordinates without owning. Verifies without brokering. Connects without custodying.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px',marginTop:'8px'}}>
              {[
                {name:'Governance-Led',desc:'Supreme Council, Ethics Council, External Trustee Panel'},
                {name:'Verification-First',desc:'Every counterparty verified before engagement'},
                {name:'Asset-Light',desc:'No owned infrastructure, cargo, or capital positions'},
                {name:'Non-Custodial',desc:'SWAQAR never holds funds or title to goods'},
              ].map((p) => (
                <div key={p.name} style={{background:'#071530',padding:'20px 18px',borderLeft:'2px solid transparent',cursor:'default'}}>
                  <p style={{fontFamily:'var(--font-ibm-plex-mono, monospace)',fontSize:'0.62rem',letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(255,255,255,0.85)',fontWeight:500,marginBottom:'4px'}}>{p.name}</p>
                  <p style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.38)',lineHeight:1.55}}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:'#071530',border:'1px solid rgba(184,146,58,0.18)',padding:'40px 36px',position:'relative'}}>
            <div style={{position:'absolute',top:'-1px',left:'32px',width:'64px',height:'2px',background:'#B8923A'}}></div>
            <p style={{fontFamily:'var(--font-cormorant, serif)',fontSize:'1.4rem',fontWeight:400,color:'#fff',lineHeight:1.48,fontStyle:'italic',marginBottom:'20px'}}>
              {'"SWAQAR coordinates without owning. Verifies without brokering. Connects without '}
              <strong style={{color:'#d4a94a',fontStyle:'normal'}}>custodying.</strong>
              {'"'}
            </p>
            <div style={{display:'flex',alignItems:'center',gap:'12px',paddingTop:'18px',borderTop:'1px solid rgba(184,146,58,0.18)'}}>
              <div style={{width:'30px',height:'30px',background:'rgba(184,146,58,0.07)',border:'1px solid rgba(184,146,58,0.18)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace',fontSize:'0.68rem',color:'#B8923A',flexShrink:0}}>✦</div>
              <div>
                <p style={{fontFamily:'var(--font-ibm-plex-mono, monospace)',fontSize:'0.65rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.65)'}}>SWAQAR Group</p>
                <p style={{fontFamily:'var(--font-ibm-plex-mono, monospace)',fontSize:'0.55rem',color:'rgba(255,255,255,0.3)',marginTop:'2px'}}>Founding Governance Doctrine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
