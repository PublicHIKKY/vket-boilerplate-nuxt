import { makeAnchorElement } from '#base/app/utils/anchor'

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
})
