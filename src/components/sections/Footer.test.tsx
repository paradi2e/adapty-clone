import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../layout/Footer'

describe('Footer', () => {
  it('renders the footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText(/adapty/i)).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument()
    expect(screen.getByText(/Adapty Tech Inc/i)).toBeInTheDocument()
  })

  it('renders navigation columns', () => {
    render(<Footer />)

    // Check for some navigation sections
    expect(screen.getByText('Paywall management')).toBeInTheDocument()
    expect(screen.getByText('Infrastructure')).toBeInTheDocument()
    expect(screen.getByText('For developers')).toBeInTheDocument()
    expect(screen.getByText('SDK')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)

    // Check for social links by aria-label
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders language selector', () => {
    render(<Footer />)
    expect(screen.getByText('English')).toBeInTheDocument()
  })
})
