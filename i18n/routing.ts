import { defineRouting } from 'next-intl/routing';

// Locale-aware content is wired up via lib/translations.ts (see app/[locale]/HomeClient.tsx),
// not next-intl's message catalogs (messages/*.json is unused scaffolding). localePrefix:
// 'always' means every path — including the default locale — carries an explicit prefix
// (/en, /ar, /fr, /zh), so a bare unprefixed request always gets redirected to a prefixed
// one by the middleware (proxy.ts).
export const routing = defineRouting({
  locales: ['en', 'ar', 'fr', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export type AppLocale = (typeof routing.locales)[number];
