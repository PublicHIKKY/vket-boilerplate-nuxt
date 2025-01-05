// NOTE: そもそももっといいテストあれば是非
import { UseFetchOptions } from 'nuxt/app'
import { FetchOptions } from 'ofetch'
import useApi, { fetcher } from '@/composables/useApi'

vi.mock('#app', () => ({
  // NOTE:  defineNuxtPluginでエラーが出るので設置
  defineNuxtPlugin: vi.fn(),
  // NOTE: 本テストにおいて実際にAPI叩くわけではなく、useFetchをすげ替えたいのでダミーとなるmock作成
  useFetch: vi.fn((path: string, options: UseFetchOptions<FetchOptions>) => {
    return { path, options }
  }),
}))

test('useApi', () => {
  // NOTE: useApiで使用できるRepositoryKeyを入れた際にオブジェクトが返ってくること。この場合useApi('hoge')など存在しない場合はテストが落ちる
  const useApiExample = useApi('example').repository.value
  const expectObj = { get: {} }
  expect(useApiExample).toMatchObject(expectObj)
})

test('fetcher', () => {
  const path = '/example'
  const options = {}
  // useFetchが発火することを確認。戻り値はmockの戻り値とする
  expect(fetcher(path, options)).toStrictEqual({ path, options })
})
