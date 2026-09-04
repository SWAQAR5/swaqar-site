import { defineRouting } from 'next-intl/routing';

// Job 6 · Stage 1 — locale ROUTING only. All four locales currently render the
// same existing English content (see app/[locale]/HomeClient.tsx); no message
// catalogs are wired up yet. localePrefix: 'always' means every path — including
// the default locale — carries an explicit prefix (/en, /ar, /fr, /zh), so a bare
// unprefixed request always gets redirected to a prefixed one by the middleware.
export const routing = defineRouting({
  locales: ['en', 'ar', 'fr', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export type AppLocale = (typeof routing.locales)[number];
