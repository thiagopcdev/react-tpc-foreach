import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
     lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
        external: ['react', 'react/jsx-runtime']
    },
  },
})
