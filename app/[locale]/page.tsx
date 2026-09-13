import type { Metadata } from 'next';
import { routing, type AppLocale } from '@/i18n/routing';
import { t, tx } from '@/lib/translations';
import { buildMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

function toAppLocale(locale: string): AppLocale {
  return (routing.locales as readonly string[]).includes(locale) ? (locale as AppLocale) : routing.defaultLocale;
}

// Title stays the fixed brand tagline in every locale — "Corridors of Trust" is locked, untranslated
// brand material (see lib/translations.ts hero.h1line1/h1line2/h1em). Description is what actually
// varies per locale, pulled from the already-reviewed hero.desc translation, so each locale's search
// result genuinely differs rather than four identical titles with no real distinguishing content.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toAppLocale((await params).locale);
  return buildMetadata({
    locale,
    path: '',
    title: 'SWAQAR Trade — Corridors of Trust',
    description: tx(t.hero.desc, locale),
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomeClient locale={locale} />;
}
