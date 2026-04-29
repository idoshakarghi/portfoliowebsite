import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Projects.css'

const imagePath = (fileName) => `/project-images/${fileName}`

const projects = [
  {
    id: 'arbalest-web',
    title: "Arbalest Rocketry Website",
    subtitle: "Team Website",
    tags: ["HTML/CSS", "JavaScript", "Frontend", "Technical Writing"],
    accent: 'cyan',
    icon: '🌐',
    period: 'Sep – Oct 2025',
    featured: true,
    image: imagePath('portfolioarbalest.png'),
    description:
      "Designed and implemented the official website for Arbalest Rocketry from scratch. Built with structured HTML/CSS emphasizing maintainable frontend architecture, translating complex aero/avionics technical content into a clean, accessible interface for sponsors, recruits, and the engineering community.",
    highlights: [
      "Responsive design with a focus on presenting complex technical information clearly",
      "Iterative feature rollout, updated content and layout as the club's work evolved",
      "Collaborated with a multidisciplinary team to translate engineering requirements into a stable UI",
      "Emphasis on software maintenance: clean code, documented updates, and scalable architecture",
    ],
    links: { github: 'https://github.com/Arbalest-Rocketry', live: 'https://arbavercel.vercel.app/' },
  },
  {
    id: 'Mindly-web',
    title: "Mindly Website",
    subtitle: "Website for client",
    tags: ["HTML/CSS", "JavaScript", "Frontend", "Technical Writing"],
    accent: 'green',
    icon: '🌐',
    period: 'Sep – Oct 2025',
    featured: true,
    image: imagePath('mindlyforportfolio.png'),
    description:
      "Designed and implemented a clean website interface with structured frontend code, responsive layouts, and clear project communication.",
    highlights: [
      "Responsive design with a focus on presenting information clearly",
      "Iterative feature rollout with updated content and layout",
      "Collaborated with a multidisciplinary team to translate requirements into a stable UI",
      "Clean code, documented updates, and scalable architecture",
    ],
    links: { live: 'https://mindlyweb.com/' },
    placeholder: 'mindly\nWebsite',
  },
  {
    id: 'rocket-avionics',
    title: "Active Control Rocket",
    subtitle: "Embedded Systems",
    tags: ["C++", "Embedded C", "Real-Time Systems", "Sensors"],
    accent: 'orange',
    icon: '📡',
    period: '2025 – Ongoing',
    featured: true,
    image: imagePath('controlsystemportfolio.png'),
    description:
      "Active-control avionics architecture for Red Robin, Arbalest's high-power rocket. System encompasses flight computer integration, sensor fusion, telemetry downlink, and real-time PID control loops for active stabilization during flight.",
    highlights: [
      "Closed-loop feedback control system for active rocket stabilization",
      "Real-time sensor data processing and state estimation",
      "Fault detection logic for flight-critical subsystems",
      "Hardware-in-the-loop testing pipeline and data logging",
    ],
    links: { github: '#' },
    placeholder: 'Avionics\nSystem',
  },
  {
    id: 'home-server',
    title: "Home Server Dashboard",
    subtitle: "Self-Hosted Infrastructure",
    tags: ["Linux", "Docker", "WireGuard", "Nginx", "Monitoring"],
    accent: 'red',
    icon: '🖥️',
    period: 'Jun – Aug 2025',
    image: imagePath('homeserverportfolio.png'),
    description:
      "Built and maintained a Linux home server running containerized services including VPN, media streaming, and self-hosted cloud storage. Implemented secure networking with WireGuard and a custom web monitoring dashboard for real-time health visibility.",
    highlights: [
      "Docker-based service isolation for reliability and portability",
      "WireGuard VPN + HTTPS reverse proxy for encrypted remote access",
      "Custom web dashboard: uptime, CPU/RAM, service health monitoring",
      "Firewall rules and hardened SSH configuration",
    ],
    links: { github: '#' },
    placeholder: 'Home Server\nDashboard',
  },
  {
    id: 'liquid-engine',
    title: "Liquid Propellant Engine",
    subtitle: "Propulsion Engineering",
    tags: ["Systems Design", "Fluid Dynamics", "Safety-Critical", "Testing"],
    accent: 'cyan',
    icon: '🔥',
    period: '2025 – Ongoing',
    image: imagePath('liquidengineportfolio.png'),
    description:
      "Coordinating the design and development of Arbalest's liquid-propellant engine. Responsibilities span system modeling, test procedure design, safety-critical analysis, and integration with the rocket's propulsion and avionics systems.",
    highlights: [
      "System-level modeling of combustion dynamics",
      "Test stand design and validation procedures",
      "Safety-critical design reviews and failure mode analysis",
      "Integration with thrust vector control and avionics",
    ],
    links: {},
    placeholder: 'Liquid Engine\nProject',
  },
]

const filterTags = ['All', 'Embedded Systems', 'Web', 'Infrastructure', 'Hardware']

function tagMatchesFilter(tags, filter) {
  if (filter === 'All') return true

  const map = {
    'Embedded Systems': ['Embedded C', 'C++', 'Real-Time Systems', 'Sensors', 'Embedded'],
    Web: ['HTML/CSS', 'JavaScript', 'Frontend', 'React', 'Node.js'],
    Infrastructure: ['Linux', 'Docker', 'WireGuard', 'Nginx', 'Monitoring'],
    Hardware: ['Hardware', 'IoT', 'Sensors', 'Systems Design'],
  }

  return (map[filter] || []).some(t => tags.includes(t))
}

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="project-card__image"
        loading="lazy"
      />
    )
  }

  return (
    <div className="project-card__img-placeholder">
      <span className="project-card__img-icon">{project.icon}</span>
      <span className="project-card__img-text">{project.placeholder}</span>
      <span className="project-card__img-note">[ Add screenshot ]</span>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState('All')

  const filtered = projects.filter(p => tagMatchesFilter(p.tags, active))

  return (
    <section id="projects" ref={ref}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p>What I've Built</p>
          <h2 className="section-title">
            Projects &amp; <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filterTags.map(f => (
            <button
              key={f}
              className={`projects__filter ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <div className="projects__grid">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'project-card--featured' : ''} project-card--${project.accent}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                layout
              >
                <div className="project-card__img">
                  <ProjectImage project={project} />
                </div>

                <div className="project-card__body">
                  <div className="project-card__top">
                    <div className="project-card__header">
                      <span className="project-card__subtitle">{project.subtitle}</span>
                      {project.featured && (
                        <span className="project-card__featured-badge">Featured</span>
                      )}
                    </div>

                    <h3 className="project-card__title">
                      {project.links.live && project.links.live !== '#' ? (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__title-link"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>

                    <span className="project-card__period">{project.period}</span>
                    <p className="project-card__desc">{project.description}</p>
                  </div>

                  <div className="project-card__highlights">
                    {project.highlights.map((h, j) => (
                      <div key={j} className="project-card__highlight">{h}</div>
                    ))}
                  </div>

                  <div className="project-card__footer">
                    <div className="project-card__tags">
                      {project.tags.slice(0, 4).map(t => (
                        <span key={t} className="project-card__tag">{t}</span>
                      ))}
                    </div>

                    <div className="project-card__links">
                      {project.links.github && project.links.github !== '#' && (
                        <a
                          href={project.links.github}
                          className="project-card__link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubSmallIcon /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function GithubSmallIcon() {
  return (
    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4 11.5 11.5 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}