import type { FeatureTestimonial } from '@/data/types'

interface TestimonialCardProps {
  testimonial: FeatureTestimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="mt-10 border border-gray-200 rounded-2xl p-6 relative">
      {/* Quote mark breaking the border */}
      <div className="absolute -top-5 left-6 bg-white px-2">
        <span className="text-4xl text-gray-300 font-serif leading-none">"</span>
      </div>

      {testimonial.type === 'logo' ? (
        <img
          src={testimonial.logo}
          alt={testimonial.logoAlt}
          className="h-6 object-contain mb-4 mt-2"
        />
      ) : (
        <div className="flex items-center gap-3 mb-4 mt-2">
          <img
            src={testimonial.companyIcon}
            alt={testimonial.companyName}
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div>
            <div className="text-gray-900 text-sm font-semibold">{testimonial.companyName}</div>
            <div className="text-gray-500 text-sm">{testimonial.companyCategory}</div>
          </div>
        </div>
      )}

      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.authorPhoto}
          alt={testimonial.authorName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="text-gray-900 text-sm font-semibold">{testimonial.authorName}</div>
          <div className="text-gray-500 text-sm">{testimonial.authorRole}</div>
        </div>
      </div>
    </div>
  )
}
