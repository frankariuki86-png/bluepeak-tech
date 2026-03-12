import './Projects.css'

function Projects() {
  const products = [
    {
      category: 'Human Capital Management',
      description: 'Streamline HR operations with our bluepeak HCM platform. Manage employee data, automate payroll, track benefits, and ensure compliance—all in one system. Reduce HR manual work by up to 60%.',
      image: '/bluepeak Human Capital Management.jpeg',
      items: [
        'bluepeak Human Capital Management (HCM)',
        'Employee Data Management',
        'Payroll Integration'
      ]
    },
    {
      category: 'Appointment Booking System',
      description: 'Simplify scheduling with an intelligent appointment booking platform. Manage calendars, automate reminders, and reduce no-shows with SMS and email notifications for staff and customers.',
      image: '/bluepeak Appointment Booking System.jpeg',
      items: [
        'Online Appointment Scheduling',
        'Automated Reminders & Notifications',
        'Calendar & Staff Availability Management'
      ]
    },
    {
      category: 'Marketing Automation Platform',
      description: 'Launch and optimize campaigns with a complete marketing automation platform. Segment audiences, run multi-channel journeys, and track campaign ROI from one dashboard.',
      image: '/bluepeak Marketing Automation Platform.jpeg',
      items: [
        'Lead Segmentation & Scoring',
        'Email and SMS Campaign Automation',
        'Campaign Performance Analytics'
      ]
    },
    {
      category: 'Customer Relationship Management',
      description: 'Build stronger customer relationships with integrated CRM. Track interactions, manage service requests, automate communications, and gain insights that drive customer retention and revenue growth.',
      image: '/bluepeak Customer Relationship Management (2).jpeg',
      items: [
        'bluepeak Business Suite',
        'Customer Service Desk (OTRS)',
        'Customer Communication Platform'
      ]
    },
    {
      category: 'Inventory & POS System',
      description: 'Run sales and stock operations in one place with an integrated inventory and POS solution. Track stock levels in real time, process transactions quickly, and generate accurate sales reports.',
      image: '/bluepeak point of sale.jpeg',
      items: [
        'Real-Time Inventory Tracking',
        'Point of Sale Billing & Receipts',
        'Sales, Stock, and Profit Reports'
      ]
    },
    {
      category: 'Web Solutions',
      description: 'Build powerful online presence with modern web platforms. From e-commerce sites to content management systems, we create responsive, scalable solutions that convert visitors into customers.  ',
      image: '/bluepeak Web Solutions.jpg',
      items: [
        'E-Commerce Platforms',
        'Content Management Systems',
        'Progressive Web Applications'
      ]
    },
    {
      category: 'Restaurant Chain Management',
      description: 'Comprehensive platform for restaurant operations including ordering, inventory, table management, and analytics. Streamline operations across multiple locations with real-time dashboard and customer management.',
      image: '/bluepeak Restaurant Chain Management.jpeg',
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
      image: '/blupeak Educational Institute Management.jpeg',
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
      image: '/bluepeak Bulk SMS System.jpeg',
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
      image: '/bluepeak Employee Performance & Analytics.jpeg',
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
            <div key={idx} className="product-card" id={`product-${product.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>
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
