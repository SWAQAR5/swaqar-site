import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, localeAlternates } from "@/lib/seo";

// Every real page in the app, as the path segment after the locale (empty string = homepage).
// Keep this list in sync with app/[locale]/*  — it's the single source both this sitemap and
// the per-page <head> hreflang alternates (lib/seo.ts) are built from.
const PAGES = ["", "/privacy"];

// Auto-generated sitemap — tells Google what pages to index, across all four locales.
// Deployed at: https://swaqar.com/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    for (const locale of routing.locales) {
      const { canonical, languages } = localeAlternates(page, locale);
      entries.push({
        url: canonical,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1 : 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
