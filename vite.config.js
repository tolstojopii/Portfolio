import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),          // ← главный алиас
      '@components': path.resolve(__dirname, './src/shared/ui'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@constants': path.resolve(__dirname, './src/shared/lib/constants'),
      '@hooks': path.resolve(__dirname, './src/shared/lib/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})