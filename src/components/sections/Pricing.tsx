import { cn } from '@/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

// Check icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 10L8 14L16 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Pricing plans
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Up to $10K MTR',
      'Paywall builder',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
    variant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For growing apps',
    features: [
      'Up to $100K MTR',
      'Advanced paywall builder',
      'A/B testing',
      'Full analytics',
      'Priority support',
      'All integrations',
    ],
    cta: 'Start Free Trial',
    variant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large-scale apps',
    features: [
      'Unlimited MTR',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom contract',
      'Onboarding assistance',
    ],
    cta: 'Contact Sales',
    variant: 'outline' as const,
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative p-8 rounded-2xl',
                'border transition-all duration-300',
                plan.popular
                  ? 'border-primary bg-primary/5 shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <span className="text-primary flex-shrink-0">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.variant}
                fullWidth
                className={cn(
                  plan.popular && 'shadow-lg shadow-primary/25'
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
