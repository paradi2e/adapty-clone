import { Container } from '@/components/ui/Container'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { ArrowRightIcon, ArrowDownIcon } from '@/components/icons'
import { IntegrationsGrid } from './IntegrationsGrid'
import { featureBlocks } from '@/data'
import type { FeatureBlock } from '@/data/types'

interface FeatureBlockComponentProps {
  feature: FeatureBlock
  renderCustomImage?: () => React.ReactNode
}

function FeatureBlockComponent({ feature, renderCustomImage }: FeatureBlockComponentProps) {
  const textContent = (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
        {feature.title}
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {feature.description}
      </p>
      <a
        href={feature.linkHref}
        className="group inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors"
      >
        {feature.linkText}
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>

      {feature.testimonial && (
        <TestimonialCard testimonial={feature.testimonial} />
      )}
    </div>
  )

  const imageContent = renderCustomImage ? (
    renderCustomImage()
  ) : (
    <div
      className="rounded-[24px] overflow-hidden"
      style={{ backgroundColor: feature.imageBgColor }}
    >
      <img
        src={feature.image}
        alt={feature.imageAlt}
        className="w-full h-auto"
      />
    </div>
  )

  const gridClass = feature.layout === 'right'
    ? 'grid-cols-1 lg:grid-cols-[380px_1fr]'
    : 'grid-cols-1 lg:grid-cols-[1fr_380px]'

  return (
    <section className="py-6 md:py-8 bg-white">
      <Container>
        <div className={`grid ${gridClass} gap-10 lg:gap-12 items-start`}>
          {feature.layout === 'right' ? (
            <>
              {textContent}
              {imageContent}
            </>
          ) : (
            <>
              {imageContent}
              {textContent}
            </>
          )}
        </div>
      </Container>
    </section>
  )
}

export function FeatureBlocks() {
  return (
    <>
      {featureBlocks.map((feature) => {
        if (feature.id === 'integrations') {
          return (
            <FeatureBlockComponent
              key={feature.id}
              feature={feature}
              renderCustomImage={() => (
                <div className="bg-[#4a9a9a] rounded-[24px] p-6 md:p-8">
                  <div className="flex flex-col items-center mb-6">
                    <span className="inline-block px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-full mb-3">
                      In-app-purchase events
                    </span>
                    <ArrowDownIcon className="w-4 h-4 text-white mb-2" />
                    <img src="/images/logos/adapty-white.svg" alt="Adapty" className="h-8 mb-2" />
                    <ArrowDownIcon className="w-4 h-4 text-white" />
                  </div>
                  <IntegrationsGrid />
                </div>
              )}
            />
          )
        }

        return <FeatureBlockComponent key={feature.id} feature={feature} />
      })}
    </>
  )
}
