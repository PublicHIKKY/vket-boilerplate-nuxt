import { useState } from 'nuxt/app'
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData'
import type { Ref } from 'vue'
import { InjectionKey, readonly, ref } from 'vue'
import { GetExampleResponse } from '#base/app/repositories/exampleRepository'
import useDefaultApi from '#base/app/composables/useDefaultApi'

export type Example = GetExampleResponse['data']['todos']

export function useExample(data?: Example) {
  const exampleState = useState<Example | undefined>('example', () => data)
  const exampleRef = ref<Example | undefined>(data)

  const repo = useDefaultApi('example').repository.value

  /**
   * APIを実行し、stateを更新後、結果を返す
   * 必要であればこの中でデータの加工などを行っても良い
   */
  async function getExample() {
    const response = await repo.get.getExample()

    // stateを使う場合
    exampleState.value = response.data.todos

    // refを使う場合
    exampleRef.value = response.data.todos

    return response.data.todos
  }

  async function refreshExample<T>(
    refresh: _AsyncData<Example, T>['refresh'],
    data: Ref<Example | null>,
  ) {
    await refresh()
    // stateを使う場合
    exampleState.value = data.value || undefined

    // refを使う場合
    exampleRef.value = data.value || undefined
  }

  return {
    exampleState: readonly(exampleState),
    exampleRef: readonly(exampleRef),
    getExample,
    refreshExample,
  }
}

export type ExampleComposable = ReturnType<typeof useExample>
export const exampleInjectionKey: InjectionKey<ExampleComposable>
  = Symbol('example')
