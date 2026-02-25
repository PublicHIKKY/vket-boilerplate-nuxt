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
- Only files matching these patterns are included: layers/base/app/plugins/**/*, layers/base/app/middleware/**/*, layers/base/app/app.vue
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  base/
    app/
      middleware/
        locales.global.ts
      plugins/
        fetch.ts
        gtm.client.ts
        runtimeConfig.ts
        toast.client.ts
        toast.server.ts
      app.vue
```

# Files

## File: layers/base/app/middleware/locales.global.ts
```typescript
import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from 'nuxt/app'
import { Composer, VueI18n } from 'vue-i18n'
import {
  getSingleCookieValue,
  setSingleCookieValue,
} from '../utils/storage-control'

const jaLanguage = 'ja'
const enLanguage = 'en'
const cookieKey = 'VUEI18N_MANUAL_LOCALE'

// i18用の管理を行う
export default defineNuxtRouteMiddleware((to, _from) => {
  if (import.meta.server) return
  const globalI18n = useNuxtApp().$i18n as VueI18n | Composer
  const cookieLanguage = getSingleCookieValue(cookieKey) || null
  const toFullPath = to?.fullPath.endsWith('/')
    ? to.fullPath
    : `${to.fullPath}/`
  // note: localeはComputedRefであるはず。stringならこの処理は不具合につながるからスキップ
  if (typeof globalI18n.locale === 'string') return
  if (!cookieLanguage) {
    if (toFullPath.includes(`/${enLanguage}/`)) {
      if (globalI18n.locale.value === enLanguage) {
        setSingleCookieValue(cookieKey, enLanguage)
      }
      if (globalI18n.locale.value === jaLanguage) {
        setSingleCookieValue(cookieKey, jaLanguage)
        return navigateTo(toFullPath.replace(`/${enLanguage}/`, '/'))
      }
    } else {
      if (globalI18n.locale.value === jaLanguage) {
        setSingleCookieValue(cookieKey, jaLanguage)
      }
      if (globalI18n.locale.value === enLanguage) {
        setSingleCookieValue(cookieKey, enLanguage)
        const path = `/${enLanguage}${to.path}/`.replace('//', '/')
        return navigateTo(path)
      }
    }
    // pathにlocaleが含まれるかのみで判定。i18nとcookieの両方を確認して言語設定に齟齬がないように調整する。リダイレクトはさせない。
  } else {
    if (toFullPath.includes(`/${enLanguage}/`)) {
      if (globalI18n.locale.value !== enLanguage) {
        globalI18n.locale.value = enLanguage
      }
      if (cookieLanguage !== enLanguage) {
        setSingleCookieValue(cookieKey, enLanguage)
      }
      return
    }
    // locale pathが設定されていない場合は、jaとして扱う
    if (globalI18n.locale.value !== jaLanguage) {
      globalI18n.locale.value = jaLanguage
    }
    if (cookieLanguage !== jaLanguage) {
      setSingleCookieValue(cookieKey, jaLanguage)
    }
  }
})
```

## File: layers/base/app/plugins/fetch.ts
```typescript
import { defineNuxtPlugin } from 'nuxt/app'

let fetchApi: typeof $fetch

export default defineNuxtPlugin(() => {
  fetchApi = $fetch
  return {
    provide: {
      fetchApi: $fetch,
    },
  }
})

export const pluginFetchApi = () => {
  return {
    fetchApi,
  }
}
```

## File: layers/base/app/plugins/gtm.client.ts
```typescript
import { createGtm } from '@gtm-support/vue-gtm'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(({ vueApp }) => {
  const config = useRuntimeConfig()
  const gtm = createGtm({ id: config.public.gtmId })
  vueApp.use(gtm)
  return {} // `provide: { gtm }` is not needed here (is in gtm plugin)
})
```

## File: layers/base/app/plugins/runtimeConfig.ts
```typescript
import { defineNuxtPlugin } from 'nuxt/app'
import type { RuntimeConfig } from 'nuxt/schema'

/**
 * 型を退化されたruntimeConfig。
 * [[requireRuntimeConfig]]のために、退化されました。
 */
let runtimeConfig: RuntimeConfig | undefined

export default defineNuxtPlugin(({ $config }) => {
  if ($config === undefined) {
    throw new TypeError('#base/app/plugins/runtimeConfig failed.')
  }
  runtimeConfig = $config
})

type Config = Record<string, string | undefined>
type ProcessEnv = Config & {
  public?: Config
}
/**
 * useRuntimeConfig()が使えないときに使う、同等な関数。
 */
export const requireRuntimeConfig: () => ProcessEnv | RuntimeConfig = () => {
  if (runtimeConfig !== undefined) {
    return runtimeConfig
  }

  // playwrightテスト用
  if (process?.env !== undefined) {
    return process.env
  }

  throw new TypeError('#base/app/plugins/runtimeConfig: Not satisfied.')
}
```

## File: layers/base/app/plugins/toast.client.ts
```typescript
import { defineNuxtPlugin } from 'nuxt/app'
import Vue3Toastify, { toast, UpdateOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin(({ vueApp }) => {
  const options: UpdateOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
    autoClose: 3000,
  }
  vueApp.use(Vue3Toastify, options)

  return {
    provide: { toast },
  }
})
```

## File: layers/base/app/plugins/toast.server.ts
```typescript
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast: {
        success: (message: string) => {
          console.warn(`[toast success]: ${message}`)
        },
        error: (message: string) => {
          console.error(`[toast error]: ${message}`)
        },
      },
    },
  }
})
```

## File: layers/base/app/app.vue
```vue
<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </NuxtLayout>
</template>
```
