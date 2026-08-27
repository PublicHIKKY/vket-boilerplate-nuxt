import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import App from '../app.vue'
import HoTheFooter from '../components/ho/HoTheFooter.vue'
import HoTheHeader from '../components/ho/HoTheHeader.vue'
import HtTop from '../components/ht/HtTop.vue'
import { jsonSchema } from '../models/json'
import { todoSchema } from '../models/todo'
import { repositories, repositoryFactory } from '../utils/factory'

describe('main layer source', () => {
  const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    messages: { ja: {}, en: {} },
  })

  it.each([HoTheHeader, HoTheFooter, HtTop])(
    'renders a structural component',
    (component) => {
      expect(shallowMount(component).exists()).toBe(true)
    },
  )

  it('renders the application shell', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [i18n],
        stubs: {
          NuxtLayout: { template: '<main><slot /></main>' },
          NuxtRouteAnnouncer: true,
          NuxtWelcome: true,
        },
      },
    })
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('validates JSON and todos', () => {
    expect(jsonSchema.parse({ nested: [null, true, 1, 'value'] })).toEqual({
      nested: [null, true, 1, 'value'],
    })
    expect(todoSchema.parse({
      userId: 1,
      id: 2,
      title: 'test',
      completed: false,
    })).toMatchObject({ id: 2, completed: false })
  })

  it('returns a local repository', () => {
    expect(repositoryFactory.get('example')).toBe(repositories.example)
  })
})
