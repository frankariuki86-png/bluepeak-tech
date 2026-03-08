import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Stats.css'

function Stats() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, team: 0, years: 0 })
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = { projects: 120, clients: 85, team: 12, years: 5 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        team: Math.floor(targets.team * progress),
        years: Math.floor(targets.years * progress)
      })

      if (currentStep === steps) clearInterval(interval)
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible])

  const stats = [
    { number: counts.projects + '+', label: 'Projects Completed', icon: '🚀' },
    { number: counts.clients + '+', label: 'Happy Clients', icon: '😊' },
    { number: counts.team + '+', label: 'Team Members', icon: '👥' },
    { number: counts.years + '+', label: 'Years Experience', icon: '⏰' }
  ]

  return (
    <section ref={ref} className="stats section">
      <div className="container">
        <div className="stats-grid grid-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <motion.div className="stat-number">
                {isVisible ? stat.number : '0'}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
