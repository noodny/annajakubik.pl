"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Smartphone } from "lucide-react";

const locations = [
  {
    name: "S3 Stomatologia",
    address: "Za Torem 28D, 34-520 Poronin",
    phone: "+48 18 201 29 29",
    mobilePhone: "+48 508 012 929",
    region: "Poronin",
  },
  {
    name: "Centrum Stomatologii Dominik",
    address: "Zakopiańska 6A, 34-700 Rabka-Zdrój",
    phone: "+48 18 267 07 39",
    mobilePhone: "+48 696 025 147",
    region: "Rabka-Zdrój",
  },
];

export default function Contact() {
  const t = useTranslations("Contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative pbs-16 pbe-16 lg:py-44 bg-charcoal/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
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

        <div className="grid pbs-20 lg:grid-cols-2 gap-8" id="contact-details">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-10 lg:p-12 border border-fg/[0.06] bg-charcoal-dark hover:border-gold/20 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <p className="text-xs text-gold/40 tracking-[0.3em] uppercase mb-4">
                  {loc.region}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-fg mb-8">
                  {loc.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin
                      size={18}
                      className="text-gold/40 mt-0.5 shrink-0"
                    />
                    <p className="text-fg/40 text-base">{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={18} className="text-gold/40 shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="text-fg/60 hover:text-gold transition-colors duration-300 text-base"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Smartphone size={18} className="text-gold/40 shrink-0" />
                    <a
                      href={`tel:${loc.mobilePhone.replace(/\s/g, "")}`}
                      className="text-fg/60 hover:text-gold transition-colors duration-300 text-base"
                    >
                      {loc.mobilePhone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="inline-block mt-10 px-8 py-3 border border-gold/30 text-gold text-sm tracking-wider uppercase hover:bg-gold/10 transition-all duration-500"
                >
                  {t("callAndBook")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
