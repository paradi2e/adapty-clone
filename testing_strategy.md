# Стратегия тестирования - Adapty Clone

## Обзор

Для обеспечения качества кода на каждом этапе разработки используется многоуровневая система проверок.

---

## Уровни тестирования

### 1. Автоматические проверки (CI-like)

| Проверка | Команда | Что проверяет |
|----------|---------|---------------|
| TypeScript | `npm run typecheck` | Ошибки типизации |
| ESLint | `npm run lint` | Качество кода, code style |
| Build | `npm run build` | Сборка без ошибок |

### 2. Визуальное тестирование

| Проверка | Как проверять |
|----------|---------------|
| Dev Server | `npm run dev` → открыть http://localhost:5173 |
| Responsive | DevTools → Toggle device toolbar (Ctrl+Shift+M) |
| Hover states | Навести мышью на интерактивные элементы |

### 3. Чеклист для каждого этапа

Перед коммитом каждого этапа:
```bash
# 1. Проверка типов
npm run typecheck

# 2. Проверка линтера
npm run lint

# 3. Тестовая сборка
npm run build

# 4. Визуальная проверка (если применимо)
npm run dev
```

---

## Детальные планы по фазам

### Фаза 1: Настройка проекта

#### Шаг 1.1: Создание Vite проекта
```bash
npm create vite@latest . -- --template react-ts
npm install
```
**Тест:** `npm run dev` запускается без ошибок, открывается страница Vite

#### Шаг 1.2: Установка Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
**Тест:** Tailwind классы применяются к элементам

#### Шаг 1.3: Настройка tailwind.config.js
- Добавить кастомные цвета (primary, grays, aqua)
- Добавить кастомные breakpoints
- Добавить font-family

**Тест:** Кастомные классы работают (bg-primary, text-gray-600, etc.)

#### Шаг 1.4: Подключение шрифтов
- Добавить Google Fonts в index.html
- Настроить font-family в Tailwind

**Тест:** Шрифт Plus Jakarta Sans отображается на странице

#### Шаг 1.5: Настройка алиасов путей
- Настроить `@/` алиас в vite.config.ts и tsconfig.json

**Тест:** Импорт `import { X } from '@/components'` работает

#### Шаг 1.6: Установка утилит
```bash
npm install clsx tailwind-merge
npm install -D vite-plugin-svgr
```
**Тест:** Импорт SVG как компонент работает

#### Чеклист завершения Фазы 1:
- [ ] `npm run dev` работает
- [ ] `npm run build` успешен
- [ ] `npm run typecheck` без ошибок
- [ ] Tailwind классы применяются
- [ ] Кастомные цвета работают
- [ ] Шрифт Plus Jakarta Sans отображается
- [ ] Алиасы `@/` работают
- [ ] SVG импорт работает

---

### Фаза 2: UI компоненты

#### Шаг 2.1: Утилита cn()
Создать `src/utils/cn.ts`

**Тест:**
```typescript
cn('foo', true && 'bar', false && 'baz') // → 'foo bar'
```

#### Шаг 2.2: Button компонент
Создать `src/components/ui/Button.tsx`
- Варианты: primary, secondary, outline, ghost
- Размеры: sm, md, lg

**Тест визуальный:**
- Все варианты отображаются корректно
- Hover эффекты работают
- Размеры различаются

#### Шаг 2.3: Container компонент
Создать `src/components/ui/Container.tsx`
- max-width: 1100px
- Центрирование
- Responsive padding

**Тест:** Контент центрируется, max-width соблюдается

#### Шаг 2.4: Section компонент
Создать `src/components/ui/Section.tsx`
- Background variants
- Padding variants

**Тест:** Разные фоны применяются корректно

#### Шаг 2.5: Card компонент
Создать `src/components/ui/Card.tsx`

**Тест:** Border, shadow, hover эффекты работают

#### Чеклист завершения Фазы 2:
- [ ] Все компоненты рендерятся без ошибок
- [ ] TypeScript типы корректны
- [ ] Все варианты компонентов работают
- [ ] Hover состояния работают
- [ ] Responsive поведение корректно

---

### Фаза 3: Layout компоненты

#### Шаг 3.1: Header компонент
- Logo
- Desktop navigation
- Mobile menu button
- Action buttons

**Тесты:**
- [ ] Logo отображается
- [ ] Навигация горизонтальная на desktop
- [ ] Hamburger появляется на mobile
- [ ] Sticky при скролле
- [ ] Shadow при скролле

#### Шаг 3.2: MobileMenu компонент
- Overlay
- Slide-in анимация
- Navigation links

**Тесты:**
- [ ] Открывается при клике на hamburger
- [ ] Закрывается при клике на X или overlay
- [ ] Анимация плавная

#### Шаг 3.3: Footer компонент
- CTA block
- Navigation grid
- Bottom bar

**Тесты:**
- [ ] 5 колонок на desktop
- [ ] Collapse на mobile
- [ ] Все ссылки кликабельны

#### Чеклист завершения Фазы 3:
- [ ] Header sticky работает
- [ ] Mobile menu анимация работает
- [ ] Footer responsive корректен
- [ ] Все на всех breakpoints

---

### Фаза 4: Секции страницы

Для каждой секции:

#### Общий тест-протокол:
1. Секция рендерится без ошибок
2. Контент соответствует оригиналу
3. Responsive на всех breakpoints:
   - 360px (mobile)
   - 768px (tablet)
   - 1024px (small desktop)
   - 1440px (desktop)
4. Hover эффекты работают
5. Изображения загружаются

#### Порядок реализации:
1. HeroSection
2. TrustedBySection
3. FeatureSection (x2-3)
4. IntegrationsSection
5. DarkSection
6. StatsSection
7. CardsSection
8. CTASection

---

## Команды для тестирования

### package.json scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "lint": "eslint .",
    "test:all": "npm run typecheck && npm run lint && npm run build"
  }
}
```

### Быстрая проверка перед коммитом
```bash
npm run test:all && echo "✅ All checks passed!"
```

---

## Визуальное тестирование - Breakpoints

| Breakpoint | Устройство | Что проверять |
|------------|------------|---------------|
| 360px | iPhone SE | Mobile layout, hamburger menu |
| 432px | Small mobile | Padding adjustments |
| 767px | Tablet portrait | 2-column layouts |
| 991px | Tablet landscape | Navigation visibility |
| 1200px | Desktop | Full layout |
| 1440px | Large desktop | Max-width constraints |

---

## Структура тестовой страницы

Для Фазы 2 (UI компоненты) создаём тестовую страницу:

```tsx
// src/App.tsx (временно для тестирования)
import { Button, Card, Container, Section } from '@/components/ui';

export default function App() {
  return (
    <div>
      <Section>
        <Container>
          <h1>UI Components Test</h1>

          <h2>Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <h2>Button Sizes</h2>
          <div className="flex gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>

          <h2>Cards</h2>
          <Card>Card content here</Card>
        </Container>
      </Section>
    </div>
  );
}
```

---

## Критерии готовности этапа

Этап считается завершённым когда:

1. ✅ `npm run test:all` проходит без ошибок
2. ✅ Визуальная проверка на 3+ breakpoints
3. ✅ Все пункты чеклиста отмечены
4. ✅ Коммит сделан с описательным сообщением
5. ✅ current_status.md обновлён
