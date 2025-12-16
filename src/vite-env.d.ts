/// <reference types="vite/client" />

// SVG imports as React components
declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}

// SVG imports as URL
declare module '*.svg' {
  const content: string
  export default content
}
