import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import useReducedMotion from '../hooks/useReducedMotion'

export default function ProjectCard({ project, d }) {
  const revealRef = useReveal(d)
  const reduced = useReducedMotion()
  const inner = useRef(null)

  const onMove = (e) => {
    if (reduced) return
    const el = inner.current
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--mx', px * 100 + '%')
    el.style.setProperty('--my', py * 100 + '%')
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 5}deg) rotateY(${
      (px - 0.5) * 5
    }deg) translateY(-2px)`
  }
  const onLeave = () => {
    if (inner.current) inner.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
  }

  return (
    <div ref={revealRef} className="reveal">
      <article ref={inner} className="card" onPointerMove={onMove} onPointerLeave={onLeave}>
        <div className="corner" />
        <div className="card-top">
          <h3>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <span className={`tag-status${project.live ? ' live' : ''}`}>{project.status}</span>
        </div>
        <p>{project.blurb}</p>
        <ul className="card-feats">
          {project.feats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        {(project.link || project.repo) && (
          <div className="card-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live ↗
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </article>
    </div>
  )
}
