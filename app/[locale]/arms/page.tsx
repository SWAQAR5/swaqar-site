import type { Metadata } from 'next';
import { routing, type AppLocale } from '@/i18n/routing';
import { t, tx } from '@/lib/translations';
import { buildMetadata } from '@/lib/seo';
import ArmsClient from './ArmsClient';

function toAppLocale(locale: string): AppLocale {
  return (routing.locales as readonly string[]).includes(locale) ? (locale as AppLocale) : routing.defaultLocale;
}

// Stage 3 split — Strategic Arms gets its own real, indexable route. Title combines the
// locked "SWAQAR Trade" brand name with the already-reviewed t.nav.arms label (differs by
// locale: "Strategic Arms" / "الأذرع الاستراتيجية" / "Bras Stratégiques" / "战略板块");
// description is the existing t.arms.abxP copy. No new copy — both pulled from
// lib/translations.ts, same as the home/privacy/model pattern.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toAppLocale((await params).locale);
  return buildMetadata({
    locale,
    path: '/arms',
    title: `SWAQAR Trade — ${tx(t.nav.arms, locale)}`,
    description: tx(t.arms.abxP, locale),
  });
}

export default async function ArmsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ArmsClient locale={locale} />;
}
