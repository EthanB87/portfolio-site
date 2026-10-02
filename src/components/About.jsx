import { FACTS } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label">About</span>
          <h2>Hi, I'm Ethan.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p>
              I'm a web designer and developer in the Greater Toronto Area. I build websites and
              online shops for small businesses, where the owner is often also the buyer, the
              marketer, and the person answering emails at 10pm. I also help businesses get named
              when customers ask AI who to call, and put AI to work where it saves time.
            </p>
            <p>
              When you work with me, <b>you work with me</b>. I design it, build it, launch it, and
              stick around afterwards. By day I'm a software engineer at Equitable Life, building
              systems thousands of people rely on, and your site gets the same care.
            </p>
            <p>
              I care about how a website <b>feels</b> to your customers and whether it actually
              helps your business, not just whether it looks nice.
            </p>
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
