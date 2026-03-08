# 🎨 Customization Guide - BluePeak Professional Website

## How to Customize Your Website

---

## 1. 📝 Update Company Information

### Update Contact Details
**File**: `src/components/Contact.jsx` and `src/components/Footer.jsx`

```jsx
// Change WhatsApp number
href="https://wa.me/254711768878"  // ← Update this number

// Change email
href="mailto:bluepeak@gmail.com"   // ← Update this email

// Change working hours
<p>24 Hours Available<br />Mon - Sun</p>  // ← Update this
```

### Update Social Media Links
**File**: `src/components/Footer.jsx`

```jsx
const footerLinks = {
  Services: ['Web Development', 'Web Design', 'Branding', 'SEO', 'IT Support'],
  Company: ['About Us', 'Projects', 'Team', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Sitemap'],
  Resources: ['Documentation', 'FAQ', 'Support', 'Contact']
}

// Update social media URLs
<a href="https://facebook.com/yourpage">f</a>
<a href="https://instagram.com/yourpage">📷</a>
<a href="https://wa.me/YOUR_NUMBER">💬</a>
<a href="https://tiktok.com/@yourpage">🎵</a>
```

---

## 2. 👥 Customize Team Section

**File**: `src/components/Team.jsx`

```jsx
const team = [
  {
    name: 'John Kipchoge',           // ← Change name
    role: 'CEO & Lead Developer',    // ← Change role
    bio: 'Full-stack expert with 8 years of experience',  // ← Change bio
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',  // ← Add photo URL
    social: { 
      twitter: '#',  // ← Add links
      linkedin: '#',
      github: '#' 
    }
  },
  // ... repeat for other team members
]
```

### How to Get Team Photos:
1. Use your real team photos
2. Or get free stock photos from:
   - Unsplash: https://unsplash.com
   - Pexels: https://pexels.com
   - Pixabay: https://pixabay.com

---

## 3. 💰 Update Pricing Section

**File**: `src/components/Pricing.jsx`

```jsx
const plans = [
  {
    name: 'Portfolio Site',          // ← Change plan name
    price: '12,000 - 15,000',        // ← Change price
    features: [
      'Responsive Design',           // ← Add/remove features
      'Galleries & Portfolios',
      'Contact Forms',
      'Social Integration',
      'Basic SEO'
    ],
    highlighted: false               // Set true for featured plan
  },
  // ... repeat for other plans
]
```

---

## 4. 📸 Replace Images

### In Hero Section
**File**: `src/components/Hero.jsx`

```jsx
const slides = [
  {
    title: 'Fast. Expert. Reliable.',
    subtitle: 'Web & IT solutions delivered quickly...',
    cta: 'Get a Quote',
    gradient: 'linear-gradient(135deg, #0066cc, #00a3e0)'
    // ← Gradients automatically created, no images needed
  },
]
```

### In About Section
**File**: `src/components/About.jsx`

```jsx
<img 
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop" 
  // ← Replace this URL with your image
  alt="BluePeak Team" 
/>
```

### In Services Section
**File**: `src/components/Services.jsx`

```jsx
const services = [
  {
    icon: '🌐',                    // ← Change emojis or use icons
    title: 'Web Development',
    description: 'Full-stack development...'
  },
]
```

### In Projects Section
**File**: `src/components/Projects.jsx`

```jsx
const projects = [
  {
    category: 'website',
    title: 'Wynes TTI College',
    description: 'College profile website...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop'
    // Replace image URL
  },
]
```

### In Blog Section
**File**: `src/components/Blog.jsx`

```jsx
const articles = [
  {
    id: 1,
    title: 'Web Development Trends 2024',
    excerpt: 'Discover the latest technologies...',
    date: 'March 5, 2024',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    // Replace image URL
  },
]
```

---

## 5. 🎨 Customize Colors

**File**: `src/index.css`

Find the `:root` selector and update:

```css
:root {
  --primary: #0066cc;              /* Main blue - change this */
  --primary-dark: #0052a3;         /* Darker blue - change this */
  --secondary: #00a3e0;            /* Light blue - change this */
  --accent: #ff6b6b;               /* Red accent - change this */
  --success: #34c759;              /* Green - change this */
  
  /* Text colors */
  --text-dark: #1a202c;
  --text-light: #4a5568;
  --text-lightest: #718096;
  
  /* Background colors */
  --bg-light: #f7fafc;
  --bg-white: #ffffff;
  
  /* Utility colors */
  --border-light: #e2e8f0;
}
```

### Popular Color Combinations:
- **Tech Blue**: Primary: #0066cc, Secondary: #00a3e0
- **Professional Green**: Primary: #059669, Secondary: #10b981
- **Modern Purple**: Primary: #7c3aed, Secondary: #a78bfa
- **Bold Red**: Primary: #dc2626, Secondary: #ef4444

