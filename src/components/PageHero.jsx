import LineTag from './LineTag'

// Top of a sub page: the service's line tag, the page's single h1, intro and actions.
// The thick bottom rule is the service's line colour.
export default function PageHero({ color, line, title, children, actions }) {
  return (
    <header className={`page-hero${color ? ` line-${color}` : ' all-lines'}`}>
      <div className="wrap">
        {line && <LineTag color={color}>{line}</LineTag>}
        <h1>{title}</h1>
        <div className="lede">{children}</div>
        {actions && <div className="actions">{actions}</div>}
      </div>
    </header>
  )
}
