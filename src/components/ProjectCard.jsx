import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Tilt the phone toward the mouse and move the glare with it. Mouse only: touch
// devices get the swipeable row instead.
function tilt(e) {
  if (e.pointerType !== 'mouse' || prefersReducedMotion()) return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width
  const py = (e.clientY - r.top) / r.height
  el.style.setProperty('--ry', `${(px - 0.5) * 18}deg`)
  el.style.setProperty('--rx', `${(0.5 - py) * 12}deg`)
  el.style.setProperty('--gx', `${px * 100}%`)
  el.style.setProperty('--gy', `${py * 100}%`)
}
function untilt(e) {
  const el = e.currentTarget
  el.style.setProperty('--ry', '0deg')
  el.style.setProperty('--rx', '0deg')
}

// A screenshot shown as a phone; shows a labelled placeholder until the image exists.
function Shot({ src, caption, i }) {
  const [missing, setMissing] = useState(false)
  const img = useRef(null)
  // On prerendered pages the image can fail before React attaches onError.
  useEffect(() => {
    const el = img.current
    if (el && el.complete && el.naturalWidth === 0) setMissing(true)
  }, [])
  return (
    <figure className="shot" style={{ '--i': i }} onPointerMove={tilt} onPointerLeave={untilt}>
      <div className="shot-device">
        <div className="shot-frame">
          {missing ? (
            <div className="shot-ph">Screenshot coming soon</div>
          ) : (
            <img ref={img} src={src} alt={caption} loading="lazy" onError={() => setMissing(true)} />
          )}
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function Featured({ project }) {
  const shots = useRef(null)

  // Swing the phones into place the first time they scroll into view.
  useEffect(() => {
    const el = shots.current
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <article className={`project featured line-${project.line}`}>
      <div className="featured-text">
        <p className="project-kind">
          {project.kind}, <span className="status live">{project.status.toLowerCase()}</span>
        </p>
        <h3>{project.title}</h3>
        {project.story.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <div className="featured-details">
        <ul className="ticks">
          {project.feats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="actions">
          <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
            Visit {project.linkLabel}
          </a>
          {project.caseStudy && (
            <a className="text-link case-link" href={project.caseStudy.href}>
              {project.caseStudy.label}
            </a>
          )}
        </div>
        <p className="stack-line">Built with {project.stack.join(', ')}</p>
      </div>
      {/* Big enough to read the screens. On phones it becomes a swipeable row, so it's
          focusable for keyboard scrolling. */}
      <div
        ref={shots}
        className="shots"
        role="region"
        aria-label="Screenshots of the shop"
        tabIndex={0}
      >
        {project.shots.map((s, i) => (
          <Shot key={s.src} {...s} i={i} />
        ))}
      </div>
    </article>
  )
}

export default function ProjectCard({ project }) {
  if (project.featured) return <Featured project={project} />
  return (
    <article className="project">
      <p className="project-kind">
        {project.kind}, <span className="status">{project.status.toLowerCase()}</span>
      </p>
      <h3>{project.title}</h3>
      <p>{project.blurb}</p>
      <ul className="ticks">
        {project.feats.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <p className="stack-line">Built with {project.stack.join(', ')}</p>
      <p className="project-links">
        {project.link && (
          <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
            Visit site
          </a>
        )}
        {project.repo && (
          <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">
            View code
          </a>
        )}
      </p>
    </article>
  )
}
