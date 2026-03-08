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
      image: 'https://source.unsplash.com/800x500/?human,resources,hrm'
    },
    {
      id: 2,
      title: 'Digital Transformation: What It Means and Why It Matters',
      excerpt: 'Digital transformation isn\'t just about technology—it\'s about changing how your business operates. Learn the key pillars and how to successfully navigate the journey.',
      author: 'BluePeak Consulting',
      date: 'March 1, 2026',
      category: 'Strategy',
      image: 'https://source.unsplash.com/800x500/?digital,transformation,business'
    },
    {
      id: 3,
      title: 'Why Enterprise Software Integration Matters in 2026',
      excerpt: 'Organizations are drowning in data spread across disconnected systems. Here\'s how system integration creates a single source of truth and unlocks better decision-making.',
      author: 'BluePeak Tech',
      date: 'February 28, 2026',
      category: 'Technology',
      image: 'https://source.unsplash.com/800x500/?integration,system,technology'
    },
    {
      id: 4,
      title: 'Building Secure Custom Applications: Best Practices Guide',
      excerpt: 'Security can\'t be an afterthought. Learn the key practices for building applications that protect user data, ensure compliance, and maintain customer trust.',
      author: 'Security Team',
      date: 'February 20, 2026',
      category: 'Security',
      image: 'https://source.unsplash.com/800x500/?security,application,code'
    },
    {
      id: 5,
      title: 'CRM Implementation Success: Lessons from 50+ Deployments',
      excerpt: 'Learn what separates successful CRM deployments from failed ones. Discover the critical factors that ensure adoption, user engagement, and measurable business impact.',
      author: 'BluePeak Experts',
      date: 'February 15, 2026',
      category: 'Best Practices',
      image: 'https://source.unsplash.com/800x500/?crm,sales,customer'
    },
    {
      id: 6,
      title: 'Mobile-First Strategy: Reaching Customers Where They Are',
      excerpt: 'With 70% of customers accessing services via mobile, ignoring mobile platforms costs you revenue. Explore mobile technologies that drive engagement and growth.',
      author: 'Mobile Team',
      date: 'February 10, 2026',
      category: 'Strategy',
      image: 'https://source.unsplash.com/800x500/?mobile,app,development'
    },
    {
      id: 7,
      title: 'The Total Cost of Ownership: Why Custom Apps Are Worth the Investment',
      excerpt: 'Off-the-shelf software often costs more in the long run. Understand how custom applications reduce operational costs and adapt to your unique business needs.',
      author: 'BluePeak Consultants',
      date: 'February 5, 2026',
      category: 'ROI',
      image: 'https://source.unsplash.com/800x500/?custom,application,software'
    },
    {
      id: 8,
      title: 'Cloud Migration Without the Headaches: A Complete Roadmap',
      excerpt: 'Moving to the cloud doesn\'t have to be risky. Here\'s how to plan, execute, and optimize your cloud migration while minimizing disruption.',
      author: 'Cloud Experts',
      date: 'January 30, 2026',
      category: 'Infrastructure',
      image: 'https://source.unsplash.com/800x500/?cloud,migration,server'
    },
    {
      id: 9,
      title: 'AI in Enterprise Software: Beyond the Hype',
      excerpt: 'AI is reshaping business intelligence and automation. Discover practical applications of AI that deliver measurable business value today.',
      author: 'Innovation Team',
      date: 'January 25, 2026',
      category: 'Innovation',
      image: 'https://source.unsplash.com/800x500/?ai,artificial,intelligence'
    },
    {
      id: 10,
      title: 'Why Your Business Needs a Dedicated Technology Partner',
      excerpt: 'Technology is central to business success, but managing it requires expertise. Learn why outsourcing IT allows you to focus on core business while experts handle your tech.',
      author: 'BluePeak Leadership',
      date: 'January 20, 2026',
      category: 'Insights',
      image: 'https://source.unsplash.com/800x500/?technology,partner,business'
    }
  ]

  return (
    <section className="blog section">
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
