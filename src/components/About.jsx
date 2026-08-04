import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>About</h2>
          <span className="sec-note">{'// the short version'}</span>
        </Reveal>
        <div className="about-grid single">
          <Reveal>
            <p>
              I'm a full-stack engineer in Waterloo. I care about how software{' '}
              <b>feels to use</b>, and I get to prove it at every layer. By day I build and run
              production systems at Equitable Life. Nights and weekends I build my own products and
              take on the occasional client, and I handle all of it, from the design down to the
              support emails.
            </p>
            <p>
              I'm looking for a team where front-end craft is taken seriously and engineers are
              trusted with the whole problem.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
