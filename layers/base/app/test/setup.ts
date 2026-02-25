import { vi } from 'vitest'

// Type declarations for global mocks - range and useSlots are handled by auto-imports

// Global mock for all icon imports
vi.mock('~icons/ri/close-line', () => ({
  default: {
    name: 'RiCloseLine',
    template: '<svg class="icon"><path /></svg>',
    props: ['class'],
  },
}))

// Mock Nuxt composables using vi.mock to avoid conflicts with auto-imports
vi.mock('#app/composables/useI18n', () => ({
  useI18n: vi.fn(() => ({
    t: vi.fn((key: string) => {
      const messages: Record<string, string> = {
        next: 'Next',
        prev: 'Prev',
      }
      return messages[key] || key
    }),
    locale: { value: 'ja' },
  })),
}))

// Basic Nuxt app mocks used by plugins and middleware
vi.mock('nuxt/app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('nuxt/app')>()
  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: actual.useNuxtApp ?? (() => ({ $i18n: { locale: 'ja' } })),
  }
})

vi.mock('#app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app')>()
  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: actual.useNuxtApp ?? (() => ({ $i18n: { locale: 'ja' } })),
  }
})

vi.mock('#app/composables/useRoute', () => ({
  useRoute: vi.fn(() => ({
    path: '/test',
    query: { page: '1' },
  })),
}))

vi.mock('#app/composables/useLocalePath', () => ({
  useLocalePath: vi.fn(() => (path: string) => path),
}))

// Nuxt 4 component auto-imports resolve via #imports.
vi.mock('#imports', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#imports')>()
  return {
    ...actual,
    useLocalePath: vi.fn(() => (location: string | { path?: string }) =>
      typeof location === 'string' ? location : (location?.path ?? ''),
    ),
    useLocaleRoute: vi.fn(() => (location: unknown) => location),
    useSwitchLocalePath: vi.fn(() => () => ''),
    useRouteBaseName: vi.fn(() => () => ''),
    useLocaleHead: vi.fn(() => ({})),
  }
})

vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/composables/index', async (importOriginal) => {
  const actual = await importOriginal<Record<string, unknown>>()
  return {
    ...actual,
    useLocalePath: vi.fn(() => (location: string | { path?: string }) =>
      typeof location === 'string' ? location : (location?.path ?? ''),
    ),
    useLocaleRoute: vi.fn(() => (location: unknown) => location),
    useSwitchLocalePath: vi.fn(() => () => ''),
    useRouteBaseName: vi.fn(() => () => ''),
    useLocaleHead: vi.fn(() => ({})),
  }
})
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/composables/index.js', async (importOriginal) => {
  const actual = await importOriginal<Record<string, unknown>>()
  return {
    ...actual,
    useLocalePath: vi.fn(() => (location: string | { path?: string }) =>
      typeof location === 'string' ? location : (location?.path ?? ''),
    ),
    useLocaleRoute: vi.fn(() => (location: unknown) => location),
    useSwitchLocalePath: vi.fn(() => () => ''),
    useRouteBaseName: vi.fn(() => () => ''),
    useLocaleHead: vi.fn(() => ({})),
  }
})

// Avoid plugin initialization noise in unit tests (plugins themselves are not under test here).
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/route-locale-detect.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/switch-locale-path-ssr.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/preload.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/device/dist/runtime/plugin.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/nuxt-site-config/dist/runtime/app/plugins/i18n.js', () => ({
  default: () => {},
}))
vi.mock('@gtm-support/vue-gtm', () => ({
  createGtm: vi.fn(() => ({
    install: vi.fn(),
  })),
}))

vi.mock('vue', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue')>()
  return {
    ...actual,
    nextTick: vi.fn().mockResolvedValue(undefined),
  }
})

// Global utility functions for tests - range and useSlots handled by auto-imports

// HTMLDialogElement mock for jsdom
if (!global.HTMLDialogElement) {
  global.HTMLDialogElement = class HTMLDialogElement extends HTMLElement {
    open = false
    returnValue = ''

    showModal = vi.fn(() => {
      this.open = true
    })

    close = vi.fn(() => {
      this.open = false
    })

    show = vi.fn(() => {
      this.open = true
    })

    requestClose = vi.fn()

    override addEventListener(_event: string, _callback: (...args: unknown[]) => void) {
      // Mock implementation
    }

    override removeEventListener(_event: string, _callback: (...args: unknown[]) => void) {
      // Mock implementation
    }
  }
}
