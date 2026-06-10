import { useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

// Button/link that leans toward the cursor.
export default function Magnetic({ as: Tag = 'a', className = '', children, ...rest }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const onMove = (e) => {
    if (reduced) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${
      (e.clientY - r.top - r.height / 2) * 0.3
    }px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <Tag ref={ref} className={`btn ${className}`} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      {children}
    </Tag>
  )
}
