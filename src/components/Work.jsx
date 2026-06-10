import { PROJECTS } from '../data'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Selected work</h2>
          <span className="sec-note">{'// products built & shipped end-to-end'}</span>
        </Reveal>
        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} d={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
