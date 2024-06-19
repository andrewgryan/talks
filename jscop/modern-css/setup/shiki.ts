/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'material-theme-ocean',
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'css',
      'html'
    ],
  }
})
