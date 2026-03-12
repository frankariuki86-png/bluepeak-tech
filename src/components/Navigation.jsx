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
        { label: 'Human Capital Management', id: 'product-human-capital-management' },
        { label: 'Appointment Booking System', id: 'product-appointment-booking-system' },
        { label: 'Marketing Automation Platform', id: 'product-marketing-automation-platform' },
        { label: 'Customer Relationship Management', id: 'product-customer-relationship-management' },
        { label: 'Inventory & POS System', id: 'product-inventory-pos-system' },
        { label: 'Web Solutions', id: 'product-web-solutions' },
        { label: 'Restaurant Chain Management', id: 'product-restaurant-chain-management' },
        { label: 'Educational Institute Management', id: 'product-educational-institute-management' },
        { label: 'Bulk SMS System', id: 'product-bulk-sms-system' },
        { label: 'Employee Performance & Analytics', id: 'product-employee-performance-analytics' },
      ]
    },
    {
      label: 'Services',
      id: 'services',
      dropdown: [
        { label: 'Consulting', id: 'service-consulting' },
        { label: 'Application Development', id: 'service-application-development' },
        { label: 'System Integration', id: 'service-system-integration' },
        { label: 'IT Infrastructure', id: 'service-it-infrastructure' },
        { label: 'Technical Support', id: 'service-technical-support' },
        { label: 'IT Training', id: 'service-it-training' },
      ]
    },
    { 
      label: 'Blog', 
      id: 'blog',
      dropdown: [
        { label: 'HCM & HR Technology', id: 'blog' },
        { label: 'Digital Transformation', id: 'blog' },
        { label: 'Enterprise Integration', id: 'blog' },
        { label: 'Application Security', id: 'blog' },
      ]
    },
    { 
      label: 'About', 
      id: 'about',
      dropdown: [
        { label: 'About BluePeak', id: 'about' },
        { label: 'Our Team', id: 'team' },
        { label: 'Our Services', id: 'services' },
        { label: 'Contact Us', id: 'contact' },
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
              <button onClick={() => {
                if (item.dropdown && window.innerWidth <= 768) {
                  setActiveDropdown(prev => prev === item.label ? null : item.label)
                } else {
                  scrollToSection(item.id)
                }
              }}>
                {item.label}
                {item.dropdown && <span className="dropdown-arrow">▼</span>}
              </button>
              {item.dropdown && (
                <div className={`dropdown ${activeDropdown === item.label ? 'show' : ''}`}>
                  {item.dropdown.map((subitem, idx) => (
                    <button 
                      key={idx} 
                      className="dropdown-item"
                      onClick={() => { scrollToSection(subitem.id); setActiveDropdown(null) }}
                    >
                      {subitem.label}
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
