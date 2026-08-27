import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import App from '../app.vue'
import HtTop from '../components/ht/HtTop.vue'
import { jsonSchema } from '../models/json'
import { todoSchema } from '../models/todo'
import { repositories, repositoryFactory } from '../utils/factory'

describe('derived-main layer source', () => {
  const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    messages: { ja: {}, en: {} },
  })

  it('renders the structural component and application shell', () => {
    expect(shallowMount(HtTop, { global: { plugins: [i18n] } }).exists()).toBe(true)
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
