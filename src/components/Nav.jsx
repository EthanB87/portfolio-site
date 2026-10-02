// Absolute links so the nav works from every page. Every page ends with #consult.
const LINKS = [
  ['about', 'About', '/#about'],
  ['services', 'Services', '/services/'],
  ['work', 'Work', '/#work'],
]

export default function Nav({ current = 'home' }) {
  return (
    <nav aria-label="Main">
      <div className="wrap nav-inner">
        <a className="logo" href="/">
          {/* interchange roundel: one colour, like a station sign */}
          <svg className="logo-mark" viewBox="0 0 32 24" aria-hidden="true">
            <rect x="0" y="9" width="32" height="6" rx="3" fill="currentColor" />
            <circle cx="16" cy="12" r="8" fill="#fff" stroke="currentColor" strokeWidth="5" />
          </svg>
          Ethan Brockman
        </a>
        <div className="nav-links">
          {LINKS.map(([id, label, href]) => (
            <a
              key={id}
              href={href}
              aria-current={current !== 'home' && id === 'services' ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
          <a href="#consult" className="btn primary nav-cta">
            Free consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
