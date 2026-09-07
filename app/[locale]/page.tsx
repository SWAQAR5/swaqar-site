import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'SWAQAR Trade — Corridors of Trust',
  description: 'A governance-led, asset-light, non-custodial Trade Coordination Layer for Africa, the Middle East and Asia. SWAQAR coordinates verified corridor readiness — it does not trade, broker or hold funds.',
  alternates: {
    canonical: 'https://www.swaqar.com/',
  },
  openGraph: {
    title: 'SWAQAR Trade — Corridors of Trust',
    description: 'A governance-led, asset-light, non-custodial Trade Coordination Layer for Africa, the Middle East and Asia. SWAQAR coordinates verified corridor readiness — it does not trade, broker or hold funds.',
    url: 'https://www.swaqar.com/',
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomeClient locale={locale} />;
}
