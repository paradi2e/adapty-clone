import { Container } from '@/components/ui/Container'
import { ChevronRightSmallIcon } from '@/components/icons'
import { cn } from '@/utils'
import {
  productMenuTabs,
  productTabContent,
  casesMenuContent,
  resourcesMenuContent,
  docsMenuContent
} from '@/data'

interface DropdownWrapperProps {
  children: React.ReactNode
  onMouseEnter: () => void
}

function DropdownWrapper({ children, onMouseEnter }: DropdownWrapperProps) {
  return (
    <div
      className="fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg"
      onMouseEnter={onMouseEnter}
    >
      <Container>
        <div className="py-6">{children}</div>
      </Container>
    </div>
  )
}

interface MenuItemProps {
  href: string
  label: string
  icon?: string
  isNew?: boolean
}

function MenuItem({ href, label, icon, isNew }: MenuItemProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-2.5 py-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
    >
      {icon && <img src={icon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" />}
      {label}
      {isNew && (
        <span className="text-[10px] px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded font-medium">
          new
        </span>
      )}
    </a>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
      {children}
    </h4>
  )
}

// Product Menu
interface ProductMenuProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onMouseEnter: () => void
}

export function ProductMenu({ activeTab, onTabChange, onMouseEnter }: ProductMenuProps) {
  const content = productTabContent[activeTab as keyof typeof productTabContent]

  return (
    <DropdownWrapper onMouseEnter={onMouseEnter}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[180px] flex-shrink-0 border-r border-gray-100 pr-6">
          {productMenuTabs.map((tab) => (
            <button
              key={tab.id}
              onMouseEnter={() => onTabChange(tab.id)}
              className={cn(
                "w-full flex items-center justify-between py-2.5 text-sm font-medium transition-colors text-left",
                activeTab === tab.id ? "text-primary" : "text-gray-600 hover:text-gray-900"
              )}
            >
              {tab.label}
              {activeTab === tab.id && <ChevronRightSmallIcon />}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 pl-10">
          {activeTab === 'integrations' ? (
            <IntegrationsTabContent content={content} />
          ) : activeTab === 'sdk' ? (
            <SDKTabContent content={content} />
          ) : (
            <ProductSolutionTabContent content={content} />
          )}
        </div>
      </div>
    </DropdownWrapper>
  )
}

interface TabContentProps {
  content: {
    columns: Array<{
      title: string
      items: Array<{ label: string; href: string; icon?: string; isNew?: boolean }>
      isGrid?: boolean
      gridCols?: number
    }>
    headers?: string[]
    footer?: { label: string; href: string }
  }
}

function IntegrationsTabContent({ content }: TabContentProps) {
  return (
    <div>
      <SectionTitle>{content.columns[0].title}</SectionTitle>
      <div className="grid grid-cols-5 gap-x-6 gap-y-2">
        {content.columns[0].items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="py-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      {content.footer && (
        <a
          href={content.footer.href}
          className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-gray-600 hover:text-primary"
        >
          {content.footer.label}
          <ChevronRightSmallIcon />
        </a>
      )}
    </div>
  )
}

function SDKTabContent({ content }: TabContentProps) {
  return (
    <div className="space-y-6">
      {content.columns.map((column, idx) => (
        <div key={idx}>
          <SectionTitle>{column.title}</SectionTitle>
          {column.isGrid ? (
            <div className="grid grid-cols-4 gap-x-8 gap-y-2">
              {column.items.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </div>
          ) : (
            <div className="flex gap-8">
              {column.items.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ProductSolutionTabContent({ content }: TabContentProps) {
  return (
    <div>
      {content.headers && (
        <>
          <div className="grid grid-cols-3 gap-12 mb-4">
            {content.headers.map((header, idx) => (
              <h3 key={idx} className="text-base font-medium text-gray-900">
                {header}
              </h3>
            ))}
          </div>
          <div className="border-b border-gray-200 mb-6" />
        </>
      )}
      <div className="grid grid-cols-3 gap-12">
        {content.columns.map((column, idx) => (
          <div key={idx}>
            <SectionTitle>{column.title}</SectionTitle>
            <div className="space-y-1">
              {column.items.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Cases Menu
interface CasesMenuProps {
  onMouseEnter: () => void
}

export function CasesMenu({ onMouseEnter }: CasesMenuProps) {
  return (
    <DropdownWrapper onMouseEnter={onMouseEnter}>
      <SectionTitle>{casesMenuContent.title}</SectionTitle>
      <div className="grid grid-cols-4 gap-4">
        {casesMenuContent.stories.map((story) => (
          <a
            key={story.name}
            href={story.href}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            {story.icon ? (
              <img src={story.icon} alt="" className="w-10 h-10 rounded-xl flex-shrink-0 object-cover" />
            ) : (
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex-shrink-0" />
            )}
            <div>
              <div className="font-medium text-sm text-gray-900 group-hover:text-primary">
                {story.name}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{story.desc}</div>
            </div>
          </a>
        ))}
      </div>
      <a
        href={casesMenuContent.footer.href}
        className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-gray-600 hover:text-primary"
      >
        {casesMenuContent.footer.label}
        <ChevronRightSmallIcon />
      </a>
    </DropdownWrapper>
  )
}

// Resources Menu
interface ResourcesMenuProps {
  onMouseEnter: () => void
}

export function ResourcesMenu({ onMouseEnter }: ResourcesMenuProps) {
  return (
    <DropdownWrapper onMouseEnter={onMouseEnter}>
      <div className="grid grid-cols-3 gap-12">
        {resourcesMenuContent.columns.map((column, colIdx) => (
          <div key={colIdx} className="space-y-6">
            {column.sections.map((section) => (
              <div key={section.title}>
                <SectionTitle>{section.title}</SectionTitle>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <MenuItem key={item.label} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </DropdownWrapper>
  )
}

// Docs Menu
interface DocsMenuProps {
  onMouseEnter: () => void
}

export function DocsMenu({ onMouseEnter }: DocsMenuProps) {
  return (
    <DropdownWrapper onMouseEnter={onMouseEnter}>
      <div className="grid grid-cols-3 gap-12">
        {docsMenuContent.columns.map((column, idx) => (
          <div key={idx}>
            <SectionTitle>{column.title}</SectionTitle>
            <div className="space-y-1">
              {column.items.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </DropdownWrapper>
  )
}
