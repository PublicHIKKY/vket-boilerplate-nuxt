import useSocialShareLink from '#base/app/composables/useSocialShareLink'

beforeEach(() => {
  vi.mock('#app', () => ({
    useRuntimeConfig: vi.fn(() => ({
      public: {
        NUXT_ENV_BASE_URL: '',
      },
      NUXT_ENV_BASE_URL: '',
    })),
    useRoute: vi.fn(() => ({ path: 'http://localhost:3000/test/' })),
  }))

  vi.mock('vue-i18n', () => ({
    useI18n: vi
      .fn(() => ({
        local: { value: 'ja' },
        locale: { value: 'ja' },
      }))
      // enのTwitterのテスト分（2回）だけenにする
      .mockImplementationOnce(() => ({
        local: { value: 'en' },
        locale: { value: 'en' },
      }))
      .mockImplementationOnce(() => ({
        local: { value: 'en' },
        locale: { value: 'en' },
      })),
  }))
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('locale en', () => {
  describe('X', () => {
    it('no shareProps', () => {
      const route = useRoute()
      const generatedShareUrl = useSocialShareLink().getShareUrl('x')
      expect(generatedShareUrl).toBe(
        `https://x.com/intent/tweet?url=${encodeURIComponent(
          route.path,
        )}&text=${encodeURIComponent(
          encodeURIComponent(`Share ${route.path}`) + '\n',
        )}`,
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
    const route = useRoute()
    const shareProps = {
      text: 'testText',
      shareUrl: 'testShareUrl',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'facebook',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      `https://www.facebook.com/sharer/sharer.php?u=${route.path}&t=${shareProps.text}`,
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
      `http://line.me/R/msg/text/?${shareProps.text}`,
    )
  })
})

describe('locale ja', () => {
  describe('X', () => {
    it('no shareProps', () => {
      const route = useRoute()
      const generatedShareUrl = useSocialShareLink().getShareUrl('x')
      expect(generatedShareUrl).toBe(
        `https://x.com/intent/tweet?url=${encodeURIComponent(
          route.path,
        )}&text=${encodeURIComponent(
          encodeURIComponent(`${route.path} をシェア`) + '\n',
        )}`,
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
    const route = useRoute()
    const shareProps = {
      text: 'testText',
      shareUrl: 'testShareUrl',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'facebook',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      `https://www.facebook.com/sharer/sharer.php?u=${route.path}&t=${shareProps.text}`,
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
      `http://line.me/R/msg/text/?${shareProps.text}`,
    )
  })
})
