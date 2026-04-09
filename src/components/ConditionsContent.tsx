"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function ConditionsContent() {
  const t = useTranslations("ConditionsContent");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stages = [
    {
      stage: t("s1Stage"),
      title: t("s1Title"),
      description: t("s1Description"),
      visual: "●○○○",
      color: "text-sage",
    },
    {
      stage: t("s2Stage"),
      title: t("s2Title"),
      description: t("s2Description"),
      visual: "●●○○",
      color: "text-gold",
    },
    {
      stage: t("s3Stage"),
      title: t("s3Title"),
      description: t("s3Description"),
      visual: "●●●○",
      color: "text-gold-dark",
    },
    {
      stage: t("s4Stage"),
      title: t("s4Title"),
      description: t("s4Description"),
      visual: "●●●●",
      color: "text-red-400/70",
    },
  ];

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <div ref={ref}>
      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid sm:grid-cols-3 gap-8 mb-16 p-8 border border-fg/[0.06] bg-charcoal/30"
      >
        {stats.map((s) => (
          <div key={s.value} className="text-center sm:text-left">
            <p className="font-serif text-3xl md:text-4xl text-gold">
              {s.value}
            </p>
            <p className="text-fg/30 text-sm mt-2 leading-relaxed">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl md:text-3xl text-fg">
          {t("heading")}
        </h2>
        <p className="mt-3 text-fg/30 text-base leading-relaxed max-w-xl">
          {t("description")}
        </p>
      </motion.div>

      {/* Stages */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-fg/[0.02]">
        {stages.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.6,
              delay: 0.4 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group p-8 bg-charcoal-dark border border-fg/[0.03] hover:border-fg/[0.08] transition-all duration-700"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-fg/20 mb-4">
              {item.stage}
            </p>
            <p className={`text-lg tracking-widest mb-4 ${item.color}`}>
              {item.visual}
            </p>
            <h3 className="font-serif text-xl text-fg mb-3">
              {item.title}
            </h3>
            <p className="text-fg/30 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
