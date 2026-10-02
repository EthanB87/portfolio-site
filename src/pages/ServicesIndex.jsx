import { BUSINESS, SERVICES, SERVICE_LINES } from '../data'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'

export default function ServicesIndex() {
  const [websites, visibility, consulting] = SERVICE_LINES
  return (
    <PageShell current="services">
      <PageHero label="Services" title="How I can help your business.">
        <p>
          Three services, all done by me, {BUSINESS.name}, for businesses in the Greater Toronto
          Area. You deal with one person from the first email to long after launch.
        </p>
      </PageHero>

      <section className="service-lines" aria-label="Services">
        <div className="wrap">
          <Reveal className="line-card">
            <span className="label">01</span>
            <h2>{websites.title}</h2>
            <p>{websites.short}</p>
            <ul className="card-feats">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <span>
                    <b>{s.title}.</b> {s.body}
                  </span>
                </li>
              ))}
            </ul>
            <a className="btn" href={websites.href}>
              {websites.cta} →
            </a>
          </Reveal>

          <Reveal className="line-card">
            <span className="label">02</span>
            <h2>{visibility.title}</h2>
            <p>{visibility.short}</p>
            <p className="line-price">{visibility.price}</p>
            <a className="btn primary" href={visibility.href}>
              {visibility.cta} →
            </a>
          </Reveal>

          <Reveal className="line-card">
            <span className="label">03</span>
            <h2>{consulting.title}</h2>
            <p>{consulting.short}</p>
            <a className="btn primary" href={consulting.href}>
              {consulting.cta} →
            </a>
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <Reveal className="wrap">
          <span className="label">Not sure which you need?</span>
          <h2>Tell me about your business.</h2>
          <p>Send me a few lines about what you do and what you'd like help with. I'll reply personally and tell you honestly what I think will help.</p>
          <div className="contact-row">
            <Magnetic href={`mailto:${BUSINESS.email}`} className="primary">
              {BUSINESS.email}
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </PageShell>
  )
}
