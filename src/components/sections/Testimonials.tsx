import { cn } from '@/utils'
import { Container } from '@/components/ui/Container'

const testimonials = [
  {
    quote: "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android.",
    author: "Magnús Ólafsson",
    role: "Chief Technology Officer at Smitten",
    avatar: "MO",
  },
  {
    quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    author: "Ilgar Tali",
    role: "Founder & Chief Vision Officer",
    company: "Fotorama",
    category: "Photo and video",
    avatar: "IT",
  },
  {
    quote: "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
    author: "Berk Çağatay Albayrak",
    role: "Sr. Product Manager",
    company: "Moonly",
    category: "Moon calendar app",
    avatar: "BA",
  },
  {
    quote: "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
    author: "Nikolay Chebotarev",
    role: "Head of UA at Moonly.app",
    company: "Moodworks Inc",
    category: "Mental health apps",
    avatar: "NC",
  },
  {
    quote: "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
    author: "Mike McSweeney",
    role: "Chief Product Officer",
    avatar: "MM",
  },
  {
    quote: "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel.",
    author: "Chris Bick",
    role: "Founder and CEO",
    avatar: "CB",
  },
]

const featuredTestimonial = {
  quote: "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
  author: "Roi Mulia",
  role: "Founder & CEO, SocialKit",
  avatar: "RM",
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company?: string
  category?: string
  avatar: string
  featured?: boolean
}

function TestimonialCard({ quote, author, role, company, category, avatar, featured }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 border border-gray-200',
        'hover:border-primary/20 hover:shadow-lg transition-all',
        featured && 'col-span-full lg:col-span-2 bg-gray-900 text-white border-gray-800'
      )}
    >
      <p className={cn(
        'text-gray-600 mb-6 leading-relaxed',
        featured && 'text-white/80 text-lg'
      )}>
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium',
          featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
        )}>
          {avatar}
        </div>
        <div>
          <p className={cn(
            'font-semibold',
            featured ? 'text-white' : 'text-gray-900'
          )}>
            {author}
          </p>
          <p className={cn(
            'text-sm',
            featured ? 'text-white/60' : 'text-gray-500'
          )}>
            {role}
          </p>
          {company && (
            <p className={cn(
              'text-sm',
              featured ? 'text-white/40' : 'text-gray-400'
            )}>
              {company} {category && `• ${category}`}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4">
            Developer from all kind of apps move to Adapty to grow their revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}

          {/* Featured testimonial */}
          <TestimonialCard {...featuredTestimonial} featured />

          {testimonials.slice(3).map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
