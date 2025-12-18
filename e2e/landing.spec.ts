import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load the page', async ({ page }) => {
    await expect(page).toHaveTitle(/Adapty/)
  })

  test('should display header with navigation', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Check logo
    await expect(header.locator('text=adapty')).toBeVisible()

    // Check navigation items
    await expect(page.locator('text=Product')).toBeVisible()
    await expect(page.locator('text=Cases')).toBeVisible()
    await expect(page.locator('text=Pricing')).toBeVisible()
  })

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('section').first()
    await expect(hero).toBeVisible()

    // Check main heading
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    // Check CTA buttons
    await expect(page.locator('text=Start for free').first()).toBeVisible()
  })

  test('should display trusted by section', async ({ page }) => {
    await expect(page.locator('text=Trusted by').first()).toBeVisible()
  })

  test('should display footer', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check copyright
    await expect(footer.locator('text=Adapty Tech Inc.')).toBeVisible()
  })
})

test.describe('Visual Regression', () => {
  test('full page screenshot - desktop', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('landing-desktop.png', {
      fullPage: true,
    })
  })

  test('hero section screenshot', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('section').first()
    await expect(hero).toHaveScreenshot('hero-section.png')
  })

  test('footer screenshot', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toHaveScreenshot('footer.png')
  })
})

test.describe('Responsive Design', () => {
  test('mobile navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    // Header should be visible
    await expect(page.locator('header')).toBeVisible()
  })

  test('tablet layout', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })
})
