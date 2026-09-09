This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.

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
- Only files matching these patterns are included: layers/base/app/test/**/*
- Files matching these patterns are excluded: layers/base/app/test/components/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  base/
    app/
      test/
        composables/
          node-with-element-environment.ts
          use-strict-i18n.spec.ts
          useCustomIntersectionObserver.spec.ts
          useDefaultApi.spec.ts
          useExample.spec.ts
          useLocale.server.spec.ts
          useLocale.spec.ts
          useSocialShareLink.spec.ts
          useToast.spec.ts
          useValidationRules.spec.ts
        config/
          base-config.spec.ts
        e2e/
          sample.spec.ts
        i18n/
          i18n-config.spec.ts
        mock-icons/
          ri/
            close-line.js
          index.js
        mocks/
          imports.ts
        models/
          error-message.spec.ts
          json.spec.ts
          vue.ts
        repositories/
          exampleRepository.spec.ts
        utils/
          types/
            types.spec.ts
          anchor.spec.ts
          array.spec.ts
          console.spec.ts
          constant.spec.ts
          date-control.spec.ts
          default-api.spec.ts
          default-factory.spec.ts
          environment.spec.ts
          error.spec.ts
          file-control.spec.ts
          i18n.spec.ts
          image.spec.ts
          object.spec.ts
          response.spec.ts
          sleep.spec.ts
          storage-control.spec.ts
          token.spec.ts
          tuple.spec.ts
          url.spec.ts
          uuid.spec.ts
          vue-reactive.spec.ts
          zod.spec.ts
        app-and-nuxt.spec.ts
        mock-close-icon.js
        setup.ts
