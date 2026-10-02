import { BUSINESS, CONSULTING } from '../data'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import Faq from '../components/Faq'
import Placeholder from '../components/Placeholder'

const mailto = `mailto:${BUSINESS.email}?subject=${encodeURIComponent('AI consulting')}`

export default function AiConsulting() {
  return (
    <PageShell current="services">
      <PageHero
        label="AI consulting"
        title="Practical AI for small and mid-sized businesses."
        actions={
          <>
            <Magnetic href="#contact" className="primary">
              Start a conversation
            </Magnetic>
            <Magnetic href="#what-i-do">What I do</Magnetic>
          </>
        }
      >
        <p>
          I find where AI can save your team time, then build the tools to do it. You stay in
          control of anything that matters.
        </p>
      </PageHero>

      <section id="who">
        <div className="wrap about-grid">
          <Reveal className="sec-head">
            <span className="label">Who it's for</span>
            <h2>Businesses that want AI to help, without the hype.</h2>
          </Reveal>
          <Reveal>
            <ul className="card-feats who-list">
              {CONSULTING.who.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="what-i-do" className="services">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="label">What I do</span>
            <h2>Find it, build it, keep a person in charge.</h2>
          </Reveal>
          <div className="service-grid three">
            {CONSULTING.offers.map((o, i) => (
              <Reveal key={o.title} d={i}>
                <div className="service">
                  <span className="num">{i + 1}</span>
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="fine-print">
              I built{' '}
              <a href="https://github.com/EthanB87/Waveover" target="_blank" rel="noopener noreferrer">
                Waveover
              </a>
              , an open-source tool that lets a person approve an AI agent's actions from their
              phone. The same idea goes into the agents I set up for clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="engagements">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="label">How engagements work</span>
            <h2>Clear steps and a clear price.</h2>
          </Reveal>
          <div className="steps">
            {CONSULTING.steps.map((s, i) => (
              <Reveal key={s.title} d={i} className="step">
                <span className="label">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Placeholder>
            Pricing for AI consulting (for example a starting price or day rate). Add it to
            CONSULTING in src/data.js and to the JSON-LD offer in src/seo.js.
          </Placeholder>
          <Placeholder>
            Example projects or case studies. Add real client work here once you have it.
          </Placeholder>
        </div>
      </section>

      <Faq items={CONSULTING.faq} />

      <section id="contact" className="contact">
        <Reveal className="wrap">
          <span className="label">Start a conversation</span>
          <h2>Tell me what's eating your team's time.</h2>
          <p>
            A few lines is enough: what your business does, and the work you wish you didn't have
            to do by hand. I'll reply personally.
          </p>
          <div className="contact-row">
            <Magnetic href={mailto} className="primary">
              {BUSINESS.email}
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </PageShell>
  )
}
