import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './pages'
import './index.css'

const root = document.getElementById('root')
const Page = PAGES[root.dataset.page] || PAGES.home
const app = (
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)

// Built pages arrive prerendered (scripts/prerender.mjs), so hydrate them.
// In dev the root is empty, so render from scratch.
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
