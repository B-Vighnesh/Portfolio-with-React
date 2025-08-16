import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 👇 must match your repo name exactly
  base: '/My-Portfolio/',
  plugins: [react()],
})
