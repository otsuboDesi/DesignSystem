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
      description:
        'サイズ設定\n' +
        '- xxl: 100px - ページ全体で使用\n' +
        '- xl: 48px - セクションなどで使用\n' +
        '- lg: 24px - アイコンlgと同様のサイズ\n' +
        '- md: 20px - アイコンmdと同様のサイズ、md・lgサイズのボタンなどで使用\n' +
        '- sm: 16px - アイコンsmと同様のサイズ、smサイズのボタンなどで使用',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'バリアント設定、基本的にはprimaryを使用 ',
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
