import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import HaLink from '#base/app/components/ha/HaLink.vue'

import { isNuxtEnvironment } from '#base/app/utils/environment'
import { isExternalLinkInjectionKey } from '#base/app/models/link'

// useLocalePath のモック関数を定義
beforeEach(() => {
  vi.mock('#i18n', () => ({
    useLocalePath: vi.fn(
      () => vi.fn(() => `/mocked-path`), // path: string, query: LocationQuery, hash: string 引数削除 (使う時だけ入れないとreviewdogに怒られる)
    ),
  }))
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
    // toで入力したpathをi18nのuseLocalPathで色々変更してpathを吐き出すので、ここではmockのuseLocalPath値が検出されればOK
    expect(wrapper.find('a').attributes('to')).toBe('/mocked-path')
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

describe('provide isExternalLink test function', () => {
  const isInternal = (to: string) => to === '/foo'
  const nuxtLinkStubOption
    = {
      global: {
        stubs: {
          'nuxt-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    }

  it('internal link when test function returns false', () => {
    const wrapper = mount(
      {
        template: '<HaLink to="/foo"></HaLink>',
        components: { HaLink },
        provide: { [isExternalLinkInjectionKey]: (to: string) => !isInternal(to) },
      },
      nuxtLinkStubOption,
    )
    expect(wrapper.get('a').attributes('to')).toBe('/mocked-path')
  })
  it('external link even if it starts with /', () => {
    const wrapper = mount(
      {
        template: '<HaLink to="/bar"></HaLink>',
        components: { HaLink },
        provide: { [isExternalLinkInjectionKey]: (to: string) => !isInternal(to) },
      },
      nuxtLinkStubOption,
    )
    expect(wrapper.get('a').attributes('href')).toBe('/bar')
    expect(wrapper.get('a').attributes('to')).toBeFalsy()
  })
  it('"https://~~" is external link even if test function returns always false', () => {
    const wrapper = mount(
      {
        template: '<HaLink to="https://example.com/"></HaLink>',
        components: { HaLink },
        provide: { [isExternalLinkInjectionKey]: (_to: string) => false },
      },
      nuxtLinkStubOption,
    )
    expect(wrapper.get('a').attributes('href')).toBe('https://example.com/')
    expect(wrapper.get('a').attributes('to')).toBeFalsy()
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

/*
 * TODO: Nuxt依存部分のtoLocalePathをモックしている関係で、戻り値がmocked-pathにしかならずqueryのテストが出来ない
 * describe(':query', () => {
 *   it('appends query parameters to internal links', async () => {
 *     // 環境をNuxtとしてモック
 *     vi.mocked(isNuxtEnvironment).mockReturnValueOnce(true)
 */

/*
 *     const wrapper = mount(HaLink, {
 *       props: { to: '/intenal', query: { id: '123' } },
 *     })
 */

/*
 *     await nextTick()
 *     // NuxtLinkを探す
 *     const nuxtLink = wrapper.find('nuxt-link');
 *     expect(nuxtLink.exists()).toBe(true);
 *     // NuxtLinkがクエリパラメータを含む適切なパスでレンダリングされているか検証
 *     expect(nuxtLink.attributes('to')).toBe('/internal?id=123');
 *     // モック関数が正しく呼び出されたことを確認
 *     expect(useLocalePath).toHaveBeenCalled()
 *   })
 * })
 */

/*
 * TODO: Nuxt依存部分のtoLocalePathをモックしている関係で、戻り値がmocked-pathにしかならずhashのテストが出来ない
 * describe(':hash', () => {
 *   it('appends hash parameters to internal links', async () => {
 *     // 環境をNuxtとしてモック
 *     vi.mocked(isNuxtEnvironment).mockReturnValueOnce(true)
 */

/*
 *     const wrapper = mount(HaLink, {
 *       props: { to: '/intenal', hash: '#hash'},
 *     })
 */

/*
 *     await nextTick()
 *     // NuxtLinkを探す
 *     const nuxtLink = wrapper.find('nuxt-link');
 *     expect(nuxtLink.exists()).toBe(true);
 *     // NuxtLinkがクエリパラメータを含む適切なパスでレンダリングされているか検証
 *     expect(nuxtLink.attributes('to')).toBe('/internal#hash');
 *     // モック関数が正しく呼び出されたことを確認
 *     expect(useLocalePath).toHaveBeenCalled()
 *   })
 * })
 */

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
