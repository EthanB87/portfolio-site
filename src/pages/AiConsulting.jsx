import { CONSULTING } from '../data'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Stations from '../components/Stations'
import Faq from '../components/Faq'
import ConsultSection from '../components/ConsultSection'

export default function AiConsulting() {
  return (
    <PageShell current="services">
      <PageHero
        color="charcoal"
        line="Run smoother"
        title="Practical AI for small and mid-sized businesses."
        actions={
          <a className="btn primary" href="#consult">
            Book a free consultation
          </a>
        }
      >
        <p>
          I find where AI can save your team time, then build the tools to do it. You stay in
          control of anything that matters, and you get a fixed price before any work starts.
        </p>
      </PageHero>

      <section id="who">
        <div className="wrap split">
          <h2>Who it's for</h2>
          <ul className="ticks big">
            {CONSULTING.who.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="what-i-do" className="tinted">
        <div className="wrap">
          <h2>What I do</h2>
          <div className="offers">
            {CONSULTING.offers.map((o) => (
              <div key={o.title} className="offer">
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <h2>How it works</h2>
          <Stations color="charcoal" stops={CONSULTING.steps} />
        </div>
      </section>

      <Faq items={CONSULTING.faq} />

      <ConsultSection intro="Tell me what's eating your team's time. A few lines is enough. There's no cost and no obligation, and you'll get a fixed price before any work starts." />
    </PageShell>
  )
}
