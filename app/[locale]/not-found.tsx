import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found — SWAQAR Trade',
  description: 'This page could not be found. Return to the SWAQAR Trade home page.',
  openGraph: {
    title: 'Page Not Found — SWAQAR Trade',
    description: 'This page could not be found. Return to the SWAQAR Trade home page.',
    url: 'https://www.swaqar.com/',
    siteName: 'SWAQAR Trade',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found — SWAQAR Trade',
    description: 'This page could not be found. Return to the SWAQAR Trade home page.',
  },
};

export default function NotFound() {
  return (
    <main style={{background:'var(--parchment)',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'80px 24px',textAlign:'center'}}>
      <div style={{fontSize:'.56rem',letterSpacing:'.36em',textTransform:'uppercase',color:'var(--ink)',fontWeight:600,marginBottom:'16px'}}>404</div>
      <h1 style={{fontFamily:'var(--serif)',fontSize:'clamp(28px,3.2vw,48px)',fontWeight:700,color:'var(--ink)',lineHeight:1.1,marginBottom:'16px'}}>Page Not Found</h1>
      <p style={{fontSize:'.95rem',color:'var(--muted)',lineHeight:1.7,maxWidth:'46ch',marginBottom:'32px'}}>This page could not be found. Return to the SWAQAR Trade home page.</p>
      <Link href="/" style={{fontSize:'.78rem',letterSpacing:'.06em',textTransform:'uppercase',color:'var(--ink)',fontFamily:'var(--sans)',textDecoration:'none',border:'1px solid var(--gold)',padding:'12px 24px'}}>← Return Home</Link>
    </main>
  );
}
