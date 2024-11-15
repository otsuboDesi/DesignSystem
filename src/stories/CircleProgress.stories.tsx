import type { Meta, StoryObj } from '@storybook/react'

import { CircularProgress } from '../components/CircularProgress'

const meta = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'xxl',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xxl', 'xl', 'lg', 'md', 'sm'],
      description: 'サイズを選択',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'バリアントを選択',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CircularProgress>

export default meta
type Story = StoryObj<typeof CircularProgress>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'xxl',
  },
}
