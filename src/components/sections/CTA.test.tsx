import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA Section', () => {
  it('renders the section heading', () => {
    render(<CTA />)
    expect(screen.getByText(/Get started today/i)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CTA />)
    expect(screen.getByText(/personal onboarding/i)).toBeInTheDocument()
  })

  it('renders "Start for free" button', () => {
    render(<CTA />)
    expect(screen.getByRole('button', { name: /Start for free/i })).toBeInTheDocument()
  })

  it('renders "Schedule a demo" button', () => {
    render(<CTA />)
    expect(screen.getByRole('button', { name: /Schedule a demo/i })).toBeInTheDocument()
  })
})
