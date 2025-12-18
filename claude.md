# Claude.md - Best Practices для React проекта Adapty Clone

## Стек технологий

- **React 18+** с TypeScript
- **Vite** для сборки
- **Tailwind CSS** для стилей
- **Plus Jakarta Sans** (Google Fonts) - основной шрифт

---

## Структура проекта

```
src/
├── components/           # React компоненты
│   ├── ui/              # Базовые UI компоненты (Button, Input, Card)
│   ├── layout/          # Layout компоненты (Header, Footer, Container)
│   └── sections/        # Секции страницы (Hero, Features, Integrations)
├── assets/              # Статические ресурсы
│   ├── images/          # Изображения и иллюстрации
│   ├── icons/           # SVG иконки
│   └── logos/           # Логотипы компаний и интеграций
├── hooks/               # Кастомные React hooks
├── utils/               # Утилиты и хелперы
├── constants/           # Константы и конфигурация
├── types/               # TypeScript типы и интерфейсы
└── styles/              # Глобальные стили и Tailwind конфиг
```

---

## Правила написания компонентов

### 1. Именование

```typescript
// Компоненты - PascalCase
const HeroSection = () => { ... }
const ButtonPrimary = () => { ... }

// Файлы компонентов - PascalCase.tsx
// HeroSection.tsx, ButtonPrimary.tsx

// Хуки - camelCase с префиксом use
const useMediaQuery = () => { ... }
const useScrollPosition = () => { ... }

// Утилиты - camelCase
const formatNumber = () => { ... }
const cn = () => { ... }  // classNames utility
```

### 2. Структура компонента

```typescript
// Imports - группировка по типу
import { useState, useEffect } from 'react';          // React
import { motion } from 'framer-motion';               // Внешние библиотеки
import { Button } from '@/components/ui';             // Внутренние компоненты
import { cn } from '@/utils';                         // Утилиты
import type { HeroProps } from './types';             // Типы

// Типы props
interface ComponentProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

// Компонент
export const Component = ({ title, className, children }: ComponentProps) => {
  // 1. Hooks
  const [isOpen, setIsOpen] = useState(false);

  // 2. Derived state / computations
  const isActive = isOpen && title;

  // 3. Effects
  useEffect(() => {
    // side effects
  }, []);

  // 4. Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // 5. Render
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
};
```

### 3. Export правила

```typescript
// Именованный экспорт для компонентов
export const Button = () => { ... }

// Index файлы для удобного импорта
// components/ui/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Input } from './Input';
```

---

## Tailwind CSS правила

### 1. Организация классов

```typescript
// Порядок классов: позиционирование → размеры → отступы → стили → анимации
className="
  relative flex items-center justify-center    // Позиционирование
  w-full max-w-[1100px] h-16                   // Размеры
  px-6 py-4 mx-auto                            // Отступы
  bg-white border border-gray-200 rounded-lg   // Стили
  hover:shadow-lg transition-all duration-150  // Анимации
"
```

### 2. Кастомные значения в tailwind.config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6720FF',
          hover: '#7B3AFF',
          active: '#5A1CE6',
        },
        gray: {
          150: '#F5F5F5',
          250: '#E5E5E5',
          600: '#666666',
        },
        aqua: {
          600: '#E8F4F8',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        container: '1100px',
      },
      borderRadius: {
        s: '8px',
        m: '16px',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
}
```

### 3. Responsive подход

```typescript
// Mobile-first: базовые стили для mobile, модификаторы для desktop
className="
  flex flex-col          // Mobile: вертикальный layout
  md:flex-row            // Tablet+: горизонтальный
  lg:gap-8               // Desktop: больше gap
  xl:max-w-[1440px]      // Large desktop
"

// Breakpoints (соответствуют оригиналу):
// sm: 432px   (small mobile)
// md: 767px   (tablet)
// lg: 991px   (small desktop)
// xl: 1200px  (desktop)
// 2xl: 1440px (large desktop)
```

---

## Работа с изображениями и assets

### 1. SVG иконки

```typescript
// Импорт как React компонент
import ArrowIcon from '@/assets/icons/arrow.svg?react';

// Использование
<ArrowIcon className="w-4 h-4 text-current" />
```

### 2. Изображения

```typescript
// Импорт изображений
import heroImage from '@/assets/images/hero.png';

// Использование с оптимизацией
<img
  src={heroImage}
  alt="Hero illustration"
  loading="lazy"
  className="w-full h-auto"
