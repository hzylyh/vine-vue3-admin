import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: resolve(process.cwd(), '.', 'src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: resolve(process.cwd(), '.', 'types') + '/',
      },
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false,
    proxy: {
      '/api/': {
        // target: "http://96.45.170.240:5001",
        target: "http://localhost:8001",
        changeOrigin: true, // 允许跨域
        rewrite: path => path.replace('/api/', '/'),
      },
    },
  },
})
