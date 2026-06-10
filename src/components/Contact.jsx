import { LINKS } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="wrap">
        <h2>
          Let's build something
          <br />
          worth shipping.
        </h2>
        <p>
          Open to full-stack and front-end engineering roles — and always happy to talk product,
          React, or the best trail within two hours of Waterloo.
        </p>
        <div className="contact-row">
          <Magnetic href={`mailto:${LINKS.email}`} className="primary">
            {LINKS.email}
          </Magnetic>
          <Magnetic href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </Magnetic>
          <Magnetic href={LINKS.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </Magnetic>
        </div>
      </Reveal>
    </section>
  )
}
