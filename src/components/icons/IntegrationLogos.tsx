// Integration logos as simple SVG components
// These are simplified brand representations

export function AmplitudeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <path d="M10 8h4v16h-4V8zm6 4h4v12h-4V12zm6 4h4v8h-4v-8zm6-8h4v16h-4V8z" />
      <text x="38" y="22" fontSize="12" fontWeight="600">Amplitude</text>
    </svg>
  )
}

export function MixpanelLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <circle cx="12" cy="16" r="8" />
      <text x="26" y="21" fontSize="12" fontWeight="600">Mixpanel</text>
    </svg>
  )
}

export function FirebaseLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <path d="M6 24L10 4l6 12-4 8H6zm8-10l4-10 4 18H14l4-8z" />
      <text x="28" y="21" fontSize="12" fontWeight="600">Firebase</text>
    </svg>
  )
}

export function SegmentLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <rect x="6" y="8" width="16" height="4" rx="2" />
      <rect x="6" y="14" width="12" height="4" rx="2" />
      <rect x="6" y="20" width="16" height="4" rx="2" />
      <text x="28" y="21" fontSize="12" fontWeight="600">Segment</text>
    </svg>
  )
}

export function AppsFlyerLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <path d="M8 8l8 8-8 8V8z" />
      <path d="M16 12l4 4-4 4v-8z" opacity="0.6" />
      <text x="26" y="21" fontSize="11" fontWeight="600">AppsFlyer</text>
    </svg>
  )
}

export function AdjustLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <circle cx="12" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="12" cy="16" r="2" />
      <text x="24" y="21" fontSize="12" fontWeight="600">Adjust</text>
    </svg>
  )
}

export function BranchLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <circle cx="10" cy="10" r="3" />
      <circle cx="10" cy="22" r="3" />
      <circle cx="20" cy="16" r="3" />
      <path d="M10 13v6M13 11l4 3M13 21l4-3" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="28" y="21" fontSize="12" fontWeight="600">Branch</text>
    </svg>
  )
}

export function OneSignalLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="currentColor">
      <circle cx="12" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="16" r="1" />
      <text x="26" y="21" fontSize="10" fontWeight="600">OneSignal</text>
    </svg>
  )
}

// Company logos for TrustedBy section
export function JEFITLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">JEFIT</text>
    </svg>
  )
}

export function MimoLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">Mimo</text>
    </svg>
  )
}

export function LifesumLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">Lifesum</text>
    </svg>
  )
}

export function VSCOLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">VSCO</text>
    </svg>
  )
}

export function BabbelLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">Babbel</text>
    </svg>
  )
}

export function MojoLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">Mojo</text>
    </svg>
  )
}

export function RootdLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">Rootd</text>
    </svg>
  )
}

export function SoulverLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 24" fill="currentColor">
      <text x="0" y="18" fontSize="16" fontWeight="700">Soulver</text>
    </svg>
  )
}
