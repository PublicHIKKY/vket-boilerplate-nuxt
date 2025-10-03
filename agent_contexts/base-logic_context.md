This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: layers/base/app/utils/**/*, layers/base/app/composables/**/*, layers/base/app/models/**/*, layers/base/app/repositories/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  base/
    app/
      composables/
        use-strict-i18n.ts
        useCustomIntersectionObserver.ts
        useDefaultApi.ts
        useExample.ts
        useLocale.ts
        useSocialShareLink.ts
        useToast.ts
        useValidationRules.ts
      models/
        error-message.ts
        json.ts
        todo.ts
      repositories/
        exampleRepository.ts
      utils/
        types/
          types.ts
        anchor.ts
        array.ts
        console.ts
        constant.ts
        date-control.ts
        default-api.ts
        default-factory.ts
        environment.ts
        error.ts
        file-control.ts
        image.ts
        object.ts
        response.ts
        sleep.ts
        storage-control.ts
        token.ts
        tuple.ts
        url.ts
        uuid.ts
        vue-reactive.ts
        zod.ts
```

# Files

## File: layers/base/app/composables/useCustomIntersectionObserver.ts
````typescript
const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
}

const doObserve = (
  targets: {
    element: HTMLElement
    once?: boolean
    delay?: number
    inAction?: () => void
    outAction?: () => void
    intersectingClass?: string
  }[],
  options: IntersectionObserverInit = defaultOptions,
) =>
  targets.forEach(
    (
      { element, once, delay, inAction, outAction, intersectingClass },
      index,
    ) => {
      const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            const delayParam = (delay ?? 300) * index
            setTimeout(() => {
              inAction?.()
              item.target.classList.add(intersectingClass || '-intersecting')
            }, delayParam)
          } else {
            outAction?.()
            item.target.classList.remove(intersectingClass || '-intersecting')
          }

          if (item.isIntersecting && once) {
            observer.unobserve(element)
          }
        })
      }, options)

      observer.observe(element)
    },
  )

export default () => ({ doObserve })
````

## File: layers/base/app/composables/useDefaultApi.ts
````typescript
/**
 * Nuxt3 FWにおける API composables。
 *
 * @packageDocumentation
 */

import { useFetch, UseFetchOptions } from 'nuxt/app'
import type { FetchOptions } from 'ofetch'
import { ref } from 'vue'
import {
  defaultRepositoryFactory,
  DefaultRepositoryKey,
} from '#base/app/utils/default-factory'

export const defaultFetcher = (
  path: string,
  options: UseFetchOptions<FetchOptions>,
) => {
  return useFetch(path, options)
}

const _getRepo = <K extends DefaultRepositoryKey>(endpoint: K) => {
  return defaultRepositoryFactory.get(endpoint)
}

export default function useDefaultApi<K extends DefaultRepositoryKey>(
  endpoint: K,
) {
  const repository = ref(_getRepo(endpoint))
  return {
    repository,
  }
}
````

## File: layers/base/app/composables/useExample.ts
````typescript
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
````

## File: layers/base/app/utils/anchor.ts
````typescript
/**
 * @remark aタグを生成して、そのaタグをクリックすることで外部リンクをさせる
 * @param url URL
 * @param blank 新しいタブで開くかどうか(default: true)
 * @param rel rel属性(default: 'norefferer noopener')
 * @param referrerPolicy referrerPolicy属性(default: 'strict-origin-when-cross-origin')
 */
export const makeAnchorElement = (
  url: string,
  blank = true,
  rel = 'norefferer noopener',
  referrerPolicy = 'strict-origin-when-cross-origin',
): HTMLAnchorElement | null => {
  if (!window || !url) return null
  const aElement = document.createElement('a')
  aElement.href = url
  aElement.classList.add('link-via-element-element')
  aElement.referrerPolicy = referrerPolicy
  aElement.rel = rel
  if (blank) aElement.target = '_blank'
  return aElement
}

export const linkViaElement = (
  url: string,
  blank = true,
  rel = 'norefferer noopener',
  referrerPolicy = 'strict-origin-when-cross-origin',
) => {
  const aElement = makeAnchorElement(url, blank, rel, referrerPolicy)
  if (aElement === null) {
    throw new Error('some message')
  }
  aElement.click()
  aElement.remove()
}
````

## File: layers/base/app/utils/array.ts
````typescript
import { raiseError } from '#base/app/utils/error'

/**
 * `start`から`stop`までの範囲の、数値の配列を生成します。
 *
 * ```ts
 * range(1, 5) // [1, 2, 3, 4, 5]
 * range(1, 5, 2) // [1, 3, 5]
 * range(5, 1, -1) // [5, 4, 3, 2, 1]
 * ```
 */
export const range = (start: number, stop: number, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

/**
 * 配列を逆順にします。
 * `Array.prototype.reverse`は元の配列を書き換えてしまうので、それだと面倒なときに使います。
 *
 * ```ts
 * reversed([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1]
 * ```
 */
export const reversed = <T>(array: T[]): T[] => [...array].reverse()

/**
 * 配列に値を追加または削除します。
 * 同じ値が入っていた時、両方とも削除します。
 *
 * ```ts
 * toggleList(['a', 'b'], 'a') // ['b']
 * toggleList(['b'], 'a') // ['b', 'a']
 * toggleList(['a', 'b', 'a'], 'a') // ['b']
 * ```
 */
export const toggleList = <T>(list: T[], item: T): T[] =>
  list.includes(item)
    ? list.filter(listItem => listItem !== item)
    : [...list, item]

/**
 * 2つの配列を合体します。
 * 2つの配列の長さが異なる場合、短い方に合わせます。
 *
 * ```typescript
 * zip([1,2,3], [2,3,4,5]) // [[1,2], [2,3], [3,4]]
 * ```
 */
export const zip = <T, U>(xs: T[], ys: U[]): Readonly<[T, U]>[] => {
  const length = xs.length >= ys.length ? ys.length : xs.length
  return range(0, length - 1).map(
    (_, i) =>
      [xs[i] ?? raiseError('Invalid'), ys[i] ?? raiseError('Invalid')] as const,
  )
}

/**
 * JSON.stringify()を利用して、配列が同じ値かを確認します。
 *
 * JSON.stringify()を利用できない値を渡した場合は、例外が出る可能性があります。
 */
export const equal = <T>(xs: T[], ys: T[]): boolean => {
  return JSON.stringify(xs) === JSON.stringify(ys)
}
````

## File: layers/base/app/utils/constant.ts
````typescript
/**
 * runtimeConfig・appConfigに置けない・置かない定数を置く場所。
 * 内容がこれなのでユニットテストは必要ない。
 */
export const constant = {
  /**
   * [[constant]] を{}型にしないためのダミー。
   * 他の項目が追加されたら、これを削除してください。
   */
  dummy: 'dummy',
} as const
````

## File: layers/base/app/utils/environment.ts
````typescript
import { getCurrentInstance } from 'vue'

// 闇魔法
/**
 * setup の中でしか呼べない
 */
export const isNuxtEnvironment = () => !!getCurrentInstance()?.appContext?.app
````

## File: layers/base/app/utils/error.ts
````typescript
/**
 * ここには到達しない。
 * 適切に switch 文などが書かれているか型レベルでチェックする。
 */
export const unreachable = (_: never): never => {
  throw new Error('unreachable.')
}

/**
 * throw構文を式として使いたい人向けの関数。
 */
export function raiseError(message: string): never {
  throw new Error(message)
}
````

## File: layers/base/app/utils/object.ts
````typescript
import { WritableDeep } from 'type-fest'

/**
 * 不変的もしくは可変的オブジェクトを、可変的なオブジェクトにクローンします。
 * JSON.stringify()を使うため、JSON.stringify()がサポートしていないオブジェクトのクローンはできません。
 *
 * ```typescript
 * writableClone(x) // JSON.parse(JSON.stringify(x))
 * ```
 *
 * `(T | undefined)[]`型について、**型安全ではありません**。
 * `(T | undefined)[]`を含む値を**渡さないでください**。
 * NaN・Infinityについても同様です。
 *
 * ```typescript
 * const xs: (number | undefined)[] = [undefined]
 * const ys: (number | undefined)[] = writableClone(xs)
 * const y: number | undefined = ys[0] // null
 * ```
 */
export const writableClone = <T>(object: T): WritableDeep<T> => {
  return JSON.parse(JSON.stringify(object)) as WritableDeep<T>
}
````

## File: layers/base/app/utils/sleep.ts
````typescript
import { nextTick } from 'vue'

/**
 * @desc 特定のミリ秒処理を止める。testなどでDOM改変などの非同期に使用
 * @param { number } ms
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise<void>(resolve =>
    setTimeout(() => {
      resolve()
    }, ms),
  )

// NOTE: どうしてこれで直っているのかは不明
/**
 * `await wrapper.get('input[type="text"]').setValue('12345678901')`
 * などのアクションを待った時に、後続の`expect()`が失敗する場合に使う関数。
 * ```ts
 * await wrapper.get('input[type="text"]').setValue('12345678901')
 * await waitEffect()
 * expect(wrapper.get('p[class="error-container"]')).toBeTruthy()
 * ```
 * https://github.com/vuejs/vue-test-utils/issues/1406
 */
export const waitEffect = async () => {
  await nextTick()
  await new Promise(resolve =>
    requestAnimationFrame(resolve),
  )
}
````

## File: layers/base/app/utils/storage-control.ts
````typescript
import Cookies, { CookieGetOptions, CookieSetOptions } from 'universal-cookie'
import { addDateTime } from './date-control'

const cookie = new Cookies()
const setCookieDefaultSettings: CookieSetOptions = {
  expires: addDateTime(30, 'day', new Date()),
  path: '/',
  secure: true,
}

/**
 * @desc cookieの特定の値を返す
 * @param {string} key
 * @param {CookieGetOptions} options
 * @return {unknown}
 */
export const getSingleCookieValue = (
  key: string,
  options: CookieGetOptions | null = null,
): string | null => {
  if (!key) return null
  if (options === null) {
    return cookie.get(key) ?? null
  }
  return cookie.get(key, options) ?? null
}

/**
 * @desc cookieに特定のkey,valueを格納する
 * @param {string} key
 * @param {string} value
 * @param {CookieSetOptions} options
 */
export const setSingleCookieValue = (
  key: string,
  value: string,
  options: CookieSetOptions = setCookieDefaultSettings,
) => {
  if (key) {
    return cookie.set(key, value, options)
  }
  throw new Error('set cookie key is falsy')
}

/**
 * @desc cookieの特定の値を削除
 * @param {string} key
 * @param {CookieSetOptions} options
 */
export const removeSingleCookieValue = (
  key: string,
  options: CookieSetOptions = setCookieDefaultSettings,
) => {
  if (key) {
    return cookie.remove(key, options)
  }
  throw new Error('remove cookie key is falsy')
}

/**
 * @desc local storageの特定の値を返す
 * @param {string} key
 * @return {string | null}
 */
export const getLocalStorageValue = (key: string) => {
  return localStorage.getItem(key)
}

/**
 * @desc local storageに特定のkey,valueを格納する
 * @param {string} key
 * @param {string} value
 */
export const setLocalStorageValue = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

/**
 * @desc local storageの特定のkeyを削除する
 * @param {string} key
 */
export const removeLocalStorageValue = (key: string) => {
  localStorage.removeItem(key)
}

/**
 * @desc session storageの特定の値を返す
 * @param {string} key
 * @return {string | null}
 */
export const getSessionStorageValue = (key: string) => {
  return sessionStorage.getItem(key)
}

/**
 * @desc session storageに特定のkey,valueを格納する
 * @param {string} key
 * @param {string} value
 */
export const setSessionStorageValue = (key: string, value: string) => {
  sessionStorage.setItem(key, value)
}

/**
 * @desc session storageの特定のkeyを削除する
 * @param {string} key
 */
export const removeSessionStorageValue = (key: string) => {
  sessionStorage.removeItem(key)
}
````

## File: layers/base/app/utils/token.ts
````typescript
/**
 * JWTのデコード
 */
export const decodeJwt = (jwt: string): unknown => {
  try {
    const base64Url = jwt.split('.')[1]
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/')
    if (!base64) throw new Error('Failed to decode base64')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join(''),
    )
    return JSON.parse(jsonPayload)
  } catch (e) {
    console.error(`${e}`)
    return null
  }
}
````

## File: layers/base/app/utils/tuple.ts
````typescript
/**
 * readonlyなタプル型で、要素がundefinedやnullを含む場合に、indexOfなどのメソッドを使えるようにする関数。
 * コンフィグなどの静的なデータを扱う際に使う。
 * ```ts
 * const xs: readonly ['x', 'y', 'z'] = /* ... * /
 * const x: string | null = /* ... * /
 * const index = tupleWideningDo(xs, x, (xs, x) => xs.indexOf(x))
 * ```
 */
export const tupleWideningDo = <T>(
  xs: readonly (string | undefined | null)[],
  x: string | undefined | null,
  f: (
    xs: readonly (string | undefined | null)[],
    x: string | undefined | null
  ) => T,
) => f(xs, x)
````

## File: layers/base/app/utils/uuid.ts
````typescript
import { v4 as uuidV4 } from 'uuid'

export function createUuidV4() {
  return uuidV4()
}
````

## File: layers/base/app/composables/use-strict-i18n.ts
````typescript
import type { UseI18nOptions } from 'vue-i18n'

export class I18nTKeyMissingError extends Error {}

/**
 * 型安全なi18n composable
 * 実行時に翻訳キーの存在を検証し、存在しない場合はエラーを投げる
 */
export const useStrictI18n = (
  options?: Omit<UseI18nOptions, 'missing'>,
) => useI18n({
  ...options ?? {},
  missing: (locale, key) => {
    throw new I18nTKeyMissingError(`key '${key}' is not found in locale '${locale}'`)
  },
})
````

## File: layers/base/app/composables/useLocale.ts
````typescript
import { getSingleCookieValue } from '#base/app/utils/storage-control'
import { setLocale } from '@vee-validate/i18n'
import { useRequestHeaders } from 'nuxt/app'
import type { InjectionKey } from 'vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const COOKIE_KEY = 'VUEI18N_MANUAL_LOCALE'
export const JA = 'ja'
export const EN = 'en'
export type Lang = typeof JA | typeof EN

export const useLocale = () => {
  const i18n = useI18n()

  /**
   * デフォルトの言語を取得。
   */
  const getDefaultLanguage = () => {
    const reqLocale = useRequestHeaders(['accept-language'])[
      'accept-language'
    ]?.split(',')[0]
    const locale = ref(
      import.meta.server && reqLocale
        ? reqLocale // サーバーサイドでの判定
        : import.meta.client && navigator.language
          ? navigator.language // クライアントでの判定
          : JA,
    )

    const isBrowserLanguageJa = locale.value.startsWith(JA)
    const isBrowserLanguageEn = locale.value.startsWith(EN)
    const defaultLanguageFromCookie = getSingleCookieValue(COOKIE_KEY)
    return defaultLanguageFromCookie === JA
      ? JA
      : defaultLanguageFromCookie === EN
        ? EN
        : isBrowserLanguageJa
          ? JA
          : isBrowserLanguageEn
            ? EN
            : JA
  }

  const changeLocale = (target: 'ja' | 'en') => {
    setLocale(target)
    i18n.locale.value = target
  }

  /**
   * 現在のi18n localeに基づいてlocale固有のパスを返却します。
   * @param to - '/'から始まる宛先パス
   * @returns '/'から始まるパス
   */
  const localePath = (to: string) =>
    i18n.locale.value === JA ? to : `/${i18n.locale.value}${to}`

  return {
    getDefaultLanguage,
    changeLocale,
    localePath,
  }
}

export type LocaleComposable = ReturnType<typeof useLocale>

export const localeInjectionKey: InjectionKey<LocaleComposable>
  = Symbol('locale')
````

## File: layers/base/app/composables/useSocialShareLink.ts
````typescript
type ShareProps = {
  text?: string
  twitterHashtags?: string[] // NOTE: `xHashtags`にリネームしたいけど、後方互換性のために残す
  shareUrl?: string
}

const useSocialShareLink = () => {
  const i18n = useNuxtApp().$i18n
  const config = useRuntimeConfig()
  const route = useRoute()
  const currentPath = computed(() => {
    const baseUrl = (config.public.NUXT_ENV_BASE_URL ?? '') as string
    const path = !route
      ? baseUrl
      : route.path.slice(-4) === '/en/'
        ? route.path.slice(0, -1)
        : route.path.slice(-1) === '/' || route.path.slice(-3) === '/en'
          ? route.path
          : `${route.path}/`
    return `${baseUrl}${path}`
  })

  const getShareUrl = (target: string, props?: ShareProps) => {
    const shareText
      = props?.text
        ?? (i18n.locale.value === 'ja'
          ? encodeURIComponent(`${currentPath.value} をシェア`)
          : encodeURIComponent(`Share ${currentPath.value}`))

    const xUrlSearchParam = new URLSearchParams({
      url: props?.shareUrl ? props?.shareUrl : currentPath.value,
      text: `${shareText}\n`,
    })
    if (props?.twitterHashtags && props.twitterHashtags.length > 0) {
      xUrlSearchParam.set('hashtags', props.twitterHashtags.join())
    }
    const xUrl = `https://x.com/intent/tweet?${xUrlSearchParam.toString()}`

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentPath.value}&t=${shareText}`
    const lineUrl = `http://line.me/R/msg/text/?${shareText}`

    switch (target) {
      case 'x':
      case 'twitter':
        return xUrl
      case 'facebook':
        return facebookUrl
      case 'line':
        return lineUrl
      default:
        return ''
    }
  }

  return {
    getShareUrl,
  }
}

