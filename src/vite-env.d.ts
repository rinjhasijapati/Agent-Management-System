/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                // rewritePath: path,
                changeOrigin: true,
                secure: false,
            }
        }
    }
})
