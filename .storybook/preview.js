import { setup } from '@storybook/vue3'
import { useNuxtApp } from '#app'
// import { useNuxtApp } from 'nuxt/dist/app'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

const { $debounce } = useNuxtApp()

setup((app) => {
  app.use($debounce)
})


// /** @type { import('@storybook/vue3').Preview } */
// const preview = {
//   parameters: {
//     backgrounds: {
//       default: "light",
//     },
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };