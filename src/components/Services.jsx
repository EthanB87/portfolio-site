import { SERVICE_LINES } from '../data'
import Reveal from './Reveal'

// Home page teaser. The full details live on /services.
export default function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label">What I do</span>
          <h2>Websites, AI visibility and practical AI for your business.</h2>
        </Reveal>
        <div className="service-grid three">
          {SERVICE_LINES.map((s, i) => (
            <Reveal key={s.key} d={i}>
              <div className="service">
                <span className="num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="services-more">
          <a className="btn" href="/services/">
            See all services and pricing →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
