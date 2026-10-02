import { VISIBILITY } from '../data'

// Real client work on the AI visibility page. Copy lives in VISIBILITY.caseStudy.
export default function CaseStudy() {
  const c = VISIBILITY.caseStudy
  return (
    <section id="case-study" className="case-study">
      <div className="wrap">
        <div className="split">
          <div>
            <p className="case-kind">Real client work</p>
            <h2>{c.title}</h2>
            <p className="case-client">{c.client}</p>
          </div>
          <div className="prose">
            {c.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <h3 className="small-head">What I did</h3>
        <div className="offers case-fixes line-orange">
          {c.fixes.map((f) => (
            <div key={f.title} className="offer">
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>

        <div className="case-outcome">
          <p>
            <b>It keeps itself up to date.</b> {c.upkeep}
          </p>
          <p>
            <b>The result.</b> {c.outcome}
          </p>
          <a className="text-link" href={c.link} target="_blank" rel="noopener noreferrer">
            {c.linkLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
