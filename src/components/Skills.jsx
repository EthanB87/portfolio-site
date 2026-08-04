import { SKILLS } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Stack</h2>
          <span className="sec-note">{'// the ones I actually reach for'}</span>
        </Reveal>
        <div className="skill-cols">
          {SKILLS.map((col, i) => (
            <Reveal key={col.head} d={i} className="skill-col">
              <h4>{col.head}</h4>
              <ul>
                {col.items.map(([name, rest, strong]) => (
                  <li key={name}>
                    {strong ? <b>{name}</b> : name}
                    {rest ? ' ' + rest : ''}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
