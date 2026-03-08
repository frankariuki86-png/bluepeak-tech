import './CaseStudies.css'

function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'HCM System Implementation: 60% HR Cost Reduction',
      client: 'Mid-Size Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual HR processes consuming 40+ hours weekly with frequent errors',
      solution: 'Implemented bluepeak HCM system with automated payroll, benefits, and compliance',
      results: [
        '60% reduction in manual HR work',
        '$150K annual savings in operational costs',
        '99.2% payroll accuracy',
        '45% faster employee onboarding'
      ],
      metric: '60%',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Custom CRM Development: 35% Sales Growth',
      client: 'B2B SaaS Company',
      industry: 'Software Services',
      challenge: 'Fragmented customer data across multiple platforms affecting sales efficiency',
      solution: 'Developed custom CRM integrating all sales channels with automated workflows',
      results: [
        '35% increase in closed deals',
        '50% faster deal cycle time',
        '89% customer retention improvement',
        'Real-time sales pipeline visibility'
      ],
      metric: '35%',
      icon: '📈'
    },
    {
      id: 3,
      title: 'Academic System Migration: Operational Efficiency +80%',
      client: 'Private University',
      industry: 'Education',
      challenge: 'Legacy paper-based system causing delays and data inconsistencies',
      solution: 'Implemented bluepeak UMIS with student portal and automated grading',
      results: [
        '80% improvement in administrative efficiency',
        '95% student portal adoption rate',
        'Zero transcript processing delays',
        '24/7 student self-service access'
      ],
      metric: '80%',
      icon: '🎓'
    },
    {
      id: 4,
      title: 'Enterprise Integration Project: 3 Systems Unified',
      client: 'Large Financial Services Firm',
      industry: 'Finance',
      challenge: 'Data silos preventing unified customer view and decision-making',
      solution: 'Integrated Finance, CRM, and Reporting systems with real-time data sync',
      results: [
        '100% data synchronization across systems',
        '25% faster report generation',
        'Single integrated customer dashboard',
        '40% reduction in query resolution time'
      ],
      metric: '100%',
      icon: '🔗'
    },
    {
      id: 5,
      title: 'Mobile App Launch: 50K Users in 3 Months',
      client: 'Fintech Startup',
      industry: 'Financial Technology',
      challenge: 'Need to reach customers via mobile with limited development team',
      solution: 'Developed cross-platform mobile app with SMS integration and mobile wallet',
      results: [
        '50K active users in first 3 months',
        '4.7 star app store rating',
        'SMS engagement rate: 65%',
        '$2M revenue generated'
      ],
      metric: '50K',
      icon: '📱'
    },
    {
      id: 6,
      title: 'Security Infrastructure Upgrade: 100% Threat Coverage',
      client: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Vulnerable to cyber attacks with patient data at risk',
      solution: 'Deployed Sophos endpoint protection and Juniper network security',
      results: [
        'Zero successful security breaches',
        'HIPAA compliance achieved',
        'Real-time threat detection',
        '99.99% uptime maintained'
      ],
      metric: '100%',
      icon: '🔒'
    }
  ]

  return (
    <section className="case-studies section">
      <div className="container">
        <div className="section-title">
          <h2>Success Stories: Real Results from Real Clients</h2>
          <p>See how BluePeak solutions delivered measurable business impact across industries</p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div className="case-metric">
                <span className="metric-icon">{study.icon}</span>
                <span className="metric-value">{study.metric}</span>
              </div>
              
              <h3>{study.title}</h3>
              
              <div className="case-info">
                <p><strong>{study.client}</strong></p>
                <p className="industry">{study.industry}</p>
              </div>

              <div className="case-challenge">
                <h4>Challenge</h4>
                <p>{study.challenge}</p>
              </div>

              <div className="case-results">
                <h4>Results Achieved</h4>
                <ul>
                  {study.results.map((result, idx) => (
                    <li key={idx}>✓ {result}</li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="learn-more">Discuss Your Transformation →</a>
            </div>
          ))}
        </div>

        <div className="case-studies-cta">
          <h3>Ready to achieve similar results?</h3>
          <p>Let's discuss how BluePeak can transform your business and deliver measurable ROI.</p>
          <a href="#contact" className="btn btn-primary">Schedule Your Free Strategy Session</a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
