import { Container } from '@/components/ui/Container'

// Social icons
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-16">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight max-w-lg">
              Get started today or schedule a demo<br />
              for your personal onboarding
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold text-sm uppercase tracking-wide rounded-[8px] hover:bg-white/10 transition-colors text-center"
              >
                Start for free
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-[#6720FF] text-white font-semibold text-sm uppercase tracking-wide rounded-[8px] hover:bg-[#5a1ce6] transition-colors text-center"
              >
                Schedule a demo
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white pt-12 pb-8">
        <Container>
          {/* Logo and Social */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <img src="/images/logos/adapty-white.svg" alt="Adapty" className="h-7" />
            <div className="flex items-center gap-5">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <XIcon />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <DiscordIcon />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <GitHubIcon />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 mb-12">
            {/* Column 1 */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Paywall management</h3>
                <ul className="space-y-2.5">
                  {['Paywall builder', 'Onboarding builder', 'AI generator', 'A/B testing', 'Autopilot', 'Targeting', 'Localization', 'Remote config'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Infrastructure</h3>
                <ul className="space-y-2.5">
                  {['Subscription SDK', 'Subscriber sync', 'Fallback paywalls', 'Refund saver', 'Integrations'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Roles</h3>
                <ul className="space-y-2.5">
                  {['For developers', 'For marketers', 'For app owners'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Stages</h3>
                <ul className="space-y-2.5">
                  {['Indie', 'Startups', 'Publishers', 'Enterprise'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Cases</h3>
                <ul className="space-y-2.5">
                  {['Integrate subscriptions', 'Grow app revenue', 'Analyze performance', 'Read our cases'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Migrate from</h3>
                <ul className="space-y-2.5">
                  {['RevenueCat', 'Purchasely', 'Qonversion', 'Superwall'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">SDK</h3>
                <ul className="space-y-2.5">
                  {['iOS', 'Android', 'React Native', 'Flutter', 'FlutterFlow', 'Kotlin Multiplatform', 'Capacitor', 'Unity', 'Stripe'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-white text-sm mb-4">Resources</h3>
              <ul className="space-y-2.5">
                {['Blog', 'Ebooks', 'Podcast', 'Webinars', 'Events', 'Glossary', 'Documentation', 'Paywall library', 'LTV prediction model', 'Apple fiscal calendar', 'Apple receipt checker', 'Subscription calculator', 'Refund saver calculator', 'In-app subscription reports', 'Community'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Analytics</h3>
                <ul className="space-y-2.5">
                  {['Revenue analytics', 'LTV analytics', 'AI predictive analytics', 'Apple ads manager'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-4">Company</h3>
                <ul className="space-y-2.5">
                  {['About us', 'Contact us', 'Careers', 'Terms', 'Privacy policy', 'Data protection', 'System status', 'SOC2 compliance', 'Become a partner'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © 2025 Adapty Tech Inc.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <img src="/images/flags/uk.png" alt="English" className="w-5 h-4 rounded-sm object-cover" />
              <span>English</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
