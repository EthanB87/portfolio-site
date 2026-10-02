import { PROJECTS } from '../data'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label">Recent work</span>
          <h2>Built for real businesses and real customers.</h2>
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
