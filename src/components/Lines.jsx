import { LINES } from '../data'
import LineTag from './LineTag'
import Stations from './Stations'

// The three services as lines. Used on the home page and /services.
export default function Lines({ Heading = 'h3', children }) {
  return (
    <div className="lines">
      {LINES.map((l) => (
        <article key={l.key} id={l.key === 'websites' ? 'websites' : undefined} className={`line-block line-${l.color}`}>
          <div className="line-copy">
            <LineTag color={l.color}>{l.line}</LineTag>
            <Heading className="line-title">{l.title}</Heading>
            <p>{l.short}</p>
            {children?.(l)}
            <p className="line-price">{l.price}</p>
            <a className="text-link" href={l.href}>
              {l.linkLabel}
            </a>
          </div>
          <Stations color={l.color} stops={l.stops} />
        </article>
      ))}
    </div>
  )
}