export default useSocialShareLink
````

## File: layers/base/app/composables/useToast.ts
````typescript
import { useNuxtApp } from 'nuxt/app'
import { InjectionKey } from 'vue'

export const useToast = () => {
  const { $toast } = useNuxtApp()

  /**
   * toast追加
   */
  const addToast = (
    text: string,
    type?: 'info' | 'success' | 'error' | 'warning',
    time?: number,
    isClosable = false,
  ) => {
    const safeType = (type && ['info', 'success', 'error', 'warning'].includes(type)) ? type : 'info'
    if ($toast && $toast[safeType]) {
      $toast[safeType](text, {
        delay: time,
        closeButton: isClosable,
      })
    }
  }

  return {
    addToast,
  }
}

export default useToast

export type ToastComposable = ReturnType<typeof useToast>

export const toastInjectionKey: InjectionKey<ToastComposable> = Symbol('toast')
````

## File: layers/base/app/composables/useValidationRules.ts
````typescript
import { useI18n } from 'vue-i18n'
import { z } from 'zod/v3'

const useValidationRules = () => {
  const i18n = useI18n()

  return {
    required: z.coerce.string().nonempty({
      message: i18n.t('validation.required'),
    }),

    /**
     * 必須(文字列)
     * ->文字列を選ばせるSelectBox等の必須チェックで使用する
     */
    stringRequired: z
      .string({
        invalid_type_error: i18n.t('validation.excluded'),
      })
      .nullable()
      .optional()
      .refine(
        val => val !== null && val !== undefined,
        i18n.t('validation.required'),
      ),

    /**
     * 必須(数値)
     * ->数値を選ばせるSelectBox等の必須チェックで使用する
     */
    numberRequired: z
      .number({
        invalid_type_error: i18n.t('validation.excluded'),
      })
      .nullable()
      .optional()
      .refine(
        val => val !== null && val !== undefined,
        i18n.t('validation.required'),
      ),

    minValue: (minimum: number) =>
      z.coerce.string().refine(x => Number(x) >= minimum, {
        message: i18n.t('validation.min_value', { min: minimum }),
      }),

    /**
     * 数値・数値を表す文字列が引数に指定された値以上。
     */
    maxValue: (maximum: number) =>
      z.coerce.string().refine(x => Number(x) <= maximum, {
        message: i18n.t('validation.max_value', { max: maximum }),
      }),

    /**
     * stringのlengthが引数に指定された値以上。
     */
    max: (maximum: number) =>
      z.coerce.string().max(maximum, {
        message: i18n.t('validation.max', { length: maximum }),
      }),

    url: z.string().url({
      message: i18n.t('validation.url'),
    }),

    /**
     * URLチェックをしたいが、空文字は通したい場合。
     */
    nonRequiredUrl: z.string().superRefine((value, ctx) => {
      if (!value) return true // 空文字/null/undefinedは、バリデーションをスキップ
      try {
        z.string()
          .url({
            message: i18n.t('validation.url'),
          })
          .parse(value)
        return true
      } catch (_e) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('validation.url'),
        })
      }
    }),

    /**
     * 値が引数の配列に含まれないこと。
     */
    excluded: <T>(excludedItems: T[]) =>
      z.unknown().refine(
        (x) => {
          const items: unknown[] = excludedItems
          return !items.includes(x)
        },
        {
          message: i18n.t('validation.excluded'),
        },
      ),

    image: (rules: { required?: boolean, maxSize?: number }) =>
      z
        .instanceof(File)
        .optional()
        .refine(data => (rules.required ? !!data : true), {
          message: i18n.t('validation.required'),
        })
        .refine(
          data =>
            // MB単位で指定できるようにしています。
            data && rules.maxSize !== undefined
              ? data.size < rules.maxSize * 1024 * 1024
              : true,
          {
            message: i18n.t('validation.max_value', {
              max: `${rules.maxSize}MB`,
            }),
          },
        ),
  }
}

