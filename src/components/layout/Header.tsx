import { useState, useEffect } from 'react'
import { cn } from '@/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LogoText } from '@/components/ui/Logo'
import {
  ChevronDownSmallIcon,
  ChevronRightSmallIcon,
  MenuIcon,
  CloseIcon
} from '@/components/icons'
import { navItems } from '@/data'
import { ProductMenu, CasesMenu, ResourcesMenu, DocsMenu } from './HeaderDropdowns'

interface HeaderProps {
  onMobileMenuToggle?: (isOpen: boolean) => void
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeProductTab, setActiveProductTab] = useState('product')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    onMobileMenuToggle?.(newState)
  }

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label)
    if (label === 'Product') {
      setActiveProductTab('product')
    }
  }

  const closeDropdown = () => setActiveDropdown(null)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-200',
        (isScrolled || activeDropdown) ? 'shadow-md bg-white' : 'bg-[#f7f5f2]'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex-shrink-0">
              <LogoText />
            </a>
            <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
              EN
              <ChevronDownSmallIcon />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.label)}
              >
                <a
                  href={item.hasDropdown ? undefined : item.href}
                  target={item.label === 'web2app' ? '_blank' : undefined}
                  rel={item.label === 'web2app' ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2',
                    'text-sm font-medium transition-colors rounded-lg',
                    activeDropdown === item.label && 'text-primary',
                    item.highlight ? 'text-gradient-orange' : 'text-gray-700 hover:text-gray-900'
                  )}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDownSmallIcon />}
                </a>
              </div>
            ))}
          </nav>

          {/* Dropdown Menus */}
          {activeDropdown === 'Product' && (
            <div onMouseLeave={closeDropdown}>
              <ProductMenu
                activeTab={activeProductTab}
                onTabChange={setActiveProductTab}
                onMouseEnter={() => setActiveDropdown('Product')}
              />
            </div>
          )}
          {activeDropdown === 'Cases' && (
            <div onMouseLeave={closeDropdown}>
              <CasesMenu onMouseEnter={() => setActiveDropdown('Cases')} />
            </div>
          )}
          {activeDropdown === 'Resources' && (
            <div onMouseLeave={closeDropdown}>
              <ResourcesMenu onMouseEnter={() => setActiveDropdown('Resources')} />
            </div>
          )}
          {activeDropdown === 'Docs' && (
            <div onMouseLeave={closeDropdown}>
              <DocsMenu onMouseEnter={() => setActiveDropdown('Docs')} />
            </div>
          )}

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href="https://app.adapty.io/login"
              className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap"
            >
              Log in
            </a>
            <a
              href="https://app.adapty.io/registration"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-[8px] hover:border-gray-400 transition-colors whitespace-nowrap"
            >
              Sign up
              <ChevronRightSmallIcon className="ml-1.5" />
            </a>
            <a
              href="https://adapty.io/schedule-demo/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-[8px] hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Contact sales
              <ChevronRightSmallIcon className="ml-1.5" />
            </a>
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
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <Container>
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'web2app' ? '_blank' : undefined}
                  className={cn(
                    "block py-2.5 px-3 rounded-lg font-medium",
                    item.highlight ? 'text-gradient-orange' : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-100 mt-4">
                <a href="https://app.adapty.io/login" className="block">
                  <Button variant="outline" fullWidth>Log in</Button>
                </a>
                <a href="https://app.adapty.io/registration" className="block">
                  <Button variant="outline" fullWidth>Sign up</Button>
                </a>
                <a href="https://adapty.io/schedule-demo/" className="block">
                  <Button variant="primary" fullWidth>Contact sales</Button>
                </a>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
