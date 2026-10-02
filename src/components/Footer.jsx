import { BUSINESS, LINKS } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <p>
          © 2026 {BUSINESS.name}. Websites, AI visibility and AI consulting in the{' '}
          {BUSINESS.area}.
        </p>
        <p className="footer-links">
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          <a href="/services/">Services</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
