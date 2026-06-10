import TopoCanvas from './TopoCanvas'
import Magnetic from './Magnetic'

export default function Hero() {
  return (
    <header id="top">
      <TopoCanvas />
      <div className="hero-fade" />
      <div className="hero-inner">
        <div className="eyebrow rise d1">
          Full-stack engineer · React / TypeScript / .NET / Azure
        </div>
        <h1 className="rise d2">
          Engineering products
          <br />
          from <span className="ember">pixel</span> to pipeline.
        </h1>
        <p className="hero-sub rise d3">
          I'm <b>Ethan Brockman</b> — a full-stack engineer who sweats the front end. I ship React
          + TypeScript products end-to-end: interfaces people enjoy, backed by APIs and cloud
          infrastructure that hold up in production.
        </p>
        <div className="hero-meta rise d4">
          <Magnetic href="#work" className="primary">
            View selected work
          </Magnetic>
          <Magnetic href="#contact">Get in touch</Magnetic>
          <span className="hero-loc">
            ⌖ Waterloo, Ontario — open to full-stack &amp; front-end roles
          </span>
        </div>
      </div>
      <div className="scroll-cue">scroll</div>
    </header>
  )
}
