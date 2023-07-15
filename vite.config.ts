import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react()],
  // resolve: {
  //   alias: [
  //     // { find: '@assets', replacement: '/src/assets' },
  //     { find: '@component', replacement: '/src/component' },
  //     { find: '@Pages', replacement: '/src/Pages' },
  //   ],
  // },
})
