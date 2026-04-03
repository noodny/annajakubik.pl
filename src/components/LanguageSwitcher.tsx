"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

const labels: Record<string, string> = { pl: "PL", en: "EN", es: "ES" };

export function LanguageSwitcherInline({ mobile = false }: { mobile?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className={`flex items-center ${mobile ? "gap-4" : "gap-2"}`}>
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={`tracking-wider uppercase cursor-pointer transition-colors duration-300 ${
            mobile
              ? "w-10 h-10 flex items-center justify-center text-sm"
              : "text-xs"
          } ${
            l === locale ? "text-gold" : "text-white/30 hover:text-white/60"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function onChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-xs tracking-wider uppercase text-white/50 hover:text-white/80 transition-colors duration-300 cursor-pointer"
      >
        {labels[locale]}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[4rem] border border-white/10 bg-charcoal-dark/95 backdrop-blur-md">
          {routing.locales
            .filter((l) => l !== locale)
            .map((l) => (
              <button
                key={l}
                onClick={() => onChange(l)}
                className={`block w-full px-4 py-2 text-xs tracking-wider uppercase text-center transition-colors duration-200 cursor-pointer text-white/40 hover:text-white hover:bg-white/5`}
              >
                {labels[l]}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
