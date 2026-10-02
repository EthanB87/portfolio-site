import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

// Each page is its own HTML file, so it has its own title, meta tags and JSON-LD
// and works on any static host without rewrite rules.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        services: resolve(root, 'services/index.html'),
        aiVisibility: resolve(root, 'services/ai-visibility/index.html'),
        aiConsulting: resolve(root, 'services/ai-consulting/index.html'),
      },
    },
  },
})
