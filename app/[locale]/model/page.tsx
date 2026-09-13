import type { Metadata } from 'next';
import { routing, type AppLocale } from '@/i18n/routing';
import { t, tx } from '@/lib/translations';
import { buildMetadata } from '@/lib/seo';
import ModelClient from './ModelClient';

function toAppLocale(locale: string): AppLocale {
  return (routing.locales as readonly string[]).includes(locale) ? (locale as AppLocale) : routing.defaultLocale;
}

// Stage 3 split — The Model gets its own real, indexable route. Title combines the locked
// "SWAQAR Trade" brand name with the already-reviewed t.nav.model label (differs by locale:
// "The Model" / "النموذج" / "Le Modèle" / "协调模型"); description is the existing t.gates.subDesc
// copy. No new copy — both pulled from lib/translations.ts, same as the home/privacy pattern.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toAppLocale((await params).locale);
  return buildMetadata({
    locale,
    path: '/model',
    title: `SWAQAR Trade — ${tx(t.nav.model, locale)}`,
    description: tx(t.gates.subDesc, locale),
  });
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ModelClient locale={locale} />;
}
