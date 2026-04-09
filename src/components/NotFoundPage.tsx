"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-fg leading-tight mb-4">
          {t("title")}
        </h1>
        <p className="text-fg/40 text-lg font-light max-w-md mx-auto mb-12">
          {t("description")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors duration-300 tracking-wider uppercase"
        >
          <ArrowLeft size={16} />
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
