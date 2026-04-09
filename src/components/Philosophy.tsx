"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { Carousel } from "./Carousel";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  source: string;
}

function TestimonialCard({ name, text, rating, source }: Testimonial) {
  return (
    <div className="h-full pl-8 border-l border-gold/20 flex flex-col justify-center">
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} size={12} className="text-gold fill-gold" />
        ))}
      </div>
      <p className="text-fg-2 text-lg leading-relaxed font-light">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-8 h-px bg-fg/10" />
        <p className="text-fg-2 text-sm">{name}</p>
        <span className="text-fg-5 text-xs">{source}</span>
      </div>
    </div>
  );
}

export default function Philosophy() {
  const t = useTranslations("Philosophy");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    { name: t("t1Name"), text: t("t1Text"), rating: 5, source: t("t1Source") },
    { name: t("t2Name"), text: t("t2Text"), rating: 5, source: t("t2Source") },
    { name: t("t3Name"), text: t("t3Text"), rating: 5, source: t("t3Source") },
    { name: t("t4Name"), text: t("t4Text"), rating: 5, source: t("t4Source") },
    { name: t("t5Name"), text: t("t5Text"), rating: 5, source: t("t5Source") },
  ];

  return (
    <section
      id="philosophy"
      className="relative pbs-32 pbe-16 lg:pbs-44 lg:pbe-32"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-sage/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading + quote */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gold-muted text-sm tracking-[0.3em] uppercase mb-6">
              {t("sectionLabel")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-fg leading-tight">
              {t("heading1")}
              <br />
              <span className="text-fg-4">{t("heading2")}</span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-fg-2 font-light leading-relaxed font-serif italic">
              {t("quote")}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-gold/30" />
              <p className="text-sm text-gold-muted tracking-wide">
                {t("quoteAuthor")}
              </p>
            </div>
          </motion.div>

          {/* Right: testimonials carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-8 self-end"
          >
            <Carousel
              items={testimonials}
              ItemComponent={TestimonialCard}
              autoScroll
              hasNavigation
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
