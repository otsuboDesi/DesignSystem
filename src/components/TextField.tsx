import React, { InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { VisiblityOffIcon } from '../icons/VisiblityOffIcon'
import { VisiblityOnIcon } from '../icons/VisiblityOnIcon'
import { WarningIcon } from '../icons/WarningIcon'
import { semanticColors } from './designTokens/colors'

type TextFieldType = 'text' | 'password' | 'tel' | 'number' | 'email'
type TextFieldSize = 'sm' | 'md'

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: TextFieldType
  size?: TextFieldSize
  disabled: boolean
  readOnly?: boolean
  // required?: boolean
  isError?: boolean
  errorMessage?: string
  endIcon?: React.ReactNode
  showPassword?: boolean
  onClickVisibleIcon?: () => void
}

export const TextField = ({
  type = 'text',
  size = 'md',
  disabled,
  readOnly = false,
  // required = false,
  isError = false,
  errorMessage,
  endIcon,
  showPassword,
  onClickVisibleIcon,
  ...props
}: TextFieldProps) => {
  const baseClass =
    'rounded border border-1 transition duration-200 ease-in-out border-borderDefault'

  const sizeClass = {
    md: 'px-3 py-2  text-[14px]',
    sm: 'px-3 py-1 text-[11px]',
  }

  const hoverdClass = 'hover:border-borderHovered'
  const focusClass =
    'focus:border-borderFocused focus:ring-1 focus:ring-borderFocused'

  const disabledClass = 'opacity-30 hover:cursor-not-allowed focus:ring-0'

  const inputType =
    type === 'password' && showPassword !== undefined
      ? showPassword
        ? 'text'
        : 'password'
      : type

  return (
    <>
      <div className={classNames(disabled && disabledClass, 'relative')}>
        <input
          type={inputType}
          disabled={disabled}
          className={classNames(
            baseClass,
            sizeClass[size],
            hoverdClass,
            readOnly ? 'bg-backgroundDefault' : focusClass,
            isError && 'border-borderDanger',
            'w-full'
          )}
          readOnly={readOnly}
          // required={required}
          {...props}
        />
        {onClickVisibleIcon && (
          <button
            type="button"
            disabled={disabled}
            onClick={onClickVisibleIcon}
            className={classNames(
              hoverdClass,
              readOnly && 'pointer-events-none',
              'absolute inset-y-0 right-3 flex items-center pr-2'
            )}
          >
            {showPassword ? <VisiblityOnIcon /> : <VisiblityOffIcon />}
          </button>
        )}
        {!onClickVisibleIcon && endIcon && (
          <div
            className={classNames(
              hoverdClass,
              'absolute inset-y-0 right-3 flex items-center'
            )}
          >
            {endIcon}
          </div>
        )}
      </div>
      {isError && (
        <div
          className={`flex items-center pt-1 ${size === 'md' ? 'gap-1' : 'gap-[2px]'}`}
        >
          <WarningIcon size={size} color={semanticColors.text.danger} />
          <span
            className={`${size === 'md' ? 'text-[14px]' : 'text-[11px]'} text-textDanger`}
          >
            {errorMessage}
          </span>
        </div>
      )}
    </>
  )
}
