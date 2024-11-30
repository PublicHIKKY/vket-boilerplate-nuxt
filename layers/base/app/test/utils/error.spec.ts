import { unreachable } from '#base/app/utils/error'

test('unreachable', () => {
  const x: number = 10
  if (typeof x === 'number') {
    // ここにしか来ない
  }
  else {
    unreachable(x)
  }
})

test('raiseError', () => {
  const xs: number[] = []
  expect(() => {
    const _ = xs[0] ?? raiseError('0th element is nothing')
  }).toThrow()
})
