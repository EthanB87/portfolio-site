import { PROCESS } from '../data'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label">How it works</span>
          <h2>Simple, personal, and no tech talk.</h2>
          <p className="sec-note">
            You know your business. I know websites. Here's how we work together.
          </p>
        </Reveal>
        <div className="steps">
          {PROCESS.map((s, i) => (
            <Reveal key={s.title} d={i} className="step">
              <span className="label">Step {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
