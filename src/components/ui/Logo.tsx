import { cn } from '@/utils'

export interface LogoProps {
  variant?: 'color' | 'white' | 'black'
  className?: string
}

// Using actual Adapty logo images
export function Logo({ variant = 'black', className }: LogoProps) {
  const logoSrc = variant === 'white'
    ? '/images/logos/adapty-white.svg'
    : variant === 'color'
    ? '/images/logos/adapty-color.svg'
    : '/images/logos/adapty-black.svg'

  return (
    <img
      src={logoSrc}
      alt="Adapty"
      className={cn('h-8 w-auto', className)}
    />
  )
}

export function LogoText({ variant = 'black', className }: LogoProps) {
  const logoSrc = variant === 'white'
    ? '/images/logos/adapty-white.svg'
    : variant === 'color'
    ? '/images/logos/adapty-color.svg'
    : '/images/logos/adapty-black.svg'

  return (
    <img
      src={logoSrc}
      alt="Adapty"
      className={cn('h-6 w-auto', className)}
    />
  )
}
