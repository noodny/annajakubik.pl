import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default async function RootNotFound() {
  const locale = routing.defaultLocale;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="bg-[#080a08] text-white antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
                404
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
                {(messages as Record<string, Record<string, string>>).NotFound.title}
              </h1>
              <p className="text-white/40 text-lg font-light max-w-md mx-auto mb-12">
                {(messages as Record<string, Record<string, string>>).NotFound.description}
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors duration-300 tracking-wider uppercase"
              >
                <ArrowLeft size={16} />
                {(messages as Record<string, Record<string, string>>).NotFound.backHome}
              </a>
            </div>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
