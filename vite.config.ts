import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1212, // 👈 change this to any port you want
    open: true  // 👈 optional: automatically opens browser
  }
})
