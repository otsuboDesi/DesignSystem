import { IIconSize } from '../@interface/icons'
import { semanticColors } from '../components/designTokens/colors'

interface PhoneIconProps {
  color?: string
  size?: IIconSize
}

export const PhoneIcon = ({
  color = semanticColors.text.default,
  size = 'md',
}: PhoneIconProps) => {
  const sizeMap = {
    lg: 24,
    md: 20,
    sm: 16,
  }

  const iconSize = sizeMap[size]
  return (
    <>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" />
        <g mask="url(#mask0_73_868)">
          <path
            d="M7 23C6.45 23 5.97917 22.8042 5.5875 22.4125C5.19583 22.0208 5 21.55 5 21V3C5 2.45 5.19583 1.97917 5.5875 1.5875C5.97917 1.19583 6.45 1 7 1H17C17.55 1 18.0208 1.19583 18.4125 1.5875C18.8042 1.97917 19 2.45 19 3V21C19 21.55 18.8042 22.0208 18.4125 22.4125C18.0208 22.8042 17.55 23 17 23H7ZM12 20.5C12.2833 20.5 12.5208 20.4042 12.7125 20.2125C12.9042 20.0208 13 19.7833 13 19.5C13 19.2167 12.9042 18.9792 12.7125 18.7875C12.5208 18.5958 12.2833 18.5 12 18.5C11.7167 18.5 11.4792 18.5958 11.2875 18.7875C11.0958 18.9792 11 19.2167 11 19.5C11 19.7833 11.0958 20.0208 11.2875 20.2125C11.4792 20.4042 11.7167 20.5 12 20.5ZM7 16H17V6H7V16Z"
            fill={color}
          />
        </g>
      </svg>
    </>
  )
}