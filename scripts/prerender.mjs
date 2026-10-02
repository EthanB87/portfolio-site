// Runs after `vite build`. Renders each page to HTML so crawlers that don't run
// JavaScript (including many AI crawlers) still see the full content, and
// injects the JSON-LD on pages that ask for it.
import { readdir, readFile, writeFile, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const DIST = 'dist'
const SERVER = 'dist-server'

const { render, businessJsonLd } = await import(
  pathToFileURL(join(SERVER, 'entry-server.js')).href
)

async function htmlFiles(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await htmlFiles(p)))
    else if (entry.name.endsWith('.html')) out.push(p)
  }
  return out
}

// Escape "<" so the JSON can't close the script tag early.
const jsonLd = `<script type="application/ld+json">${JSON.stringify(businessJsonLd()).replace(
  /</g,
  '\\u003c'
)}</script>`

for (const file of await htmlFiles(DIST)) {
  let html = await readFile(file, 'utf8')
  const page = html.match(/data-page="([^"]+)"/)?.[1]
  if (!page || !html.includes('<!--app-->')) continue
  html = html.replace('<!--app-->', render(page)).replace('<!--jsonld-->', jsonLd)
  await writeFile(file, html)
  console.log(`prerendered ${file} (${page})`)
}

await rm(SERVER, { recursive: true, force: true })