/>
```

### 3. Логотипы компаний

```typescript
// Хранить в массиве для удобного маппинга
const companyLogos = [
  { name: 'Company1', src: '/logos/company1.svg' },
  { name: 'Company2', src: '/logos/company2.svg' },
];

// Рендер
{companyLogos.map((logo) => (
  <img key={logo.name} src={logo.src} alt={logo.name} />
))}
```

---

## Анимации

### 1. CSS transitions (предпочтительно)

```typescript
// Простые hover эффекты через Tailwind
className="
  transition-all duration-150 ease-in-out
  hover:transform hover:translate-x-1
  active:translate-x-2
"
```

### 2. Gradient animation

```css
/* Для анимированного градиента текста */
.text-gradient-animated {
  background: linear-gradient(130deg, #0D93F2, #6720FF, #9C51D5);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## TypeScript правила

### 1. Типизация props

```typescript
// Интерфейс для props компонента
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

// Использование с дефолтными значениями
export const Button = ({
  variant,
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => { ... }
```

### 2. Типизация данных

```typescript
// types/index.ts
export interface CompanyLogo {
  name: string;
  src: string;
  width?: number;
  height?: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}
```

---

## Производительность

### 1. Мемоизация

```typescript
// Мемоизация тяжелых компонентов
import { memo } from 'react';

export const HeavyComponent = memo(({ data }) => {
  // ...
});

// useMemo для вычислений
const filteredItems = useMemo(() => {
  return items.filter(item => item.active);
}, [items]);

// useCallback для handlers
const handleClick = useCallback(() => {
  setOpen(true);
}, []);
```

### 2. Lazy loading

```typescript
// Lazy load для секций ниже fold
import { lazy, Suspense } from 'react';

const IntegrationsSection = lazy(() => import('./sections/Integrations'));

// Использование
<Suspense fallback={<SectionSkeleton />}>
  <IntegrationsSection />
</Suspense>
```

---

## Утилиты

### 1. cn (classNames merger)

```typescript
// utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Использование
cn('base-class', isActive && 'active-class', className)
```

### 2. useMediaQuery hook

```typescript
// hooks/useMediaQuery.ts
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

// Использование
const isMobile = useMediaQuery('(max-width: 767px)');
```

---

## Git Commit Convention

```
feat: добавить Hero секцию
fix: исправить отступы в Header на mobile
style: обновить цвета кнопок
refactor: вынести логику в хук useScrollPosition
docs: обновить README
```

---

## Чеклист перед коммитом

- [ ] TypeScript: нет ошибок типизации
- [ ] ESLint: нет warnings
- [ ] Responsive: проверить на всех breakpoints
- [ ] Accessibility: alt для изображений, aria-labels
- [ ] Производительность: нет лишних re-renders

---

## Pixel-Perfect подход

**ВАЖНО:** При клонировании/копировании дизайна всегда в первую очередь извлекать точные CSS-стили с оригинального сайта.

### Приоритет действий:

1. **Сначала** — получить точные стили с оригинала через DevTools или WebFetch
2. **Затем** — применить эти значения напрямую (font-size, line-height, letter-spacing и т.д.)
3. **Только потом** — адаптировать под Tailwind классы если нужно

### Какие стили извлекать:

- `font-size` — точный размер в px
- `font-weight` — 400/500/600/700
- `line-height` — в % или em
- `letter-spacing` — если есть
- `color` — точный hex код
- `margin/padding` — точные отступы
- `gap` — расстояния между элементами

### Пример применения:

```typescript
// Используем точные значения с оригинала
<div
  className="text-[72px] font-bold text-gray-900"
  style={{ lineHeight: '112%' }}
>
```

---

## Сохранение истории промптов

**ВАЖНО:** После каждой сессии работы необходимо сохранять историю промптов в файл `prompts_history.md`.

### Правила записи промптов:

1. **Не дословно** — записывать суть запроса с улучшенным лексиконом и синтаксисом
2. **Структурированно** — группировать по сессиям и темам
3. **С контекстом** — указывать что было до и после
4. **С результатами** — фиксировать какие файлы были изменены

### Формат записи:

```markdown
### Промпт N: Краткое описание задачи
**Запрос:** Отредактированная версия промпта с улучшенной формулировкой
**Контекст:** Текущее состояние проекта
**Результат:** Выполненные действия
**Изменённые файлы:** Список файлов
```

### Пример улучшения промпта:

❌ Исходный: "ну во первых фоноа вообще нет. во-вторых надо уменьшить размер"
✅ Улучшенный: "Исправить отсутствие фона у badge 'Ebook' и уменьшить внутренние отступы контейнера для соответствия оригиналу"
