import RouteMap from './RouteMap'
import CallButton from './CallButton'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Your business, on the map.</h1>
          <p className="lede">
            I'm Ethan Brockman. I help local businesses in Ontario get found when
            people ask AI who to call, win customers with a website that works on every phone, and
            save hours with practical automation.
          </p>
          <p className="lede">Every project starts with a free consultation.</p>
          <div className="actions">
            <a className="btn primary" href="#consult">
              Book a free consultation
            </a>
            <CallButton />
          </div>
        </div>
        <div className="map-board">
          <RouteMap />
        </div>
      </div>
    </header>
  )
}
