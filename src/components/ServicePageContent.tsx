"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ServicePage } from "@/lib/services";
import ConditionsContent from "./ConditionsContent";
import ServiceCard from "./ServiceCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const periodontalSlugs = ["zapalenie-dziasel", "zapalenie-przyzebia"];

export default function ServicePageContent({
  service,
  nextService,
}: {
  service: ServicePage;
  nextService: ServicePage;
}) {
  const showConditions = periodontalSlugs.includes(service.slug);

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-gold transition-colors duration-300 mb-12"
            >
              <ArrowLeft size={16} />
              <span>Zobacz wszystkie</span>
            </Link>

            <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-4">
              {service.subtitle}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {service.content.lead}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="relative pbs-24 pbe-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {service.content.sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: EASE,
                }}
                className="border-t border-white/[0.06] pt-8"
              >
                <h2 className="font-serif text-2xl text-white mb-4">
                  {section.heading}
                </h2>
                <p className="text-white/40 text-base leading-relaxed">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions stages — only for periodontal disease pages */}
      {showConditions && (
        <section className="relative py-24 lg:py-32 bg-charcoal-dark/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <ConditionsContent />
          </div>
        </section>
      )}

      {/* Next service */}
      <section className="relative py-24 lg:py-32 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-white/20 text-sm tracking-[0.3em] uppercase mb-8"
          >
            Zobacz też
          </motion.p>
          <div className="max-w-sm">
            <ServiceCard service={nextService} />
          </div>
        </div>
      </section>
    </div>
  );
}
