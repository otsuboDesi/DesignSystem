interface IconListProps {
  children: React.ReactNode
}

export const IconList = ({ children }: IconListProps) => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col items-center">{children}</div>
    </div>
  )
}
