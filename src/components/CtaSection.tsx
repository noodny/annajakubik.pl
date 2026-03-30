"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-44 overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.04] blur-[150px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-8">
            Pierwszy krok
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
            Zadbaj o zdrowie
            <br />
            <span className="text-gold">swoich dziąseł</span>
          </h2>
          <p className="mt-8 text-white/30 text-lg font-light max-w-xl mx-auto leading-relaxed">
            Zdrowe dziąsła to fundament zdrowego organizmu. Umów się na
            konsultację i zadbaj o swoje przyzębie.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact-details"
              className="group relative px-12 py-4 bg-gold text-charcoal-dark font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,169,110,0.25)]"
            >
              <span className="relative z-10">Umów konsultację</span>
              <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
