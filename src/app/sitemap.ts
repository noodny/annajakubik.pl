import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { services, getLocalizedSlug } from "@/lib/services";

const BASE = "https://annajakubik.pl";

const pathSegments: Record<string, string> = {
  pl: "leczenie",
  en: "treatments",
  es: "tratamientos",
};

function localeUrl(locale: string, path: string): string {
  return locale === "pl" ? `${BASE}${path}` : `${BASE}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: localeUrl("pl", ""),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, localeUrl(l, "")]),
      ),
    },
  });

  // Service pages
  for (const service of services) {
    const plSlug = getLocalizedSlug(service.slug, "pl");
    entries.push({
      url: localeUrl("pl", `/${pathSegments.pl}/${plSlug}`),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [
            l,
            localeUrl(l, `/${pathSegments[l]}/${getLocalizedSlug(service.slug, l)}`),
          ]),
        ),
      },
    });
  }

  return entries;
}
