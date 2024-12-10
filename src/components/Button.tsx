import React from 'react'
import classNames from 'classnames'
import { CircularProgress } from './CircularProgress'

type IButtonVariant = 'primary' | 'secondary' | 'danger'
export type IButtonSize = 'lg' | 'md' | 'sm'

export interface ButtonProps {
  variant: IButtonVariant
  size: IButtonSize
  label: string
  disabled: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  isLoading: boolean
}

export const Button = ({
  size,
  variant,
  label = '',
  disabled,
  startIcon,
  endIcon,
  isLoading,
}: ButtonProps) => {
  const baseClass = 'flex rounded border-2 items-center'

  const focusClass =
    'focus:border-borderPrimaryActionFocused focus:outline-none focus:border-[3px]'

  const disabledClass = {
    primary:
      'opacity-30 hover:bg-backgroudPrimaryActionEnabled hover:border-borderPrimaryActionEnabled hover:cursor-not-allowed focus:ring-0',
    secondary:
      'opacity-30 hover:bg-backgroudSecondaryActionEnabled hover:border-borderSecondaryActionEnabled hover:cursor-not-allowed focus:ring-0',
    danger:
      'opacity-30 hover:bg-backgroudDangerEnabled hover:border-borderDangerEnabled hover:cursor-not-allowed focus:ring-0',
  }
  const variantClass = {
    primary:
      'bg-backgroundPrimaryActionEnabled border-backgroundPrimaryActionEnabled text-textPrimaryAction hover:bg-backgroundPrimaryActionHovered hover:border-backgroundPrimaryActionHovered',
    secondary:
      'bg-backgroundSecondaryActionEnabled border-borderSecondaryAction text-textSecondaryAction hover:bg-backgroundSecondaryActionHovered hover:border-backgroundSecondaryActionHovered',
    danger:
      'bg-backgroundDangerEnabled border-backgroundDangerEnabled text-textDangerAction hover:bg-backgroundDangerHovered hover:border-backgroundDangerHovered',
  }

  const sizeClass = {
    lg: 'py-3 px-4 gap-1 text-[14px]',
    md: 'py-2 px-3 gap-1 text-[14px]',
    sm: 'py-1 px-2 gap-[2px] text-[11px]',
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={classNames(
        baseClass,
        focusClass,
        disabledClass,
        variantClass[variant],
        sizeClass[size],
        (disabled || isLoading) && disabledClass[variant]
      )}
    >
      {isLoading && (
        <CircularProgress
          variant={
            variant === 'danger' || variant === 'primary'
              ? 'primary'
              : 'secondary'
          }
          size={size}
        />
      )}
      {!isLoading && startIcon && <span>{startIcon}</span>}
      {label}
      {endIcon && <span>{endIcon}</span>}
    </button>
  )
}
