import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      }, 3000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="contact" className="contact section" aria-label="Contact us section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's talk about it</p>
        </div>

        <div className="contact-grid grid-2">
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact form">
              {submitted && (
                <motion.div 
                  className="success-message"
                  role="alert"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! We'll be in touch soon.
                </motion.div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name <span aria-label="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? 'error' : ''}
                  required
                  aria-required="true"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span className="error-text" id="name-error" role="alert">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span aria-label="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={errors.email ? 'error' : ''}
                  required
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span className="error-text" id="email-error" role="alert">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone <span aria-label="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7xx xxx xxx"
                  className={errors.phone ? 'error' : ''}
                  required
                  aria-required="true"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && <span className="error-text" id="phone-error" role="alert">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  aria-label="Message subject (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span aria-label="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                  className={errors.message ? 'error' : ''}
                  required
                  aria-required="true"
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && <span className="error-text" id="message-error" role="alert">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-block" aria-label="Send contact form">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-info card">
              <h3>Contact Info</h3>
              
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+254711768878">+254 711 768 878</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:bluepeaktechsolution@gmail.com">bluepeaktechsolution@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Nakuru, Kenya<br />Available Worldwide</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">⏰</div>
                <div>
                  <h4>Hours</h4>
                  <p>24 Hours Available<br />Mon - Sun</p>
                </div>
              </div>

              <div className="social-links-contact">
                <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
                <a href="https://www.facebook.com/share/18Baj4ovqz/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/bluepeaktechsolution?igsh=YnJrMTNsNHV3aGo0" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://wa.me/254711768878" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href="https://www.tiktok.com/@bluepeaktechsolution?_r=1&_t=ZS-94dCThzBxBZ" target="_blank" rel="noopener noreferrer">TikTok</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
