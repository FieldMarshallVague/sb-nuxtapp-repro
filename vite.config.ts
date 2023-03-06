import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  // build: { assetsInlineLimit: 0 }, // testing possible fix for missing images.
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router'],
      // dirs: ['./composables', './node_modules/nuxt/dist/app'],
      dirs: ['./composables'],
      vueTemplate: true
    }),
    Components({
      dirs: [
        './components/'
        // Component folders that should be auto-imported
      ],
      dts: true,
      directoryAsNamespace: true
    })
  ],
  resolve: {
    alias: {
      // '~': fileURLToPath(new URL('./', import.meta.url)),
      '~~': fileURLToPath(new URL('.', import.meta.url)),
      '@': fileURLToPath(new URL('.', import.meta.url)),
      '#app': fileURLToPath(
        new URL('./node_modules/nuxt/dist/app', import.meta.url)
      ),
      '#build': fileURLToPath(
        new URL('.nuxt', import.meta.url)
      ),
      '#head': fileURLToPath(
        new URL('./node_modules/nuxt/dist/head/runtime', import.meta.url)
      ),
      // Add any other aliases you use in your code base
      // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
    }
  }
  // devBundler: '/legacy',  // this doesn't work outside the nuxt.config.ts
})

// "paths": {
//   "~~": [
//     "."
//   ],
//   "~~/*": [
//     "./*"
//   ],
//   "@@": [
//     "."
//   ],
//   "@@/*": [
//     "./*"
//   ],
//   "~": [
//     "."
//   ],
//   "~/*": [
//     "./*"
//   ],
//   "@": [
//     "."
//   ],
//   "@/*": [
//     "./*"
//   ],
//   "assets": [
//     "assets"
//   ],
//   "assets/*": [
//     "assets/*"
//   ],
//   "public": [
//     "public"
//   ],
//   "public/*": [
//     "public/*"
//   ],
//   "#app": [
//     "node_modules/nuxt/dist/app"
//   ],
//   "#app/*": [
//     "node_modules/nuxt/dist/app/*"
//   ],
//   "vue-demi": [
//     "node_modules/nuxt/dist/app/compat/vue-demi"
//   ],
//   "pinia": [
//     "node_modules/pinia/dist/pinia"
//   ],
//   "#image": [
//     "node_modules/@nuxt/image-edge/dist/runtime"
//   ],
//   "#image/*": [
//     "node_modules/@nuxt/image-edge/dist/runtime/*"
//   ],
//   "#head": [
//     "node_modules/nuxt/dist/head/runtime"
//   ],
//   "#head/*": [
//     "node_modules/nuxt/dist/head/runtime/*"
//   ],
//   "#imports": [
//     ".nuxt/imports"
//   ],
//   "#build": [
//     ".nuxt"
//   ],
//   "#build/*": [
//     ".nuxt/*"
//   ],
//   "#components": [
//     ".nuxt/components"
//   ]
// }
