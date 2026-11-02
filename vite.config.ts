import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
  const version = mode === 'v1' ? 'v1' : 'v2'

  return {
    base: version === 'v1' ? '' : './',
    publicDir: resolve(root, version, 'public'),
    plugins: [
      react(),
      {
        name: 'select-game-version-entry',
        transformIndexHtml: {
          order: 'pre',
          handler(html) {
            return html.replace('__GAME_ENTRY__', `/${version}/src/main.tsx`)
          },
        },
      },
    ],
  }
})