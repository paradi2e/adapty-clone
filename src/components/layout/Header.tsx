import { useState, useEffect } from 'react'
import { cn } from '@/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LogoText } from '@/components/ui/Logo'

// Navigation items
const navItems = [
  { label: 'Product', href: '#product', hasDropdown: true },
  { label: 'Pricing', href: '#pricing', hasDropdown: false },
  { label: 'Blog', href: '#blog', hasDropdown: false },
]

// Dropdown content for Product
const productDropdown = [
  { label: 'Paywall Builder', href: '#paywall', description: 'Create paywalls without code' },
  { label: 'A/B Testing', href: '#ab-testing', description: 'Optimize your monetization' },
  { label: 'Analytics', href: '#analytics', description: 'Track subscription metrics' },
  { label: 'Integrations', href: '#integrations', description: 'Connect your tools' },
]

// Icons
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

interface HeaderProps {
  onMobileMenuToggle?: (isOpen: boolean) => void
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    onMobileMenuToggle?.(newState)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-white transition-shadow duration-200',
        isScrolled && 'shadow-md'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <LogoText />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1',
                    'text-gray-600 hover:text-gray-800',
                    'font-medium transition-colors'
                  )}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown />}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-md shadow-lg border border-gray-200 p-2 min-w-[280px]">
                      {productDropdown.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href={dropItem.href}
                          className={cn(
                            'block px-4 py-3 rounded-sm',
                            'hover:bg-gray-50 transition-colors'
                          )}
                        >
                          <div className="font-medium text-gray-800">{dropItem.label}</div>
                          <div className="text-sm text-gray-500">{dropItem.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="outline" size="sm">
              Sign up
            </Button>
            <Button variant="primary" size="sm">
              Schedule Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <Container>
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-100">
                <Button variant="outline" fullWidth>
                  Log in
                </Button>
                <Button variant="primary" fullWidth>
                  Schedule Demo
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
