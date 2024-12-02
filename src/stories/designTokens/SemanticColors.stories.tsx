import type { Meta, StoryObj } from '@storybook/react'

import { ColorPalette } from '../../components/designTokens/ColorPalette'
import { semanticColors } from '../../components/designTokens/colors'

const meta = {
  title: 'Design Tokens/Colors/SemanticColors',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ColorPalette>

export default meta
type Story = StoryObj<typeof ColorPalette>

const flattenColors = (colorGroup: Record<string, string>) => {
  return { ...colorGroup }
}

export const Text: Story = {
  args: {
    colors: flattenColors(semanticColors.text),
  },
}

export const Background: Story = {
  args: {
    colors: flattenColors(semanticColors.background),
  },
}

export const Border: Story = {
  args: {
    colors: flattenColors(semanticColors.border),
  },
}
