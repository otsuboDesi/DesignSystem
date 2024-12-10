import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, IButtonSize } from '../components/Button'
import { SearchIcon } from '../icons/SearchIcon'
import { semanticColors } from '../components/designTokens/colors'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    label: 'ボタンラベル',
    disabled: false,
    startIcon: undefined,
    endIcon: undefined,
    isLoading: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description:
        'サイズ設定\n' +
        '- lg: 24px - アイコンlgと同様のサイズ\n' +
        '- md: 20px - アイコンmdと同様のサイズ、md・lgサイズのボタンなどで使用\n' +
        '- sm: 16px - アイコンsmと同様のサイズ、smサイズのボタンなどで使用',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger'],
      description: 'バリアント設定、基本的にはprimaryを使用 ',
    },
    startIcon: {
      control: false,
      description: 'ボタンの左側に表示するアイコン',
    },
    endIcon: {
      control: false,
      description: 'ボタンの右側に表示するアイコン',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

const getIconSize = (buttonSize: IButtonSize) => {
  if (buttonSize === 'lg') return 'md'
  if (buttonSize === 'md') return 'md'
  if (buttonSize === 'sm') return 'sm'
  return 'md'
}

const Template = (args: ButtonProps) => {
  const iconSize = getIconSize(args.size)
  console.log(
    'semanticColors.text.secondaryAction',
    semanticColors.text.secondaryAction
  )
  return (
    <Button
      {...args}
      startIcon={
        args.startIcon ? (
          <SearchIcon
            size={iconSize}
            color={
              args.variant === 'secondary'
                ? semanticColors.text.secondaryAction
                : semanticColors.text.primaryAction
            }
          />
        ) : undefined
      }
      endIcon={
        args.endIcon ? (
          <SearchIcon
            size={iconSize}
            color={
              args.variant === 'secondary'
                ? semanticColors.text.secondaryAction
                : semanticColors.text.primaryAction
            }
          />
        ) : undefined
      }
    />
  )
}

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
}

export const StartIconButton: Story = {
  render: Template,
  args: {
    startIcon: true,
  },
}

export const WithEndIconButton: Story = {
  render: Template,
  args: {
    endIcon: true,
  },
}

export const BothIconsButton: Story = {
  render: Template,
  args: {
    startIcon: true,
    endIcon: true,
  },
}
