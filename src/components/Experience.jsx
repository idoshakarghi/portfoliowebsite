import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Experience.css'

const experiences = [
  {
    role: 'President',
    org: 'Arbalest Rocketry',
    location: 'Toronto, ON',
    period: 'March 2025 – Present',
    type: 'Leadership',
    accent: 'cyan',
    icon: '🚀',
    bullets: [
      "Directed an organization of 50+ students across multidisciplinary teams including software development, rocket manufacturing, PCB manufacturing, computer vision, and liquid engine design", "Led the system-level design and integration of Red Robin, an active-control high-power rocket implementing closed-loop feedback control", "Oversaw embedded systems architecture including flight computers, sensors, telemetry, and real-time control logic", "Coordinated development of a liquid-propellant engine with emphasis on system modeling, testing procedures, and safety-critical design", "Led hardware testing, system validation, and fault analysis for flight-critical subsystems"
    ],
  },
  {
  role: 'Software Development Intern',
  org: 'Magic Software Enterprises',
  location: 'Israel',
  period: 'May 2024 – Present',
  type: 'Software Engineering',
  accent: 'orange',
  icon: '💻',
  bullets: [
    'Worked under senior developers in a professional software environment, assisting with application development, debugging, and feature implementation',
    'Supported testing, troubleshooting, and maintenance of enterprise software systems to improve reliability and day-to-day performance',
    'Collaborated with development teams to document workflows, review changes, and gain hands-on experience across the software development lifecycle'
  ],
},
]

const educationItems = [
  {
    institution: 'York University',
    degree: 'B.S. Computer Engineering',
    period: 'Expected May 2028',
    location: 'Toronto, ON',
    courses: ['Data Structures & Algorithms', 'Computer Organization', 'Object-Oriented Programming'],
  },
  {
    institution: 'Westmount Collegiate Institute',
    degree: 'Ontario Secondary School Diploma (OSSD)',
    period: 'Graduated June 2022',
    location: 'Toronto, ON',
    courses: [],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" ref={ref}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">Experience &amp; <span className="gradient-text">Education</span></h2>
        </motion.div>

        <div className="exp__layout">
          {/* Experience */}
          <div className="exp__col">
            <h3 className="exp__col-title">
              <span className="exp__col-icon">💼</span>
              Work Experience
            </h3>
            <div className="exp__timeline">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  className={`exp__item exp__item--${exp.accent}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                >
                  <div className="exp__item-header">
                    <div className="exp__item-icon">{exp.icon}</div>
                    <div className="exp__item-meta">
                      <h4 className="exp__item-role">{exp.role}</h4>
                      <p className="exp__item-org">{exp.org} · {exp.location}</p>
                    </div>
                    <div className="exp__item-right">
                      <span className={`exp__badge exp__badge--${exp.accent}`}>{exp.type}</span>
                      <span className="exp__period">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="exp__bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="exp__col">
            <h3 className="exp__col-title">
              <span className="exp__col-icon">🎓</span>
              Education
            </h3>
            <div className="exp__timeline">
              {educationItems.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  className="exp__item exp__item--blue"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                >
                  <div className="exp__item-header">
                    <div className="exp__item-icon">🏫</div>
                    <div className="exp__item-meta">
                      <h4 className="exp__item-role">{edu.degree}</h4>
                      <p className="exp__item-org">{edu.institution} · {edu.location}</p>
                    </div>
                    <span className="exp__period">{edu.period}</span>
                  </div>
                  {edu.courses.length > 0 && (
                    <div className="exp__courses">
                      <span className="exp__courses-label">Relevant Coursework:</span>
                      <div className="exp__courses-list">
                        {edu.courses.map((c) => (
                          <span key={c} className="exp__course-tag">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
