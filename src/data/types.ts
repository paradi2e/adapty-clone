export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  photo: string
  logo: string
  logoAlt: string
}

export interface Integration {
  name: string
  logo: string
}

export interface CustomerCase {
  id: string
  name: string
  category: string
  icon: string
  metric: string
  metricColor: string
  description: string
}

export interface FeatureTestimonial {
  type: 'logo' | 'company'
  logo?: string
  logoAlt?: string
  companyIcon?: string
  companyName?: string
  companyCategory?: string
  quote: string
  authorName: string
  authorRole: string
  authorPhoto: string
}

export interface FeatureBlock {
  id: string
  title: string
  description: string
  linkText: string
  linkHref: string
  image: string
  imageAlt: string
  imageBgColor: string
  layout: 'left' | 'right'
  testimonial?: FeatureTestimonial
}

export interface FooterNavSection {
  title: string
  links: string[]
}

export interface FooterNavColumn {
  sections: FooterNavSection[]
}
