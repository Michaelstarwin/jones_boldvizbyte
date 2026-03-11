import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // Listen on all addresses (0.0.0.0)
    port: 4173,
    allowedHosts: [
      'boldvizbyte.onrender.com', // Whitelist Render domain
      'michael-boldvizbyte.onrender.com'
    ]
  },
  server: {
    host: true
  }
})
