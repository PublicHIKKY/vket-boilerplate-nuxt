import { conditionalReactive, deepCloneReactive, toRawDeep, unreadonly } from '#base/app/utils/vue-reactive'
import { isReactive, reactive, readonly } from 'vue'
import { describe, expect, it } from 'vitest'

describe('vue-reactive.ts', () => {
  it('nullish値・primitive・組み込みオブジェクトは値を維持する', () => {
    expect(toRawDeep(null)).toBeNull()
    expect(toRawDeep(undefined)).toBeUndefined()
    expect(toRawDeep('text')).toBe('text')
    expect(toRawDeep(42)).toBe(42)
    expect(toRawDeep(true)).toBe(true)
    const date = new Date('2024-01-01')
    const regexp = /sample/gi
    expect(toRawDeep(date)).toBe(date)
    expect(toRawDeep(regexp)).toBe(regexp)
  })

  it('配列とネストしたreactiveオブジェクトからproxyを再帰的に除去する', () => {
    const source = reactive({ nested: reactive({ value: 1 }), items: [reactive({ value: 2 }), null] })
    const raw = toRawDeep(source)
    expect(raw).toEqual({ nested: { value: 1 }, items: [{ value: 2 }, null] })
    expect(isReactive(raw)).toBe(false)
    expect(isReactive(raw.nested)).toBe(false)
    expect(isReactive(raw.items[0])).toBe(false)
    expect(raw).not.toBe(source)
  })

  it('継承プロパティを複製せず、record以外の値をそのまま返す', () => {
    const prototype = { inherited: 'skip' }
    const source = Object.assign(Object.create(prototype) as Record<string, unknown>, { own: reactive({ value: 1 }) })
    expect(toRawDeep(source)).toEqual({ own: { value: 1 } })
    const symbol = Symbol('value')
    expect(toRawDeep(symbol)).toBe(symbol)
  })

  it('readonlyを解除した独立cloneを返す', () => {
    const source = readonly({ nested: { value: 1 }, items: [1, 2] })
    const result = unreadonly(source) as { nested: { value: number }, items: number[] }
    result.nested.value = 2
    result.items.push(3)
    expect(result).toEqual({ nested: { value: 2 }, items: [1, 2, 3] })
    expect(source).toEqual({ nested: { value: 1 }, items: [1, 2] })
  })

  it('reactiveオブジェクトを独立したreactive cloneにする', () => {
    const source = reactive({ nested: { value: 1 } })
    const clone = deepCloneReactive(source)
    expect(clone).toEqual(source)
    expect(clone).not.toBe(source)
    expect(clone.nested).not.toBe(source.nested)
    expect(isReactive(clone)).toBe(true)
    clone.nested.value = 2
    expect(source.nested.value).toBe(1)
  })

  it('条件がtrueの時だけreactiveにする', () => {
    const enabled = { value: 1 }
    const disabled = { value: 2 }
    expect(isReactive(conditionalReactive(enabled, true))).toBe(true)
    expect(conditionalReactive(disabled, false)).toBe(disabled)
    expect(isReactive(disabled)).toBe(false)
  })
})
