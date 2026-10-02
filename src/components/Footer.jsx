import { LINKS } from '../data'

export default function Footer() {
  return (
    <footer>
      <span>© 2026 Ethan Brockman · Websites &amp; online shops · Waterloo, Ontario</span>
      <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
    </footer>
  )
}
