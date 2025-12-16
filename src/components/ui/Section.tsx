import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background color variant */
  background?: 'white' | 'light' | 'dark' | 'aqua' | 'transparent'
  /** Vertical padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  /** HTML tag to render */
  as?: 'section' | 'div' | 'article' | 'aside'
  /** Content */
  children: ReactNode
}

const backgroundStyles = {
  white: 'bg-white',
  light: 'bg-gray-100',
  dark: 'bg-black text-white',
  aqua: 'bg-aqua-600',
  transparent: 'bg-transparent',
}

const paddingStyles = {
  none: 'py-0',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-20 lg:py-24',
  xl: 'py-20 md:py-24 lg:py-32',
}

export function Section({
  background = 'white',
  padding = 'lg',
  as: Component = 'section',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        'w-full',
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