export default useValidationRules
````

## File: layers/base/app/models/json.ts
````typescript
/**
 * @group For Developers
 * @category Type Definitions
 * @module Json
 * @reference https://zod.dev/?id=json-type
 */

import { z } from 'zod/v3'

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()])
type Literal = z.infer<typeof literalSchema>
type JsonType = Literal | { [key: string]: JsonType } | JsonType[]
export const jsonSchema: z.ZodType<JsonType> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
)
export type Json = z.infer<typeof jsonSchema>
````

## File: layers/base/app/models/todo.ts
````typescript
import { z } from 'zod/v3'
import { integral } from '#base/app/utils/zod'

export const todoSchema = z.object({
  userId: integral, // NOTE: バックエンドの仕様が不安定な場合は、integralで型を広く持っておこう
  id: integral,
  title: z.string(),
  completed: z.boolean(),
})

export type Todo = z.infer<typeof todoSchema>
````

## File: layers/base/app/repositories/exampleRepository.ts
````typescript
import { z } from 'zod/v3'
import { todoSchema } from '#base/app/models/todo'
import { requireRuntimeConfig } from '#base/app/plugins/runtimeConfig'
import defaultApi from '#base/app/utils/default-api'
import { raiseError } from '#base/app/utils/error'
import { requireValueOf } from '#base/app/utils/zod'

const statusSchema = z.literal('ok').or(z.literal('ng'))

export const getExampleResponseSchema = z.object({
  status: statusSchema,
  data: z.object({
    todos: z.array(todoSchema),
  }),
})
export type GetExampleResponse = z.infer<typeof getExampleResponseSchema>

export default {
  get: {
    async getExample() {
      const prefix
        = requireRuntimeConfig().public?.apiPrefix ?? raiseError('getExample()')
      const response = await defaultApi('get', `${prefix}/example`)
      return requireValueOf(getExampleResponseSchema, response)
    },
  } as const,
}
````

## File: layers/base/app/utils/types/types.ts
````typescript
/**
 * 型関数を定義するモジュール。
 *
 * それ以外の特定の型や、なんらかの種類（type・kind）を定義するモジュールではないです。
 */

/**
 * 一部をnullableにする
 */
export type Nullable<T, V extends keyof T> = {
  [K in keyof T]: K extends V ? T[K] | null : T[K]
}

export type ValueOf<T> = T[keyof T]

/**
 * 型を上書き
 */
export type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<
  T,
  keyof U
>
& U
````

## File: layers/base/app/utils/console.ts
````typescript
/**
 * 制御可能なログシステム
 * 環境に応じたログレベル管理と構造化ログ出力
 */

/* eslint-disable no-console */

/**
 * ログレベルの定義
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

/**
 * コンソールメソッドの型定義
 */
export type ConsoleMethod = 'info' | 'error' | 'warn' | 'debug' | 'table'

/**
 * ログ設定
 */
interface LogConfig {
  enabled: boolean
  level: LogLevel
  prefix?: string
  timestamp?: boolean
  stackTrace?: boolean
}

/**
 * デフォルトのログ設定
 */
const defaultConfig: LogConfig = {
  enabled: true,
  level: 'info',
  timestamp: true,
  stackTrace: false,
}

/**
 * 現在のログ設定
 */
let currentConfig: LogConfig = { ...defaultConfig }

/**
 * ログレベルの重要度
 */
const logLevels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

