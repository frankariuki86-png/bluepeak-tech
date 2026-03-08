import { motion } from 'framer-motion'
import './Pricing.css'

function Pricing() {
  const plans = [
    {
      name: 'Portfolio Site',
      price: '12,000 - 15,000',
      features: [
        'Responsive Design',
        'Galleries & Portfolios',
        'Contact Forms',
        'Social Integration',
        'Basic SEO'
      ],
      highlighted: false
    },
    {
      name: 'Company Profile',
      price: '20,000 - 25,000',
      features: [
        'Company Profile Website',
        'Responsive Design',
        'Blog Setup',
        'Social Media Integration',
        'Location Integration',
        'Basic Analytics'
      ],
      highlighted: true
    },
    {
      name: 'E-commerce',
      price: '45,000 - 50,000',
      features: [
        '100+ Products',
        'Payment Integration',
        'Inventory Management',
        'SEO Optimized',
        'Customer Dashboard',
        'Analytics & Reports'
      ],
      highlighted: false
    },
    {
      name: 'Educational',
      price: '80,000 - 115,000',
      features: [
        'Student & Lecturer Portals',
        'Online Registration',
        'Course Management',
        'Payment Integration',
        'Event Calendars',
        '24/7 Support'
      ],
      highlighted: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-title">
          <h2>Pricing Plans</h2>
          <p>Flexible pricing for projects of all sizes</p>
        </div>

        <motion.div
          className="pricing-grid grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`pricing-card card ${plan.highlighted ? 'highlighted' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">KSH</span>
                <span className="amount">{plan.price.split(' - ')[0]}</span>
              </div>
              <p className="price-note">Starting at</p>
              <ul className="features-list">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx}>
                    <span>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary btn-block">
                Get Quote
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="pricing-note">
          <p>Custom quotes available for specialized projects. <a href="#contact">Contact us</a> for details.</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
