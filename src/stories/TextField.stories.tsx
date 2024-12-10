import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from '../components/TextField'
import { useState } from 'react'
import { SearchIcon } from '../icons/SearchIcon'
import { semanticColors } from '../components/designTokens/colors'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'tel', 'number', 'email'],
      description: 'Type of the input field',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      description: 'Size of the input field',
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'focused', 'hovered', 'filled'],
      description: 'Visual status of the input field',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Whether the field is read-only',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the field is disabled',
    },
    hasEndIcon: {
      control: { type: 'boolean' },
      description: 'Whether the field has an end icon',
    },
    showPassword: {
      control: { type: 'boolean' },
      description: 'Whether the password is visible (for password fields)',
    },
    onClickVisibleIcon: {
      action: 'onClickVisibleIcon',
      description: 'Callback to toggle password visibility',
    },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Placeholder text',
    status: 'default',
    readOnly: false,
    required: false,
    hasEndIcon: false,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    size: 'md',
    placeholder: 'Enter password',
    status: 'default',
    readOnly: false,
    required: false,
    hasEndIcon: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false)

    return (
      <TextField
        {...args}
        type={showPassword ? 'text' : 'password'}
        onClickVisibleIcon={() => setShowPassword(!showPassword)}
      />
    )
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    size: 'md',
    placeholder: 'Enter email',
    status: 'default',
    hasEndIcon: true,
  },
  render: (args) => (
    <div>
      <input type={args.type} placeholder={args.placeholder} />
      {args.hasEndIcon && (
        <SearchIcon
          size={args.size === 'md' ? 'lg' : 'md'}
          color={semanticColors.text.default}
        />
      )}
    </div>
  ),
}

export const Number: Story = {
  args: {
    type: 'number',
    size: 'md',
    placeholder: 'Enter number',
    status: 'default',
    hasEndIcon: true,
  },
}

export const Tel: Story = {
  args: {
    type: 'tel',
    size: 'md',
    placeholder: 'Enter phone number',
    status: 'default',
    hasEndIcon: true,
  },
}
