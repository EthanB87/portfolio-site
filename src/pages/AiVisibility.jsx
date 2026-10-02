import { VISIBILITY } from '../data'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Stations from '../components/Stations'
import Faq from '../components/Faq'
import ExampleReport from '../components/ExampleReport'
import ConsultSection from '../components/ConsultSection'
import SnapshotForm from '../components/SnapshotForm'
import CaseStudy from '../components/CaseStudy'

export default function AiVisibility() {
  return (
    <PageShell current="services">
      <PageHero
        color="orange"
        line="Get found"
        title="When customers ask AI who to call, are you on the list?"
        actions={
          <>
            <a className="btn primary" href="#consult">
              Get a free snapshot
            </a>
            <a className="btn" href="#pricing">
              See pricing
            </a>
          </>
        }
      >
        <p>
          I measure how often ChatGPT, Gemini and Claude recommend your business, fix the listings,
          pages and facts they read, and re-test every month. For local service businesses in the
          Greater Toronto Area.
        </p>
      </PageHero>

      <section id="problem">
        <div className="wrap split">
          <h2>AI names a few businesses. The rest go unseen.</h2>
          <div className="prose">
            {VISIBILITY.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="tinted">
        <div className="wrap">
          <h2>How it works</h2>
          <Stations color="orange" stops={VISIBILITY.steps} />
        </div>
      </section>

      <CaseStudy />

      <section id="pricing" className="tinted">
        <div className="wrap">
          <h2>Start free. Pay only if you want me to fix it.</h2>
          <div className="fares">
            {VISIBILITY.tiers.map((t) => (
              <div key={t.name} className="fare">
                <h3>{t.name}</h3>
                <p className="fare-price">
                  <span className="amount">{t.priceLabel}</span>
                  {t.unit && <span className="unit">{t.unit}</span>}
                </p>
                <p className="fare-blurb">{t.blurb}</p>
                <ul className="ticks">
                  {t.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="fine-print">
            Prices are in Canadian dollars, plus HST. No one can guarantee that an AI tool will
            recommend a business, and I don't. What I promise is honest measurement, real fixes, and
            a clear monthly report.
          </p>
          <div className="actions">
            <a className="btn primary" href="#consult">
              Get a free snapshot
            </a>
          </div>
        </div>
      </section>

      <section id="report">
        <div className="wrap split">
          <div>
            <h2>What you get each month</h2>
            <p className="lede">
              A short report in plain language: how often each AI tool named you, what I changed,
              and who's still being named ahead of you.
            </p>
          </div>
          <ExampleReport />
        </div>
      </section>

      <Faq items={VISIBILITY.faq} tinted />

      <ConsultSection
        title="Get your free snapshot"
        intro="Tell me your business and where you work. I'll check who ChatGPT, Gemini and Claude name for your service in your town, and whether you're on the list. It's free, with no obligation."
      >
        <SnapshotForm />
      </ConsultSection>
    </PageShell>
  )
}
