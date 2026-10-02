// The coloured route bullet that names a service's line, like a subway line sign.
export default function LineTag({ color, children }) {
  return <span className={`line-tag line-${color}`}>{children}</span>
}
