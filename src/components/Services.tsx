"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    slug: "zapalenie-dziasel",
    title: "Zapalenie dziąseł",
    description:
      "Kompleksowa diagnostyka i leczenie stanów zapalnych dziąseł — od skalingu po zaawansowane procedury chirurgiczne.",
    icon: "01",
  },
  {
    slug: "zapalenie-przyzebia",
    title: "Zapalenie przyzębia",
    description:
      "Diagnostyka i leczenie choroby przyzębia — zapobieganie powstawaniu kieszeni przyzębnych, utracie kości i ruchomości zębów.",
    icon: "02",
  },
  {
    slug: "recesje-dziasel",
    title: "Recesje dziąseł",
    description:
      "Precyzyjne techniki mikrochirurgiczne z wykorzystaniem przeszczepów tkanki łącznej — pokrycie odsłoniętych szyjek zębowych.",
    icon: "07",
  },
  {
    slug: "augmentacja-dziasel",
    title: "Augmentacja dziąseł",
    description:
      "Pogrubienie dziąsła przed leczeniem ortodontycznym — zapobieganie pogłębianiu recesji podczas noszenia aparatu stałego.",
    icon: "04",
  },
  {
    slug: "wydluzenie-koron-klinicznych",
    title: "Wydłużenie koron klinicznych",
    description:
      "Chirurgiczne modelowanie dziąsła i kości w celu odsłonięcia większej części zęba — przywrócenie proporcjonalnej, zbalansowanej estetyki.",
    icon: "08",
  },
  {
    slug: "tkanki-wokol-implantow",
    title: "Tkanki wokół implantów",
    description:
      "Specjalistyczne leczenie stanów zapalnych tkanek wokół implantów — ochrona integracji i długoterminowego powodzenia leczenia.",
    icon: "06",
  },
  {
    slug: "wedzidelka-warg-i-jezyka",
    title: "Wędzidełka warg i języka",
    description:
      "Frenulektomia i miofrenuloplastyka przy skróconym wędzidełku — przywrócenie prawidłowej funkcji mowy, oddychania i połykania.",
    icon: "05",
  },
  {
    slug: "choroby-blony-sluzowej",
    title: "Choroby błony śluzowej",
    description:
      "Diagnostyka i leczenie aft, zmian zapalnych i chorób błony śluzowej jamy ustnej — gdzie medycyna stomatologiczna spotyka codzienny komfort.",
    icon: "03",
  },
];

export default function Services() {
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
