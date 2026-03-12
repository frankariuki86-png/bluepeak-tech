import './Blog.css'

function Blog() {
  const articles = [
    {
      id: 1,
      title: 'How HCM Systems Reduce HR Costs by 40%: A Case Study',
      excerpt: 'Discover how implementing a modern HCM system helped a mid-size company automate payroll, reduce manual work, and improve employee satisfaction. Real results with measurable ROI.',
      author: 'BluePeak Team',
      date: 'March 6, 2026',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Digital Transformation: What It Means and Why It Matters',
      excerpt: 'Digital transformation isn\'t just about technology—it\'s about changing how your business operates. Learn the key pillars and how to successfully navigate the journey.',
      author: 'BluePeak Consulting',
      date: 'March 1, 2026',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      title: 'Why Enterprise Software Integration Matters in 2026',
      excerpt: 'Organizations are drowning in data spread across disconnected systems. Here\'s how system integration creates a single source of truth and unlocks better decision-making.',
      author: 'BluePeak Tech',
      date: 'February 28, 2026',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 4,
      title: 'Building Secure Custom Applications: Best Practices Guide',
      excerpt: 'Security can\'t be an afterthought. Learn the key practices for building applications that protect user data, ensure compliance, and maintain customer trust.',
      author: 'Security Team',
      date: 'February 20, 2026',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80'
    }
  ]

  return (
    <section id="blog" className="blog section">
      <div className="container">
        <div className="section-title">
          <h2>Latest from Our Blog</h2>
          <p>Insights, trends, and best practices for digital transformation</p>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article key={article.id} className="blog-card">
              <div className="blog-image">
                <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
                <div className="blog-overlay">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a href="#contact" className="overlay-link">Read Article →</a>
                </div>
              </div>
              <div className="blog-content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-author">{article.author}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <a href="#contact" className="read-more">Read Article →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <p>Want to see how BluePeak solutions drive real results? Let's discuss your transformation journey.</p>
          <a href="#contact" className="btn btn-primary">Get a Free Consultation</a>
        </div>
      </div>
    </section>
  )
}

export default Blog
