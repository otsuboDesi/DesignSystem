import type { Meta, StoryObj } from '@storybook/react';

import { ColorPalette } from '../../components/designTokens/ColorPalette';
import { semanticColors } from '../../components/designTokens/colors';

const meta = {
  title: 'Design Tokens/Colors/SemanticColors',
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

export const Semantic: Story = {
  args: {
    colors: flattenColors(semanticColors.semantic),
    title: 'Semantic',
  },
};

export const Text: Story = {
  args: {
    colors: flattenColors(semanticColors.text),
    title: 'Text',
  },
};

export const Background: Story = {
  args: {
    colors: flattenColors(semanticColors.background),
    title: 'Background',
  },
};

export const Border: Story = {
  args: {
    colors: flattenColors(semanticColors.border),
    title: 'Border',
  },
};
