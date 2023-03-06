import path from 'path'
import { loadConfigFromFile, mergeConfig } from 'vite'
// import type { StorybookConfig } from '@storybook/vue3-vite'

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
// const config: StorybookConfig = {
  stories: [
    // '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  // addons: [
  //   '@storybook/addon-essentials',
  //   '@storybook/addon-links',
  //   '@storybook/addon-actions',
  //   '@storybook/addon-viewport',
  //   '@storybook/addon-docs',
  //   '@storybook/addon-controls',
  //   '@storybook/addon-backgrounds',
  //   '@storybook/addon-toolbars',
  //   '@storybook/addon-measure',
  //   '@storybook/addon-outline',
  //   '@storybook/addon-interactions',
  // ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  async viteFinal(baseConfig) {
    const configPath = path.resolve(__dirname, '../vite.config.ts')
    const { config: userConfig } = await loadConfigFromFile(
      {
        command: 'serve',
        mode: '',
      },
      configPath
    )

    return mergeConfig(baseConfig, {
      ...userConfig,
    })
  },
}
export default config