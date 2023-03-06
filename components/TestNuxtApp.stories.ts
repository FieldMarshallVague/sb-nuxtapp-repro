import type { Meta, StoryObj } from '@storybook/vue3'
import TestNuxtApp from '~~/components/TestNuxtApp.vue'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction

const meta: Meta<typeof TestNuxtApp> = {
  component: TestNuxtApp,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestNuxtApp>

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const defaultTestNuxtApp: Story = {
  render: (args) => ({
    components: { TestNuxtApp },
    setup() {
      return { args }
    },
    template: '<TestNuxtApp />',
  }),
}

