import { ABOUT_FACTS } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>About</h2>
          <span className="sec-note">{'// the elevation map behind this page'}</span>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p>
              I'm a full-stack engineer in Waterloo who genuinely cares how software{' '}
              <b>looks and feels</b> — not just whether it works. By day I build and operate
              production systems at Equitable Life. Nights and weekends, I design, build, and sell
              my own SaaS products, which means I've felt every layer of the stack: the pixel, the
              API, the invoice, and the customer email.
            </p>
            <p>
              The terrain behind the hero of this page is a nod to where I am when I'm not
              shipping: <b>hiking, camping, and canoeing</b> somewhere off the tourist circuit.
              It's generated live — contour lines drawn with marching squares over animated noise,
              reacting to your cursor like elevation. Open the <b>⌘K palette</b> for the fast way
              around.
            </p>
            <p>
              I'm looking for a team where front-end craft is taken seriously and engineers are
              trusted with the whole problem.
            </p>
          </Reveal>
          <Reveal>
            <div className="fact-list">
              {ABOUT_FACTS.map(([k, v]) => (
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