/**
 * ログ設定を更新
 */
export const configureLogger = (config: Partial<LogConfig>): void => {
  currentConfig = { ...currentConfig, ...config }
}

/**
 * 環境に基づいて自動的にログ設定を調整
 */
export const configureLoggerForEnvironment = (): void => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    configureLogger({
      enabled: false,
      level: 'error',
      timestamp: false,
      stackTrace: false,
    })
  } else if (isDevelopment) {
    configureLogger({
      enabled: true,
      level: 'debug',
      timestamp: true,
      stackTrace: true,
    })
  }
}

/**
 * ログを出力すべきかどうかを判定
 */
const shouldLog = (level: LogLevel): boolean => {
  return currentConfig.enabled && logLevels[level] >= logLevels[currentConfig.level]
}

/**
 * タイムスタンプを生成
 */
const generateTimestamp = (): string => {
  return new Date().toISOString()
}

/**
 * ログメッセージをフォーマット
 */
const formatMessage = (level: LogLevel, message: string): string => {
  const parts: string[] = []

  if (currentConfig.timestamp) {
    parts.push(`[${generateTimestamp()}]`)
  }

  if (currentConfig.prefix) {
    parts.push(`[${currentConfig.prefix}]`)
  }

  parts.push(`[${level.toUpperCase()}]`)
  parts.push(message)

  return parts.join(' ')
}

/**
 * 基本的なログ出力関数
 */
const logMessage = (level: LogLevel, method: ConsoleMethod, message: string, ...args: unknown[]): void => {
  if (!shouldLog(level)) return

  const formattedMessage = formatMessage(level, message)
  console[method](formattedMessage, ...args)

  if (currentConfig.stackTrace && level === 'error') {
    console.trace()
  }
}

/**
 * デバッグログ
 */
export const debug = (message: string, ...args: unknown[]): void => {
  logMessage('debug', 'debug', message, ...args)
}

/**
 * 情報ログ
 */
export const info = (message: string, ...args: unknown[]): void => {
  logMessage('info', 'info', message, ...args)
}

/**
 * 警告ログ
 */
export const warn = (message: string, ...args: unknown[]): void => {
  logMessage('warn', 'warn', message, ...args)
}

/**
 * エラーログ
 */
export const error = (message: string, ...args: unknown[]): void => {
  logMessage('error', 'error', message, ...args)
}

/**
 * テーブル形式でのログ出力
 */
export const table = (data: unknown, properties?: string[]): void => {
  if (!shouldLog('info')) return

  console.table(data, properties)
}

/**
 * 値をログ出力してそのまま返す（デバッグ用）
 */
export const log = <T>(
  value: T,
  message: string,
  method: ConsoleMethod = 'info',
): T => {
  const level: LogLevel = method === 'error' ? 'error' : method === 'warn' ? 'warn' : 'info'

  if (shouldLog(level)) {
    console[method](formatMessage(level, message), value)
  }

  return value
}

/**
 * 条件付きログ出力
 */
export const logIf = (
  condition: boolean,
  level: LogLevel,
  message: string,
  ...args: unknown[]
): void => {
  if (!condition) return

  const method: ConsoleMethod = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'info'
  logMessage(level, method, message, ...args)
}

/**
 * パフォーマンス測定用のログ
 */
export const timeStart = (label: string): void => {
  if (shouldLog('debug')) {
    console.time(label)
  }
}

/**
 * パフォーマンス測定終了
 */
export const timeEnd = (label: string): void => {
  if (shouldLog('debug')) {
    console.timeEnd(label)
  }
}

/**
 * グループ化されたログ
 */
export const group = (label: string, collapsed = false): void => {
  if (!shouldLog('info')) return

  if (collapsed) {
    console.groupCollapsed(formatMessage('info', label))
  } else {
    console.group(formatMessage('info', label))
  }
}

/**
 * ロググループ終了
 */
export const groupEnd = (): void => {
  if (shouldLog('info')) {
    console.groupEnd()
  }
}

/**
 * 現在のログ設定を取得
 */
export const getLoggerConfig = (): LogConfig => {
  return { ...currentConfig }
}

/**
 * 関数の実行をログ付きで行う
 */
export const withLogging = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  functionName?: string,
): T => {
  return ((...args: unknown[]) => {
    const name = functionName || fn.name || 'anonymous'

    debug(`Calling function: ${name}`, args)
    timeStart(name)

    try {
      const result = fn(...args)

      if (result instanceof Promise) {
        return result
          .then((value) => {
            debug(`Function ${name} resolved`, value)
            timeEnd(name)
            return value
          })
          .catch((err) => {
            error(`Function ${name} rejected`, err)
            timeEnd(name)
            throw err
          })
      } else {
        debug(`Function ${name} returned`, result)
        timeEnd(name)
        return result
      }
    } catch (err) {
      error(`Function ${name} threw error`, err)
      timeEnd(name)
      throw err
    }
  }) as T
}

// 環境に基づく自動設定
if (typeof window === 'undefined') {
  // Server-side
  configureLoggerForEnvironment()
}
````

## File: layers/base/app/utils/date-control.ts
````typescript
import dayjs, { ManipulateType } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.locale('ja')

dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(localeData)
dayjs.extend(duration)
dayjs.extend(quarterOfYear)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Tokyo')

const _locale = {
  0: 'ja',
  1: 'en',
} as const

type LocaleData = (typeof _locale)[keyof typeof _locale]

/**
 * @description 日付取得・フォーマット
 * @returns Result:Date
 */
export function formatDate(
  format: string,
  date: Date | string = new Date(),
): string {
  return dayjs(date).format(format)
}

export function formatEnglishDate(date: Date | string): string {
  return formatDate('LL', date)
}

export function formatJapaneseDate(date: Date | string): string {
  return formatDate('YYYY/MM/DD', date)
}

export function formatEnglishDateTime(date: Date | string): string {
  return formatDate('LL LT', date)
}

export function formatJapaneseDateTime(date: Date | string): string {
  return formatDate('YYYY/MM/DD HH:mm', date)
}

export function formatDateUnixTime(date: Date | string = new Date()): number {
  return dayjs(date).unix()
}

// タイムゾーンをJSTからローカルのタイムゾーンに変更
export function formatJSTtoLocalTimezone(date: string): string {
  const dateJST = dayjs(date).tz('Asia/Tokyo', true)
  const dateUSJ = dayjs(dateJST).tz('UTC').format('YYYY-MM-DDTHH:mm')
  return dayjs(dateUSJ).tz(dayjs.tz.guess()).format('YYYY-MM-DDTHH:mm')
}

// タイムゾーンをローカルのタイムゾーンからJSTに変更
export function formatLocalTimezoneToJST(date: string): string {
  const dateWithTimezone = dayjs(date).tz(dayjs.tz.guess(), true)
  return dayjs(dateWithTimezone).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm')
}

export function getCurrentDate(locale: LocaleData = 'ja'): string {
  const date = new Date()
  return locale === 'ja' ? formatJapaneseDate(date) : formatEnglishDate(date)
}

// ユーザのローカルのタイムゾーンを取得
export function getLocalTimezone(): string {
  return 'UTC ' + dayjs().tz(dayjs.tz.guess()).format('Z')
}

// 日付加算されたDateオブジェクトの作成
export function addDateTime(
  value: number,
  unit: ManipulateType = 'day',
  base: Date | string,
) {
  return dayjs(base).add(value, unit).toDate()
}

/**
 * @description 時差対応
 * @returns Result:Date
 */
export function convertTimeToUtc(date: Date | string): string {
  return dayjs(date).utc().format()
}

/**
 * @description 指定日時の比較判定
 * @returns Result:number
 */

export function diffDays(
  to: Date | string,
  from: Date | string | undefined = undefined,
  format: dayjs.UnitType = 'day',
): number {
  const toDate = dayjs(to)
  const fromDate = from ? dayjs(from) : dayjs()
  return fromDate.diff(toDate, format)
}

export function getDiffTimeByUnit(
  to: Date | string,
  from: Date | string | undefined = undefined,
  unitType: dayjs.UnitType = 'day',
): number {
  const millisecond = diffDays(to, from, 'millisecond')
  if (unitType === 'day') {
    return Math.floor(millisecond / 1000 / 60 / 60 / 24)
  }
  if (unitType === 'hour') {
    return Math.floor(millisecond / 1000 / 60 / 60) % 24
  }
  if (unitType === 'minute') {
    return Math.floor(millisecond / 1000 / 60) % 60
  }
  if (unitType === 'second') {
    return Math.floor(millisecond / 1000) % 60
  }
  return -1
}

