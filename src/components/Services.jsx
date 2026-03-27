import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Zapalenie dziąseł',
    description: 'Kompleksowa diagnostyka i leczenie stanów zapalnych dziąseł — od skalingu po zaawansowane procedury chirurgiczne.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Zapalenie przyzębia',
    description: 'Diagnostyka i leczenie choroby przyzębia — zapobieganie powstawaniu kieszeni przyzębnych, utracie kości i ruchomości zębów.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M17 22v10M23 22v10M20 22v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'Recesje dziąseł',
    description: 'Precyzyjne techniki mikrochirurgiczne z wykorzystaniem przeszczepów tkanki łącznej — pokrycie odsłoniętych szyjek zębowych.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="4" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M12 28 C16 12, 24 12, 28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 28 C16 20, 24 20, 28 28" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Augmentacja dziąseł',
    description: 'Pogrubienie dziąsła przed leczeniem ortodontycznym — zapobieganie pogłębianiu recesji podczas noszenia aparatu stałego.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 20h24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M20 8v24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M12 16l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Wydłużenie koron klinicznych',
    description: 'Chirurgiczne modelowanie dziąsła i kości w celu odsłonięcia większej części zęba — przywrócenie proporcjonalnej, zbalansowanej estetyki.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M10 30V14a2 2 0 012-2h16a2 2 0 012 2v16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M16 30V20h8v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 12V8M26 12V8" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Tkanki wokół implantów',
    description: 'Specjalistyczne leczenie stanów zapalnych tkanek wokół implantów — ochrona integracji i długoterminowego powodzenia leczenia.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="15" cy="17" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="25" cy="17" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M14 25c2 3 10 3 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Wędzidełka warg i języka',
    description: 'Frenulektomia i miofrenuloplastyka przy skróconym wędzidełku — przywrócenie prawidłowej funkcji mowy, oddychania i połykania.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M10 20c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M16 18c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 22v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Choroby błony śluzowej',
    description: 'Diagnostyka i leczenie aft, zmian zapalnych i chorób błony śluzowej jamy ustnej — gdzie medycyna stomatologiczna spotyka codzienny komfort.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 20h8M24 20h8" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <path d="M20 8v8M20 24v8" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 18l4 4M22 18l-4 4" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 bg-charcoal/50 border border-white/[0.04] hover:border-gold/20 transition-all duration-700"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        <div className="text-gold/50 group-hover:text-gold transition-colors duration-500 mb-6">
          {service.icon}
        </div>
        <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-light transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-500">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { once: true, margin: '-100px' })

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
            Periodontologia zajmuje się zapobieganiem, diagnostyką i&nbsp;leczeniem chorób przyzębia oraz błony śluzowej, czyli całą jamą ustną otaczającą zęby.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.02]">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
