import { motion } from 'framer-motion'
import './Team.css'

function Team() {
  const team = [
    {
      name: 'John Kipchoge',
      role: 'CEO & Lead Developer',
      bio: 'Full-stack expert with 8 years of experience',
      image: '/bluepeak professional team.jpeg',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Sarah Maina',
      role: 'Design Director',
      bio: 'UI/UX specialist and brand strategist',
      image: '/bluepeak professional team.jpeg',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'David Kariuki',
      role: 'Backend Developer',
      bio: 'Database architect and API specialist',
      image: '/bluepeak professional team.jpeg',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Grace Mutua',
      role: 'Project Manager',
      bio: 'Agile specialist and client liaison',
      image: '/bluepeak professional team.jpeg',
      social: { twitter: '#', linkedin: '#', github: '#' }
    }
  ]

  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>Talented professionals dedicated to your success</p>
        </div>

        <div className="team-grid grid-4">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="team-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
                <div className="social-links">
                  <a href={member.social.twitter} title="Twitter">𝕏</a>
                  <a href={member.social.linkedin} title="LinkedIn">💼</a>
                  <a href={member.social.github} title="GitHub">💻</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
