// type IButtonVariant = 'primary' | 'secondary'|'danger'
// type IButtonSize =  'lg' | 'md' | 'sm'

// interface ButtonProps{
//     variant: IButtonVariant
//     size:IButtonSize
//     label:string
//     hasStartIcon: boolean
//     hasEndIcon: boolean
//     isLoading:boolean
// }

// export const Button = ({ size, variant, label, hasStartIcon, hasEndIcon, isLoading }: ButtonProps) => {
//     const variantClass = {
//       primary:
//         'border-background-progressPrimary border-t-background-progressPrimaryTrack',
//       secondary:
//         'border-background-progressSecondary border-t-background-progressSecondaryTrack',
//       danger:
//         'border-background-progressSecondary border-t-background-progressSecondaryTrack',
//     }

//     const sizeClass = {
//       lg: 'w-[24px] h-[24px] border-[3px]',
//       md: 'w-[20px] h-[20px] border-[2px]',
//       sm: 'w-[16px] h-[16px] border-[2px]',
//     }
//     return (
//         <div className={size,variant, }>
//             { isLoading}    { hasStartIcon}{ label}{hasEndIcon}
// </div>
//     )
// }'
