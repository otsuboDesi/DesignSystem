import type { Meta, StoryObj } from '@storybook/react'

import { IconList } from '../components/IconList'
import { SearchIcon } from '../icons/SearchIcon'
import { semanticColors } from '../components/designTokens/colors'

const meta = {
  title: 'Components/IconList',
  component: IconList,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconList>

export default meta
type Story = StoryObj<typeof IconList>

export const Icons: Story = {
  render: () => (
    <IconList>
      <div className="flex flex-col items-center">
        <SearchIcon size="md" color={semanticColors.text.default} />
      </div>
    </IconList>
  ),
}
