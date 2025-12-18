import type { FooterNavColumn } from './types'

export const footerNavigation: FooterNavColumn[] = [
  {
    sections: [
      {
        title: 'Paywall management',
        links: ['Paywall builder', 'Onboarding builder', 'AI generator', 'A/B testing', 'Autopilot', 'Targeting', 'Localization', 'Remote config']
      },
      {
        title: 'Infrastructure',
        links: ['Subscription SDK', 'Subscriber sync', 'Fallback paywalls', 'Refund saver', 'Integrations']
      }
    ]
  },
  {
    sections: [
      {
        title: 'Roles',
        links: ['For developers', 'For marketers', 'For app owners']
      },
      {
        title: 'Stages',
        links: ['Indie', 'Startups', 'Publishers', 'Enterprise']
      },
      {
        title: 'Cases',
        links: ['Integrate subscriptions', 'Grow app revenue', 'Analyze performance', 'Read our cases']
      }
    ]
  },
  {
    sections: [
      {
        title: 'Migrate from',
        links: ['RevenueCat', 'Purchasely', 'Qonversion', 'Superwall']
      },
      {
        title: 'SDK',
        links: ['iOS', 'Android', 'React Native', 'Flutter', 'FlutterFlow', 'Kotlin Multiplatform', 'Capacitor', 'Unity', 'Stripe']
      }
    ]
  },
  {
    sections: [
      {
        title: 'Resources',
        links: ['Blog', 'Ebooks', 'Podcast', 'Webinars', 'Events', 'Glossary', 'Documentation', 'Paywall library', 'LTV prediction model', 'Apple fiscal calendar', 'Apple receipt checker', 'Subscription calculator', 'Refund saver calculator', 'In-app subscription reports', 'Community']
      }
    ]
  },
  {
    sections: [
      {
        title: 'Analytics',
        links: ['Revenue analytics', 'LTV analytics', 'AI predictive analytics', 'Apple ads manager']
      },
      {
        title: 'Company',
        links: ['About us', 'Contact us', 'Careers', 'Terms', 'Privacy policy', 'Data protection', 'System status', 'SOC2 compliance', 'Become a partner']
      }
    ]
  }
]
