import type { Metadata } from 'next';
import { routing, type AppLocale } from '@/i18n/routing';

export const SITE_URL = 'https://www.swaqar.com';

// Open Graph locale codes per app locale — OG wants underscore-joined BCP47-ish tags,
// not the bare two-letter codes next-intl/hreflang use.
const OG_LOCALE: Record<AppLocale, string> = {
  en: 'en_US',
  ar: 'ar_SA',
  fr: 'fr_FR',
  zh: 'zh_CN',
};

/**
 * Builds the canonical + hreflang alternates for one path, shared by both page <head> metadata
 * and sitemap.ts so the two can never drift apart. `path` is the part after the locale segment,
 * e.g. '' for the homepage or '/privacy' — no leading/trailing slash handling needed by callers.
 */
export function localeAlternates(path: string, currentLocale: AppLocale) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${SITE_URL}/${locale}${path}`;
  }
  // x-default points at the site's default locale (en) — the fallback for users whose
  // language/region doesn't match any of our four hreflang entries.
  languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}${path}`;

  return {
    canonical: `${SITE_URL}/${currentLocale}${path}`,
    languages,
  };
}

/**
 * Shared shape for a fully localized page's <head> metadata: canonical + hreflang alternates,
 * and OpenGraph/Twitter cards carrying the given per-locale title/description.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: AppLocale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const { canonical, languages } = localeAlternates(path, locale);
  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'SWAQAR Trade',
      type: 'website',
      locale: OG_LOCALE[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
