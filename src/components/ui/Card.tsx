import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card style variant */
  variant?: 'default' | 'outline' | 'elevated' | 'ghost'
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Border radius */
  rounded?: 'sm' | 'md' | 'lg'
  /** Enable hover effect */
  hoverable?: boolean
  /** Content */
  children: ReactNode
}

const variantStyles = {
  default: 'bg-white border border-gray-200',
  outline: 'bg-transparent border border-gray-250',
  elevated: 'bg-white shadow-md border-0',
  ghost: 'bg-transparent border-0',
}

const paddingStyles = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const roundedStyles = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
}

export function Card({
  variant = 'default',
  padding = 'md',
  rounded = 'md',
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles
        'transition-all duration-150',
        // Variant styles
        variantStyles[variant],
        // Padding
        paddingStyles[padding],
        // Border radius
        roundedStyles[rounded],
        // Hover effect
        hoverable && [
          'cursor-pointer',
          'hover:shadow-lg hover:border-gray-300',
          'hover:-translate-y-0.5',
        ],
        // Custom className
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
