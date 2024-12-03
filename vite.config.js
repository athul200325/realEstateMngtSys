import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/realestate':{
        target:'http://localhost:3000',
        secure:false,
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['@material-tailwind/react'],
  },
})
