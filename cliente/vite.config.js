import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'cliente', 
  plugins: [react()],
  server: {
    open: true, 
    historyApiFallback: true, 
  },
})
