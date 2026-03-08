import './Projects.css'

function Projects() {
  const products = [
    {
      category: 'Human Capital Management',
      description: 'Streamline HR operations with our bluepeak HCM platform. Manage employee data, automate payroll, track benefits, and ensure compliance—all in one system. Reduce HR manual work by up to 60%.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=85',
      items: [
        'bluepeak Human Capital Management (HCM)',
        'Employee Data Management',
        'Payroll Integration'
      ]
    },
    {
      category: 'Investment Management',
      description: 'Empower savings groups and investment clubs with secure digital platforms. Our bluepeak SACCO and Chama solutions provide real-time tracking, transparent reporting, and secure fund management for investment communities.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=85',
      items: [
        'bluepeak SACCO Solutions',
        'bluepeak Chama Portal',
        'Investment Tracking & Reporting'
      ]
    },
    {
      category: 'Finance Management',
      description: 'Manage finances with complete visibility. Our bluepeak Finance suite handles payroll processing, budgeting, expense tracking, and financial reporting—helping you maintain accuracy and compliance while reducing audit risks.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=85',
      items: [
        'bluepeak Payroll System',
        'bluepeak Business Suite',
        'Financial Reporting & Analytics'
      ]
    },
    {
      category: 'Customer Relationship Management',
      description: 'Build stronger customer relationships with integrated CRM. Track interactions, manage service requests, automate communications, and gain insights that drive customer retention and revenue growth.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d1d979b?w=600&h=400&fit=crop&q=85',
      items: [
        'bluepeak Business Suite',
        'Customer Service Desk (OTRS)',
        'Customer Communication Platform'
      ]
    },
    {
      category: 'Security Solutions',
      description: 'Protect your business from evolving cyber threats. We implement enterprise-grade security including endpoint protection, network security, and firewall solutions to safeguard your critical assets.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13cf712?w=600&h=400&fit=crop&q=85',
      items: [
        'Sophos Endpoint Protection',
        'Juniper Network Security',
        'Pfsense Firewall Solutions'
      ]
    },
    {
      category: 'Web Solutions',
      description: 'Build powerful online presence with modern web platforms. From e-commerce sites to content management systems, we create responsive, scalable solutions that convert visitors into customers.  ',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop&q=85',
      items: [
        'E-Commerce Platforms',
        'Content Management Systems',
        'Progressive Web Applications'
      ]
    },
    {
      category: 'Restaurant Chain Management',
      description: 'Comprehensive platform for restaurant operations including ordering, inventory, table management, and analytics. Streamline operations across multiple locations with real-time dashboard and customer management.',
      image: 'https://images.unsplash.com/photo-1504674900152-b8d46e27c91d?w=600&h=400&fit=crop&q=85',
      items: [
        'Multi-Location Management',
        'Orders & Inventory Tracking',
        'Customer Analytics'
      ],
      link: 'https://hotel-mega-park-git-main-francis-projects-f7c3f8a7.vercel.app/'
    },
    {
      category: 'Educational Institute Management',
      description: 'Complete management system for educational institutions including student records, academics, attendance, and reporting. Streamline administrative operations and improve student engagement.',
      image: 'https://images.unsplash.com/photo-1427504494785-cdaf7707a0af?w=600&h=400&fit=crop&q=85',
      items: [
        'Student Information System',
        'Academic Management',
        'Attendance & Performance Tracking'
      ],
      link: 'https://frankariuki86-png.github.io/waynes-institute/'
    },
    {
      category: 'Bulk SMS System',
      description: 'Enterprise SMS marketing and communication platform for reaching customers instantly. Send bulk messages, manage campaigns, and track delivery with advanced analytics and segmentation.',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop&q=85',
      items: [
        'Bulk Message Sending',
        'Campaign Management',
        'SMS Analytics & Reporting'
      ],
      link: 'https://bulk-sms-system1-git-main-francis-projects-f7c3f8a7.vercel.app/'
    },
    {
      category: 'Employee Performance & Analytics',
      description: 'bluepeak employee performance evaluation and analytics system. Track employee goals, appraisals, development plans, and generate comprehensive performance reports for data-driven HR decisions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=85',
      items: [
        'Performance Evaluations',
        'Goal Tracking & Management',
        'Analytics & Reporting'
      ]
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2>Products We Offer</h2>
          <p>Comprehensive software and technology solutions for every business need</p>
        </div>

        <div className="products-grid">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.category} className="product-image" loading="lazy" decoding="async" />
                <div className="product-overlay">
                  <h3>{product.category}</h3>
                  <p>{product.description}</p>
                  <a href={product.link || "#contact"} className="overlay-link">Learn More →</a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href={product.link || "#contact"}>{product.category}</a></h4>
                <ul>
                  {product.items.map((item, i) => (
                    <li key={i}><a href={product.link || "#contact"}>• {item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p>Ready to transform your business? Discover how our solutions deliver measurable results.</p>
          <a href="#contact" className="btn btn-primary">Schedule a Demo</a>
        </div>
      </div>
    </section>
  )
}

export default Projects
