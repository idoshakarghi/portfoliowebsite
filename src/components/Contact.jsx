import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Contact.css'

export default function Contact() {
  const [ref, inView] = useInView()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('Idoeli2907@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref}>
      <div className="section-wrapper contact">
        <motion.div
          className="contact__inner"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Glow bg */}
          <div className="contact__glow contact__glow--1" />
          <div className="contact__glow contact__glow--2" />

          
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let's build something<br />
            <span className="gradient-text">worth launching.</span>
          </h2>
          <p className="contact__body">
            Whether it's a project collaboration, internship opportunity, or just a conversation about
            rockets, my inbox is always open. Feel free to reach out, I am currently looking for Engineering internships 
            for the upcoming fall/winter term!
          </p>

          <div className="contact__actions">
            <a href="mailto:Idoeli2907@gmail.com" className="contact__btn contact__btn--primary">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send Me an Email
            </a>
            <button className="contact__btn contact__btn--secondary" onClick={copyEmail}>
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>

          <div className="contact__links">
            <a href="https://github.com/IdoShakarghi" target="_blank" rel="noopener noreferrer" className="contact__social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4 11.5 11.5 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
              </svg>
              @IdoShakarghi
            </a>
            <a href="https://www.linkedin.com/in/ido-shakarghi-8b8213343/" target="_blank" rel="noopener noreferrer" className="contact__social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/>
              </svg>
              Ido Shakarghi
            </a>
            <span className="contact__social contact__social--phone">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (647) 545-4054
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
