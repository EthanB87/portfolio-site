import { useEffect, useRef } from 'react'

// A sequence drawn as stops along a coloured line. Only use it for real sequences.
// `stops` is a list of strings (compact) or { title, body } objects.
// When it scrolls into view the line draws and the stops arrive one by one (CSS, gated
// on the .js class so the content is always visible without JavaScript).
export default function Stations({ color, stops, Heading = 'h3', vertical = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <ol
      ref={ref}
      className={`stations line-${color}${vertical ? ' vertical' : ''}`}
      style={{ '--n': stops.length }}
    >
      {stops.map((s, i) => {
        const title = typeof s === 'string' ? s : s.title
        return (
          <li key={title} style={{ '--i': i }}>
            <span className="stop" aria-hidden="true" />
            {typeof s === 'string' ? (
              <span className="stop-name">{title}</span>
            ) : (
              <div className="stop-text">
                <Heading className="stop-name">{title}</Heading>
                <p>{s.body}</p>
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
