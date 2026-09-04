import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../swaqar.css';

export const metadata: Metadata = {
  title: 'SWAQAR Trade — Corridors of Trust',
  description: 'SWAQAR Trade is the governance-led, asset-light, non-custodial Trade Coordination Layer of SWAQAR Group, connecting Africa, the Middle East, and Asia through verification, institutional trust, and disciplined execution.',
  openGraph: {
    title: 'SWAQAR Trade — Corridors of Trust',
    description: 'SWAQAR Trade is the governance-led, asset-light, non-custodial Trade Coordination Layer of SWAQAR Group, connecting Africa, the Middle East, and Asia through verification, institutional trust, and disciplined execution.',
    url: 'https://www.swaqar.com',
    siteName: 'SWAQAR Trade',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWAQAR Trade — Corridors of Trust',
    description: 'A governance-led, non-custodial Trade Coordination Layer. Verification-first. Non-custodial. Africa — Middle East — Asia.',
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
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=IBM+Plex+Arabic:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
