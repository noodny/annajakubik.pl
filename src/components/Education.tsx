"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const publications = [
  {
    year: "2020",
    title: "Awareness of oral health prophylaxis in pregnant women",
    journal: "Folia Medica Cracoviensia, Vol. 60, nr 3",
  },
  {
    year: "2018",
    title: "Świadomość biegaczy w zakresie profilaktyki chorób jamy ustnej",
    journal: "Medicina Sportiva Practica, t. 19, nr 2",
  },
  {
    year: "2017",
    title: "Artificial saliva and its use in biological experiments",
    journal: "Journal of Physiology and Pharmacology, vol. 68, no. 6",
  },
  {
    year: "2015",
    title:
      "Pregnant women\u2019s awareness of dental care with regard to oral health prophylaxis",
    journal: "Journal of Stomatology, vol. 68, no. 6",
  },
];

export default function Education() {
  const t = useTranslations("Education");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: t("m1Year"),
      title: t("m1Title"),
      description: t("m1Description"),
    },
    {
      year: t("m2Year"),
      title: t("m2Title"),
      description: t("m2Description"),
    },
    {
      year: t("m3Year"),
      title: t("m3Title"),
      description: t("m3Description"),
    },
  ];

  return (
    <section id="education" className="relative py-16 lg:py-32 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px bg-fg/[0.06]" />

          <div className="space-y-16 lg:space-y-24" ref={ref}>
            {milestones.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot on the timeline */}
                <div className="absolute left-[15px] lg:left-1/2 lg:-translate-x-1/2 top-1 w-[9px] h-[9px] rounded-full border border-gold/40 bg-charcoal-dark z-10">
                  <div className="absolute inset-1 rounded-full bg-gold/60" />
                </div>

                {/* Content */}
                <div
                  className={`pl-12 lg:pl-0 lg:w-1/2 ${
                    i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <p className="text-gold/50 text-xs tracking-[0.3em] uppercase mb-3">
                    {item.year}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-fg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-fg/30 text-sm leading-relaxed max-w-md inline-block">
                    {item.description}
                  </p>

                  {i === 2 && (
                    <div className="mt-8 space-y-4 max-w-md inline-block">
                      <p className="text-gold/40 text-xs tracking-[0.2em] uppercase">
                        {t("selectedPublications")}
                      </p>
                      {publications.map((pub) => (
                        <div
                          key={pub.title}
                          className="border-t border-fg/[0.04] pt-3"
                        >
                          <p className="text-fg/50 text-sm leading-relaxed">
                            {pub.title}
                          </p>
                          <p className="text-fg/20 text-xs mt-1">
                            {pub.journal}, {pub.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
