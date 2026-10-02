import { useEffect, useState } from 'react'

const SECTIONS = [
  ['work', 'Work'],
  ['services', 'Services'],
  ['process', 'How it works'],
  ['about', 'About'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40)
    addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => {
      removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a className="logo" href="#top">
        <span className="dot" />
        Ethan Brockman
      </a>
      <div className="nav-links">
        {SECTIONS.map(([id, label]) => (
          <a key={id} href={'#' + id} className={active === id ? 'active' : ''}>
            {label}
          </a>
        ))}
        <a href="#contact" className="nav-cta">
          Start a project
        </a>
      </div>
    </nav>
  )
}
