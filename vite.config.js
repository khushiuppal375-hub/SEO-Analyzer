// Importing defineConfig to help with Vite configuration
import { defineConfig } from 'vite'

// Importing React plugin so Vite can understand React files
import react from '@vitejs/plugin-react'

// Exporting the Vite config
export default defineConfig({
  // Adding React plugin to the list of Vite plugins
  plugins: [react()],
})
