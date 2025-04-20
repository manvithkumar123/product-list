// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/product-list/', // 👈 this is the key fix
  plugins: [react()],
})