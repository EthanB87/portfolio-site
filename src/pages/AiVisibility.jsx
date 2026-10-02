import { VISIBILITY } from '../data'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import Faq from '../components/Faq'
import SnapshotForm from '../components/SnapshotForm'
import Placeholder from '../components/Placeholder'

export default function AiVisibility() {
  return (
    <PageShell current="services">
      <PageHero
        label="AI visibility for local businesses"
        title="When homeowners ask AI who to call, are you on the list?"
        actions={
          <>
            <Magnetic href="#snapshot" className="primary">
              Get a free snapshot
            </Magnetic>
            <Magnetic href="#pricing">See pricing</Magnetic>
          </>
        }
      >
        <p>
          I measure how often ChatGPT, Gemini and Claude recommend your business, fix the listings,
          pages and facts they read, and re-test every month. I'm starting with roofing and
          exterior contractors in the Greater Toronto Area.
        </p>
      </PageHero>

      <section id="problem">
        <div className="wrap about-grid">
          <Reveal className="sec-head">
            <span className="label">The problem</span>
            <h2>AI names a few businesses. The rest are invisible.</h2>
          </Reveal>
          <Reveal className="prose">
            {VISIBILITY.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="label">How it works</span>
            <h2>Measure, fix, re-test.</h2>
          </Reveal>
          <div className="steps three">
            {VISIBILITY.steps.map((s, i) => (
              <Reveal key={s.title} d={i} className="step">
                <span className="label">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="services">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="label">Pricing</span>
            <h2>Start free. Pay only if you want me to fix it.</h2>
            <p className="sec-note">All prices are in Canadian dollars, plus HST.</p>
          </Reveal>
          <div className="tiers">
            {VISIBILITY.tiers.map((t, i) => (
              <Reveal key={t.name} d={i} className={`tier${t.featured ? ' tier-featured' : ''}`}>
                <h3>{t.name}</h3>
                <p className="price">
                  <span className="amount">{t.priceLabel}</span>
                  {t.unit && <span className="unit">{t.unit}</span>}
                </p>
                <p className="tier-blurb">{t.blurb}</p>
                <h4 className="label">What's included</h4>
                <ul className="card-feats">
                  {t.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <a className={`btn${i === 0 ? ' primary' : ''}`} href="#snapshot">
                  {i === 0 ? 'Request a snapshot' : 'Start with a free snapshot'}
                </a>
              </Reveal>
            ))}
          </div>
          <p className="fine-print">
            No one can guarantee that an AI tool will recommend a business, and I don't. What I
            promise is honest measurement, real fixes, and a clear monthly report.
          </p>
          <Placeholder>
            Results. Add a real, permission-approved client result or testimonial here once you
            have one, with the recommendation rate before and after. Do not add one until it exists.
          </Placeholder>
        </div>
      </section>

      <Faq items={VISIBILITY.faq} />

      <section id="snapshot" className="contact">
        <div className="wrap snapshot-wrap">
          <Reveal>
            <span className="label">Free snapshot</span>
            <h2>See who AI recommends in your town.</h2>
            <p>
              Tell me your business and where you work. I'll check who ChatGPT, Gemini and Claude
              name for your trade in your town, and whether you're on the list. It's free, and
              there's no obligation.
            </p>
          </Reveal>
          <Reveal>
            <SnapshotForm />
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
