import { useEffect, useState } from 'react'
import { LINES } from '../data'

// The hero map: one line per service, each with its stops, all meeting at the
// "Free consultation" interchange. Lines draw on load and stops pop in as each line
// reaches them (CSS). Once drawn, a train runs each line to the interchange (SMIL,
// added after load and skipped entirely with reduced motion).
const Y = { orange: 60, steel: 230, charcoal: 400 }
const PATHS = {
  orange: 'M150 60 H520 L674 214 H700',
  steel: 'M150 230 H700',
  charcoal: 'M150 400 H520 L674 246 H700',
}
// Faint lines behind the services, so the map reads as part of a bigger network.
const GHOSTS = ['M0 150 H590 L690 50 H800', 'M0 318 H250 L345 413 H800', 'M610 0 V470']
const STOP_X = [250, 360, 470]
const DRAW = 1.1 // seconds to draw a line; keep in sync with .route in index.css
const LINE_GAP = 0.18

export default function RouteMap() {
  const [trains, setTrains] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setTrains(true)
  }, [])

  return (
    <svg className="route-map" viewBox="0 0 800 470" role="img" aria-labelledby="route-map-title">
      <title id="route-map-title">
        Route map: three services, AI visibility, websites and AI consulting, all starting at a
        free consultation
      </title>

      {GHOSTS.map((d) => (
        <path key={d} className="route-ghost" d={d} />
      ))}

      {LINES.map((l, i) => (
        <path
          key={l.key}
          id={`route-${l.color}`}
          data-line={l.color}
          className={`route line-${l.color}`}
          style={{ animationDelay: `${i * LINE_GAP}s` }}
          d={PATHS[l.color]}
          pathLength="1"
        />
      ))}

      {LINES.map((l, i) => (
        <g key={l.key} data-line={l.color} className="route-group">
          {STOP_X.map((x, s) => {
            // pop each stop roughly when its line's drawing passes it
            const delay = i * LINE_GAP + DRAW * ((x - 150) / 600) + 0.1
            return (
              <g key={x} className="route-stop-wrap" style={{ animationDelay: `${delay}s` }}>
                <circle className="route-stop" cx={x} cy={Y[l.color]} r="11" />
                <text className="route-label" x={x} y={Y[l.color] + 42} textAnchor="middle">
                  {l.stops[s]}
                </text>
              </g>
            )
          })}
          <a href={l.href} className="route-tag">
            <rect className={`line-${l.color}`} x="0" y={Y[l.color] - 24} width="160" height="48" rx="24" />
            <text x="80" y={Y[l.color] + 7} textAnchor="middle" className={`route-tag-text line-${l.color}`}>
              {l.line}
            </text>
          </a>
        </g>
      ))}

      {trains &&
        LINES.map((l, i) => {
          const begin = `${1.6 + i * 1.4}s`
          return (
            <circle key={l.key} className="train" r="8" opacity="0" data-line={l.color}>
              <animateMotion dur="4.5s" begin={begin} repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".45 0 .55 1">
                <mpath xlinkHref={`#route-${l.color}`} />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.06;.9;1" dur="4.5s" begin={begin} repeatCount="indefinite" />
            </circle>
          )
        })}

      <a href="#consult" className="route-hub">
        <rect className="hub-ring" x="682" y="196" width="36" height="68" rx="18" />
        <rect className="hub" x="682" y="196" width="36" height="68" rx="18" />
        <text x="700" y="304" textAnchor="middle">
          Free
        </text>
        <text x="700" y="332" textAnchor="middle">
          consultation
        </text>
      </a>
    </svg>
  )
}
