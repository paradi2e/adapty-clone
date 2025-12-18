import { useState } from 'react'
import { Container } from '@/components/ui/Container'

// Code examples for each platform
const codeExamples = {
  swift: `// Your app's code
import Adapty

do {
    try await Adapty.activate("PUBLIC_SDK_KEY")

    // Make a purchase, Adapty handles the rest
    let purchaseResult = try await Adapty.makePurchase(product)
    // successful purchase
} catch {
    // handle the error
}`,
  kotlin: `// Your app's code
import com.adapty.Adapty

Adapty.activate(applicationContext, "PUBLIC_SDK_KEY")

// Make a purchase. Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
    when (result) {
        is AdaptyResult.Success -> // successful purchase
        is AdaptyResult.Error -> // handle the error
    }
}`,
  reactNative: `// Your app's code
import { adapty } from 'react-native-adapty';

await adapty.activate('PUBLIC_SDK_KEY');

// Make a purchase. Adapty handles the rest
const purchase = await adapty.makePurchase(product);
// successful purchase`,
  flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

await Adapty().activate('PUBLIC_SDK_KEY');

// Make a purchase. Adapty handles the rest
final result = await Adapty().makePurchase(product: product);
// successful purchase`,
  unity: `// Your app's code
using AdaptySDK;

Adapty.Activate("PUBLIC_SDK_KEY");

// Make a purchase. Adapty handles the rest
Adapty.MakePurchase(product, (profile, error) => {
    // successful purchase
});`
}

const tabs = [
  { id: 'swift', label: 'Swift', github: 'https://github.com/adaptyteam/AdaptySDK-iOS' },
  { id: 'kotlin', label: 'Kotlin', github: 'https://github.com/adaptyteam/AdaptySDK-Android' },
  { id: 'reactNative', label: 'React Native', github: 'https://github.com/adaptyteam/AdaptySDK-React-Native' },
  { id: 'flutter', label: 'Flutter', github: 'https://github.com/adaptyteam/AdaptySDK-Flutter' },
  { id: 'unity', label: 'Unity', github: 'https://github.com/adaptyteam/AdaptySDK-Unity' },
]

const sdkCards = [
  { name: 'Swift SDK', icon: '/images/icons/menu/ios.svg', href: 'https://docs.adapty.io/docs/ios' },
  { name: 'Kotlin SDK', icon: '/images/icons/menu/android.svg', href: 'https://docs.adapty.io/docs/android' },
  { name: 'React Native SDK', icon: '/images/icons/menu/react-native.svg', href: 'https://docs.adapty.io/docs/react-native' },
  { name: 'Unity SDK', icon: '/images/icons/menu/unity.svg', href: 'https://docs.adapty.io/docs/unity' },
  { name: 'Flutter SDK', icon: '/images/icons/menu/flutter.svg', href: 'https://docs.adapty.io/docs/flutter' },
  { name: 'Capacitor SDK', icon: '/images/icons/menu/capacitor.svg', href: 'https://docs.adapty.io/docs/capacitor' },
  { name: 'Kotlin Multiplatform', icon: '/images/icons/menu/kotlin-multiplatform.svg', href: 'https://docs.adapty.io/docs/kotlin-multiplatform' },
  { name: 'FlutterFlow', icon: '/images/icons/menu/flutterflow.svg', href: 'https://docs.adapty.io/docs/flutterflow' },
  { name: 'Web API', icon: '/images/icons/menu/web.svg', href: 'https://docs.adapty.io/reference' },
  { name: 'Stripe', icon: '/images/icons/menu/stripe-sdk.svg', href: '/integrations/stripe/' },
]

// GitHub icon
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

// Copy icon
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
)

// Arrow icon
const ArrowRight = () => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" className="ml-2">
    <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="currentColor"/>
  </svg>
)

