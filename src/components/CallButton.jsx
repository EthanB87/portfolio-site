import { useState } from 'react'

// The phone number is stored as shifted character codes and only assembled when someone
// taps the button, so it never appears in the page's HTML for scrapers to read.
// To change the number: each digit's char code + 7 (e.g. "5" is 53, stored as 60).
const CODE = [60, 56, 64, 60, 58, 62, 64, 64, 64, 59]

export default function CallButton({ className = 'btn' }) {
  const [tapped, setTapped] = useState(false)

  const call = () => {
    const number = CODE.map((c) => String.fromCharCode(c - 7)).join('')
    window.location.href = `tel:+1${number}`
    setTapped(true)
  }

  return (
    <span className="call-wrap">
      <button type="button" className={className} onClick={call}>
        Call me
      </button>
      <span className="call-note" role="status">
        {tapped ? 'Opening your phone app. On a computer? Use the form or email instead.' : ''}
      </span>
    </span>
  )
}
