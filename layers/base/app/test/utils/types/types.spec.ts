import { IsEqual } from 'type-fest'
import { Nullable, Overwrite, ValueOf } from '#base/app/utils/types/types'

describe('proof', () => {
  test('Nullable', () => {
    const _proof: IsEqual<
      Nullable<{ a: number, b: number }, 'a'>,
      { a: number | null, b: number }
    > = true
  })

  test('ValueOf', () => {
    const _proof: IsEqual<
      ValueOf<{ a: number, b: string, c: boolean }>,
      number | string | boolean
    > = true
  })

  test('Overwrite', () => {
    const _proof: IsEqual<
      Overwrite<{ a: number, b: string }, { a: boolean }>,
      { a: boolean } & { b: string }
    > = true
  })
})
