import { mount } from '@vue/test-utils'
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest'
import HmSocialShareLink from '#base/app/components/hm/HmSocialShareLink.vue'

const { mockGetShareUrl } = vi.hoisted(() => ({
  mockGetShareUrl: vi.fn((name: string) => `mockedUrlFor${name}`),
}))

vi.mock('#base/app/composables/useSocialShareLink', () => ({
  default: () => ({
    getShareUrl: mockGetShareUrl,
  }),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('HmSocialShareLink', () => {
  it('computes the correct share URL', () => {
    mockGetShareUrl.mockImplementation((name: string) => `mockedUrlFor${name}`)

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
    // 現在は useSocialShareLink の戻り値をそのまま使う
    expect(link.attributes('to')).toBe('mockedUrlFortwitter')
  })
})
