"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import icon01 from "../assets/icons/01.svg?raw";
import icon02 from "../assets/icons/02.svg?raw";
import icon03 from "../assets/icons/03.svg?raw";
import icon04 from "../assets/icons/04.svg?raw";
import icon05 from "../assets/icons/05.svg?raw";
import icon06 from "../assets/icons/06.svg?raw";
import icon07 from "../assets/icons/07.svg?raw";
import icon08 from "../assets/icons/08.svg?raw";

const iconMap: Record<string, string> = {
  "01": icon01,
  "02": icon02,
  "03": icon03,
  "04": icon04,
  "05": icon05,
  "06": icon06,
  "07": icon07,
  "08": icon08,
};

export function getIcon(id: string): string {
  return iconMap[id] ?? "";
}

function SvgIcon({ svg, className = "" }: { svg: string; className?: string }) {
  const html = svg
    .replace(/fill="#fff"/g, 'fill="currentColor"')
    .replace(/fill="white"/g, 'fill="currentColor"')
    .replace(/<svg /, '<svg style="width:100%;height:100%" ');
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export interface ServiceCardData {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: ServiceCardData;
  index?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const iconSvg = iconMap[service.icon] ?? service.icon;

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
    >
      <Link
        href={`/leczenie/${service.slug}`}
        className="group relative block p-8 bg-charcoal/50 border border-white/[0.04] hover:border-gold/20 transition-all duration-700 h-full"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
          <SvgIcon
            svg={iconSvg}
            className="w-20 h-20 text-gold/50 group-hover:text-gold transition-colors duration-500 mb-6"
          />
          <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-light transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-500">
            {service.description}
          </p>
          <div className="mt-6 flex items-center gap-2 text-gold/40 lg:text-gold/0 group-hover:text-gold/60 transition-all duration-500 text-xs tracking-wider uppercase">
            <span>Dowiedz się więcej</span>
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
