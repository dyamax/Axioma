import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
  const version = mode === 'v1' ? 'v1' : 'v2'
  const versionRoot = resolve(root, version)

  return {
    root: versionRoot,
    base: './',
    publicDir: resolve(versionRoot, 'public'),
    build: {
      outDir: resolve(root, 'dist', version),
      emptyOutDir: true,
    },
    plugins: [react()],
  }
})