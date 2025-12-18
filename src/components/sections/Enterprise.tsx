import { Container } from '@/components/ui/Container'

const securityFeatures = [
  {
    title: 'Secure',
    items: ['SOC2 verified', 'Encrypted', '24/7 global fraud monitoring'],
  },
  {
    title: 'Reliable',
    items: ['99.99% SLA', 'Over $500M/year of in-app purchases processed'],
  },
  {
    title: 'Responsive',
    items: ['Dedicated customer success manager', 'Direct communication via Slack', 'Live chat on the website', 'Four ways to reach us'],
  },
]

// G2 Badge
function G2Badge() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
          <text x="4" y="20" fontSize="16" fontWeight="bold" fontFamily="Arial">G2</text>
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-1 mb-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-sm font-semibold text-gray-900">4.8 rating</div>
        <div className="text-xs text-gray-500">Based on 200+ reviews</div>
      </div>
    </div>
  )
}

// Capterra Badge
function CapterraBadge() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
          <path d="M14 4l2.5 7h7l-5.5 4.5 2 7-6-4.5-6 4.5 2-7L4.5 11h7z" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-1 mb-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-3.5 h-3.5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-sm font-semibold text-gray-900">4.9 rating</div>
        <div className="text-xs text-gray-500">Capterra</div>
      </div>
    </div>
  )
}

// Product Hunt Badge
function ProductHuntBadge() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
          <circle cx="14" cy="14" r="10" fill="none" stroke="white" strokeWidth="2" />
          <text x="9" y="18" fontSize="12" fontWeight="bold" fontFamily="Arial">P</text>
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-1 mb-0.5">
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-bold text-orange-600">#1</span>
        </div>
        <div className="text-sm font-semibold text-gray-900">Product of the Day</div>
        <div className="text-xs text-gray-500">Product Hunt</div>
      </div>
    </div>
  )
}

// GetApp Badge
function GetAppBadge() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
          <rect x="6" y="6" width="16" height="16" rx="3" fill="none" stroke="white" strokeWidth="2" />
          <path d="M10 14h8M14 10v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-1 mb-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-sm font-semibold text-gray-900">4.8 rating</div>
        <div className="text-xs text-gray-500">GetApp</div>
      </div>
    </div>
  )
}

export function Enterprise() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Enterprise-grade platform
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-12">
          {/* Trust section */}
          <div className="text-center mb-10">
            <p className="text-gray-600 mb-2">Trusted for usability and customer service</p>
            <p className="text-sm text-gray-500">Based on 500+ reviews</p>
          </div>

          {/* Review badges */}
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
            <G2Badge />
            <CapterraBadge />
            <ProductHuntBadge />
            <GetAppBadge />
          </div>
        </div>
      </Container>
    </section>
  )
}
