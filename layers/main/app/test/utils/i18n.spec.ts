import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

test('getI18nArray takes a list from vue-i18n dict', () => {
  const i18n = createI18n({
    locale: 'ja',
    messages: {
      ja: { list: ['a', 'b', 'c'] },
      en: { list: ['a', 'b', 'c'] },
    },
  })

  // useI18nがコンポーネントのsetup内でのみしか動かないので、コンポーネントを介してテストをする
  mount(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (defineComponent as any)({
      template: '<p>Nuxt ha iizo</p>',
      setup: () => {
        const i18n = useI18n()
        expect(getI18nArray(i18n, 'list')).toEqual(['a', 'b', 'c'])
      },
    }),
    {
      global: {
        plugins: [i18n],
      },
    },
  )
})
