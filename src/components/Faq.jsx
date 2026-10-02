import Reveal from './Reveal'

// Native <details> keeps every question keyboard and screen-reader accessible.
export default function Faq({ items, title = 'Common questions' }) {
  return (
    <section id="faq">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="label">FAQ</span>
          <h2>{title}</h2>
        </Reveal>
        <div className="faq">
          {items.map((it) => (
            <details key={it.q}>
              <summary>{it.q}</summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
