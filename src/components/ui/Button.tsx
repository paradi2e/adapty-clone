import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Icon to show on the left */
  iconLeft?: ReactNode
  /** Icon to show on the right */
  iconRight?: ReactNode
  /** Full width button */
  fullWidth?: boolean
  /** Loading state */
  isLoading?: boolean
}

const variantStyles = {
  primary: [
    'bg-primary text-white',
    'hover:bg-primary-hover',
    'active:bg-primary-active',
    'shadow-primary',
  ],
  secondary: [
    'bg-gray-100 text-gray-800',
    'hover:bg-gray-200',
    'active:bg-gray-250',
  ],
  outline: [
    'bg-transparent text-primary',
    'border border-primary',
    'hover:bg-primary/5',
    'active:bg-primary/10',
  ],
  ghost: [
    'bg-transparent text-gray-600',
    'hover:bg-gray-100 hover:text-gray-800',
    'active:bg-gray-200',
  ],
}

const sizeStyles = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-base gap-2',
  lg: 'h-14 px-8 text-lg gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      fullWidth = false,
      isLoading = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'font-semibold rounded-sm',
          'transition-all duration-150 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant styles
          variantStyles[variant],
          // Size styles
          sizeStyles[size],
          // Full width
          fullWidth && 'w-full',
          // Custom className
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
            {children}
            {iconRight && (
              <span className="flex-shrink-0 transition-transform group-hover:translate-x-1">
                {iconRight}
              </span>
            )}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
