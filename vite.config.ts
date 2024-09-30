import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";


export default defineConfig({
  plugins: [react({ devTarget: 'es2022' })],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        // rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
        secure: false
      }
    }
  }
})