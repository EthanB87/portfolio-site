import TopoCanvas from './TopoCanvas'
import Magnetic from './Magnetic'

export default function Hero() {
  return (
    <header id="top">
      <TopoCanvas />
      <div className="hero-fade" />
      <div className="hero-inner">
        <div className="eyebrow label rise d1">Websites &amp; online shops for small businesses</div>
        <h1 className="rise d2">
          A website that feels like <em>your</em> business.
        </h1>
        <p className="hero-sub rise d3">
          I'm <b>Ethan Brockman</b>. I design and build custom websites and online shops for small
          businesses. Each one is built around your brand, fast on every phone, and easy for you to
          update yourself.
        </p>
        <div className="hero-meta rise d4">
          <Magnetic href="#contact" className="primary">
            Start a project
          </Magnetic>
          <Magnetic href="#work">See my work</Magnetic>
          <span className="hero-loc">Based in Waterloo, Ontario</span>
        </div>
      </div>
      <div className="scroll-cue">scroll</div>
    </header>
  )
}