export function isBeforeTargetDate(date: Date | string): boolean {
  return !!dayjs().isSameOrBefore(dayjs(date))
}

export function isBetweenTargetDates(
  fromDate: Date | string,
  toDate: Date | string,
): boolean {
  return !!dayjs().isBetween(dayjs(fromDate), dayjs(toDate))
}

export function isAfterTargetDate(date: Date | string): boolean {
  return !!dayjs().isSameOrAfter(dayjs(date))
}

// Additional utility functions for tests

export function formatTimestamp(timestamp: number, format: string): string {
  return dayjs(timestamp).format(format)
}

export function timestampToDate(timestamp: number): Date {
  return dayjs(timestamp).toDate()
}

export function dateToTimestamp(date: Date | string): number {
  // Ensure we're working with UTC to match test expectations
  return dayjs.utc(date).valueOf()
}

export function isAfter(date1: Date | string, date2: Date | string): boolean {
  return dayjs(date1).isAfter(dayjs(date2))
}

export function isBefore(date1: Date | string, date2: Date | string): boolean {
  return dayjs(date1).isBefore(dayjs(date2))
}

export function isBetweenDates(date: Date | string, start: Date | string, end: Date | string): boolean {
  const d = dayjs(date)
  const s = dayjs(start)
  const e = dayjs(end)
  return (d.isAfter(s) && d.isBefore(e)) || d.isSame(s) || d.isSame(e)
}

export function isSameOrAfterDate(date1: Date | string, date2: Date | string): boolean {
  const d1 = dayjs(date1)
  const d2 = dayjs(date2)
  return d1.isAfter(d2) || d1.isSame(d2)
}

export function isSameOrBeforeDate(date1: Date | string, date2: Date | string): boolean {
  const d1 = dayjs(date1)
  const d2 = dayjs(date2)
  return d1.isBefore(d2) || d1.isSame(d2)
}

export function isSame(date1: Date | string, date2: Date | string): boolean {
  return dayjs(date1).isSame(dayjs(date2))
}

export function getNow(): dayjs.Dayjs {
  return dayjs()
}

export function getNowWithFormat(format: string): string {
  return dayjs().format(format)
}

export function getTomorrow(): dayjs.Dayjs {
  return dayjs().add(1, 'day')
}

export function getTomorrowWithFormat(format: string): string {
  return dayjs().add(1, 'day').format(format)
}

export function getRelativeTime(date: Date | string): string {
  return dayjs(date).fromNow()
}

export function addDate(date: Date | string, amount: number, unit: dayjs.ManipulateType): Date {
  return dayjs(date).add(amount, unit).toDate()
}

export function subtractDate(date: Date | string, amount: number, unit: dayjs.ManipulateType): Date {
  return dayjs(date).subtract(amount, unit).toDate()
}

export function getStartOfDay(date: Date | string): Date {
  return dayjs(date).startOf('day').toDate()
}

export function getEndOfDay(date: Date | string): Date {
  return dayjs(date).endOf('day').toDate()
}

export function getStartOfMonth(date: Date | string): Date {
  return dayjs(date).startOf('month').toDate()
}

export function getEndOfMonth(date: Date | string): Date {
  return dayjs(date).endOf('month').toDate()
}

export function getStartOfYear(date: Date | string): Date {
  return dayjs(date).startOf('year').toDate()
}

export function getEndOfYear(date: Date | string): Date {
  return dayjs(date).endOf('year').toDate()
}

export function getDiff(date1: Date | string, date2: Date | string, unit: dayjs.UnitType = 'millisecond'): number {
  return dayjs(date1).diff(dayjs(date2), unit)
}

export function getDuration(date1: Date | string, date2: Date | string): ReturnType<typeof dayjs.duration> {
  return dayjs.duration(dayjs(date2).diff(dayjs(date1)))
}

export function getWeekday(date: Date | string): number {
  return dayjs(date).day()
}

export function getMonth(date: Date | string): number {
  return dayjs(date).month()
}

export function getQuarter(date: Date | string): number {
  return dayjs(date).quarter()
}

export function formatCustom(date: Date | string, format: string): string {
  return dayjs(date).format(format)
}
````

## File: layers/base/app/utils/default-api.ts
````typescript
/**
 * apiの抽象化。 ofetch 準拠
 *
 * @packageDocumentation
 */

import camelcaseKeys from 'camelcase-keys'
import type { FetchOptions } from 'ofetch'
import { $fetch as _oFetchApi } from 'ofetch' // not nuxt
import snakecaseKeys from 'snakecase-keys'
import { raiseError } from '#base/app/utils/error'
import { requireRuntimeConfig } from '#base/app/plugins/runtimeConfig'
import { pluginFetchApi } from '#base/app/plugins/fetch' // nuxt

export type Method
  = | 'GET'
    | 'HEAD'
    | 'PATCH'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | 'TRACE'
    | 'get'
    | 'head'
    | 'patch'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'

/**
 * @definication 使用するAPIの定義
 */
const defaultFetchOptions: FetchOptions = {
  retry: 2,
  // headers: {},
  onRequest: (ctx) => {
    if (
      !ctx.options.body
      || typeof ctx.options.body !== 'object'
      // FormDataをsnakecaseKeysに突っ込むと空Objectになるので、append時、snakecaseにしておく
      || ctx.options.body instanceof FormData
    )
      // [todo] ここのasを直すとsnakecaseKeysの型が合わなくなるので、要検討
      return
    ctx.options.body = snakecaseKeys(
      ctx.options.body as Record<string, unknown>,
      { deep: true },
    )
  },
  // onRequestError: async (ctx) => {},
  onResponse: async (ctx) => {
    if (!ctx.response._data || typeof ctx.response._data !== 'object') return
    ctx.response._data = await camelcaseKeys(ctx.response._data, { deep: true })
  },
  // onResponseError: async (ctx) => {},
}

const apiFetchFunction = (
  method: Method,
  _path: string,
  _options?: Omit<FetchOptions, 'method'>,
) => {
  // デフォルトのAPI(ofetch)
  const _DEFAULT_FETCH_API = pluginFetchApi().fetchApi || _oFetchApi
  // NOTE: useFetchはラップしないことにし$fetchを使うようにする。方針が変わった場合は修正する
  const FETCH_API = _DEFAULT_FETCH_API
  return (path = _path, opts = _options) => {
    const options = { ...opts, method }
    return FETCH_API(path, options)
  }
}

// HACK: 即時関数で返したい...
export const defaultApi = {
  get: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('GET', path, options)()
  },
  post: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('POST', path, options)()
  },
  put: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('PUT', path, options)()
  },
  patch: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('PATCH', path, options)()
  },
  delete: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('DELETE', path, options)()
  },
} as const

export default (
  method: Method,
  path: string,
  fetchOptions: FetchOptions = {},
) => {
  switch (method) {
    case 'GET':
    case 'get':
      return defaultApi.get(path, fetchOptions)
    case 'POST':
    case 'post':
      return defaultApi.post(path, fetchOptions)
    case 'PUT':
    case 'put':
      return defaultApi.put(path, fetchOptions)
    case 'PATCH':
    case 'patch':
      return defaultApi.patch(path, fetchOptions)
    case 'DELETE':
    case 'delete':
      return defaultApi.delete(path, fetchOptions)
    default:
      return defaultApi.get(path, fetchOptions)
  }
}
````

## File: layers/base/app/utils/default-factory.ts
````typescript
import exampleRepository from '#base/app/repositories/exampleRepository'
import type { Method as DefaultMethods } from '#base/app/utils/default-api'

/**
 * The parent type for each method of `'get' | 'post' | 'put' | 'delete'` in each repository
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type ApiAccess = Function

/**
 * For use when creating `#main/app/utils/factory.ts`.
 * See [[DefaultRepository]] for usage.
 */
export type MakeRepository<Methods extends string | symbol> = {
  [key in Methods]?: Record<string, ApiAccess>
}

/**
 * NOTE:.
 * Naming of "DefaultRepository" because it is the repository type of default-factory.
 * The name is like "default type of some repository", but it is not intended.
 */
export type DefaultRepository = MakeRepository<DefaultMethods>
export type DefaultRepositories = Record<string, DefaultRepository>