// Syntax highlighting component
function HighlightedLine({ line }: { line: string }) {
  // Parse and highlight the line
  const parts: { text: string; className: string }[] = []

  // Check if it's a comment line
  const commentMatch = line.match(/^(\s*)(\/\/.*)$/)
  if (commentMatch) {
    if (commentMatch[1]) {
      parts.push({ text: commentMatch[1], className: '' })
    }
    parts.push({ text: commentMatch[2], className: 'text-gray-500' })
    return (
      <>
        {parts.map((part, i) => (
          <span key={i} className={part.className}>{part.text}</span>
        ))}
      </>
    )
  }

  // Tokenize the line
  let remaining = line

  while (remaining.length > 0) {
    // Check for strings
    const stringMatch = remaining.match(/^("[^"]*"|'[^']*')/)
    if (stringMatch) {
      parts.push({ text: stringMatch[0], className: 'text-[#f9d849]' })
      remaining = remaining.slice(stringMatch[0].length)
      continue
    }

    // Check for keywords
    const keywordMatch = remaining.match(/^(import|do|try|await|let|catch|const|async|using|final|when|is|from)\b/)
    if (keywordMatch) {
      parts.push({ text: keywordMatch[0], className: 'text-[#c792ea]' })
      remaining = remaining.slice(keywordMatch[0].length)
      continue
    }

    // Check for Adapty class names
    const classMatch = remaining.match(/^(Adapty|AdaptyResult|AdaptySDK)\b/)
    if (classMatch) {
      parts.push({ text: classMatch[0], className: 'text-[#79c0ff]' })
      remaining = remaining.slice(classMatch[0].length)
      continue
    }

    // Check for method calls (after dot)
    const methodMatch = remaining.match(/^\.(\w+)(?=\()/)
    if (methodMatch) {
      parts.push({ text: '.', className: '' })
      parts.push({ text: methodMatch[1], className: 'text-[#7ee787]' })
      remaining = remaining.slice(methodMatch[0].length)
      continue
    }

    // Check for variables/parameters
    const varMatch = remaining.match(/^(product|purchaseResult|result|activity|applicationContext|purchase|profile|error)\b/)
    if (varMatch) {
      parts.push({ text: varMatch[0], className: 'text-[#ffa657]' })
      remaining = remaining.slice(varMatch[0].length)
      continue
    }

    // Check for inline comment
    const inlineCommentMatch = remaining.match(/^(\/\/.*)$/)
    if (inlineCommentMatch) {
      parts.push({ text: inlineCommentMatch[0], className: 'text-gray-500' })
      remaining = ''
      continue
    }

    // Default: take one character
    parts.push({ text: remaining[0], className: '' })
    remaining = remaining.slice(1)
  }

  return (
    <>
      {parts.map((part, i) => (
        <span key={i} className={part.className}>{part.text}</span>
      ))}
    </>
  )
}

export function CodeSection() {
  const [activeTab, setActiveTab] = useState('swift')
  const [copied, setCopied] = useState(false)
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0]

  const handleCopy = async () => {
    const code = codeExamples[activeTab as keyof typeof codeExamples]
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-[#111111] py-16 md:py-24">
      <Container>
        {/* Section title */}
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-[36px] font-semibold mb-12 md:mb-16">
          Integrate in-app purchases with a few lines of code
        </h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-12">
          {/* Left column - Description + Testimonial */}
          <div className="space-y-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.
            </p>

            <a
              href="/sdk/"
              className="inline-flex items-center text-white font-medium hover:opacity-80 transition-opacity group"
            >
              Make subscriptions easy
              <ArrowRight />
            </a>

            {/* Testimonial card */}
            <div className="border border-gray-700 rounded-2xl p-6 mt-10 relative">
              {/* Quote mark breaking the border */}
              <div className="absolute -top-5 left-6 bg-[#111111] px-2">
                <span className="text-4xl text-gray-500 font-serif leading-none">"</span>
              </div>

              {/* Company logo */}
              <img
                src="/images/testimonials/smitten-logo.webp"
                alt="Smitten"
                className="h-8 object-contain mb-4 mt-2"
              />

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="/images/testimonials/magnus-olafsson.webp"
                  alt="Magnús Ólafsson"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-white text-sm font-medium">Magnús Ólafsson</div>
                  <div className="text-gray-400 text-sm">Chief Technology Officer at Smitten</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Code editor */}
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-800 self-start">
            {/* Tabs header */}
            <div className="flex bg-[#111111] border-b border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                  )}
                </button>
              ))}
            </div>

            {/* Code content */}
            <div className="relative">
              {/* Copy button */}
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  <CopyIcon />
                )}
              </button>

              <div className="px-5 py-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    {codeExamples[activeTab as keyof typeof codeExamples].trim().split('\n').map((line, i) => (
                      <div key={i} className="flex leading-6">
                        <span className="text-gray-500 w-8 flex-shrink-0 select-none text-right pr-4">{i + 1}</span>
                        <span>
                          <HighlightedLine line={line} />
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>

            {/* GitHub footer */}
            <div className="flex items-center justify-between px-5 py-2.5 border-t border-gray-800 bg-[#111111]">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <GitHubIcon />
                <span className="font-medium">GitHub</span>
                <span className="text-gray-500">100% Open Source</span>
              </div>
              <a
                href={currentTab.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 hover:text-white transition-colors flex items-center gap-1.5"
              >
                Go to GitHub
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4M8.5 3.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 md:mt-24" />

        {/* SDK Platform Cards */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-white text-center text-xl md:text-2xl lg:text-[28px] font-semibold mb-10">
            Get the SDK for your platform
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sdkCards.map((sdk) => (
              <a
                key={sdk.name}
                href={sdk.href}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-gray-600 transition-colors group"
              >
                <img
                  src={sdk.icon}
                  alt={sdk.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="text-white text-sm font-medium text-center">{sdk.name}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
