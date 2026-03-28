"use client";

import { motion } from "framer-motion";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Solid obsidian base */}
      <div className="absolute inset-0 bg-obsidian" />

      {/* Layer 2: Deep green → obsidian vertical gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-green/50 via-obsidian/80 to-obsidian" />

      {/* Layer 3: Green radial glow - top left */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(90,122,106,0.18), transparent)",
        }}
      />

      {/* Layer 4: Gold radial glow - bottom right */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 75% 75%, rgba(196,162,101,0.07), transparent)",
        }}
      />

      {/* Layer 5: Fractal noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: NOISE_SVG }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight"
        >
          Periodontologia
          <br />
          <span className="text-gold">z precyzją</span>
          <br />i troską
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          Holistyczne podejście do zdrowia dziąseł i&nbsp;jamy ustnej&nbsp;-
          <br className="hidden md:block" />
          kompleksowa diagnostyka, leczenie zachowawcze i&nbsp;chirurgiczne.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group relative px-10 py-4 bg-gold text-charcoal-dark font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
          >
            <span className="relative z-10">Umów konsultację</span>
            <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-500 tracking-wider uppercase text-sm"
          >
            Dowiedz się więcej
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
        />
      </motion.div>

      {/* Layer 7: Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  );
}
