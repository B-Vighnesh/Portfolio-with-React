import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/',   // 👈 MUST match repo name exactly
  plugins: [react()],
})
