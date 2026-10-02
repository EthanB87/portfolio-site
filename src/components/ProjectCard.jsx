import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'
import useReducedMotion from '../hooks/useReducedMotion'

// Phone-shaped screenshot; shows a labelled placeholder until the image exists.
function Shot({ src, caption }) {
  const [missing, setMissing] = useState(false)
  const img = useRef(null)
  // On prerendered pages the image can fail before React attaches onError.
  useEffect(() => {
    const el = img.current
    if (el && el.complete && el.naturalWidth === 0) setMissing(true)
  }, [])
  return (
    <figure className="shot">
      <div className="shot-frame">
        {missing ? (
          <div className="shot-ph">
            screenshot
            <br />
            coming soon
          </div>
        ) : (
          <img ref={img} src={src} alt={caption} loading="lazy" onError={() => setMissing(true)} />
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function FeaturedBody({ project }) {
  return (
    <div className="feat-grid">
      <div className="feat-text">
        <div className="label feat-eyebrow">{project.eyebrow}</div>
        <div className="card-top">
          <h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <span className={`tag-status${project.live ? ' live' : ''}`}>{project.status}</span>
        </div>
        {project.story.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <ul className="card-feats">
          {project.feats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="feat-actions">
          <a className="btn primary" href={project.link} target="_blank" rel="noopener noreferrer">
            Visit {project.linkLabel} ↗
          </a>
        </div>
      </div>
      <div className="feat-shots">
        {project.shots.map((s) => (
          <Shot key={s.src} {...s} />
        ))}
      </div>
      <div className="feat-cta">
        <p>{project.cta}</p>
        <a href="#contact">Let's talk →</a>
      </div>
      <div className="stack-line feat-stack">Built with {project.stack.join(' · ')}</div>
    </div>
  )
}

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
    const tilt = project.featured ? 1.5 : 5 // big card: keep the lean subtle
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * tilt}deg) rotateY(${
      (px - 0.5) * tilt
    }deg) translateY(-2px)`
  }
  const onLeave = () => {
    if (inner.current) inner.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
  }

  return (
    <div ref={revealRef} className={`reveal${project.featured ? ' featured' : ''}`}>
      <article
        ref={inner}
        className={`card${project.featured ? ' card-featured' : ''}`}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        {project.featured ? (
          <FeaturedBody project={project} />
        ) : (
          <>
            <div className="card-top">
              <h3>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
                {project.kind && <span className="kind">{project.kind}</span>}
              </h3>
              <span className={`tag-status${project.live ? ' live' : ''}`}>{project.status}</span>
            </div>
            <p>{project.blurb}</p>
            <ul className="card-feats">
              {project.feats.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="stack-line">Built with {project.stack.join(' · ')}</div>
            {(project.link || project.repo) && (
              <div className="card-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit site ↗
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    View code ↗
                  </a>
                )}
              </div>
            )}
          </>
        )}
      </article>
    </div>
  )
}
