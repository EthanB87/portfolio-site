import { PROJECTS } from '../data'
import ProjectCard from './ProjectCard'

export default function Work() {
  return (
    <section id="work" className="work tinted">
      <div className="wrap">
        <h2>Recent work</h2>
        <p className="lede">A client shop that runs itself, and two products of my own.</p>
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
