import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

// Excludes /api/*, /_next/*, and anything with a file extension in one rule —
// which covers favicon.ico, icon.png, apple-icon.png, og-image.png, robots.txt,
// sitemap.xml, and every other static asset — so none of them get a locale
// prefix. This is next-intl's own recommended matcher for the App Router.
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
