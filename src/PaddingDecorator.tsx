import { Decorator } from '@storybook/react';

export const PaddingDecorator: Decorator = (Story) => (
  <div className="p-10">
    <Story />
  </div>
);
