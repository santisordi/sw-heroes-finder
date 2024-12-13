import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled:true
      },
      strategies: "injectManifest",
      srcDir: "src",
      filename:"sw.ts",
      registerType: "autoUpdate",
      injectManifest: {
        swDest:"dist/sw.js"
      },
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'en-EN',  
        name: 'SW Heroes Finder PWA',
        short_name:'PWA SW',
        description: 'Example of PWA',
        theme_color: '#19223c',
        background_color: '#d4d4d4',
        icons: [
          {
            src: "/pwa-64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose:"any"
          },
          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type:"image/png",
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        runtimeCaching: 
        [{
        urlPattern: /^https:\/\/swapi\.dev\/api\/people\/.*$/,
        handler: "CacheFirst" as const, 
        options: { 
          cacheName: "swapi-chache",
          cacheableResponse: {
            statuses: [0,200]
          },  
          expiration: {
            maxEntries: 100, 
            maxAgeSeconds: 7 * 24 * 60 * 60 
          }
        }
      }]
    }
    })
  ],
})
