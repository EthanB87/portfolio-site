import { NEXT_STEPS } from '../data'
import Stations from './Stations'
import CallButton from './CallButton'
import ConsultForm from './ConsultForm'

// The interchange: every page ends here. Pass a different form (e.g. the snapshot form)
// as children to change what's being requested.
export default function ConsultSection({
  title = 'Book a free consultation',
  intro = "Tell me about your business and what you'd like help with. There's no cost and no obligation, and you'll get a fixed price before any work starts.",
  children,
}) {
  return (
    <section id="consult" className="consult">
      <div className="wrap consult-grid">
        <div className="consult-copy">
          <h2>{title}</h2>
          <p className="lede">{intro}</p>
          <h3 className="small-head">What happens next</h3>
          <Stations color="ink" stops={NEXT_STEPS} Heading="h4" vertical />
          <div className="call-row">
            <p>Rather talk now?</p>
            <CallButton />
          </div>
        </div>
        <div className="consult-form">{children || <ConsultForm />}</div>
      </div>
    </section>
  )
}
