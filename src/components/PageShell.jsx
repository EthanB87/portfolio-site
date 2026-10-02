import { useEffect, useRef } from 'react'
import Nav from './Nav'
import Footer from './Footer'

// Shared frame for every page: scroll progress bar, nav, main content, footer.
export default function PageShell({ current, children }) {
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      if (progressRef.current)
        progressRef.current.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%'
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="progress" ref={progressRef} />
      <Nav current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
