import { FeatureBlocks } from './FeatureBlocks'
import { TestimonialsCarousel } from './TestimonialsCarousel'
import { EnterpriseSection } from './EnterpriseSection'
import { G2BadgesSection } from './G2BadgesSection'
import { CustomerCasesSection } from './CustomerCasesSection'

export function Features() {
  return (
    <>
      <FeatureBlocks />
      <TestimonialsCarousel />
      <EnterpriseSection />
      <G2BadgesSection />
      <CustomerCasesSection />
    </>
  )
}
