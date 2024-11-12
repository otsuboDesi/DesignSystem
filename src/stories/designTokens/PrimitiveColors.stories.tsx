import type { Meta, StoryObj } from '@storybook/react';

import { ColorPalette } from '../../components/designTokens/ColorPalette';
import { primitiveColors } from '../../components/designTokens/colors';

const meta = {
  title: 'Design Tokens/Colors/PrimitiveColors',
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

export const Gray: Story = {
  args: {
    colors: flattenColors(primitiveColors.gray),
  },
};

export const Red: Story = {
  args: {
    colors: flattenColors(primitiveColors.red),
  },
};

export const Blue: Story = {
  args: {
    colors: flattenColors(primitiveColors.blue),
  },
};

export const Green: Story = {
  args: {
    colors: flattenColors(primitiveColors.green),
  },
};
