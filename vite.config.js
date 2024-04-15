import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  define: {
    "process.env": `import.meta.env.VITE_APP_SPACE_TOKEN`,
  }
})
