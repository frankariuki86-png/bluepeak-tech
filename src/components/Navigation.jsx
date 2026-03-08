import { useState } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

function Navigation({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  const handleDropdownClick = (parentId) => {
    scrollToSection(parentId)
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { 
      label: 'Products', 
      id: 'projects',
      dropdown: [
        'Human Capital Management',
        'Investment Management',
        'Finance Management',
        'Academic Management',
        'Customer Relationship Management',
        'Security Solutions',
        'Mobile Solutions',
        'Web Solutions'
      ]
    },
    {
      label: 'Services',
      id: 'services',
      dropdown: [
        'Consulting',
        'Application Development',
        'System Integration',
        'IT Infrastructure',
        'Technical Support',
        'IT Training'
      ]
    },
    { 
      label: 'Blog', 
      id: 'blog',
      dropdown: [
        'Latest Articles',
        'Technology Trends',
        'Case Studies',
        'Best Practices',
        'Industry Insights',
        'Digital Transformation'
      ]
    },
    { 
      label: 'About', 
      id: 'about',
      dropdown: [
        'Our Story',
        'Our Team',
        'Our Mission',
        'Our Values',
        'Why Choose Us',
        'Success Stories'
      ]
    },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="nav-container container">
        <button className="nav-logo" onClick={() => scrollToSection('hero')} style={{cursor: 'pointer', background: 'none', border: 'none'}} aria-label="BluePeak Tech Solutions Home">
          <img src="/bluepeak-solution-logo.jpeg" alt="BluePeak Tech Solutions Logo" className="logo-img" loading="lazy" />
          <span className="logo-text">BluePeak</span>
        </button>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={`nav-item ${activeDropdown === item.label ? 'active' : ''}`}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={() => scrollToSection(item.id)}>
                {item.label}
                {item.dropdown && <span className="dropdown-arrow">▼</span>}
              </button>
              {item.dropdown && (
                <div className={`dropdown ${activeDropdown === item.label ? 'show' : ''}`}>
                  {item.dropdown.map((subitem, idx) => (
                    <button 
                      key={idx} 
                      className="dropdown-item"
                      onClick={() => handleDropdownClick(item.id)}
                    >
                      {subitem}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => scrollToSection('contact')}
            >
              Get a Demo
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navigation
