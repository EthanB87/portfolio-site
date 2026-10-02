import { FACTS } from '../data'

// Comes straight after the hero: who Ethan is and what he offers, leading into the
// service lines below it.
export default function About() {
  return (
    <section id="about" className="about tinted">
      <div className="wrap about-grid">
        <div>
          <h2>Hi, I'm Ethan.</h2>
          <p>
            I'm a software engineer in Ontario, and I work with local and service
            businesses in three ways. I help you <b className="key line-orange">get found</b> when people ask AI who to call. I
            build websites and online shops that help you <b className="key line-steel">get chosen</b>. And I take the
            repetitive work off your plate with practical AI, so your business can{' '}
            <b className="key line-charcoal">run smoother</b>.
          </p>
          <p>
            Many of the businesses I work with are one person doing everything: the owner, the
            buyer, the marketer, and whoever answers the email at 10pm. When you work with me,{' '}
            <b>you work with me</b>. I do the work myself, explain it in plain language, and stick
            around afterwards. By day I'm a software engineer building systems thousands of people
            rely on, and your project gets the same care.
          </p>
        </div>
        <dl className="facts">
          {FACTS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
