import { motion } from 'framer-motion'
import './About.css'

function About() {
  const values = [
    { title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
    { title: 'Expert Team', description: 'Experienced professionals in all areas' },
    { title: 'Transparent', description: 'Clear communication and honest pricing' },
    { title: 'Reliable', description: '24/7 support and maintenance' }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About BluePeak</h2>
          <p>Transforming enterprises through innovative technology solutions</p>
        </div>

        <div className="mission-statement">
          <h3>Our Mission</h3>
          <p>At BluePeak, we empower enterprises to achieve digital transformation through innovative, reliable, and cost-effective technology solutions. We partner with organizations to streamline operations, enhance decision-making, and unlock new growth opportunities in the digital economy.</p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Who We Are</h3>
            <p>
              BluePeak Tech Solutions is a professional web development, design, and IT services company based in Nakuru, Kenya. We provide high-quality solutions for local and international clients.
            </p>
            <p>
              With a team of experienced professionals, we specialize in quick turnaround times, transparent communication, and reliable service delivery.
            </p>

            <div className="values-grid">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="value-icon">✓</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="about-image-container">
              <img 
                src="https://picsum.photos/seed/bluepeak-about/800/600" 
                alt="BluePeak Team Working Together" 
                loading="lazy"
              />
              <div className="about-overlay">
                <h3>Our Professional Team</h3>
                <p>Dedicated experts committed to delivering exceptional IT solutions and transforming your business</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
