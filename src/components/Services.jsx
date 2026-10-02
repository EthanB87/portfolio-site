import { SERVICES } from '../data'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label">What I do</span>
          <h2>Everything your business needs to look good and sell online.</h2>
        </Reveal>
        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} d={i}>
              <div className="service">
                <span className="num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
