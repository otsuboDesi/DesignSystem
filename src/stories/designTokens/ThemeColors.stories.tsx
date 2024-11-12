import type { Meta, StoryObj } from '@storybook/react';

import { ColorPalette } from '../../components/designTokens/ColorPalette';
import { themeColors } from '../../components/designTokens/colors';

const meta = {
  title: 'Design Tokens/Colors/ThemeColors',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof ColorPalette>;

const flattenColors = (colorGroup: Record<string, string>) => {
  return { ...colorGroup };
};

export const Neutral: Story = {
  args: {
    colors: flattenColors(themeColors.neutral),
  },
};

export const Primary: Story = {
  args: {
    colors: flattenColors(themeColors.primary),
  },
};

export const Danger: Story = {
  args: {
    colors: flattenColors(themeColors.danger),
  },
};

export const Success: Story = {
  args: {
    colors: flattenColors(themeColors.success),
  },
};
