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
          I'm <b>Ethan Brockman</b>, a full-stack engineer who does his best work on the front end.
          I build React and TypeScript products, from the interface down to the APIs and cloud they
          run on. Then I ship them and keep them running when real people are using them.
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
