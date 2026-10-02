// Native <details> keeps every question keyboard and screen-reader accessible.
export default function Faq({ items, title = 'Common questions', tinted = false }) {
  return (
    <section id="faq" className={`faq-section${tinted ? ' tinted' : ''}`}>
      <div className="wrap">
        <h2>{title}</h2>
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
