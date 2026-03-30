"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "O mnie" },
  { href: "#services", label: "Leczenie" },
  { href: "#philosophy", label: "Podejście" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-charcoal-dark/90 backdrop-blur-md border-b border-white/5"
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
            <span className="font-serif text-[1.6rem] text-white tracking-wide">
              Anna Jakubik
            </span>
            <span className="text-[0.6rem] lg:text-xs text-gold/80 tracking-widest uppercase font-light">
              Specjalista Periodontologii
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => scrollToHash(e, link.href)}
                className="text-sm text-white/50 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={(e) => scrollToHash(e, "#contact")}
              className="text-sm px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 tracking-wider uppercase"
            >
              Umów wizytę
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => { scrollToHash(e, link.href); setMobileOpen(false); }}
                  className="text-base text-white/60 hover:text-gold transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={(e) => { scrollToHash(e, "#contact"); setMobileOpen(false); }}
                className="text-sm px-6 py-3 border border-gold/40 text-gold text-center hover:bg-gold/10 transition-all tracking-wider uppercase mt-2"
              >
                Umów wizytę
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
