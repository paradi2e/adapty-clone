import { useState, useEffect } from 'react'
import { cn } from '@/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LogoText } from '@/components/ui/Logo'

// Navigation items matching original adapty.io
const navItems = [
  { label: 'Product', href: '#', hasDropdown: true },
  { label: 'Cases', href: '#', hasDropdown: true },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'Docs', href: 'https://docs.adapty.io/', hasDropdown: true },
  { label: 'Blog', href: 'https://adapty.io/blog/', hasDropdown: false },
  { label: 'Pricing', href: 'https://adapty.io/pricing/', hasDropdown: false },
  { label: 'web2app', href: 'https://funnelfox.com/', hasDropdown: false, highlight: true },
]

// Product mega-menu structure with sidebar tabs
const productMenuTabs = [
  { id: 'product', label: 'Product' },
  { id: 'solution', label: 'Solution' },
  { id: 'sdk', label: 'Adapty SDK' },
  { id: 'integrations', label: 'Integrations' },
]

// Product tab content
const productTabContent = {
  product: {
    headers: ['Why Adapty?', 'Product changelog', 'System status'],
    columns: [
      {
        title: 'TECH',
        items: [
          { label: 'Subscriptions SDK', href: '/sdk/', icon: '/images/icons/menu/icon-sdk.svg' },
          { label: 'Subscribers sync', href: '/subscription-sync/' },
          { label: 'Fallback paywalls', href: '/fallback-paywalls/' },
          { label: 'Refund saver', href: '/refund-saver/' },
        ]
      },
      {
        title: 'PAYWALLS',
        items: [
          { label: 'Paywall builder', href: '/paywall-builder/' },
          { label: 'Onboarding builder', href: '/onboarding-builder/' },
          { label: 'AI generator', href: '/ai-paywall-generator/' },
          { label: 'A/B testing', href: '/paywall-ab-testing/' },
          { label: 'Autopilot', href: '/autopilot/', isNew: true },
          { label: 'Targeting', href: '/paywall-targeting/' },
          { label: 'Localizations', href: '/paywall-localization/' },
          { label: 'Remote config', href: '/remote-config/' },
        ]
      },
      {
        title: 'ANALYTICS',
        items: [
          { label: 'Revenue analytics', href: '/revenue-analytics/' },
          { label: 'LTV analytics', href: '/ltv-analytics/' },
          { label: 'AI LTV and revenue predictions', href: '/predictive-analytics/' },
          { label: 'LTV prediction model', href: '/ltv-prediction-model/' },
          { label: 'Apple ads manager', href: '/apple-ads-manager/' },
        ]
      }
    ]
  },
  solution: {
    columns: [
      {
        title: 'BY ROLE',
        items: [
          { label: 'For developers', href: '/for-developers/' },
          { label: 'For marketers', href: '/for-marketers/' },
          { label: 'For app owners', href: '/for-app-owners/' },
        ]
      },
      {
        title: 'BY STAGE',
        items: [
          { label: 'Indie', href: '/for-indie/' },
          { label: 'Startups', href: '/for-startups/' },
          { label: 'Publishers', href: '/for-publishers/' },
          { label: 'Enterprise', href: '/for-enterprises/' },
        ]
      },
      {
        title: 'BY CASE',
        items: [
          { label: 'Integrate IAP/subscriptions', href: '/subscription-integration/' },
          { label: 'Grow subscription revenue', href: '/revenue-growth/' },
          { label: 'Analyze revenue performance', href: '/performance-analytics/' },
        ]
      }
    ]
  },
  sdk: {
    columns: [
      {
        title: 'MOBILE SDK',
        isGrid: true,
        items: [
          { label: 'iOS', href: 'https://docs.adapty.io/docs/ios', icon: '/images/icons/menu/ios.svg' },
          { label: 'React Native', href: 'https://docs.adapty.io/docs/react-native', icon: '/images/icons/menu/react-native.svg' },
          { label: 'Flutter', href: 'https://docs.adapty.io/docs/flutter', icon: '/images/icons/menu/flutter.svg' },
          { label: 'Capacitor', href: 'https://docs.adapty.io/docs/capacitor', icon: '/images/icons/menu/capacitor.svg' },
          { label: 'Android', href: 'https://docs.adapty.io/docs/android', icon: '/images/icons/menu/android.svg' },
          { label: 'Unity', href: 'https://docs.adapty.io/docs/unity', icon: '/images/icons/menu/unity.svg' },
          { label: 'FlutterFlow', href: 'https://docs.adapty.io/docs/flutterflow', icon: '/images/icons/menu/flutterflow.svg' },
          { label: 'Kotlin Multiplatform', href: 'https://docs.adapty.io/docs/kotlin-multiplatform', icon: '/images/icons/menu/kotlin-multiplatform.svg' },
        ]
      },
      {
        title: 'WEB PAYMENTS',
        items: [
          { label: 'Stripe', href: '/integrations/stripe/', icon: '/images/icons/integrations/stripe.svg' },
        ]
      },
      {
        title: 'WEB API',
        items: [
          { label: 'Server-side API', href: 'https://docs.adapty.io/reference' },
        ]
      }
    ]
  },
  integrations: {
    columns: [
      {
        title: 'INTEGRATIONS',
        isGrid: true,
        gridCols: 5,
        items: [
          { label: 'Adjust', href: '/integrations/adjust/', icon: '/images/icons/integrations/adjust.svg' },
          { label: 'Airbridge', href: '/integrations/airbridge/', icon: '/images/icons/integrations/airbridge.svg' },
          { label: 'Amazon S3', href: '/integrations/amazon-s3/', icon: '/images/icons/integrations/amazon-s3.svg' },
          { label: 'Amplitude', href: '/integrations/amplitude/', icon: '/images/icons/integrations/amplitude.svg' },
          { label: 'AppMetrica', href: '/integrations/appmetrica/', icon: '/images/icons/integrations/appmetrica.svg' },
          { label: 'Apple Ads', href: '/integrations/apple-ads/', icon: '/images/icons/integrations/apple-ads.svg' },
          { label: 'AppsFlyer', href: '/integrations/appsflyer/', icon: '/images/icons/integrations/appsflyer.svg' },
          { label: 'Asapty', href: '/integrations/asapty/', icon: '/images/icons/integrations/asapty.svg' },
          { label: 'Branch', href: '/integrations/branch/', icon: '/images/icons/integrations/branch.svg' },
          { label: 'Braze', href: '/integrations/braze/', icon: '/images/icons/integrations/braze.svg' },
          { label: 'Facebook Ads', href: '/integrations/facebook-ads/', icon: '/images/icons/integrations/facebook-ads.svg' },
          { label: 'Firebase', href: '/integrations/firebase/', icon: '/images/icons/integrations/firebase.svg' },
          { label: 'Google Analytics', href: '/integrations/google-analytics/', icon: '/images/icons/integrations/firebase.svg' },
          { label: 'Cloud Storage', href: '/integrations/cloud-storage/', icon: '/images/icons/integrations/cloud-storage.svg' },
          { label: 'Mixpanel', href: '/integrations/mixpanel/', icon: '/images/icons/integrations/mixpanel.svg' },
          { label: 'OneSignal', href: '/integrations/onesignal/', icon: '/images/icons/integrations/onesignal.svg' },
          { label: 'PostHog', href: '/integrations/posthog/', icon: '/images/icons/integrations/posthog.svg' },
          { label: 'Pushwoosh', href: '/integrations/pushwoosh/', icon: '/images/icons/integrations/pushwoosh.svg' },
          { label: 'Singular', href: '/integrations/singular/', icon: '/images/icons/integrations/singular.svg' },
          { label: 'SplitMetrics', href: '/integrations/splitmetrics/', icon: '/images/icons/integrations/splitmetrics.svg' },
          { label: 'Stripe', href: '/integrations/stripe/', icon: '/images/icons/integrations/stripe.svg' },
          { label: 'Tenjin', href: '/integrations/tenjin/', icon: '/images/icons/integrations/tenjin.svg' },
          { label: 'Webhook', href: '/integrations/webhook/', icon: '/images/icons/integrations/webhook.svg' },
        ]
      }
    ],
    footer: { label: 'All integrations', href: '/integrations/' }
  }
}

