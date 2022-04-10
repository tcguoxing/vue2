import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'cs': resolve(__dirname, 'src/components'),
      assets:"@/assets",
      common:"@/common",
      network:"@/network",
      views:"@/views",
      img:"@/imgs"
      // 'assets': resolve(__dirname, 'src/assets'),
      // 'common': resolve(__dirname, 'src/common'),
      // 'network': resolve(__dirname, 'src/network'),
      // 'views': resolve(__dirname, 'src/views'),
      // 'img': resolve(__dirname, 'src/imgs')
    }
  }
})
