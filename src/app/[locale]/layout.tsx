import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/components/ThemeProvider";
import { ENABLE_THEME_SWITCHING } from "@/config/features";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Script from "next/script";

const themeScript = ENABLE_THEME_SWITCHING
  ? `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`
  : `document.documentElement.classList.add('dark')`;

// Reveals [data-reveal] sections via an inline IntersectionObserver. Runs
// before first paint and on DOMContentLoaded, so scroll-reveal never waits on
// the main React/framer-motion bundle or on image loading. Content stays
// visible (see globals.css) if this never runs.
const revealScript = `(function(){var d=document.documentElement;d.classList.add('js');function obsAll(){document.querySelectorAll('[data-reveal]').forEach(function(e){e.classList.add('reveal-in')})}if(!('IntersectionObserver' in window)){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',obsAll);else obsAll();return}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('reveal-in');io.unobserve(e.target)}})},{rootMargin:'-100px 0px'});function obs(el){if(el.dataset.revealObserved)return;el.dataset.revealObserved='1';io.observe(el)}function scan(r){(r||document).querySelectorAll('[data-reveal]').forEach(obs)}function start(){scan(document);new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var ns=ms[i].addedNodes;for(var j=0;j<ns.length;j++){var n=ns[j];if(n.nodeType!==1)continue;if(n.hasAttribute&&n.hasAttribute('data-reveal'))obs(n);if(n.querySelectorAll)scan(n)}}}).observe(document.body,{childList:true,subtree:true})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start()})()`;

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
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
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
