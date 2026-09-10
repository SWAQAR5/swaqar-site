import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Noto_Naskh_Arabic } from 'next/font/google';
import { routing } from '@/i18n/routing';
import '../swaqar.css';

// Arabic body+heading face. Loaded via next/font/google (self-hosted, no extra request-chain
// hop) since Google's 'arabic' subset is fully supported here — unlike Noto Sans SC below.
// Weights match the four actually used across swaqar.css (400/500/600/700). The resulting
// --font-ar custom property is wired into --serif/--sans only under html[lang="ar"] (see
// swaqar.css) so nothing changes for en/fr.
const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ar',
});

export const metadata: Metadata = {
  title: 'SWAQAR Trade — Corridors of Trust',
  description: 'A governance-led, asset-light, non-custodial Trade Coordination Layer for Africa, the Middle East and Asia. SWAQAR coordinates verified corridor readiness — it does not trade, broker or hold funds.',
  openGraph: {
    title: 'SWAQAR Trade — Corridors of Trust',
    description: 'A governance-led, asset-light, non-custodial Trade Coordination Layer for Africa, the Middle East and Asia. SWAQAR coordinates verified corridor readiness — it does not trade, broker or hold funds.',
    url: 'https://www.swaqar.com',
    siteName: 'SWAQAR Trade',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWAQAR Trade — Corridors of Trust',
    description: 'A governance-led, asset-light, non-custodial Trade Coordination Layer for Africa, the Middle East and Asia. SWAQAR coordinates verified corridor readiness — it does not trade, broker or hold funds.',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Stage 1 is routing-only: any locale outside the configured set 404s via
  // the nearest not-found boundary rather than silently falling back.
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={notoNaskhArabic.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Noto Sans SC (zh) loaded here, not via next/font/google: next/font's Google metadata
            for "Noto Sans SC" only lists latin/latin-ext/cyrillic/vietnamese subsets — no
            Simplified Chinese subset is exposed through it in this Next.js version, so
            next/font can serve Latin glyphs only, not Chinese ones. The plain CSS2 endpoint
            (used here, same as the other three faces already were) subsets CJK correctly. */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
