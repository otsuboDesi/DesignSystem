import type { Meta, StoryObj } from '@storybook/react'

import { semanticColors } from '../components/designTokens/colors'
import { IconLabel } from '../components/designTokens/IconLabel'
import { IconList } from '../components/IconList'
import { EmailIcon } from '../icons/EmailIcon'
import { PhoneIcon } from '../icons/PhoneIcon'
import { SearchIcon } from '../icons/SearchIcon'
import { VisiblityOffIcon } from '../icons/VisiblityOffIcon'
import { VisiblityOnIcon } from '../icons/VisiblityOnIcon'
import { WarningIcon } from '../icons/WarningIcon'

const meta = {
  title: 'Design Tokens/IconList',
  component: IconList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IconList>

export default meta
type Story = StoryObj<typeof IconList>

export const Icons: Story = {
  render: () => (
    <IconList>
      <div className="flex flex-col gap-5">
        <IconLabel iconName="EmailIcon">
          <EmailIcon size="lg" color={semanticColors.text.default} />
        </IconLabel>
        <IconLabel iconName="PhoneIcon">
          <PhoneIcon size="lg" color={semanticColors.text.default} />
        </IconLabel>
        <IconLabel iconName="SearchIcon">
          <SearchIcon size="lg" color={semanticColors.text.default} />
        </IconLabel>
        <IconLabel iconName="VisiblityOffIcon">
          <VisiblityOffIcon size="lg" color={semanticColors.text.default} />
        </IconLabel>
        <IconLabel iconName="VisiblityOnIcon">
          <VisiblityOnIcon size="lg" color={semanticColors.text.default} />
        </IconLabel>
        <IconLabel iconName="WarningIcon">
          <WarningIcon size="lg" color={semanticColors.text.default} />
        </IconLabel>
      </div>
    </IconList>
  ),
}
