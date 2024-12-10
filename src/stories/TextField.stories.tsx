import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '../components/TextField'
import { useState } from 'react'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'tel', 'number', 'email'],
      description: 'Type of the input field',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the input field',
    },
    status: {
      control: 'select',
      options: ['default', 'disabled', 'focused', 'hovered', 'filled'],
      description: 'Visual status of the input field',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the field is read-only',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
    },
    hasEndIcon: {
      control: 'boolean',
      description: 'Whether the field has an end icon',
    },
    showPassword: {
      control: 'boolean',
      description: 'Whether the password is visible (for password fields)',
    },
    onClickVisibleIcon: {
      action: 'onClickVisibleIcon',
      description: 'Callback to toggle password visibility',
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'place holdere',
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
    placeholder: 'password',
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
    placeholder: 'Search...',
    status: 'default',
    hasEndIcon: true,
    endIcon: (
      <span role="img" aria-label="email-icon">
        🔍
      </span>
    ),
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    size: 'md',
    placeholder: 'Search...',
    status: 'default',
    hasEndIcon: true,
  },
}

export const Tell: Story = {
  args: {
    type: 'tel',
    size: 'md',
    placeholder: 'Search...',
    status: 'default',
    hasEndIcon: true,
  },
}
