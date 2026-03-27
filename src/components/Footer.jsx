export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg text-white/60">
              Anna Jakubik
            </span>
            <span className="text-xs text-white/20 tracking-wider uppercase">
              Periodontologia
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-white/20">
            <a href="#about" className="hover:text-white/40 transition-colors">O mnie</a>
            <a href="#services" className="hover:text-white/40 transition-colors">Leczenie</a>
            <a href="#contact" className="hover:text-white/40 transition-colors">Kontakt</a>
          </div>

          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} annajakubik.pl
          </p>
        </div>
      </div>
    </footer>
  )
}