---

## 6. 📝 Update Services List

**File**: `src/components/Services.jsx`

```jsx
const services = [
  {
    icon: '🌐',
    title: 'Web Development',          // ← Change title
    description: 'Full-stack development...'  // ← Change description
  },
  {
    icon: '🎨',                        // ← Change emoji
    title: 'Web Design',               // ← Change title
    description: 'Modern UI/UX...'     // ← Change description
  },
  // Add/remove services as needed
]
```

---

## 7. 🗣️ Update Testimonials

**File**: `src/components/Testimonials.jsx`

```jsx
const testimonials = [
  {
    name: 'Jane Ochieng',                    // ← Change client name
    company: 'Wynes Institute',              // ← Change company
    text: 'BluePeak transformed our online presence...',  // ← Change review
    rating: 5,                               // ← Change rating (1-5)
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
    // ← Add client photo
  },
]
```

---

## 8. 📊 Update Statistics

**File**: `src/components/Stats.jsx`

```jsx
const targets = { 
  projects: 120,   // ← Change number of projects
  clients: 85,     // ← Change number of clients
  team: 12,        // ← Change team size
  years: 5         // ← Change years in business
}

const stats = [
  { number: counts.projects + '+', label: 'Projects Completed', icon: '🚀' },
  // ← Update labels and icons
]
```

---

## 9. 📱 Update Newsletter Form

**File**: `src/components/Footer.jsx`

```jsx
<form className="newsletter-form">
  <input 
    type="email" 
    placeholder="Enter your email"  // ← Change placeholder
    required 
  />
  <button type="submit" className="btn btn-primary btn-sm">
    Subscribe
  </button>
</form>
```

Connect to email service:
- Mailchimp API
- SendGrid
- ConvertKit
- Or your own backend

---

## 10. 🔤 Update Typography

**File**: `src/index.css`

```css
body {
  font-family: your-font-family;  /* Change font */
  font-size: 16px;               /* Change base size */
  line-height: 1.6;              /* Change line height */
}

h1 { font-size: 3.5rem; }  /* Change heading sizes */
h2 { font-size: 2.5rem; }
h3 { font-size: 1.875rem; }
```

---

## 11. 🔗 Update Navigation Links

**File**: `src/components/Navigation.jsx`

```jsx
const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Team', id: 'team' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Contact', id: 'contact' },
  // Add/remove items as needed
]
```

---

## 12. ✉️ Connect Contact Form

**File**: `src/components/Contact.jsx`

Currently, the form shows a success message. To actually send emails:

### Option 1: Web3Forms (Free)
```jsx
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
  {/* Form fields */}
</form>
```

### Option 2: Formspree (Free)
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  {/* Form fields */}
</form>
```

### Option 3: EmailJS
```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData);
}
```

---

## 13. 🎯 Common Customizations

### Change Logo Text
**File**: `src/components/Navigation.jsx`

```jsx
<span className="logo-text">BluePeak</span>  // ← Change this
```

### Change Page Title
**File**: `index.html`

```html
<title>BluePeak Tech Solutions - Professional Web & IT Services</title>
<!-- ↑ Change this -->
```

### Change Page Description
**File**: `index.html`

```html
<meta name="description" content="BluePeak Tech Solutions - Professional web development, design, branding, and IT services...">
<!-- ↑ Change this -->
```

### Change Section Order
**File**: `src/App.jsx`

```jsx
<main>
  <Hero />
  <Stats />
  <About />
  <Services />
  <Projects />
  <Team />
  <Testimonials />
  <Pricing />
  <Blog />
  <Contact />
  {/* Reorder sections as needed */}
</main>
```

---

## 🚀 Deployment with Custom Domain

After customizing:

1. **Build the site**:
   ```powershell
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   - Sign up at vercel.com
   - Connect your GitHub repo
   - Vercel auto-deploys on push

3. **Add custom domain**:
   - Go to Vercel project settings
   - Add your domain
   - Update DNS records

---

## 🔍 Testing Changes

After each change:

1. **Save the file**
2. **Dev server auto-reloads** (you should see changes in browser)
3. **Hard refresh** if needed: `Ctrl + Shift + R`
4. **Check console** for errors: `F12`

---

## 💾 Best Practices

✅ **Do:**
- Keep a backup of original files
- Test changes in dev mode first
- Use consistent styling
- Add comments to your customizations

❌ **Don't:**
- Modify core Vite config unless necessary
- Delete component files
- Change import statements
- Mix old HTML styles with new React styles

---

## 📞 Need Help?

Contact BluePeak:
- **WhatsApp**: +254 711 768 878
- **Email**: bluepeak@gmail.com

---

**Happy customizing! Your website is now fully tailored to your business. 🎉**
