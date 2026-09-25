import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { cookieValue } = vi.hoisted(() => ({
  cookieValue: { value: undefined as string | undefined },
}))

vi.mock('universal-cookie', () => ({
  default: class CookiesMock {
    get() {
      return cookieValue.value
    }
  },
}))

const originalClient = Object.getOwnPropertyDescriptor(process, 'client')

const loadConfig = async ({
  client,
  language,
  cookie,
}: {
  client: boolean
  language?: string
  cookie?: string
}) => {
  Object.defineProperty(process, 'client', {
    configurable: true,
    value: client,
  })
  cookieValue.value = cookie
  vi.stubGlobal('navigator', language === undefined ? undefined : { language })
  vi.resetModules()
  return import('#base/i18n/i18n.config')
}

beforeEach(() => {
  cookieValue.value = undefined
})

afterEach(() => {
  vi.unstubAllGlobals()
  if (originalClient) {
    Object.defineProperty(process, 'client', originalClient)
  } else {
    Reflect.deleteProperty(process, 'client')
  }
  vi.resetModules()
})

describe('i18n config locale selection', () => {
  it.each([
    [{ client: false, language: 'en-US' }, 'ja'],
    [{ client: true, language: 'fr-FR', cookie: 'ja' }, 'ja'],
    [{ client: true, language: 'ja-JP', cookie: 'en' }, 'en'],
    [{ client: true, language: 'ja-JP' }, 'ja'],
    [{ client: true, language: 'en-US' }, 'en'],
    [{ client: true, language: 'fr-FR' }, 'ja'],
    [{ client: true }, 'ja'],
  ] as const)('selects $1 for %o', async (input, expected) => {
    const config = await loadConfig(input)
    const detectBrowserLanguage
      = config.nuxtI18nOptions.detectBrowserLanguage
    if (!detectBrowserLanguage || typeof detectBrowserLanguage !== 'object') {
      throw new TypeError('detectBrowserLanguage must be configured')
    }

    expect(config.nuxtI18nOptions.defaultLocale).toBe(expected)
    expect(detectBrowserLanguage.fallbackLocale).toBe(
      expected,
    )
    expect(config.default.locale).toBe(expected)
    expect(config.default.messages).toHaveProperty('ja')
    expect(config.default.messages).toHaveProperty('en')
  })
})
