import { useTranslations } from "next-intl";
import { services } from "@/lib/services";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function Services() {
  const t = useTranslations("Services");
  const ts = useTranslations("ServiceData");

  return (
    <section
      id="services"
      className="relative pbs-32 lg:pbs-44 bg-charcoal-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal y={30} className="max-w-2xl mb-20">
          <p className="text-gold-muted text-sm tracking-[0.3em] uppercase mb-6">
            {t("sectionLabel")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-fg leading-tight">
            {t("heading1")}
            <br />
            <span className="text-fg-4">{t("heading2")}</span>
          </h2>
          <p className="mt-6 text-fg-4 text-base leading-relaxed max-w-xl">
            {t("description")}
          </p>
        </Reveal>

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
