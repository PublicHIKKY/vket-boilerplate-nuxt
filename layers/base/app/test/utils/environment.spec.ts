import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { describe, expect, it } from 'vitest'
import { isNuxtEnvironment } from '#base/app/utils/environment'

describe('environment.ts', () => {
  it('setup外ではfalseを返す', () => {
    expect(isNuxtEnvironment()).toBe(false)
  })

  it('Vue component setup内ではapp contextを検出する', () => {
    let result = false
    mount(defineComponent({
      setup() {
        result = isNuxtEnvironment()
        return () => null
      },
    }))
    expect(result).toBe(true)
  })
})
