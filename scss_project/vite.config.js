import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig ({
  base: './',
  root: './src',
  server: {
    port: 3000
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [ViteImageOptimizer({
    png: {
      quality: 100
    },
    jpeg: {
      quality: 100
    },
    jpg: {
      quality: 100
    }
  })]
})