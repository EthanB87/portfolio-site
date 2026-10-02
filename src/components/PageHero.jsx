// Top of a sub page: label, the page's single h1, intro and optional actions.
export default function PageHero({ label, title, children, actions }) {
  return (
    <div className="page-hero">
      <div className="wrap">
        <span className="label rise d1">{label}</span>
        <h1 className="rise d2">{title}</h1>
        <div className="page-hero-sub rise d3">{children}</div>
        {actions && <div className="hero-meta rise d4">{actions}</div>}
      </div>
    </div>
  )
}
