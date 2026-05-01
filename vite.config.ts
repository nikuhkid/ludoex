import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ludoex/',
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
})
