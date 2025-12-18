// Navigation items matching original adapty.io
export const navItems = [
  { label: 'Product', href: '#', hasDropdown: true },
  { label: 'Cases', href: '#', hasDropdown: true },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'Docs', href: 'https://docs.adapty.io/', hasDropdown: true },
  { label: 'Blog', href: 'https://adapty.io/blog/', hasDropdown: false },
  { label: 'Pricing', href: 'https://adapty.io/pricing/', hasDropdown: false },
  { label: 'web2app', href: 'https://funnelfox.com/', hasDropdown: false, highlight: true },
]

// Product mega-menu structure with sidebar tabs
export const productMenuTabs = [
  { id: 'product', label: 'Product' },
  { id: 'solution', label: 'Solution' },
  { id: 'sdk', label: 'Adapty SDK' },
  { id: 'integrations', label: 'Integrations' },
]

// Product tab content
export const productTabContent = {
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
export const casesMenuContent = {
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
export const resourcesMenuContent = {
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
export const docsMenuContent = {
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
