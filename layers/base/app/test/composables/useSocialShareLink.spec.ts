import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import useSocialShareLink from '#base/app/composables/useSocialShareLink'

// vi.hoisted()でモックオブジェクトを定義
const { mockI18n, mockRoute, mockConfig } = vi.hoisted(() => {
  return {
    mockI18n: {
      locale: { value: 'ja' },
    },
    mockRoute: { path: '/test/' },
    mockConfig: {
      public: {
        NUXT_ENV_BASE_URL: 'http://localhost:3000',
      },
      NUXT_ENV_BASE_URL: 'http://localhost:3000',
    },
  }
})

vi.mock('#app/nuxt', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app/nuxt')>()
  return {
    ...actual,
    useRuntimeConfig: vi.fn(() => {
      const runtimeConfig = actual.useRuntimeConfig?.()
      if (!runtimeConfig) {
        return mockConfig
      }
      Object.assign(runtimeConfig, mockConfig)
      Object.assign(
        ((runtimeConfig as Record<string, unknown>).public ??= {}),
        mockConfig.public,
      )
      return runtimeConfig
    }),
    useNuxtApp: vi.fn(() => {
      const nuxtApp = actual.useNuxtApp?.()
      if (!nuxtApp) {
        return { $i18n: mockI18n }
      }
      ;(nuxtApp as Record<string, unknown>).$i18n = mockI18n
      return nuxtApp
    }),
  }
})

vi.mock('#app/composables/router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app/composables/router')>()
  return {
    ...actual,
    useRoute: vi.fn(() => {
      const route = actual.useRoute?.()
      if (!route) {
        return mockRoute
      }
      Object.assign(route, mockRoute)
      return route
    }),
  }
})

beforeEach(() => {
  mockI18n.locale.value = 'ja'
})

afterEach(() => {
  vi.restoreAllMocks()
})

const parseXShareUrl = (url: string) => new URL(url)

describe('locale en', () => {
  beforeEach(() => {
    mockI18n.locale.value = 'en'
  })

  describe('X', () => {
    it('no shareProps', () => {
      const generatedShareUrl = useSocialShareLink().getShareUrl('x')
      const parsed = parseXShareUrl(generatedShareUrl)
      expect(parsed.origin).toBe('https://x.com')
      expect(parsed.pathname).toBe('/intent/tweet')
      expect(parsed.searchParams.get('url')).toBe('http://localhost:3000/test/')
      expect(
        decodeURIComponent(parsed.searchParams.get('text') ?? ''),
      ).toBe('Share http://localhost:3000/test/\n')
    })

    it('set shareProps', () => {
      const shareProps = {
        text: 'shareText',
        twitterHashtags: ['hash1', 'hash2'],
        shareUrl: 'shareUrlStrings',
      }
      const generatedShareUrl = useSocialShareLink().getShareUrl(
        'x',
        shareProps,
      )
      expect(generatedShareUrl).toBe(
        `https://x.com/intent/tweet?url=${shareProps.shareUrl}&text=${
          shareProps.text
        }%0A&hashtags=${[...shareProps.twitterHashtags].join('%2C')}`,
      )
    })
  })

  it('Facebook', () => {
    const shareProps = {
      text: 'testText',
      shareUrl: 'testShareUrl',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'facebook',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/test/&t=testText',
    )
  })

  it('LINE', () => {
    const shareProps = {
      text: 'testText',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'line',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'http://line.me/R/msg/text/?testText',
    )
  })
})

describe('locale ja', () => {
  beforeEach(() => {
    mockI18n.locale.value = 'ja'
  })

  describe('X', () => {
    it('no shareProps', () => {
      const generatedShareUrl = useSocialShareLink().getShareUrl('x')
      const parsed = parseXShareUrl(generatedShareUrl)
      expect(parsed.origin).toBe('https://x.com')
      expect(parsed.pathname).toBe('/intent/tweet')
      expect(parsed.searchParams.get('url')).toBe('http://localhost:3000/test/')
      expect(
        decodeURIComponent(parsed.searchParams.get('text') ?? ''),
      ).toBe('http://localhost:3000/test/ をシェア\n')
    })

    it('set shareProps', () => {
      const shareProps = {
        text: 'shareText',
        twitterHashtags: ['hash1', 'hash2'],
        shareUrl: 'shareUrlStrings',
      }
      const generatedShareUrl = useSocialShareLink().getShareUrl(
        'x',
        shareProps,
      )
      expect(generatedShareUrl).toBe(
        'https://x.com/intent/tweet?url=shareUrlStrings&text=shareText%0A&hashtags=hash1%2Chash2',
      )
    })
  })

  it('Facebook', () => {
    const shareProps = {
      text: 'testText',
      shareUrl: 'testShareUrl',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'facebook',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/test/&t=testText',
    )
  })

  it('LINE', () => {
    const shareProps = {
      text: 'testText',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'line',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'http://line.me/R/msg/text/?testText',
    )
  })
})
