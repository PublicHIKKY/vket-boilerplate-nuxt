import { mount } from '@vue/test-utils'
import { beforeEach, afterEach, describe, it, expect, test, vi } from 'vitest'
import HaLink from '#base/app/components/ha/HaLink.vue'

import { isNuxtEnvironment } from '#base/app/utils/environment'

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('ref component', () => {
  expect(HaLink).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaLink, {
    props: {
      to: 'https://example.com',
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

// nuxt-linkはwarnとなるので、aタグに置き換えて to 属性を読む
const mountInternal = (props: InstanceType<typeof HaLink>['$props']) =>
  mount(HaLink, {
    props,
    global: {
      stubs: {
        'nuxt-link': {
          template: '<a><slot /></a>',
        },
      },
    },
  })
    .find('a')
    .attributes('to')

describe(':to', () => {
  // 外部サイトリンクのテスト
  it('set external path', () => {
    const wrapper = mount(HaLink, {
      props: { to: 'https://example.com' },
    })
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com')
  })

  // 内部リンクテスト (aタグ)
  it('set internal path', () => {
    const wrapper = mount(HaLink, {
      props: { to: '/internal-path' },
      // nuxt-linkはwarnとなるので、下記でaタグに置き換える。RouterLinkStubはtoを引き継げなくなるので使わない。
      global: {
        stubs: {
          'nuxt-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    })
    // 現在は useLocalePath をモックせず入力値がそのまま使われる
    expect(wrapper.find('a').attributes('to')).toBe('/internal-path')
  })

  // to に埋め込まれた query / hash が落ちないこと
  it('keeps query embedded in internal path', () => {
    expect(mountInternal({ to: '/internal-path?id=123' })).toBe(
      '/internal-path?id=123',
    )
  })

  it('keeps hash embedded in internal path', () => {
    expect(mountInternal({ to: '/internal-path#about' })).toBe(
      '/internal-path#about',
    )
  })

  it('keeps query and hash embedded in internal path', () => {
    expect(mountInternal({ to: '/internal-path?id=123#about' })).toBe(
      '/internal-path?id=123#about',
    )
  })

  it('keeps query and hash embedded in external path', () => {
    const wrapper = mount(HaLink, {
      props: { to: 'https://example.com/?id=123#about' },
    })
    expect(wrapper.find('a').attributes('href')).toBe(
      'https://example.com/?id=123#about',
    )
  })
})

describe(':blank', () => {
  it('not set', () => {
    const wrapper = mount(HaLink, {
      props: { to: '' },
      global: {
        stubs: {
          'nuxt-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    })
    expect(wrapper.find('a').attributes('target')).toBeFalsy()
  })

  it('set true', () => {
    const wrapper = mount(HaLink, {
      props: { to: 'https://example.com', blank: true },
    })
    expect(wrapper.find('a').attributes('target')).toBe('_blank')
  })

  // <HaLink blank> って書けてほしい
  it('set `blank` with no value set target="_blank"', () => {
    const wrapper = mount(
      {
        template: '<HaLink to="https://example.com" blank></HaLink>',
        components: { HaLink },
      },
      {},
    )
    expect(wrapper.get('a').attributes('target')).toBe('_blank')
  })
})

describe(':rel', () => {
  it('set rel', () => {
    const wrapper = mount(HaLink, {
      props: {
        to: 'https://example.com',
        rel: 'noreferrer',
      },
    })
    expect(wrapper.get('a').attributes('rel')).toBe('noreferrer')
  })
})

describe(':forceAnchorLink', () => {
  it('set true', () => {
    const wrapper = mount(HaLink, {
      props: { to: '/internal', forceAnchorLink: true },
    })
    expect(wrapper.find('a').exists()).toBe(true)
  })
})

describe('slot', () => {
  it('set simple text', () => {
    const wrapper = mount(HaLink, {
      props: {
        to: 'https://example.com',
      },
      slots: {
        default: 'link label',
      },
    })
    // slot入れたらリンク消えたりしない？
    expect(wrapper.html()).toContain('https://example.com')
    // slotの中身はきちんと描画されてる？
    expect(wrapper.text()).toContain('link label')
  })
})

// 以下、NuxtLink系のテスト
vi.mock('#base/app/utils/environment')

describe(':query', () => {
  it('appends query parameters to internal links', () => {
    expect(mountInternal({ to: '/internal', query: { id: '123' } })).toBe(
      '/internal?id=123',
    )
  })

  // to 側と prop 側の両方を指定しても「?」が二重に付かないこと
  it('merges with query embedded in to', () => {
    expect(
      mountInternal({ to: '/internal?page=2', query: { id: '123' } }),
    ).toBe('/internal?page=2&id=123')
  })

  it('prefers prop over the same key embedded in to', () => {
    expect(mountInternal({ to: '/internal?id=1', query: { id: '123' } })).toBe(
      '/internal?id=123',
    )
  })

  it('keeps hash embedded in to', () => {
    expect(
      mountInternal({ to: '/internal#about', query: { id: '123' } }),
    ).toBe('/internal?id=123#about')
  })
})

describe(':hash', () => {
  it('appends hash parameters to internal links', () => {
    expect(mountInternal({ to: '/internal', hash: '#hash' })).toBe(
      '/internal#hash',
    )
  })

  // to 側と prop 側の両方を指定しても「#」が二重に付かないこと
  it('prefers prop over the hash embedded in to', () => {
    expect(mountInternal({ to: '/internal#about', hash: '#hash' })).toBe(
      '/internal#hash',
    )
  })

  it('keeps query embedded in to', () => {
    expect(mountInternal({ to: '/internal?id=123', hash: '#hash' })).toBe(
      '/internal?id=123#hash',
    )
  })
})

describe('<nuxt-link>', () => {
  /*
   * TODO : テスト自体は通るが[Vue warn]: Failed to resolve component: nuxt-link のWARNが出るのでコメントアウト
   * it('use router-link', async () => {
   *   vi.mocked(isNuxtEnvironment).mockReturnValueOnce(true)
   *   const wrapper = mount(HaLink, {
   *     props: {
   *       to: '/link',
   *     },
   *   })
   *   const nuxtLink = wrapper.find('nuxt-link')
   *   expect(nuxtLink.exists()).toBe(true)
   * })
   */
  it('external link must be <a>', () => {
    vi.mocked(isNuxtEnvironment).mockReturnValueOnce(true)
    const wrapper = mount(HaLink, {
      props: {
        to: 'https://example.com',
      },
    })
    expect(wrapper.find('a').exists()).toBeTruthy()
  })
  it('force <a> link', () => {
    vi.mocked(isNuxtEnvironment).mockReturnValueOnce(true)
    const wrapper = mount(HaLink, {
      props: {
        to: '/link',
        forceAnchorLink: true,
      },
    })
    expect(wrapper.find('a').exists()).toBeTruthy()
  })
})
