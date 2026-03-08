import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Kenya',
      text: 'BluePeak\'s HCM solution transformed our HR operations. We saved thousands in manual processing costs and our team is happier than ever.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=85'
    },
    {
      name: 'Michael Chen',
      company: 'FinTech Innovations',
      text: 'The custom CRM BluePeak built increased our sales by 35% in just 6 months. Their team understood our business deeply and delivered perfectly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=85'
    },
    {
      name: 'Amara Okonkwo',
      company: 'EduSmart University',
      text: 'Implementing their UMIS system was smooth and professional. Our admin team\'s workload dropped significantly and students love the portal.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=85'
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

