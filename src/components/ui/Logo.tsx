import { cn } from '@/utils'

export interface LogoProps {
  variant?: 'color' | 'white'
  className?: string
}

// Using actual Adapty logo images
export function Logo({ variant = 'color', className }: LogoProps) {
  const logoSrc = variant === 'white'
    ? '/images/logos/adapty-logo-white.svg'
    : '/images/logos/adapty-logo-color.svg'

  return (
    <img
      src={logoSrc}
      alt="Adapty"
      className={cn('h-8 w-auto', className)}
    />
  )
}

export function LogoText({ variant = 'color', className }: LogoProps) {
  const logoSrc = variant === 'white'
    ? '/images/logos/adapty-logo-white.svg'
    : '/images/logos/adapty-logo-color.svg'

  return (
    <img
      src={logoSrc}
      alt="Adapty"
      className={cn('h-6 w-auto', className)}
    />
  )
}
