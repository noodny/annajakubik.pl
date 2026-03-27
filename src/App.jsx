import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import Education from './components/Education'
import Conditions from './components/Conditions'
import Locations from './components/Locations'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Education />
      <Conditions />
      <Locations />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
