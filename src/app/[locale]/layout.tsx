import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`;


type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    metadataBase: new URL("https://annajakubik.pl"),
    title: t("title"),
    description: t("description"),
    icons: { icon: "/favicon.png" },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "/ogimage.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/ogimage.jpg"],
    },
    alternates: {
      canonical:
        locale === "pl"
          ? "https://annajakubik.pl"
          : `https://annajakubik.pl/${locale}`,
      languages: {
        pl: "https://annajakubik.pl",
        en: "https://annajakubik.pl/en",
        es: "https://annajakubik.pl/es",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-obsidian text-fg antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            {children}
            <Contact />
            <CtaSection />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
