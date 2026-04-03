"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-baseline">
            <span className="font-serif text-[1.6rem] text-white tracking-wide">
              Anna Jakubik
            </span>
            <span className="text-[0.6rem] lg:text-xs text-gold/80 tracking-widest uppercase font-light">
              {t("subtitle")}
            </span>
          </div>

          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} annajakubik.pl
          </p>
        </div>
      </div>
    </footer>
  );
}
