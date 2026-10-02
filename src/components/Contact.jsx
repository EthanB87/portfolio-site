import { LINKS } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="wrap">
        <span className="label">Start a project</span>
        <h2>
          Let's build something
          <br />
          for your business.
        </h2>
        <p>
          Have a shop, a brand, or an idea you want to bring online? Tell me a little about your
          business and what you have in mind. You don't need to know any tech terms, and I'll reply
          to you personally.
        </p>
        <div className="contact-row">
          <Magnetic href={`mailto:${LINKS.email}`} className="primary">
            {LINKS.email}
          </Magnetic>
          <Magnetic href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </Magnetic>
        </div>
      </Reveal>
    </section>
  )
}
