"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getServiceMeta, getNextServiceSlug } from "@/lib/services";
import BeforeAfter from "./BeforeAfter";
import ConditionsContent from "./ConditionsContent";
import ServiceCard from "./ServiceCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const periodontalSlugs = ["zapalenie-dziasel", "zapalenie-przyzebia"];

export default function ServicePageContent({ slug }: { slug: string }) {
  const t = useTranslations("ServicePage");
  const ts = useTranslations("ServiceData");

  const meta = getServiceMeta(slug)!;
  const nextSlug = getNextServiceSlug(slug);
  const nextMeta = getServiceMeta(nextSlug)!;
  const showConditions = periodontalSlugs.includes(slug);

  const sections = Array.from({ length: meta.sectionCount }, (_, i) => ({
    heading: ts(`${slug}.s${i + 1}Heading`),
    body: ts(`${slug}.s${i + 1}Body`),
  }));

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
              href={{ pathname: "/" as const, hash: "services" }}
              className="inline-flex items-center gap-2 text-sm text-fg-4 hover:text-gold transition-colors duration-300 mb-12"
            >
              <ArrowLeft size={16} />
              <span>{t("backToAll")}</span>
            </Link>

            <p className="text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
              {ts(`${slug}.subtitle`)}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-fg leading-tight">
              {ts(`${slug}.title`)}
            </h1>
            <p className="mt-6 text-fg-3 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {ts(`${slug}.lead`)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="relative pbs-24 pbe-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: EASE,
                }}
                className="border-t border-fg/[0.06] pt-8"
              >
                <h2 className="font-serif text-2xl text-fg mb-4">
                  {section.heading}
                </h2>
                <p className="text-fg-3 text-base leading-relaxed">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After photos */}
      {meta.beforeAfter && (
        <BeforeAfter
          data={meta.beforeAfter}
          label={ts(`${slug}.beforeAfterLabel`)}
        />
      )}

      {/* Conditions stages — only for periodontal disease pages */}
      {showConditions && (
        <section className="relative py-24 lg:py-32 bg-charcoal-dark/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <ConditionsContent />
          </div>
        </section>
      )}

      {/* Next service */}
      <section className="relative py-24 lg:py-32 border-t border-fg/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-fg-5 text-sm tracking-[0.3em] uppercase mb-8"
          >
            {t("nextService")}
          </motion.p>
          <div className="max-w-sm">
            <ServiceCard
              service={{
                slug: nextSlug,
                title: ts(`${nextSlug}.title`),
                description: ts(`${nextSlug}.description`),
                icon: nextMeta.icon,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
