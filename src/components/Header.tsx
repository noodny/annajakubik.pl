"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageSwitcher, { LanguageSwitcherInline } from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { ENABLE_THEME_SWITCHING } from "@/config/features";

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#philosophy", label: t("approach") },
    { href: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    if (!isHome) return; // let the browser navigate to /{hash}
    e.preventDefault();
    const id = hash.replace("#", "");
    const el = id ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          mobileOpen
            ? "bg-transparent border-b border-transparent"
            : scrolled
              ? "bg-charcoal-dark/90 backdrop-blur-md border-b border-fg/5"
              : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a
              href="/"
              onClick={(e) => scrollToHash(e, "")}
              className="group flex flex-col items-baseline"
            >
              <span className="font-serif text-[1.6rem] text-fg tracking-wide">
                Anna Jakubik
              </span>
              <span className="text-[0.6rem] lg:text-xs text-gold/80 tracking-widest uppercase font-light [text-shadow:0_0_5px_rgba(255,255,255,0.5)] dark:text-shadow-none">
                {t("subtitle")}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => scrollToHash(e, link.href)}
                  className="text-sm text-fg-2 hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={(e) => scrollToHash(e, "#contact")}
                className="hidden lg:inline-block text-sm px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 tracking-wider uppercase"
              >
                {t("bookVisit")}
              </a>
              {ENABLE_THEME_SWITCHING && (
                <ThemeSwitcher className="text-fg-2 hover:text-fg/80" />
              )}
              <LanguageSwitcher />
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-fg/70 hover:text-fg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — rendered outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 z-40 pt-20 bg-charcoal-dark/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col h-full px-6">
              {/* Nav links — centered */}
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      scrollToHash(e, link.href);
                      setMobileOpen(false);
                    }}
                    className="text-lg text-fg-2 hover:text-gold transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Bottom: CTA + language switcher */}
              <div className="pb-12 flex flex-col items-center gap-6">
                <a
                  href={isHome ? "#contact" : "/#contact"}
                  onClick={(e) => {
                    scrollToHash(e, "#contact");
                    setMobileOpen(false);
                  }}
                  className="text-sm px-8 py-3 border border-gold/40 text-gold text-center hover:bg-gold/10 transition-all tracking-wider uppercase"
                >
                  {t("bookVisit")}
                </a>
                <div className="flex items-center gap-6">
                  <LanguageSwitcherInline mobile />
                  {ENABLE_THEME_SWITCHING && (
                    <ThemeSwitcher className="text-fg-2 hover:text-fg/80" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
