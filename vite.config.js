import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader' // <-- 1. Importa el nuevo plugin
import path from 'path'

export default defineConfig({
  base: '/maravellesMonAntic/', // <-- 3. Cambia la base si es necesario
  // 2. Reemplaza svgr() con svgLoader()
  plugins: [
    vue(),
    svgLoader() 
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})