import type { NitroFetchRequest } from 'nitropack'
import { useExample } from '#base/app/composables/useExample'

// Nuxtのpayloadの一部をmockする
const useStateState: Record<string, any> = {} // eslint-disable-line @typescript-eslint/no-explicit-any

vi.mock('#app', () => ({
  defineNuxtPlugin: vi.fn(),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useState: vi.fn((key: string, init?: () => any) => {
    useStateState[key] = { value: init?.() }
    return useStateState[key]
  }),

  // NOTE: 本テストにおいて実際にAPI叩くわけではなく、useFetchをすげ替えたいのでダミーとなるmock作成
  useFetch: vi.fn(() => ({
    status: 'ok',
    data: {
      todos: [
        {
          userId: 0,
          id: 0,
          title: 'Do something!',
          completed: true,
        },
        {
          userId: '1',
          id: '1',
          title: 'Say hello',
          completed: false,
        },
      ],
    },
  })),
}))

vi.mock('#base/app/plugins/runtimeConfig', () => ({
  requireRuntimeConfig: vi.fn(() => ({
    public: {
      baseUrl: 'http://localhost:3000',
      apiPrefix: '/mock',
    },
  })),
}))

// NOTE: 本テストにおいて実際にAPI叩くわけではなく、fetchをすげ替えたいのでダミーとなるmock作成
vi.mock('#base/app/plugins/fetch', () => {
  return {
    pluginFetchApi: vi.fn((_path: string, _options: NitroFetchRequest) => {
      return {
        status: 'ok',
        data: {
          todos: [
            {
              userId: 0,
              id: 0,
              title: 'Do something!',
              completed: true,
            },
            {
              userId: '1',
              id: '1',
              title: 'Say hello',
              completed: false,
            },
          ],
        },
      }
    }),
  }
})

// NOTE: 本テストにおいて実際にAPI叩くわけではなく、 ofetch をすげ替えたいのでダミーとなるmock作成
vi.mock('ofetch', () => {
  return {
    $fetch: vi.fn((_path: string, _options: NitroFetchRequest) => {
      return {
        status: 'ok',
        data: {
          todos: [
            {
              userId: 0,
              id: 0,
              title: 'Do something!',
              completed: true,
            },
            {
              userId: '1',
              id: '1',
              title: 'Say hello',
              completed: false,
            },
          ],
        },
      }
    }),
  }
})

describe('useExample', () => {
  it('should be able to get example', () => {
    const { exampleRef, exampleState } = useExample()
    expect(exampleRef.value).toEqual(undefined)
    expect(exampleState.value).toEqual(undefined)
  })

  it('should be able to change example', async () => {
    const { exampleRef, exampleState, getExample } = useExample()
    const result = await getExample()
    const checkObject = [
      {
        userId: 0,
        id: 0,
        title: 'Do something!',
        completed: true,
      },
      {
        userId: '1',
        id: '1',
        title: 'Say hello',
        completed: false,
      },
    ]
    expect(result).toEqual(checkObject)
    expect(exampleState.value).toEqual(checkObject)
    expect(exampleRef.value).toEqual(checkObject)
  })

  // TODO: このテストはしたいけど、現状はuseStateモックのテストになってしまっているので、コメントアウトしておく。うまい方法があればコメントアウトを解除して、実装して、このコメントを削除してください
  // it("should share example's latest state", () => {
  //   const { example } = useExample()
  //   expect(example.value).toEqual([
  //     {
  //       userId: 0,
  //       id: 0,
  //       title: 'Do something!',
  //       completed: true,
  //     },
  //     {
  //       userId: '1',
  //       id: '1',
  //       title: 'Say hello',
  //       completed: false,
  //     },
  //   ])
  // })
})