```

# Files

## File: layers/base/app/test/composables/node-with-element-environment.ts
````typescript
import type { Environment } from 'vitest/environments'
import { builtinEnvironments } from 'vitest/environments'

export default <Environment>{
  ...builtinEnvironments.node,
  name: 'node-with-element',
  viteEnvironment: 'ssr',
  async setup(global, options) {
    const result = await builtinEnvironments.node.setup(global, options)
    Object.defineProperty(global, 'HTMLElement', {
      configurable: true,
      value: class HTMLElement {
        readonly nodeElement = true
      },
    })
    return result
  },
}
````

## File: layers/base/app/test/composables/use-strict-i18n.spec.ts
````typescript
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  I18nTKeyMissingError,
  useStrictI18n,
} from '#base/app/composables/use-strict-i18n'

const { mockUseI18n } = vi.hoisted(() => ({
  mockUseI18n: vi.fn(),
}))

vi.mock('vue-i18n', async importOriginal => ({
  ...await importOriginal<typeof import('vue-i18n')>(),
  useI18n: mockUseI18n,
}))

describe('useStrictI18n', () => {
  beforeEach(() => {
    mockUseI18n.mockReset()
  })

  it('preserves options and returns the useI18n result', () => {
    const i18n = { t: vi.fn(), locale: { value: 'ja' } }
    mockUseI18n.mockReturnValue(i18n)

    const result = useStrictI18n({ locale: 'ja', fallbackLocale: 'en' })

    expect(result).toBe(i18n)
    expect(mockUseI18n).toHaveBeenCalledWith({
      locale: 'ja',
      fallbackLocale: 'en',
      missing: expect.any(Function),
    })
  })

  it('supports omitted options and throws a descriptive missing-key error', () => {
    useStrictI18n()
    const options = mockUseI18n.mock.calls[0]?.[0]

    expect(() => options.missing('en', 'missing.key')).toThrow(
      new I18nTKeyMissingError('key \'missing.key\' is not found in locale \'en\''),
    )
  })
})
````

## File: layers/base/app/test/composables/useCustomIntersectionObserver.spec.ts
````typescript
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import useCustomIntersectionObserver from '#base/app/composables/useCustomIntersectionObserver'

type ObserverCallback = ConstructorParameters<typeof IntersectionObserver>[0]

const callbacks: ObserverCallback[] = []
const observe = vi.fn()
const unobserve = vi.fn()
const IntersectionObserverMock = vi.fn(class {
  disconnect = vi.fn()
  observe = observe
  takeRecords = vi.fn()
  unobserve = unobserve

  constructor(callback: ObserverCallback) {
    callbacks.push(callback)
  }
})

const entry = (target: Element, isIntersecting: boolean) => ({
  target,
  isIntersecting,
}) as IntersectionObserverEntry

beforeEach(() => {
  callbacks.length = 0
  observe.mockClear()
  unobserve.mockClear()
  IntersectionObserverMock.mockClear()
  vi.useFakeTimers()
  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('doObserve', () => {
  it('observes with defaults and performs the default delayed in action', () => {
    const element = document.createElement('div')
    const inAction = vi.fn()

    useCustomIntersectionObserver().doObserve([{ element, inAction }])
    callbacks[0]?.([entry(element, true)], {} as IntersectionObserver)

    expect(IntersectionObserverMock).toHaveBeenCalledWith(
      expect.any(Function),
      { root: null, rootMargin: '0px', threshold: 0.1 },
    )
    expect(observe).toHaveBeenCalledWith(element)
    expect(inAction).not.toHaveBeenCalled()
    vi.advanceTimersByTime(300)
    expect(inAction).toHaveBeenCalledOnce()
    expect(element.classList.contains('-intersecting')).toBe(true)
    expect(unobserve).not.toHaveBeenCalled()
  })

  it('supports custom options, staggered delay, class, once, and exit action', () => {
    const first = document.createElement('div')
    const second = document.createElement('div')
    const firstIn = vi.fn()
    const secondIn = vi.fn()
    const outAction = vi.fn()
    const options = { root: first, rootMargin: '2px', threshold: 1 }

    useCustomIntersectionObserver().doObserve([
      { element: first, once: true, delay: 0, inAction: firstIn },
      {
        element: second,
        once: true,
        delay: 20,
        inAction: secondIn,
        outAction,
        intersectingClass: 'visible',
      },
    ], options)

    callbacks[0]?.([entry(first, true)], {} as IntersectionObserver)
    callbacks[1]?.([entry(second, true)], {} as IntersectionObserver)
    vi.advanceTimersByTime(0)
    expect(firstIn).toHaveBeenCalledOnce()
    expect(unobserve).toHaveBeenCalledWith(first)
    expect(secondIn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(20)
    expect(secondIn).toHaveBeenCalledOnce()
    expect(second.classList.contains('visible')).toBe(true)
    expect(unobserve).toHaveBeenCalledWith(second)

    callbacks[1]?.([entry(second, false)], {} as IntersectionObserver)
    expect(outAction).toHaveBeenCalledOnce()
    expect(second.classList.contains('visible')).toBe(false)
  })

  it('allows omitted actions when leaving the viewport', () => {
    const element = document.createElement('div')
    element.classList.add('-intersecting')
    useCustomIntersectionObserver().doObserve([{ element }])

    callbacks[0]?.([entry(element, false)], {} as IntersectionObserver)

    expect(element.classList.contains('-intersecting')).toBe(false)
  })
})
````

## File: layers/base/app/test/composables/useLocale.server.spec.ts
````typescript
// @vitest-environment ./app/test/composables/node-with-element-environment.ts

import { expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { useLocale } from '#base/app/composables/useLocale'

vi.mock('nuxt/app', async importOriginal => ({
  ...await importOriginal<typeof import('nuxt/app')>(),
  useRequestHeaders: vi.fn(() => ({
    'accept-language': 'en-US,en;q=0.9',
  })),
}))

vi.mock('#base/app/utils/storage-control', async importOriginal => ({
  ...await importOriginal<typeof import('#base/app/utils/storage-control')>(),
  getSingleCookieValue: vi.fn(() => null),
}))

vi.mock('vue-i18n', () => ({
  createI18n: vi.fn(() => ({ global: {}, mode: 'composition' })),
  useI18n: vi.fn(() => ({ locale: ref('ja') })),
}))

vi.mock('@vee-validate/i18n', () => ({ setLocale: vi.fn() }))

it('uses the request language during server rendering', () => {
  expect(useLocale().getDefaultLanguage()).toBe('en')
})
````

## File: layers/base/app/test/config/base-config.spec.ts
````typescript
import { afterEach, describe, expect, it, vi } from 'vitest'
import { getAppConfigOfEnvType } from '#base/config/appConfig'
import {
  allEnvTypes,
  ensureEnvType,
  isEnvType,
  readEnvType,
} from '#base/config/models/EnvType'

describe('EnvType', () => {
  it.each(allEnvTypes)('accepts %s', (envType) => {
    expect(isEnvType(envType)).toBe(true)
    expect(() => ensureEnvType(envType)).not.toThrow()
    expect(readEnvType({ VITE_OUTPUT_ENV: envType })).toBe(envType)
  })

  it('rejects values outside EnvType', () => {
    expect(isEnvType('preview')).toBe(false)
    expect(isEnvType(undefined)).toBe(false)
    expect(() => ensureEnvType('preview')).toThrow(
      new TypeError('Not an EnvType.'),
    )
    expect(() => readEnvType({ VITE_OUTPUT_ENV: 'preview' })).toThrow(TypeError)
  })

  it('defaults to local and reports a missing variable', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(readEnvType({})).toBe('local')
    expect(error).toHaveBeenCalledWith('No VITE_OUTPUT_ENV is set.')
  })
})

describe('appConfig', () => {
  it.each(allEnvTypes)('builds %s config', (envType) => {
    expect(getAppConfigOfEnvType(envType, { SAMPLE: 'value' })).toEqual({})
  })
})

describe('runtimeConfig', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it.each([
    ['local', 'http://localhost:3000', 'http://localhost:3003'],
    ['development', 'http://localhost:3000', undefined],
    ['staging', '', undefined],
    ['production', '', undefined],
  ] as const)('builds %s config', async (envType, url, httpBinUrl) => {
    const { getRuntimeConfigOfEnvType } = await import('#base/config/runtimeConfig')
    const config = getRuntimeConfigOfEnvType(envType, {})

    expect(config.public.outputEnv).toBe(envType)
    expect(config.public.url).toBe(url)
    expect(config.public.baseUrl).toBe(url)
    expect(config.public.apiPrefix).toBe('/api/v1')
    expect(
      'httpBinUrl' in config.public ? config.public.httpBinUrl : undefined,
    ).toBe(httpBinUrl)
  })

  it('uses NUXT_API_PREFIX when supplied', async () => {
    vi.stubEnv('NUXT_API_PREFIX', '/custom')
    vi.resetModules()
    const { getRuntimeConfigOfEnvType } = await import('#base/config/runtimeConfig')

    expect(getRuntimeConfigOfEnvType('local', {}).public.apiPrefix).toBe('/custom')
  })
})
````

## File: layers/base/app/test/i18n/i18n-config.spec.ts
````typescript
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { cookieValue } = vi.hoisted(() => ({
  cookieValue: { value: undefined as string | undefined },
}))

vi.mock('universal-cookie', () => ({
  default: class CookiesMock {
    get() {
      return cookieValue.value
    }
  },
}))

const originalClient = Object.getOwnPropertyDescriptor(process, 'client')

const loadConfig = async ({
  client,
  language,
  cookie,
}: {
  client: boolean
  language?: string
  cookie?: string
}) => {
  Object.defineProperty(process, 'client', {
    configurable: true,
    value: client,
  })
  cookieValue.value = cookie
  vi.stubGlobal('navigator', language === undefined ? undefined : { language })
  vi.resetModules()
  return import('#base/i18n/i18n.config')
}

beforeEach(() => {
  cookieValue.value = undefined
})

afterEach(() => {
  vi.unstubAllGlobals()
  if (originalClient) {
    Object.defineProperty(process, 'client', originalClient)
  } else {
    Reflect.deleteProperty(process, 'client')
  }
  vi.resetModules()
})

describe('i18n config locale selection', () => {
  it.each([
    [{ client: false, language: 'en-US' }, 'ja'],
    [{ client: true, language: 'fr-FR', cookie: 'ja' }, 'ja'],
    [{ client: true, language: 'ja-JP', cookie: 'en' }, 'en'],
    [{ client: true, language: 'ja-JP' }, 'ja'],
    [{ client: true, language: 'en-US' }, 'en'],
    [{ client: true, language: 'fr-FR' }, 'ja'],
    [{ client: true }, 'ja'],
  ] as const)('selects $1 for %o', async (input, expected) => {
    const config = await loadConfig(input)
    const detectBrowserLanguage
      = config.nuxtI18nOptions.detectBrowserLanguage
    if (!detectBrowserLanguage || typeof detectBrowserLanguage !== 'object') {
      throw new TypeError('detectBrowserLanguage must be configured')
    }

    expect(config.nuxtI18nOptions.defaultLocale).toBe(expected)
    expect(detectBrowserLanguage.fallbackLocale).toBe(
      expected,
    )
    expect(config.default.locale).toBe(expected)
    expect(config.default.messages).toHaveProperty('ja')
    expect(config.default.messages).toHaveProperty('en')
  })
})
````

## File: layers/base/app/test/mock-icons/ri/close-line.js
````javascript
export default {
  name: 'RiCloseLine',
  template: '<svg class="icon"><path /></svg>',
  props: ['class'],
}
````

## File: layers/base/app/test/mock-icons/index.js
````javascript
export default {
  name: 'MockIcon',
  template: '<svg class="icon"><path /></svg>',
  props: ['class'],
}
````

## File: layers/base/app/test/mocks/imports.ts
````typescript
/*
 * Mock for #imports alias used in Nuxt 4 auto-imports
 * Re-export global mocks defined in setup.ts via vi.mock
 */
// These are now handled by vi.mock in setup.ts
````

## File: layers/base/app/test/models/error-message.spec.ts
````typescript
import { describe, expect, it, vi } from 'vitest'
import {
  makeErrorMessage,
  extractErrorMessage,
  isErrorMessage,
  CommonErrors,
  createHttpErrorMessage,
  TypedError,
  createSuccess,
  createError,
  safeAsync,
  safeSync,
} from '#base/app/models/error-message'

describe('error-message', () => {
  describe('makeErrorMessage', () => {
    it('文字列をErrorMessage型に変換できる', () => {
      const message = 'テストエラー'
      const errorMessage = makeErrorMessage(message)

      expect(typeof errorMessage).toBe('string')
      expect(errorMessage).toBe(message)
    })

    it('空文字列も変換できる', () => {
      const message = ''
      const errorMessage = makeErrorMessage(message)

      expect(errorMessage).toBe('')
    })
  })

  describe('extractErrorMessage', () => {
    it('ErrorMessage型から文字列を抽出できる', () => {
      const originalMessage = 'テストエラー'
      const errorMessage = makeErrorMessage(originalMessage)
      const extracted = extractErrorMessage(errorMessage)

      expect(extracted).toBe(originalMessage)
      expect(typeof extracted).toBe('string')
    })
  })

  describe('isErrorMessage', () => {
    it('文字列の場合はtrueを返す', () => {
      expect(isErrorMessage('エラーメッセージ')).toBe(true)
      expect(isErrorMessage('')).toBe(true)
    })

    it('文字列以外の場合はfalseを返す', () => {
      expect(isErrorMessage(123)).toBe(false)
      expect(isErrorMessage(null)).toBe(false)
      expect(isErrorMessage(undefined)).toBe(false)
      expect(isErrorMessage({})).toBe(false)
      expect(isErrorMessage([])).toBe(false)
      expect(isErrorMessage(true)).toBe(false)
    })
  })

  describe('CommonErrors', () => {
    it('定義済みのエラーメッセージが正しく設定されている', () => {
      expect(extractErrorMessage(CommonErrors.UNAUTHORIZED)).toBe('認証が必要です')
      expect(extractErrorMessage(CommonErrors.FORBIDDEN)).toBe('アクセス権限がありません')
      expect(extractErrorMessage(CommonErrors.NOT_FOUND)).toBe('リソースが見つかりません')
      expect(extractErrorMessage(CommonErrors.VALIDATION_ERROR)).toBe('入力値が正しくありません')
      expect(extractErrorMessage(CommonErrors.NETWORK_ERROR)).toBe('ネットワークエラーが発生しました')
      expect(extractErrorMessage(CommonErrors.SERVER_ERROR)).toBe('サーバーエラーが発生しました')
      expect(extractErrorMessage(CommonErrors.TIMEOUT)).toBe('タイムアウトしました')
      expect(extractErrorMessage(CommonErrors.UNKNOWN)).toBe('不明なエラーが発生しました')
    })
  })

  describe('createHttpErrorMessage', () => {
    it('400の場合は適切なメッセージを返す', () => {
      const errorMessage = createHttpErrorMessage(400)
      expect(extractErrorMessage(errorMessage)).toBe('リクエストが正しくありません')
    })

    it('401の場合はCommonErrors.UNAUTHORIZEDを返す', () => {
      const errorMessage = createHttpErrorMessage(401)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.UNAUTHORIZED))
    })

    it('403の場合はCommonErrors.FORBIDDENを返す', () => {
      const errorMessage = createHttpErrorMessage(403)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.FORBIDDEN))
    })

    it('404の場合はCommonErrors.NOT_FOUNDを返す', () => {
      const errorMessage = createHttpErrorMessage(404)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.NOT_FOUND))
    })

    it('408の場合はCommonErrors.TIMEOUTを返す', () => {
      const errorMessage = createHttpErrorMessage(408)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.TIMEOUT))
    })

    it('422の場合はCommonErrors.VALIDATION_ERRORを返す', () => {
      const errorMessage = createHttpErrorMessage(422)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.VALIDATION_ERROR))
    })

    it('500の場合はCommonErrors.SERVER_ERRORを返す', () => {
      const errorMessage = createHttpErrorMessage(500)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.SERVER_ERROR))
    })

    it('502,503,504の場合は一時的利用不可メッセージを返す', () => {
      const expected = 'サーバーが一時的に利用できません'

      expect(extractErrorMessage(createHttpErrorMessage(502))).toBe(expected)
      expect(extractErrorMessage(createHttpErrorMessage(503))).toBe(expected)
      expect(extractErrorMessage(createHttpErrorMessage(504))).toBe(expected)
    })

    it('未定義のステータスコードの場合はデフォルトメッセージを返す', () => {
      const errorMessage = createHttpErrorMessage(999)
      expect(extractErrorMessage(errorMessage)).toBe('HTTPエラー (999)')
    })
  })

  describe('TypedError', () => {
    it('基本的なエラーを作成できる', () => {
      const errorMessage = makeErrorMessage('テストエラー')
      const error = new TypedError(errorMessage)

      expect(error.name).toBe('TypedError')
      expect(error.message).toBe('テストエラー')
      expect(error.errorMessage).toBe(errorMessage)
      expect(error instanceof Error).toBe(true)
    })

    it('オプション付きでエラーを作成できる', () => {
      const errorMessage = makeErrorMessage('テストエラー')
      const options = {
        code: 'TEST_ERROR',
        statusCode: 400,
        details: { field: 'value' },
        cause: new Error('原因エラー'),
      }
      const error = new TypedError(errorMessage, options)

      expect(error.code).toBe('TEST_ERROR')
      expect(error.statusCode).toBe(400)
      expect(error.details).toEqual({ field: 'value' })
      expect(error.cause).toBeInstanceOf(Error)
    })

    it('オプションなしでもエラーを作成できる', () => {
      const errorMessage = makeErrorMessage('シンプルエラー')
      const error = new TypedError(errorMessage)

      expect(error.code).toBeUndefined()
      expect(error.statusCode).toBeUndefined()
      expect(error.details).toBeUndefined()
      expect(error.cause).toBeUndefined()
    })
  })

  describe('createSuccess', () => {
    it('成功結果を作成できる', () => {
      const data = { id: 1, name: 'test' }
      const result = createSuccess(data)

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(data)
      }
    })

    it('nullやundefinedも成功結果として扱える', () => {
      const nullResult = createSuccess(null)
      const undefinedResult = createSuccess(undefined)

      expect(nullResult.success).toBe(true)
      if (nullResult.success) {
        expect(nullResult.data).toBe(null)
      }
      expect(undefinedResult.success).toBe(true)
      if (undefinedResult.success) {
        expect(undefinedResult.data).toBe(undefined)
      }
    })
  })

  describe('createError', () => {
    it('エラー結果を作成できる', () => {
      const errorMessage = makeErrorMessage('テストエラー')
      const result = createError(errorMessage)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe(errorMessage)
      }
    })
  })

  describe('safeAsync', () => {
    it('成功した場合は成功結果を返す', async () => {
      const mockFn = vi.fn().mockResolvedValue('成功データ')

      const result = await safeAsync(mockFn)

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('成功データ')
      }
      expect(mockFn).toHaveBeenCalledOnce()
    })

    it('エラーが発生した場合はエラー結果を返す', async () => {
      const mockFn = vi.fn().mockRejectedValue(new Error('テストエラー'))

      const result = await safeAsync(mockFn)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('予期しないエラーが発生しました')
      }
    })

    it('カスタムエラーマッパーを使用できる', async () => {
      const mockFn = vi.fn().mockRejectedValue(new Error('元のエラー'))
      const errorMapper = vi.fn().mockReturnValue(makeErrorMessage('カスタムエラー'))

      const result = await safeAsync(mockFn, errorMapper)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('カスタムエラー')
      }
      expect(errorMapper).toHaveBeenCalledWith(expect.any(Error))
    })
  })

  describe('safeSync', () => {
    it('成功した場合は成功結果を返す', () => {
      const mockFn = vi.fn().mockReturnValue('成功データ')

      const result = safeSync(mockFn)

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('成功データ')
      }
      expect(mockFn).toHaveBeenCalledOnce()
    })

    it('エラーが発生した場合はエラー結果を返す', () => {
      const mockFn = vi.fn().mockImplementation(() => {
        throw new Error('テストエラー')
      })

      const result = safeSync(mockFn)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('予期しないエラーが発生しました')
      }
    })

    it('カスタムエラーマッパーを使用できる', () => {
      const mockFn = vi.fn().mockImplementation(() => {
        throw new Error('元のエラー')
      })
      const errorMapper = vi.fn().mockReturnValue(makeErrorMessage('カスタムエラー'))

      const result = safeSync(mockFn, errorMapper)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('カスタムエラー')
      }
      expect(errorMapper).toHaveBeenCalledWith(expect.any(Error))
    })
  })
})
````

## File: layers/base/app/test/models/json.spec.ts
````typescript
import { describe, expect, it } from 'vitest'
import { jsonSchema, type Json } from '#base/app/models/json'

describe('json', () => {
  describe('jsonSchema - プリミティブ値', () => {
    it('文字列を受け入れる', () => {
      const result = jsonSchema.safeParse('test string')
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('test string')
      }
    })

    it('空文字列を受け入れる', () => {
      const result = jsonSchema.safeParse('')
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('')
      }
    })

    it('数値を受け入れる', () => {
      const result = jsonSchema.safeParse(42)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(42)
      }
    })

    it('ゼロを受け入れる', () => {
      const result = jsonSchema.safeParse(0)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(0)
      }
    })

    it('負の数値を受け入れる', () => {
      const result = jsonSchema.safeParse(-123)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(-123)
      }
    })

    it('小数点を受け入れる', () => {
      const result = jsonSchema.safeParse(3.14)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(3.14)
      }
    })

    it('真偽値trueを受け入れる', () => {
      const result = jsonSchema.safeParse(true)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(true)
      }
    })

    it('真偽値falseを受け入れる', () => {
      const result = jsonSchema.safeParse(false)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(false)
      }
    })

    it('nullを受け入れる', () => {
      const result = jsonSchema.safeParse(null)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(null)
      }
    })
  })

  describe('jsonSchema - オブジェクト', () => {
    it('空のオブジェクトを受け入れる', () => {
      const result = jsonSchema.safeParse({})
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual({})
      }
    })

    it('シンプルなオブジェクトを受け入れる', () => {
      const obj = { name: 'test', age: 25 }
      const result = jsonSchema.safeParse(obj)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(obj)
      }
    })

    it('すべてのプリミティブ型を含むオブジェクトを受け入れる', () => {
      const obj = {
        str: 'string',
        num: 42,
        bool: true,
        nil: null,
      }
      const result = jsonSchema.safeParse(obj)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(obj)
      }
    })

    it('ネストしたオブジェクトを受け入れる', () => {
      const obj = {
        user: {
          profile: {
            name: 'John',
            age: 30,
          },
          settings: {
            theme: 'dark',
            notifications: true,
          },
        },
      }
      const result = jsonSchema.safeParse(obj)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(obj)
      }
    })
  })

  describe('jsonSchema - 配列', () => {
    it('空の配列を受け入れる', () => {
      const result = jsonSchema.safeParse([])
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual([])
      }
    })

    it('プリミティブ値の配列を受け入れる', () => {
      const arr = [1, 2, 3]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })

    it('混合型の配列を受け入れる', () => {
      const arr = ['string', 42, true, null]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })

    it('オブジェクトを含む配列を受け入れる', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })

    it('ネストした配列を受け入れる', () => {
      const arr = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [true, false, null],
      ]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })
  })

  describe('jsonSchema - 複合構造', () => {
    it('配列とオブジェクトの複合構造を受け入れる', () => {
      const data = {
        users: [
          {
            id: 1,
            name: 'Alice',
            tags: ['admin', 'active'],
            metadata: {
              created: '2023-01-01',
              lastLogin: null,
            },
          },
          {
            id: 2,
            name: 'Bob',
            tags: ['user'],
            metadata: {
              created: '2023-01-02',
              lastLogin: '2023-12-01',
            },
          },
        ],
        pagination: {
          total: 2,
          page: 1,
          hasNext: false,
        },
      }
      const result = jsonSchema.safeParse(data)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(data)
      }
    })

    it('深くネストした構造を受け入れる', () => {
      const data = {
        level1: {
          level2: {
            level3: {
              level4: {
                value: 'deep',
              },
            },
          },
        },
      }
      const result = jsonSchema.safeParse(data)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(data)
      }
    })
  })

  describe('jsonSchema - 無効な値', () => {
    it('undefinedを拒否する', () => {
      const result = jsonSchema.safeParse(undefined)
      expect(result.success).toBe(false)
    })

    it('Symbolを拒否する', () => {
      const result = jsonSchema.safeParse(Symbol('test'))
      expect(result.success).toBe(false)
    })

    it('関数を拒否する', () => {
      const result = jsonSchema.safeParse(() => {})
      expect(result.success).toBe(false)
    })

    it('Dateオブジェクトを拒否する', () => {
      const result = jsonSchema.safeParse(new Date())
      expect(result.success).toBe(false)
    })

    it('undefinedを含むオブジェクトを拒否する', () => {
      const result = jsonSchema.safeParse({ key: undefined })
      expect(result.success).toBe(false)
    })

    it('関数を含むオブジェクトを拒否する', () => {
      const result = jsonSchema.safeParse({ func: () => {} })
      expect(result.success).toBe(false)
    })

    it('undefinedを含む配列を拒否する', () => {
      const result = jsonSchema.safeParse([1, undefined, 3])
      expect(result.success).toBe(false)
    })
  })

  describe('Json型', () => {
    it('Json型の変数に有効なJSON値を代入できる', () => {
      // TypeScriptの型チェック用のテスト
      const validJson1: Json = 'string'
      const validJson2: Json = 42
      const validJson3: Json = true
      const validJson4: Json = null
      const validJson5: Json = { key: 'value' }
      const validJson6: Json = [1, 2, 3]
      const validJson7: Json = {
        nested: {
          array: [
            { id: 1, active: true },
            { id: 2, active: false },
          ],
        },
      }

      // 実際の値をバリデーションにかけてテスト
      expect(jsonSchema.safeParse(validJson1).success).toBe(true)
      expect(jsonSchema.safeParse(validJson2).success).toBe(true)
      expect(jsonSchema.safeParse(validJson3).success).toBe(true)
      expect(jsonSchema.safeParse(validJson4).success).toBe(true)
      expect(jsonSchema.safeParse(validJson5).success).toBe(true)
      expect(jsonSchema.safeParse(validJson6).success).toBe(true)
      expect(jsonSchema.safeParse(validJson7).success).toBe(true)
    })
  })

  describe('実際のJSONデータでのテスト', () => {
    it('API レスポンス形式のデータを受け入れる', () => {
      const apiResponse = {
        status: 'success',
        data: {
          id: 12345,
          name: 'Test User',
          email: 'test@example.com',
          isActive: true,
          profile: {
            age: 25,
            location: 'Tokyo',
            preferences: ['music', 'sports', 'reading'],
          },
          lastLogin: null,
        },
        metadata: {
          timestamp: '2023-12-01T10:00:00Z',
          version: '1.0.0',
        },
      }

      const result = jsonSchema.safeParse(apiResponse)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(apiResponse)
      }
    })

    it('設定ファイル形式のデータを受け入れる', () => {
      const config = {
        app: {
          name: 'MyApp',
          version: '2.1.0',
          debug: false,
        },
        database: {
          host: 'localhost',
          port: 5432,
          ssl: true,
          credentials: null,
        },
        features: ['auth', 'analytics', 'notifications'],
        thresholds: {
          memory: 0.8,
          cpu: 0.9,
          disk: 0.95,
        },
      }

      const result = jsonSchema.safeParse(config)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(config)
      }
    })
  })
})
````

## File: layers/base/app/test/models/vue.ts
````typescript
import { VueWrapper } from '@vue/test-utils'

// NOTE: もっといい方法を募集中。
/**
 * .vmにアクセスするためのVueWrapper。
 *
 * ```typescript
 * const wrapper: AnyVueWrapper = mount(HaLoading)
 * wrapper.vm.start()
 * ```
 *
 * https://stackoverflow.com/questions/74516449/vue-test-utils-typescript-type-for-wrapper-vm
 */
export type AnyVueWrapper = VueWrapper<any> // eslint-disable-line @typescript-eslint/no-explicit-any
````

## File: layers/base/app/test/repositories/exampleRepository.spec.ts
````typescript
import { beforeEach, describe, expect, it, vi } from 'vitest'
import exampleRepository from '#base/app/repositories/exampleRepository'

const { defaultApiMock, requireRuntimeConfigMock } = vi.hoisted(() => ({
  defaultApiMock: vi.fn(),
  requireRuntimeConfigMock: vi.fn(),
}))

vi.mock('#base/app/utils/default-api', () => ({ default: defaultApiMock }))
vi.mock('#base/app/plugins/runtimeConfig', async importOriginal => ({
  ...await importOriginal<typeof import('#base/app/plugins/runtimeConfig')>(),
  requireRuntimeConfig: requireRuntimeConfigMock,
}))

const response = {
  status: 'ok' as const,
  data: {
    todos: [{ userId: 1, id: 2, title: 'test', completed: false }],
  },
}

describe('exampleRepository', () => {
  beforeEach(() => {
    defaultApiMock.mockReset()
    requireRuntimeConfigMock.mockReset()
  })

  it('requests and validates the example endpoint', async () => {
    requireRuntimeConfigMock.mockReturnValue({ public: { apiPrefix: '/api' } })
    defaultApiMock.mockResolvedValue(response)

    await expect(exampleRepository.get.getExample()).resolves.toEqual(response)
    expect(defaultApiMock).toHaveBeenCalledWith('get', '/api/example')
  })

  it('throws when apiPrefix is unavailable', async () => {
    requireRuntimeConfigMock.mockReturnValue({ public: {} })

    await expect(exampleRepository.get.getExample()).rejects.toThrow(
      'getExample()',
    )
    expect(defaultApiMock).not.toHaveBeenCalled()
  })

  it('rejects a response that violates the schema', async () => {
    requireRuntimeConfigMock.mockReturnValue({ public: { apiPrefix: '/api' } })
    defaultApiMock.mockResolvedValue({ status: 'broken', data: { todos: [] } })

    await expect(exampleRepository.get.getExample()).rejects.toThrow()
  })
})
````

## File: layers/base/app/test/utils/types/types.spec.ts
````typescript
import { IsEqual } from 'type-fest'
import { describe, test } from 'vitest'
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
````

## File: layers/base/app/test/utils/anchor.spec.ts
````typescript
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
````

## File: layers/base/app/test/utils/array.spec.ts
````typescript
import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'
import { equal, range, reversed, toggleList, zip } from '#base/app/utils/array'

describe('equal', () => {
  test('returns true when lhs and rhs equals', () => {
    expect(equal([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  test('returns falsed when lhs and rhs does not equal', () => {
    expect(equal([1, 2, 3], [2, 3, 4])).toBe(false)
  })
})

describe('range', () => {
  test('numbers array (negative steps)', () => {
    expect(range(20, 10, -1)).toEqual([
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
    ])
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9])
  })

  test('numbers array (positive steps)', () => {
    expect(range(1, 12)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    expect(range(10, 20, 1)).toEqual([
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
  })

  test('negative area', () => {
    expect(range(-10, 0)).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0])
    expect(range(-10, -8)).toEqual([-10, -9, -8])
  })

  test('(max, min)', () => {
    expect(range(1, -10)).toEqual([])
  })
})

describe('reversed', () => {
  test('array reversed', () => {
    expect(reversed(range(1, 5))).toEqual([5, 4, 3, 2, 1])
  })

  test('original array is not modified', () => {
    const original = range(1, 5)
    expect(reversed(original)).toEqual([5, 4, 3, 2, 1])
    expect(original).toEqual([1, 2, 3, 4, 5])
  })

  test.prop([fc.array(fc.anything())])('do nothing if apply twice', (xs) => {
    return equal(reversed(reversed(xs)), xs)
  })
})

describe('toggleList', () => {
  test('toggle off', () => {
    const original = range(1, 5)
    expect(toggleList(original, 2)).toEqual([1, 3, 4, 5])
    expect(original).toEqual([1, 2, 3, 4, 5])
  })

  test('toggle off removes all item', () => {
    expect(toggleList([1, 2, 3, 3, 3], 3)).toEqual([1, 2])
  })

  test('toggle on', () => {
    expect(toggleList(range(1, 4), 5)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('zip', () => {
  test('makes the zip array', () => {
    expect(zip([1, 2, 3], [2, 3, 4, 5, 6])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ])
  })

  test.prop([fc.integer({ min: 0, max: 2 }), fc.integer({ min: 0, max: 2 })])(
    'skips ys\'s larger elements if xs.length < ys.length',
    (x, y) => {
      fc.pre(x <= y)

      const xs = range(0, x)
      const ys = range(0, y)

      return (
        zip(xs, ys).length === xs.length && zip(ys, xs).length === xs.length
      )
    },
  )

  test('throws for sparse arrays rather than returning undefined tuple values', () => {
    expect(() => zip(new Array<number>(1), [1])).toThrow('Invalid')
    expect(() => zip([1], new Array<number>(1))).toThrow('Invalid')
  })
})
````

## File: layers/base/app/test/utils/console.spec.ts
````typescript
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import {
  configureLogger,
  configureLoggerForEnvironment,
  debug,
  info,
  warn,
  error,
  table,
  log,
  logIf,
  timeStart,
  timeEnd,
  group,
  groupEnd,
  getLoggerConfig,
  withLogging,
} from '#base/app/utils/console'

describe('console.ts', () => {
  const originalConsole = {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
    table: console.table,
    time: console.time,
    timeEnd: console.timeEnd,
    group: console.group,
    groupCollapsed: console.groupCollapsed,
    groupEnd: console.groupEnd,
    trace: console.trace,
  }

  beforeEach(() => {
    vi.clearAllMocks()
    console.debug = vi.fn()
    console.info = vi.fn()
    console.warn = vi.fn()
    console.error = vi.fn()
    console.table = vi.fn()
    console.time = vi.fn()
    console.timeEnd = vi.fn()
    console.group = vi.fn()
    console.groupCollapsed = vi.fn()
    console.groupEnd = vi.fn()
    console.trace = vi.fn()

    // デフォルト設定にリセット
    configureLogger({
      enabled: true,
      level: 'info',
      timestamp: true,
      stackTrace: false,
    })
  })

  afterEach(() => {
    Object.assign(console, originalConsole)
  })

  describe('configureLogger', () => {
    it('ログ設定を更新する', () => {
      configureLogger({
        enabled: false,
        level: 'error',
      })

      const config = getLoggerConfig()
      expect(config.enabled).toBe(false)
      expect(config.level).toBe('error')
    })

    it('部分的な設定更新が可能', () => {
      configureLogger({ level: 'debug' })
      const config = getLoggerConfig()
      expect(config.level).toBe('debug')
      expect(config.enabled).toBe(true)
    })
  })

  describe('configureLoggerForEnvironment', () => {
    it('production環境でログを無効化', () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'production'

      configureLoggerForEnvironment()
      const config = getLoggerConfig()

      expect(config.enabled).toBe(false)
      expect(config.level).toBe('error')

      process.env.NODE_ENV = originalEnv
    })

    it('development環境でデバッグログを有効化', () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'development'

      configureLoggerForEnvironment()
      const config = getLoggerConfig()

      expect(config.enabled).toBe(true)
      expect(config.level).toBe('debug')
      expect(config.stackTrace).toBe(true)

      process.env.NODE_ENV = originalEnv
    })

    it('その他の環境では設定を変更しない', () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'test'
      configureLogger({ enabled: true, level: 'warn' })
      configureLoggerForEnvironment()
      expect(getLoggerConfig()).toMatchObject({ enabled: true, level: 'warn' })
      process.env.NODE_ENV = originalEnv
    })
  })

  describe('ログレベル制御', () => {
    it('設定されたレベル以上のログのみ出力', () => {
      configureLogger({ level: 'warn' })

      debug('debug message')
      info('info message')
      warn('warn message')
      error('error message')

      expect(console.debug).not.toHaveBeenCalled()
      expect(console.info).not.toHaveBeenCalled()
      expect(console.warn).toHaveBeenCalled()
      expect(console.error).toHaveBeenCalled()
    })

    it('ログが無効の場合は何も出力しない', () => {
      configureLogger({ enabled: false })

      error('error message')

      expect(console.error).not.toHaveBeenCalled()
    })
  })

  describe('ログフォーマット', () => {
    it('タイムスタンプを含む', () => {
      configureLogger({ timestamp: true })
      const dateSpy = vi.spyOn(Date.prototype, 'toISOString').mockReturnValue('2024-01-01T00:00:00.000Z')

      info('test message')

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[2024-01-01T00:00:00.000Z]'),
      )

      dateSpy.mockRestore()
    })

    it('プレフィックスを含む', () => {
      configureLogger({ prefix: 'APP' })

      info('test message')

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[APP]'),
      )
    })

    it('ログレベルを含む', () => {
      info('test message')

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[INFO]'),
      )
    })

    it('timestampとprefixを無効にできる', () => {
      configureLogger({ timestamp: false, prefix: undefined })
      info('plain')
      expect(console.info).toHaveBeenCalledWith('[INFO] plain')
    })
  })

  describe('エラーログ', () => {
    it('スタックトレースを出力', () => {
      configureLogger({ stackTrace: true })

      error('error message')

      expect(console.error).toHaveBeenCalled()
      expect(console.trace).toHaveBeenCalled()
    })
  })

  describe('table', () => {
    it('テーブル形式でデータを出力', () => {
      const data = [{ id: 1, name: 'test' }]

      table(data)

      expect(console.table).toHaveBeenCalledWith(data, undefined)
    })

    it('プロパティを指定してテーブル出力', () => {
      const data = [{ id: 1, name: 'test', age: 20 }]
      const properties = ['id', 'name']

      table(data, properties)

      expect(console.table).toHaveBeenCalledWith(data, properties)
    })

    it('ログ無効時は出力しない', () => {
      configureLogger({ enabled: false })
      table([{ id: 1 }])
      expect(console.table).not.toHaveBeenCalled()
    })
  })

  describe('log', () => {
    it('値をログ出力して返す', () => {
      const value = { test: 'data' }

      const result = log(value, 'Debug value')

      expect(result).toBe(value)
      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[INFO]'),
        value,
      )
    })

    it('メソッドを指定してログ出力', () => {
      const value = 'error value'

      log(value, 'Error occurred', 'error')

      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('[ERROR]'),
        value,
      )
    })

    it('warn methodを選択でき、無効時も値を返す', () => {
      expect(log('warning', 'Careful', 'warn')).toBe('warning')
      expect(console.warn).toHaveBeenCalled()
      configureLogger({ enabled: false })
      expect(log('quiet', 'Hidden')).toBe('quiet')
      expect(console.info).not.toHaveBeenCalledWith(expect.stringContaining('Hidden'), 'quiet')
    })
  })

  describe('logIf', () => {
    it('条件がtrueの場合のみログ出力', () => {
      logIf(true, 'info', 'Condition met')
      logIf(false, 'info', 'Condition not met')

      expect(console.info).toHaveBeenCalledTimes(1)
      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('Condition met'),
      )
    })

    it('warnとerrorを対応するconsole methodへ送る', () => {
      logIf(true, 'warn', 'warning')
      logIf(true, 'error', 'failure')
      expect(console.warn).toHaveBeenCalled()
      expect(console.error).toHaveBeenCalled()
    })
  })

  describe('パフォーマンス測定', () => {
    it('timeStart/timeEndでパフォーマンス測定', () => {
      configureLogger({ level: 'debug' })

      timeStart('operation')
      timeEnd('operation')

      expect(console.time).toHaveBeenCalledWith('operation')
      expect(console.timeEnd).toHaveBeenCalledWith('operation')
    })

    it('debugレベル以外では測定しない', () => {
      configureLogger({ level: 'info' })

      timeStart('operation')
      timeEnd('operation')

      expect(console.time).not.toHaveBeenCalled()
      expect(console.timeEnd).not.toHaveBeenCalled()
    })
  })

  describe('グループ化', () => {
    it('ログをグループ化', () => {
      group('Group Label')

      expect(console.group).toHaveBeenCalledWith(
        expect.stringContaining('Group Label'),
      )
    })

    it('折りたたまれたグループを作成', () => {
      group('Collapsed Group', true)

      expect(console.groupCollapsed).toHaveBeenCalledWith(
        expect.stringContaining('Collapsed Group'),
      )
    })

    it('グループを終了', () => {
      groupEnd()

      expect(console.groupEnd).toHaveBeenCalled()
    })

    it('ログ無効時はgroup操作をしない', () => {
      configureLogger({ enabled: false })
      group('hidden')
      groupEnd()
      expect(console.group).not.toHaveBeenCalled()
      expect(console.groupEnd).not.toHaveBeenCalled()
    })
  })

  describe('withLogging', () => {
    it('関数の実行をログ付きでラップ', () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn((a: number, b: number) => a + b)
      const wrapped = withLogging(fn as (...args: unknown[]) => unknown, 'add')

      const result = wrapped(1, 2)

      expect(result).toBe(3)
      expect(console.debug).toHaveBeenCalledWith(
        expect.stringContaining('Calling function: add'),
        [1, 2],
      )
      expect(console.debug).toHaveBeenCalledWith(
        expect.stringContaining('Function add returned'),
        3,
      )
    })

    it('エラーをログ出力して再スロー', () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn(() => {
        throw new Error('Test error')
      })
      const wrapped = withLogging(fn)

      expect(() => wrapped()).toThrow('Test error')
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('threw error'),
        expect.any(Error),
      )
    })

    it('Promise関数をラップ', async () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn(async () => {
        await Promise.resolve()
        return 'async result'
      })
      const wrapped = withLogging(fn)

      const result = await wrapped()

      expect(result).toBe('async result')
      expect(console.debug).toHaveBeenCalledWith(
        expect.stringContaining('resolved'),
        'async result',
      )
    })

    it('Promise rejectionをログ出力', async () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn(async () => {
        await Promise.resolve()
        throw new Error('Async error')
      })
      const wrapped = withLogging(fn)

      await expect(wrapped()).rejects.toThrow('Async error')
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('rejected'),
        expect.any(Error),
      )
    })

    it('明示名がない時は関数名またはanonymousを使う', () => {
      configureLogger({ level: 'debug' })
      function namedFunction() {
        return 'named'
      }
      expect(withLogging(namedFunction)()).toBe('named')
      expect(console.debug).toHaveBeenCalledWith(expect.stringContaining('namedFunction'), [])

      const nameless = () => 'anonymous'
      Object.defineProperty(nameless, 'name', { value: '' })
      expect(withLogging(nameless)()).toBe('anonymous')
      expect(console.debug).toHaveBeenCalledWith(expect.stringContaining('anonymous'), [])
    })
  })

  it('server-side import時に環境設定を実行する', async () => {
    vi.resetModules()
    vi.stubGlobal('window', undefined)
    const serverConsole = await import('#base/app/utils/console')
    expect(serverConsole.getLoggerConfig()).toBeDefined()
    vi.unstubAllGlobals()
  })
})
````

## File: layers/base/app/test/utils/constant.spec.ts
````typescript
import { describe, expect, it } from 'vitest'

describe('constant.ts', () => {
  it('定数ファイルのテスト - 実装待ち', async () => {
    // constant.tsの内容を確認してから実装
    const constantModule = await import('#base/app/utils/constant')

    // 基本的な確認
    expect(constantModule).toBeDefined()

    /*
     * 定数が存在することを確認
     * 実際の定数に応じてテストケースを追加
     */
  })
})
````

## File: layers/base/app/test/utils/date-control.spec.ts
````typescript
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import dayjs from 'dayjs'
import {
  formatDate,
  formatEnglishDate,
  formatJapaneseDate,
  formatEnglishDateTime,
  formatJapaneseDateTime,
  formatDateUnixTime,
  formatJSTtoLocalTimezone,
  formatLocalTimezoneToJST,
  getCurrentDate,
  getLocalTimezone,
  addDateTime,
  convertTimeToUtc,
  diffDays,
  getDiffTimeByUnit,
  isBeforeTargetDate,
  isBetweenTargetDates,
  isAfterTargetDate,
  formatTimestamp,
  timestampToDate,
  dateToTimestamp,
  isAfter,
  isBefore,
  isBetweenDates,
  isSameOrAfterDate,
  isSameOrBeforeDate,
  isSame,
  getNow,
  getNowWithFormat,
  getTomorrow,
  getTomorrowWithFormat,
  getRelativeTime,
  addDate,
  subtractDate,
  getStartOfDay,
  getEndOfDay,
  getStartOfMonth,
  getEndOfMonth,
  getStartOfYear,
  getEndOfYear,
  getDiff,
  getDuration,
  getWeekday,
  getMonth,
  getQuarter,
  formatCustom,
} from '#base/app/utils/date-control'

describe('date-control.ts', () => {
  const testDate = new Date('2024-01-15T10:30:00')
  const _testDateString = '2024-01-15T10:30:00'
  const testTimestamp = 1705299000000

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(testDate)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('formatDate', () => {
    it('指定されたフォーマットで日付を整形', () => {
      expect(formatDate('YYYY-MM-DD', testDate)).toBe('2024-01-15')
      expect(formatDate('YYYY/MM/DD HH:mm', testDate)).toBe('2024/01/15 10:30')
    })

    it('現在日時をデフォルトで使用', () => {
      expect(formatDate('YYYY-MM-DD')).toBe('2024-01-15')
    })
  })

  describe('formatEnglishDate', () => {
    it('英語形式の日付を返す', () => {
      const result = formatEnglishDate(testDate)
      expect(result).toMatch(/January 15, 2024/)
    })
  })

  describe('formatJapaneseDate', () => {
    it('日本語形式の日付を返す', () => {
      expect(formatJapaneseDate(testDate)).toBe('2024/01/15')
    })
  })

  describe('formatEnglishDateTime', () => {
    it('英語形式の日時を返す', () => {
      const result = formatEnglishDateTime(testDate)
      expect(result).toMatch(/January 15, 2024/)
      expect(result).toMatch(/10:30/)
    })
  })

  describe('formatJapaneseDateTime', () => {
    it('日本語形式の日時を返す', () => {
      expect(formatJapaneseDateTime(testDate)).toBe('2024/01/15 10:30')
    })
  })

  describe('legacy date helpers', () => {
    it('Unix時刻を明示日時と現在日時から返す', () => {
      expect(formatDateUnixTime(testDate)).toBe(dayjs(testDate).unix())
      expect(formatDateUnixTime()).toBe(dayjs(testDate).unix())
    })

    it('JSTとローカルtimezone間を変換する', () => {
      expect(formatJSTtoLocalTimezone('2024-01-15T10:30')).toMatch(/^2024-01-15T/)
      expect(formatLocalTimezoneToJST('2024-01-15T10:30')).toMatch(/^2024-01-15T/)
    })

    it('locale別の現在日とローカルtimezoneを返す', () => {
      expect(getCurrentDate()).toBe('2024/01/15')
      expect(getCurrentDate('ja')).toBe('2024/01/15')
      expect(getCurrentDate('en')).toMatch(/January 15, 2024/)
      expect(getLocalTimezone()).toMatch(/^UTC [+-]\d{2}:\d{2}$/)
    })

    it('基準日に既定単位または指定単位で加算する', () => {
      expect(addDateTime(2, undefined, testDate)).toEqual(new Date('2024-01-17T10:30:00'))
      expect(addDateTime(2, 'hour', testDate)).toEqual(new Date('2024-01-15T12:30:00'))
    })

    it('UTC文字列へ変換する', () => {
      expect(convertTimeToUtc('2024-01-15T10:30:00+09:00')).toBe('2024-01-15T01:30:00Z')
    })

    it('指定日時と現在日時から単位別の差分を返す', () => {
      const from = '2024-01-16T12:31:32'
      const to = '2024-01-15T10:30:30'
      expect(diffDays(to, from)).toBe(1)
      expect(diffDays('2024-01-14T10:30:00')).toBe(1)
      expect(getDiffTimeByUnit(to, from)).toBe(1)
      expect(getDiffTimeByUnit(to, from, 'hour')).toBe(2)
      expect(getDiffTimeByUnit(to, from, 'minute')).toBe(1)
      expect(getDiffTimeByUnit(to, from, 'second')).toBe(2)
      expect(getDiffTimeByUnit(to, from, 'month')).toBe(-1)
    })

    it('現在日時を基準に前・期間内・後を判定する', () => {
      expect(isBeforeTargetDate('2024-01-16')).toBe(true)
      expect(isBeforeTargetDate('2024-01-14')).toBe(false)
      expect(isBetweenTargetDates('2024-01-14', '2024-01-16')).toBe(true)
      expect(isBetweenTargetDates('2024-01-16', '2024-01-17')).toBe(false)
      expect(isAfterTargetDate('2024-01-14')).toBe(true)
      expect(isAfterTargetDate('2024-01-16')).toBe(false)
    })
  })

  describe('formatTimestamp', () => {
    it('タイムスタンプを指定フォーマットに変換', () => {
      expect(formatTimestamp(testTimestamp, 'YYYY-MM-DD')).toBe('2024-01-15')
    })
  })

  describe('timestampToDate', () => {
    it('タイムスタンプをDateオブジェクトに変換', () => {
      const result = timestampToDate(testTimestamp)
      expect(result).toBeInstanceOf(Date)
      expect(result.getFullYear()).toBe(2024)
    })
  })

  describe('dateToTimestamp', () => {
    it('DateオブジェクトをUNIXタイムスタンプに変換', () => {
      const result = dateToTimestamp(testDate)
      expect(typeof result).toBe('number')
      // Check that it's a valid timestamp (should be close to test date)
      expect(result).toBeGreaterThan(1705000000000) // Around the expected time
      expect(result).toBeLessThan(1706000000000) // Within reasonable range
    })
  })

  describe('日付比較関数', () => {
    const date1 = new Date('2024-01-10')
    const date2 = new Date('2024-01-15')
    const date3 = new Date('2024-01-20')

    it('isAfter - 後の日付かチェック', () => {
      expect(isAfter(date2, date1)).toBe(true)
      expect(isAfter(date1, date2)).toBe(false)
    })

    it('isBefore - 前の日付かチェック', () => {
      expect(isBefore(date1, date2)).toBe(true)
      expect(isBefore(date2, date1)).toBe(false)
    })

    it('isBetween - 期間内かチェック', () => {
      expect(isBetweenDates(date2, date1, date3)).toBe(true)
      expect(isBetweenDates(date1, date1, date3)).toBe(true)
      expect(isBetweenDates(date3, date1, date3)).toBe(true)
      expect(isBetweenDates(date1, date2, date3)).toBe(false)
    })

    it('isSameOrAfter - 同じか後の日付かチェック', () => {
      expect(isSameOrAfterDate(date2, date1)).toBe(true)
      expect(isSameOrAfterDate(date2, date2)).toBe(true)
      expect(isSameOrAfterDate(date1, date2)).toBe(false)
    })

    it('isSameOrBefore - 同じか前の日付かチェック', () => {
      expect(isSameOrBeforeDate(date1, date2)).toBe(true)
      expect(isSameOrBeforeDate(date2, date2)).toBe(true)
      expect(isSameOrBeforeDate(date3, date2)).toBe(false)
    })

    it('isSame - 同じ日付かチェック', () => {
      expect(isSame(date2, date2)).toBe(true)
      expect(isSame(date1, date2)).toBe(false)
    })
  })

  describe('getNow', () => {
    it('現在日時を取得', () => {
      const result = getNow()
      expect(typeof result.format).toBe('function')
      expect(result.format('YYYY-MM-DD')).toBe('2024-01-15')
    })
  })

  describe('getNowWithFormat', () => {
    it('現在日時を指定フォーマットで取得', () => {
      expect(getNowWithFormat('YYYY/MM/DD')).toBe('2024/01/15')
    })
  })

  describe('getTomorrow', () => {
    it('明日の日付を取得', () => {
      const result = getTomorrow()
      expect(result.format('YYYY-MM-DD')).toBe('2024-01-16')
    })
  })

  describe('getTomorrowWithFormat', () => {
    it('明日の日付を指定フォーマットで取得', () => {
      expect(getTomorrowWithFormat('YYYY/MM/DD')).toBe('2024/01/16')
    })
  })

  describe('getRelativeTime', () => {
    it('相対時間を取得', () => {
      const pastDate = new Date('2024-01-14T10:30:00')
      const result = getRelativeTime(pastDate)
      expect(result).toMatch(/ago|day/)
    })
  })

  describe('addDate', () => {
    it('日付を加算', () => {
      const result = addDate(testDate, 5, 'day')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-20')
    })

    it('月を加算', () => {
      const result = addDate(testDate, 2, 'month')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-03-15')
    })
  })

  describe('subtractDate', () => {
    it('日付を減算', () => {
      const result = subtractDate(testDate, 5, 'day')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-10')
    })

    it('月を減算', () => {
      const result = subtractDate(testDate, 2, 'month')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2023-11-15')
    })
  })

  describe('getStartOfDay', () => {
    it('日の開始時刻を取得', () => {
      const result = getStartOfDay(testDate)
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2024-01-15 00:00:00')
    })
  })

  describe('getEndOfDay', () => {
    it('日の終了時刻を取得', () => {
      const result = getEndOfDay(testDate)
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2024-01-15 23:59:59')
    })
  })

  describe('getStartOfMonth', () => {
    it('月の開始日を取得', () => {
      const result = getStartOfMonth(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-01')
    })
  })

  describe('getEndOfMonth', () => {
    it('月の終了日を取得', () => {
      const result = getEndOfMonth(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-31')
    })
  })

  describe('getStartOfYear', () => {
    it('年の開始日を取得', () => {
      const result = getStartOfYear(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-01')
    })
  })

  describe('getEndOfYear', () => {
    it('年の終了日を取得', () => {
      const result = getEndOfYear(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-12-31')
    })
  })

  describe('getDiff', () => {
    it('日付の差分を取得', () => {
      const date1 = new Date('2024-01-10')
      const date2 = new Date('2024-01-15')
      expect(getDiff(date2, date1, 'day')).toBe(5)
    })
  })

  describe('getDuration', () => {
    it('期間を取得', () => {
      const date1 = new Date('2024-01-10')
      const date2 = new Date('2024-01-15')
      const result = getDuration(date1, date2)
      expect(result).toBeInstanceOf(Object)
      expect(result.days()).toBe(5)
    })
  })

  describe('getWeekday', () => {
    it('曜日を取得', () => {
      const result = getWeekday(testDate)
      expect(typeof result).toBe('number')
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThanOrEqual(6)
    })
  })

  describe('getMonth', () => {
    it('月を取得', () => {
      const result = getMonth(testDate)
      expect(result).toBe(0) // 0-indexed (January = 0)
    })
  })

  describe('getQuarter', () => {
    it('四半期を取得', () => {
      const result = getQuarter(testDate)
      expect(result).toBe(1)
    })
  })

  describe('formatCustom', () => {
    it('カスタムフォーマットで日付を整形', () => {
      const result = formatCustom(testDate, 'YYYY年MM月DD日')
      expect(result).toBe('2024年01月15日')
    })
  })
})
````

## File: layers/base/app/test/utils/environment.spec.ts
````typescript
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { describe, expect, it } from 'vitest'
import { isNuxtEnvironment } from '#base/app/utils/environment'

describe('environment.ts', () => {
  it('setup外ではfalseを返す', () => {
    expect(isNuxtEnvironment()).toBe(false)
  })

  it('Vue component setup内ではapp contextを検出する', () => {
    let result = false
    mount(defineComponent({
      setup() {
        result = isNuxtEnvironment()
        return () => null
      },
    }))
    expect(result).toBe(true)
  })
})
````

## File: layers/base/app/test/utils/error.spec.ts
````typescript
import { test, expect } from 'vitest'
import { raiseError, unreachable } from '#base/app/utils/error'

test('unreachable', () => {
  const x: number = 10
  if (typeof x === 'number') {
    // ここにしか来ない
  } else {
    unreachable(x)
  }
})

test('unreachable throws when reached at runtime', () => {
  expect(() => unreachable('unexpected' as never)).toThrow('unreachable.')
})

test('raiseError', () => {
  const xs: number[] = []
  expect(() => {
    const _ = xs[0] ?? raiseError('0th element is nothing')
  }).toThrow('0th element is nothing')
})
````

## File: layers/base/app/test/utils/i18n.spec.ts
````typescript
import { test } from 'vitest'

test('関数のexportがないので、#base/app/utils/i18nモジュールへのテストはなし', () => {})
````

## File: layers/base/app/test/utils/object.spec.ts
````typescript
import { describe, test, expect } from 'vitest'
import { writableClone } from '#base/app/utils/object'

describe('writableClone', () => {
  test('copies usual values', () => {
    const x = { a: 42 } as const
    const y = writableClone(x)
    y.a = 42 // 代入可能になっている
    expect(y).toStrictEqual(x)
  })

  test('breaks type safety if copying unusual values', () => {
    const xs: undefined[] = [undefined]
    const ys: undefined[] = writableClone(xs)
    const y: undefined = ys[0]
    expect(y).toBe(null) // undefined型の変数にnullが入っている

    // その他、nullになるもの。
    expect(writableClone([NaN])).not.toStrictEqual([NaN])
    expect(writableClone([Infinity])).not.toStrictEqual([Infinity])
  })
})
````

## File: layers/base/app/test/utils/response.spec.ts
````typescript
import { describe, expect, it } from 'vitest'
import { z } from 'zod/v3'
import {
  statusSchema,
  pagingSchema,
  makeResponseSchema,
  isFetchError,
  fetchErrorSchema,
  ensureAsyncDataOf,
  requireAsyncDataOf,
  type ResponseStatus,
  type Paging,
} from '#base/app/utils/response'

describe('response.ts', () => {
  describe('statusSchema', () => {
    it('okステータスを正しく検証する', () => {
      const result = statusSchema.safeParse('ok')
      expect(result.success).toBe(true)
      expect(result.data).toBe('ok')
    })

    it('ngステータスを正しく検証する', () => {
      const result = statusSchema.safeParse('ng')
      expect(result.success).toBe(true)
      expect(result.data).toBe('ng')
    })

    it('無効なステータスを拒否する', () => {
      const result = statusSchema.safeParse('invalid')
      expect(result.success).toBe(false)
    })

    it('文字列以外を拒否する', () => {
      expect(statusSchema.safeParse(123).success).toBe(false)
      expect(statusSchema.safeParse(null).success).toBe(false)
      expect(statusSchema.safeParse(undefined).success).toBe(false)
    })
  })

  describe('pagingSchema', () => {
    it('正しいページング情報を検証する', () => {
      const validPaging = {
        limit: 10,
        offset: 0,
        total: 100,
      }
      const result = pagingSchema.safeParse(validPaging)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(validPaging)
    })

    it('必須フィールドが不足している場合エラーを返す', () => {
      expect(pagingSchema.safeParse({ limit: 10, offset: 0 }).success).toBe(false)
      expect(pagingSchema.safeParse({ limit: 10, total: 100 }).success).toBe(false)
      expect(pagingSchema.safeParse({ offset: 0, total: 100 }).success).toBe(false)
    })

    it('数値以外の値を拒否する', () => {
      const invalidPaging = {
        limit: '10',
        offset: 0,
        total: 100,
      }
      expect(pagingSchema.safeParse(invalidPaging).success).toBe(false)
    })

    it('空オブジェクトを拒否する', () => {
      expect(pagingSchema.safeParse({}).success).toBe(false)
    })
  })

  describe('makeResponseSchema', () => {
    it('基本的なレスポンススキーマを作成する', () => {
      const schema = makeResponseSchema({
        data: z.string(),
        message: z.string(),
      })

      const validResponse = {
        status: 'ok',
        data: 'test data',
        message: 'success',
      }

      const result = schema.safeParse(validResponse)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(validResponse)
    })

    it('statusフィールドが必須である', () => {
      const schema = makeResponseSchema({
        data: z.string(),
      })

      const invalidResponse = {
        data: 'test data',
        // status missing
      }

      expect(schema.safeParse(invalidResponse).success).toBe(false)
    })

    it('複雑なスキーマオブジェクトを処理する', () => {
      const schema = makeResponseSchema({
        users: z.array(z.object({
          id: z.number(),
          name: z.string(),
        })),
        paging: pagingSchema,
      })

      const validResponse = {
        status: 'ok',
        users: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        paging: {
          limit: 10,
          offset: 0,
          total: 2,
        },
      }

      const result = schema.safeParse(validResponse)
      expect(result.success).toBe(true)
    })

    it('空のスキーマオブジェクトでも動作する', () => {
      const schema = makeResponseSchema({})

      const validResponse = {
        status: 'ng',
      }

      const result = schema.safeParse(validResponse)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(validResponse)
    })
  })

  describe('isFetchError', () => {
    it('FetchErrorオブジェクトを正しく識別する', () => {
      const fetchError = {
        name: 'FetchError',
        message: 'Network error',
        cause: 'Connection failed',
      }

      expect(isFetchError(fetchError)).toBe(true)
    })

    it('FetchError以外のErrorオブジェクトを拒否する', () => {
      const normalError = {
        name: 'Error',
        message: 'Normal error',
      }

      expect(isFetchError(normalError)).toBe(false)
    })

    it('nameプロパティがないオブジェクトを拒否する', () => {
      const obj = {
        message: 'No name property',
      }

      expect(isFetchError(obj)).toBe(false)
    })

    it('プリミティブ値を拒否する', () => {
      expect(isFetchError('string')).toBe(false)
      expect(isFetchError(123)).toBe(false)
      expect(isFetchError(null)).toBe(false)
      expect(isFetchError(undefined)).toBe(false)
    })

    it('空オブジェクトを拒否する', () => {
      expect(isFetchError({})).toBe(false)
    })
  })

  describe('fetchErrorSchema', () => {
    it('有効なFetchErrorを検証する', () => {
      const fetchError = {
        name: 'FetchError',
        message: 'Network error',
      }

      const result = fetchErrorSchema.safeParse(fetchError)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(fetchError)
    })

    it('無効なオブジェクトを拒否する', () => {
      const invalidError = {
        name: 'Error',
        message: 'Not a fetch error',
      }

      expect(fetchErrorSchema.safeParse(invalidError).success).toBe(false)
    })
  })

  describe('ensureAsyncDataOf', () => {
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    it('有効なAsyncDataオブジェクトを検証する', () => {
      const validAsyncData = {
        data: {
          value: { id: 1, name: 'test' },
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, validAsyncData)
      }).not.toThrow()
    })

    it('nullのdataを許可する', () => {
      const asyncDataWithNullData = {
        data: {
          value: null,
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, asyncDataWithNullData)
      }).not.toThrow()
    })

    it('有効なFetchErrorを許可する', () => {
      const asyncDataWithError = {
        data: {
          value: null,
        },
        error: {
          value: {
            name: 'FetchError',
            message: 'Network error',
          },
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, asyncDataWithError)
      }).not.toThrow()
    })

    it('プリミティブ値を拒否する', () => {
      expect(() => {
        ensureAsyncDataOf(testSchema, 'string')
      }).toThrow('Expected object with data and error properties')

      expect(() => {
        ensureAsyncDataOf(testSchema, 123)
      }).toThrow('Expected object with data and error properties')

      expect(() => {
        ensureAsyncDataOf(testSchema, null)
      }).toThrow('Expected object with data and error properties')
    })

    it('dataプロパティがないオブジェクトを拒否する', () => {
      const invalidObject = {
        error: { value: null },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidObject)
      }).toThrow('Expected object with data and error properties')
    })

    it('errorプロパティがないオブジェクトを拒否する', () => {
      const invalidObject = {
        data: { value: { id: 1, name: 'test' } },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidObject)
      }).toThrow('Expected object with data and error properties')
    })

    it('無効なdataスキーマを拒否する', () => {
      const invalidAsyncData = {
        data: {
          value: { id: 'invalid', name: 'test' }, // idが文字列（数値であるべき）
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidAsyncData)
      }).toThrow()
    })

    it('無効なerrorオブジェクトを拒否する', () => {
      const invalidAsyncData = {
        data: {
          value: null,
        },
        error: {
          value: {
            name: 'Error', // FetchErrorでない
            message: 'Invalid error',
          },
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidAsyncData)
      }).toThrow()
    })
  })

  describe('requireAsyncDataOf', () => {
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    it('有効なAsyncDataオブジェクトを返す', () => {
      const validAsyncData = {
        data: {
          value: { id: 1, name: 'test' },
        },
        error: {
          value: null,
        },
      }

      const result = requireAsyncDataOf(testSchema, validAsyncData)
      expect(result).toBe(validAsyncData)
    })

    it('無効なオブジェクトで例外を投げる', () => {
      const invalidAsyncData = {
        data: {
          value: { id: 'invalid', name: 'test' },
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        return requireAsyncDataOf(testSchema, invalidAsyncData)
      }).toThrow()
    })

    it('プリミティブ値で例外を投げる', () => {
      expect(() => {
        return requireAsyncDataOf(testSchema, 'string')
      }).toThrow('Expected object with data and error properties')
    })
  })

  describe('型定義', () => {
    it('ResponseStatus型が正しく推論される', () => {
      const okStatus: ResponseStatus = 'ok'
      const ngStatus: ResponseStatus = 'ng'

      expect(okStatus).toBe('ok')
      expect(ngStatus).toBe('ng')
    })

    it('Paging型が正しく推論される', () => {
      const paging: Paging = {
        limit: 10,
        offset: 0,
        total: 100,
      }

      expect(paging.limit).toBe(10)
      expect(paging.offset).toBe(0)
      expect(paging.total).toBe(100)
    })
  })
})
````

## File: layers/base/app/test/utils/sleep.spec.ts
````typescript
import { describe, it, expect, vi } from 'vitest'
import { sleep, waitEffect } from '#base/app/utils/sleep'

describe('sleep test', () => {
  it('diff of start time and end time', async () => {
    const startTime = Date.now()
    await sleep(100)
    const endTime = Date.now()
    const diffTime = endTime - startTime
    /**
     * @privateRemarks
     * startTimeから100ミリ秒離してendTimeを測って
     * 100ミリ秒差をテスト判定基準としているが、
     * setTimeout自体が処理の重さなど環境で変わる不安定なため、
     * 100ミリ秒より一割余裕をみて90ミリ秒でテストする
     * https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
     * 「この API は、タイマーがスケジュールどおりに正確に実行されることを保証しません。CPU 負荷や他のタスクなどによる遅延が予想されます。」
     */
    expect(diffTime).toBeGreaterThanOrEqual(90)
  })
})

describe('waitEffect', () => {
  it('Vue tickの後にanimation frameを待つ', async () => {
    const requestAnimationFrame = vi.fn((callback: FrameRequestCallback) => {
      callback(16)
      return 1
    })
    vi.stubGlobal('requestAnimationFrame', requestAnimationFrame)
    await expect(waitEffect()).resolves.toBeUndefined()
    expect(requestAnimationFrame).toHaveBeenCalledOnce()
  })
})
````

## File: layers/base/app/test/utils/storage-control.spec.ts
````typescript
import { describe, it, expect } from 'vitest'
import { CookieGetOptions, CookieSetOptions } from 'universal-cookie'
import {
  getLocalStorageValue,
  getSessionStorageValue,
  getSingleCookieValue,
  removeLocalStorageValue,
  removeSessionStorageValue,
  removeSingleCookieValue,
  setLocalStorageValue,
  setSessionStorageValue,
  setSingleCookieValue,
} from '#base/app/utils/storage-control'

describe('cookie control test', () => {
  it('cookie set and get', () => {
    const key: string = 'testKeyNameSetAndGet'
    const value: string | null = 'testValueSetAndGet'
    // NOTE: 下記optionsの個別の値はvueuseの機能なので、OSS側個別の値はテストしない。必要であればOSSのテストを書くべき
    const setOptions: CookieSetOptions = {}
    const getOptions: CookieGetOptions = {}

    // NOTE: cookieをセットしてゲットすることでテストする
    setSingleCookieValue(key, value, setOptions)
    expect(getSingleCookieValue(key, getOptions)).toMatch(value)
  })

  it('non-existent key on retrieval', () => {
    const key: string = 'testKeyNameNonExistent'
    // NOTE: 存在しないkeyを取得しようとしてnullになるかテスト
    expect(getSingleCookieValue(key)).toBe(null)
  })

  it('cookie set and get no options', () => {
    const key: string = 'testKeyNameNoOption'
    const value: string | null = 'testValueNoOption'
    const setOptions: CookieSetOptions = {}
    setSingleCookieValue(key, value, setOptions)
    expect(getSingleCookieValue(key)).toMatch(value)
  })

  it('set an empty key', () => {
    const keyEmpty: string = ''
    const value: string | null = 'testValueEmptyKeySet'
    const setOptions: CookieSetOptions = {}
    // NOTE: cookieをセットする時にkeyが無いを空でエラーを再現できるが、エラーで止まる
    expect(() =>
      setSingleCookieValue(keyEmpty, value, setOptions),
    ).toThrowError('set cookie key is falsy')
  })

  it('empty key on retrieval', () => {
    const key: string = 'testKeyNameEmptyKeyGet'
    const keyEmpty: string = ''
    const value: string | null = 'testValueEmptyKeyGet'
    const setOptions: CookieSetOptions = {}
    const getOptions: CookieGetOptions = {}
    // NOTE: cookieを通常通りセットして、ゲット時に空のkeyでnullになるかテストする
    setSingleCookieValue(key, value, setOptions)
    expect(getSingleCookieValue(keyEmpty, getOptions)).toBe(null)
  })

  it('delete', () => {
    const key: string = 'testKeyNameDelete'
    const value: string | null = 'testValueDelete'
    const setOptions: CookieSetOptions = {}
    const getOptions: CookieGetOptions = {}
    setSingleCookieValue(key, value, setOptions)
    removeSingleCookieValue(key, setOptions)
    expect(getSingleCookieValue(key, getOptions)).toBe(null)
  })

  it('delete with default options', () => {
    setSingleCookieValue('defaultOptions', 'value')
    removeSingleCookieValue('defaultOptions')
    expect(getSingleCookieValue('defaultOptions')).toBe(null)
  })

  it('rejects deletion with an empty key', () => {
    expect(() => removeSingleCookieValue('')).toThrow('remove cookie key is falsy')
  })
})

describe('local storage control test', () => {
  it('local storage set and get', () => {
    const key: string = 'testKeyNameSetAndGet'
    const value: string | null = 'testValueSetAndGet'
    setLocalStorageValue(key, value)
    expect(getLocalStorageValue(key)).toMatch(value)
  })

  it('non-existent key on retrieval', () => {
    const key: string = 'testKeyNameNonExistent'
    expect(getLocalStorageValue(key)).toBe(null)
  })

  it('delete', () => {
    const key: string = 'testKeyNameDelete'
    const value: string | null = 'testValueDelete'
    // NOTE: セット後にデリート成功していたら、存在しないkeyを取得しようとしてnullになっているはずテスト
    setLocalStorageValue(key, value)
    removeLocalStorageValue(key)
    expect(getLocalStorageValue(key)).toBe(null)
  })
})

describe('session storage control test', () => {
  it('session storage set and get', () => {
    const key: string = 'testKeyNameSetAndGet'
    const value: string | null = 'testValueSetAndGet'
    setSessionStorageValue(key, value)
    expect(getSessionStorageValue(key)).toMatch(value)
  })

  it('non-existent key on retrieval', () => {
    const key: string = 'testKeyNameNonExistent'
    expect(getSessionStorageValue(key)).toBe(null)
  })

  it('delete', () => {
    const key: string = 'testKeyNameDelete'
    const value: string | null = 'testValueDelete'
    setSessionStorageValue(key, value)
    removeSessionStorageValue(key)
    expect(getSessionStorageValue(key)).toBe(null)
  })
})
````

## File: layers/base/app/test/utils/token.spec.ts
````typescript
import { test } from '@fast-check/vitest'
import { describe, expect, vi } from 'vitest'
import { decodeJwt } from '#base/app/utils/token'

describe('decodeJwt', () => {
  test('decode valid jwt', () => {
    const jwt
      = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o'
    const decoded = decodeJwt(jwt)
    expect(decoded).toMatchObject({
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022,
    })
  })
  describe('decode invalid jwt', () => {
    // 正直これは null になってほしいなあ
    test.fails('invalid jwt (verify fails)', () => {
      const jwt
        = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2p'
      const decoded = decodeJwt(jwt)
      expect(decoded, '検証が失敗したら null が返ってほしい').toBe(null)
    })
    test('decode valid (non-secure) jwt', () => {
      const jwt
        = 'eyJhbGciOiJub25lIn0.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.'
      const decoded = decodeJwt(jwt)
      expect(decoded, 'alg: none とかでも通る（これええんか？）').toMatchObject(
        {
          'iss': 'joe',
          'exp': 1300819380,
          'http://example.com/is_root': true,
        },
      )
    })
    test('invalid jwt', () => {
      const decoded = decodeJwt('.eyJmb28iOiJiYXIifQ.')
      expect(decoded, 'なんならalg無くても通る').toMatchObject({
        foo: 'bar',
      })
    })

    test('returns null and logs malformed payloads', () => {
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined)
      expect(decodeJwt('not-a-jwt')).toBeNull()
      expect(decodeJwt('header.%%%.signature')).toBeNull()
      expect(consoleError).toHaveBeenCalledTimes(2)
    })
    /*
     * ERROR: テストとして正しいが、ターミナルにエラーが出るためコメントアウト。
     * test('decode failes', () => {
     *   const jwt = '################'
     *   const decoded = decodeJwt(jwt)
     *   expect(decoded, '失敗してnullが返る').toBe(null)
     * })
     */
  })
})
````

## File: layers/base/app/test/utils/tuple.spec.ts
````typescript
import { describe, test } from 'vitest'
import { tupleWideningDo } from '#base/app/utils/tuple'

describe('tupleWideningDo', () => {
  test('can apply a tuple function', () => {
    const xs: readonly ['x', 'y', 'z'] = ['x', 'y', 'z']
    const x: string | null = 'x'
    tupleWideningDo(xs, x, (xs, x) => xs.indexOf(x))
    // type errorが発生しなければいいので、expect()は不要
  })
})
````

## File: layers/base/app/test/utils/url.spec.ts
````typescript
import {
  getArrayRouteQuery,
  getBooleanRouteQuery,
  getDateRouteQuery,
  getEnumRouteQuery,
  getNumberRouteQuery,
  getRouteQueries,
  getStringRouteQuery,
  requireNumberRouteQuery,
  requireRouteQuery,
} from '#base/app/utils/url'
import { describe, expect, it, vi } from 'vitest'

type Query = Parameters<typeof getNumberRouteQuery>[0]

const query = (value: Record<string, string | null | (string | null)[] | undefined>): Query => value as Query

describe('url.ts', () => {
  it('数値クエリを単一値・配列・未指定から取得する', () => {
    expect(getNumberRouteQuery(query({}), 'page')).toBeUndefined()
    expect(getNumberRouteQuery(query({ page: '12' }), 'page')).toBe(12)
    expect(getNumberRouteQuery(query({ page: ['3', '4'] }), 'page')).toBe(3)
    expect(getNumberRouteQuery(query({ page: [] }), 'page')).toBeUndefined()
    expect(() => getNumberRouteQuery(query({ page: 'not-a-number' }), 'page')).toThrow(
      'query \'page\' is neither a number nor undefined: not-a-number',
    )
  })

  it('必須文字列クエリを取得し、代替値と型エラーを扱う', () => {
    const getAltValue = vi.fn(() => 'fallback')
    expect(requireRouteQuery(query({ id: 'actual' }), 'id', getAltValue, 'invalid')).toBe('actual')
    expect(getAltValue).not.toHaveBeenCalled()
    expect(requireRouteQuery(query({}), 'id', getAltValue, 'invalid')).toBe('fallback')
    expect(getAltValue).toHaveBeenCalledOnce()
    expect(() => requireRouteQuery(query({ id: ['a', 'b'] }), 'id', getAltValue, 'invalid')).toThrow('invalid')
  })

  it('必須数値クエリを変換し、文字列型と数値変換のエラーを区別する', () => {
    expect(requireNumberRouteQuery(query({ count: '7' }), 'count', () => '1', 'invalid')).toBe(7)
    expect(requireNumberRouteQuery(query({}), 'count', () => '9', 'invalid')).toBe(9)
    expect(() => requireNumberRouteQuery(query({ count: ['7'] }), 'count', () => '1', 'invalid')).toThrow('invalid')
    expect(() => requireNumberRouteQuery(query({ count: 'x' }), 'count', () => '1', 'invalid', 'not number')).toThrow('not number')
  })

  it('文字列・boolean・配列クエリの全入力形を扱う', () => {
    expect(getStringRouteQuery(query({}), 'value')).toBeUndefined()
    expect(getStringRouteQuery(query({ value: 'a' }), 'value')).toBe('a')
    expect(getStringRouteQuery(query({ value: ['a', 'b'] }), 'value')).toBe('a')
    expect(getStringRouteQuery(query({ value: [] }), 'value')).toBeUndefined()
    expect(getStringRouteQuery(query({ value: null }), 'value')).toBeUndefined()

    expect(getBooleanRouteQuery(query({}), 'flag')).toBeUndefined()
    expect(getBooleanRouteQuery(query({ flag: [] }), 'flag')).toBeUndefined()
    expect(getBooleanRouteQuery(query({ flag: null }), 'flag')).toBeUndefined()
    for (const value of ['true', '1', 'yes', 'on', 'TRUE']) {
      expect(getBooleanRouteQuery(query({ flag: value }), 'flag')).toBe(true)
    }
    expect(getBooleanRouteQuery(query({ flag: ['false'] }), 'flag')).toBe(false)

    expect(getArrayRouteQuery(query({}), 'tags')).toEqual([])
    expect(getArrayRouteQuery(query({ tags: ['a', null, 'b'] }), 'tags')).toEqual(['a', 'b'])
    expect(getArrayRouteQuery(query({ tags: 'a' }), 'tags')).toEqual(['a'])
    expect(getArrayRouteQuery(query({ tags: '' }), 'tags')).toEqual([])
    expect(getArrayRouteQuery(query({ tags: null }), 'tags')).toEqual([])
  })

  it('日付クエリを検証する', () => {
    expect(getDateRouteQuery(query({}), 'at')).toBeUndefined()
    expect(getDateRouteQuery(query({ at: [] }), 'at')).toBeUndefined()
    expect(getDateRouteQuery(query({ at: null }), 'at')).toBeUndefined()
    expect(getDateRouteQuery(query({ at: ['2024-01-02', '2025-01-01'] }), 'at')).toEqual(new Date('2024-01-02'))
    expect(() => getDateRouteQuery(query({ at: 'invalid' }), 'at')).toThrow('query \'at\' is not a valid date: invalid')
  })

  it('列挙クエリを検証する', () => {
    const allowed = ['draft', 'published'] as const
    expect(getEnumRouteQuery(query({}), 'state', allowed)).toBeUndefined()
    expect(getEnumRouteQuery(query({ state: [] }), 'state', allowed)).toBeUndefined()
    expect(getEnumRouteQuery(query({ state: null }), 'state', allowed)).toBeUndefined()
    expect(getEnumRouteQuery(query({ state: ['draft'] }), 'state', allowed)).toBe('draft')
    expect(() => getEnumRouteQuery(query({ state: 'archived' }), 'state', allowed)).toThrow(
      'query \'state\' must be one of [draft, published], but got: archived',
    )
  })

  it('schemaに従って複数の型を一度に変換する', () => {
    type Parsed = {
      name: string
      page: number
      enabled: boolean
      tags: string[]
      at: Date
      state: 'draft' | 'published'
      omitted: string
    }
    const result = getRouteQueries<Parsed>(
      query({ name: 'sample', page: '2', enabled: 'yes', tags: ['a', 'b'], at: '2024-01-02', state: 'published' }),
      {
        name: { type: 'string', required: true },
        page: { type: 'number' },
        enabled: { type: 'boolean' },
        tags: { type: 'array' },
        at: { type: 'date' },
        state: { type: 'enum', allowedValues: ['draft', 'published'] },
        omitted: { type: 'string' },
      },
    )

    expect(result).toEqual({
      name: 'sample',
      page: 2,
      enabled: true,
      tags: ['a', 'b'],
      at: new Date('2024-01-02'),
      state: 'published',
    })
  })

  it('任意項目の変換エラーを無視し、必須項目のエラーを再送出する', () => {
    expect(getRouteQueries(query({ page: 'invalid' }), { page: { type: 'number' } })).toEqual({})
    expect(getRouteQueries(query({ state: 'draft' }), { state: { type: 'enum' } })).toEqual({})
    expect(() => getRouteQueries(query({}), { name: { type: 'string', required: true } })).toThrow(
      'required query parameter \'name\' is missing',
    )
    expect(() => getRouteQueries(query({ state: 'draft' }), { state: { type: 'enum', required: true } })).toThrow(
      'enum type requires allowedValues for key: state',
    )
    expect(() => getRouteQueries(query({ value: 'x' }), {
      value: { type: 'unsupported', required: true },
    } as never)).toThrow('unknown query type: unsupported')
  })
})
````

## File: layers/base/app/test/utils/uuid.spec.ts
````typescript
import { describe, test, expect } from 'vitest'
import { createUuidV4 } from '#base/app/utils/uuid'

describe('createUuidV4', () => {
  test('generates a valid UUIDv4 string', () => {
    const uuidV4 = createUuidV4()
    expect(uuidV4).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    )
  })

  test('returns unique UUIDv4 strings on different calls', () => {
    const uuidV4_1 = createUuidV4()
    const uuidV4_2 = createUuidV4()
    expect(uuidV4_1).not.toBe(uuidV4_2)
  })
})
````

## File: layers/base/app/test/utils/vue-reactive.spec.ts
````typescript
import { conditionalReactive, deepCloneReactive, toRawDeep, unreadonly } from '#base/app/utils/vue-reactive'
import { isReactive, reactive, readonly } from 'vue'
import { describe, expect, it } from 'vitest'

describe('vue-reactive.ts', () => {
  it('nullish値・primitive・組み込みオブジェクトは値を維持する', () => {
    expect(toRawDeep(null)).toBeNull()
    expect(toRawDeep(undefined)).toBeUndefined()
    expect(toRawDeep('text')).toBe('text')
    expect(toRawDeep(42)).toBe(42)
    expect(toRawDeep(true)).toBe(true)
    const date = new Date('2024-01-01')
    const regexp = /sample/gi
    expect(toRawDeep(date)).toBe(date)
    expect(toRawDeep(regexp)).toBe(regexp)
  })

  it('配列とネストしたreactiveオブジェクトからproxyを再帰的に除去する', () => {
    const source = reactive({ nested: reactive({ value: 1 }), items: [reactive({ value: 2 }), null] })
    const raw = toRawDeep(source)
    expect(raw).toEqual({ nested: { value: 1 }, items: [{ value: 2 }, null] })
    expect(isReactive(raw)).toBe(false)
    expect(isReactive(raw.nested)).toBe(false)
    expect(isReactive(raw.items[0])).toBe(false)
    expect(raw).not.toBe(source)
  })

  it('継承プロパティを複製せず、record以外の値をそのまま返す', () => {
    const prototype = { inherited: 'skip' }
    const source = Object.assign(Object.create(prototype) as Record<string, unknown>, { own: reactive({ value: 1 }) })
    expect(toRawDeep(source)).toEqual({ own: { value: 1 } })
    const symbol = Symbol('value')
    expect(toRawDeep(symbol)).toBe(symbol)
  })

  it('readonlyを解除した独立cloneを返す', () => {
    const source = readonly({ nested: { value: 1 }, items: [1, 2] })
    const result = unreadonly(source) as { nested: { value: number }, items: number[] }
    result.nested.value = 2
    result.items.push(3)
    expect(result).toEqual({ nested: { value: 2 }, items: [1, 2, 3] })
    expect(source).toEqual({ nested: { value: 1 }, items: [1, 2] })
  })

  it('reactiveオブジェクトを独立したreactive cloneにする', () => {
    const source = reactive({ nested: { value: 1 } })
    const clone = deepCloneReactive(source)
    expect(clone).toEqual(source)
    expect(clone).not.toBe(source)
    expect(clone.nested).not.toBe(source.nested)
    expect(isReactive(clone)).toBe(true)
    clone.nested.value = 2
    expect(source.nested.value).toBe(1)
  })

  it('条件がtrueの時だけreactiveにする', () => {
    const enabled = { value: 1 }
    const disabled = { value: 2 }
    expect(isReactive(conditionalReactive(enabled, true))).toBe(true)
    expect(conditionalReactive(disabled, false)).toBe(disabled)
    expect(isReactive(disabled)).toBe(false)
  })
})
````

## File: layers/base/app/test/utils/zod.spec.ts
````typescript
import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'
import { z } from 'zod/v3'
import {
  ensureValueOf,
  getMax,
  integral,
  isValueOf,
  makeRecursiveSchema,
  makeSchemaDeepReadOnly,
  makeSchemaReadOnly,
  objectToValueArray,
  requireValueOf,
} from '#base/app/utils/zod'

describe('isValueOf', () => {
  test('returns true if schema parses successfully', () => {
    const schema = z.object({
      a: z.number(),
    })
    const value = {
      a: 42,
    }
    expect(isValueOf(schema, value)).toEqual(true)
  })

  test('returns false if schema failed to parse', () => {
    const schema = z.object({
      a: z.number().negative(),
    })
    const value = {
      a: 42,
    }
    expect(isValueOf(schema, value)).toEqual(false)
  })
})

describe('ensureValueOf', () => {
  test('returns normally if schema parses successfully', () => {
    expect(() => ensureValueOf(z.string(), 'valid')).not.toThrow()
  })

  test('throws an error if schema failed to parse', () => {
    const schema = z.object({
      a: z.number().negative(),
    })
    const value = {
      a: 42,
    }
    expect(() => ensureValueOf(schema, value)).toThrow()
  })
})

describe('requireValueOf', () => {
  test('returns parsed values and throws validation errors', () => {
    expect(requireValueOf(z.coerce.number(), '42')).toBe(42)
    expect(() => requireValueOf(z.number(), '42')).toThrow()
  })
})

describe('objectToValueArray', () => {
  test('converts numeric-keyed constants while preserving order', () => {
    expect(objectToValueArray({ 0: 'ja', 1: 'en', 2: 'fr' })).toEqual(['ja', 'en', 'fr'])
  })

  test('rejects objects without index zero', () => {
    expect(() => objectToValueArray({ 1: 'en' })).toThrow('objectToValueArray: obj[0] is undefined.')
  })
})

describe('schema helpers', () => {
  const schema = z.object({ nested: z.object({ value: z.number() }) })

  test('accept readonly/deep-readonly compatible values using the source schema', () => {
    const value = { nested: { value: 1 } }
    expect(makeSchemaReadOnly(schema).safeParse(value).success).toBe(true)
    expect(makeSchemaDeepReadOnly(schema).safeParse(value).success).toBe(true)
    expect(makeSchemaReadOnly(schema).safeParse({ nested: { value: 'x' } }).success).toBe(false)
    expect(makeSchemaDeepReadOnly(schema).safeParse({ nested: null }).success).toBe(false)
  })

  test('integral accepts numbers and strings only', () => {
    expect(integral.safeParse(1).success).toBe(true)
    expect(integral.safeParse('1').success).toBe(true)
    expect(integral.safeParse(false).success).toBe(false)
  })
})

describe('getMax', () => {
  test.prop([fc.nat()])(
    'takes the num of z.string().max(num) from the _def',
    (n) => {
      expect(getMax(z.string().max(n)._def)).toBe(n)
    },
  )

  test('takes nothing from the zod schema does not have .max(num)', () => {
    expect(getMax(z.string()._def)).toBeUndefined()
  })

  test('takes a max constraint recursively from a union', () => {
    expect(getMax(z.union([z.number(), z.string().max(8)])._def)).toBe(8)
  })

  test('returns undefined for absent or unrelated definitions and malformed checks', () => {
    expect(getMax(undefined)).toBeUndefined()
    expect(getMax(z.number()._def)).toBeUndefined()
    expect(getMax({ typeName: 'ZodString', checks: [{ kind: 'max' }] } as never)).toBeUndefined()
    expect(getMax({ typeName: 123 } as never)).toBeUndefined()
  })
})

describe('makeRecursiveSchema', () => {
  test('can make a recursive schema and the schema can validate values recursively', () => {
    const treeSchema = makeRecursiveSchema(self =>
      z.union([
        z.object({ type: z.literal('leaf'), value: z.string() }),
        z.object({ type: z.literal('branch'), children: self.array() }),
      ]),
    )

    // treeSchemaは再帰構造のうち **一階層** だけバリデーションできる
    const x: unknown = {
      type: 'branch',
      children: [{ type: 'leaf', value: 'foo' }],
    }
    const tree = treeSchema.parse(x)
    if (tree.type !== 'branch') {
      throw new Error('Expected a branch, but got a leaf.')
    }
    /*
     * treeSchemaは一階層だけしかバリデーションできないので、yはSelf型になる
     * Self型は実質Record<never, unknown>な型。@/utils/zodがselfKeyをexportしていないため
     */
    const y = tree.children[0] ?? raiseError('Fatal error')

    // さらに階層を深堀したい場合は、再パースする必要がある
    const subTree = treeSchema.parse(y)
    if (subTree.type !== 'leaf') {
      throw new Error('Expected a leaf, but got a branch.')
    }
    expect(subTree.value).toBe('foo')
  })
})
````

## File: layers/base/app/test/app-and-nuxt.spec.ts
````typescript
import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../app.vue'

const iconPluginMock = vi.hoisted(() => ({
  options: undefined as
  | {
    iconCustomizer?: (
      collection: string,
      icon: string,
      props: Record<string, string>,
    ) => void
  }
  | undefined,
}))

vi.mock('unplugin-icons/vite', () => ({
  default: vi.fn((options: NonNullable<typeof iconPluginMock.options>) => {
    iconPluginMock.options = options
    return { name: 'mock-icons-plugin' }
  }),
}))

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('base application shell', () => {
  it('renders the Nuxt shell components', () => {
    const wrapper = shallowMount(App, {
      global: {
        stubs: {
          NuxtLayout: { template: '<main><slot /></main>' },
          NuxtRouteAnnouncer: { template: '<div data-announcer />' },
          NuxtWelcome: { template: '<div data-welcome />' },
        },
      },
    })

    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.find('[data-announcer]').exists()).toBe(true)
    expect(wrapper.find('[data-welcome]').exists()).toBe(true)
  })
})

describe('base Nuxt configuration', () => {
  it('contains the expected modules, aliases and icon customization', async () => {
    vi.stubEnv('VITE_OUTPUT_ENV', 'local')
    vi.stubEnv('VITEST', 'true')
    vi.resetModules()

    const { default: config } = await import('../../nuxt.config')

    expect(config.modules).toContain('@nuxt/test-utils/module')
    expect(config.alias).toMatchObject({ '#base': expect.any(String) })
    expect(config.runtimeConfig).toMatchObject({
      public: { outputEnv: 'local' },
    })

    const vitePlugins = config.vite?.plugins
    expect(vitePlugins).toHaveLength(3)

    const iconCustomizer = iconPluginMock.options?.iconCustomizer

    expect(iconCustomizer).toEqual(expect.any(Function))
    const customizeIcon = iconCustomizer as NonNullable<typeof iconCustomizer>
    const supportedProps: Record<string, string> = {}
    customizeIcon('hikky-icons', 'sample', supportedProps)
    expect(supportedProps).toEqual({ width: '1em', height: '1em' })

    for (const collection of ['sns-icons', 'ri']) {
      const props: Record<string, string> = {}
      customizeIcon(collection, 'sample', props)
      expect(props).toEqual({ width: '1em', height: '1em' })
    }

    const unsupportedProps: Record<string, string> = {}
    customizeIcon('other', 'sample', unsupportedProps)
    expect(unsupportedProps).toEqual({})
  })

  it('does not install the test module outside Vitest mode', async () => {
    vi.stubEnv('VITE_OUTPUT_ENV', 'production')
    vi.stubEnv('VITEST', 'false')
    vi.resetModules()

    const { default: config } = await import('../../nuxt.config')

    expect(config.modules).not.toContain('@nuxt/test-utils/module')
    expect(config.runtimeConfig).toMatchObject({
      public: { outputEnv: 'production' },
    })
  })
})
````

## File: layers/base/app/test/mock-close-icon.js
````javascript
export default {
  name: 'RiCloseLine',
  template: '<svg class="icon"><path /></svg>',
  props: ['class'],
}
````

## File: layers/base/app/test/composables/useDefaultApi.spec.ts
````typescript
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
````

## File: layers/base/app/test/composables/useExample.spec.ts
````typescript
import { describe, it, expect, vi } from 'vitest'
import type { NitroFetchRequest } from 'nitropack'
import { ref } from 'vue'
import { useExample } from '#base/app/composables/useExample'

// Nuxtのpayloadの一部をmockする
const useStateState: Record<string, any> = {} // eslint-disable-line @typescript-eslint/no-explicit-any

vi.mock('nuxt/app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('nuxt/app')>()
  return {
    ...actual,
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
  }
})

vi.mock('#base/app/plugins/runtimeConfig', () => ({
  default: vi.fn(() => ({})),
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
    default: vi.fn(() => ({})),
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

  it('refreshes both stores from refreshed data', async () => {
    const initial = [{ userId: 1, id: 1, title: 'before', completed: false }]
    const refreshed = [{ userId: 2, id: 2, title: 'after', completed: true }]
    const refresh = vi.fn(async () => {})
    const { exampleRef, exampleState, refreshExample } = useExample(initial)

    await refreshExample(refresh, ref(refreshed))

    expect(refresh).toHaveBeenCalledOnce()
    expect(exampleState.value).toEqual(refreshed)
    expect(exampleRef.value).toEqual(refreshed)
  })

  it('normalizes a null refreshed value to undefined', async () => {
    const refresh = vi.fn(async () => {})
    const { exampleRef, exampleState, refreshExample } = useExample()

    await refreshExample(refresh, ref(null))

    expect(exampleState.value).toBeUndefined()
    expect(exampleRef.value).toBeUndefined()
  })

  /*
   * TODO: このテストはしたいけど、現状はuseStateモックのテストになってしまっているので、コメントアウトしておく。うまい方法があればコメントアウトを解除して、実装して、このコメントを削除してください
   * it("should share example's latest state", () => {
   *   const { example } = useExample()
   *   expect(example.value).toEqual([
   *     {
   *       userId: 0,
   *       id: 0,
   *       title: 'Do something!',
   *       completed: true,
   *     },
   *     {
   *       userId: '1',
   *       id: '1',
   *       title: 'Say hello',
   *       completed: false,
   *     },
   *   ])
   * })
   */
})
````

## File: layers/base/app/test/composables/useLocale.spec.ts
````typescript
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import type { WritableComputedRef } from 'vue'
import {
  COOKIE_KEY,
  detectLocale,
  useLocale,
} from '#base/app/composables/useLocale'

const { cookieValue, requestHeaders, setLocaleMock } = vi.hoisted(() => ({
  cookieValue: { value: null as string | null },
  requestHeaders: { value: {} as Record<string, string | undefined> },
  setLocaleMock: vi.fn(),
}))

vi.mock('nuxt/app', async importOriginal => ({
  ...await importOriginal<typeof import('nuxt/app')>(),
  useRequestHeaders: vi.fn(() => requestHeaders.value),
}))

vi.mock('#base/app/utils/storage-control', async importOriginal => ({
  ...await importOriginal<typeof import('#base/app/utils/storage-control')>(),
  getSingleCookieValue: vi.fn((key: string) => {
    expect(key).toBe(COOKIE_KEY)
    return cookieValue.value
  }),
}))

vi.mock('vue-i18n', () => ({
  createI18n: vi.fn(() => ({ global: {}, mode: 'composition' })),
  useI18n: vi.fn(() => ({
    locale: ref('ja') as WritableComputedRef<string>,
  })),
}))

vi.mock('@vee-validate/i18n', () => ({
  setLocale: setLocaleMock,
}))

beforeEach(() => {
  cookieValue.value = null
  requestHeaders.value = {}
  setLocaleMock.mockClear()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

const setBrowserLanguage = (language: string) => {
  vi.stubGlobal('navigator', { language })
}

describe('getDefaultLanguage', () => {
  it.each([
    ['ja', 'fr-FR', 'ja'],
    ['en', 'ja-JP', 'en'],
    [null, 'ja-JP', 'ja'],
    [null, 'en-US', 'en'],
    [null, 'fr-FR', 'ja'],
    [null, '', 'ja'],
  ] as const)('cookie=%s browser=%s returns %s', (cookie, browser, expected) => {
    cookieValue.value = cookie
    setBrowserLanguage(browser)

    expect(useLocale().getDefaultLanguage()).toBe(expected)
  })

  it('reads the first request language without affecting the client result', () => {
    requestHeaders.value = { 'accept-language': 'en-US,en;q=0.9' }
    setBrowserLanguage('ja-JP')

    expect(useLocale().getDefaultLanguage()).toBe('ja')
  })

  it('falls back to Japanese when navigator is unavailable', () => {
    vi.stubGlobal('navigator', undefined)

    expect(useLocale().getDefaultLanguage()).toBe('ja')
  })
})

describe('detectLocale', () => {
  it.each([
    [{ isServer: true, isClient: false, requestLanguage: 'en-US' }, 'en-US'],
    [{ isServer: true, isClient: false }, 'ja'],
    [{ isServer: false, isClient: true, browserLanguage: 'en-US' }, 'en-US'],
    [{ isServer: false, isClient: true }, 'ja'],
    [{ isServer: false, isClient: false }, 'ja'],
  ] as const)('detects a locale from %o', (context, expected) => {
    expect(detectLocale(context)).toBe(expected)
  })
})

it('changes both validation and i18n locales', () => {
  const locale = useLocale()

  locale.changeLocale('en')

  expect(setLocaleMock).toHaveBeenCalledWith('en')
  expect(locale.localePath('')).toBe('/en')
  expect(locale.localePath('/path')).toBe('/en/path')
})

it('keeps Japanese paths unprefixed', () => {
  const locale = useLocale()
  expect(locale.localePath('')).toBe('')
  expect(locale.localePath('/path')).toBe('/path')
})
````

## File: layers/base/app/test/composables/useSocialShareLink.spec.ts
````typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import useSocialShareLink from '#base/app/composables/useSocialShareLink'

// vi.hoisted()でモックオブジェクトを定義
const { mockI18n, mockRouteValue, mockConfig } = vi.hoisted(() => {
  return {
    mockI18n: {
      locale: { value: 'ja' },
    },
    mockRouteValue: {
      value: undefined as { path: string } | null | undefined,
    },
    mockConfig: {
      public: {
        NUXT_ENV_BASE_URL: 'http://localhost:3000',
      },
      NUXT_ENV_BASE_URL: 'http://localhost:3000',
    },
  }
})

vi.mock('#app/nuxt', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app/nuxt')>()
  return {
    ...actual,
    useRuntimeConfig: vi.fn(() => {
      const runtimeConfig = actual.useRuntimeConfig?.()
      if (!runtimeConfig) return mockConfig
      Object.assign(runtimeConfig, mockConfig)
      Object.assign(
        ((runtimeConfig as Record<string, unknown>).public ??= {}),
        mockConfig.public,
      )
      return runtimeConfig
    }),
    useNuxtApp: vi.fn(() => {
      const nuxtApp = actual.useNuxtApp?.()
      if (!nuxtApp) return { $i18n: mockI18n }
      ;(nuxtApp as Record<string, unknown>).$i18n = mockI18n
      return nuxtApp
    }),
  }
})

vi.mock('#app/composables/router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app/composables/router')>()
  return {
    ...actual,
    useRoute: vi.fn(() => mockRouteValue.value === undefined
      ? actual.useRoute?.()
      : mockRouteValue.value),
  }
})

beforeEach(() => {
  mockI18n.locale.value = 'ja'
  mockRouteValue.value = { path: '/test/' }
  mockConfig.public.NUXT_ENV_BASE_URL = 'http://localhost:3000'
})

afterEach(() => {
  vi.restoreAllMocks()
})

const parseXShareUrl = (url: string) => new URL(url)

describe('locale en', () => {
  beforeEach(() => {
    mockI18n.locale.value = 'en'
  })

  describe('X', () => {
    it('no shareProps', () => {
      const generatedShareUrl = useSocialShareLink().getShareUrl('x')
      const parsed = parseXShareUrl(generatedShareUrl)
      expect(parsed.origin).toBe('https://x.com')
      expect(parsed.pathname).toBe('/intent/tweet')
      expect(parsed.searchParams.get('url')).toBe('http://localhost:3000/test/')
      expect(
        decodeURIComponent(parsed.searchParams.get('text') ?? ''),
      ).toBe('Share http://localhost:3000/test/\n')
    })

    it('set shareProps', () => {
      const shareProps = {
        text: 'shareText',
        twitterHashtags: ['hash1', 'hash2'],
        shareUrl: 'shareUrlStrings',
      }
      const generatedShareUrl = useSocialShareLink().getShareUrl(
        'x',
        shareProps,
      )
      expect(generatedShareUrl).toBe(
        `https://x.com/intent/tweet?url=${shareProps.shareUrl}&text=${
          shareProps.text
        }%0A&hashtags=${[...shareProps.twitterHashtags].join('%2C')}`,
      )
    })
  })

  it('Facebook', () => {
    const shareProps = {
      text: 'testText',
      shareUrl: 'testShareUrl',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'facebook',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/test/&t=testText',
    )
  })

  it('LINE', () => {
    const shareProps = {
      text: 'testText',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'line',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'http://line.me/R/msg/text/?testText',
    )
  })
})

describe('locale ja', () => {
  beforeEach(() => {
    mockI18n.locale.value = 'ja'
  })

  describe('X', () => {
    it('no shareProps', () => {
      const generatedShareUrl = useSocialShareLink().getShareUrl('x')
      const parsed = parseXShareUrl(generatedShareUrl)
      expect(parsed.origin).toBe('https://x.com')
      expect(parsed.pathname).toBe('/intent/tweet')
      expect(parsed.searchParams.get('url')).toBe('http://localhost:3000/test/')
      expect(
        decodeURIComponent(parsed.searchParams.get('text') ?? ''),
      ).toBe('http://localhost:3000/test/ をシェア\n')
    })

    it('set shareProps', () => {
      const shareProps = {
        text: 'shareText',
        twitterHashtags: ['hash1', 'hash2'],
        shareUrl: 'shareUrlStrings',
      }
      const generatedShareUrl = useSocialShareLink().getShareUrl(
        'x',
        shareProps,
      )
      expect(generatedShareUrl).toBe(
        'https://x.com/intent/tweet?url=shareUrlStrings&text=shareText%0A&hashtags=hash1%2Chash2',
      )
    })
  })

  it('Facebook', () => {
    const shareProps = {
      text: 'testText',
      shareUrl: 'testShareUrl',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'facebook',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/test/&t=testText',
    )
  })

  it('LINE', () => {
    const shareProps = {
      text: 'testText',
    }
    const generatedShareUrl = useSocialShareLink().getShareUrl(
      'line',
      shareProps,
    )
    expect(generatedShareUrl).toBe(
      'http://line.me/R/msg/text/?testText',
    )
  })

  it.each([
    ['/test', 'http://localhost:3000/test/'],
    ['/test/en', 'http://localhost:3000/test/en'],
    ['/test/en/', 'http://localhost:3000/test/en'],
  ])('normalizes route %s', (path, expected) => {
    mockRouteValue.value = { path }
    const parsed = parseXShareUrl(useSocialShareLink().getShareUrl('twitter'))
    expect(parsed.searchParams.get('url')).toBe(expected)
  })

  it('uses the base URL when a route is unavailable', () => {
    mockRouteValue.value = null
    const parsed = parseXShareUrl(useSocialShareLink().getShareUrl('x'))
    expect(parsed.searchParams.get('url')).toBe(
      'http://localhost:3000http://localhost:3000',
    )
  })

  it('handles an omitted base URL, empty hashtags, and unsupported target', () => {
    mockConfig.public.NUXT_ENV_BASE_URL = undefined as unknown as string
    mockRouteValue.value = { path: '/' }
    const { getShareUrl } = useSocialShareLink()

    const xUrl = parseXShareUrl(getShareUrl('x', { twitterHashtags: [] }))
    expect(xUrl.searchParams.has('hashtags')).toBe(false)
    expect(getShareUrl('unsupported')).toBe('')
  })
})
````

## File: layers/base/app/test/composables/useToast.spec.ts
````typescript
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { useToast, toastInjectionKey, type ToastComposable } from '#base/app/composables/useToast'

// $toastのモック - 固定インスタンス
const mockToast = {
  info: vi.fn(),
  success: vi.fn(),
  error: vi.fn(),
  warning: vi.fn(),
}

// useNuxtAppのモック
vi.mock('nuxt/app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('nuxt/app')>()
  return {
    ...actual,
    useNuxtApp: vi.fn(() => ({
      $toast: mockToast,
    })),
  }
})

// テストで使用するためにモックを取得
const { useNuxtApp } = await import('nuxt/app')
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseNuxtApp = useNuxtApp as any

describe('useToast composable', () => {
  beforeEach(() => {
    // 各モック関数の呼び出し履歴だけをクリア
    mockToast.info.mockClear()
    mockToast.success.mockClear()
    mockToast.error.mockClear()
    mockToast.warning.mockClear()
    mockUseNuxtApp.mockClear()
  })

  describe('useToast', () => {
    it('addToast関数を返す', () => {
      const { addToast } = useToast()
      expect(typeof addToast).toBe('function')
    })

    it('useNuxtAppから$toastを取得する', () => {
      useToast()
      expect(useNuxtApp).toHaveBeenCalled()
    })
  })

  describe('addToast', () => {
    it('デフォルトでinfoタイプのtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Test message')

      expect(mockToast.info).toHaveBeenCalledWith('Test message', {
        delay: undefined,
        closeButton: false,
      })
    })

    it('指定したタイプのtoastを表示する', () => {
      const { addToast } = useToast()

      addToast('Success message', 'success')
      expect(mockToast.success).toHaveBeenCalledWith('Success message', {
        delay: undefined,
        closeButton: false,
      })

      addToast('Error message', 'error')
      expect(mockToast.error).toHaveBeenCalledWith('Error message', {
        delay: undefined,
        closeButton: false,
      })

      addToast('Warning message', 'warning')
      expect(mockToast.warning).toHaveBeenCalledWith('Warning message', {
        delay: undefined,
        closeButton: false,
      })
    })

    it('時間を指定してtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Timed message', 'info', 5000)

      expect(mockToast.info).toHaveBeenCalledWith('Timed message', {
        delay: 5000,
        closeButton: false,
      })
    })

    it('閉じるボタンを有効にしてtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Closable message', 'info', undefined, true)

      expect(mockToast.info).toHaveBeenCalledWith('Closable message', {
        delay: undefined,
        closeButton: true,
      })
    })

    it('すべてのオプションを指定してtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Full options message', 'success', 3000, true)

      expect(mockToast.success).toHaveBeenCalledWith('Full options message', {
        delay: 3000,
        closeButton: true,
      })
    })

    it('各toastタイプが正しく呼ばれる', () => {
      const { addToast } = useToast()

      const types: ('info' | 'success' | 'error' | 'warning')[] = [
        'info',
        'success',
        'error',
        'warning',
      ]

      types.forEach((type) => {
        addToast(`${type} message`, type)
        expect(mockToast[type]).toHaveBeenCalledWith(`${type} message`, {
          delay: undefined,
          closeButton: false,
        })
      })
    })

    it('undefinedタイプの場合infoを使用', () => {
      const { addToast } = useToast()
      addToast('Default message', undefined)

      expect(mockToast.info).toHaveBeenCalledWith('Default message', {
        delay: undefined,
        closeButton: false,
      })
    })

    it('isClosableのデフォルト値はfalse', () => {
      const { addToast } = useToast()
      addToast('Message without closable param', 'info', 1000)

      expect(mockToast.info).toHaveBeenCalledWith('Message without closable param', {
        delay: 1000,
        closeButton: false,
      })
    })
  })

  describe('型定義', () => {
    it('ToastComposable型が正しく推論される', () => {
      const toast: ToastComposable = useToast()
      expect(toast).toHaveProperty('addToast')
      expect(typeof toast.addToast).toBe('function')
    })

    it('toastInjectionKeyがSymbolである', () => {
      expect(typeof toastInjectionKey).toBe('symbol')
      expect(toastInjectionKey.toString()).toContain('toast')
    })
  })

  describe('デフォルトエクスポート', () => {
    it('useToastがデフォルトエクスポートされている', async () => {
      const defaultExport = (await import('#base/app/composables/useToast')).default
      expect(defaultExport).toBe(useToast)
    })
  })

  describe('エラーハンドリング', () => {
    it('$toastが存在しない場合でもエラーにならない', () => {
      // useNuxtAppのモックを一時的に上書き
      mockUseNuxtApp.mockReturnValueOnce({
        $toast: undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)

      expect(() => {
        const { addToast } = useToast()
        addToast('not displayed')
      }).not.toThrow()
    })

    it('対象メソッドが存在しない場合は何もしない', () => {
      mockUseNuxtApp.mockReturnValueOnce({
        $toast: {},
      })
      const { addToast } = useToast()

      expect(() => addToast('not displayed')).not.toThrow()
    })

    it('無効なtoastタイプでもエラーにならない', () => {
      const { addToast } = useToast()

      expect(() => {
        // 型安全でないが、ランタイムでのテスト
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        addToast('Test', 'invalid' as any)
      }).not.toThrow()
    })
  })
})
````

## File: layers/base/app/test/composables/useValidationRules.spec.ts
````typescript
import { fc, test } from '@fast-check/vitest'
import { beforeEach, afterEach, expect, vi } from 'vitest'
import useValidationRules from '#base/app/composables/useValidationRules'

// vue-i18nのモックをトップレベルで定義
vi.mock('vue-i18n', () => ({
  createI18n: vi.fn(() => ({ global: {}, mode: 'composition' })),
  useI18n: vi.fn(() => ({
    t: (key: string, ..._args: unknown[]) => `dummy-${key}`,
    locale: { value: 'ja' },
  })),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('validates (with trasnlate mock)', () => {
  const rules = useValidationRules()

  expect(() => rules.required.parse('')).toThrowError()
  expect(() => rules.required.parse('a')).not.toThrowError()

  expect(() => rules.stringRequired.parse(null)).toThrowError()
  expect(() => rules.stringRequired.parse(undefined)).toThrowError()
  expect(() => rules.stringRequired.parse('')).not.toThrowError()

  expect(() => rules.numberRequired.parse(null)).toThrowError()
  expect(() => rules.numberRequired.parse(undefined)).toThrowError()
  expect(() => rules.numberRequired.parse(0)).not.toThrowError()

  expect(() => rules.url.parse('')).toThrowError()
  expect(() => rules.url.parse('a')).toThrowError()
  expect(() => rules.url.parse('https://example.com')).not.toThrowError()

  expect(() => rules.nonRequiredUrl.parse('')).not.toThrowError()
  expect(() => rules.nonRequiredUrl.parse('a')).toThrowError()
  expect(() =>
    rules.nonRequiredUrl.parse('https://example.com'),
  ).not.toThrowError()

  expect(() => rules.excluded([0]).parse(0)).toThrowError()
  expect(() => rules.excluded([0]).parse(1)).not.toThrowError()

  const fileSizeIs1 = new File(['x'], 'dummy.png')
  expect(() => rules.image({}).parse(undefined)).not.toThrowError()
  expect(() => rules.image({}).parse(fileSizeIs1)).not.toThrowError()
  expect(() => rules.image({ required: true }).parse(undefined)).toThrowError()
  expect(() => rules.image({ maxSize: 0 }).parse(fileSizeIs1)).toThrowError()
  expect(() => rules.image({ maxSize: 1 }).parse(undefined)).not.toThrowError()
  expect(() => rules.image({ maxSize: 1 }).parse(fileSizeIs1)).not.toThrowError()
})

test.prop([fc.nat(), fc.nat()])('validates minValue successfully', (n, m) => {
  fc.pre(n <= m)
  const rules = useValidationRules()
  expect(() => rules.minValue(n).parse(m)).not.toThrowError()
  expect(() => rules.minValue(n).parse(String(m))).not.toThrowError()
})

test.prop([fc.nat(), fc.nat()])('fails to validate minValue', (n, m) => {
  fc.pre(n > m)
  const rules = useValidationRules()
  expect(() => rules.minValue(n).parse(m)).toThrowError()
})

test.prop([fc.nat(), fc.nat()])('validates maxValue successfully', (n, m) => {
  fc.pre(n >= m)
  const rules = useValidationRules()
  expect(() => rules.maxValue(n).parse(m)).not.toThrowError()
  expect(() => rules.maxValue(n).parse(String(m))).not.toThrowError()
})

test.prop([fc.nat(), fc.nat()])('fails to validate maxValue', (n, m) => {
  fc.pre(n < m)
  const rules = useValidationRules()
  expect(() => rules.maxValue(n).parse(m)).toThrowError()
})

test.prop([fc.nat(), fc.string()])('validates max successfully', (n, s) => {
  fc.pre(n >= s.length)
  const rules = useValidationRules()
  expect(() => rules.max(n).parse(s)).not.toThrowError()
})

test.prop([fc.nat(), fc.string()])('fails to validate max', (n, s) => {
  fc.pre(n < s.length)
  const rules = useValidationRules()
  expect(() => rules.max(n).parse(s)).toThrowError()
})
````

## File: layers/base/app/test/utils/default-api.spec.ts
````typescript
import { describe, it, expect, vi } from 'vitest'
import type { NitroFetchRequest } from 'nitropack'
import api, { defaultApi } from '#base/app/utils/default-api'
import { requireRuntimeConfig } from '#base/app/plugins/runtimeConfig'
import { pluginFetchApi } from '#base/app/plugins/fetch'

// NOTE: src/utils/default-api.tsのテストとして当該ファイルがimportしているファイルからの変数「requireRuntimeConfig」をモックする。
vi.mock('#base/app/plugins/runtimeConfig', () => {
  return {
    default: vi.fn(() => ({})),
    requireRuntimeConfig: vi.fn(() => {
      // NOTE: default-api.tsのテストとしてrequireRuntimeConfigが{public.baseUrl}としてダミーURLを返すだけの処理を行うようにモックする
      return {
        public: {
          baseUrl: '/test-api',
        },
      }
    }),
  }
})

// NOTE: 本テストにおいて実際にAPI叩くわけではなく、useFetchをすげ替えたいのでダミーとなるmock作成
vi.mock('#base/app/plugins/fetch', () => {
  return {
    default: vi.fn(() => ({})),
    pluginFetchApi: vi.fn((path: string, options: NitroFetchRequest) => {
      return { path, options }
    }),
  }
})

// NOTE: 本テストにおいて実際にAPI叩くわけではなく、useFetchをすげ替えたいのでダミーとなるmock作成
vi.mock('ofetch', () => {
  return {
    $fetch: vi.fn((path: string, options: NitroFetchRequest) => {
      return { path, options }
    }),
  }
})

describe('api', () => {
  // NOTE: default-api.getの返却値のテストとして、引数のpathやfetchOptionを入力して、返却値として期待するexpectObjと同等かテストする。その際、onRequestとonResponseは複雑化するので、空オブジェクトで省略としてtoMatchObjectで合格するか検査する。
  it('get', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'GET',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('get', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('post', () => {
    // NOET: 以下getと同様にテストする。methodはgetではなく、相送信methodに準じた値に変化するので注意
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'POST',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('post', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('put', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'PUT',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('put', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('patch', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'PATCH',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('patch', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('delete', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'DELETE',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('delete', path, fetchOptions)).toMatchObject(expectObj)
  })

  it.each([
    ['GET', 'GET'],
    ['POST', 'POST'],
    ['PUT', 'PUT'],
    ['PATCH', 'PATCH'],
    ['DELETE', 'DELETE'],
  ] as const)('dispatches uppercase %s', (method, expected) => {
    expect(api(method, '/uppercase')).toMatchObject({
      path: '/uppercase',
      options: { method: expected },
    })
  })

  it('falls back to GET for methods without a dedicated helper', () => {
    expect(api('HEAD', '/fallback')).toMatchObject({
      path: '/fallback',
      options: { method: 'GET' },
    })
  })

  it.each([
    ['get', defaultApi.get],
    ['post', defaultApi.post],
    ['put', defaultApi.put],
    ['patch', defaultApi.patch],
    ['delete', defaultApi.delete],
  ] as const)('%s prefers an explicit baseURL and rejects a missing configured baseURL', (_name, request) => {
    expect(request('/explicit', { baseURL: '/explicit-api' })).toMatchObject({
      options: { baseURL: '/explicit-api' },
    })

    vi.mocked(requireRuntimeConfig).mockReturnValueOnce({ public: {} } as ReturnType<typeof requireRuntimeConfig>)
    expect(() => request('/missing')).toThrow('Missing config baseUrl')
  })

  it('uses a plugin fetch implementation when available', () => {
    const fetchApi = vi.fn((path: string, options: unknown) => ({ path, options, source: 'plugin' }))
    vi.mocked(pluginFetchApi).mockReturnValueOnce({ fetchApi } as never)
    expect(defaultApi.get('/plugin')).toMatchObject({ source: 'plugin', path: '/plugin' })
    expect(fetchApi).toHaveBeenCalledOnce()
  })

  it('snake-cases object request bodies but leaves unsupported bodies unchanged', () => {
    type RequestContext = { options: { body?: unknown } }
    const result = defaultApi.post('/hooks') as unknown as {
      options: { onRequest: (context: RequestContext) => void }
    }
    const onRequest = result.options.onRequest

    const absent: RequestContext = { options: {} }
    const primitive: RequestContext = { options: { body: 'value' } }
    const formData: RequestContext = { options: { body: new FormData() } }
    const object: RequestContext = { options: { body: { camelCase: 1, nestedValue: { innerKey: 2 } } } }
    onRequest(absent)
    onRequest(primitive)
    onRequest(formData)
    onRequest(object)

    expect(absent.options.body).toBeUndefined()
    expect(primitive.options.body).toBe('value')
    expect(formData.options.body).toBeInstanceOf(FormData)
    expect(object.options.body).toEqual({ camel_case: 1, nested_value: { inner_key: 2 } })
  })

  it('camel-cases object responses but leaves empty and primitive responses unchanged', async () => {
    type ResponseContext = { response: { _data?: unknown } }
    const result = defaultApi.get('/hooks') as unknown as {
      options: { onResponse: (context: ResponseContext) => Promise<void> }
    }
    const onResponse = result.options.onResponse

    const absent: ResponseContext = { response: {} }
    const primitive: ResponseContext = { response: { _data: 'value' } }
    const object: ResponseContext = { response: { _data: { snake_case: 1, nested_value: { inner_key: 2 } } } }
    await onResponse(absent)
    await onResponse(primitive)
    await onResponse(object)

    expect(absent.response._data).toBeUndefined()
    expect(primitive.response._data).toBe('value')
    expect(object.response._data).toEqual({ snakeCase: 1, nestedValue: { innerKey: 2 } })
  })
})
````

## File: layers/base/app/test/utils/default-factory.spec.ts
````typescript
import { describe, it, expect } from 'vitest'
import exampleRepository from '#base/app/repositories/exampleRepository'
import {
  defaultRepositories,
  defaultRepositoryFactory,
} from '#base/app/utils/default-factory'

describe('defaultRepositoryFactory', () => {
  it('should return the correct repository when a valid key is provided', () => {
    const repository = defaultRepositoryFactory.get('example')
    expect(repository).toBe(exampleRepository)
  })
})

describe('defaultRepositories', () => {
  it('should contain the example repository', () => {
    expect(defaultRepositories.example).toBe(exampleRepository)
  })
})
````

## File: layers/base/app/test/utils/file-control.spec.ts
````typescript
import { getBase64ByFile, getExtFromType, getFileByBase64, readFileAsBlob } from '#base/app/utils/file-control'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

// NOTE: JSDOMでURL.createObjectURLはサポートされていない。その為、本来URL.createObjectURLが返してくれるURLを偽装してテストする。
beforeEach(() => {
  // NOTE: URL.createObjectURLが本来動作すれば次のようなドメイン配下のURLが発行される。例）62a0f348-495f-4221-b768-7b08c2759e08
  URL.createObjectURL = vi.fn(() => 'blob:dummy-for-objectURL')
  URL.revokeObjectURL = vi.fn()
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('readFileAsBlob', () => {
  // NOTE: 実際にテストで画像を渡せないので、下準備としてFile型のダミーを作成する
  const file = new File([''], 'test.png')
  const objectUrl = readFileAsBlob(file)
  // NOTE: readFileAsBlob(file)にて画像のオブジェクトURLが作成されるか、返される文字列がURL形式であることをテストする。
  expect(objectUrl.startsWith('blob:')).toBe(true)
})

test('readFileAsBlobは画像load後にObject URLを解放する', () => {
  class MockImage {
    static latest: MockImage | undefined
    src = ''
    onload: (() => void) | null = null
    constructor() {
      MockImage.latest = this
    }
  }
  vi.stubGlobal('Image', MockImage)

  expect(readFileAsBlob(new File(['image'], 'test.png'))).toBe('blob:dummy-for-objectURL')
  MockImage.latest?.onload?.()
  expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:dummy-for-objectURL')
})

describe('getExtFromType', () => {
  test('image/pngから.pngを取得できる', () => {
    const ext = getExtFromType('image/png')
    expect(ext).toBe('.png')
  })

  test('image/jpegから.jpegを取得できる', () => {
    const ext = getExtFromType('image/jpeg')
    expect(ext).toBe('.jpeg')
  })

  test('application/pdfから.pdfを取得できる', () => {
    const ext = getExtFromType('application/pdf')
    expect(ext).toBe('.pdf')
  })

  test('text/plainから.plainを取得できる', () => {
    const ext = getExtFromType('text/plain')
    expect(ext).toBe('.plain')
  })

  test('video/mp4から.mp4を取得できる', () => {
    const ext = getExtFromType('video/mp4')
    expect(ext).toBe('.mp4')
  })
})

describe('getBase64ByFile', () => {
  test('Fileオブジェクトからbase64文字列を取得できる', async () => {
    // FileReaderのモック
    const mockResult = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAA='
    class MockFileReader {
      result: string | ArrayBuffer | null = mockResult
      onload: ((e: ProgressEvent<FileReader>) => void) | null = null
      readAsDataURL(_file: File) {
        setTimeout(() => {
          this.onload?.({ target: { result: this.result } } as ProgressEvent<FileReader>)
        }, 0)
      }
    }

    vi.stubGlobal('FileReader', MockFileReader as unknown as typeof FileReader)

    const file = new File(['test content'], 'test.png', { type: 'image/png' })
    const base64 = await getBase64ByFile(file)

    expect(base64).toBe(mockResult)
  })

  test('FileReaderのresultがstring以外の場合はエラーがthrowされる', async () => {
    class MockFileReader {
      result: string | ArrayBuffer | null = null
      onload: ((e: ProgressEvent<FileReader>) => void) | null = null
      readAsDataURL = vi.fn(() => {
        queueMicrotask(() => {
          this.onload?.({ target: { result: this.result } } as ProgressEvent<FileReader>)
        })
      })
    }

    vi.stubGlobal('FileReader', MockFileReader as unknown as typeof FileReader)

    const file = new File(['test content'], 'test.png', { type: 'image/png' })

    await expect(getBase64ByFile(file)).rejects.toThrow('Failed to get base64')
  })

  test('空のFileオブジェクトでも動作する', async () => {
    const mockResult = 'data:application/octet-stream;base64,'
    class MockFileReader {
      result: string | ArrayBuffer | null = mockResult
      onload: ((e: ProgressEvent<FileReader>) => void) | null = null
      readAsDataURL = vi.fn(() => {
        setTimeout(() => {
          this.onload?.({ target: { result: this.result } } as ProgressEvent<FileReader>)
        }, 0)
      })
    }

    vi.stubGlobal('FileReader', MockFileReader as unknown as typeof FileReader)

    const file = new File([''], 'empty.txt', { type: 'text/plain' })
    const base64 = await getBase64ByFile(file)

    expect(base64).toBe(mockResult)
  })
})

describe('getFileByBase64', () => {
  test('MIME typeとファイル名を保ったFileを生成する', async () => {
    const file = getFileByBase64('data:text/plain;base64,SGVsbG8=', 'hello.txt')
    expect(file).toBeInstanceOf(File)
    expect(file).toMatchObject({ name: 'hello.txt', type: 'text/plain', size: 5 })
    expect(await file?.text()).toBe('Hello')
  })

  test('ファイル名とMIME typeが無い場合は既定値を使う', () => {
    const file = getFileByBase64('data;base64,QQ==')
    expect(file).toMatchObject({ name: 'file', type: 'image/png', size: 1 })
  })

  test('data部がない入力を拒否する', () => {
    expect(getFileByBase64('invalid')).toBeNull()
    expect(getFileByBase64('data:image/png;base64,')).toBeNull()
  })

  test('不正なbase64を捕捉してnullを返す', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined)
    expect(getFileByBase64('data:image/png;base64,%%%')).toBeNull()
    expect(consoleError).toHaveBeenCalledOnce()
  })
})
````

## File: layers/base/app/test/utils/image.spec.ts
````typescript
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { getImageUrl, toImage } from '#base/app/utils/image'

// HTMLImageElement mock interface
type EventHandler = (...args: unknown[]) => void
interface MockHTMLImageElement {
  addEventListener: (event: string, handler: EventHandler) => void
  removeEventListener: (event: string, handler: EventHandler) => void
  src: string
  onload: (() => void) | null
  onerror: ((error: unknown) => void) | null
}

describe('image.ts', () => {
  const mockObjectURL = 'blob:http://localhost:3000/test-blob-url'
  let lastImage: (MockHTMLImageElement & { listeners: Record<string, EventHandler | undefined> }) | null

  beforeEach(() => {
    vi.clearAllMocks()
    // URL.createObjectURL と URL.revokeObjectURL のモック
    global.URL.createObjectURL = vi.fn(() => mockObjectURL)
    global.URL.revokeObjectURL = vi.fn()

    // Image クラスのモック
    class LocalImageMock implements MockHTMLImageElement {
      listeners: Record<string, EventHandler | undefined> = {}
      src = ''
      onload: (() => void) | null = null
      onerror: ((error?: unknown) => void) | null = null

      constructor() {
        // テスト検証用に最後に生成されたインスタンスを参照する
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        lastImage = this
      }

      addEventListener = vi.fn((event: string, handler: EventHandler) => {
        this.listeners[event] = handler
        if (event === 'load') this.onload = handler as () => void
        if (event === 'error') this.onerror = handler as (error?: unknown) => void
      })

      removeEventListener = vi.fn((event: string, handler: EventHandler) => {
        if (this.listeners[event] === handler) this.listeners[event] = undefined
        if (event === 'load' && this.onload === handler) this.onload = null
        if (event === 'error' && this.onerror === handler) this.onerror = null
      })
    }

    vi.stubGlobal('Image', LocalImageMock as unknown as typeof Image)
  })

  describe('getImageUrl', () => {
    it('FileオブジェクトからURLを生成する', () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const result = getImageUrl(file)

      expect(global.URL.createObjectURL).toHaveBeenCalledWith(file)
      expect(result).toBe(mockObjectURL)
    })

    it('BlobオブジェクトからURLを生成する', () => {
      const blob = new Blob(['test'], { type: 'image/png' })
      const result = getImageUrl(blob)

      expect(global.URL.createObjectURL).toHaveBeenCalledWith(blob)
      expect(result).toBe(mockObjectURL)
    })

    it('Image要素が作成され、適切なイベントリスナーが設定される', () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      getImageUrl(file)

      const mockImage = lastImage!
      expect(mockImage.addEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(mockImage.addEventListener).toHaveBeenCalledWith('error', expect.any(Function))
      expect(mockImage.src).toBe(mockObjectURL)
    })

    it('load時にObject URLを解放する', () => {
      getImageUrl(new Blob(['test']))
      lastImage?.listeners['load']?.()
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('error時にObject URLを解放して原因をログ出力する', () => {
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined)
      getImageUrl(new Blob(['test']))
      const cause = new Error('decode failed')
      lastImage?.listeners['error']?.({ error: cause })
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
      expect(consoleError).toHaveBeenCalledWith(cause)
    })
  })

  describe('toImage', () => {
    it('FileからHTMLImageElementを生成する', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['load']?.()
      const result = await promise

      expect(result).toBe(lastImage)
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(file)
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('BlobからHTMLImageElementを生成する', async () => {
      const blob = new Blob(['test'], { type: 'image/png' })
      const promise = toImage(blob)
      lastImage?.listeners['load']?.()
      const result = await promise

      expect(result).toBe(lastImage)
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(blob)
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('画像読み込みエラー時にPromiseをrejectする', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['error']?.('Image load failed')

      await expect(promise).rejects.toThrow('Image load failed')
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('画像のsrcにcreateObjectURLの結果が設定される', () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      void toImage(file)

      expect(lastImage?.src).toBe(mockObjectURL)
    })

    it('成功時にイベントリスナーが削除される', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['load']?.()
      await promise

      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('error', expect.any(Function))
    })

    it('エラー時にイベントリスナーが削除される', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['error']?.('Error')
      await expect(promise).rejects.toThrow()

      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('error', expect.any(Function))
    })
  })
})
````

## File: layers/base/app/test/e2e/sample.spec.ts
````typescript
import { test, expect } from '@playwright/test'

test.describe('Top Page', () => {
  test('should display top page successfully', async ({ page }) => {
    // トップページにアクセス
    const response = await page.goto('/')

    // ページが正常にロードされることを確認
    await expect(page).toHaveTitle(/.*/)

    // ページのステータスが200であることを確認（正常にレスポンスが返ってくる）
    expect(response?.status()).toBe(200)
  })

  test('should have accessible content', async ({ page }) => {
    await page.goto('/')

    // ページのbody要素が存在することを確認
    const body = page.locator('body')
    await expect(body).toBeVisible()

    // HTMLドキュメントが適切にレンダリングされていることを確認
    const htmlContent = await page.content()
    expect(htmlContent).toContain('<!DOCTYPE html>')
  })
})
````

## File: layers/base/app/test/setup.ts
````typescript
import { vi } from 'vitest'

// Type declarations for global mocks - range and useSlots are handled by auto-imports

function createStorageMock() {
  const store = new Map<string, string>()

  return {
    get length() {
      return store.size
    },
    clear: vi.fn(() => {
      store.clear()
    }),
    getItem: vi.fn((key: string) => store.get(key) ?? null),
    key: vi.fn((index: number) => Array.from(store.keys())[index] ?? null),
    removeItem: vi.fn((key: string) => {
      store.delete(key)
    }),
    setItem: vi.fn((key: string, value: string) => {
      store.set(key, value)
    }),
  }
}

Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: createStorageMock(),
})

Object.defineProperty(globalThis, 'sessionStorage', {
  configurable: true,
  value: createStorageMock(),
})

// Global mock for all icon imports
vi.mock('~icons/ri/close-line', () => ({
  default: {
    name: 'RiCloseLine',
    template: '<svg class="icon"><path /></svg>',
    props: ['class'],
  },
}))

// Mock Nuxt composables using vi.mock to avoid conflicts with auto-imports
vi.mock('#app/composables/useI18n', () => ({
  useI18n: vi.fn(() => ({
    t: vi.fn((key: string) => {
      const messages: Record<string, string> = {
        next: 'Next',
        prev: 'Prev',
      }
      return messages[key] || key
    }),
    locale: { value: 'ja' },
  })),
}))

// Basic Nuxt app mocks used by plugins and middleware
vi.mock('nuxt/app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('nuxt/app')>()
  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: actual.useNuxtApp ?? (() => ({ $i18n: { locale: 'ja' } })),
  }
})

vi.mock('#app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app')>()
  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: actual.useNuxtApp ?? (() => ({ $i18n: { locale: 'ja' } })),
  }
})

vi.mock('#app/composables/useRoute', () => ({
  useRoute: vi.fn(() => ({
    path: '/test',
    query: { page: '1' },
  })),
}))

vi.mock('#app/composables/useLocalePath', () => ({
  useLocalePath: vi.fn(() => (path: string) => path),
}))

// Nuxt 4 component auto-imports resolve via #imports.
vi.mock('#imports', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#imports')>()
  return {
    ...actual,
    useLocalePath: vi.fn(() => (location: string | { path?: string }) =>
      typeof location === 'string' ? location : (location?.path ?? ''),
    ),
    useLocaleRoute: vi.fn(() => (location: unknown) => location),
    useSwitchLocalePath: vi.fn(() => () => ''),
    useRouteBaseName: vi.fn(() => () => ''),
    useLocaleHead: vi.fn(() => ({})),
  }
})

vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/composables/index', async (importOriginal) => {
  const actual = await importOriginal<Record<string, unknown>>()
  return {
    ...actual,
    useLocalePath: vi.fn(() => (location: string | { path?: string }) =>
      typeof location === 'string' ? location : (location?.path ?? ''),
    ),
    useLocaleRoute: vi.fn(() => (location: unknown) => location),
    useSwitchLocalePath: vi.fn(() => () => ''),
    useRouteBaseName: vi.fn(() => () => ''),
    useLocaleHead: vi.fn(() => ({})),
  }
})
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/composables/index.js', async (importOriginal) => {
  const actual = await importOriginal<Record<string, unknown>>()
  return {
    ...actual,
    useLocalePath: vi.fn(() => (location: string | { path?: string }) =>
      typeof location === 'string' ? location : (location?.path ?? ''),
    ),
    useLocaleRoute: vi.fn(() => (location: unknown) => location),
    useSwitchLocalePath: vi.fn(() => () => ''),
    useRouteBaseName: vi.fn(() => () => ''),
    useLocaleHead: vi.fn(() => ({})),
  }
})

// Avoid plugin initialization noise in unit tests (plugins themselves are not under test here).
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/route-locale-detect.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/switch-locale-path-ssr.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/preload.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/@nuxtjs/device/dist/runtime/plugin.js', () => ({
  default: () => {},
}))
vi.mock('../../../node_modules/nuxt-site-config/dist/runtime/app/plugins/i18n.js', () => ({
  default: () => {},
}))
vi.mock('@gtm-support/vue-gtm', () => ({
  createGtm: vi.fn(() => ({
    install: vi.fn(),
  })),
}))

vi.mock('vue', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue')>()
  return {
    ...actual,
    nextTick: vi.fn().mockResolvedValue(undefined),
  }
})

// Global utility functions for tests - range and useSlots handled by auto-imports

// HTMLDialogElement mock for jsdom
if (!global.HTMLDialogElement) {
  global.HTMLDialogElement = class HTMLDialogElement extends HTMLElement {
    closedBy = ''
    open = false
    returnValue = ''

    showModal = vi.fn(() => {
      this.open = true
    })

    close = vi.fn(() => {
      this.open = false
    })

    show = vi.fn(() => {
      this.open = true
    })

    requestClose = vi.fn()

    override addEventListener(_event: string, _callback: (...args: unknown[]) => void) {
      // Mock implementation
    }

    override removeEventListener(_event: string, _callback: (...args: unknown[]) => void) {
      // Mock implementation
    }
  }
}
````
