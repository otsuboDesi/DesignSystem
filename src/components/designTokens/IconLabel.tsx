import { semanticColors } from './colors'

interface IconLabelProps {
  children: React.ReactNode
  iconName: string
}

export const IconLabel = ({ children, iconName }: IconLabelProps) => (
  <div className="flex gap-2 p-2 items-center">
    <div
      className={`w-16 h-16 min-w-16 rounded border border-[${semanticColors.border.default}] content-center justify-items-center`}
    >
      {children}
    </div>
    <div className="flex flex-col">
      <span className="text-[14px]">{iconName}</span>
    </div>
  </div>
)