export const defaultRepositories = {
  example: exampleRepository,
} as const satisfies DefaultRepositories

export type DefaultRepositoryKey = keyof typeof defaultRepositories

export const defaultRepositoryFactory = {
  get: <K extends keyof typeof defaultRepositories>(name: K) =>
    defaultRepositories[name],
}
````

## File: layers/base/app/utils/image.ts
````typescript
/**
 * fileオブジェクトをimgタグで表示させたいときに使う
 *
 * createObjectURL しつつ、
 * 内部で new Image() して load イベントで自動で revokeObjectURL を実行する
 */
export function getImageUrl(blob: File | Blob): string {
  const imageElement = new Image()
  imageElement.addEventListener('load', () =>
    URL.revokeObjectURL(imageElement.src),
  )
  imageElement.addEventListener('error', (event: ErrorEvent) => {
    URL.revokeObjectURL(imageElement.src)
    console.error(event.error)
  })
  imageElement.src = URL.createObjectURL(blob)
  return imageElement.src
}

/**
 * File | Blob を Image にする
 * @param blob
 * @returns
 */
export function toImage(blob: File | Blob): Promise<HTMLImageElement> {
  const imageElement = new Image()
  return new Promise((resolve, reject) => {
    const loadHandler = () => {
      imageElement.removeEventListener('load', loadHandler)
      imageElement.removeEventListener('error', errorHandler)
      URL.revokeObjectURL(imageElement.src)
      resolve(imageElement)
    }

    const errorHandler = (_event: Event) => {
      imageElement.removeEventListener('load', loadHandler)
      imageElement.removeEventListener('error', errorHandler)
      URL.revokeObjectURL(imageElement.src)
      reject(new Error('Image load failed'))
    }

    imageElement.addEventListener('load', loadHandler)
    imageElement.addEventListener('error', errorHandler)
    imageElement.src = URL.createObjectURL(blob)
  })
}
````

## File: layers/base/app/utils/vue-reactive.ts
````typescript
import type { DeepReadonly, Reactive } from 'vue'
import { writableClone } from './object'

/**
 * 深いリアクティブユーティリティ
 * ネストされたオブジェクトの完全なtoRaw変換とreadonly解除機能
 */

/**
 * オブジェクトかどうかを判定する型ガード
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date) && !(value instanceof RegExp)
}

/**
 * ネストされたオブジェクトの完全なtoRaw変換
 * リアクティブプロキシを完全に除去
 */
export const toRawDeep = <T>(refValue: T): T => {
  const raw = toRaw(refValue)

  if (raw === null || raw === undefined) {
    return raw
  }

  if (typeof raw === 'string' || typeof raw === 'number' || typeof raw === 'boolean') {
    return raw
  }

  if (raw instanceof Date || raw instanceof RegExp) {
    return raw
  }

  if (Array.isArray(raw)) {
    const mappedArray = raw.map(item => toRawDeep(item))
    return mappedArray as unknown as T
  }

  if (isRecord(raw)) {
    const result: Record<string, unknown> = {}
    for (const key in raw) {
      if (Object.prototype.hasOwnProperty.call(raw, key)) {
        result[key] = toRawDeep(raw[key])
      }
    }
    return result as unknown as T
  }

  return raw
}

/**
 * readonly オブジェクトを書き込み可能にする
 * DeepReadonly<T> → WritableDeep<T> の変換
 */
export const unreadonly = <T>(immutable: DeepReadonly<T>): unknown =>
  writableClone(toRawDeep(immutable))

/**
 * リアクティブオブジェクトの完全な複製
 * 元のオブジェクトのリアクティブ性を保持しつつ、新しいインスタンスを作成
 */
export const deepCloneReactive = <T>(reactiveObj: T): T => {
  const raw = toRawDeep(reactiveObj)
  const cloned = writableClone(raw)
  return ref(cloned).value
}

/**
 * 条件付きリアクティブ変換
 * 条件がtrueの場合のみリアクティブにする
 */
export const conditionalReactive = <T extends object>(value: T, condition: boolean): T | Reactive<T> => {
  return condition ? reactive(value) : value
}
````

## File: layers/base/app/models/error-message.ts
````typescript
/**
 * ブランデッド型によるエラー処理システム
 * 型レベルでエラーメッセージの安全性を保証
 */

const errorMessageSymbol = Symbol('ErrorMessage')

/**
 * エラーメッセージのブランデッド型
 * 通常の文字列と区別して、エラーメッセージであることを型レベルで保証
 */
export type ErrorMessage<ActualMessage extends string = string> = ActualMessage & {
  readonly [errorMessageSymbol]: unknown
}

/**
 * エラーメッセージを作成
 * 文字列をエラーメッセージ型に変換
 */
export const makeErrorMessage = <ActualMessage extends string>(
  actualMessage: ActualMessage,
): ErrorMessage<ActualMessage> =>
  actualMessage as ErrorMessage<ActualMessage>

/**
 * エラーメッセージを通常の文字列に変換
 */
export const extractErrorMessage = <T extends string>(
  errorMessage: ErrorMessage<T>,
): T => errorMessage as T

/**
 * エラーメッセージかどうかを判定
 */
export const isErrorMessage = (value: unknown): value is ErrorMessage => {
  if (typeof value !== 'string') return false
  // ブランデッド型の判定は実際には実行時にはできないため、文字列であることのみをチェック
  return true
}

/**
 * よく使用されるエラーメッセージの定数
 */
export const CommonErrors = {
  UNAUTHORIZED: makeErrorMessage('認証が必要です'),
  FORBIDDEN: makeErrorMessage('アクセス権限がありません'),
  NOT_FOUND: makeErrorMessage('リソースが見つかりません'),
  VALIDATION_ERROR: makeErrorMessage('入力値が正しくありません'),
  NETWORK_ERROR: makeErrorMessage('ネットワークエラーが発生しました'),
  SERVER_ERROR: makeErrorMessage('サーバーエラーが発生しました'),
  TIMEOUT: makeErrorMessage('タイムアウトしました'),
  UNKNOWN: makeErrorMessage('不明なエラーが発生しました'),
} as const

/**
 * HTTP ステータスコードからエラーメッセージを生成
 */
export const createHttpErrorMessage = (status: number): ErrorMessage => {
  switch (status) {
    case 400:
      return makeErrorMessage('リクエストが正しくありません')
    case 401:
      return CommonErrors.UNAUTHORIZED
    case 403:
      return CommonErrors.FORBIDDEN
    case 404:
      return CommonErrors.NOT_FOUND
    case 408:
      return CommonErrors.TIMEOUT
    case 422:
      return CommonErrors.VALIDATION_ERROR
    case 500:
      return CommonErrors.SERVER_ERROR
    case 502:
    case 503:
    case 504:
      return makeErrorMessage('サーバーが一時的に利用できません')
    default:
      return makeErrorMessage(`HTTPエラー (${status})`)
  }
}

/**
 * エラー型の詳細情報を含むエラークラス
 */
export class TypedError<T extends string = string> extends Error {
  readonly errorMessage: ErrorMessage<T>
  readonly code?: string
  readonly statusCode?: number
  readonly details?: Record<string, unknown>

  constructor(
    errorMessage: ErrorMessage<T>,
    options?: {
      code?: string
      statusCode?: number
      details?: Record<string, unknown>
      cause?: Error
    },
  ) {
    super(extractErrorMessage(errorMessage))
    this.name = 'TypedError'
    this.errorMessage = errorMessage
    this.code = options?.code
    this.statusCode = options?.statusCode
    this.details = options?.details

    if (options?.cause) {
      this.cause = options.cause
    }
  }
}

/**
 * 結果型 - 成功またはエラーを表現
 */
export type Result<T, E extends string = string>
  = | { success: true, data: T }
    | { success: false, error: ErrorMessage<E> }

/**
 * 成功結果を作成
 */
export const createSuccess = <T>(data: T): Result<T, never> => ({
  success: true,
  data,
})

/**
 * エラー結果を作成
 */
export const createError = <E extends string>(
  error: ErrorMessage<E>,
): Result<never, E> => ({
  success: false,
  error,
})

/**
 * 非同期関数を安全に実行し、Result型で結果を返す
 */
