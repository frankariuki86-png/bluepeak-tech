import './Clients.css'

function Clients() {
  const clients = [
    { name: 'Wynes Institute', logo: '📚', description: 'Educational Institution' },
    { name: 'Tech Startup Ltd', logo: '💻', description: 'Technology Company' },
    { name: 'Fashion Boutique', logo: '👗', description: 'Retail Business' },
    { name: 'Restaurant Chain', logo: '🍽️', description: 'Hospitality' },
    { name: 'Finance Corp', logo: '💰', description: 'Financial Services' },
    { name: 'Healthcare Clinic', logo: '🏥', description: 'Medical Services' },
  ]

  return (
    <section className="clients section">
      <div className="container">
        <div className="section-title">
          <h2>Our Clients</h2>
          <p>Trusted by leading organizations across industries</p>
        </div>

        <div className="clients-grid">
          {clients.map((client, idx) => (
            <div key={idx} className="client-card">
              <div className="client-logo">{client.logo}</div>
              <h3>{client.name}</h3>
              <p>{client.description}</p>
            </div>
          ))}
        </div>

        <div className="clients-info">
          <p>Join 50+ satisfied clients using our solutions for digital transformation</p>
          <a href="#contact" className="btn-secondary">Read Success Stories</a>
        </div>
      </div>
    </section>
  )
}

export default Clients
