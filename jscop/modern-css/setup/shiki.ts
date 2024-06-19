/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      // dark: 'material-theme-ocean',
      dark: 'synthwave-84',
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
