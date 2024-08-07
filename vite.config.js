import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    host: '192.168.0.11',
    port: 3000, // You can use any port that is free
  },
  plugins: [react()],
  
})
