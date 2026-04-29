import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    accent: 'cyan',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚡',
    accent: 'orange',
    skills: ['React.js', 'Node.js', 'Flask', 'Bootstrap', 'Spring Boot'],
  },
  {
    category: 'Databases & Backend',
    icon: '🗄️',
    accent: 'green',
    skills: ['SQLite', 'RESTful APIs', 'Database Design', 'OOP', 'Event-Driven Architecture'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🔧',
    accent: 'blue',
    skills: ['Git', 'Docker', 'WireGuard', 'Linux', 'Nginx', 'IntelliJ IDEA', 'PyCharm', 'Jupyter'],
  },
  {
    category: 'Embedded & Hardware',
    icon: '🔌',
    accent: 'purple',
    skills: ['Embedded C/C++', 'Flight Computers', 'Sensor Fusion', 'Real-Time Systems', 'Telemetry'],
  },
  {
    category: 'Engineering Practices',
    icon: '📐',
    accent: 'cyan',
    skills: ['Agile Development', 'Software Design Patterns', 'Systems Thinking', 'Technical Documentation', 'Version Control', 'Debugging & Testing'],
  },
]

const accentColors = {
  cyan: 'rgba(0,210,255,0.12)',
  orange: 'rgba(255,107,53,0.12)',
  green: 'rgba(0,229,160,0.12)',
  blue: 'rgba(58,123,213,0.12)',
  purple: 'rgba(168,85,247,0.12)',
}

const accentText = {
  cyan: 'var(--accent-cyan)',
  orange: 'var(--accent-orange)',
  green: 'var(--accent-green)',
  blue: 'var(--accent-blue)',
  purple: '#a855f7',
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" ref={ref}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Technical Stack</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="skills__intro">
            A broad toolkit spanning systems programming, full-stack development, embedded hardware, and DevOps —
            built through coursework, rocketry engineering, and personal projects.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="skills__card"
              style={{ '--accent-bg': accentColors[group.accent], '--accent-col': accentText[group.accent] }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.55 }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{group.icon}</span>
                <h3 className="skills__card-cat">{group.category}</h3>
              </div>
              <div className="skills__pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
