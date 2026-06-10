import useReveal from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', d = 0, className = '', children, ...rest }) {
  const ref = useReveal(d)
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
