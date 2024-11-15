/** @type {import('tailwindcss').Config} */
import { semanticColors } from './src/components/designTokens/colors'

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Noto Sans', 'sans-serif'],
      },
      fontSize: {
        h1: '83px',
        h2: '67px',
        h3: '53px',
        h4: '47px',
        h5: '34px',
        h6: '22px',
        'body-lg': '18px',
        'body-md': '14px',
        'body-sm': '11px',
        'label-lg': '14px',
        'label-md': '11px',
        'label-sm': '9px',
      },
      lineHeight: {
        90: '150%',
        80: '153%',
        70: '150%',
        60: '154%',
        50: '168%',
        40: '175%',
        30: '158%',
        20: '174%',
        10: '178%',
        5: '178%',
      },
      lineSpacing: {
        90: '1.66px',
        80: '1.34px',
        70: '0.795px',
        60: '0.94px',
        50: '0.85px',
        40: '0.66px',
        30: '0.54px',
        20: '0.42px',
        10: '0.33px',
        5: '0.27px',
      },
      colors: {
        text: {
          default: semanticColors.text.default,
          subtle: semanticColors.text.subtle,
          danger: semanticColors.text.danger,
          success: semanticColors.text.success,
          primaryAction: semanticColors.text.primaryAction,
          secondaryAction: semanticColors.text.secondaryAction,
          dangerAction: semanticColors.text.dangerAction,
          placeholder: semanticColors.text.placeholder,
        },
        background: {
          default: semanticColors.background.default,
          subtle: semanticColors.background.subtle,
          subler: semanticColors.background.subler,
          pressed: semanticColors.background.pressed,
          progressPrimary: semanticColors.background.progressPrimary,
          progressPrimaryTrack: semanticColors.background.progressPrimaryTrack,
          progressSecondary: semanticColors.background.progressSecondary,
          progressSecondaryTrack:
            semanticColors.background.progressSecondaryTrack,
        },
      },
    },
  },
  plugins: [],
}
