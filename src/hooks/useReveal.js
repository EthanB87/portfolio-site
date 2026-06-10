import { useEffect, useRef } from 'react'

// Adds .in (with optional stagger delay) when the element scrolls into view.
export default function useReveal(delayIndex = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          el.style.transitionDelay = delayIndex * 90 + 'ms'
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delayIndex])
  return ref
}
