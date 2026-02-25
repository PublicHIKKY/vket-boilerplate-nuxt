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
  const mockI18n = { locale: { value: 'ja' } }

  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: () => {
      const nuxtApp = actual.useNuxtApp?.()
      if (!nuxtApp) {
        return { $i18n: mockI18n }
      }
      return new Proxy(nuxtApp, {
        get(target, property, receiver) {
          if (property === '$i18n') {
            return mockI18n
          }
          return Reflect.get(target, property, receiver)
        },
      })
    },
  }
})

vi.mock('#app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app')>()
  const mockI18n = { locale: { value: 'ja' } }

  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: () => {
      const nuxtApp = actual.useNuxtApp?.()
      if (!nuxtApp) {
        return { $i18n: mockI18n }
      }
      return new Proxy(nuxtApp, {
        get(target, property, receiver) {
          if (property === '$i18n') {
            return mockI18n
          }
          return Reflect.get(target, property, receiver)
        },
      })
    },
  }
})

vi.mock('#app/composables/useRoute', () => ({
  useRoute: vi.fn(() => ({
    path: '/test',
    query: { page: '1' },
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

    override addEventListener() {}

    override removeEventListener() {}
  }
}
