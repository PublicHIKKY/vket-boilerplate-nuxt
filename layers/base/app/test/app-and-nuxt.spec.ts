import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../app.vue'

const iconPluginMock = vi.hoisted(() => ({
  options: undefined as
  | {
    iconCustomizer?: (
      collection: string,
      icon: string,
      props: Record<string, string>,
    ) => void
  }
  | undefined,
}))

vi.mock('unplugin-icons/vite', () => ({
  default: vi.fn((options: NonNullable<typeof iconPluginMock.options>) => {
    iconPluginMock.options = options
    return { name: 'mock-icons-plugin' }
  }),
}))

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('base application shell', () => {
  it('renders the Nuxt shell components', () => {
    const wrapper = shallowMount(App, {
      global: {
        stubs: {
          NuxtLayout: { template: '<main><slot /></main>' },
          NuxtRouteAnnouncer: { template: '<div data-announcer />' },
          NuxtWelcome: { template: '<div data-welcome />' },
        },
      },
    })

    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.find('[data-announcer]').exists()).toBe(true)
    expect(wrapper.find('[data-welcome]').exists()).toBe(true)
  })
})

describe('base Nuxt configuration', () => {
  it('contains the expected modules, aliases and icon customization', async () => {
    vi.stubEnv('VITE_OUTPUT_ENV', 'local')
    vi.stubEnv('VITEST', 'true')
    vi.resetModules()

    const { default: config } = await import('../../nuxt.config')

    expect(config.modules).toContain('@nuxt/test-utils/module')
    expect(config.alias).toMatchObject({ '#base': expect.any(String) })
    expect(config.runtimeConfig).toMatchObject({
      public: { outputEnv: 'local' },
    })

    const vitePlugins = config.vite?.plugins
    expect(vitePlugins).toHaveLength(3)

    const iconCustomizer = iconPluginMock.options?.iconCustomizer

    expect(iconCustomizer).toEqual(expect.any(Function))
    const customizeIcon = iconCustomizer as NonNullable<typeof iconCustomizer>
    const supportedProps: Record<string, string> = {}
    customizeIcon('hikky-icons', 'sample', supportedProps)
    expect(supportedProps).toEqual({ width: '1em', height: '1em' })

    for (const collection of ['sns-icons', 'ri']) {
      const props: Record<string, string> = {}
      customizeIcon(collection, 'sample', props)
      expect(props).toEqual({ width: '1em', height: '1em' })
    }

    const unsupportedProps: Record<string, string> = {}
    customizeIcon('other', 'sample', unsupportedProps)
    expect(unsupportedProps).toEqual({})
  })

  it('does not install the test module outside Vitest mode', async () => {
    vi.stubEnv('VITE_OUTPUT_ENV', 'production')
    vi.stubEnv('VITEST', 'false')
    vi.resetModules()

    const { default: config } = await import('../../nuxt.config')

    expect(config.modules).not.toContain('@nuxt/test-utils/module')
    expect(config.runtimeConfig).toMatchObject({
      public: { outputEnv: 'production' },
    })
  })
})
