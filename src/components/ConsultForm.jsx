import { useState } from 'react'
import { BUSINESS } from '../data'

// The site has no form backend, so submitting opens the visitor's email app
// with a pre-filled message to Ethan.
export default function ConsultForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Free consultation request: ${f.get('business')}`
    const body = [
      `Name: ${f.get('name')}`,
      `Business: ${f.get('business')}`,
      `Email: ${f.get('email')}`,
      `Help with: ${f.get('help')}`,
      '',
      f.get('message'),
    ].join('\n')
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-business">Business name</label>
        <input id="cf-business" name="business" type="text" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Your email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="cf-help">What would you like help with?</label>
        <select id="cf-help" name="help" defaultValue="Not sure yet">
          <option>Getting found when people ask AI</option>
          <option>A website or online shop</option>
          <option>Saving time with AI and automation</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-message">
          Anything else? <span className="optional">(optional)</span>
        </label>
        <textarea id="cf-message" name="message" rows="3" />
      </div>
      <button type="submit" className="btn primary">
        Request my free consultation
      </button>
      <p className="form-note" aria-live="polite">
        {sent
          ? `Your email app should now be open with your details filled in. Just press send. If nothing opened, email me at ${BUSINESS.email}.`
          : `This opens your email app with your details filled in. You can also email me directly at ${BUSINESS.email}.`}
      </p>
    </form>
  )
}
