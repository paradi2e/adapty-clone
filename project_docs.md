# Project Documentation - Adapty.io Landing Page Clone

## Обзор проекта

Pixel-perfect клон главной страницы [adapty.io](https://adapty.io) на React + TypeScript + Tailwind CSS.

**Оригинал:** https://adapty.io
**Тип:** Single Page Application (SPA)
**Цель:** Тестовое задание - демонстрация качества кода и скорости разработки

---

## Технологический стек

| Технология | Версия | Назначение |
|------------|--------|------------|
| React | 18.x | UI фреймворк |
| TypeScript | 5.x | Типизация |
| Vite | 5.x | Сборка и dev server |
| Tailwind CSS | 3.x | Стилизация |
| Plus Jakarta Sans | - | Основной шрифт (Google Fonts) |

---

## Архитектура страницы

### Общая структура (сверху вниз)

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│  [Logo] [Nav: Product, Solutions, Pricing...] [Login][Demo] │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     HERO SECTION                             │
│  "The Best Solution to Grow Mobile In-App Purchases"         │
│  [Subtitle] [CTA Buttons] [Hero Image/Illustration]          │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   TRUSTED BY SECTION                         │
│  "Trusted by leading mobile app companies"                   │
│  [Logo Grid: Company logos]                                  │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  FEATURES SECTION 1                          │
│  [Text Column]              [Image Column]                   │
│  Title, Description         Product Screenshot               │
│  [Quote Card]                                                │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  FEATURES SECTION 2 (reversed)               │
│  [Image Column]              [Text Column]                   │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                 INTEGRATIONS SECTION                         │
│  Background: Aqua/Light Blue                                 │
│  "Connect with your favorite tools"                          │
│  [Integration Logos Grid: Stripe, Firebase, etc.]            │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   DARK SECTION                               │
│  Background: Dark Gray/Black                                 │
│  [Feature highlights with white text]                        │
│  [Quote blocks]                                              │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  COUNTERS/STATS SECTION                      │
│  [Big Number] [Big Number] [Big Number] [Big Number]         │
│  Label         Label        Label        Label               │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   CARDS SECTION                              │
│  [Card 1]        [Card 2]        [Card 3]                    │
│  Icon, Title     Icon, Title     Icon, Title                 │
│  Description     Description     Description                 │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                  │
│  [CTA Block: "Ready to get started?"]                        │
│  ─────────────────────────────────────                       │
│  [Col1] [Col2] [Col3] [Col4] [Col5]  - Navigation            │
│  ─────────────────────────────────────                       │
│  [Logo] [Socials] [Copyright] [Language]                     │
└─────────────────────────────────────────────────────────────┘
```

---

## Детальное описание секций

### 1. Header

**Layout:** Fixed top, full width, z-index высокий
**Высота:** 64px desktop, адаптивная на mobile
**Фон:** Белый с тенью при скролле

**Элементы:**
- **Logo:** SVG, 90×30px, ссылка на главную
- **Navigation:** Горизонтальное меню
  - Product (dropdown)
  - Solutions (dropdown)
  - Pricing
  - Resources (dropdown)
  - Developers
- **Actions:**
  - Login (text link)
  - Sign Up (secondary button)
  - Schedule Demo (primary button, purple)
- **Mobile:** Hamburger menu (toggle)

**CSS-особенности:**
```css
position: sticky;
top: 0;
box-shadow: 0 0 2rem 0 rgba(0,0,0,0.05); /* при скролле */
```

---

### 2. Hero Section

**Layout:** 2 колонки на desktop, 1 колонка на mobile
**Max-width:** 1100px
**Padding:** 80px vertical на desktop

**Элементы:**
- **Headline:** H1, жирный, ~52px
  - "The Best Solution to Grow Mobile In-App Purchases"
- **Subtitle:** 18-20px, gray
  - Описание продукта
- **CTA Buttons:**
  - "Get Started Free" (primary, purple)
  - "Schedule Demo" (outline)
- **Social Proof:** Рейтинг 4.8, 217 reviews
- **Hero Image:** Скриншот продукта или иллюстрация

**Анимации:**
- Gradient text animation на заголовке (опционально)
- Hover эффекты на кнопках

---

### 3. Trusted By Section

**Layout:** Центрированный, full width
**Фон:** Белый

**Элементы:**
- **Title:** "Trusted by leading mobile app companies"
- **Logo Grid:** 6-8 логотипов компаний
  - Grayscale фильтр
  - Hover: цветные

**CSS:**
```css
filter: grayscale(100%);
opacity: 0.6;
transition: all 0.2s;
```

---

### 4. Features/Quote Sections (x2-3)

**Layout:** Grid 50/50, чередуется направление
**Gap:** 40-60px

**Вариант A (текст слева):**
```
[Text Column: 420px]    [Image Column: остаток]
- Section title (H2)     - Product screenshot
- Description            - Border radius: 16px
- Quote Card
```

**Вариант B (текст справа):**
```
[Image Column]          [Text Column]
```

**Quote Card:**
- Белый фон
- Border: 1px solid gray-200
- Border-radius: 16px
- Quote icon (кавычки)
- Quote text
- Avatar + Name + Role

---

### 5. Integrations Section

**Layout:** Центрированный
**Фон:** `#E8F4F8` (aqua/light blue)
**Padding:** 80px vertical

**Элементы:**
- **Title:** "Connect with your favorite tools"
- **Logo Grid:** 20-30 логотипов интеграций
  - Stripe, Firebase, Mixpanel, Branch, Braze, etc.
  - 4-5 колонок на desktop
  - Высота логотипа: 60px

**Hover эффект:**
```css
transform: scale(1.05);
filter: brightness(1.1);
```

---

### 6. Dark Section

**Layout:** Full width
**Фон:** `#1A1A1A` или близкий тёмный
**Текст:** Белый

**Элементы:**
- Feature highlights
- Quote blocks с белым бордером
- CTA кнопки (outline белые)

---

### 7. Counters/Stats Section

**Layout:** 4 колонки на desktop, 2 на tablet, 1 на mobile

**Элементы (примеры):**
- "$1B+" - Revenue generated
- "10K+" - Apps powered
- "200M+" - Transactions
- "99.9%" - Uptime

**Стили:**
- Число: ~48px, жирное
- Label: 14px, gray

---

### 8. Cards Section

**Layout:** 3 колонки на desktop
**Gap:** 24px

**Card структура:**
- Border: 1px solid gray-200
- Border-radius: 16px
- Padding: 24px
- Icon или emoji
- Title (H3)
- Description
- Arrow link (hover: translate-x)

---

### 9. Footer

**Фон:** `#0D0D0D` (тёмный)
**Layout:** Multi-section

**Секции:**

**CTA Block:**
- "Ready to get started?"
- "Contact Us" / "Schedule Demo" кнопки

**Navigation Grid (5 колонок):**
- Product
- Solutions
- Resources
- Company
- Legal

**Bottom Bar:**
- Logo (белый вариант)
- Social icons (Twitter, LinkedIn, etc.)
- Copyright "© 2024 Adapty Tech Inc."
- Language switcher

---

## Дизайн-система

### Цвета

```javascript
colors: {
  // Primary
  primary: '#6720FF',        // Основной фиолетовый
  'primary-hover': '#7B3AFF',
  'primary-active': '#5A1CE6',

  // Neutrals
  white: '#FFFFFF',
  black: '#0D0D0D',

  // Grays
  'gray-100': '#F8F8F8',
  'gray-150': '#F5F5F5',
  'gray-200': '#EEEEEE',
  'gray-250': '#E5E5E5',
  'gray-500': '#888888',
  'gray-600': '#666666',
  'gray-800': '#333333',

  // Accent
  'aqua-600': '#E8F4F8',
  'blue-400': '#0D93F2',
}
```

### Типографика

```javascript
fontSize: {
  'xs': '12px',
  'sm': '14px',
  'base': '16px',
  'lg': '18px',
  'xl': '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '52px',    // H1
}

fontWeight: {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

fontFamily: {
  sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
}
```

### Spacing

```javascript
spacing: {
  'xs': '4px',
  'sm': '8px',
  'md': '16px',
  'lg': '24px',
  'xl': '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
}
```

### Border Radius

```javascript
borderRadius: {
  'sm': '8px',
  'md': '16px',
  'lg': '24px',
  'full': '9999px',
}
```

### Shadows

```javascript
boxShadow: {
  'sm': '0 1px 2px rgba(0,0,0,0.05)',
  'md': '0 4px 12px rgba(0,0,0,0.1)',
  'lg': '0 8px 24px rgba(0,0,0,0.12)',
  'primary': '0 4px 12px rgba(103,32,255,0.25)',
}
```

---

## Breakpoints (Mobile-First)

```javascript
screens: {
  'xs': '358px',    // Small mobile
  'sm': '432px',    // Mobile
  'md': '767px',    // Tablet
  'lg': '991px',    // Small desktop
  'xl': '1200px',   // Desktop
  '2xl': '1440px',  // Large desktop
}
```

**Адаптивные изменения:**

| Breakpoint | Колонки | Header | Hero |
|------------|---------|--------|------|
| < 767px | 1 | Hamburger | Stack |
| 767-991px | 2 | Compact nav | 2-col |
| > 991px | 3-4 | Full nav | 2-col wide |

---

## Компоненты React

### UI Components (базовые)

```
components/ui/
├── Button.tsx          # Primary, Secondary, Outline, Ghost
├── Card.tsx            # Base card с border
├── Container.tsx       # Max-width wrapper
├── Input.tsx           # Form input
├── Badge.tsx           # Labels/tags
├── Icon.tsx            # SVG icon wrapper
└── Logo.tsx            # Adapty logo
```

### Layout Components

```
components/layout/
├── Header.tsx          # Навигация, sticky
├── Footer.tsx          # Футер
├── Section.tsx         # Wrapper для секций
└── MobileMenu.tsx      # Mobile navigation
```

### Section Components

```
components/sections/
├── HeroSection.tsx
├── TrustedBySection.tsx
├── FeatureSection.tsx      # Reusable, props для direction
├── IntegrationsSection.tsx
├── DarkSection.tsx
├── StatsSection.tsx
├── CardsSection.tsx
└── CTASection.tsx
```

---

## Assets

### Изображения для загрузки

1. **Hero Image** - Скриншот дашборда Adapty
2. **Feature Screenshots** - 2-3 скриншота продукта
3. **Company Logos** - 6-8 логотипов клиентов
4. **Integration Logos** - 20-30 логотипов сервисов

### SVG Иконки

- Arrow right
- Check mark
- Menu (hamburger)
- Close (X)
- Social icons (Twitter, LinkedIn, GitHub, etc.)
- Quote marks

### Статус assets

| Asset | Источник | Статус |
|-------|----------|--------|
| Adapty Logo | Оригинал (SVG) | Нужно извлечь |
| Hero Image | Screenshot | Нужно сделать |
| Company Logos | PNG/SVG | Нужно собрать |
| Integration Logos | Официальные | Нужно собрать |
| Icons | Создать/Heroicons | Нужно подготовить |

---

## Performance Requirements

- **First Contentful Paint:** < 1.5s
- **Lighthouse Score:** > 90
- **Bundle Size:** < 200KB (gzipped)
- **Images:** WebP format, lazy loading

---

## Accessibility (a11y)

- Semantic HTML (header, main, footer, section, nav)
- Alt текст для всех изображений
- Aria-labels для интерактивных элементов
- Keyboard navigation support
- Focus states для всех интерактивных элементов
- Color contrast ratio > 4.5:1
