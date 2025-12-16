import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Container max width */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Center content horizontally */
  centered?: boolean
  /** Content */
  children: ReactNode
}

const sizeStyles = {
  sm: 'max-w-[800px]',
  md: 'max-w-[1000px]',
  lg: 'max-w-[1100px]',  // Default - matches Adapty
  xl: 'max-w-[1280px]',
  full: 'max-w-full',
}

export function Container({
  size = 'lg',
  centered = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full',
        'px-4 sm:px-6 lg:px-8',  // Responsive padding
        sizeStyles[size],
        centered && 'mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
