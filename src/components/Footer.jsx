import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/bluepeak', icon: 'linkedin' },
    { name: 'Facebook', url: 'https://facebook.com/bluepeak', icon: 'facebook' },
    { name: 'Twitter', url: 'https://twitter.com/bluepeak', icon: 'twitter' },
    { name: 'Instagram', url: 'https://instagram.com/bluepeak', icon: 'instagram' }
  ]

  const renderIcon = (icon) => {
    const icons = {
      linkedin: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      facebook: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      twitter: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 002.856-3.415 9.957 9.957 0 01-2.828.856 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      instagram: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.5c2.612 0 2.896.01 3.916.057 1.022.046 1.614.21 1.981.348.497.195.85.427 1.223.8.376.375.605.726.8 1.222.14.367.303.958.348 1.981.048 1.02.058 1.304.058 3.916 0 2.612-.01 2.896-.058 3.916-.046 1.022-.21 1.614-.348 1.981-.195.496-.427.85-.8 1.222-.375.375-.726.605-1.222.8-.367.14-.958.303-1.981.348-1.02.048-1.304.058-3.916.058-2.612 0-2.896-.01-3.916-.058-1.022-.046-1.614-.21-1.981-.348-.496-.195-.85-.427-1.222-.8-.375-.375-.605-.726-.8-1.222-.14-.367-.303-.958-.348-1.981-.048-1.02-.058-1.304-.058-3.916 0-2.612.01-2.896.058-3.916.046-1.022.21-1.614.348-1.981.195-.496.427-.85.8-1.222.375-.375.726-.605 1.222-.8.367-.14.958-.303 1.981-.348 1.02-.048 1.304-.058 3.916-.058m0 4.297a5.207 5.207 0 100 10.414 5.207 5.207 0 000-10.414m0 8.596a3.39 3.39 0 110 -6.78 3.39 3.39 0 010 6.78m5.25-9.062a1.22 1.22 0 11-2.44 0 1.22 1.22 0 012.44 0"/>
        </svg>
      )
    }
    return icons[icon] || null
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>BluePeak</h3>
              <p>Software Solutions for Enterprise Transformation</p>
            </div>

            <div className="footer-contact">
              <a href="tel:+254711768878">+254 711 768 878</a>
              <a href="mailto:info@bluepeak.co.ke">info@bluepeak.co.ke</a>
            </div>

            <div className="footer-social">
              {socialLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="social-icon"
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} BluePeak Tech Solutions. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="divider">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="divider">•</span>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
