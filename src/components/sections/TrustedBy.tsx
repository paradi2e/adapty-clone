import { Container } from '@/components/ui/Container'

// FEELD logo - distinctive typography
function FeeldLogo() {
  return (
    <svg width="80" height="24" viewBox="0 0 80 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <text x="0" y="18" fill="currentColor" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" letterSpacing="2">
        FEELD
      </text>
    </svg>
  )
}

// Bumble logo - rounded bee icon + text
function BumbleLogo() {
  return (
    <svg width="100" height="24" viewBox="0 0 100 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
      <ellipse cx="12" cy="12" rx="6" ry="8" fill="currentColor"/>
      <text x="28" y="17" fill="currentColor" fontFamily="system-ui" fontSize="16" fontWeight="600">
        bumble
      </text>
    </svg>
  )
}

// Weewoo logo - ambulance style
function WeewooLogo() {
  return (
    <svg width="90" height="24" viewBox="0 0 90 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <rect x="0" y="6" width="12" height="12" rx="2" fill="currentColor" opacity="0.6"/>
      <rect x="2" y="10" width="8" height="4" fill="white"/>
      <text x="18" y="17" fill="currentColor" fontFamily="system-ui" fontSize="15" fontWeight="500" letterSpacing="1">
        weewoo
      </text>
    </svg>
  )
}

// AppNation logo
function AppNationLogo() {
  return (
    <svg width="100" height="24" viewBox="0 0 100 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <text x="0" y="17" fill="currentColor" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fontStyle="italic">
        AppNation
      </text>
    </svg>
  )
}

// Almus logo
function AlmusLogo() {
  return (
    <svg width="70" height="24" viewBox="0 0 70 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <text x="0" y="17" fill="currentColor" fontFamily="system-ui" fontSize="16" fontWeight="500">
        Almus
      </text>
    </svg>
  )
}

// Impala Studios logo
function ImpalaLogo() {
  return (
    <svg width="110" height="24" viewBox="0 0 110 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <text x="0" y="16" fill="currentColor" fontFamily="system-ui" fontSize="13" fontWeight="300" letterSpacing="1">
        impala studios
      </text>
    </svg>
  )
}

// HUBX logo
function HubxLogo() {
  return (
    <svg width="70" height="24" viewBox="0 0 70 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <text x="0" y="18" fill="currentColor" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" letterSpacing="3">
        HUBX
      </text>
    </svg>
  )
}

// Soracom logo - geometric
function SoracomLogo() {
  return (
    <svg width="90" height="24" viewBox="0 0 90 24" className="text-gray-400 hover:text-gray-600 transition-colors">
      <rect x="0" y="8" width="8" height="8" fill="currentColor"/>
      <text x="14" y="17" fill="currentColor" fontFamily="system-ui" fontSize="14" fontWeight="500">
        SORACOM
      </text>
    </svg>
  )
}

const companyLogos = [
  { name: 'FEELD', Logo: FeeldLogo },
  { name: 'Bumble', Logo: BumbleLogo },
  { name: 'Weewoo', Logo: WeewooLogo },
  { name: 'AppNation', Logo: AppNationLogo },
  { name: 'Almus', Logo: AlmusLogo },
  { name: 'Impala', Logo: ImpalaLogo },
  { name: 'HUBX', Logo: HubxLogo },
  { name: 'Soracom', Logo: SoracomLogo },
]

export function TrustedBy() {
  return (
    <section className="pt-4 pb-10 bg-[#f7f5f2]">
      <Container>
        <p className="text-center text-sm text-gray-500 mb-6">
          Trusted by 15,000+ apps and the world's largest app publishers
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
          {companyLogos.map((company) => (
            <div key={company.name} className="cursor-pointer">
              <company.Logo />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
