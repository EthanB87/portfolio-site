import { useEffect, useState } from 'react'

// Absolute links so the nav works from every page, not just the home page.
const LINKS = [
  ['work', 'Work', '/#work'],
  ['services', 'Services', '/services/'],
  ['process', 'How it works', '/#process'],
  ['about', 'About', '/#about'],
]

export default function Nav({ current = 'home' }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(current === 'home' ? '' : 'services')

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40)
    addEventListener('scroll', onScroll, { passive: true })
    if (current !== 'home') return () => removeEventListener('scroll', onScroll)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => {
      removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [current])

  return (
    <nav className={scrolled ? 'scrolled' : ''} aria-label="Main">
      <a className="logo" href="/">
        <span className="dot" />
        Ethan Brockman
      </a>
      <div className="nav-links">
        {LINKS.map(([id, label, href]) => (
          <a
            key={id}
            href={href}
            className={active === id ? 'active' : ''}
            aria-current={current !== 'home' && id === 'services' ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
        <a href="/#contact" className="nav-cta">
          Start a project
        </a>
      </div>
    </nav>
  )
}
