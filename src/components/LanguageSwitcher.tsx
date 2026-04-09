"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getInternalSlug, getLocalizedSlug } from "@/lib/services";
import { ChevronDown } from "lucide-react";

const labels: Record<string, string> = { pl: "PL", en: "EN", es: "ES" };

function useLocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const switchLocale = useCallback(
    (newLocale: string) => {
      if (params?.slug) {
        const internalSlug = getInternalSlug(params.slug as string, locale);
        if (internalSlug) {
          router.replace(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {
              pathname: "/leczenie/[slug]",
              params: { slug: getLocalizedSlug(internalSlug, newLocale) },
            } as any,
            { locale: newLocale },
          );
          return;
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.replace(pathname as any, { locale: newLocale });
    },
    [locale, pathname, params, router],
  );

  return { locale, switchLocale };
}

export function LanguageSwitcherInline({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const { locale, switchLocale } = useLocaleSwitch();

  return (
    <div className={`flex items-center ${mobile ? "gap-4" : "gap-2"}`}>
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`tracking-wider uppercase cursor-pointer transition-colors duration-300 ${
            mobile
              ? "w-10 h-10 flex items-center justify-center text-sm"
              : "text-xs"
          } ${l === locale ? "text-gold" : "text-fg-4 hover:text-fg-2"}`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLocaleSwitch();
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
    switchLocale(newLocale);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-xs tracking-wider uppercase text-fg-2 hover:text-fg/80 transition-colors duration-300 cursor-pointer"
      >
        {labels[locale]}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[4rem] border border-fg/10 bg-charcoal-dark/95 backdrop-blur-md">
          {routing.locales
            .filter((l) => l !== locale)
            .map((l) => (
              <button
                key={l}
                onClick={() => onChange(l)}
                className={`block w-full px-4 py-2 text-xs tracking-wider uppercase text-center transition-colors duration-200 cursor-pointer text-fg-3 hover:text-fg hover:bg-fg/5`}
              >
                {labels[l]}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