// Cases menu - User Stories
const casesMenuContent = {
  title: 'USER STORIES',
  stories: [
    { name: 'Productivity app', desc: '+50% revenue with Adapty Autopilot', href: '/case-studies/productivity-app/', icon: '/images/icons/cases/productivity-app.webp' },
    { name: 'Text on Pic', desc: 'Reignited growth with Autopilot', href: '/case-studies/text-on-pic/', icon: '/images/icons/cases/text-on-pic.webp' },
    { name: 'Trip planning', desc: 'Doubled revenue per user', href: '/case-studies/trip-planning/' },
    { name: 'Going Merry', desc: '5x revenue growth using Paywall Builder', href: '/case-studies/going-merry/', icon: '/images/icons/cases/going-merry.webp' },
    { name: 'Shmoody', desc: 'Grew from $0 to $2M ARR with Adapty', href: '/case-studies/shmoody/', icon: '/images/icons/cases/shmoody.webp' },
    { name: 'Lively', desc: 'Saved 82% of potentially lost revenue', href: '/case-studies/lively/', icon: '/images/icons/cases/lively.png' },
    { name: 'Glam AI', desc: 'Tripled revenue, same installs', href: '/case-studies/glam-ai/', icon: '/images/icons/cases/glam-ai.webp' },
    { name: 'Pepapp', desc: 'How to make Adapty free', href: '/case-studies/pepapp/', icon: '/images/icons/cases/pepapp.webp' },
    { name: 'Fotorama', desc: 'How to decrease the refund rate with Adapty', href: '/case-studies/fotorama/', icon: '/images/icons/cases/fotorama.webp' },
    { name: 'Wave', desc: 'From $0 to $4M ARR in 8 months', href: '/case-studies/wave/', icon: '/images/icons/cases/wave.webp' },
    { name: 'Impala', desc: 'Migrated to Adapty from a competitor', href: '/case-studies/impala/', icon: '/images/icons/cases/impala.webp' },
  ],
  footer: { label: 'View all case studies', href: '/case-studies/' }
}