export const safeAsync = async <T, E extends string = string>(
  fn: () => Promise<T>,
  errorMapper?: (error: unknown) => ErrorMessage<E>,
): Promise<Result<T, E>> => {
  try {
    const data = await fn()
    return createSuccess(data)
  } catch (error) {
    const errorMessage = errorMapper
      ? errorMapper(error)
      : makeErrorMessage('予期しないエラーが発生しました') as ErrorMessage<E>
    return createError(errorMessage)
  }
}

/**
 * 同期関数を安全に実行し、Result型で結果を返す
 */
export const safeSync = <T, E extends string = string>(
  fn: () => T,
  errorMapper?: (error: unknown) => ErrorMessage<E>,
): Result<T, E> => {
  try {
    const data = fn()
    return createSuccess(data)
  } catch (error) {
    const errorMessage = errorMapper
      ? errorMapper(error)
      : makeErrorMessage('予期しないエラーが発生しました') as ErrorMessage<E>
    return createError(errorMessage)
  }
}
````

## File: layers/base/app/utils/response.ts
````typescript
import type { useFetch } from 'nuxt/dist/app/composables/fetch'
import type { FetchError } from 'ofetch'
import { z, ZodType, ZodTypeDef } from 'zod/v3'

export const statusSchema = z.union([z.literal('ok'), z.literal('ng')])

export const pagingSchema = z.object({
  limit: z.number(),
  offset: z.number(),
  total: z.number(),
})

export type ResponseStatus = z.infer<typeof statusSchema>
export type Paging = z.infer<typeof pagingSchema>

export const makeResponseSchema = <
  T extends Record<string, z.ZodType<unknown>>,
>(
  schemaObject: T,
) => z.object({ status: statusSchema }).extend(schemaObject)

export type AsyncDataResponse<T> = ReturnType<
  typeof useFetch<T, FetchError<unknown> | null>
>

export function isFetchError(x: unknown): x is FetchError<unknown> {
  return (
    typeof x === 'object'
    && !!x
    && 'name' in x
    && (x as { name: string }).name === 'FetchError'
  )
}
export const fetchErrorSchema = z.custom(isFetchError)

export function ensureAsyncDataOf<T>(
  responseSchema: ZodType<T, ZodTypeDef>,
  y: unknown,
): asserts y is AsyncDataResponse<T> {
  // 型ガードでオブジェクトかチェック
  if (typeof y !== 'object' || y === null) {
    throw new Error('Expected object with data and error properties')
  }

  const obj = y as Record<string, unknown>
  if (typeof obj.data !== 'object' || obj.data === null
    || typeof obj.error !== 'object' || obj.error === null) {
    throw new Error('Expected object with data and error properties')
  }

  const data = obj.data as Record<string, unknown>
  const error = obj.error as Record<string, unknown>
  // デバッグの便利のため型のどこが不整合になっているか情報を上げたいのでparse直接使用
  responseSchema.nullable().parse(data.value)
  fetchErrorSchema.nullable().parse(error.value)
}
export function requireAsyncDataOf<T>(
  x: ZodType<T, ZodTypeDef>,
  y: unknown,
): AsyncDataResponse<T> {
  ensureAsyncDataOf(x, y)
  return y
}
````

## File: layers/base/app/utils/url.ts
````typescript
/**
 * 型安全なルータークエリ処理ユーティリティ
 * Vue Routerのクエリパラメータを安全に取得・変換する
 */

/**
 * 数値クエリパラメータを安全に取得
 * クエリが存在しない場合はundefined、数値に変換できない場合はエラーを投げる
 */
export const getNumberRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): number | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined) return undefined

  const numberOrNaN = Number(stringValue)
  if (isNaN(numberOrNaN)) {
    throw new Error(`query '${name}' is neither a number nor undefined: ${stringValue}`)
  }
  return numberOrNaN
}

/**
 * route.queryから、stringのクエリを取得します。
 * この関数は対象の名前のクエリが存在しないか、対象の名前のクエリが複数ある場合は、エラーを投げます。
 * クエリが存在しない場合にエラーを投げたい場合は、getAltValueでエラーを投げてください。
 *
 * @example
 * ```ts
 * const route = useRoute() // http://example.com?page=1
 * const page = requireRouteQuery(route.query, 'page', () => '100', 'Invalid URL') // 1
 * ```
 *
 * @example
 * ```ts
 * const route = useRoute() // http://example.com
 * const page = requireRouteQuery(route.query, 'page', () => '1', 'Invalid URL') // 1
 * ```
 *
 * @example
 * ```ts
 * const route = useRoute() // http://example.com?page=1
 * const page = requireRouteQuery(route.query, 'page', () => raiseError('page query is not specified'), '') // throws Error
 * ```
 *
 * @see テスト
 */
export const requireRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
  getAltValue: () => string,
  errorMessage: string,
): string => {
  const value = query[name] ?? getAltValue()
  if (typeof value !== 'string') {
    throw new Error(errorMessage)
  }
  return value
}

/**
 * NOTE: getAltValueが戻り値をnumberでなくstring要求しているのが気になるが、今はそのままにしておく。（TODOという程でもないのでNOTE。）
 */
export const requireNumberRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
  getAltValue: () => string,
  errorMessage: string,
  errorMessageIfNotNumber: string = errorMessage,
): number => {
  const value = requireRouteQuery(query, name, getAltValue, errorMessage)
  const number = Number(value)
  if (isNaN(number)) {
    throw new Error(errorMessageIfNotNumber)
  }
  return number
}

/**
 * 文字列クエリパラメータを安全に取得
 * 配列の場合は最初の要素を返す
 */
export const getStringRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): string | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  return Array.isArray(value) ? value[0] ?? undefined : value ?? undefined
}

/**
 * ブール値クエリパラメータを安全に取得
 * 'true', '1', 'yes', 'on' を true として扱う
 */
export const getBooleanRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): boolean | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined || stringValue === null) return undefined

  const lowerValue = stringValue.toLowerCase()
  return lowerValue === 'true' || lowerValue === '1' || lowerValue === 'yes' || lowerValue === 'on'
}

/**
 * 配列クエリパラメータを安全に取得
 * 単一値の場合は配列に変換、存在しない場合は空配列を返す
 */
export const getArrayRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): string[] => {
  const value = query[name]
  if (value === undefined) return []

  return Array.isArray(value) ? value.filter(v => v !== undefined && v !== null) : value ? [value] : []
}

/**
 * 日付クエリパラメータを安全に取得
 * ISO文字列またはタイムスタンプから Date オブジェクトを作成
 */
export const getDateRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): Date | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined || stringValue === null) return undefined

  const date = new Date(stringValue)
  if (isNaN(date.getTime())) {
    throw new Error(`query '${name}' is not a valid date: ${stringValue}`)
  }
  return date
}

/**
 * 列挙型クエリパラメータを安全に取得
 * 指定された値の配列に含まれる場合のみ返す
 */
export const getEnumRouteQuery = <T extends string>(
  query: ReturnType<typeof useRoute>['query'],
  name: string,
  allowedValues: readonly T[],
): T | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined || stringValue === null) return undefined

  if (!allowedValues.includes(stringValue as T)) {
    throw new Error(`query '${name}' must be one of [${allowedValues.join(', ')}], but got: ${stringValue}`)
  }
  return stringValue as T
}

/**
 * 複数のクエリパラメータを一度に取得
 * 型安全なクエリオブジェクトを返す
 */
export const getRouteQueries = <T extends Record<string, unknown>>(
  query: ReturnType<typeof useRoute>['query'],
  schema: {
    [K in keyof T]: {
      type: 'string' | 'number' | 'boolean' | 'array' | 'date' | 'enum'
      required?: boolean
      allowedValues?: readonly string[]
    }
  },
): Partial<T> => {
  const result: Partial<T> = {}

  for (const [key, config] of Object.entries(schema)) {
    try {
      let value: string | number | boolean | string[] | Date | undefined

      switch (config.type) {
        case 'string':
          value = getStringRouteQuery(query, key)
          break
        case 'number':
          value = getNumberRouteQuery(query, key)
          break
        case 'boolean':
          value = getBooleanRouteQuery(query, key)
          break
        case 'array':
          value = getArrayRouteQuery(query, key)
          break
        case 'date':
          value = getDateRouteQuery(query, key)
          break
        case 'enum':
          if (!config.allowedValues) {
            throw new Error(`enum type requires allowedValues for key: ${key}`)
          }
          value = getEnumRouteQuery(query, key, config.allowedValues)
          break
        default:
          throw new Error(`unknown query type: ${config.type}`)
      }

      if (value !== undefined) {
        result[key as keyof T] = value as T[keyof T]
      } else if (config.required) {
        throw new Error(`required query parameter '${key}' is missing`)
      }
    } catch (error) {
      if (config.required) {
        throw error
      }
      // 必須でない場合はエラーを無視してundefinedのまま
    }
  }

  return result
}
````

