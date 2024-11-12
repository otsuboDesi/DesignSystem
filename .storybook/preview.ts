import type { Preview } from '@storybook/react';
import '../src/index.css';
import { PaddingDecorator } from '../src/PaddingDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    fonts: {
      default: false,
    },
  },
  decorators: [PaddingDecorator],
};

export default preview;
