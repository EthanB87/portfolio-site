import { useEffect, useMemo, useRef, useState } from 'react'
import { LINKS } from '../data'

// Fuzzy subsequence match with simple scoring (streaks + word starts).
function fuzzy(q, s) {
  q = q.toLowerCase()
  s = s.toLowerCase()
  let qi = 0,
    score = 0,
    streak = 0
  for (let i = 0; i < s.length && qi < q.length; i++) {
    if (s[i] === q[qi]) {
      streak++
      qi++
      score += 1 + streak + (i === 0 || s[i - 1] === ' ' ? 4 : 0)
    } else streak = 0
  }
  return qi === q.length ? score : -1
}

export default function CommandPalette({ open, onClose, notify }) {
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef(null)

  const ACTIONS = useMemo(() => {
    const go = (id) => () => {
      onClose()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    const openUrl = (url) => () => {
      onClose()
      window.open(url, '_blank', 'noopener')
    }
    return [
      { ico: 'GO', label: 'Go to Selected work', hint: 'projects', run: go('work') },
      { ico: 'GO', label: 'Go to Experience', hint: 'history', run: go('experience') },
      { ico: 'GO', label: 'Go to Stack', hint: 'skills', run: go('skills') },
      { ico: 'GO', label: 'Go to About', hint: 'bio', run: go('about') },
      { ico: 'GO', label: 'Go to Contact', hint: 'hire', run: go('contact') },
      {
        ico: 'CP',
        label: 'Copy email address',
        hint: 'clipboard',
        run: () => {
          onClose()
          navigator.clipboard
            .writeText(LINKS.email)
            .then(() => notify('Email copied to clipboard'))
            .catch(() => notify(LINKS.email))
        },
      },
      { ico: 'LN', label: 'Open LinkedIn', hint: '↗', run: openUrl(LINKS.linkedin) },
      { ico: 'GH', label: 'Open GitHub', hint: '↗', run: openUrl(LINKS.github) },
      {
        ico: 'CV',
        label: 'Download résumé',
        hint: 'pdf',
        run: () => {
          onClose()
          notify('Résumé coming soon — email me!')
        },
      },
      { ico: 'TOP', label: 'Back to top', hint: 'home', run: go('top') },
    ]
  }, [onClose, notify])

  const filtered = useMemo(() => {
    const q = query.trim()
    if (!q) return ACTIONS.map((a) => ({ a, s: 0 }))
    return ACTIONS.map((a) => ({ a, s: fuzzy(q, a.label + ' ' + a.hint) }))
      .filter((x) => x.s >= 0)
      .sort((x, y) => y.s - x.s)
  }, [query, ACTIONS])

  // reset + focus on open
  useEffect(() => {
    if (open) {
      setQuery('')
      setSel(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => setSel(0), [query])

  // keyboard navigation while open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSel((s) => (filtered.length ? (s + 1) % filtered.length : 0))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSel((s) => (filtered.length ? (s - 1 + filtered.length) % filtered.length : 0))
      }
      if (e.key === 'Enter') filtered[sel]?.a.run()
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [open, filtered, sel, onClose])

  if (!open) return null

  return (
    <div
      id="palette-backdrop"
      className="open"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={(e) => e.target.id === 'palette-backdrop' && onClose()}
    >
      <div id="palette">
        <input
          ref={inputRef}
          id="palette-input"
          type="text"
          placeholder="Type a command or search…"
          autoComplete="off"
          spellCheck="false"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div id="palette-list">
          {filtered.length ? (
            filtered.map((x, i) => (
              <div
                key={x.a.label}
                className={`pal-item${i === sel ? ' sel' : ''}`}
                onClick={() => x.a.run()}
                onMouseMove={() => i !== sel && setSel(i)}
              >
                <span className="ico">{x.a.ico}</span>
                <span>{x.a.label}</span>
                <span className="hint">{x.a.hint}</span>
              </div>
            ))
          ) : (
            <div className="pal-empty">No matches — try "work" or "email"</div>
          )}
        </div>
        <div id="palette-foot">
          <span>
            <b>↑↓</b> navigate
          </span>
          <span>
            <b>↵</b> select
          </span>
          <span>
            <b>esc</b> close
          </span>
        </div>
      </div>
    </div>
  )
}
