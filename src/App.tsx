import { useState } from 'react'
import { cn } from '@/utils'

function TestCnUtility() {
  const [isActive, setIsActive] = useState(true)
  return (
    <div
      className={cn(
        'p-4 rounded-lg cursor-pointer',
        'bg-primary text-white',
        isActive && 'font-bold'
      )}
      onClick={() => setIsActive(!isActive)}
    >
      Click me! cn() utility test (isActive: {isActive ? 'true' : 'false'})
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Test Header */}
      <header className="bg-primary text-white py-4 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-2xl font-bold">Adapty Clone - Setup Test</h1>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-12">
        {/* Test: Typography & Font */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            1. Typography Test (Plus Jakarta Sans)
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Regular text (400) - The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-lg text-gray-600 font-medium mb-2">
            Medium text (500) - The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-lg text-gray-600 font-semibold mb-2">
            Semibold text (600) - The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-lg text-gray-600 font-bold">
            Bold text (700) - The quick brown fox jumps over the lazy dog
          </p>
        </section>

        {/* Test: Colors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">2. Colors Test</h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-white text-xs">
              Primary
            </div>
            <div className="w-24 h-24 bg-primary-hover rounded-lg flex items-center justify-center text-white text-xs">
              Primary Hover
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-800 text-xs">
              Gray 100
            </div>
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-800 text-xs">
              Gray 200
            </div>
            <div className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center text-white text-xs">
              Gray 600
            </div>
            <div className="w-24 h-24 bg-aqua-600 rounded-lg flex items-center justify-center text-gray-800 text-xs">
              Aqua 600
            </div>
            <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center text-white text-xs">
              Black
            </div>
          </div>
        </section>

        {/* Test: Shadows */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Shadows Test</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-32 h-32 bg-white shadow-sm rounded-lg flex items-center justify-center text-gray-600 text-xs">
              Shadow SM
            </div>
            <div className="w-32 h-32 bg-white shadow-md rounded-lg flex items-center justify-center text-gray-600 text-xs">
              Shadow MD
            </div>
            <div className="w-32 h-32 bg-white shadow-lg rounded-lg flex items-center justify-center text-gray-600 text-xs">
              Shadow LG
            </div>
            <div className="w-32 h-32 bg-white shadow-primary rounded-lg flex items-center justify-center text-gray-600 text-xs">
              Shadow Primary
            </div>
          </div>
        </section>

        {/* Test: Border Radius */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Border Radius Test</h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-24 h-24 bg-primary rounded-sm flex items-center justify-center text-white text-xs">
              SM (8px)
            </div>
            <div className="w-24 h-24 bg-primary rounded-md flex items-center justify-center text-white text-xs">
              MD (16px)
            </div>
            <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-white text-xs">
              LG (24px)
            </div>
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-xs">
              Full
            </div>
          </div>
        </section>

        {/* Test: cn() utility */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">5. cn() Utility Test</h2>
          <TestCnUtility />
        </section>

        {/* Test: Gradient Animation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Gradient Animation Test</h2>
          <p className="text-gradient-animated text-5xl font-bold">
            Animated Gradient Text
          </p>
        </section>

        {/* Test: Responsive */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Responsive Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <span className="md:hidden">Mobile</span>
              <span className="hidden md:inline lg:hidden">Tablet</span>
              <span className="hidden lg:inline">Desktop</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">Box 2</div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">Box 3</div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">Box 4</div>
          </div>
        </section>

        {/* Test Status */}
        <section className="p-6 bg-green-100 rounded-lg border border-green-300">
          <h2 className="text-2xl font-bold text-green-800 mb-2">✅ Setup Complete!</h2>
          <p className="text-green-700">
            If you can see this page with proper styling, Phase 1 is complete.
          </p>
          <ul className="mt-4 text-green-700 list-disc list-inside">
            <li>Vite + React + TypeScript ✓</li>
            <li>Tailwind CSS v4 ✓</li>
            <li>Custom theme (colors, fonts, shadows) ✓</li>
            <li>Google Fonts (Plus Jakarta Sans) ✓</li>
            <li>Path aliases (@/) ✓</li>
            <li>Utilities (cn, svgr) ✓</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
