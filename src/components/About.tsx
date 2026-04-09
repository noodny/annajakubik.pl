"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const t = useTranslations("About");

  const stats = [
    { number: t("stat1Number"), label: t("stat1Label") },
    { number: t("stat2Number"), label: t("stat2Label") },
    { number: t("stat3Number"), label: t("stat3Label") },
    { number: t("stat4Number"), label: t("stat4Label") },
  ];

  return (
    <section id="about" className="relative pbs-16 lg:pbs-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Label + Photo placeholder */}
          <FadeInSection>
            <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
              {t("sectionLabel")}
            </p>
            <h2 className="font-serif text-fg leading-tight">
              <span className="text-2xl text-fg/30">{t("degree")}</span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">
                Anna Jakubik
              </span>
            </h2>

            {/* Photo */}
            <div className="mt-12 aspect-[3/4] max-w-md bg-charcoal-light relative overflow-hidden">
              <Image
                src="/photo.jpg"
                alt={t("photoAlt")}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent" />
              {/* Accent border */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-gold/40 via-gold/20 to-transparent" />
            </div>
          </FadeInSection>

          {/* Right: Bio text */}
          <div className="lg:pt-24">
            <FadeInSection delay={0.2}>
              <p className="text-xl md:text-2xl text-fg/80 font-light leading-relaxed font-serif italic">
                {t("intro")}
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="mt-12 space-y-6 text-fg/40 text-base leading-relaxed">
                <p>{t("bio1")}</p>
                <p>{t("bio2")}</p>
                <p>{t("bio3")}</p>
              </div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.5}>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-fg/10 pt-4">
                <p className="font-serif text-2xl text-gold">{stat.number}</p>
                <p className="text-xs text-fg/30 mt-1 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
