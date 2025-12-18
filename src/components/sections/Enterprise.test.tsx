import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Enterprise } from './Enterprise'

describe('Enterprise Section', () => {
  it('renders the section heading', () => {
    render(<Enterprise />)
    expect(screen.getByText(/Enterprise-grade platform/i)).toBeInTheDocument()
  })

  it('renders security features', () => {
    render(<Enterprise />)

    expect(screen.getByText('Secure')).toBeInTheDocument()
    expect(screen.getByText('Reliable')).toBeInTheDocument()
    expect(screen.getByText('Responsive')).toBeInTheDocument()
  })

  it('renders security details', () => {
    render(<Enterprise />)

    expect(screen.getByText('SOC2 verified')).toBeInTheDocument()
    expect(screen.getByText('Encrypted')).toBeInTheDocument()
    expect(screen.getByText('99.99% SLA')).toBeInTheDocument()
  })

  it('renders trust section', () => {
    render(<Enterprise />)
    expect(screen.getByText(/Trusted for usability/i)).toBeInTheDocument()
    expect(screen.getByText(/Based on 500\+ reviews/i)).toBeInTheDocument()
  })

  it('renders review platforms', () => {
    render(<Enterprise />)

    expect(screen.getByText('Capterra')).toBeInTheDocument()
    expect(screen.getByText('Product Hunt')).toBeInTheDocument()
    expect(screen.getByText('GetApp')).toBeInTheDocument()
  })

  it('renders ratings', () => {
    render(<Enterprise />)

    // Multiple 4.8 ratings exist (G2 and GetApp)
    expect(screen.getAllByText('4.8 rating').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('4.9 rating')).toBeInTheDocument()
    expect(screen.getByText('#1')).toBeInTheDocument()
  })
})
