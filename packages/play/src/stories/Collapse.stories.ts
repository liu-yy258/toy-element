import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3-vite'
import { fn, within, userEvent, expect, clearAllMocks } from 'storybook/test'
import { set } from 'lodash-es'

import { ErCollapse, ErCollapseItem } from 'toy-element'

type Story = StoryObj<typeof ErCollapse>

const meta: Meta<typeof ErCollapse> = {
  title: 'Example/Collapse',
  component: ErCollapse,
  subcomponents: { ErCollapseItem },
  tags: ['autodocs'],
}

export const Default: Story = {
  render: (args) => ({
    components: {
      ErCollapse,
      ErCollapseItem,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <er-collapse v-bind="args">
      <er-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </er-collapse-item>
      <er-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </er-collapse-item>
      <er-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </er-collapse-item>
    </er-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ['a'],
  },
}

export default meta
