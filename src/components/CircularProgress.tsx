import classNames from 'classnames'

type ICircluarProgressSize = 'xxl' | 'xl' | 'lg' | 'md' | 'sm'
type ICircluarProgressVariant = 'primary' | 'secondary'

interface CircluarProgressProps {
  size: ICircluarProgressSize
  variant: ICircluarProgressVariant
}
export const CircularProgress = ({
  size = 'md',
  variant = 'primary',
}: CircluarProgressProps) => {
  const variantClass = {
    primary:
      'border-backgroundProgressPrimary border-t-backgroundProgressPrimaryTrack',
    secondary:
      'border-backgroundProgressSecondary border-t-backgroundProgressSecondaryTrack',
  }

  const sizeClass = {
    xxl: 'w-[100px] h-[100px] border-[10px]',
    xl: 'w-[48px] h-[48px] border-[5px]',
    lg: 'w-[24px] h-[24px] border-[3px]',
    md: 'w-[20px] h-[20px] border-[2px]',
    sm: 'w-[16px] h-[16px] border-[2px]',
  }
  return (
    <div
      className={classNames(
        'animate-spin rounded-full border-solid',
        sizeClass[size],
        variantClass[variant]
      )}
    />
  )
}
