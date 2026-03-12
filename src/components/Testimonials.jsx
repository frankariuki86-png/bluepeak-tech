import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Grace Njeri',
      company: 'Restaurant Chain Management',
      text: 'BluePeak helped us unify orders, inventory, and branch reporting across our outlets. We now make faster decisions with real-time dashboards.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Daniel Otieno',
      company: 'Employee Performance & Analytics',
      text: 'The performance platform gave our managers clear goal tracking and appraisal workflows. Team productivity and accountability improved in one quarter.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Amina Yusuf',
      company: 'ecommerce website',
      text: 'Our ecommerce website now converts more visitors with a cleaner checkout and better mobile performance. Sales and repeat purchases are both up.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Real feedback from satisfied clients</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={`${testimonial.name} from ${testimonial.company}`} loading="lazy" decoding="async" />
              </div>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">{testimonial.name}</div>
              <div className="testimonial-role">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

