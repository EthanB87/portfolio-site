import { TIMELINE, FACTS } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Experience</h2>
          <span className="sec-note">{'// where the production scars come from'}</span>
        </Reveal>
        <div className="exp-grid">
          <Reveal className="timeline">
            {TIMELINE.map((t) => (
              <div key={t.role} className={`t-item${t.now ? ' now' : ''}`}>
                <div className="t-when">{t.when}</div>
                <h3>{t.role}</h3>
                <div className="t-org">{t.org}</div>
                <p>{t.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <div className="fact-list">
              {FACTS.map(([k, v]) => (
                <div key={k} className="fact">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