// Resources menu
const resourcesMenuContent = {
  columns: [
    {
      sections: [
        {
          title: 'LEARN',
          items: [
            { label: 'Blog', href: '/blog/' },
            { label: 'Podcasts', href: '/podcasts/' },
            { label: 'Glossary', href: '/glossary/' },
          ]
        },
        {
          title: 'CONNECT',
          items: [
            { label: 'Community', href: '/community/' },
            { label: 'Webinars', href: '/webinars/' },
            { label: 'Events', href: '/events/' },
            { label: 'Careers', href: '/careers/' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          title: 'DISCOVER',
          items: [
            { label: 'Paywall newsletter', href: '/newsletter/' },
            { label: 'Apple receipt validation', href: '/apple-receipt-checker/' },
            { label: 'Apple fiscal calendar', href: '/apple-fiscal-calendar/' },
            { label: 'Apple ads manager', href: '/apple-ads-manager/' },
            { label: 'LTV prediction model', href: '/ltv-prediction-model/' },
            { label: 'Subscription calculator', href: '/subscription-app-revenue-calculator/' },
            { label: 'Refund calculator', href: '/refund-calculator/' },
            { label: 'Paywall library', href: '/paywall-library/' },
            { label: 'Comparing alternatives', href: '/compare/' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          title: 'EBOOKS',
          items: [
            { label: 'Grow your app from $10K to $100K MRR', href: '/ebooks/10k-to-100k/' },
            { label: 'Turn your weekend app into a $1K/mo business', href: '/ebooks/weekend-app/' },
            { label: 'Scale your app from $1K to $10K MRR', href: '/ebooks/1k-to-10k/' },
            { label: 'A refund guide to saving your app revenue', href: '/ebooks/refund-guide/' },
          ]
        },
        {
          title: 'RESEARCH',
          items: [
            { label: 'Onboarding A/B test ideas checklist', href: '/research/onboarding-checklist/', isNew: true },
            { label: 'State of in-app subscriptions 2025', href: '/state-of-in-app-subscriptions/' },
            { label: 'Adapty pricing index', href: '/pricing-index/' },
          ]
        }
      ]
    }
  ]
}

// Docs menu
const docsMenuContent = {
  columns: [
    {
      title: 'DOCUMENTATION',
      items: [
        { label: 'Getting Started', href: 'https://docs.adapty.io/' },
        { label: 'SDK Installation', href: 'https://docs.adapty.io/docs/installation' },
        { label: 'Paywalls', href: 'https://docs.adapty.io/docs/paywalls' },
        { label: 'A/B Tests', href: 'https://docs.adapty.io/docs/ab-tests' },
        { label: 'Analytics', href: 'https://docs.adapty.io/docs/analytics' },
      ]
    },
    {
      title: 'API REFERENCE',
      items: [
        { label: 'REST API', href: 'https://docs.adapty.io/reference' },
        { label: 'Webhooks', href: 'https://docs.adapty.io/docs/webhook' },
        { label: 'Server-side API', href: 'https://docs.adapty.io/docs/server-side-api' },
      ]
    },
    {
      title: 'SDKS',
      items: [
        { label: 'iOS', href: 'https://docs.adapty.io/docs/ios', icon: '/images/icons/menu/ios.svg' },
        { label: 'Android', href: 'https://docs.adapty.io/docs/android', icon: '/images/icons/menu/android.svg' },
        { label: 'React Native', href: 'https://docs.adapty.io/docs/react-native', icon: '/images/icons/menu/react-native.svg' },
        { label: 'Flutter', href: 'https://docs.adapty.io/docs/flutter', icon: '/images/icons/menu/flutter.svg' },
        { label: 'Unity', href: 'https://docs.adapty.io/docs/unity', icon: '/images/icons/menu/unity.svg' },
      ]
    }
  ]
}

// Icons
const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

const ArrowIcon = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5">
    <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

interface HeaderProps {
  onMobileMenuToggle?: (isOpen: boolean) => void
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeProductTab, setActiveProductTab] = useState('product')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
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

  // Render Product mega-menu with sidebar - FULL WIDTH
  const renderProductMenu = () => {
    const content = productTabContent[activeProductTab as keyof typeof productTabContent]

    return (
      <div
        className="fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg"
        onMouseEnter={() => setActiveDropdown('Product')}
      >
        <Container>
          <div className="flex py-6">
            {/* Sidebar */}
            <div className="w-[180px] flex-shrink-0 border-r border-gray-100 pr-6">
              {productMenuTabs.map((tab) => (
                <button
                  key={tab.id}
                  onMouseEnter={() => setActiveProductTab(tab.id)}
                  className={cn(
                    "w-full flex items-center justify-between py-2.5 text-sm font-medium transition-colors text-left",
                    activeProductTab === tab.id
                      ? "text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {tab.label}
                  {activeProductTab === tab.id && <ChevronRight />}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 pl-10">
              {activeProductTab === 'integrations' ? (
                // Integrations grid layout
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {content.columns[0].title}
                  </h4>
                  <div className="grid grid-cols-5 gap-x-6 gap-y-2">
                    {content.columns[0].items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="py-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  {(content as { footer?: { href: string; label: string } }).footer && (
                    <a
                      href={(content as { footer: { href: string; label: string } }).footer.href}
                      className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-gray-600 hover:text-primary"
                    >
                      {(content as { footer: { href: string; label: string } }).footer.label}
                      <ChevronRight />
                    </a>
                  )}
                </div>
              ) : activeProductTab === 'sdk' ? (
                // SDK layout
                <div className="space-y-6">
                  {content.columns.map((column, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                        {column.title}
                      </h4>
                      {(column as { isGrid?: boolean }).isGrid ? (
                        <div className="grid grid-cols-4 gap-x-8 gap-y-2">
                          {column.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2.5 py-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                            >
                              {(item as { icon?: string }).icon && (
                                <img src={(item as { icon?: string }).icon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" />
                              )}
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-8">
                          {column.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2.5 py-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                            >
                              {(item as { icon?: string }).icon && (
                                <img src={(item as { icon?: string }).icon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" />
                              )}
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Product and Solution tab layout
                <div>
                  {/* Column Headers */}
                  {(content as { headers?: string[] }).headers && (
                    <>
                      <div className="grid grid-cols-3 gap-12 mb-4">
                        {(content as { headers: string[] }).headers.map((header, idx) => (
                          <h3 key={idx} className="text-base font-medium text-gray-900">
                            {header}
                          </h3>
                        ))}
                      </div>
                      <div className="border-b border-gray-200 mb-6" />
                    </>
                  )}

                  {/* Column Content */}
                  <div className="grid grid-cols-3 gap-12">
                    {content.columns.map((column, idx) => (
                      <div key={idx}>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                          {column.title}
                        </h4>
                        <div className="space-y-1">
                          {column.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2.5 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                            >
                              {(item as { icon?: string }).icon && (
                                <img src={(item as { icon?: string }).icon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" />
                              )}
                              {item.label}
                              {(item as { isNew?: boolean }).isNew && (
                                <span className="text-[10px] px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded font-medium">
                                  new
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    )
  }

  // Render Cases menu - FULL WIDTH
  const renderCasesMenu = () => (
    <div
      className="fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg"
      onMouseEnter={() => setActiveDropdown('Cases')}
    >
      <Container>
        <div className="py-6">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            {casesMenuContent.title}
          </h4>
          <div className="grid grid-cols-4 gap-4">
            {casesMenuContent.stories.map((story) => (
              <a
                key={story.name}
                href={story.href}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                {story.icon ? (
                  <img src={story.icon} alt="" className="w-10 h-10 rounded-xl flex-shrink-0 object-cover" />
                ) : (
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex-shrink-0" />
                )}
                <div>
                  <div className="font-medium text-sm text-gray-900 group-hover:text-primary">
                    {story.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {story.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <a
            href={casesMenuContent.footer.href}
            className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-gray-600 hover:text-primary"
          >
            {casesMenuContent.footer.label}
            <ChevronRight />
          </a>
        </div>
      </Container>
    </div>
  )

  // Render Resources menu - FULL WIDTH
  const renderResourcesMenu = () => (
    <div
      className="fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg"
      onMouseEnter={() => setActiveDropdown('Resources')}
    >
      <Container>
        <div className="py-6">
          <div className="grid grid-cols-3 gap-12">
            {resourcesMenuContent.columns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-6">
                {column.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      {section.title}
                    </h4>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2 py-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          {item.label}
                          {(item as { isNew?: boolean }).isNew && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded font-medium">
                              new
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )

  // Render Docs menu - FULL WIDTH
  const renderDocsMenu = () => (
    <div
      className="fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg"
      onMouseEnter={() => setActiveDropdown('Docs')}
    >
      <Container>
        <div className="py-6">
          <div className="grid grid-cols-3 gap-12">
            {docsMenuContent.columns.map((column, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  {column.title}
                </h4>
                <div className="space-y-1">
                  {column.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2.5 py-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                    >
                      {(item as { icon?: string }).icon && (
                        <img src={(item as { icon?: string }).icon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" />
                      )}
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )

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
            {/* Language selector placeholder */}
            <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
              EN
              <ChevronDown />
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
                    (item as { highlight?: boolean }).highlight
                      ? 'text-gradient-orange'
                      : 'text-gray-700 hover:text-gray-900'
                  )}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown />}
                </a>
              </div>
            ))}
          </nav>

          {/* Full-width Dropdown Menus */}
          {activeDropdown === 'Product' && (
            <div onMouseLeave={() => setActiveDropdown(null)}>
              {renderProductMenu()}
            </div>
          )}
          {activeDropdown === 'Cases' && (
            <div onMouseLeave={() => setActiveDropdown(null)}>
              {renderCasesMenu()}
            </div>
          )}
          {activeDropdown === 'Resources' && (
            <div onMouseLeave={() => setActiveDropdown(null)}>
              {renderResourcesMenu()}
            </div>
          )}
          {activeDropdown === 'Docs' && (
            <div onMouseLeave={() => setActiveDropdown(null)}>
              {renderDocsMenu()}
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
              <ArrowIcon />
            </a>
            <a
              href="https://adapty.io/schedule-demo/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-[8px] hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Contact sales
              <ArrowIcon />
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
                    (item as { highlight?: boolean }).highlight
                      ? 'text-gradient-orange'
                      : 'text-gray-700 hover:bg-gray-50'
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
