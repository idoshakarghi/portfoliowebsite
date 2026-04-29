import { motion } from 'framer-motion'
import './Hero.css'
import headshot from '../assets/headshot.jpg'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="hero__inner">
        <div className="hero__content">
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Ido
            <br />
            <span className="hero__name-last">Shakarghi</span>
          </motion.h1>

          <motion.div
            className="hero__roles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="hero__role">Computer Engineering Student</span>
            <span className="hero__role-divider">·</span>
            <span className="hero__role">Rocketry President</span>
            <span className="hero__role-divider">·</span>
            <span className="hero__role">Builder</span>
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            An Engineering student at York University building systems because I want to push limits.
            From leading a team to do active-control rockets to embedded avionics and self-hosted infrastructure.
            I write code and wire hardware with the same obsession.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="hero__photo-frame">
            <img
              src={headshot}
              alt="Ido Shakarghi"
              className="hero__photo"
            />
            <div className="hero__photo-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}