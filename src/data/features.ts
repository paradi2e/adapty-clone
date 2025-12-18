import type { FeatureBlock } from './types'

export const featureBlocks: FeatureBlock[] = [
  {
    id: 'ab-testing',
    title: 'Increase subscription revenue without app releases',
    description: 'Manage, target, localize and personalize paywalls without leaving your browser.',
    linkText: 'Increase app revenue',
    linkHref: '#',
    image: '/images/features/paywall-ab-testing.webp',
    imageAlt: 'Paywall A/B Testing',
    imageBgColor: '#234646',
    layout: 'right',
    testimonial: {
      type: 'logo',
      logo: '/images/features/smartist-logo.png',
      logoAlt: 'Smartist',
      quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
      authorName: 'Ilgar Tali',
      authorRole: 'Founder & Chief Vision Officer',
      authorPhoto: '/images/features/ilgar-tali.webp'
    }
  },
  {
    id: 'refund-saver',
    title: 'Cut refund rate by 40%',
    description: "Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it.",
    linkText: 'Set up Refund Saver',
    linkHref: '#',
    image: '/images/features/refund-rate.webp',
    imageAlt: 'Refund Rate Chart',
    imageBgColor: '#d4e8e3',
    layout: 'left',
    testimonial: {
      type: 'company',
      companyIcon: '/images/features/fotorama-icon.webp',
      companyName: 'Fotorama',
      companyCategory: 'Photo and video',
      quote: "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
      authorName: 'Berk Çağatay Albayrak',
      authorRole: 'Sr. Product Manager',
      authorPhoto: '/images/features/berk-cagatay.webp'
    }
  },
  {
    id: 'analytics',
    title: 'Know your subscription numbers at any moment',
    description: 'Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.',
    linkText: 'See subscription BI',
    linkHref: '#',
    image: '/images/features/subscription-bi.webp',
    imageAlt: 'Subscription BI Dashboard',
    imageBgColor: '#e8e4f3',
    layout: 'right',
    testimonial: {
      type: 'company',
      companyIcon: '/images/features/moonly-icon.svg',
      companyName: 'Moonly',
      companyCategory: 'Lifestyle',
      quote: "Adapty provides reliable analytics we can depend on. Knowing our numbers are accurate gives us the confidence to make better business decisions.",
      authorName: 'Nikolay Chebotarev',
      authorRole: 'Co-Founder and CEO',
      authorPhoto: '/images/features/nikolay-chebotarev.png'
    }
  },
  {
    id: 'paywall-builder',
    title: 'No-code paywall builder',
    description: 'Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team.',
    linkText: 'Create paywalls within minutes',
    linkHref: '#',
    image: '/images/features/paywall-builder.webp',
    imageAlt: 'Paywall Builder',
    imageBgColor: '#f8d4d4',
    layout: 'left',
    testimonial: {
      type: 'logo',
      logo: '/images/features/moodworks-logo.webp',
      logoAlt: 'Moodworks Inc.',
      quote: "We literally launched Adapty's paywall on a Friday and by Sunday night our revenue had already increased by 10%.",
      authorName: 'Mike McSweeney',
      authorRole: 'Director of Product',
      authorPhoto: '/images/features/mike-mcsweeney.webp'
    }
  },
  {
    id: 'web-funnels',
    title: 'Boost app revenue fast with web funnels',
    description: 'Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed.',
    linkText: 'Explore FunnelFox',
    linkHref: '#',
    image: '/images/features/funnelfox.webp',
    imageAlt: 'FunnelFox Web Funnels',
    imageBgColor: '#f5f5f5',
    layout: 'right'
  },
  {
    id: 'integrations',
    title: 'Sync purchase data with other services',
    description: 'Forward subscription events to analytics and attribution services without coding.',
    linkText: 'Explore integrations',
    linkHref: '#',
    image: '', // Uses IntegrationsGrid instead
    imageAlt: '',
    imageBgColor: '#4a9a9a',
    layout: 'left',
    testimonial: {
      type: 'logo',
      logo: '/images/features/bickster-logo.png',
      logoAlt: 'Bickster',
      quote: "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel.",
      authorName: 'Chris Bick',
      authorRole: 'Founder and CEO',
      authorPhoto: '/images/features/chris-bick.webp'
    }
  }
]
