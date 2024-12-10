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
        textDefault: semanticColors.text.default,
        textSubtle: semanticColors.text.subtle,
        textDanger: semanticColors.text.danger,
        textSuccess: semanticColors.text.success,
        textPrimaryAction: semanticColors.text.primaryAction,
        textSecondaryAction: semanticColors.text.secondaryAction,
        textDangerAction: semanticColors.text.dangerAction,
        textPlaceholder: semanticColors.text.placeholder,

        backgroundDefault: semanticColors.background.default,
        backgroundSubtle: semanticColors.background.subtle,
        backgroundSubler: semanticColors.background.subler,
        backgroundPressed: semanticColors.background.pressed,
        backgroundPrimaryActionEnabled:
          semanticColors.background.primaryActionEnabled,
        backgroundPrimaryActionHovered:
          semanticColors.background.primaryActionHovered,
        backgroundPrimaryActionPressed:
          semanticColors.background.primaryActionPressed,
        backgroundSecondaryActionEnabled:
          semanticColors.background.secondaryActionEnabled,
        backgroundSecondaryActionHovered:
          semanticColors.background.secondaryActionHovered,
        backgroundSecondaryActionPressed:
          semanticColors.background.secondaryActionPressed,
        backgroundDangerEnabled: semanticColors.background.dangerEnabled,
        backgroundDangerHovered: semanticColors.background.dangerHovered,
        backgroundDangerPressed: semanticColors.background.dangerPressed,
        backgroundProgressPrimary: semanticColors.background.progressPrimary,
        backgroundProgressPrimaryTrack:
          semanticColors.background.progressPrimaryTrack,
        backgroundProgressSecondary:
          semanticColors.background.progressSecondary,
        backgroundProgressSecondaryTrack:
          semanticColors.background.progressSecondaryTrack,

        borderDefault: semanticColors.border.default,
        borderSubtle: semanticColors.border.subtle,
        borderBold: semanticColors.border.bold,
        borderInverse: semanticColors.border.inverse,
        borderDanger: semanticColors.border.danger,
        borderSuccess: semanticColors.border.success,
        borderHovered: semanticColors.border.hovered,
        borderFocused: semanticColors.border.focused,
        borderDangerActionFocused: semanticColors.border.dangerActionFocused,
        borderPrimaryActionFocused: semanticColors.border.primaryActionFocused,
        borderSecondaryActionFocused:
          semanticColors.border.secondaryActionFocused,
        borderSecondaryActionEnabled:
          semanticColors.border.secondaryActionEnabled,
      },
    },
  },
  plugins: [],
}
