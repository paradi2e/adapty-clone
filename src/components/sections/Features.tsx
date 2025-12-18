import { Container } from '@/components/ui/Container'
import { useState, useEffect, useRef, useCallback } from 'react'

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
    name: "Cem Ortabas",
    role: "Co-founder and CEO, HubX",
    photo: "/images/testimonials/cem-ortabas.webp",
    logo: "/images/testimonials/logo-hubx.svg",
    logoAlt: "HubX"
  },
  {
    id: 2,
    quote: "We've been working with Adapty since 2021 and I couldn't be happier about it. We've tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty.",
    name: "Chris Bick",
    role: "Founder and CEO, Bickster",
    photo: "/images/testimonials/chris-bick.webp",
    logo: "/images/testimonials/logo-bickster.png",
    logoAlt: "Bickster"
  },
  {
    id: 3,
    quote: "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.",
    name: "Yalçın Özdemir",
    role: "Founder & CEO, AppNation",
    photo: "/images/testimonials/yalcin-ozdemir.webp",
    logo: "/images/testimonials/logo-appnation.png",
    logoAlt: "AppNation"
  },
  {
    id: 4,
    quote: "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
    name: "Kyle Smith",
    role: "Head of data at Smitten Dating",
    photo: "/images/testimonials/kyle-smith.webp",
    logo: "/images/testimonials/logo-smitten.webp",
    logoAlt: "Smitten"
  },
  {
    id: 5,
    quote: "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
    name: "Roi Mulia",
    role: "Founder & CEO, SocialKit",
    photo: "/images/testimonials/roi-mulia.webp",
    logo: "/images/testimonials/logo-socialkit.svg",
    logoAlt: "SocialKit"
  }
]

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Auto-rotation every 10 seconds
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 10000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [goToNext])

  // Reset timer when manually changing slide
  const handleManualChange = (action: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    action()
    intervalRef.current = setInterval(goToNext, 10000)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section className="bg-[#1a1a1a] py-16 md:py-24">
      <Container>
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white text-center mb-8 leading-tight">
          Developer from all kind of apps move to Adapty to grow their revenue
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-12" />

        {/* Carousel Content */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={() => handleManualChange(goToPrev)}
            className="text-white/60 hover:text-[#6720FF] transition-colors p-2 flex-shrink-0"
            aria-label="Previous testimonial"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-[220px] h-[280px] md:w-[280px] md:h-[340px] object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                "{currentTestimonial.quote}"
              </p>

              <h3 className="text-white font-semibold text-xl mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-white/60 text-sm mb-4">
                {currentTestimonial.role}
              </p>

              <img
                src={currentTestimonial.logo}
                alt={currentTestimonial.logoAlt}
                className="h-8 object-contain mx-auto md:mx-0 brightness-0 invert"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleManualChange(goToNext)}
            className="text-white/60 hover:text-[#6720FF] transition-colors p-2 flex-shrink-0"
            aria-label="Next testimonial"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualChange(() => goToSlide(index))}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

// Integrations Grid with random hover animation
const integrations = [
  { name: 'Airbridge', logo: '/images/integrations/airbridge.svg' },
  { name: 'Adjust', logo: '/images/integrations/adjust.svg' },
  { name: 'Amazon S3', logo: '/images/integrations/amazon-s3.svg' },
  { name: 'Amplitude', logo: '/images/integrations/amplitude.svg' },
  { name: 'Apple Ads', logo: '/images/integrations/apple-ads.svg' },
  { name: 'AppsFlyer', logo: '/images/integrations/appsflyer.svg' },
  { name: 'AppMetrica', logo: '/images/integrations/appmetrica.svg' },
  { name: 'Asapty', logo: '/images/integrations/asapty.svg' },
  { name: 'Branch', logo: '/images/integrations/branch.svg' },
  { name: 'Braze', logo: '/images/integrations/braze.svg' },
  { name: 'Facebook', logo: '/images/integrations/facebook.svg' },
  { name: 'Firebase', logo: '/images/integrations/firebase.svg' },
  { name: 'Google Cloud', logo: '/images/integrations/google-cloud.svg' },
  { name: 'Mixpanel', logo: '/images/integrations/mixpanel.svg' },
  { name: 'OneSignal', logo: '/images/integrations/onesignal.svg' },
  { name: 'PostHog', logo: '/images/integrations/posthog.svg' },
  { name: 'Pushwoosh', logo: '/images/integrations/pushwoosh.svg' },
  { name: 'Acquire', logo: '/images/integrations/acquire.svg' },
  { name: 'Singular', logo: '/images/integrations/singular.svg' },
  { name: 'Stripe', logo: '/images/integrations/stripe.svg' },
  { name: 'Tenjin', logo: '/images/integrations/tenjin.svg' },
  { name: 'Webhooks', logo: '/images/integrations/webhooks.svg' },
]

function IntegrationsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          // Random hover animation - 3 per second for 3 seconds
          let count = 0
          const maxCount = 9
          const interval = setInterval(() => {
            if (count >= maxCount) {
              clearInterval(interval)
              setActiveIndex(null)
              return
            }
            const randomIndex = Math.floor(Math.random() * integrations.length)
            setActiveIndex(randomIndex)
            count++
          }, 333)
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div ref={containerRef} className="grid grid-cols-4 gap-[3px]">
      {integrations.slice(0, 20).map((item, index) => (
        <div
          key={index}
          className={`group relative bg-white rounded-[4px] px-4 py-2 flex items-center justify-center h-[56px] transition-all duration-200 cursor-pointer overflow-hidden ${
            activeIndex === index
              ? 'grayscale-0'
              : 'grayscale hover:grayscale-0'
          }`}
        >
          {/* Blue vignette overlay on hover */}
          <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,180,0.15)_0%,_rgba(59,130,180,0.3)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[4px] ${activeIndex === index ? 'opacity-100' : ''}`} />
          <img
            src={item.logo}
            alt={item.name}
            className={`h-[48px] w-full object-contain relative z-10 transition-all duration-200 scale-[1.3] group-hover:scale-[1.35] ${activeIndex === index ? 'scale-[1.35]' : ''}`}
          />
          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            Read more about integration with {item.name}
          </div>
        </div>
      ))}
      {/* Bottom row - centered */}
      <div className="col-span-4 flex justify-center gap-[3px] mt-0">
        <div
          className={`group relative bg-white rounded-[4px] px-4 py-2 flex items-center justify-center h-[56px] w-[calc(25%-2px)] transition-all duration-200 cursor-pointer overflow-hidden ${
            activeIndex === 20 ? 'grayscale-0' : 'grayscale hover:grayscale-0'
          }`}
        >
          <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,180,0.15)_0%,_rgba(59,130,180,0.3)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[4px] ${activeIndex === 20 ? 'opacity-100' : ''}`} />
          <img
            src="/images/integrations/tenjin.svg"
            alt="Tenjin"
            className={`h-[48px] w-full object-contain relative z-10 transition-all duration-200 scale-[1.3] group-hover:scale-[1.35] ${activeIndex === 20 ? 'scale-[1.35]' : ''}`}
          />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            Read more about integration with Tenjin
          </div>
        </div>
        <div
          className={`group relative bg-white rounded-[4px] px-4 py-2 flex items-center justify-center h-[56px] w-[calc(25%-2px)] transition-all duration-200 cursor-pointer overflow-hidden ${
            activeIndex === 21 ? 'grayscale-0' : 'grayscale hover:grayscale-0'
          }`}
        >
          <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,180,0.15)_0%,_rgba(59,130,180,0.3)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[4px] ${activeIndex === 21 ? 'opacity-100' : ''}`} />
          <img
            src="/images/integrations/webhooks.svg"
            alt="Webhooks"
            className={`h-[48px] w-full object-contain relative z-10 transition-all duration-200 scale-[1.3] group-hover:scale-[1.35] ${activeIndex === 21 ? 'scale-[1.35]' : ''}`}
          />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            Read more about integration with Webhooks
          </div>
        </div>
      </div>
    </div>
  )
}

// Arrow icon
const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200 group-hover:translate-x-1"
  >
    <path
      d="M3 8H13M13 8L8 3M13 8L8 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)



export function Features() {
  return (
    <>
      {/* Increase Revenue with Testimonial */}
      <section className="py-6 md:py-8 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-12 items-start">
            {/* Left - Text + Testimonial */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
                Increase subscription revenue without app releases
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Manage, target, localize and personalize paywalls without leaving your browser.
              </p>
              <a href="#" className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors">
                Increase app revenue
                <ArrowRight />
              </a>

              {/* Testimonial */}
              <div className="mt-10 border border-gray-200 rounded-2xl p-6 relative">
                {/* Quote mark breaking the border */}
                <div className="absolute -top-5 left-6 bg-white px-2">
                  <span className="text-4xl text-gray-300 font-serif leading-none">"</span>
                </div>

                <img
                  src="/images/features/smartist-logo.png"
                  alt="Smartist"
                  className="h-6 object-contain mb-4 mt-2"
                />

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                  "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success."
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src="/images/features/ilgar-tali.webp"
                    alt="Ilgar Tali"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">Ilgar Tali</div>
                    <div className="text-gray-500 text-sm">Founder & Chief Vision Officer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - A/B Testing Image with green background */}
            <div className="bg-[#234646] rounded-[24px] p-6">
              <img
                src="/images/features/paywall-ab-testing.webp"
                alt="Paywall A/B Testing"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Refund Saver */}
      <section className="py-6 md:py-8 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-12 items-start">
            {/* Left - Refund Chart Image with green background */}
            <div className="bg-[#d4e8e3] rounded-[24px] p-6 flex items-center justify-center">
              <img
                src="/images/features/refund-rate.webp"
                alt="Refund Rate Chart"
                className="w-full h-auto"
              />
            </div>

            {/* Right - Text + Testimonial */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
                Cut refund rate by 40%
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it.
              </p>
              <a href="#" className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors">
                Set up Refund Saver
                <ArrowRight />
              </a>

              {/* Testimonial */}
              <div className="mt-10 border border-gray-200 rounded-2xl p-6 relative">
                {/* Quote mark breaking the border */}
                <div className="absolute -top-5 left-6 bg-white px-2">
                  <span className="text-4xl text-gray-300 font-serif leading-none">"</span>
                </div>

                {/* Company info */}
                <div className="flex items-center gap-3 mb-4 mt-2">
                  <img
                    src="/images/features/fotorama-icon.webp"
                    alt="Fotorama"
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">Fotorama</div>
                    <div className="text-gray-500 text-sm">Photo and video</div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                  "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away."
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src="/images/features/berk-cagatay.webp"
                    alt="Berk Çağatay Albayrak"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">Berk Çağatay Albayrak</div>
                    <div className="text-gray-500 text-sm">Sr. Product Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Analytics / Subscription BI */}
      <section className="py-6 md:py-8 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-12 items-start">
            {/* Left - Text + Testimonial */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
                Know your subscription numbers at any moment
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.
              </p>
              <a href="#" className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors">
                See subscription BI
                <ArrowRight />
              </a>

              {/* Testimonial */}
              <div className="mt-10 border border-gray-200 rounded-2xl p-6 relative">
                {/* Quote mark breaking the border */}
                <div className="absolute -top-5 left-6 bg-white px-2">
                  <span className="text-4xl text-gray-300 font-serif leading-none">"</span>
                </div>

                {/* Company info */}
                <div className="flex items-center gap-3 mb-4 mt-2">
                  <img
                    src="/images/features/moonly-icon.svg"
                    alt="Moonly"
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">Moonly</div>
                    <div className="text-gray-500 text-sm">Lifestyle</div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                  "Adapty provides reliable analytics we can depend on. Knowing our numbers are accurate gives us the confidence to make better business decisions."
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src="/images/features/nikolay-chebotarev.png"
                    alt="Nikolay Chebotarev"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">Nikolay Chebotarev</div>
                    <div className="text-gray-500 text-sm">Co-Founder and CEO</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Subscription BI Image with light purple background */}
            <div className="bg-[#e8e4f3] rounded-[24px] overflow-hidden">
              <img
                src="/images/features/subscription-bi.webp"
                alt="Subscription BI Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* No-code Paywall Builder */}
      <section className="py-6 md:py-8 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-12 items-start">
            {/* Left - Paywall Builder Image with pink background */}
            <div className="bg-[#f8d4d4] rounded-[24px] overflow-hidden">
              <img
                src="/images/features/paywall-builder.webp"
                alt="Paywall Builder"
                className="w-full h-auto"
              />
            </div>

            {/* Right - Text + Testimonial */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
                No-code paywall builder
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team.
              </p>
              <a href="#" className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors">
                Create paywalls within minutes
                <ArrowRight />
              </a>

              {/* Testimonial */}
              <div className="mt-10 border border-gray-200 rounded-2xl p-6 relative">
                {/* Quote mark breaking the border */}
                <div className="absolute -top-5 left-6 bg-white px-2">
                  <span className="text-4xl text-gray-300 font-serif leading-none">"</span>
                </div>

                <img
                  src="/images/features/moodworks-logo.webp"
                  alt="Moodworks Inc."
                  className="h-6 object-contain mb-4 mt-2"
                />

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                  "We literally launched Adapty's paywall on a Friday and by Sunday night our revenue had already increased by 10%."
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src="/images/features/mike-mcsweeney.webp"
                    alt="Mike McSweeney"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">Mike McSweeney</div>
                    <div className="text-gray-500 text-sm">Director of Product</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Web Funnels */}
      <section className="py-6 md:py-8 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-12 items-start">
            {/* Left - Text (no testimonial for this section) */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
                Boost app revenue fast with web funnels
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed.
              </p>
              <a href="#" className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors">
                Explore FunnelFox
                <ArrowRight />
              </a>
            </div>

            {/* Right - FunnelFox Image with gray background */}
            <div className="bg-[#f5f5f5] rounded-[24px] overflow-hidden">
              <img
                src="/images/features/funnelfox.webp"
                alt="FunnelFox Web Funnels"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Integrations - White background */}
      <section className="py-6 md:py-8 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-12 items-start">
            {/* Left - Integrations Grid on teal background */}
            <div className="bg-[#4a9a9a] rounded-[24px] p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-col items-center mb-6">
                <span className="inline-block px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-full mb-3">
                  In-app-purchase events
                </span>
                <svg className="w-4 h-4 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <img src="/images/logos/adapty-white.svg" alt="Adapty" className="h-8 mb-2" />
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Integrations Grid */}
              <IntegrationsGrid />
            </div>

            {/* Right - Text + Testimonial */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
                Sync purchase data with other services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Forward subscription events to analytics and attribution services without coding.
              </p>
              <a href="#" className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors">
                Explore integrations
                <ArrowRight />
              </a>

              {/* Testimonial */}
              <div className="mt-10 border border-gray-200 rounded-2xl p-6 relative">
                {/* Quote mark breaking the border */}
                <div className="absolute -top-5 left-6 bg-white px-2">
                  <span className="text-4xl text-gray-300 font-serif leading-none">"</span>
                </div>

                <img
                  src="/images/features/bickster-logo.png"
                  alt="Bickster"
                  className="h-6 object-contain mb-4 mt-2"
                />

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                  "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel."
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src="/images/features/chris-bick.webp"
                    alt="Chris Bick"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900 text-sm font-semibold">Chris Bick</div>
                    <div className="text-gray-500 text-sm">Founder and CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Enterprise-grade platform */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-16">
            Enterprise-grade platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Secure */}
            <div className="border-l-2 border-[#6720FF] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Secure</h3>
              <ul className="space-y-3 text-gray-900 font-medium">
                <li>SOC2 verified</li>
                <li>Encrypted</li>
                <li>24/7 global fraud monitoring</li>
              </ul>
            </div>

            {/* Reliable */}
            <div className="border-l-2 border-[#6720FF] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Reliable</h3>
              <ul className="space-y-3 text-gray-900 font-medium">
                <li><a href="#" className="underline hover:text-[#6720FF] transition-colors">99.99% SLA</a></li>
                <li>Over $500M/year of in-app purchases processed</li>
              </ul>
            </div>

            {/* Responsive */}
            <div className="border-l-2 border-[#6720FF] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Responsive</h3>
              <ul className="space-y-3 text-gray-900 font-medium">
                <li>Dedicated customer success manager</li>
                <li>Direct communication via Slack</li>
                <li>Live chat on the website</li>
                <li>Four ways to reach us</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted - G2 Badges */}
      <section className="py-16 md:py-24 bg-[#f9f7f4]">
        <Container>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-6">
            Trusted for usability and customer service
          </h2>

          {/* Stars and reviews */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm">Based on 500+ reviews</span>
          </div>

          {/* G2 Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <img src="/images/badges/g2-best-results.svg" alt="G2 Best Results Winter 2025" className="h-24 md:h-28" />
            <img src="/images/badges/g2-high-performer.svg" alt="G2 High Performer Winter 2025" className="h-24 md:h-28" />
            <img src="/images/badges/g2-best-usability.svg" alt="G2 Best Usability Winter 2025" className="h-24 md:h-28" />
            <img src="/images/badges/g2-best-relationship.svg" alt="G2 Best Relationship Winter 2025" className="h-24 md:h-28" />
            <img src="/images/badges/g2-most-implementable.svg" alt="G2 Most Implementable Winter 2025" className="h-24 md:h-28" />
          </div>
        </Container>
      </section>

      {/* Customer Cases */}
      <section className="py-16 md:py-24 bg-[#f9f9fb]">
        <Container>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-12">
            Read the real cases of our customers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Productivity app */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/productivity-app.webp" alt="Productivity app" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Productivity app</div>
                  <div className="text-sm text-gray-500">Productivity</div>
                </div>
              </div>
              <div className="text-[#7FBCD2] font-semibold mb-2">+50% in total revenue</div>
              <p className="text-gray-600 text-sm mb-4">How pricing tests unlocked app's potential</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Text on Pic */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/text-on-pic.webp" alt="Text on Pic" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Text on Pic</div>
                  <div className="text-sm text-gray-500">Photo & Video</div>
                </div>
              </div>
              <div className="text-[#5CB85C] font-semibold mb-2">Over 30% MRR growth</div>
              <p className="text-gray-600 text-sm mb-4">How to boost revenue with the right experiments</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Trip planning */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/trip-planning.webp" alt="Trip planning" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Trip planning</div>
                  <div className="text-sm text-gray-500">Travel</div>
                </div>
              </div>
              <div className="text-[#FFA726] font-semibold mb-2">+102% ARPU growth</div>
              <p className="text-gray-600 text-sm mb-4">New onboarding and pricing strategy doubled revenue per user</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Going Merry */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/going-merry.webp" alt="Going Merry" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Going Merry</div>
                  <div className="text-sm text-gray-500">App publisher</div>
                </div>
              </div>
              <div className="text-[#6BA3D6] font-semibold mb-2">5x MRR growth</div>
              <p className="text-gray-600 text-sm mb-4">How to scale subscription revenue with Paywall Builder</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Shmoody */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/shmoody.webp" alt="Shmoody" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Shmoody</div>
                  <div className="text-sm text-gray-500">Mental health</div>
                </div>
              </div>
              <div className="text-[#40C4AA] font-semibold mb-2">ARR scaled from $0 to $2M</div>
              <p className="text-gray-600 text-sm mb-4">How to grow from a free app to $2M ARR with Adapty</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Lively */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/lively.png" alt="Lively" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Lively</div>
                  <div className="text-sm text-gray-500">Health & Fitness</div>
                </div>
              </div>
              <div className="text-[#66BB6A] font-semibold mb-2">Refund rate dropped by 83%</div>
              <p className="text-gray-600 text-sm mb-4">Saved 82% of potentially lost revenue</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Glam AI */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/glam-ai.webp" alt="Glam AI" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Glam AI</div>
                  <div className="text-sm text-gray-500">Makeup & Beauty</div>
                </div>
              </div>
              <div className="text-[#EC407A] font-semibold mb-2">ROAS from Adapty – 108%</div>
              <p className="text-gray-600 text-sm mb-4">How to scale to $1.2M ARR in 3 months</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Pepapp */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/pepapp.webp" alt="Pepapp" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Pepapp</div>
                  <div className="text-sm text-gray-500">Health & Fitness</div>
                </div>
              </div>
              <div className="text-[#AB47BC] font-semibold mb-2">400% ROI on Adapty</div>
              <p className="text-gray-600 text-sm mb-4">How to make Adapty free with Refund Saver</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Fotorama */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cases/fotorama.webp" alt="Fotorama" className="w-12 h-12 rounded-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Fotorama</div>
                  <div className="text-sm text-gray-500">Photo & Video</div>
                </div>
              </div>
              <div className="text-[#4DB6AC] font-semibold mb-2">Refund rate dropped 40%</div>
              <p className="text-gray-600 text-sm mb-4">How to decrease the refund rate with Adapty</p>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
                Read more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          {/* Read all cases link */}
          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#6720FF] transition-colors">
              Read all cases
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
