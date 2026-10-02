import { useState } from 'react'
import { BUSINESS } from '../data'

// The site has no form backend, so submitting opens the visitor's email app
// with a pre-filled message to Ethan.
export default function SnapshotForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Free AI visibility snapshot: ${f.get('business')}`
    const body = [
      `Business name: ${f.get('business')}`,
      `Website: ${f.get('website')}`,
      `Town or city: ${f.get('town')}`,
      `Email: ${f.get('email')}`,
    ].join('\n')
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="snapshot-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="sf-business">Business name</label>
        <input id="sf-business" name="business" type="text" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="sf-website">Website</label>
        <input
          id="sf-website"
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="yourbusiness.ca"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="sf-town">Town or city</label>
        <input id="sf-town" name="town" type="text" placeholder="e.g. Oakville" required />
      </div>
      <div className="field">
        <label htmlFor="sf-email">Your email</label>
        <input id="sf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <button type="submit" className="btn primary">
        Request my free snapshot
      </button>
      <p className="form-note" aria-live="polite">
        {sent
          ? `Your email app should now be open with your details filled in. Just press send. If nothing opened, email me at ${BUSINESS.email}.`
          : `This opens your email app with your details filled in. You can also email me directly at ${BUSINESS.email}.`}
      </p>
    </form>
  )
}
