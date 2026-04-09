import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  services,
  getServiceMeta,
  getLocalizedSlug,
  getInternalSlug,
} from "@/lib/services";
import ServicePageContent from "@/components/ServicePageContent";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

const pathSegments: Record<string, string> = {
  pl: "leczenie",
  en: "treatments",
  es: "tratamientos",
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: getLocalizedSlug(s.slug, locale) })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const internalSlug = getInternalSlug(slug, locale);
  if (!internalSlug) return {};

  const t = await getTranslations({ locale, namespace: "ServiceData" });
  return {
    title: `${t(`${internalSlug}.title`)} — Anna Jakubik`,
    description: t(`${internalSlug}.description`),
    alternates: {
      canonical:
        locale === "pl"
          ? `https://annajakubik.pl/leczenie/${slug}`
          : `https://annajakubik.pl/${locale}/${pathSegments[locale]}/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => {
          const lSlug = getLocalizedSlug(internalSlug, l);
          const prefix = l === "pl" ? "" : `/${l}`;
          return [l, `https://annajakubik.pl${prefix}/${pathSegments[l]}/${lSlug}`];
        }),
      ),
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const internalSlug = getInternalSlug(slug, locale);
  if (!internalSlug) notFound();

  const meta = getServiceMeta(internalSlug);
  if (!meta) notFound();

  return <ServicePageContent slug={internalSlug} />;
}
