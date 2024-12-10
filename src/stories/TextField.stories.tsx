import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from '../components/TextField'
import { useState } from 'react'
import { semanticColors } from '../components/designTokens/colors'
import { EmailIcon } from '../icons/EmailIcon'
import { PhoneIcon } from '../icons/PhoneIcon'

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
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isError: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    showPassword: { table: { disable: true } },
    onClickVisibleIcon: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Placeholder text',
    disabled: false,
    isError: false,
    errorMessage: 'エラーテキスト',
    readOnly: false,
    // required: false,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    size: 'md',
    placeholder: 'password',
    disabled: false,
    isError: false,
    errorMessage: 'パスワードが正しくありません',
    readOnly: false,
    // required: false,
  },

  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false)
    return (
      <TextField
        {...args}
        type={showPassword ? 'text' : 'password'}
        showPassword={showPassword}
        onClickVisibleIcon={() => setShowPassword(!showPassword)}
      />
    )
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    size: 'md',
    placeholder: 'test@sample.com',
    disabled: false,
    isError: false,
    errorMessage: '既に登録されているメールアドレスです',
    readOnly: false,
  },

  render: (args) => (
    <TextField
      {...args}
      placeholder={args.placeholder}
      endIcon={
        <EmailIcon
          size={args.size === 'md' ? 'lg' : 'md'}
          color={semanticColors.text.default}
        />
      }
    />
  ),
}

export const Tel: Story = {
  args: {
    type: 'tel',
    size: 'md',
    placeholder: '09012345678',
    disabled: false,
    isError: false,
    errorMessage: 'ハイフンなし、半角英数で入力してください',
    readOnly: false,
  },

  render: (args) => (
    <TextField
      {...args}
      placeholder={args.placeholder}
      endIcon={
        <PhoneIcon
          size={args.size === 'md' ? 'lg' : 'md'}
          color={semanticColors.text.default}
        />
      }
    />
  ),
}

export const Number: Story = {
  args: {
    type: 'number',
    size: 'md',
    placeholder: '0',
    disabled: false,
    isError: false,
    errorMessage: '半角英数で入力してください',
    readOnly: false,
  },
}
