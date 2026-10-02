import { WEBSITE_FEATURES } from '../data'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Lines from '../components/Lines'
import ConsultSection from '../components/ConsultSection'

export default function ServicesIndex() {
  return (
    <PageShell current="services">
      <PageHero
        title="Find the line that fits your business."
        actions={
          <a className="btn primary" href="#consult">
            Book a free consultation
          </a>
        }
      >
        <p>
          Three services, all done by me, for local and service businesses in Ontario. Not sure which you need? That's what the free consultation is for.
        </p>
      </PageHero>

      <section className="services" aria-label="Services">
        <div className="wrap">
          <Lines Heading="h2">
            {(l) =>
              l.key === 'websites' && (
                <ul className="ticks">
                  {WEBSITE_FEATURES.map((f) => (
                    <li key={f.title}>
                      <b>{f.title}.</b> {f.body}
                    </li>
                  ))}
                </ul>
              )
            }
          </Lines>
        </div>
      </section>

      <ConsultSection />
    </PageShell>
  )
}
