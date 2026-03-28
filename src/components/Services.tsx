"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import icon01 from "../assets/icons/01.svg?raw";
import icon02 from "../assets/icons/02.svg?raw";
import icon03 from "../assets/icons/03.svg?raw";
import icon04 from "../assets/icons/04.svg?raw";
import icon05 from "../assets/icons/05.svg?raw";
import icon06 from "../assets/icons/06.svg?raw";
import icon07 from "../assets/icons/07.svg?raw";
import icon08 from "../assets/icons/08.svg?raw";

function SvgIcon({ svg, className = "" }: { svg: string; className?: string }) {
  const html = svg
    .replace(/fill="#fff"/g, 'fill="currentColor"')
    .replace(/fill="white"/g, 'fill="currentColor"')
    .replace(/<svg /, '<svg style="width:100%;height:100%" ');
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

const services = [
  {
    title: "Zapalenie dziąseł",
    description:
      "Kompleksowa diagnostyka i leczenie stanów zapalnych dziąseł — od skalingu po zaawansowane procedury chirurgiczne.",
    icon: icon01,
  },
  {
    title: "Zapalenie przyzębia",
    description:
      "Diagnostyka i leczenie choroby przyzębia — zapobieganie powstawaniu kieszeni przyzębnych, utracie kości i ruchomości zębów.",
    icon: icon02,
  },
  {
    title: "Recesje dziąseł",
    description:
      "Precyzyjne techniki mikrochirurgiczne z wykorzystaniem przeszczepów tkanki łącznej — pokrycie odsłoniętych szyjek zębowych.",
    icon: icon07,
  },
  {
    title: "Augmentacja dziąseł",
    description:
      "Pogrubienie dziąsła przed leczeniem ortodontycznym — zapobieganie pogłębianiu recesji podczas noszenia aparatu stałego.",
    icon: icon04,
  },
  {
    title: "Wydłużenie koron klinicznych",
    description:
      "Chirurgiczne modelowanie dziąsła i kości w celu odsłonięcia większej części zęba — przywrócenie proporcjonalnej, zbalansowanej estetyki.",
    icon: icon08,
  },
  {
    title: "Tkanki wokół implantów",
    description:
      "Specjalistyczne leczenie stanów zapalnych tkanek wokół implantów — ochrona integracji i długoterminowego powodzenia leczenia.",
    icon: icon06,
  },
  {
    title: "Wędzidełka warg i języka",
    description:
      "Frenulektomia i miofrenuloplastyka przy skróconym wędzidełku — przywrócenie prawidłowej funkcji mowy, oddychania i połykania.",
    icon: icon05,
  },
  {
    title: "Choroby błony śluzowej",
    description:
      "Diagnostyka i leczenie aft, zmian zapalnych i chorób błony śluzowej jamy ustnej — gdzie medycyna stomatologiczna spotyka codzienny komfort.",
    icon: icon03,
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative p-8 bg-charcoal/50 border border-white/[0.04] hover:border-gold/20 transition-all duration-700"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        <SvgIcon
          svg={service.icon}
          className="w-20 h-20 text-gold/50 group-hover:text-gold transition-colors duration-500 mb-6"
        />
        <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-light transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-500">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 lg:py-44 bg-charcoal-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-20"
        >
          <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
            Leczenie
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Specjalistyczna
            <br />
            <span className="text-white/30">opieka periodontologiczna</span>
          </h2>
          <p className="mt-6 text-white/30 text-base leading-relaxed max-w-xl">
            Periodontologia zajmuje się zapobieganiem, diagnostyką
            i&nbsp;leczeniem chorób przyzębia oraz błony śluzowej, czyli całą
            jamą ustną otaczającą zęby.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.02]">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
