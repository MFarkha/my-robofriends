import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: ['**/.trunk'],
    include: ['app/**/*.{test,spec}.?(c|m)[jt]s?(x)']
  },
})