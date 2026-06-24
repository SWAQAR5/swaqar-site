'use client';
import Link from 'next/link';
import '../../app/swaqar.css';

export default function PrivacyPolicy() {
  return (
    <>
      <nav id="nav" style={{position:'sticky',top:0,zIndex:1000,background:'var(--parchment)',borderBottom:'1px solid var(--rule)',padding:'0 60px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'72px'}}>
        <Link className="nav-brand" href="/">
          <div className="nav-text">
            <span className="nav-name">SWAQAR</span>
            <span className="nav-sub">Group · Corridors of Trust</span>
          </div>
        </Link>
        <Link href="/" style={{fontSize:'.66rem',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--muted)',fontFamily:'var(--sans)',textDecoration:'none'}}>← Return to Site</Link>
      </nav>

      <main style={{background:'var(--parchment)',minHeight:'100vh',padding:'80px 0 120px'}}>
        <div className="wrap" style={{maxWidth:'860px',margin:'0 auto',padding:'0 60px'}}>

          <div style={{marginBottom:'48px'}}>
            <div style={{fontSize:'.56rem',letterSpacing:'.36em',textTransform:'uppercase',color:'var(--gold)',fontWeight:600,marginBottom:'16px'}}>Legal · Data Protection</div>
            <h1 style={{fontFamily:'var(--serif)',fontSize:'clamp(28px,3.2vw,48px)',fontWeight:700,color:'var(--ink)',lineHeight:1.1,marginBottom:'16px'}}>Privacy Policy</h1>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.7}}>SWAQAR Group · Last updated: June 2026 · Version 1.0</p>
            <div style={{height:'2px',background:'linear-gradient(to right, var(--gold), transparent)',marginTop:'24px',width:'120px'}}></div>
          </div>

          <div style={{padding:'20px 24px',background:'var(--stone)',borderLeft:'3px solid var(--gold)',marginBottom:'48px'}}>
            <p style={{fontSize:'.85rem',lineHeight:1.75,color:'var(--body)'}}>This Privacy Policy applies to personal data collected through the SWAQAR Group institutional website at <strong>swaqar.com</strong>. SWAQAR Group is a governance-led, asset-light, non-custodial Trade Coordination Layer headquartered in Jeddah, Kingdom of Saudi Arabia. This site is operated for institutional audiences only.</p>
          </div>

          {[
            {
              num: '01',
              title: 'Data Controller',
              body: 'SWAQAR Group is the data controller for personal data collected through this website. Institutional inquiries and associated personal data are processed by SWAQAR Group under its governance framework and applicable data protection legislation, including the Saudi Personal Data Protection Law (PDPL) and, where applicable, the European General Data Protection Regulation (GDPR).'
            },
            {
              num: '02',
              title: 'What Data We Collect',
              body: 'When you submit an institutional inquiry through our contact form, we collect the following data: your full name (as authorised representative), your institutional email address, your organisation or institution name, your selected engagement category, and the content of your inquiry. We do not collect payment data, identification documents, or any sensitive personal data through this website. We do not use tracking cookies, advertising pixels, or third-party analytics tools.'
            },
            {
              num: '03',
              title: 'How We Use Your Data',
              body: 'Personal data submitted through our contact form is used solely for the following purposes: to review your institutional inquiry against SWAQAR\'s counterparty eligibility criteria; to send an automated acknowledgement to your institutional email address confirming receipt; to communicate with you regarding the outcome of your eligibility review; and to maintain an institutional record of engagement in accordance with SWAQAR\'s governance and institutional memory requirements. We do not use your data for marketing, profiling, or any commercial purpose unrelated to the institutional engagement you initiated.'
            },
            {
              num: '04',
              title: 'Legal Basis for Processing',
              body: 'We process your personal data on the basis of legitimate interests — specifically, the legitimate institutional interest in reviewing and responding to formal institutional inquiries — and, where required, with your implicit consent given by voluntarily submitting the contact form. Where GDPR applies, processing is conducted under Article 6(1)(b) (performance of a pre-contractual relationship) and Article 6(1)(f) (legitimate interests).'
            },
            {
              num: '05',
              title: 'Email Delivery',
              body: 'We use Resend (a third-party email delivery service) to send acknowledgement emails and to deliver inquiry notifications to our institutional inbox. Resend processes email content as a data processor on our behalf. Resend\'s infrastructure operates under applicable data protection standards. No personal data is stored by Resend beyond what is required for email delivery.'
            },
            {
              num: '06',
              title: 'Data Retention',
              body: 'Personal data submitted through the contact form is retained for as long as is necessary to complete the institutional review process and to maintain an accurate institutional record in accordance with SWAQAR\'s governance requirements. Where an engagement does not proceed, personal data is retained for a period of no longer than 24 months from the date of submission, after which it is securely deleted. Where an engagement proceeds, data retention is governed by the terms of the relevant institutional agreement.'
            },
            {
              num: '07',
              title: 'Data Sharing',
              body: 'SWAQAR Group does not sell, rent, or share personal data with third parties for commercial or marketing purposes. Personal data may be shared with: our email delivery provider (Resend) solely for the purpose of sending communications; legal counsel or compliance advisors, where required under applicable law or our governance framework; and regulatory authorities, where required by law. All third parties with whom data is shared are bound by appropriate data processing agreements.'
            },
            {
              num: '08',
              title: 'Your Rights',
              body: 'Subject to applicable law, you have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data, subject to our legitimate institutional retention requirements; object to processing based on legitimate interests; and withdraw consent where processing is based on consent. To exercise any of these rights, contact us at support@swaqar.com. We will respond within the timeframe required by applicable law.'
            },
            {
              num: '09',
              title: 'Data Security',
              body: 'We implement appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration, or destruction. Our contact form data is transmitted over encrypted connections (HTTPS). API keys and credentials are stored as encrypted environment variables and are never exposed in public code repositories.'
            },
            {
              num: '10',
              title: 'Cookies and Tracking',
              body: 'The SWAQAR Group website does not use tracking cookies, advertising cookies, or third-party analytics tools. No personal data is collected through cookies. The website uses only essential technical mechanisms required for its operation, including standard browser caching and HTTPS security protocols.'
            },
            {
              num: '11',
              title: 'International Transfers',
              body: 'SWAQAR Group is headquartered in Jeddah, Kingdom of Saudi Arabia. Our email delivery infrastructure (Resend) operates in the United States (North Virginia region). Where personal data is transferred outside your jurisdiction, we ensure appropriate safeguards are in place in accordance with applicable data protection law, including standard contractual clauses where required under GDPR.'
            },
            {
              num: '12',
              title: 'Changes to This Policy',
              body: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The version date at the top of this page will be updated when changes are made. We recommend reviewing this page periodically. Continued use of this website following any update constitutes acceptance of the revised policy.'
            },
            {
              num: '13',
              title: 'Contact',
              body: 'For any questions regarding this Privacy Policy or your personal data, contact SWAQAR Group at: support@swaqar.com · SWAQAR Group, Jeddah, Kingdom of Saudi Arabia · swaqar.com'
            }
          ].map(({ num, title, body }) => (
            <div key={num} style={{marginBottom:'40px',paddingBottom:'40px',borderBottom:'1px solid var(--rule)'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:'20px',marginBottom:'12px'}}>
                <span style={{fontFamily:'var(--serif)',fontSize:'1rem',color:'var(--gold)',opacity:.7,flexShrink:0,marginTop:'3px'}}>{num}</span>
                <h2 style={{fontFamily:'var(--serif)',fontSize:'1.25rem',fontWeight:700,color:'var(--ink)',margin:0}}>{title}</h2>
              </div>
              <p style={{fontSize:'.92rem',lineHeight:1.85,color:'var(--body)',textAlign:'justify',paddingLeft:'36px'}}>{body}</p>
            </div>
          ))}

          <div style={{marginTop:'48px',padding:'24px 28px',background:'var(--ink)',borderTop:'3px solid var(--gold)'}}>
            <div style={{fontSize:'.54rem',letterSpacing:'.28em',textTransform:'uppercase',color:'var(--gold)',fontWeight:600,marginBottom:'10px'}}>Governance Note</div>
            <p style={{fontSize:'.82rem',lineHeight:1.75,color:'rgba(255,255,255,.55)'}}>This Privacy Policy is issued under SWAQAR Group's Data Protection & Privacy Governance Framework and is subject to review by the Ethics & Oversight Council. SWAQAR Group is currently in Phase I — Foundation Stage and is not yet operationally active. This policy governs data collected through the institutional website only.</p>
          </div>

        </div>
      </main>

      <footer style={{background:'var(--ink-deep)',borderTop:'1px solid rgba(206,164,55,.18)',padding:'32px 0'}}>
        <div className="wrap" style={{maxWidth:'860px',margin:'0 auto',padding:'0 60px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px'}}>
          <span style={{fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,.22)'}}>© {new Date().getFullYear()} SWAQAR Group · All rights reserved</span>
          <div style={{display:'flex',gap:'24px'}}>
            <Link href="/" style={{fontSize:'.62rem',letterSpacing:'.1em',color:'rgba(255,255,255,.22)',textDecoration:'none'}}>Home</Link>
            <Link href="/privacy" style={{fontSize:'.62rem',letterSpacing:'.1em',color:'var(--gold)',textDecoration:'none'}}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
