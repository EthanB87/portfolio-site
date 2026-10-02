import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { PAGES } from './pages'

export { businessJsonLd } from './seo'

// Used by scripts/prerender.mjs to turn each page into real HTML at build time.
export function render(page) {
  const Page = PAGES[page]
  if (!Page) throw new Error(`Unknown page: ${page}`)
  return renderToString(
    <StrictMode>
      <Page />
    </StrictMode>
  )
}
