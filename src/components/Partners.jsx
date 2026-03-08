import './Partners.css'

function Partners() {
  const partners = [
    { name: 'Sophos', logo: '🛡️', category: 'Security' },
    { name: 'Juniper Networks', logo: '🌐', category: 'Networking' },
    { name: 'Pfsense', logo: '🔐', category: 'Firewall' },
    { name: 'AWS', logo: '☁️', category: 'Cloud Services' },
    { name: 'Microsoft Azure', logo: '📦', category: 'Cloud Platform' },
    { name: 'Oracle', logo: '🗄️', category: 'Database' },
  ]

  return (
    <section className="partners section">
      <div className="container">
        <div className="section-title">
          <h2>Technology Partners</h2>
          <p>We partner with industry-leading technology providers</p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, idx) => (
            <div key={idx} className="partner-card">
              <div className="partner-logo">{partner.logo}</div>
              <h3>{partner.name}</h3>
              <p>{partner.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
