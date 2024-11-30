import { tupleWideningDo } from '#base/app/utils/tuple'

describe('tupleWideningDo', () => {
  test('can apply a tuple function', () => {
    const xs: readonly ['x', 'y', 'z'] = ['x', 'y', 'z']
    const x: string | null = 'x'
    tupleWideningDo(xs, x, (xs, x) => xs.indexOf(x))
    // type errorが発生しなければいいので、expect()は不要
  })
})
