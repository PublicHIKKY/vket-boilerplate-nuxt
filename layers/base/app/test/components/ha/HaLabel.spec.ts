import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HaLabel from '#base/app/components/ha/HaLabel.vue'

test('バックグラウンドカラーをテキストに合わせて表示する', () => {
  const matchedColor = 'white'
  const wrapper = mount(HaLabel, {
    props: {
      text: 'konoko',
      colorMap: {
        konoko: matchedColor,
        nokonoko: 'cyan',
      },
    },
  })
  const label = wrapper.get('.ha-label')
  expect(label.attributes().style).toContain(
    `background-color: ${matchedColor}`,
  )
})

test('バックグラウンドカラーをフォールバックカラーで表示する', () => {
  const fallbackColor = 'white'
  const wrapper = mount(HaLabel, {
    props: {
      text: 'nokonoko',
      colorMap: {
        konoko: 'cyan',
      },
      fallbackColor,
    },
  })
  const label = wrapper.get('.ha-label')
  expect(label.attributes().style).toContain(
    `background-color: ${fallbackColor}`,
  )
})
