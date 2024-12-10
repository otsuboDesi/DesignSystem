import React, { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

type TextFieldType = 'text' | 'password' | 'tel' | 'number' | 'email'
type TextFieldSize = 'sm' | 'md'
type TextFieldStatus = 'default' | 'disabled' | 'focused' | 'hovered' | 'filled'

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: TextFieldType
  size?: TextFieldSize
  hasEndIcon?: boolean
  readOnly?: boolean
  status?: TextFieldStatus
  required?: boolean
  endIcon?: React.ReactNode
  showPassword?: boolean
  onClickVisibleIcon?: () => void
}

export const TextField = ({
  type = 'text',
  size = 'md',
  hasEndIcon = false,
  readOnly = false,
  status = 'default',
  required = false,
  endIcon,
  showPassword,
  onClickVisibleIcon,
  ...props
}: TextFieldProps) => {
  const baseStyles =
    'rounded-md border outline-none transition duration-200 ease-in-out'
  const sizeStyles = size === 'sm' ? 'py-1 px-2 text-sm' : 'py-2 px-4 text-base'
  const statusStyles = {
    default: 'border-gray-300 focus:ring-2 focus:ring-blue-500',
    disabled: 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed',
    focused: 'border-blue-500 ring-2 ring-blue-500',
    hovered: 'border-gray-400',
    filled: 'border-green-500',
  }

  const computedStyles = `${baseStyles} ${sizeStyles} ${
    statusStyles[status]
  } ${readOnly ? 'bg-gray-100' : ''}`

  return (
    <div className="relative">
      <input
        type={type}
        className={classNames(computedStyles, 'w-full')}
        readOnly={readOnly}
        required={required}
        {...props}
      />
      {hasEndIcon && type === 'password' && onClickVisibleIcon && (
        <button
          type="button"
          onClick={onClickVisibleIcon}
          className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm text-blue-500 hover:text-blue-700"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
      {hasEndIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center">
          {endIcon}
        </div>
      )}
    </div>
  )
}
