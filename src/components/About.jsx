import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref}>
      <div className="section-wrapper about">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Building things that
            <br />
            <span className="gradient-text">actually launch.</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p>
              I'm <strong>Ido Shakarghi</strong>, a Computer Engineering student at York University
              (graduating May 2028) with a passion for systems that live at the intersection of
              software and hardware. Whether it's writing flight-control algorithms in C++ or
              designing RESTful APIs in Node.js, I care about building things that are reliable,
              fast, and elegant under the hood.
            </p>
            <p>
              Outside of lecture halls, I serve as President of <strong>Arbalest Rocketry</strong>,
              where I lead a team designing <em>Red Robin.</em> This is our biggest project yet where we are
              trying to redefine what Canadians can do with full active controls in our rocket
            </p>
            <p>
               I also bring over five years of operations experience in a fast-paced environment, 
               where I learned how to lead under pressure, optimize real-time systems.
            </p>
          </motion.div>

          <motion.div
            className="about__cards"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="about__card about__card--blue">
              <div className="about__card-icon">⚙️</div>
              <h3>Embedded Systems</h3>
              <p>Flight computers, sensor fusion, real-time control logic for high-power rocketry.</p>
            </div>
            <div className="about__card about__card--orange">
              <div className="about__card-icon">🌐</div>
              <h3>Full-Stack Dev</h3>
              <p>React, Node.js, Flask, REST APIs, building interfaces that communicate complex info cleanly.</p>
            </div>
            <div className="about__card about__card--green">
              <div className="about__card-icon">🖥️</div>
              <h3>Systems & Infrastructure</h3>
              <p>Linux, Docker, WireGuard VPN, self-hosted services, monitoring dashboards.</p>
            </div>
            <div className="about__card about__card--purple">
              <div className="about__card-icon">🧠</div>
              <h3>Systems Thinking</h3>
              <p>Cross-subsystem integration, fault analysis, safety-critical design, Agile teams.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