## File: layers/base/app/utils/zod.ts
````typescript
import { DeepReadonly } from 'vue'
import {
  z,
  ZodFirstPartyTypeKind,
  ZodStringDef,
  ZodType,
  ZodTypeDef,
  ZodUnionDef,
} from 'zod/v3'

export function isValueOf<T>(x: ZodType<T, ZodTypeDef>, y: unknown): y is T {
  return x.safeParse(y).success
}

export function ensureValueOf<T>(
  x: ZodType<T, ZodTypeDef>,
  y: unknown,
): asserts y is T {
  x.parse(y)
}

export function requireValueOf<T>(x: ZodType<T, ZodTypeDef>, y: unknown): T {
  return x.parse(y)
}

// const language = { 0: 'ja', 1: 'en'} as const みたいなオブジェクトのValueのunion型をzodでつかえるようにするメソッド
export function objectToValueArray<T>(obj: { [key: number]: T }): [T, ...T[]] {
  const first = obj[0]
  if (first === undefined) {
    throw new Error('objectToValueArray: obj[0] is undefined.')
  }

  //  z.enumは空でない配列を期待するので、それを回避するために
  return [
    first,
    ...Object.values(obj)
      .slice(1)
      .map(v => v),
  ]
}

/**
 * 雑多に整数値を表す。
 */
export const integral = z.number().or(z.string())

/** z.infer した結果に readonly を付けるためのヘルパー。渡した objectSchema 以上の検証はしない */
export const makeSchemaReadOnly = <T>(objectSchema: ZodType<T, ZodTypeDef>) =>
  z.custom<Readonly<T>>(x => objectSchema.safeParse(x).success)

/** z.infer した結果に再帰的に readonly を付けるためのヘルパー。渡した objectSchema 以上の検証はしない */
export const makeSchemaDeepReadOnly = <T>(
  objectSchema: ZodType<T, ZodTypeDef>,
) => z.custom<DeepReadonly<T>>(x => objectSchema.safeParse(x).success)

/**
 * maxバリデーションの数値を取得
 *
 * ```typescript
 * getMax(z.string().max(30)._def) // 30
 *
 * // .max()の指定がないスキーマ
 * getMax(z.string()._def) // undefined
 * ```
 */
export const getMax = (def: ZodTypeDef | undefined): number | undefined => {
  if (!def) return undefined

  const zodTypeDefSchema = z.object({
    errorMap: z.unknown().optional(),
    description: z.string().optional(),
    typeName: z.string(),
  })
  const zodStringDefSchema = z.custom<ZodStringDef>((x: unknown) => {
    const result = zodTypeDefSchema.safeParse(x)
    if (!result.success) return false
    return result.data.typeName === String(ZodFirstPartyTypeKind.ZodString)
  })
  const zodUnionDefSchema = z.custom<ZodUnionDef>((x: unknown) => {
    const result = zodTypeDefSchema.safeParse(x)
    if (!result.success) return false
    return result.data.typeName === String(ZodFirstPartyTypeKind.ZodUnion)
  })
  const tryGetValue = (x: object | undefined): number | undefined => {
    const result = z.object({ value: z.number() }).safeParse(x)
    return result.success ? result.data.value : undefined
  }

  const resultUnion = zodUnionDefSchema.safeParse(def)
  if (resultUnion.success)
    return resultUnion.data.options
      .map(({ _def }) => getMax(_def))
      .find((n: number | undefined) => n)

  const resultString = zodStringDefSchema.safeParse(def)
  if (resultString.success)
    return tryGetValue(
      resultString.data.checks.find(({ kind }) => kind === 'max'),
    )

  return undefined
}

/**
 * @see {@link Self}
 * 意図的にexportしていない。
 * Self型に具体的にアクセスされたくないため。
 */
const selfKey = Symbol()

/**
 * 疑似的に自己参照を表現するための型。
 * （これ自体は自己参照ではない。示しているだけ。）
 */
export type Self = { [selfKey]: string }

/**
 * Tの中のSelfをTT[0]で置き換える。
 * ```ts
 * type T = ReplaceSelf<{ a: { b: Self } }, [number]> // { a: { b: number } }
 * ```
 */
/*
 * TTが直接型を受け取るのではなく、1次元タプルとして受け取るのは、TypeScriptの再帰型を許すためです。
 * ```ts
 * type F<_> = number
 * type X = F<X> // これはTypeScriptではできない
 * type X = F<[X]> // これはTypeScriptではできる
 * ```
 */
type ReplaceSelf<T, TT extends [unknown]> = T extends Self
  ? TT[0]
  : T extends Record<string, unknown>
    ? { [K in keyof T]: ReplaceSelf<T[K], TT> }
    : T

/**
 * 再帰的なスキーマを作成する。
 * https://zenn.dev/odiak/articles/0b963664a4f8cd
 *
 * @example
 * ```ts
 * const treeSchema = makeRecursiveSchema((self) =>
 *   z.union([
 *     z.object({ type: z.literal('leaf'), value: z.string() }),
 *     z.object({ type: z.literal('branch'), children: self.array() })
 *   ])
 * )
 * ```
 *
 * さらなる使い方はテストを見てください。
 */
export function makeRecursiveSchema<T>(
  builder: (self: ZodType<Self>) => ZodType<T>,
) {
  /*
   * type Item = {
   *   name: string
   *   addtionalItems: Self[]
   * }
   * みたいなやつを
   * type Item = {
   *   name: string
   *   addtionalItems: Item[]
   * }
   * みたいなやつに置き換えている。
   * つまり疑似的な再帰型（T）を、実際の再帰型（R）に変換している。
   */
  type R = ReplaceSelf<T, [R]>

  // 疑似的な再帰型スキーマビルダー（builder）を、実際の再帰型スキーマビルダー（builder_）に変換している。
  const builder_ = builder as (self: ZodType<R>) => ZodType<T>

  // 再帰をぶん回して
  const rec = (): ZodType<R> => builder_(z.lazy(rec)) as unknown as ZodType<R>
  return rec()
}
````

## File: layers/base/app/utils/file-control.ts
````typescript
/**
 * @param {File} file
 * @returns {string}
 * @description fileオブジェクトをimgタグで表示させたいときに使う
 */
export function readFileAsBlob(file: File): string {
  const imgEl = new Image()
  imgEl.src = URL.createObjectURL(file)
  imgEl.onload = () => {
    URL.revokeObjectURL(imgEl.src)
  }
  return imgEl.src
}

/**
 * blobのtypeから拡張子取得
 * @param {string} type - MIMEタイプ (例: "image/png")
 * @returns {string} 拡張子 (例: ".png")
 * @description MIMEタイプからファイル拡張子を取得する
 */
export const getExtFromType = (type: string): string => '.' + type.split('/')[1]

/**
 * fileからbase64取得
 * @param {File} file - 変換するFileオブジェクト
 * @returns {Promise<string | undefined>} base64エンコードされたデータURL、エラー時にはundefined
 * @description Fileオブジェクトからbase64エンコードされたデータURLを取得する
 */
export const getBase64ByFile = (file: File): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    // 画像のBufferを取得してemit
    reader.onload = (e) => {
      const result = e?.target?.result
      if (typeof result !== 'string') {
        reject(new TypeError('Failed to get base64'))
        return
      }
      resolve(result)
    }

    reader.readAsDataURL(file)
  })
}

/**
 * base64テキストからFileオブジェクトを生成
 * @param {string} base64 - dataURL形式のbase64文字列
 * @param {string} [fileName] - ファイル名（省略時は'file'）
 * @returns {File | null} 生成されたFileオブジェクト、失敗時はnull
 */
export const getFileByBase64 = (base64: string, fileName: string = 'file'): File | null => {
  const arr = base64.split(',')
  if (arr.length < 2) return null
  const mimeMatch = arr[0]?.match(/:(.*?);/)
  const mime = mimeMatch && mimeMatch[1] ? mimeMatch[1] : 'image/png'
  if (!arr[1]) return null
  try {
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], fileName, { type: mime })
  } catch (error) {
    console.error(error)
    return null
  }
}
````
