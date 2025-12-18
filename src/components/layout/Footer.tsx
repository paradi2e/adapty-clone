import { Container } from '@/components/ui/Container'
import {
  XIcon,
  LinkedInIcon,
  DiscordIcon,
  GitHubIcon,
  YouTubeIcon,
  ChevronDownIcon
} from '@/components/icons'
import { footerNavigation } from '@/data'

const socialLinks = [
  { icon: XIcon, label: 'X (Twitter)' },
  { icon: LinkedInIcon, label: 'LinkedIn' },
  { icon: DiscordIcon, label: 'Discord' },
  { icon: GitHubIcon, label: 'GitHub' },
  { icon: YouTubeIcon, label: 'YouTube' },
]

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
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 mb-12">
            {footerNavigation.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-8">
                {column.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-white text-sm mb-4">{section.title}</h3>
                    <ul className="space-y-2.5">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-white/50 text-sm hover:text-white transition-colors"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © 2025 Adapty Tech Inc.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <img
                src="/images/flags/uk.png"
                alt="English"
                className="w-5 h-4 rounded-sm object-cover"
              />
              <span>English</span>
              <ChevronDownIcon className="ml-1" />
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
