import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from '../../components/designTokens/ColorPalette';
import { primitiveColors } from '../../components/designTokens/colors';

const meta = {
  title: 'Design Tokens/Colors/Primitive',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof ColorPalette>;

const flattenColors = (colorGroup: Record<string, string>) => {
  return Object.entries(colorGroup).reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>
  );
};

export const Gray: Story = {
  args: {
    colors: flattenColors(primitiveColors.gray),
    title: 'Gray',
  },
};

export const Red: Story = {
  args: {
    colors: flattenColors(primitiveColors.red),
    title: 'Red',
  },
};

export const Blue: Story = {
  args: {
    colors: flattenColors(primitiveColors.blue),
    title: 'Blue',
  },
};

export const Green: Story = {
  args: {
    colors: flattenColors(primitiveColors.green),
    title: 'Green',
  },
};

export const AllColors = () => (
  <div className="space-y-8">
    <ColorPalette colors={flattenColors(primitiveColors.gray)} title="Gray" />
    <ColorPalette colors={flattenColors(primitiveColors.red)} title="Red" />
    <ColorPalette colors={flattenColors(primitiveColors.blue)} title="Blue" />
    <ColorPalette colors={flattenColors(primitiveColors.green)} title="Green" />
  </div>
);
