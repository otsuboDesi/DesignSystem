import type { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';

import { Typography } from '../components/designTokens/Typography';

interface SpacingBoxProps {
  caption: string;
  size: 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

const SpacingBox = ({ caption, size }: SpacingBoxProps) => {
  const heightClass = {
    xxxl: 'h-xxxl',
    xxl: 'h-xxl',
    xl: 'h-xl',
    lg: 'h-lg',
    md: 'h-md',
    sm: 'h-sm',
    xs: 'h-xs',
  };

  return (
    <div className="flex flex-col justify-end items-center">
      <div className={classNames('w-24 bg-red-300', heightClass[size])} />
      <Typography variant="body-lg-bold" color="default">
        {caption}
      </Typography>
    </div>
  );
};

const meta = {
  title: 'Design Tokens/Spacing',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
      hideNoControlsWarning: true,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Spacing: Story = {
  render: () => (
    <div className="flex gap-xl">
      <SpacingBox caption="xxxl (64px)" size="xxxl" />
      <SpacingBox caption="xxl (48px)" size="xxl" />
      <SpacingBox caption="xl (32px)" size="xl" />
      <SpacingBox caption="lg (24px)" size="lg" />
      <SpacingBox caption="md (16px)" size="md" />
      <SpacingBox caption="sm (12px)" size="sm" />
      <SpacingBox caption="xs (8px)" size="xs" />
    </div>
  ),
};