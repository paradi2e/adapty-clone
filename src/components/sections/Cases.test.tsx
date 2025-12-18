import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cases } from './Cases'

describe('Cases Section', () => {
  it('renders the section heading', () => {
    render(<Cases />)
    expect(screen.getByText(/Read the real cases/i)).toBeInTheDocument()
  })

  it('renders case cards', () => {
    render(<Cases />)

    // Check for some specific case companies
    expect(screen.getByText('Productivity app')).toBeInTheDocument()
    expect(screen.getByText('Text on Pic')).toBeInTheDocument()
    expect(screen.getByText('Going Merry')).toBeInTheDocument()
    expect(screen.getByText('Shmoody')).toBeInTheDocument()
  })

  it('renders case results', () => {
    render(<Cases />)

    expect(screen.getByText('+50% in total revenue')).toBeInTheDocument()
    expect(screen.getByText('Over 30% MRR growth')).toBeInTheDocument()
    expect(screen.getByText('5× MRR growth')).toBeInTheDocument()
  })

  it('renders case categories', () => {
    render(<Cases />)

    expect(screen.getByText('Productivity')).toBeInTheDocument()
    // Photo & Video appears twice (Text on Pic and Fotorama)
    expect(screen.getAllByText('Photo & Video').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Travel')).toBeInTheDocument()
  })

  it('renders "Read all cases" button', () => {
    render(<Cases />)
    expect(screen.getByRole('button', { name: /Read all cases/i })).toBeInTheDocument()
  })

  it('renders 9 case cards', () => {
    render(<Cases />)
    // Each case card has a "Read more" link
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks).toHaveLength(9)
  })
})
