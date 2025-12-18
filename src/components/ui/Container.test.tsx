import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('is centered by default', () => {
    render(<Container data-testid="container">Content</Container>)
    const container = screen.getByTestId('container')
    expect(container.className).toContain('mx-auto')
  })

  it('can disable centering', () => {
    render(<Container centered={false} data-testid="container">Content</Container>)
    const container = screen.getByTestId('container')
    expect(container.className).not.toContain('mx-auto')
  })

  it('renders lg size by default', () => {
    render(<Container data-testid="container">Content</Container>)
    const container = screen.getByTestId('container')
    expect(container.className).toContain('max-w-[1100px]')
  })

  it('renders different sizes', () => {
    const { rerender } = render(<Container size="sm" data-testid="container">Content</Container>)
    let container = screen.getByTestId('container')
    expect(container.className).toContain('max-w-[800px]')

    rerender(<Container size="md" data-testid="container">Content</Container>)
    container = screen.getByTestId('container')
    expect(container.className).toContain('max-w-[1000px]')

    rerender(<Container size="xl" data-testid="container">Content</Container>)
    container = screen.getByTestId('container')
    expect(container.className).toContain('max-w-[1280px]')

    rerender(<Container size="full" data-testid="container">Content</Container>)
    container = screen.getByTestId('container')
    expect(container.className).toContain('max-w-full')
  })

  it('has responsive padding', () => {
    render(<Container data-testid="container">Content</Container>)
    const container = screen.getByTestId('container')
    expect(container.className).toContain('px-4')
    expect(container.className).toContain('sm:px-6')
    expect(container.className).toContain('lg:px-8')
  })

  it('applies custom className', () => {
    render(<Container className="custom-class" data-testid="container">Content</Container>)
    const container = screen.getByTestId('container')
    expect(container.className).toContain('custom-class')
  })
})
