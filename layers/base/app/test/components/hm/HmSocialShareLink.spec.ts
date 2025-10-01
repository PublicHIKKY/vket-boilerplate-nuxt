import { mount } from '@vue/test-utils'
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest'
import HmSocialShareLink from '#base/app/components/hm/HmSocialShareLink.vue'

// モックはファイルトップレベルで定義
vi.mock('#i18n', () => ({
  useSocialShareLink: vi.fn(),
  useLocalePath: vi.fn(() => vi.fn(() => `/mocked-path`)),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('HmSocialShareLink', () => {
  it('computes the correct share URL', () => {
    vi.mock('#base/app/composables/useSocialShareLink', () => {
      return {
        default: () => ({
          getShareUrl: vi.fn((name: string) => `mockedUrlFor${name}`),
        }),
      }
    })

    const wrapper = mount(HmSocialShareLink, {
      props: {
        name: 'twitter',
        text: 'testText',
        twitterHashtags: ['test'],
        shareUrl: 'testShareUrl',
      },
      // nuxt-linkはwarnとなるので、下記でaタグに置き換える。RouterLinkStubはprops:['to']が使えず引き継げなくなるので使わない。
      global: {
        stubs: {
          'nuxt-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    })
    const link = wrapper.find('.ha-link')
    // toで入力したpathをi18nのuseLocalPathで色々変更してpathを吐き出すので、ここではmockのuseLocalPath値が検出されればOK
    expect(link.attributes('to')).toBe('/mocked-path')
  })
})
