import './Hero.css'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          <h1>Software Solutions for Enterprise Transformation</h1>
          <p className="hero-subtitle">Empowering businesses with innovative technology</p>
          <p className="hero-tagline">BluePeak delivers custom IT solutions that reduce operational costs, increase efficiency, and drive digital transformation. From HCM systems to custom applications, we help enterprises modernize and scale.</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </button>
            <button 
              className="btn btn-secondary btn-lg"
              onClick={() => scrollToSection('projects')}
            >
              View Solutions
            </button>
          </div>
          
          <div className="hero-trust">
            <span>✓ 50+ Enterprise Clients</span>
            <span>✓ 15+ Years Industry Experience</span>
            <span>✓ 24/7 Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
