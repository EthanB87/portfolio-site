import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const progressRef = useRef(null)

  // scroll progress bar
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
      <div id="progress" ref={progressRef} />
      <Nav />
      <Hero />
      <Work />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
