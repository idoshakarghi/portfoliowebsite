import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>
          Ido Shakarghi
          <span className="footer__logo-bracket">/&gt;</span>
        </span>
        <p className="footer__copy">
          © {year} · Ido Shakarghi Toronto, ON
        </p>
        <div className="footer__links">
          <a href="https://github.com/IdoShakarghi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ido-shakarghi-8b8213343/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:Idoeli2907@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
