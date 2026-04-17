import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-with-React/',   // 👈 MUST match repo name exactly
  plugins: [react()],
})
