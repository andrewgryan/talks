// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => {
            return ["l-map", "l-marker", "l-tile-layer"].includes(tag)
          }
        }
    },
    /* options for other plugins */
  },
  }
})

