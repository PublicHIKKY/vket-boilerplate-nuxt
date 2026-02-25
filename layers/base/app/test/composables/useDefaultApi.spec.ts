// NOTE: そもそももっといいテストあれば是非
import { test, expect, vi } from 'vitest'
import { UseFetchOptions } from 'nuxt/app'
import { FetchOptions } from 'ofetch'
import useDefaultApi, { defaultFetcher } from '#base/app/composables/useDefaultApi'

vi.mock('nuxt/app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('nuxt/app')>()
  return {
    ...actual,
    // NOTE: 本テストにおいて実際にAPI叩くわけではなく、useFetchをすげ替えたいのでダミーとなるmock作成
    useFetch: vi.fn((path: string, options: UseFetchOptions<FetchOptions>) => {
      return { path, options }
    }),
  }
})

test('useDefaultApi', () => {
  // NOTE: useDefaultApiで使用できるRepositoryKeyを入れた際にオブジェクトが返ってくること。この場合useDefaultApi('hoge')など存在しない場合はテストが落ちる
  const useApiExample = useDefaultApi('example').repository.value
  const expectObj = { get: {} }
  expect(useApiExample).toMatchObject(expectObj)
})

test('defaultFetcher', () => {
  const path = '/example'
  const options = {}
  // useFetchが発火することを確認。戻り値はmockの戻り値とする
  expect(defaultFetcher(path, options)).toStrictEqual({ path, options })
})
