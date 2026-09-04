import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'SWAQAR Trade — Corridors of Trust · Africa · Middle East · Asia',
  description: 'The governance-led, asset-light, non-custodial Trade Coordination Layer of SWAQAR Group, connecting Africa, the Middle East, and Asia.',
  alternates: {
    canonical: 'https://www.swaqar.com/',
  },
  openGraph: {
    title: 'SWAQAR Trade — Corridors of Trust · Africa · Middle East · Asia',
    description: 'The governance-led, asset-light, non-custodial Trade Coordination Layer of SWAQAR Group, connecting Africa, the Middle East, and Asia.',
    url: 'https://www.swaqar.com/',
    siteName: 'SWAQAR Trade',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWAQAR Trade — Corridors of Trust · Africa · Middle East · Asia',
    description: 'The governance-led, asset-light, non-custodial Trade Coordination Layer of SWAQAR Group, connecting Africa, the Middle East, and Asia.',
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
