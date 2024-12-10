import type { StoryObj } from '@storybook/react'

import { semanticColors } from '../components/designTokens/colors'
import { IconLabel } from '../components/designTokens/IconLabel'
import { EmailIcon } from '../icons/EmailIcon'
import { PhoneIcon } from '../icons/PhoneIcon'
import { SearchIcon } from '../icons/SearchIcon'
import { VisiblityOffIcon } from '../icons/VisiblityOffIcon'
import { VisiblityOnIcon } from '../icons/VisiblityOnIcon'
import { WarningIcon } from '../icons/WarningIcon'
import { IIconSize, ISemanticColor } from '../@interface/icons'

const meta = {
  title: 'Design Tokens/IconList',
  tags: ['autodocs'],
  args: {
    size: 'lg',
    color: semanticColors.text.default,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: '',
    },
    color: {
      control: 'select',
      options: Object.keys(semanticColors.text),
      description: '',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<{ size: IIconSize; color: ISemanticColor }>

export const Icons: Story = {
  render: ({ size, color }) => {
    const selectedColor = semanticColors.text[color]
    return (
      <div className="flex flex-col gap-5">
        <IconLabel iconName="EmailIcon">
          <EmailIcon size={size} color={selectedColor} />
        </IconLabel>
        <IconLabel iconName="PhoneIcon">
          <PhoneIcon size={size} color={selectedColor} />
        </IconLabel>
        <IconLabel iconName="SearchIcon">
          <SearchIcon size={size} color={selectedColor} />
        </IconLabel>
        <IconLabel iconName="VisiblityOffIcon">
          <VisiblityOffIcon size={size} color={selectedColor} />
        </IconLabel>
        <IconLabel iconName="VisiblityOnIcon">
          <VisiblityOnIcon size={size} color={selectedColor} />
        </IconLabel>
        <IconLabel iconName="WarningIcon">
          <WarningIcon size={size} color={selectedColor} />
        </IconLabel>
      </div>
    )
  },
}
