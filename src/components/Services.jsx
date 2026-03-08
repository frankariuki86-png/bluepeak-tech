import './Services.css'

function Services() {
  const services = [
    {
      title: 'Consulting',
      description: 'We offer comprehensive business and technology consulting based on our in-depth IT expertise, proven best practices, and vast industry experience. Our consultants work closely with you to define requirements, identify opportunities, and implement strategic solutions that drive growth.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=85'
    },
    {
      title: 'Application Development',
      description: 'We help define your requirements, write specifications and design, develop, test and integrate software across multiple platforms. This enables you to acquire high-quality custom applications tailored to your specific business needs.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=85'
    },
    {
      title: 'System Integration',
      description: 'We help you attain integration maturity from data synchronization, functional application integration, to seamless and secure business-process integration and optimization. Our solutions enable seamless data flow across your enterprise.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop&q=85'
    },
    {
      title: 'IT Infrastructure',
      description: 'Cost effectively solve your key infrastructure challenges and grow IT as your business needs demand with modular, open, building-block based infrastructure solutions. We design scalable systems that support your growth.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=85'
    },
    {
      title: 'Technical Support',
      description: 'Critical to keeping your systems running, our technical support services are designed to protect your multi-vendor environment. We offer flexible service level options and response times designed to meet your specific business needs.',
      image: 'https://images.unsplash.com/photo-1516387938699-a93023642d8f?w=600&h=400&fit=crop&q=85'
    },
    {
      title: 'Customer Relationship Management',
      description: 'Build stronger customer relationships with integrated CRM solutions. Track interactions, manage service requests, automate communications, and gain insights that drive customer retention and revenue growth.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d1d979b?w=600&h=400&fit=crop&q=85'
    },
    {
      title: 'IT Training',
      description: 'Training is integral to maximizing your organization\'s investment in technology. We provide onsite training, corporate training and professional certifications for our range of products and emerging technologies.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=85'
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Services We Offer</h2>
          <p>Professional IT solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" loading="lazy" decoding="async" />
                <div className="service-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="overlay-link">Learn More →</a>
                </div>
              </div>
              <div className="service-content">
                <h3><a href="#contact">{service.title}</a></h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Need a comprehensive solution? Let our experts help you select the right services for your business.</p>
          <a href="#contact" className="btn btn-primary">Discuss Your Needs</a>
        </div>
      </div>
    </section>
  )
}

export default Services
