"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { services } from "@/lib/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const t = useTranslations("Services");
  const ts = useTranslations("ServiceData");
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative pbs-32 lg:pbs-44 bg-charcoal-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-20"
        >
          <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
            {t("sectionLabel")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-fg leading-tight">
            {t("heading1")}
            <br />
            <span className="text-fg/30">{t("heading2")}</span>
          </h2>
          <p className="mt-6 text-fg/30 text-base leading-relaxed max-w-xl">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-fg/[0.02]">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={{
                slug: service.slug,
                title: ts(`${service.slug}.title`),
                description: ts(`${service.slug}.description`),
                icon: service.icon,
              }}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
