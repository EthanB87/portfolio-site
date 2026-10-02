import { BUSINESS, LINKS } from '../data'

export default function Footer() {
  return (
    <footer>
      <span>
        © 2026 {BUSINESS.name} · Websites, AI visibility &amp; AI consulting · {BUSINESS.area}
      </span>
      <span className="footer-links">
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
        <a href="/services/">Services</a>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </span>
    </footer>
  )
}
