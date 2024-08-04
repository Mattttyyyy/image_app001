import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/skadi-image-app01/",
  preview: {
    host: true,
    port: 8070
  }
})
