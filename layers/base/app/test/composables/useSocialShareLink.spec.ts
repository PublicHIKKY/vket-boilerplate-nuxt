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

vi.mock('#app', () => ({
  useRuntimeConfig: vi.fn(() => mockConfig),
  useRoute: vi.fn(() => mockRoute),
  useNuxtApp: vi.fn(() => ({
    $i18n: mockI18n,
  })),
}))

beforeEach(() => {
  mockI18n.locale.value = 'ja'
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('locale en', () => {
  beforeEach(() => {
    mockI18n.locale.value = 'en'
  })

  describe('X', () => {
    it('no shareProps', () => {
      const generatedShareUrl = useSocialShareLink().getShareUrl('x')
      expect(generatedShareUrl).toBe(
        'https://x.com/intent/tweet?url=%2Fen&text=Share%2520%252Fen%0A',
      )
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
      'https://www.facebook.com/sharer/sharer.php?u=/en&t=testText',
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
      expect(generatedShareUrl).toBe(
        'https://x.com/intent/tweet?url=%2Fen&text=Share%2520%252Fen%0A',
      )
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
      'https://www.facebook.com/sharer/sharer.php?u=/en&t=testText',
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
