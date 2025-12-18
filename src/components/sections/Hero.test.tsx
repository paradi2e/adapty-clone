import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero Section', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders the ebook banner', () => {
    render(<Hero />)
    expect(screen.getByText(/ebook/i)).toBeInTheDocument()
  })

  it('renders the email input and CTA button', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /start for free/i })).toBeInTheDocument()
  })

  it('renders Book a demo link', () => {
    render(<Hero />)
    expect(screen.getByText(/book a demo/i)).toBeInTheDocument()
  })

  it('renders revenue text in heading', () => {
    render(<Hero />)
    // Revenue and management appear in heading and dashboard
    expect(screen.getAllByText(/revenue/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/management/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the subscriber stats card', () => {
    render(<Hero />)
    // Subscribers appears in dashboard and floating card
    expect(screen.getAllByText(/Subscribers/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/\+24\.5%/)).toBeInTheDocument()
  })
})
