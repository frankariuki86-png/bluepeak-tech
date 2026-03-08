import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Blog from './components/Blog'
import Clients from './components/Clients'
import Partners from './components/Partners'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import './styles/mobile.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CaseStudies />
        <Blog />
        <Clients />
        <Partners />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
