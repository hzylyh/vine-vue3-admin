import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false,
    proxy: {
      '/api': {
        // target: "http://96.45.170.240:5001",
        target: "http://localhost:8010",
        changeOrigin: true, // 允许跨域
        rewrite: path => path.replace('/', '/'),
      },
    },
  },
})
