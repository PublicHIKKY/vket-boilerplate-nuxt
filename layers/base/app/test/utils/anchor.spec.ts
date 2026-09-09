import { afterEach, describe, test, expect, vi } from 'vitest'
import { linkViaElement, makeAnchorElement } from '#base/app/utils/anchor'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('makeAnchorElement', () => {
  test('return anchorElement', () => {
    const aElement = makeAnchorElement('https://hoge/', true, 'fuga', 'piyo')
    expect(aElement).toHaveProperty('href', 'https://hoge/')
    expect(aElement).toHaveProperty('rel', 'fuga')
    expect(aElement).toHaveProperty('referrerPolicy', 'piyo')
    expect(aElement).toHaveProperty('className', 'link-via-element-element')
  })

  test('return null', () => {
    const aElement = makeAnchorElement('')
    expect(aElement).toBeNull()
  })

  test('anchorElement with target attributes', () => {
    const aElement = makeAnchorElement('_', true, '_', '_')
    expect(aElement).toHaveProperty('target', '_blank')
  })

  test('anchorElement without target attributes', () => {
    const aElement = makeAnchorElement('_', false, '_', '_')
    expect(aElement).toHaveProperty('target', '')
  })

  test('default attributes are applied', () => {
    expect(makeAnchorElement('https://example.com')).toMatchObject({
      target: '_blank',
      rel: 'norefferer noopener',
      referrerPolicy: 'strict-origin-when-cross-origin',
    })
  })
})

describe('linkViaElement', () => {
  test('creates, clicks, and removes an anchor using defaults', () => {
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => undefined)
    const remove = vi.spyOn(HTMLAnchorElement.prototype, 'remove').mockImplementation(() => undefined)
    linkViaElement('https://example.com')
    expect(click).toHaveBeenCalledOnce()
    expect(remove).toHaveBeenCalledOnce()
  })

  test('forwards custom attributes', () => {
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
      expect(this).toMatchObject({ target: '', rel: 'external', referrerPolicy: 'no-referrer' })
    })
    vi.spyOn(HTMLAnchorElement.prototype, 'remove').mockImplementation(() => undefined)
    linkViaElement('https://example.com', false, 'external', 'no-referrer')
    expect(click).toHaveBeenCalledOnce()
  })

  test('throws when an anchor cannot be created', () => {
    expect(() => linkViaElement('')).toThrow('some message')
  })
})
