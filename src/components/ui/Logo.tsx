import { cn } from '@/utils'

export interface LogoProps {
  /** Logo color variant */
  variant?: 'color' | 'white'
  /** Custom className */
  className?: string
}

export function Logo({ variant = 'color', className }: LogoProps) {
  const primaryColor = variant === 'color' ? '#6720FF' : '#FFFFFF'
  const textColor = variant === 'color' ? '#0D0D0D' : '#FFFFFF'

  return (
    <svg
      width="100"
      height="34"
      viewBox="0 0 100 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-auto', className)}
      aria-label="Adapty"
    >
      {/* Icon - stylized "A" shape */}
      <path
        d="M12.5 2L2 28h6l2-5h9l2 5h6L17.5 2h-5zm2.5 6l3 12h-6l3-12z"
        fill={primaryColor}
      />
      {/* Text "dapty" */}
      <text
        x="30"
        y="24"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill={textColor}
      >
        dapty
      </text>
    </svg>
  )
}

// Alternative: Simple text-based logo for pixel-perfect matching
export function LogoText({ variant = 'color', className }: LogoProps) {
  const primaryColor = variant === 'color' ? 'text-primary' : 'text-white'
  const textColor = variant === 'color' ? 'text-gray-800' : 'text-white'

  return (
    <div className={cn('flex items-center gap-0', className)}>
      <span className={cn('text-2xl font-bold', primaryColor)}>A</span>
      <span className={cn('text-2xl font-bold', textColor)}>dapty</span>
    </div>
  )
}
