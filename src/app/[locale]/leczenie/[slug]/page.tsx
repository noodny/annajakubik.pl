import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { services, getServiceMeta } from "@/lib/services";
import ServicePageContent from "@/components/ServicePageContent";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ServiceData" });
  const meta = getServiceMeta(slug);
  if (!meta) return {};
  return {
    title: `${t(`${slug}.title`)} — Anna Jakubik`,
    description: t(`${slug}.description`),
    alternates: {
      canonical:
        locale === "pl"
          ? `https://annajakubik.pl/leczenie/${slug}`
          : `https://annajakubik.pl/${locale}/leczenie/${slug}`,
      languages: {
        pl: `https://annajakubik.pl/leczenie/${slug}`,
        en: `https://annajakubik.pl/en/leczenie/${slug}`,
        es: `https://annajakubik.pl/es/leczenie/${slug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const meta = getServiceMeta(slug);
  if (!meta) notFound();
  return <ServicePageContent slug={slug} />;
}
