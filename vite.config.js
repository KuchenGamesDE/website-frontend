import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    base: ``,
    plugins: [
        react(),
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg'],
            importScripts: ['./src/serviceWorker.js'],
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB max file bytes pre caching
                runtimeCaching: [
                    {
                        urlPattern: /\/src\/components\/Team\/team\.js/,
                        handler: 'NetworkOnly'
                    },
                    {
                        urlPattern: /\/src\/components\/Home\/FAQData\.js/,
                        handler: 'NetworkOnly'
                    }
                    // Add more patterns if needed
                ]
            }
        })
    ]
});
