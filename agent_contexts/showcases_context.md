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
- Only files matching these patterns are included: layers/showcases/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  showcases/
    @types/
      auto-imports.d.ts
      components.d.ts
    app/
      assets/
        styles/
          _base.scss
          _functions.scss
          _markdown.scss
          _mixins.scss
          _reset.scss
          _toast.scss
          _variables.scss
          style.scss
      components/
        ho/
          animista/
            HoAnimista.vue
            HoAnimistaAttnBounce.vue
            HoAnimistaAttnFlicker.vue
            HoAnimistaBgPan.vue
            HoAnimistaBlink.vue
            HoAnimistaBlurOut.vue
            HoAnimistaBounceIn.vue
            HoAnimistaBounceOut.vue
            HoAnimistaColorChange.vue
            HoAnimistaFadeIn.vue
            HoAnimistaFadeOut.vue
            HoAnimistaFlicker.vue
            HoAnimistaFlickerIn.vue
            HoAnimistaFlickerOut.vue
            HoAnimistaFlip.vue
            HoAnimistaFlip2.vue
            HoAnimistaFlipIn.vue
            HoAnimistaFlipOut.vue
            HoAnimistaFlipScale.vue
            HoAnimistaFlipScale2.vue
            HoAnimistaFocusIn.vue
            HoAnimistaJello.vue
            HoAnimistaKenBurns.vue
            HoAnimistaPuffIn.vue
            HoAnimistaPuffOut.vue
            HoAnimistaPulsate.vue
            HoAnimistaRollIn.vue
            HoAnimistaRollInBlurred.vue
            HoAnimistaRollOut.vue
            HoAnimistaRollOutBlurred.vue
            HoAnimistaRotate.vue
            HoAnimistaRotate90.vue
            HoAnimistaRotateIn.vue
            HoAnimistaRotateIn2.vue
            HoAnimistaRotateOut.vue
            HoAnimistaRotateOut2.vue
            HoAnimistaRotateScale.vue
            HoAnimistaScaleDown.vue
            HoAnimistaScaleIn.vue
            HoAnimistaScaleOut.vue
            HoAnimistaScaleUp.vue
            HoAnimistaShadowDrop.vue
            HoAnimistaShadowDrop2.vue
            HoAnimistaShadowInset.vue
            HoAnimistaShadowPop.vue
            HoAnimistaShake.vue
            HoAnimistaSlide.vue
            HoAnimistaSlideBck.vue
            HoAnimistaSlideFwd.vue
            HoAnimistaSlideIn.vue
            HoAnimistaSlideInBck.vue
            HoAnimistaSlideInBlurred.vue
            HoAnimistaSlideInElliptic.vue
            HoAnimistaSlideInFwd.vue
            HoAnimistaSlideOut.vue
            HoAnimistaSlideOutBck.vue
            HoAnimistaSlideOutBlurred.vue
            HoAnimistaSlideOutElliptic.vue
            HoAnimistaSlideOutFwd.vue
            HoAnimistaSlideRotate.vue
            HoAnimistaSlitIn.vue
            HoAnimistaSlitOut.vue
            HoAnimistaSwing.vue
            HoAnimistaSwingIn.vue
            HoAnimistaSwingOut.vue
            HoAnimistaSwirlIn.vue
            HoAnimistaSwirlOut.vue
            HoAnimistaTextPopUp.vue
            HoAnimistaTextShadowDrop.vue
            HoAnimistaTextShadowPop.vue
            HoAnimistaTiltIn.vue
            HoAnimistaTiltInFwd.vue
            HoAnimistaTrackingIn.vue
            HoAnimistaTrackingOut.vue
            HoAnimistaVibrate.vue
            HoAnimistaWobble.vue
          HoCssAnimations.vue
        ht/
          HtTop.vue
      composables/
        useApi.ts
      layouts/
        default.vue
        top.vue
      models/
        json.ts
        todo.ts
      pages/
        index.vue
      plugins/
        gtm.client.ts
        runtimeConfig.ts
      test/
        composables/
          useApi.spec.ts
        utils/
          @types/
            auto-imports.d.ts
            components.d.ts
          api.spec.ts
          factory.spec.ts
          i18n.spec.ts
        example.spec.ts
        setup.ts
      utils/
        api.ts
        factory.ts
        i18n.ts
      app.vue
      error.vue
    config/
      models/
        EnvType.ts
      appConfig.ts
      runtimeConfig.ts
    i18n/
      locales/
        en.json
        ja.json
      i18n.config.ts
    public/
      _robots.txt
    server/
      tsconfig.json
    .nuxtrc
    .stylelintrc.mjs
    app.config.ts
    eslint.config.mjs
    nuxt.config.ts
    package.json
    tsconfig.json
    vitest.config.mts
```

# Files

## File: layers/showcases/@types/auto-imports.d.ts
````typescript
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
// biome-ignore lint: disable
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const abortNavigation: typeof import('#app')['abortNavigation']
  const addRouteMiddleware: typeof import('#app')['addRouteMiddleware']
  const api: typeof import('../app/utils/api')['default']
  const cancelIdleCallback: typeof import('#app')['cancelIdleCallback']
  const clearError: typeof import('#app')['clearError']
  const clearNuxtData: typeof import('#app')['clearNuxtData']
  const clearNuxtState: typeof import('#app')['clearNuxtState']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createError: typeof import('#app')['createError']
  const customRef: typeof import('vue')['customRef']
  const defineAppConfig: typeof import('#app')['defineAppConfig']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const defineI18nConfig: typeof import('#i18n')['defineI18nConfig']
  const defineI18nLocale: typeof import('#i18n')['defineI18nLocale']
  const defineI18nRoute: typeof import('#i18n')['defineI18nRoute']
  const defineNuxtComponent: typeof import('#app')['defineNuxtComponent']
  const defineNuxtLink: typeof import('#app')['defineNuxtLink']
  const defineNuxtPlugin: typeof import('#app')['defineNuxtPlugin']
  const defineNuxtRouteMiddleware: typeof import('#app')['defineNuxtRouteMiddleware']
  const definePayloadPlugin: typeof import('#app')['definePayloadPlugin']
  const definePayloadReducer: typeof import('#app')['definePayloadReducer']
  const definePayloadReviver: typeof import('#app')['definePayloadReviver']
  const effectScope: typeof import('vue')['effectScope']
  const fetcher: typeof import('../app/composables/useApi')['fetcher']
  const getAppManifest: typeof import('#app')['getAppManifest']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getCurrentWatcher: typeof import('vue')['getCurrentWatcher']
  const getI18nArray: typeof import('../app/utils/i18n')['getI18nArray']
  const getRouteRules: typeof import('#app')['getRouteRules']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isNuxtError: typeof import('#app')['isNuxtError']
  const isPrerendered: typeof import('#app')['isPrerendered']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const isShallow: typeof import('vue')['isShallow']
  const loadPayload: typeof import('#app')['loadPayload']
  const markRaw: typeof import('vue')['markRaw']
  const navigateTo: typeof import('#app')['navigateTo']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('#app')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('#app')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onNuxtReady: typeof import('#app')['onNuxtReady']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const onWatcherCleanup: typeof import('vue')['onWatcherCleanup']
  const prefetchComponents: typeof import('#app')['prefetchComponents']
  const preloadComponents: typeof import('#app')['preloadComponents']
  const preloadPayload: typeof import('#app')['preloadPayload']
  const preloadRouteComponents: typeof import('#app')['preloadRouteComponents']
  const prerenderRoutes: typeof import('#app')['prerenderRoutes']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const refreshNuxtData: typeof import('#app')['refreshNuxtData']
  const reloadNuxtApp: typeof import('#app')['reloadNuxtApp']
  const repositories: typeof import('../app/utils/factory')['repositories']
  const repositoryFactory: typeof import('../app/utils/factory')['repositoryFactory']
  const requestIdleCallback: typeof import('#app')['requestIdleCallback']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const setPageLayout: typeof import('#app')['setPageLayout']
  const setResponseStatus: typeof import('#app')['setResponseStatus']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const showError: typeof import('#app')['showError']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const updateAppConfig: typeof import('#app')['updateAppConfig']
  const useApi: typeof import('../app/composables/useApi')['default']
  const useAppConfig: typeof import('#app')['useAppConfig']
  const useAsyncData: typeof import('#app')['useAsyncData']
  const useAttrs: typeof import('vue')['useAttrs']
  const useBrowserLocale: typeof import('#i18n')['useBrowserLocale']
  const useCookie: typeof import('#app')['useCookie']
  const useCookieLocale: typeof import('#i18n')['useCookieLocale']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useError: typeof import('#app')['useError']
  const useFetch: typeof import('#app')['useFetch']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const useId: typeof import('vue')['useId']
  const useLazyAsyncData: typeof import('#app')['useLazyAsyncData']
  const useLazyFetch: typeof import('#app')['useLazyFetch']
  const useLocaleHead: typeof import('#i18n')['useLocaleHead']
  const useLocalePath: typeof import('#i18n')['useLocalePath']
  const useLocaleRoute: typeof import('#i18n')['useLocaleRoute']
  const useModel: typeof import('vue')['useModel']
  const useNuxtApp: typeof import('#app')['useNuxtApp']
  const useNuxtData: typeof import('#app')['useNuxtData']
  const useRequestEvent: typeof import('#app')['useRequestEvent']
  const useRequestFetch: typeof import('#app')['useRequestFetch']
  const useRequestHeaders: typeof import('#app')['useRequestHeaders']
  const useRequestURL: typeof import('#app')['useRequestURL']
  const useRoute: typeof import('#app')['useRoute']
  const useRouteBaseName: typeof import('#i18n')['useRouteBaseName']
  const useRouter: typeof import('#app')['useRouter']
  const useRuntimeConfig: typeof import('#app')['useRuntimeConfig']
  const useSlots: typeof import('vue')['useSlots']
  const useState: typeof import('#app')['useState']
  const useSwitchLocalePath: typeof import('#i18n')['useSwitchLocalePath']
  const useTemplateRef: typeof import('vue')['useTemplateRef']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, Slot, Slots, ComponentPublicInstance, ComputedRef, DirectiveBinding, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, ShallowRef, MaybeRef, MaybeRefOrGetter, VNode, WritableComputedRef } from 'vue'
  import('vue')
  // @ts-ignore
  export type { Method } from '../app/utils/api'
  import('../app/utils/api')
  // @ts-ignore
  export type { Repository, Repositories, RepositoryKey } from '../app/utils/factory'
  import('../app/utils/factory')
  // @ts-ignore
  export type { UseI18nReturnType } from '../app/utils/i18n'
  import('../app/utils/i18n')
}
````

## File: layers/showcases/@types/components.d.ts
````typescript
/* eslint-disable */
// @ts-nocheck
// Generated by unplugin-vue-components
// Read more: https://github.com/vuejs/core/pull/3399
export {}

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}
````

## File: layers/showcases/app/assets/styles/_base.scss
````scss
@use 'variables' as v;
@use 'mixins' as m;

html,
body {
  overflow-x: clip;

  font-family: v.$base-font-family;
  font-variant-numeric: tabular-nums; // 数字フォントの幅を等幅にする
  color: v.$base-font-color;
  word-break: normal; // 単語の分割はブラウザのデフォルトであることを明記
  line-break: strict; // 約物や小文字を置き去りにして改行させない
  overflow-wrap: anywhere; // 行内に単語を収められない場合に折り返す

  background: v.$base-background-color;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  text-spacing-trim: trim-start; // 英字や日本語の約物が重複した場合に全角分のスペースを確保させない
}

a {
  color: v.$base-link-color;
  text-decoration: none;
}
````

## File: layers/showcases/app/assets/styles/_functions.scss
````scss
@function strip-unit($number) {
  @if meta.type-of($number) == 'number' and not math.is-unitless($number) {
    @return $number / ($number * 0 + 1);
  }

  @return $number;
}

@function rem($px, $base: 16px) {
  $value: $px;

  // 単位がpx以外の場合は警告を出してそのまま返す
  @if math.unit($px) != 'px' {
    @warn 'rem()の引数にpx以外の値を指定しても計算できません';

    @return $value;
  }

  $value: (strip-unit($px) / strip-unit($base)) * 1rem;

  @return $value;
}
````

## File: layers/showcases/app/assets/styles/_mixins.scss
````scss
@use 'variables' as v;

@mixin xs {
  @media screen and (max-width: v.$xs-query-width) {
    @content;
  }
}

@mixin sp {
  @media screen and (max-width: v.$media-query-width) {
    @content;
  }
}

@mixin pc {
  @media screen and (min-width: v.$media-query-width) {
    @content;
  }
}

@mixin tb {
  @media screen and (max-width: v.$pc-content-min-width) {
    @content;
  }
}

@mixin splandscape {
  @media screen and (max-width: v.$pc-content-min-width) and (max-height: v.$sp-query-width) and (orientation: landscape) {
    @content;
  }
}

@mixin hover {
  @media (any-hover: hover) {
    &:hover {
      @content;
    }

    &:focus-within {
      @content;
    }
  }
}
````

## File: layers/showcases/app/assets/styles/_reset.scss
````scss
@forward 'ress';

ol,
ul {
  list-style: none;
}

iframe,
img {
  max-width: 100%;
  vertical-align: top;
}

img {
  height: auto;
}
````

## File: layers/showcases/app/assets/styles/_toast.scss
````scss
// @nuxt/toastのスタイリング
// @see nuxt.config.ts > toast
// todo: !importantあまり使いたくないので@nuxt/toastに.scss渡せたりするなら修正

@use 'variables' as v;
@use 'mixins' as m;

.hv-toast {
  z-index: v.$zindex-toast !important;
  top: v.$header-height-pc !important;
  width: 100%;
  margin-top: 0;

  @include m.sp {
    top: v.$header-height-sp !important;
  }

  .hv-toast-context {
    margin-top: 0 !important;
    word-break: break-all !important;
    overflow-wrap: break-word !important;

    + .hv-toast-context {
      margin-top: v.space(2) !important;
    }

    &.info {
      background: v.$gray-2 !important;
    }

    &.success {
      background: v.$primary-color !important;
    }

    &.error {
      background: v.$red !important;
    }

    &.danger {
      background: v.$red !important;
    }
  }
}
````

## File: layers/showcases/app/assets/styles/_variables.scss
````scss
/* color palette */
$violet: #b760eb; // Sidebar button
$blue: #3ff; // button02, tag, link hover, #33FFFF
$blue-1: #0c98da; // Sidebar button
$yellow: #ffba00; // button01 hover, text link hover
$orange: #ff8500; // button01, tag
$green: #69b756; // Sidebar button
$green-1: #47c6ae; // Sidebar button
$green-2: #1b5e68; // form focus
$red: #c43232; // alert
$red-1: #46212a; // form error
$pink: #ff4e8e; // button03, tag
$pink-1: #f86464; // Sidebar button
$gray: #737477; // Button disabled BG
$black: #111827; // Body BG
$black-1: #020e1c; // Header Footer BG
$navy: #101e3c; // Sub BG
$navy-1: #17385d; // Item Card BG
$navy-2: #19477f; // Line
$white: #fff;
$white-1: rgba(#fff, 0.7);

/* スタイルガイドにないcolor */
$gray-1: #d1d1d1;
$gray-2: #505050;
$gray-3: #ffffff4d; // button
$green-3: #33ffff80; // button
$green-4: #228d92; // button
$green-5: #2bc6ca; // button
$blue-2: #353e49;
$black-undercoat: rgb(0 0 0 / 70%);

/* text color */
$text-body: #fff;
$text-link: #9a9daa;
$text-note: #737477;
$box-shadow: 5px 5px 5px rgba($gray-2, 0.2);

/* SNS Brand Colors */
$twitter: #1d9bf0;
$facebook: #1877f2;
$discord: #5865f2;
$note: #41c9b4;
$instagram-gradation: linear-gradient(to right, #febd1c, #f50200, #c10098);

/* color role */
$primary-color: $orange;
$primary-hover-color: $yellow;
$secondary-color: $blue;
$secondary-hover-color: $pink;
$base-background-color: $black;
$base-font-color: $text-body;
$font-color-note: $text-note;
$font-color-link: $text-link;
$font-color-headline: $black;
$font-color-placeholder: $text-link;
$base-link-color: $text-link;
$base-link-hover-color: $blue;
$primary-button-default-color: $orange;
$primary-button-active-color: $yellow;
$secondary-button-default-color: $blue;
$secondary-button-active-color: $pink;
$button-disabled-color: $gray;

/* font-settings */
// 参考： https://ics.media/entry/200317/
$base-font-family: 'Segoe UI', 'Helvetica Neue', helvetica, arial, 'メイリオ',
  'ヒラギノ角ゴシック', 'Noto sans JP', 'Segoe UI', '游ゴシック', sans-serif;
$base-font-weight: 400;
$base-font-size: 16px;

/* content width */
$pc-content-max-width: 1920px;
$pc-content-medium-width: 1280px;
$pc-content-min-width: 1080px;
$sp-query-width: 500px;
$xs-query-width: 370px;
$media-query-width: 769px;
$side-menu-width: 90px;
$side-menu-height-sp: 64px;

// topページ用に追加
$pc-content-body-width: 1470px;

/* content height */
$header-height-pc: 80px;
$header-height-sp: 60px;
$mypage-header-height-pc: 72px;
$mypage-header-height-sp: 72px;

/* space-settings */
$space-base: 16px;
$space-unit: 4px;

@function space($value) {
  @return $value * $space-unit;
}

/* z-index-settings */
$zindex-main: 1;
$zindex-dialog: 100;
$zindex-mypage-header: 200;
$zindex-side-menu: $zindex-mypage-header + 1;
$zindex-footer: $zindex-mypage-header + 2;
$zindex-header: $zindex-mypage-header + 3;
$zindex-side-menu-button: $zindex-mypage-header + 4;
$zindex-toast: 300;
$zindex-loading: 400;

// todo: extend.scss 作成するか記述場所決める

/* 各ページタイトルのデザイン */
%title {
  display: flex;
  font-size: 24px;

  &::before {
    content: '';

    display: block;

    width: 5px;
    margin-right: space(2);
    border-radius: 6px;

    background: $orange;
  }
}

/* スクロールバーのデザイン */
// note: scrollbar-color はソリッドカラーのみ指定可能なので一応旧構文で書いている
%scroll-bar {
  // 幅
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  // 背景
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px $green-4;
  }

  // ボタン
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: $green-5;
  }
}
````

## File: layers/showcases/app/assets/styles/style.scss
````scss
@forward 'reset';
@forward 'base';
````

## File: layers/showcases/app/composables/useApi.ts
````typescript
/**
 * Nuxt3 FWにおける API composables。
 *
 * @packageDocumentation
 */

import type { UseFetchOptions } from 'nuxt/app'
import { useFetch } from 'nuxt/app'
import type { FetchOptions } from 'ofetch'
import { ref } from 'vue'
import type { RepositoryKey } from '#showcases/app/utils/factory'
import { repositoryFactory } from '#showcases/app/utils/factory'

export const fetcher = (
  path: string,
  options: UseFetchOptions<FetchOptions>,
) => {
  return useFetch(path, options)
}

const _getRepo = <K extends RepositoryKey>(endpoint: K) => {
  return repositoryFactory.get(endpoint)
}

export default function useApi<K extends RepositoryKey>(endpoint: K) {
  const repository = ref(_getRepo(endpoint))
  return {
    repository,
  }
}
````

## File: layers/showcases/app/layouts/default.vue
````vue
<template>
  <div class="layout -default">
    <h1 class="heading">
      show cases App Nuxt3
    </h1>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout.-default {
  overflow-x: hidden;
}
</style>
````

## File: layers/showcases/app/layouts/top.vue
````vue
<template>
  <div class="layout -top">
    <HoTheHeader />
    <slot />
    <HoTheFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout.-top {
  overflow-x: hidden;
}
</style>
````

## File: layers/showcases/app/models/json.ts
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

## File: layers/showcases/app/models/todo.ts
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

## File: layers/showcases/app/pages/index.vue
````vue
<template>
  <HtTop />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'top',
})
</script>
````

## File: layers/showcases/app/plugins/gtm.client.ts
````typescript
import { createGtm } from '@gtm-support/vue-gtm'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  createGtm({ id: config.public?.gtmId, enabled: true })
})
````

## File: layers/showcases/app/plugins/runtimeConfig.ts
````typescript
import { defineNuxtPlugin } from 'nuxt/app'
import type { RuntimeConfig } from 'nuxt/schema'

/**
 * 型を退化されたruntimeConfig。
 * [[requireRuntimeConfig]]のために、退化されました。
 */
let runtimeConfig: RuntimeConfig | undefined

export default defineNuxtPlugin(({ $config }) => {
  if ($config === undefined) {
    throw new TypeError('#showcases/app/plugins/runtimeConfig failed.')
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

  throw new TypeError('#showcases/app/plugins/runtimeConfig: Not satisfied.')
}
````

## File: layers/showcases/app/test/composables/useApi.spec.ts
````typescript
// NOTE: そもそももっといいテストあれば是非
import { expect, test, vi } from 'vitest'
import type { UseFetchOptions } from 'nuxt/app'
import type { FetchOptions } from 'ofetch'
import useApi, { fetcher } from '@/composables/useApi'

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
````

## File: layers/showcases/app/test/utils/@types/auto-imports.d.ts
````typescript
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
// biome-ignore lint: disable
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const abortNavigation: typeof import('#app')['abortNavigation']
  const addRouteMiddleware: typeof import('#app')['addRouteMiddleware']
  const cancelIdleCallback: typeof import('#app')['cancelIdleCallback']
  const clearError: typeof import('#app')['clearError']
  const clearNuxtData: typeof import('#app')['clearNuxtData']
  const clearNuxtState: typeof import('#app')['clearNuxtState']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createError: typeof import('#app')['createError']
  const customRef: typeof import('vue')['customRef']
  const defineAppConfig: typeof import('#app')['defineAppConfig']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const defineI18nConfig: typeof import('#i18n')['defineI18nConfig']
  const defineI18nLocale: typeof import('#i18n')['defineI18nLocale']
  const defineI18nRoute: typeof import('#i18n')['defineI18nRoute']
  const defineNuxtComponent: typeof import('#app')['defineNuxtComponent']
  const defineNuxtLink: typeof import('#app')['defineNuxtLink']
  const defineNuxtPlugin: typeof import('#app')['defineNuxtPlugin']
  const defineNuxtRouteMiddleware: typeof import('#app')['defineNuxtRouteMiddleware']
  const definePayloadPlugin: typeof import('#app')['definePayloadPlugin']
  const definePayloadReducer: typeof import('#app')['definePayloadReducer']
  const definePayloadReviver: typeof import('#app')['definePayloadReviver']
  const effectScope: typeof import('vue')['effectScope']
  const getAppManifest: typeof import('#app')['getAppManifest']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getRouteRules: typeof import('#app')['getRouteRules']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isNuxtError: typeof import('#app')['isNuxtError']
  const isPrerendered: typeof import('#app')['isPrerendered']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const loadPayload: typeof import('#app')['loadPayload']
  const markRaw: typeof import('vue')['markRaw']
  const navigateTo: typeof import('#app')['navigateTo']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('#app')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('#app')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onNuxtReady: typeof import('#app')['onNuxtReady']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const onWatcherCleanup: typeof import('vue')['onWatcherCleanup']
  const prefetchComponents: typeof import('#app')['prefetchComponents']
  const preloadComponents: typeof import('#app')['preloadComponents']
  const preloadPayload: typeof import('#app')['preloadPayload']
  const preloadRouteComponents: typeof import('#app')['preloadRouteComponents']
  const prerenderRoutes: typeof import('#app')['prerenderRoutes']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const refreshNuxtData: typeof import('#app')['refreshNuxtData']
  const reloadNuxtApp: typeof import('#app')['reloadNuxtApp']
  const requestIdleCallback: typeof import('#app')['requestIdleCallback']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const setPageLayout: typeof import('#app')['setPageLayout']
  const setResponseStatus: typeof import('#app')['setResponseStatus']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const showError: typeof import('#app')['showError']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const updateAppConfig: typeof import('#app')['updateAppConfig']
  const useAppConfig: typeof import('#app')['useAppConfig']
  const useAsyncData: typeof import('#app')['useAsyncData']
  const useAttrs: typeof import('vue')['useAttrs']
  const useBrowserLocale: typeof import('#i18n')['useBrowserLocale']
  const useCookie: typeof import('#app')['useCookie']
  const useCookieLocale: typeof import('#i18n')['useCookieLocale']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useError: typeof import('#app')['useError']
  const useFetch: typeof import('#app')['useFetch']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const useId: typeof import('vue')['useId']
  const useLazyAsyncData: typeof import('#app')['useLazyAsyncData']
  const useLazyFetch: typeof import('#app')['useLazyFetch']
  const useLocaleHead: typeof import('#i18n')['useLocaleHead']
  const useLocalePath: typeof import('#i18n')['useLocalePath']
  const useLocaleRoute: typeof import('#i18n')['useLocaleRoute']
  const useModel: typeof import('vue')['useModel']
  const useNuxtApp: typeof import('#app')['useNuxtApp']
  const useNuxtData: typeof import('#app')['useNuxtData']
  const useRequestEvent: typeof import('#app')['useRequestEvent']
  const useRequestFetch: typeof import('#app')['useRequestFetch']
  const useRequestHeaders: typeof import('#app')['useRequestHeaders']
  const useRequestURL: typeof import('#app')['useRequestURL']
  const useRoute: typeof import('#app')['useRoute']
  const useRouteBaseName: typeof import('#i18n')['useRouteBaseName']
  const useRouter: typeof import('#app')['useRouter']
  const useRuntimeConfig: typeof import('#app')['useRuntimeConfig']
  const useSlots: typeof import('vue')['useSlots']
  const useState: typeof import('#app')['useState']
  const useSwitchLocalePath: typeof import('#i18n')['useSwitchLocalePath']
  const useTemplateRef: typeof import('vue')['useTemplateRef']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, DirectiveBinding, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, MaybeRef, MaybeRefOrGetter, VNode, WritableComputedRef } from 'vue'
  import('vue')
}
````

## File: layers/showcases/app/test/utils/@types/components.d.ts
````typescript
/* eslint-disable */
// @ts-nocheck
// Generated by unplugin-vue-components
// Read more: https://github.com/vuejs/core/pull/3399
export {}

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}
````

## File: layers/showcases/app/test/utils/api.spec.ts
````typescript
import { describe, expect, it, vi } from 'vitest'
import type { NitroFetchRequest } from 'nitropack'
import api from '#showcases/app/utils/api'

// NOTE: src/utils/api.tsのテストとして当該ファイルがimportしているファイルからの変数「requireRuntimeConfig」をモックする。
vi.mock('#base/app/plugins/runtimeConfig', () => {
  return {
    default: vi.fn(() => ({})),
    requireRuntimeConfig: vi.fn(() => {
      // NOTE: api.tsのテストとしてrequireRuntimeConfigが{public.baseUrl}としてダミーURLを返すだけの処理を行うようにモックする
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
  // NOTE: api.getの返却値のテストとして、引数のpathやfetchOptionを入力して、返却値として期待するexpectObjと同等かテストする。その際、onRequestとonResponseは複雑化するので、空オブジェクトで省略としてtoMatchObjectで合格するか検査する。
  it('get', async () => {
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
    const result = await api('get', path, fetchOptions)
    expect(result).toMatchObject(expectObj)
  })
  it('post', async () => {
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
    const result = await api('post', path, fetchOptions)
    expect(result).toMatchObject(expectObj)
  })
  it('put', async () => {
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
    const result = await api('put', path, fetchOptions)
    expect(result).toMatchObject(expectObj)
  })
  it('patch', async () => {
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
    const result = await api('patch', path, fetchOptions)
    expect(result).toMatchObject(expectObj)
  })
  it('delete', async () => {
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
    const result = await api('delete', path, fetchOptions)
    expect(result).toMatchObject(expectObj)
  })
})
````

## File: layers/showcases/app/test/utils/factory.spec.ts
````typescript
import { describe, expect, it } from 'vitest'
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

## File: layers/showcases/app/test/utils/i18n.spec.ts
````typescript
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import { expect, test } from 'vitest'
import { getI18nArray } from '@/utils/i18n'

test('getI18nArray takes a list from vue-i18n dict', () => {
  const i18n = createI18n({
    locale: 'ja',
    messages: {
      ja: { list: ['a', 'b', 'c'] },
      en: { list: ['a', 'b', 'c'] },
    },
  })

  // useI18nがコンポーネントのsetup内でのみしか動かないので、コンポーネントを介してテストをする
  mount(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (defineComponent as any)({
      template: '<p>Nuxt ha iizo</p>',
      setup: () => {
        const i18n = useI18n()
        expect(getI18nArray(i18n, 'list')).toEqual(['a', 'b', 'c'])
      },
    }),
    {
      global: {
        plugins: [i18n],
      },
    },
  )
})
````

## File: layers/showcases/app/test/example.spec.ts
````typescript
/**
 * Showcases layer test example
 * This is a basic test to ensure the test environment is working
 */

import { describe, expect, it } from 'vitest'

describe('Showcases Layer Tests', () => {
  it('should have working test environment', () => {
    expect(true).toBe(true)
  })

  it('should be able to test basic JavaScript functionality', () => {
    const add = (a: number, b: number) => a + b
    expect(add(2, 3)).toBe(5)
  })
})
````

## File: layers/showcases/app/utils/api.ts
````typescript
import type { FetchOptions } from 'ofetch'
import type { Method } from '#base/app/utils/default-api'
import { defaultApi } from '#base/app/utils/default-api'

export type { Method }

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

## File: layers/showcases/app/utils/factory.ts
````typescript
import { type MakeRepository, defaultRepositories } from '#base/app/utils/default-factory'
import type { Method } from '#showcases/app/utils/api'

export type Repository = MakeRepository<Method>
export type Repositories = Record<string, Repository>

export const repositories = {
  ...defaultRepositories,
  // Add non-default repositories here
} as const satisfies Repositories

export type RepositoryKey = keyof typeof repositories

export const repositoryFactory = {
  get: <K extends keyof typeof repositories>(name: K) => repositories[name],
}
````

## File: layers/showcases/app/utils/i18n.ts
````typescript
import type { Composer, UseI18nOptions, VueMessageType } from 'vue-i18n'

/**
 * 引数未指定にすると、普通に`const i18n = useI18n()`とすると入ってくる型になる。
 * 型引数の使い方については、そのままuseI18nの型引数の指定方法を参照のこと。
 */
export type UseI18nReturnType<Options extends UseI18nOptions = UseI18nOptions>
  = Composer<
    NonNullable<Options['messages']>,
    NonNullable<Options['datetimeFormats']>,
    NonNullable<Options['numberFormats']>,
    Options['locale'] extends unknown ? string : Options['locale']
  >

/**
 * @example
 * ```ts
 * import { useI18n } from 'vue-i18n'
 * const i18n = useI18n() // messagesは `{ [locale]: { list: ['a', 'b', 'c'] } }` とする
 * const list = getI18nArray(i18n, 'list') // ['a', 'b', 'c']
 * ```
 */
export const getI18nArray = (i18n: UseI18nReturnType, key: string): string[] =>
  Object.entries<VueMessageType>(i18n.tm(key)).map(([, term]) => i18n.rt(term))
````

## File: layers/showcases/app/error.vue
````vue
<i18n lang="yaml">
ja:
  title: "エラーが発生しました"
  back_home: "ホームに戻る"
  back_previous: "前のページに戻る"
  error_404: "ページが見つかりません"
  error_500: "サーバーエラー"
  error_other: "予期しないエラー"
  description_404: "お探しのページは見つかりませんでした。URLをご確認いただくか、ホームページに戻ってもう一度お試しください。"
  description_500: "サーバーに問題が発生しています。しばらく時間をおいてから再度お試しください。"
  description_other: "申し訳ございませんが、予期しないエラーが発生しました。"
  details: "エラー内容"
en:
  title: "An error occurred"
  back_home: "Back to Home"
  back_previous: "Go Back"
  error_404: "Page Not Found"
  error_500: "Server Error"
  error_other: "Unexpected Error"
  description_404: "The page you are looking for could not be found. Please check the URL or return to the home page and try again."
  description_500: "There is a problem with the server. Please try again after some time."
  description_other: "We apologize, but an unexpected error has occurred."
  details: "Error Details"
</i18n>

<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-icon">
        <div class="error-code">
          {{ error.statusCode }}
        </div>
      </div>

      <h1 class="error-title">
        {{ getErrorTitle() }}
      </h1>

      <p class="error-description">
        {{ getErrorDescription() }}
      </p>

      <div class="error-actions">
        <button
          class="error-button -primary"
          @click="handleClearError"
        >
          {{ t('back_home') }}
        </button>

        <button
          class="error-button -secondary"
          @click="goBack"
        >
          {{ t('back_previous') }}
        </button>
      </div>

      <div class="error-details">
        <details v-if="error.message">
          <summary>{{ t('details') }}</summary>
          <pre class="error-message">{{ error.message }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const { t } = useI18n()

const getErrorTitle = (): string => {
  if (props.error.statusCode === 404) {
    return t('error_404')
  }
  if (props.error.statusCode === 500) {
    return t('error_500')
  }
  return t('error_other')
}

const getErrorDescription = (): string => {
  if (props.error.statusCode === 404) {
    return t('description_404')
  }
  if (props.error.statusCode === 500) {
    return t('description_500')
  }
  return t('description_other')
}

const handleClearError = async (): Promise<void> => {
  await clearError({ redirect: '/' })
}

const goBack = async (): Promise<void> => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    await navigateTo('/')
  }
}
</script>

<style scoped lang="scss">
@use '#showcases/app/assets/styles/variables' as v;
@use '#showcases/app/assets/styles/mixins' as m;

.error-page {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: v.space(4);

  color: #333;

  background-color: #f8f9fa;
}

.error-container {
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.error-icon {
  margin-bottom: v.space(6);
}

.error-code {
  display: inline-block;

  width: 120px;
  height: 120px;
  margin: 0 auto v.space(4);
  border: 4px solid #dc3545;
  border-radius: 50%;

  font-size: 48px;
  font-weight: bold;
  line-height: 112px;
  color: #dc3545;

  background-color: rgba(#dc3545, 0.1);

  @include m.sp {
    width: 80px;
    height: 80px;
    font-size: 32px;
    line-height: 72px;
  }
}

.error-title {
  margin-bottom: v.space(4);
  font-size: 32px;
  font-weight: bold;
  color: #212529;

  @include m.sp {
    font-size: 24px;
  }
}

.error-description {
  margin-bottom: v.space(8);
  font-size: 16px;
  line-height: 1.6;
  color: #6c757d;

  @include m.sp {
    margin-bottom: v.space(6);
    font-size: 14px;
  }
}

.error-actions {
  display: flex;
  gap: v.space(4);
  justify-content: center;
  margin-bottom: v.space(8);

  @include m.sp {
    flex-direction: column;
    align-items: center;
  }
}

.error-button {
  cursor: pointer;

  padding: v.space(3) v.space(6);
  border: 2px solid transparent;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  transition: all 0.3s ease;

  @include m.sp {
    width: 100%;
    max-width: 280px;
  }

  &.-primary {
    border-color: #007bff;
    color: #fff;
    background-color: #007bff;

    @include m.hover {
      border-color: #0056b3;
      background-color: #0056b3;
    }
  }

  &.-secondary {
    border-color: #6c757d;
    color: #6c757d;
    background-color: transparent;

    @include m.hover {
      color: #fff;
      background-color: #6c757d;
    }
  }
}

.error-details {
  margin-top: v.space(6);
  text-align: left;

  details {
    padding: v.space(2);
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: #fff;

    summary {
      cursor: pointer;
      margin-bottom: v.space(2);
      font-weight: 500;
      color: #007bff;

      @include m.hover {
        color: #0056b3;
      }
    }
  }
}

.error-message {
  overflow-x: auto;

  padding: v.space(3);
  border-radius: 4px;

  font-family: monospace;
  font-size: 12px;
  line-height: 1.4;
  color: #495057;

  background-color: #f8f9fa;

  @include m.sp {
    font-size: 11px;
  }
}
</style>
````

## File: layers/showcases/config/models/EnvType.ts
````typescript
/**
 * nuxt.config.tsのためのモジュール。
 *
 * @packageDocumentation
 */

export type EnvType = 'local' | 'development' | 'staging' | 'production'

export const allEnvTypes = [
  'local',
  'development',
  'staging',
  'production',
] as const

export function isEnvType(x: unknown): x is EnvType {
  const envTypes: readonly unknown[] = allEnvTypes
  return envTypes.includes(x)
}

export function ensureEnvType(x: unknown): asserts x is EnvType {
  if (!isEnvType(x)) {
    throw new TypeError('Not an EnvType.')
  }
}

export type Env = Record<string, string | undefined>

/**
 * baseEnv.VITE_OUTPUT_ENVを読みだします。
 * これが未指定の場合は'local'にフォールバックします。
 * これが不明な値（EnvTypeでない）場合は例外を送出します。
 *
 * ```typescript
 * const envType = readEnvType(process.env)
 * ```
 */
export function readEnvType(baseEnv: Env): EnvType {
  if (baseEnv.VITE_OUTPUT_ENV === undefined) {
    console.error('No VITE_OUTPUT_ENV is set.')
    return 'local'
  }

  ensureEnvType(baseEnv.VITE_OUTPUT_ENV)
  return baseEnv.VITE_OUTPUT_ENV
}
````

## File: layers/showcases/config/appConfig.ts
````typescript
/**
 * app.config.tsのためのモジュール。
 *
 * @packageDocumentation
 */

import { EnvType, Env } from './models/EnvType'

/**
 * ```typescript
 * const appConfig = getAppConfigOfEnvType('local', process.env)
 * ```
 */
export function getAppConfigOfEnvType(envType: EnvType, baseEnv: Env) {
  switch (envType) {
    case 'local':
      return getLocal(envType, baseEnv)
    case 'development':
      return getDevelopment(envType, baseEnv)
    case 'staging':
      return getStaging(envType, baseEnv)
    case 'production':
      return getProduction(envType, baseEnv)
  }
}

function getLocal(_envType: EnvType, _baseEnv: Env) {
  return {}
}

function getDevelopment(_envType: EnvType, _baseEnv: Env) {
  return {}
}

function getStaging(_envType: EnvType, _baseEnv: Env) {
  return {}
}

function getProduction(_envType: EnvType, _baseEnv: Env) {
  return {}
}
````

## File: layers/showcases/config/runtimeConfig.ts
````typescript
/**
 * nuxt.config.tsのためのモジュール。
 *
 * @packageDocumentation
 */

import { Env, EnvType } from './models/EnvType'

export function getRuntimeConfigOfEnvType(envType: EnvType, baseEnv: Env) {
  switch (envType) {
    case 'local':
      return getLocal(envType, baseEnv)
    case 'development':
      return getDevelopment(envType, baseEnv)
    case 'staging':
      return getStaging(envType, baseEnv)
    case 'production':
      return getProduction(envType, baseEnv)
  }
}

const commonPrivate = {} as const

const commonPublic = {
  gtmId: 'GTM-XXXXXXX',
  apiPrefix: process.env.NUXT_API_PREFIX ?? '/api/v1',
} as const

function getLocal(envType: EnvType, _baseEnv: Env) {
  return {
    ...commonPrivate,

    public: {
      ...commonPublic,
      outputEnv: envType,
      url: 'http://localhost:3000',
      baseUrl: 'http://localhost:3000',
      httpBinUrl: 'http://localhost:3003',
    },
  } as const
}

function getDevelopment(envType: EnvType, _baseEnv: Env) {
  return {
    ...commonPrivate,

    public: {
      ...commonPublic,
      outputEnv: envType,
      url: 'http://localhost:3000',
      baseUrl: 'http://localhost:3000',
    },
  } as const
}

function getStaging(envType: EnvType, _baseEnv: Env) {
  return {
    ...commonPrivate,

    public: {
      ...commonPublic,
      outputEnv: envType,
      url: '',
      baseUrl: '',
    },
  } as const
}

function getProduction(envType: EnvType, _baseEnv: Env) {
  return {
    ...commonPrivate,

    public: {
      ...commonPublic,
      gtmId: 'GTM-XXXXXXX',
      outputEnv: envType,
      url: '',
      baseUrl: '',
    },
  } as const
}
````

## File: layers/showcases/i18n/locales/en.json
````json
{
  "hello": "Hello!",
  "language": "language"
}
````

## File: layers/showcases/i18n/locales/ja.json
````json
{
  "hello": "こんにちは！",
  "language": "言語"
}
````

## File: layers/showcases/i18n/i18n.config.ts
````typescript
/*
 * note: i18n by nuxt-i18n i18nの不具合があればこのファイルから参照する
 * ref: https://v8.i18n.nuxtjs.org/
 */
import type { NuxtI18nOptions } from '@nuxtjs/i18n'
import Cookies from 'universal-cookie'
import en from './locales/en.json'
import ja from './locales/ja.json'

const cookie = new Cookies()
const jaLanguage = 'ja'
const enLanguage = 'en'
const cookieKey = 'VUEI18N_MANUAL_LOCALE'
const isBrowserLanguageJa = import.meta.client
  ? navigator?.language?.startsWith(jaLanguage)
  : false
const isBrowserLanguageEn = import.meta.client
  ? navigator?.language?.startsWith(enLanguage)
  : false
const defaultLanguageFromCookie = import.meta.client
  ? cookie.get(cookieKey) ?? null
  : ''
const defaultLanguage
  = defaultLanguageFromCookie === jaLanguage
    ? jaLanguage
    : defaultLanguageFromCookie === enLanguage
      ? enLanguage
      : isBrowserLanguageJa
        ? jaLanguage
        : isBrowserLanguageEn
          ? enLanguage
          : jaLanguage

// settings for nuxt-i18n v9~
export const nuxtI18nOptions: NuxtI18nOptions = {
  strategy: 'prefix_and_default',
  locales: [
    {
      code: jaLanguage,
      language: 'ja-JP',
      file: 'ja.json',
      isCatchallLocale: true,
    },
    {
      code: enLanguage,
      language: 'en-US',
      file: 'en.json',
    },
  ],
  defaultLocale: defaultLanguage,
  customRoutes: 'config',
  pages: {
    api: false,
    server: false,
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root', // recommended
    alwaysRedirect: true,
    cookieCrossOrigin: true,
    fallbackLocale: defaultLanguage,
  },
  vueI18n: '#showcases/i18n/i18n.config.ts',
}

export default {
  legacy: false,
  locale: defaultLanguage,
  messages: {
    ja,
    en,
  },
}
````

## File: layers/showcases/public/_robots.txt
````
User-agent: *
Disallow:
````

## File: layers/showcases/server/tsconfig.json
````json
{
  "extends": "../.nuxt/tsconfig.server.json"
}
````

## File: layers/showcases/.nuxtrc
````
setups.@nuxt/test-utils="4.0.0"
````

## File: layers/showcases/.stylelintrc.mjs
````
export default {
  extends: ["../../.stylelintrc.shared.mjs"],
};
````

## File: layers/showcases/app.config.ts
````typescript
// ref: https://v3.nuxtjs.org/guide/directory-structure/app.config
// note: Do not put any secret values inside app.config file. It is exposed to the user client bundle.

import { readEnvType } from './config/models/EnvType'
import { getAppConfigOfEnvType } from './config/appConfig'

// eslint-disable-next-line no-undef
export default defineAppConfig(
  getAppConfigOfEnvType(readEnvType(process.env), process.env)
)
````

## File: layers/showcases/tsconfig.json
````json
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": [
    "./.nuxt/tsconfig.server.json",
    "./.nuxt/tsconfig.json",
    "../base/tsconfig.shared.json"
  ],
  "exclude": ["../base/**/*", "../main/**/*"]
}
````

## File: layers/showcases/app/assets/styles/_markdown.scss
````scss
// markdown 用スタイリング
@use 'variables' as v;

.hm-markdown {
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.3;
  }

  h1 {
    margin-bottom: 32px;
  }

  h2 {
    margin-bottom: 24px;
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 16px;
  }

  h3,
  h4,
  h5 {
    margin-bottom: 16px;
    font-weight: 400;
  }

  ul,
  ol {
    margin-bottom: 24px;

    > li {
      padding-left: 1em;
      text-indent: -1em;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  li {
    line-height: 1.3;
    list-style-position: inside;

    > ul {
      margin: 16px 0;
      padding-left: 48px;
    }

    ol {
      counter-reset: ol-item;
      margin: 16px 0;
      padding-left: 28px;
      list-style: none;

      > li {
        position: relative;
        padding-left: 1.5em;
        text-indent: 0;

        // list-style: none だけで消えないので
        &::marker {
          content: '';
        }

        &::before {
          // インデントした数値は 「1)」の表示にする
          content: counter(ol-item) ')  ';
          counter-increment: ol-item 1;

          position: absolute; // 数値の桁数が違う場合の見た目に対応
          top: 0;
          left: 0;

          display: block;

          width: 100px;
        }
      }
    }
  }
  /* stylelint-disable selector-max-compound-selectors */
  ul > li {
    list-style: none;

    &::before {
      content: '・';
    }

    ul > li {
      list-style: circle;

      ul > li {
        list-style: disc;
      }
    }
  }

  /* stylelint-ensable selector-max-compound-selectors */
  ol > li {
    list-style: decimal;
    list-style-position: inside;
  }

  ol[type='a'] > li {
    list-style: lower-latin;
    list-style-position: inside;
  }

  p {
    margin-bottom: 24px;
    line-height: 1.6;
  }

  img {
    display: block;
    width: fit-content;
    max-width: 100%;
    margin: 24px auto;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;

    width: fit-content;
    min-width: 50%;
    max-width: 100%;
    margin: 24px auto;
  }

  code {
    padding: 2px 5px;
    background-color: v.$violet;
  }

  table th,
  table td {
    padding: 8px 12px;
    text-align: center;
  }

  table tr:nth-child(odd) {
    background-color: v.$blue;
  }

  thead tr:first-child {
    background-color: v.$blue;
  }
}
````

## File: layers/showcases/app/components/ho/HoCssAnimations.vue
````vue
<i18n lang="yaml">
ja:
  title: CSSアニメーション
  description: 各種ソースのCSSアニメーション集
  sources:
    title: アニメーションソース
    animista:
      name: Animations
      description: Animista由来のアニメーション（15パターン）
en:
  title: CSS Animations
  description: CSS animations from various sources
  sources:
    title: Animation Sources
    animista:
      name: Animations
      description: Animations from Animista (15 patterns)
</i18n>

<template>
  <div class="ho-css-animations">
    <!-- アニメーションソース一覧 -->
    <div
      v-if="currentView === 'list'"
      class="container"
    >
      <div class="header-controls">
        <button
          class="back-button"
          @click="emit('back')"
        >
          ← Back
        </button>
      </div>

      <header class="header">
        <h1 class="title">
          {{ t('title') }}
        </h1>
        <p class="description">
          {{ t('description') }}
        </p>
      </header>

      <section class="section">
        <h2 class="section-title">
          {{ t('sources.title') }}
        </h2>

        <div class="source-list">
          <button
            class="source-card"
            @click="handleSelectSource('animations')"
          >
            <div class="card-icon">
              🎬
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('sources.animista.name') }}
              </h3>
              <p class="card-description">
                {{ t('sources.animista.description') }}
              </p>
            </div>
            <div class="card-arrow">
              →
            </div>
          </button>

          <!-- 今後、他のソースを追加可能 -->
        </div>
      </section>
    </div>

    <!-- Animista Animations -->
    <HoAnimista
      v-else-if="currentView === 'animations'"
      @back="handleBackToList"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  back: []
}>()

type ViewType = 'list' | 'animations'

const currentView = ref<ViewType>('list')

const handleSelectSource = (source: string) => {
  if (source === 'animations') {
    currentView.value = 'animations'
  }
}

const handleBackToList = () => {
  currentView.value = 'list'
}
</script>

<style lang="scss" scoped>
.ho-css-animations {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-controls {
  margin-bottom: 24px;
}

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.header {
  margin-bottom: 60px;
  text-align: center;
}

.title {
  margin-bottom: 16px;

  font-size: 48px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.description {
  font-size: 20px;
  color: rgb(255 255 255 / 90%);
}

.section {
  margin-bottom: 60px;
}

.section-title {
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.source-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.source-card {
  cursor: pointer;

  display: flex;
  gap: 20px;
  align-items: center;

  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;

  font-family: inherit;
  color: inherit;
  text-align: left;
  text-decoration: none;

  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
  }
}

.card-icon {
  flex-shrink: 0;
  font-size: 40px;
}

.card-content {
  flex: 1;
}

.card-title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
}

.card-description {
  font-size: 14px;
  color: #6b7280;
}

.card-arrow {
  flex-shrink: 0;
  font-size: 24px;
  color: #9ca3af;
  transition: transform 0.3s ease;

  .source-card:hover & {
    transform: translateX(4px);
  }
}
</style>
````

## File: layers/showcases/app/components/ht/HtTop.vue
````vue
<i18n lang="yaml">
ja:
  title: Showcase
  description: コンポーネント・ユーティリティのデモ集
  categories:
    title: カテゴリ
    cssAnimations:
      name: CSSアニメーション
      description: CSSアニメーションのデモ集
    components:
      name: Components
      description: UIコンポーネントのデモ集（準備中）
    utils:
      name: Utils
      description: ユーティリティ関数のデモ集（準備中）
en:
  title: Showcase
  description: Collection of component and utility demos
  categories:
    title: Categories
    cssAnimations:
      name: CSS Animations
      description: CSS animation demos
    components:
      name: Components
      description: UI component demos (Coming soon)
    utils:
      name: Utils
      description: Utility function demos (Coming soon)
</i18n>

<template>
  <div class="ht-top">
    <!-- カテゴリ一覧 -->
    <div
      v-if="currentView === 'top'"
      class="container"
    >
      <header class="header">
        <h1 class="title">
          {{ t('title') }}
        </h1>
        <p class="description">
          {{ t('description') }}
        </p>
      </header>

      <section class="section">
        <h2 class="section-title">
          {{ t('categories.title') }}
        </h2>

        <div class="category-list">
          <button
            class="category-card"
            @click="handleSelectCategory('css-animations')"
          >
            <div class="card-icon">
              ✨
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('categories.cssAnimations.name') }}
              </h3>
              <p class="card-description">
                {{ t('categories.cssAnimations.description') }}
              </p>
            </div>
            <div class="card-arrow">
              →
            </div>
          </button>

          <button
            class="category-card"
            disabled
          >
            <div class="card-icon">
              🧩
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('categories.components.name') }}
              </h3>
              <p class="card-description">
                {{ t('categories.components.description') }}
              </p>
            </div>
          </button>

          <button
            class="category-card"
            disabled
          >
            <div class="card-icon">
              🛠️
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('categories.utils.name') }}
              </h3>
              <p class="card-description">
                {{ t('categories.utils.description') }}
              </p>
            </div>
          </button>
        </div>
      </section>
    </div>

    <!-- CSSアニメーション -->
    <HoCssAnimations
      v-else-if="currentView === 'css-animations'"
      @back="handleBack"
    />
  </div>
</template>

<script setup lang="ts">
import HoCssAnimations from '../ho/HoCssAnimations.vue'

const { t } = useI18n()

type ViewType = 'top' | 'css-animations'

const currentView = ref<ViewType>('top')

const handleSelectCategory = (category: string) => {
  if (category === 'css-animations') {
    currentView.value = 'css-animations'
  }
}

const handleBack = () => {
  currentView.value = 'top'
}
</script>

<style lang="scss" scoped>
@use '#showcases/app/assets/styles/variables' as v;
@use '#showcases/app/assets/styles/mixins' as m;

.ht-top {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 60px;
  text-align: center;
}

.title {
  margin-bottom: 16px;

  font-size: 48px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.description {
  font-size: 20px;
  color: rgb(255 255 255 / 90%);
}

.section {
  margin-bottom: 60px;
}

.section-title {
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.category-card {
  cursor: pointer;

  display: flex;
  gap: 20px;
  align-items: center;

  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;

  font-family: inherit;
  color: inherit;
  text-align: left;
  text-decoration: none;

  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.card-icon {
  flex-shrink: 0;
  font-size: 40px;
}

.card-content {
  flex: 1;
}

.card-title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
}

.card-description {
  font-size: 14px;
  color: #6b7280;
}

.card-arrow {
  flex-shrink: 0;
  font-size: 24px;
  color: #9ca3af;
  transition: transform 0.3s ease;

  .category-card:hover:not(:disabled) & {
    transform: translateX(4px);
  }
}
</style>
````

## File: layers/showcases/app/test/setup.ts
````typescript
import { vi } from 'vitest'

// Type declarations for global mocks - range and useSlots are handled by auto-imports

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
  const mockI18n = { locale: { value: 'ja' } }

  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: () => {
      const nuxtApp = actual.useNuxtApp?.()
      if (!nuxtApp) {
        return { $i18n: mockI18n }
      }
      return new Proxy(nuxtApp, {
        get(target, property, receiver) {
          if (property === '$i18n') {
            return mockI18n
          }
          return Reflect.get(target, property, receiver)
        },
      })
    },
  }
})

vi.mock('#app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app')>()
  const mockI18n = { locale: { value: 'ja' } }

  return {
    ...actual,
    defineNuxtPlugin: (plugin: unknown) => plugin,
    defineNuxtRouteMiddleware:
      actual.defineNuxtRouteMiddleware ?? ((fn: unknown) => fn),
    useNuxtApp: () => {
      const nuxtApp = actual.useNuxtApp?.()
      if (!nuxtApp) {
        return { $i18n: mockI18n }
      }
      return new Proxy(nuxtApp, {
        get(target, property, receiver) {
          if (property === '$i18n') {
            return mockI18n
          }
          return Reflect.get(target, property, receiver)
        },
      })
    },
  }
})

vi.mock('#app/composables/useRoute', () => ({
  useRoute: vi.fn(() => ({
    path: '/test',
    query: { page: '1' },
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

    override addEventListener() {}

    override removeEventListener() {}
  }
}
````

## File: layers/showcases/app/app.vue
````vue
<i18n lang="yaml">
  ja:
    site:
      title: Vket Boilerplate Nuxt
      title_template: "{title} - HIKKY Web Frontend"
      description: Vketのサイト開発で活用しているボイラープレート
  en:
    site:
      title: Vket Boilerplate Nuxt
      title_template: "{title} - HIKKY Web Frontend"
      description: A boilerplate used for Vket site development
</i18n>

<template>
  <Head>
    <Link
      rel="alternate"
      hreflang="ja"
      :href="currentJaFullPath"
    />
    <Link
      rel="alternate"
      hreflang="en"
      :href="currentEnFullPath"
    />
    <Link
      rel="alternate"
      hreflang="x-default"
      :href="currentJaFullPath"
    />
    <template v-if="currentLang === 'ja'">
      <Link
        rel="canonical"
        :href="currentJaFullPath"
      />
    </template>
    <template v-if="currentLang === 'en'">
      <Link
        rel="canonical"
        :href="currentEnFullPath"
      />
    </template>
  </Head>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const i18n = useI18n()
const currentFullPath = ref(`${useRuntimeConfig().public.url}${route.fullPath}`)
const currentLang = ref(i18n.locale.value)

const currentJaFullPath = computed(() => {
  if (currentLang.value === 'ja') {
    return currentFullPath.value
  } else {
    return currentFullPath.value
      .replace(/\/en(\/|$)/, '/')
      .replace(/\/{2,}/, '/')
  }
})

const currentEnFullPath = computed(() => {
  if (currentLang.value === 'en') {
    return currentFullPath.value
  } else {
    const path = route.fullPath.endsWith('/')
      ? route.fullPath
      : `${route.fullPath}/`
    return `${useRuntimeConfig().public.url}/en${path}`
  }
})

useHeadSafe({
  htmlAttrs: {
    lang: currentLang.value,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? i18n.t('site.title_template', { title: titleChunk })
      : i18n.t('site.title')
  },
  meta: [
    {
      name: 'description',
      content: i18n.t('site.description'),
    },
    {
      property: 'og:description',
      content: i18n.t('site.description'),
    },
    {
      property: 'og:site_name',
      content: i18n.t('site.title'),
    },
  ],
})
</script>
````

## File: layers/showcases/eslint.config.mjs
````
import sharedConfig from '../../eslint.config.shared.mjs'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...sharedConfig,
)
````

## File: layers/showcases/nuxt.config.ts
````typescript
import { defineNuxtConfig } from 'nuxt/config'
import path from 'path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { readEnvType } from './config/models/EnvType'
import { getRuntimeConfigOfEnvType } from './config/runtimeConfig'
import { nuxtI18nOptions } from './i18n/i18n.config'

type MetaInfo = {
  title: string
  description: string
  robots: string
  siteName: string
  ogImageUrl: string
  ogUrl: string
  twitterSite: string
  twitterCreator: string
}

type NuxtConfigInput = Parameters<typeof defineNuxtConfig>[0]
type NuxtVitePluginOption = NonNullable<
  NonNullable<NonNullable<NuxtConfigInput>['vite']>['plugins']
>[number]

const NUXT_ENV_OUTPUT_ENV = readEnvType(process.env)
const runtimeConfig = getRuntimeConfigOfEnvType(
  NUXT_ENV_OUTPUT_ENV,
  process.env,
)
const cssUrls = [`./app/assets/styles/style.scss`]
const srcDir = 'app'
const isSsr = false
const checkTypeCheckOnBuild = true
const needAnalyze = NUXT_ENV_OUTPUT_ENV === 'local'
const needSourcemap = NUXT_ENV_OUTPUT_ENV !== 'production'
const enableDebug = NUXT_ENV_OUTPUT_ENV === 'local'

const meta: MetaInfo = {
  title: '',
  description: '',
  robots: NUXT_ENV_OUTPUT_ENV === 'production' ? 'all' : 'none',
  siteName: '',
  ogImageUrl: `${process.env.NUXT_PUBLIC_URL}/images/ogp.jpg`,
  ogUrl: runtimeConfig.public.url,
  twitterSite: 'https://x.com/',
  twitterCreator: 'https://x.com/',
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: path.resolve(__dirname, '../base'),
  modules: [
    'unplugin-icons/nuxt',
    '@nuxtjs/google-fonts',
  ],
  ssr: isSsr,
  imports: {
    dirs: [
      'utils/types/**',
      '../main/app/components/**',
      '../main/app/composables/**',
    ],
    global: false,
  },
  app: {
    head: {
      meta: [
        { name: 'robots', content: meta.robots },
        {
          name: 'description',
          content: meta.description,
        },
        {
          property: 'og:site_name',
          content: meta.siteName,
        },
        {
          property: 'og:url',
          content: meta.ogUrl,
        },
        {
          property: 'og:title',
          content: meta.title,
        },
        {
          property: 'og:description',
          content: meta.description,
        },
        {
          property: 'og:image',
          content: meta.ogImageUrl,
        },
        {
          name: 'twitter:site',
          content: meta.twitterSite,
        },
        {
          name: 'twitter:creator',
          content: meta.twitterCreator,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${runtimeConfig.public.url}/favicon.ico`,
        },
      ],
    },
  },
  css: cssUrls,
  runtimeConfig,
  dir: {
    public: path.resolve(__dirname, './public'),
  },
  rootDir: __dirname,
  srcDir: `${srcDir}/`,
  alias: {
    '#base': path.resolve(__dirname, '../base'),
    '#main': path.resolve(__dirname, '../main'),
    '~': path.resolve(__dirname, '../main/app'),
    '@': path.resolve(__dirname, '../main/app'),
    '#showcases': __dirname,
  },
  ignore: [
    '.output',
    '**/test/*.{js,ts,jsx,tsx}',
    '**/*.{spec,test}.{js,ts,jsx,tsx}',
    '**/-*.*',
  ],
  build: {
    analyze: needAnalyze,
  },
  sourcemap: {
    server: needSourcemap,
    client: needSourcemap,
  },
  compatibilityDate: '2024-04-03',
  vite: {
    plugins: [
      Icons({
        customCollections: {
          // 'hikky-icons': FileSystemIconLoader(path.resolve(__dirname, '../main/app/assets/icons/hikky')),
          'sns-icons': FileSystemIconLoader(path.resolve(__dirname, '../main/app/assets/icons/sns')),
        },
        iconCustomizer(collection, _icon, props) {
          // customize all icons in this collection
          if (
            collection === 'hikky-icons'
            || collection === 'sns-icons'
            || collection === 'ri'
          ) {
            props.width = '1em'
            props.height = '1em'
          }
        },
      }) as unknown as NuxtVitePluginOption,
      Components({
        dts: false,
        resolvers: [
          IconsResolver({
            customCollections: ['hikky-icons', 'sns-icons'],
          }),
        ],
      }) as unknown as NuxtVitePluginOption,
    ],
  },
  typescript: {
    typeCheck: checkTypeCheckOnBuild,
  },
  debug: process.env.VITEST === 'true' ? false : enableDebug,

  googleFonts: {
    families: {
      'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
  },
  i18n: nuxtI18nOptions,
})
````

## File: layers/showcases/vitest.config.mts
````
import { defineVitestConfig } from '@nuxt/test-utils/config'
import path from 'path'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'nuxt',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: '../coverage',
      reportOnFailure: true,
      allowExternal: true,
      include: ['**/*.{vue,ts}'],
      exclude: [
        'plugins/**',
        'middleware/**',
        'layouts/**',
        'test/**',
      ],
    },
    setupFiles: ['app/test/setup.ts'],
    alias: {
      '#base': path.resolve(__dirname, '../base'),
    },
  },
  resolve: {
    alias: {
      '#base': path.resolve(__dirname, '../base'),
    },
  },
})
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaBgPan.vue
````vue
<template>
  <div class="ho-animista-bg-pan">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Background Pan Animations
    </h1>

    <p class="demo-description">
      8種類の背景パンアニメーションのデモ。背景位置の移動エフェクトをSCSSで実装しています。
    </p>

    <div class="demo-controls">
      <button
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Background Pan (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                <span class="variant-label">LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                <span class="variant-label">RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                <span class="variant-label">TOP</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                <span class="variant-label">BOTTOM</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                <span class="variant-label">TOP RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                <span class="variant-label">BOTTOM RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                <span class="variant-label">BOTTOM LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                <span class="variant-label">TOP LEFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type BgPanVariant = 'left' | 'right' | 'top' | 'bottom' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: BgPanVariant[] = ['left', 'right', 'top', 'bottom', 'tr', 'br', 'bl', 'tl']

const activeVariants = ref<Set<BgPanVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

// Background Pan Variations (8 patterns)
.variant-left.is-animating { @include anim.bg-pan('left', 8s); }
.variant-right.is-animating { @include anim.bg-pan('right', 8s); }
.variant-top.is-animating { @include anim.bg-pan('top', 8s); }
.variant-bottom.is-animating { @include anim.bg-pan('bottom', 8s); }
.variant-tr.is-animating { @include anim.bg-pan('tr', 8s); }
.variant-br.is-animating { @include anim.bg-pan('br', 8s); }
.variant-bl.is-animating { @include anim.bg-pan('bl', 8s); }
.variant-tl.is-animating { @include anim.bg-pan('tl', 8s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-bg-pan {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.demo-wrapper {
  overflow: hidden;

  width: 240px;
  height: 180px;
  border-radius: 16px;

  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
}

.demo-box {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: repeating-linear-gradient(
    45deg,
    #667eea 0,
    #667eea 40px,
    #764ba2 40px,
    #764ba2 80px,
    #f093fb 80px,
    #f093fb 120px,
    #f5576c 120px,
    #f5576c 160px
  );
  background-position: center;
  background-size: 400% 400%;

  &.is-animating {
    pointer-events: none;
  }
}

.variant-label {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px 16px;
  border-radius: 8px;

  font-size: 12px;
  font-weight: bold;
  color: white;

  background: rgb(0 0 0 / 50%);
  backdrop-filter: blur(4px);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaColorChange.vue
````vue
<template>
  <div class="ho-animista-color-change">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Color Change Animations
    </h1>

    <p class="demo-description">
      4種類の背景色変化アニメーションのデモ。2色から5色までのカラートランジションをSCSSで実装しています。
    </p>

    <div class="demo-controls">
      <button
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Color Change (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['demo-box', 'variant-2x', { 'is-animating': activeVariants.has('2x') }]">
              <span class="variant-label">2 COLORS</span>
              <span class="color-info">青 → 紫</span>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-3x', { 'is-animating': activeVariants.has('3x') }]">
              <span class="variant-label">3 COLORS</span>
              <span class="color-info">青 → 紫 → 赤</span>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-4x', { 'is-animating': activeVariants.has('4x') }]">
              <span class="variant-label">4 COLORS</span>
              <span class="color-info">青 → 紫 → 赤 → 黄</span>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-5x', { 'is-animating': activeVariants.has('5x') }]">
              <span class="variant-label">5 COLORS</span>
              <span class="color-info">青 → 紫 → 赤 → 黄 → 緑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ColorChangeVariant = '2x' | '3x' | '4x' | '5x'

const allVariants: ColorChangeVariant[] = ['2x', '3x', '4x', '5x']

const activeVariants = ref<Set<ColorChangeVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

// Color Change Variations (4 patterns)
.variant-2x.is-animating { @include anim.color-change('2x', 4s); }
.variant-3x.is-animating { @include anim.color-change('3x', 6s); }
.variant-4x.is-animating { @include anim.color-change('4x', 8s); }
.variant-5x.is-animating { @include anim.color-change('5x', 10s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-color-change {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.demo-box {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 180px;
  border-radius: 16px;

  background: #19dcea;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}

.variant-label {
  padding: 8px 16px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: bold;
  color: white;

  background: rgb(0 0 0 / 50%);
  backdrop-filter: blur(4px);
}

.color-info {
  font-size: 12px;
  color: white;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaAttnBounce.vue
````vue
<template>
  <div class="ho-animista-attn-bounce">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Attention Bounce Animations
    </h1>

    <p class="demo-description">
      4種類のバウンスアテンションアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Attention Bounce (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                BOTTOM
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                LEFT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                RIGHT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type BounceVariant = 'top' | 'bottom' | 'left' | 'right'

const allVariants: BounceVariant[] = ['top', 'bottom', 'left', 'right']

const isHoverMode = ref(false)
const activeVariants = ref<Set<BounceVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.bounce('top', 0.9s); }
  .demo-box.variant-bottom { @include anim.bounce('bottom', 0.9s); }
  .demo-box.variant-left { @include anim.bounce('left', 0.9s); }
  .demo-box.variant-right { @include anim.bounce('right', 0.9s); }
}

// Bounce Variations (4 patterns)
.variant-top.is-animating { @include anim.bounce('top', 0.9s); }
.variant-bottom.is-animating { @include anim.bounce('bottom', 0.9s); }
.variant-left.is-animating { @include anim.bounce('left', 0.9s); }
.variant-right.is-animating { @include anim.bounce('right', 0.9s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-attn-bounce {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  border-radius: 16px;

  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #3b82f6;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaAttnFlicker.vue
````vue
<template>
  <div class="ho-animista-attn-flicker">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Attention Flicker Animations
    </h1>

    <p class="demo-description">
      5種類のアテンションフリッカーアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Attention Flicker (5 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-1', { 'is-animating': activeVariants.has('1') }]">
                FLICKER 1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-2', { 'is-animating': activeVariants.has('2') }]">
                FLICKER 2
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-3', { 'is-animating': activeVariants.has('3') }]">
                FLICKER 3
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-4', { 'is-animating': activeVariants.has('4') }]">
                FLICKER 4
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-5', { 'is-animating': activeVariants.has('5') }]">
                FLICKER 5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlickerVariant = '1' | '2' | '3' | '4' | '5'

const allVariants: FlickerVariant[] = ['1', '2', '3', '4', '5']

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlickerVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-1 { @include anim.flicker('1', 2s); }
  .demo-box.variant-2 { @include anim.flicker('2', 2s); }
  .demo-box.variant-3 { @include anim.flicker('3', 2.5s); }
  .demo-box.variant-4 { @include anim.flicker('4', 4s); }
  .demo-box.variant-5 { @include anim.flicker('5', 8s); }
}

// Attention Flicker Variations (5 patterns)
.variant-1.is-animating { @include anim.flicker('1', 2s); }
.variant-2.is-animating { @include anim.flicker('2', 2s); }
.variant-3.is-animating { @include anim.flicker('3', 2.5s); }
.variant-4.is-animating { @include anim.flicker('4', 4s); }
.variant-5.is-animating { @include anim.flicker('5', 8s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-attn-flicker {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  border-radius: 16px;

  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #f97316;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaBlink.vue
````vue
<template>
  <div class="ho-animista-blink">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Blink Animations
    </h1>

    <p class="demo-description">
      2種類のブリンクアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Blink (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-1', { 'is-animating': activeVariants.has('1') }]">
                BLINK 1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-2', { 'is-animating': activeVariants.has('2') }]">
                BLINK 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type BlinkVariant = '1' | '2'

const allVariants: BlinkVariant[] = ['1', '2']

const isHoverMode = ref(false)
const activeVariants = ref<Set<BlinkVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-1 { @include anim.blink('1', 0.9s); }
  .demo-box.variant-2 { @include anim.blink('2', 0.9s); }
}

// Blink Variations (2 patterns)
.variant-1.is-animating { @include anim.blink('1', 0.9s); }
.variant-2.is-animating { @include anim.blink('2', 0.9s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-blink {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 150px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 150px;
  border-radius: 16px;

  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #ec4899;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaBlurOut.vue
````vue
<template>
  <div class="ho-animista-blur-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Text Blur Out Animations
    </h1>

    <p class="demo-description">
      5種類のテキストブラー退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Text Blur Out (5 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-blur-out', { 'is-animating': activeVariants.has('blur-out') }]">
                BLUR OUT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract', { 'is-animating': activeVariants.has('contract') }]">
                CONTRACT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck', { 'is-animating': activeVariants.has('contract-bck') }]">
                CONTRACT BCK
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand', { 'is-animating': activeVariants.has('expand') }]">
                EXPAND
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd', { 'is-animating': activeVariants.has('expand-fwd') }]">
                EXPAND FWD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type BlurOutVariant
  = | 'blur-out'
    | 'contract'
    | 'contract-bck'
    | 'expand'
    | 'expand-fwd'

const allVariants: BlurOutVariant[] = [
  'blur-out',
  'contract',
  'contract-bck',
  'expand',
  'expand-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<BlurOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 200)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-blur-out { @include anim.blur-out('', 1.2s); }
  .demo-text.variant-contract { @include anim.blur-out('contract', 1.2s); }
  .demo-text.variant-contract-bck { @include anim.blur-out('contract-bck', 1.2s); }
  .demo-text.variant-expand { @include anim.blur-out('expand', 1.2s); }
  .demo-text.variant-expand-fwd { @include anim.blur-out('expand-fwd', 1.2s); }
}

// Text Blur Out Variations (5 patterns)
.variant-blur-out.is-animating { @include anim.blur-out('', 1.2s); }
.variant-contract.is-animating { @include anim.blur-out('contract', 1.2s); }
.variant-contract-bck.is-animating { @include anim.blur-out('contract-bck', 1.2s); }
.variant-expand.is-animating { @include anim.blur-out('expand', 1.2s); }
.variant-expand-fwd.is-animating { @include anim.blur-out('expand-fwd', 1.2s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-blur-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #3b82f6;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaBounceIn.vue
````vue
<template>
  <div class="ho-animista-bounce-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Bounce In Animations
    </h1>

    <p class="demo-description">
      6種類のバウンス入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          All Directions (6 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type BounceInVariant = 'top' | 'right' | 'bottom' | 'left' | 'fwd' | 'bck'

const allVariants: BounceInVariant[] = [
  'top',
  'right',
  'bottom',
  'left',
  'fwd',
  'bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<BounceInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.bounce-in('top', 1.1s); }
  .demo-box.variant-right { @include anim.bounce-in('right', 1.1s); }
  .demo-box.variant-bottom { @include anim.bounce-in('bottom', 1.1s); }
  .demo-box.variant-left { @include anim.bounce-in('left', 1.1s); }
  .demo-box.variant-fwd { @include anim.bounce-in('fwd', 0.6s); }
  .demo-box.variant-bck { @include anim.bounce-in('bck', 0.7s); }
}

.variant-top.is-animating { @include anim.bounce-in('top', 1.1s); }
.variant-right.is-animating { @include anim.bounce-in('right', 1.1s); }
.variant-bottom.is-animating { @include anim.bounce-in('bottom', 1.1s); }
.variant-left.is-animating { @include anim.bounce-in('left', 1.1s); }
.variant-fwd.is-animating { @include anim.bounce-in('fwd', 0.6s); }
.variant-bck.is-animating { @include anim.bounce-in('bck', 0.7s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-bounce-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f472b6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f472b6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaBounceOut.vue
````vue
<template>
  <div class="ho-animista-bounce-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Bounce Out Animations
    </h1>

    <p class="demo-description">
      6種類のバウンス退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Directional & Depth Bounces (6 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type BounceOutVariant
  = | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'bck'
    | 'fwd'

const allVariants: BounceOutVariant[] = [
  'top',
  'right',
  'bottom',
  'left',
  'bck',
  'fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<BounceOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.bounce-out('top', 1.5s); }
  .demo-box.variant-right { @include anim.bounce-out('right', 1.5s); }
  .demo-box.variant-bottom { @include anim.bounce-out('bottom', 1.5s); }
  .demo-box.variant-left { @include anim.bounce-out('left', 1.5s); }
  .demo-box.variant-bck { @include anim.bounce-out('bck', 1.5s); }
  .demo-box.variant-fwd { @include anim.bounce-out('fwd', 1.5s); }
}

// Directional & Depth Bounces (6 patterns)
.variant-top.is-animating { @include anim.bounce-out('top', 1.5s); }
.variant-right.is-animating { @include anim.bounce-out('right', 1.5s); }
.variant-bottom.is-animating { @include anim.bounce-out('bottom', 1.5s); }
.variant-left.is-animating { @include anim.bounce-out('left', 1.5s); }
.variant-bck.is-animating { @include anim.bounce-out('bck', 1.5s); }
.variant-fwd.is-animating { @include anim.bounce-out('fwd', 1.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-bounce-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f97316;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f97316;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFadeIn.vue
````vue
<template>
  <div class="ho-animista-fade-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Fade In Animations
    </h1>

    <p class="demo-description">
      11種類のフェード入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic & Z-axis (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-basic', { 'is-animating': activeVariants.has('') }]">
                basic
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FadeInVariant = '' | 'fwd' | 'bck' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl'

const allVariants: FadeInVariant[] = [
  '',
  'fwd',
  'bck',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FadeInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-basic { @include anim.fade-in('', 1.2s); }
  .demo-box.variant-fwd { @include anim.fade-in('fwd', 0.6s); }
  .demo-box.variant-bck { @include anim.fade-in('bck', 1.2s); }
  .demo-box.variant-top { @include anim.fade-in('top', 1.2s); }
  .demo-box.variant-right { @include anim.fade-in('right', 1.2s); }
  .demo-box.variant-bottom { @include anim.fade-in('bottom', 1.2s); }
  .demo-box.variant-left { @include anim.fade-in('left', 1.2s); }
  .demo-box.variant-tr { @include anim.fade-in('tr', 1.2s); }
  .demo-box.variant-br { @include anim.fade-in('br', 1.2s); }
  .demo-box.variant-bl { @include anim.fade-in('bl', 1.2s); }
  .demo-box.variant-tl { @include anim.fade-in('tl', 1.2s); }
}

// Basic & Z-axis (3 patterns)
.variant-basic.is-animating { @include anim.fade-in('', 1.2s); }
.variant-fwd.is-animating { @include anim.fade-in('fwd', 0.6s); }
.variant-bck.is-animating { @include anim.fade-in('bck', 1.2s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.fade-in('top', 1.2s); }
.variant-right.is-animating { @include anim.fade-in('right', 1.2s); }
.variant-bottom.is-animating { @include anim.fade-in('bottom', 1.2s); }
.variant-left.is-animating { @include anim.fade-in('left', 1.2s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.fade-in('tr', 1.2s); }
.variant-br.is-animating { @include anim.fade-in('br', 1.2s); }
.variant-bl.is-animating { @include anim.fade-in('bl', 1.2s); }
.variant-tl.is-animating { @include anim.fade-in('tl', 1.2s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-fade-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #a78bfa;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #a78bfa;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFadeOut.vue
````vue
<template>
  <div class="ho-animista-fade-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Fade Out Animations
    </h1>

    <p class="demo-description">
      11種類のフェード退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Fade Out Variations (11 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fade-out', { 'is-animating': activeVariants.has('fade-out') }]">
                fade-out
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FadeOutVariant
  = | 'fade-out'
    | 'bck'
    | 'fwd'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: FadeOutVariant[] = [
  'fade-out',
  'bck',
  'fwd',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FadeOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-fade-out { @include anim.fade-out('', 1s); }
  .demo-box.variant-bck { @include anim.fade-out('bck', 1s); }
  .demo-box.variant-fwd { @include anim.fade-out('fwd', 1s); }
  .demo-box.variant-top { @include anim.fade-out('top', 1s); }
  .demo-box.variant-tr { @include anim.fade-out('tr', 1s); }
  .demo-box.variant-right { @include anim.fade-out('right', 1s); }
  .demo-box.variant-br { @include anim.fade-out('br', 1s); }
  .demo-box.variant-bottom { @include anim.fade-out('bottom', 1s); }
  .demo-box.variant-bl { @include anim.fade-out('bl', 1s); }
  .demo-box.variant-left { @include anim.fade-out('left', 1s); }
  .demo-box.variant-tl { @include anim.fade-out('tl', 1s); }
}

// Fade Out Variations (11 patterns)
.variant-fade-out.is-animating { @include anim.fade-out('', 1s); }
.variant-bck.is-animating { @include anim.fade-out('bck', 1s); }
.variant-fwd.is-animating { @include anim.fade-out('fwd', 1s); }
.variant-top.is-animating { @include anim.fade-out('top', 1s); }
.variant-tr.is-animating { @include anim.fade-out('tr', 1s); }
.variant-right.is-animating { @include anim.fade-out('right', 1s); }
.variant-br.is-animating { @include anim.fade-out('br', 1s); }
.variant-bottom.is-animating { @include anim.fade-out('bottom', 1s); }
.variant-bl.is-animating { @include anim.fade-out('bl', 1s); }
.variant-left.is-animating { @include anim.fade-out('left', 1s); }
.variant-tl.is-animating { @include anim.fade-out('tl', 1s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-fade-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #8b5cf6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #8b5cf6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlicker.vue
````vue
<template>
  <div class="ho-animista-flicker">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Text Flicker Animations
    </h1>

    <p class="demo-description">
      2種類のテキストフリッカーグローアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Text Flicker Glow (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-in-glow', { 'is-animating': activeVariants.has('in-glow') }]">
                FLICKER IN GLOW
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-out-glow', { 'is-animating': activeVariants.has('out-glow') }]">
                FLICKER OUT GLOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlickerVariant
  = | 'in-glow'
    | 'out-glow'

const allVariants: FlickerVariant[] = [
  'in-glow',
  'out-glow',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlickerVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 4500)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-in-glow { @include anim.text-flicker('in-glow', 4s); }
  .demo-text.variant-out-glow { @include anim.text-flicker('out-glow', 4s); }
}

// Text Flicker Variations (2 patterns)
.variant-in-glow.is-animating { @include anim.text-flicker('in-glow', 4s); }
.variant-out-glow.is-animating { @include anim.text-flicker('out-glow', 4s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flicker {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 18px;
  font-weight: bold;
  color: #f59e0b;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlickerIn.vue
````vue
<template>
  <div class="ho-animista-flicker-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flicker In Animations
    </h1>

    <p class="demo-description">
      2種類のフリッカー入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Flicker Patterns (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-1', { 'is-animating': activeVariants.has('1') }]">
                flicker 1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-2', { 'is-animating': activeVariants.has('2') }]">
                flicker 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlickerInVariant = '1' | '2'

const allVariants: FlickerInVariant[] = [
  '1',
  '2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlickerInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 200)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-1 { @include anim.flicker-in('1', 2s); }
  .demo-box.variant-2 { @include anim.flicker-in('2', 4s); }
}

.variant-1.is-animating { @include anim.flicker-in('1', 2s); }
.variant-2.is-animating { @include anim.flicker-in('2', 4s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flicker-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #fcd34d;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #fcd34d;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlickerOut.vue
````vue
<template>
  <div class="ho-animista-flicker-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flicker Out Animations
    </h1>

    <p class="demo-description">
      2種類のフリッカー退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Flicker Out Variations (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-1', { 'is-animating': activeVariants.has('1') }]">
                flicker-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-2', { 'is-animating': activeVariants.has('2') }]">
                flicker-2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlickerOutVariant
  = | '1'
    | '2'

const allVariants: FlickerOutVariant[] = [
  '1',
  '2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlickerOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-1 { @include anim.flicker-out('1', 2s); }
  .demo-box.variant-2 { @include anim.flicker-out('2', 2s); }
}

// Flicker Out Variations (2 patterns)
.variant-1.is-animating { @include anim.flicker-out('1', 2s); }
.variant-2.is-animating { @include anim.flicker-out('2', 2s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flicker-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f59e0b;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f59e0b;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlip.vue
````vue
<template>
  <div class="ho-animista-flip">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip Animations
    </h1>

    <p class="demo-description">
      16種類のフリップアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-bottom', { 'is-animating': activeVariants.has('horizontal-bottom') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-top', { 'is-animating': activeVariants.has('horizontal-top') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-bck', { 'is-animating': activeVariants.has('horizontal-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-fwd', { 'is-animating': activeVariants.has('horizontal-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-vertical-right', { 'is-animating': activeVariants.has('vertical-right') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-vertical-left', { 'is-animating': activeVariants.has('vertical-left') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-vertical-bck', { 'is-animating': activeVariants.has('vertical-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-vertical-fwd', { 'is-animating': activeVariants.has('vertical-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal 1 (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-tr', { 'is-animating': activeVariants.has('diagonal-1-tr') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-bl', { 'is-animating': activeVariants.has('diagonal-1-bl') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-bck', { 'is-animating': activeVariants.has('diagonal-1-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-fwd', { 'is-animating': activeVariants.has('diagonal-1-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal 2 (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-br', { 'is-animating': activeVariants.has('diagonal-2-br') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-tl', { 'is-animating': activeVariants.has('diagonal-2-tl') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-bck', { 'is-animating': activeVariants.has('diagonal-2-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-fwd', { 'is-animating': activeVariants.has('diagonal-2-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlipVariant
  = 'horizontal-bottom' | 'horizontal-top' | 'horizontal-bck' | 'horizontal-fwd'
    | 'vertical-right' | 'vertical-left' | 'vertical-bck' | 'vertical-fwd'
    | 'diagonal-1-tr' | 'diagonal-1-bl' | 'diagonal-1-bck' | 'diagonal-1-fwd'
    | 'diagonal-2-br' | 'diagonal-2-tl' | 'diagonal-2-bck' | 'diagonal-2-fwd'

const allVariants: FlipVariant[] = [
  'horizontal-bottom', 'horizontal-top', 'horizontal-bck', 'horizontal-fwd',
  'vertical-right', 'vertical-left', 'vertical-bck', 'vertical-fwd',
  'diagonal-1-tr', 'diagonal-1-bl', 'diagonal-1-bck', 'diagonal-1-fwd',
  'diagonal-2-br', 'diagonal-2-tl', 'diagonal-2-bck', 'diagonal-2-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Flip Card Container
// ============================================
.demo-box.flip-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

.front-text,
.back-text {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

// ============================================
// Horizontal (4 patterns)
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.flip-card.variant-horizontal-bottom { @include anim.flip('horizontal-bottom', 0.4s); }
  .demo-box.flip-card.variant-horizontal-top { @include anim.flip('horizontal-top', 0.4s); }
  .demo-box.flip-card.variant-horizontal-bck { @include anim.flip('horizontal-bck', 0.4s); }
  .demo-box.flip-card.variant-horizontal-fwd { @include anim.flip('horizontal-fwd', 0.4s); }
  .demo-box.flip-card.variant-vertical-right { @include anim.flip('vertical-right', 0.4s); }
  .demo-box.flip-card.variant-vertical-left { @include anim.flip('vertical-left', 0.4s); }
  .demo-box.flip-card.variant-vertical-bck { @include anim.flip('vertical-bck', 0.4s); }
  .demo-box.flip-card.variant-vertical-fwd { @include anim.flip('vertical-fwd', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-tr { @include anim.flip('diagonal-1-tr', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-bl { @include anim.flip('diagonal-1-bl', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-bck { @include anim.flip('diagonal-1-bck', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-fwd { @include anim.flip('diagonal-1-fwd', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-br { @include anim.flip('diagonal-2-br', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-tl { @include anim.flip('diagonal-2-tl', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-bck { @include anim.flip('diagonal-2-bck', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-fwd { @include anim.flip('diagonal-2-fwd', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
.variant-horizontal-bottom.is-animating { @include anim.flip('horizontal-bottom', 0.4s); }

.variant-horizontal-bottom .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-bottom .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-top.is-animating { @include anim.flip('horizontal-top', 0.4s); }

.variant-horizontal-top .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-top .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-bck.is-animating { @include anim.flip('horizontal-bck', 0.4s); }

.variant-horizontal-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-fwd.is-animating { @include anim.flip('horizontal-fwd', 0.4s); }

.variant-horizontal-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Vertical (4 patterns)
// ============================================
.variant-vertical-right.is-animating { @include anim.flip('vertical-right', 0.4s); }

.variant-vertical-right .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-right .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-left.is-animating { @include anim.flip('vertical-left', 0.4s); }

.variant-vertical-left .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-left .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-bck.is-animating { @include anim.flip('vertical-bck', 0.4s); }

.variant-vertical-bck .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-fwd.is-animating { @include anim.flip('vertical-fwd', 0.4s); }

.variant-vertical-fwd .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal 1 (4 patterns)
// ============================================
.variant-diagonal-1-tr.is-animating { @include anim.flip('diagonal-1-tr', 0.4s); }

.variant-diagonal-1-tr .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-tr .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bl.is-animating { @include anim.flip('diagonal-1-bl', 0.4s); }

.variant-diagonal-1-bl .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bl .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bck.is-animating { @include anim.flip('diagonal-1-bck', 0.4s); }

.variant-diagonal-1-bck .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bck .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-fwd.is-animating { @include anim.flip('diagonal-1-fwd', 0.4s); }

.variant-diagonal-1-fwd .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-fwd .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal 2 (4 patterns)
// ============================================
.variant-diagonal-2-br.is-animating { @include anim.flip('diagonal-2-br', 0.4s); }

.variant-diagonal-2-br .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-br .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-tl.is-animating { @include anim.flip('diagonal-2-tl', 0.4s); }

.variant-diagonal-2-tl .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-tl .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-bck.is-animating { @include anim.flip('diagonal-2-bck', 0.4s); }

.variant-diagonal-2-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-bck .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-fwd.is-animating { @include anim.flip('diagonal-2-fwd', 0.4s); }

.variant-diagonal-2-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-fwd .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.ho-animista-flip {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlip2.vue
````vue
<template>
  <div class="ho-animista-flip-2">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip 2 Animations
    </h1>

    <p class="demo-description">
      16種類のフリップ＋移動アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Top (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-top-1', { 'is-animating': activeVariants.has('hor-top-1') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-top-2', { 'is-animating': activeVariants.has('hor-top-2') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-top-bck', { 'is-animating': activeVariants.has('hor-top-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-top-fwd', { 'is-animating': activeVariants.has('hor-top-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical Right (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-right-1', { 'is-animating': activeVariants.has('ver-right-1') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-right-2', { 'is-animating': activeVariants.has('ver-right-2') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-right-bck', { 'is-animating': activeVariants.has('ver-right-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-right-fwd', { 'is-animating': activeVariants.has('ver-right-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Bottom (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-bottom-1', { 'is-animating': activeVariants.has('hor-bottom-1') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-bottom-2', { 'is-animating': activeVariants.has('hor-bottom-2') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-bottom-bck', { 'is-animating': activeVariants.has('hor-bottom-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-bottom-fwd', { 'is-animating': activeVariants.has('hor-bottom-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical Left (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-left-1', { 'is-animating': activeVariants.has('ver-left-1') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-left-2', { 'is-animating': activeVariants.has('ver-left-2') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-left-bck', { 'is-animating': activeVariants.has('ver-left-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-left-fwd', { 'is-animating': activeVariants.has('ver-left-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type Flip2Variant
  = 'hor-top-1' | 'hor-top-2' | 'hor-top-bck' | 'hor-top-fwd'
    | 'ver-right-1' | 'ver-right-2' | 'ver-right-bck' | 'ver-right-fwd'
    | 'hor-bottom-1' | 'hor-bottom-2' | 'hor-bottom-bck' | 'hor-bottom-fwd'
    | 'ver-left-1' | 'ver-left-2' | 'ver-left-bck' | 'ver-left-fwd'

const allVariants: Flip2Variant[] = [
  'hor-top-1', 'hor-top-2', 'hor-top-bck', 'hor-top-fwd',
  'ver-right-1', 'ver-right-2', 'ver-right-bck', 'ver-right-fwd',
  'hor-bottom-1', 'hor-bottom-2', 'hor-bottom-bck', 'hor-bottom-fwd',
  'ver-left-1', 'ver-left-2', 'ver-left-bck', 'ver-left-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<Flip2Variant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Flip Card Container
// ============================================
.demo-box.flip-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

.front-text,
.back-text {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

// ============================================
// Horizontal Top (4 patterns)
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.flip-card.variant-hor-top-1 { @include anim.flip-2('hor-top-1', 0.4s); }
  .demo-box.flip-card.variant-hor-top-2 { @include anim.flip-2('hor-top-2', 0.4s); }
  .demo-box.flip-card.variant-hor-top-bck { @include anim.flip-2('hor-top-bck', 0.4s); }
  .demo-box.flip-card.variant-hor-top-fwd { @include anim.flip-2('hor-top-fwd', 0.4s); }
  .demo-box.flip-card.variant-ver-right-1 { @include anim.flip-2('ver-right-1', 0.4s); }
  .demo-box.flip-card.variant-ver-right-2 { @include anim.flip-2('ver-right-2', 0.4s); }
  .demo-box.flip-card.variant-ver-right-bck { @include anim.flip-2('ver-right-bck', 0.4s); }
  .demo-box.flip-card.variant-ver-right-fwd { @include anim.flip-2('ver-right-fwd', 0.4s); }
  .demo-box.flip-card.variant-hor-bottom-1 { @include anim.flip-2('hor-bottom-1', 0.4s); }
  .demo-box.flip-card.variant-hor-bottom-2 { @include anim.flip-2('hor-bottom-2', 0.4s); }
  .demo-box.flip-card.variant-hor-bottom-bck { @include anim.flip-2('hor-bottom-bck', 0.4s); }
  .demo-box.flip-card.variant-hor-bottom-fwd { @include anim.flip-2('hor-bottom-fwd', 0.4s); }
  .demo-box.flip-card.variant-ver-left-1 { @include anim.flip-2('ver-left-1', 0.4s); }
  .demo-box.flip-card.variant-ver-left-2 { @include anim.flip-2('ver-left-2', 0.4s); }
  .demo-box.flip-card.variant-ver-left-bck { @include anim.flip-2('ver-left-bck', 0.4s); }
  .demo-box.flip-card.variant-ver-left-fwd { @include anim.flip-2('ver-left-fwd', 0.4s); }
}

.variant-hor-top-1.is-animating { @include anim.flip-2('hor-top-1', 0.5s); }

.variant-hor-top-1 .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top-1 .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top-2.is-animating { @include anim.flip-2('hor-top-2', 0.5s); }

.variant-hor-top-2 .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top-2 .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top-bck.is-animating { @include anim.flip-2('hor-top-bck', 0.5s); }

.variant-hor-top-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top-fwd.is-animating { @include anim.flip-2('hor-top-fwd', 0.5s); }

.variant-hor-top-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Vertical Right (4 patterns)
// ============================================
.variant-ver-right-1.is-animating { @include anim.flip-2('ver-right-1', 0.5s); }

.variant-ver-right-1 .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right-1 .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right-2.is-animating { @include anim.flip-2('ver-right-2', 0.5s); }

.variant-ver-right-2 .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right-2 .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right-bck.is-animating { @include anim.flip-2('ver-right-bck', 0.5s); }

.variant-ver-right-bck .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right-fwd.is-animating { @include anim.flip-2('ver-right-fwd', 0.5s); }

.variant-ver-right-fwd .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Horizontal Bottom (4 patterns)
// ============================================
.variant-hor-bottom-1.is-animating { @include anim.flip-2('hor-bottom-1', 0.5s); }

.variant-hor-bottom-1 .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom-1 .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom-2.is-animating { @include anim.flip-2('hor-bottom-2', 0.5s); }

.variant-hor-bottom-2 .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom-2 .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom-bck.is-animating { @include anim.flip-2('hor-bottom-bck', 0.5s); }

.variant-hor-bottom-bck .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom-fwd.is-animating { @include anim.flip-2('hor-bottom-fwd', 0.5s); }

.variant-hor-bottom-fwd .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Vertical Left (4 patterns)
// ============================================
.variant-ver-left-1.is-animating { @include anim.flip-2('ver-left-1', 0.5s); }

.variant-ver-left-1 .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left-1 .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left-2.is-animating { @include anim.flip-2('ver-left-2', 0.5s); }

.variant-ver-left-2 .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left-2 .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left-bck.is-animating { @include anim.flip-2('ver-left-bck', 0.5s); }

.variant-ver-left-bck .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left-fwd.is-animating { @include anim.flip-2('ver-left-fwd', 0.5s); }

.variant-ver-left-fwd .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flip-2 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlipIn.vue
````vue
<template>
  <div class="ho-animista-flip-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip In Animations
    </h1>

    <p class="demo-description">
      8種類のフリップ入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Flip (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
                hor-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
                hor-bottom
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical Flip (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-left', { 'is-animating': activeVariants.has('ver-left') }]">
                ver-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-right', { 'is-animating': activeVariants.has('ver-right') }]">
                ver-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Flip (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1-tr', { 'is-animating': activeVariants.has('diag-1-tr') }]">
                diag-1-tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1-bl', { 'is-animating': activeVariants.has('diag-1-bl') }]">
                diag-1-bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2-tl', { 'is-animating': activeVariants.has('diag-2-tl') }]">
                diag-2-tl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2-br', { 'is-animating': activeVariants.has('diag-2-br') }]">
                diag-2-br
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlipInVariant = 'hor-top' | 'hor-bottom' | 'ver-left' | 'ver-right' | 'diag-1-tr' | 'diag-1-bl' | 'diag-2-tl' | 'diag-2-br'

const allVariants: FlipInVariant[] = [
  'hor-top',
  'hor-bottom',
  'ver-left',
  'ver-right',
  'diag-1-tr',
  'diag-1-bl',
  'diag-2-tl',
  'diag-2-br',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-hor-top { @include anim.flip-in('hor-top', 0.5s); }
  .demo-box.variant-hor-bottom { @include anim.flip-in('hor-bottom', 0.5s); }
  .demo-box.variant-ver-left { @include anim.flip-in('ver-left', 0.5s); }
  .demo-box.variant-ver-right { @include anim.flip-in('ver-right', 0.5s); }
  .demo-box.variant-diag-1-tr { @include anim.flip-in('diag-1-tr', 0.5s); }
  .demo-box.variant-diag-1-bl { @include anim.flip-in('diag-1-bl', 0.5s); }
  .demo-box.variant-diag-2-tl { @include anim.flip-in('diag-2-tl', 0.5s); }
  .demo-box.variant-diag-2-br { @include anim.flip-in('diag-2-br', 0.5s); }
}

// Horizontal Flip (2 patterns)
.variant-hor-top.is-animating { @include anim.flip-in('hor-top', 0.5s); }
.variant-hor-bottom.is-animating { @include anim.flip-in('hor-bottom', 0.5s); }

// Vertical Flip (2 patterns)
.variant-ver-left.is-animating { @include anim.flip-in('ver-left', 0.5s); }
.variant-ver-right.is-animating { @include anim.flip-in('ver-right', 0.5s); }

// Diagonal Flip (4 patterns)
.variant-diag-1-tr.is-animating { @include anim.flip-in('diag-1-tr', 0.5s); }
.variant-diag-1-bl.is-animating { @include anim.flip-in('diag-1-bl', 0.5s); }
.variant-diag-2-tl.is-animating { @include anim.flip-in('diag-2-tl', 0.5s); }
.variant-diag-2-br.is-animating { @include anim.flip-in('diag-2-br', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flip-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #8b5cf6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #8b5cf6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlipOut.vue
````vue
<template>
  <div class="ho-animista-flip-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip Out Animations
    </h1>

    <p class="demo-description">
      8種類の3Dフリップ退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal & Vertical (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
                hor-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
                hor-bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-left', { 'is-animating': activeVariants.has('ver-left') }]">
                ver-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-right', { 'is-animating': activeVariants.has('ver-right') }]">
                ver-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Flips (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1-tr', { 'is-animating': activeVariants.has('diag-1-tr') }]">
                diag-1-tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1-bl', { 'is-animating': activeVariants.has('diag-1-bl') }]">
                diag-1-bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2-tl', { 'is-animating': activeVariants.has('diag-2-tl') }]">
                diag-2-tl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2-br', { 'is-animating': activeVariants.has('diag-2-br') }]">
                diag-2-br
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlipOutVariant
  = | 'hor-top'
    | 'hor-bottom'
    | 'ver-left'
    | 'ver-right'
    | 'diag-1-tr'
    | 'diag-1-bl'
    | 'diag-2-tl'
    | 'diag-2-br'

const allVariants: FlipOutVariant[] = [
  'hor-top',
  'hor-bottom',
  'ver-left',
  'ver-right',
  'diag-1-tr',
  'diag-1-bl',
  'diag-2-tl',
  'diag-2-br',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-hor-top { @include anim.flip-out('hor-top', 0.45s); }
  .demo-box.variant-hor-bottom { @include anim.flip-out('hor-bottom', 0.45s); }
  .demo-box.variant-ver-left { @include anim.flip-out('ver-left', 0.45s); }
  .demo-box.variant-ver-right { @include anim.flip-out('ver-right', 0.45s); }
  .demo-box.variant-diag-1-tr { @include anim.flip-out('diag-1-tr', 0.45s); }
  .demo-box.variant-diag-1-bl { @include anim.flip-out('diag-1-bl', 0.45s); }
  .demo-box.variant-diag-2-tl { @include anim.flip-out('diag-2-tl', 0.45s); }
  .demo-box.variant-diag-2-br { @include anim.flip-out('diag-2-br', 0.45s); }
}

// Horizontal & Vertical (4 patterns)
.variant-hor-top.is-animating { @include anim.flip-out('hor-top', 0.45s); }
.variant-hor-bottom.is-animating { @include anim.flip-out('hor-bottom', 0.45s); }
.variant-ver-left.is-animating { @include anim.flip-out('ver-left', 0.45s); }
.variant-ver-right.is-animating { @include anim.flip-out('ver-right', 0.45s); }

// Diagonal Flips (4 patterns)
.variant-diag-1-tr.is-animating { @include anim.flip-out('diag-1-tr', 0.45s); }
.variant-diag-1-bl.is-animating { @include anim.flip-out('diag-1-bl', 0.45s); }
.variant-diag-2-tl.is-animating { @include anim.flip-out('diag-2-tl', 0.45s); }
.variant-diag-2-br.is-animating { @include anim.flip-out('diag-2-br', 0.45s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flip-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #ef4444;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #ef4444;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlipScale.vue
````vue
<template>
  <div class="ho-animista-flip-scale">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip Scale Animations
    </h1>

    <p class="demo-description">
      8種類のフリップ＋スケールアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-hor', { 'is-animating': activeVariants.has('up-hor') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-hor', { 'is-animating': activeVariants.has('down-hor') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-ver', { 'is-animating': activeVariants.has('up-ver') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-ver', { 'is-animating': activeVariants.has('down-ver') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal 1 (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-diag-1', { 'is-animating': activeVariants.has('up-diag-1') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-diag-1', { 'is-animating': activeVariants.has('down-diag-1') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal 2 (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-diag-2', { 'is-animating': activeVariants.has('up-diag-2') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-diag-2', { 'is-animating': activeVariants.has('down-diag-2') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlipScaleVariant
  = 'up-hor' | 'down-hor'
    | 'up-ver' | 'down-ver'
    | 'up-diag-1' | 'down-diag-1'
    | 'up-diag-2' | 'down-diag-2'

const allVariants: FlipScaleVariant[] = [
  'up-hor', 'down-hor',
  'up-ver', 'down-ver',
  'up-diag-1', 'down-diag-1',
  'up-diag-2', 'down-diag-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipScaleVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Flip Card Container
// ============================================
.demo-box.flip-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

.front-text,
.back-text {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

// ============================================
// Horizontal (2 patterns)
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.flip-card.variant-up-hor { @include anim.flip-scale('up-hor', 0.4s); }
  .demo-box.flip-card.variant-down-hor { @include anim.flip-scale('down-hor', 0.4s); }
  .demo-box.flip-card.variant-up-ver { @include anim.flip-scale('up-ver', 0.4s); }
  .demo-box.flip-card.variant-down-ver { @include anim.flip-scale('down-ver', 0.4s); }
  .demo-box.flip-card.variant-up-diag-1 { @include anim.flip-scale('up-diag-1', 0.4s); }
  .demo-box.flip-card.variant-down-diag-1 { @include anim.flip-scale('down-diag-1', 0.4s); }
  .demo-box.flip-card.variant-up-diag-2 { @include anim.flip-scale('up-diag-2', 0.4s); }
  .demo-box.flip-card.variant-down-diag-2 { @include anim.flip-scale('down-diag-2', 0.4s); }
}

.variant-up-hor.is-animating { @include anim.flip-scale('up-hor', 0.5s); }

.variant-up-hor .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-up-hor .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-hor.is-animating { @include anim.flip-scale('down-hor', 0.5s); }

.variant-down-hor .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-hor .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Vertical (2 patterns)
// ============================================
.variant-up-ver.is-animating { @include anim.flip-scale('up-ver', 0.5s); }

.variant-up-ver .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-up-ver .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-ver.is-animating { @include anim.flip-scale('down-ver', 0.5s); }

.variant-down-ver .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-ver .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal 1 (2 patterns)
// ============================================
.variant-up-diag-1.is-animating { @include anim.flip-scale('up-diag-1', 0.5s); }

.variant-up-diag-1 .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-up-diag-1 .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-diag-1.is-animating { @include anim.flip-scale('down-diag-1', 0.5s); }

.variant-down-diag-1 .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-diag-1 .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal 2 (2 patterns)
// ============================================
.variant-up-diag-2.is-animating { @include anim.flip-scale('up-diag-2', 0.5s); }

.variant-up-diag-2 .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-up-diag-2 .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-diag-2.is-animating { @include anim.flip-scale('down-diag-2', 0.5s); }

.variant-down-diag-2 .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-down-diag-2 .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flip-scale {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlipScale2.vue
````vue
<template>
  <div class="ho-animista-flip-scale-2">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip Scale 2 Animations
    </h1>

    <p class="demo-description">
      4種類のフリップ＋スケール＋移動アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          All Patterns (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-right', { 'is-animating': activeVariants.has('ver-right') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-ver-left', { 'is-animating': activeVariants.has('ver-left') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FlipScale2Variant = 'hor-top' | 'ver-right' | 'hor-bottom' | 'ver-left'

const allVariants: FlipScale2Variant[] = [
  'hor-top',
  'ver-right',
  'hor-bottom',
  'ver-left',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipScale2Variant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Flip Card Container
// ============================================
.demo-box.flip-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

.front-text,
.back-text {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

// ============================================
// All Patterns (4 patterns)
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.flip-card.variant-hor-top { @include anim.flip-scale-2('hor-top', 0.4s); }
  .demo-box.flip-card.variant-ver-right { @include anim.flip-scale-2('ver-right', 0.4s); }
  .demo-box.flip-card.variant-hor-bottom { @include anim.flip-scale-2('hor-bottom', 0.4s); }
  .demo-box.flip-card.variant-ver-left { @include anim.flip-scale-2('ver-left', 0.4s); }
}

.variant-hor-top.is-animating { @include anim.flip-scale-2('hor-top', 0.5s); }

.variant-hor-top .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right.is-animating { @include anim.flip-scale-2('ver-right', 0.5s); }

.variant-ver-right .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom.is-animating { @include anim.flip-scale-2('hor-bottom', 0.5s); }

.variant-hor-bottom .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left.is-animating { @include anim.flip-scale-2('ver-left', 0.5s); }

.variant-ver-left .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flip-scale-2 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaFocusIn.vue
````vue
<template>
  <div class="ho-animista-focus-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Text Focus In Animations
    </h1>

    <p class="demo-description">
      5種類のテキストフォーカス入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Text Focus In (5 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-focus-in', { 'is-animating': activeVariants.has('focus-in') }]">
                FOCUS IN
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand', { 'is-animating': activeVariants.has('expand') }]">
                EXPAND
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd', { 'is-animating': activeVariants.has('expand-fwd') }]">
                EXPAND FWD
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract', { 'is-animating': activeVariants.has('contract') }]">
                CONTRACT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck', { 'is-animating': activeVariants.has('contract-bck') }]">
                CONTRACT BCK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type FocusInVariant
  = | 'focus-in'
    | 'expand'
    | 'expand-fwd'
    | 'contract'
    | 'contract-bck'

const allVariants: FocusInVariant[] = [
  'focus-in',
  'expand',
  'expand-fwd',
  'contract',
  'contract-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FocusInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-focus-in { @include anim.focus-in('', 1s); }
  .demo-text.variant-expand { @include anim.focus-in('expand', 1s); }
  .demo-text.variant-expand-fwd { @include anim.focus-in('expand-fwd', 1s); }
  .demo-text.variant-contract { @include anim.focus-in('contract', 1s); }
  .demo-text.variant-contract-bck { @include anim.focus-in('contract-bck', 1s); }
}

// Text Focus In Variations (5 patterns)
.variant-focus-in.is-animating { @include anim.focus-in('', 1s); }
.variant-expand.is-animating { @include anim.focus-in('expand', 1s); }
.variant-expand-fwd.is-animating { @include anim.focus-in('expand-fwd', 1s); }
.variant-contract.is-animating { @include anim.focus-in('contract', 1s); }
.variant-contract-bck.is-animating { @include anim.focus-in('contract-bck', 1s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-focus-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #8b5cf6;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaJello.vue
````vue
<template>
  <div class="ho-animista-jello">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Jello Animations
    </h1>

    <p class="demo-description">
      4種類のゼリー状アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Jello (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-horizontal', { 'is-animating': activeVariants.has('horizontal') }]">
                HORIZONTAL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vertical', { 'is-animating': activeVariants.has('vertical') }]">
                VERTICAL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diagonal-1', { 'is-animating': activeVariants.has('diagonal-1') }]">
                DIAGONAL 1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diagonal-2', { 'is-animating': activeVariants.has('diagonal-2') }]">
                DIAGONAL 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type JelloVariant = 'horizontal' | 'vertical' | 'diagonal-1' | 'diagonal-2'

const allVariants: JelloVariant[] = ['horizontal', 'vertical', 'diagonal-1', 'diagonal-2']

const isHoverMode = ref(false)
const activeVariants = ref<Set<JelloVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-horizontal { @include anim.jello('horizontal', 0.9s); }
  .demo-box.variant-vertical { @include anim.jello('vertical', 0.9s); }
  .demo-box.variant-diagonal-1 { @include anim.jello('diagonal-1', 0.9s); }
  .demo-box.variant-diagonal-2 { @include anim.jello('diagonal-2', 0.9s); }
}

// Jello Variations (4 patterns)
.variant-horizontal.is-animating { @include anim.jello('horizontal', 0.9s); }
.variant-vertical.is-animating { @include anim.jello('vertical', 0.9s); }
.variant-diagonal-1.is-animating { @include anim.jello('diagonal-1', 0.9s); }
.variant-diagonal-2.is-animating { @include anim.jello('diagonal-2', 0.9s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-jello {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  border-radius: 16px;

  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #10b981;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaKenBurns.vue
````vue
<template>
  <div class="ho-animista-ken-burns">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Ken Burns Animations
    </h1>

    <p class="demo-description">
      8種類のケン・バーンズエフェクトアニメーションのデモ。背景画像のズーム＆パン効果をSCSSで実装しています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Ken Burns Effect (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                <span class="variant-label">TOP</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-right', { 'is-animating': activeVariants.has('top-right') }]">
                <span class="variant-label">TOP RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                <span class="variant-label">RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-right', { 'is-animating': activeVariants.has('bottom-right') }]">
                <span class="variant-label">BOTTOM RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                <span class="variant-label">BOTTOM</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-left', { 'is-animating': activeVariants.has('bottom-left') }]">
                <span class="variant-label">BOTTOM LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                <span class="variant-label">LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-left', { 'is-animating': activeVariants.has('top-left') }]">
                <span class="variant-label">TOP LEFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type KenBurnsVariant = 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left'

const allVariants: KenBurnsVariant[] = ['top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left']

const isHoverMode = ref(false)
const activeVariants = ref<Set<KenBurnsVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.ken-burns('top', 5s); }
  .demo-box.variant-top-right { @include anim.ken-burns('top-right', 5s); }
  .demo-box.variant-right { @include anim.ken-burns('right', 5s); }
  .demo-box.variant-bottom-right { @include anim.ken-burns('bottom-right', 5s); }
  .demo-box.variant-bottom { @include anim.ken-burns('bottom', 5s); }
  .demo-box.variant-bottom-left { @include anim.ken-burns('bottom-left', 5s); }
  .demo-box.variant-left { @include anim.ken-burns('left', 5s); }
  .demo-box.variant-top-left { @include anim.ken-burns('top-left', 5s); }
}

// Ken Burns Variations (8 patterns)
.variant-top.is-animating { @include anim.ken-burns('top', 5s); }
.variant-top-right.is-animating { @include anim.ken-burns('top-right', 5s); }
.variant-right.is-animating { @include anim.ken-burns('right', 5s); }
.variant-bottom-right.is-animating { @include anim.ken-burns('bottom-right', 5s); }
.variant-bottom.is-animating { @include anim.ken-burns('bottom', 5s); }
.variant-bottom-left.is-animating { @include anim.ken-burns('bottom-left', 5s); }
.variant-left.is-animating { @include anim.ken-burns('left', 5s); }
.variant-top-left.is-animating { @include anim.ken-burns('top-left', 5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-ken-burns {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.hover-wrapper {
  overflow: hidden;

  width: 240px;
  height: 180px;
  border-radius: 16px;

  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
}

.demo-box {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-position: center;
  background-size: cover;

  &.is-animating {
    pointer-events: none;
  }
}

.variant-label {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px 16px;
  border-radius: 8px;

  font-size: 12px;
  font-weight: bold;
  color: white;

  background: rgb(0 0 0 / 50%);
  backdrop-filter: blur(4px);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaPuffIn.vue
````vue
<template>
  <div class="ho-animista-puff-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Puff In Animations
    </h1>

    <p class="demo-description">
      11種類のパフ入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center (1 pattern)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Axis Variations (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor', { 'is-animating': activeVariants.has('hor') }]">
                hor
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver', { 'is-animating': activeVariants.has('ver') }]">
                ver
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type PuffInVariant = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'tr' | 'br' | 'bl' | 'tl' | 'hor' | 'ver'

const allVariants: PuffInVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
  'hor',
  'ver',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<PuffInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.puff-in('center', 0.7s); }
  .demo-box.variant-top { @include anim.puff-in('top', 0.7s); }
  .demo-box.variant-right { @include anim.puff-in('right', 0.7s); }
  .demo-box.variant-bottom { @include anim.puff-in('bottom', 0.7s); }
  .demo-box.variant-left { @include anim.puff-in('left', 0.7s); }
  .demo-box.variant-tr { @include anim.puff-in('tr', 0.7s); }
  .demo-box.variant-br { @include anim.puff-in('br', 0.7s); }
  .demo-box.variant-bl { @include anim.puff-in('bl', 0.7s); }
  .demo-box.variant-tl { @include anim.puff-in('tl', 0.7s); }
  .demo-box.variant-hor { @include anim.puff-in('hor', 0.7s); }
  .demo-box.variant-ver { @include anim.puff-in('ver', 0.7s); }
}

// Center (1 pattern)
.variant-center.is-animating { @include anim.puff-in('center', 0.7s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.puff-in('top', 0.7s); }
.variant-right.is-animating { @include anim.puff-in('right', 0.7s); }
.variant-bottom.is-animating { @include anim.puff-in('bottom', 0.7s); }
.variant-left.is-animating { @include anim.puff-in('left', 0.7s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.puff-in('tr', 0.7s); }
.variant-br.is-animating { @include anim.puff-in('br', 0.7s); }
.variant-bl.is-animating { @include anim.puff-in('bl', 0.7s); }
.variant-tl.is-animating { @include anim.puff-in('tl', 0.7s); }

// Axis Variations (2 patterns)
.variant-hor.is-animating { @include anim.puff-in('hor', 0.7s); }
.variant-ver.is-animating { @include anim.puff-in('ver', 0.7s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-puff-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #fbbf24;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #fbbf24;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaPuffOut.vue
````vue
<template>
  <div class="ho-animista-puff-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Puff Out Animations
    </h1>

    <p class="demo-description">
      11種類のパフ退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Puff Out Variations (11 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor', { 'is-animating': activeVariants.has('hor') }]">
                hor
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver', { 'is-animating': activeVariants.has('ver') }]">
                ver
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type PuffOutVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'hor'
    | 'ver'

const allVariants: PuffOutVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
  'hor',
  'ver',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<PuffOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.puff-out('center', 1s); }
  .demo-box.variant-top { @include anim.puff-out('top', 1s); }
  .demo-box.variant-tr { @include anim.puff-out('tr', 1s); }
  .demo-box.variant-right { @include anim.puff-out('right', 1s); }
  .demo-box.variant-br { @include anim.puff-out('br', 1s); }
  .demo-box.variant-bottom { @include anim.puff-out('bottom', 1s); }
  .demo-box.variant-bl { @include anim.puff-out('bl', 1s); }
  .demo-box.variant-left { @include anim.puff-out('left', 1s); }
  .demo-box.variant-tl { @include anim.puff-out('tl', 1s); }
  .demo-box.variant-hor { @include anim.puff-out('hor', 1s); }
  .demo-box.variant-ver { @include anim.puff-out('ver', 1s); }
}

// Puff Out Variations (11 patterns)
.variant-center.is-animating { @include anim.puff-out('center', 1s); }
.variant-top.is-animating { @include anim.puff-out('top', 1s); }
.variant-tr.is-animating { @include anim.puff-out('tr', 1s); }
.variant-right.is-animating { @include anim.puff-out('right', 1s); }
.variant-br.is-animating { @include anim.puff-out('br', 1s); }
.variant-bottom.is-animating { @include anim.puff-out('bottom', 1s); }
.variant-bl.is-animating { @include anim.puff-out('bl', 1s); }
.variant-left.is-animating { @include anim.puff-out('left', 1s); }
.variant-tl.is-animating { @include anim.puff-out('tl', 1s); }
.variant-hor.is-animating { @include anim.puff-out('hor', 1s); }
.variant-ver.is-animating { @include anim.puff-out('ver', 1s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-puff-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #10b981;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #10b981;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #10b981 0%, #059669 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaPulsate.vue
````vue
<template>
  <div class="ho-animista-pulsate">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Pulsate Animations
    </h1>

    <p class="demo-description">
      4種類のパルスアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Pulsate (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-heartbeat', { 'is-animating': activeVariants.has('heartbeat') }]">
                HEARTBEAT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-pulsate-bck', { 'is-animating': activeVariants.has('pulsate-bck') }]">
                PULSATE BCK
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-pulsate-fwd', { 'is-animating': activeVariants.has('pulsate-fwd') }]">
                PULSATE FWD
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ping', { 'is-animating': activeVariants.has('ping') }]">
                PING
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type PulsateVariant = 'heartbeat' | 'pulsate-bck' | 'pulsate-fwd' | 'ping'

const allVariants: PulsateVariant[] = ['heartbeat', 'pulsate-bck', 'pulsate-fwd', 'ping']

const isHoverMode = ref(false)
const activeVariants = ref<Set<PulsateVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-heartbeat { @include anim.pulsate('heartbeat', 1.5s); }
  .demo-box.variant-pulsate-bck { @include anim.pulsate('pulsate-bck', 0.5s); }
  .demo-box.variant-pulsate-fwd { @include anim.pulsate('pulsate-fwd', 0.5s); }
  .demo-box.variant-ping { @include anim.pulsate('ping', 0.8s); }
}

// Pulsate Variations (4 patterns)
.variant-heartbeat.is-animating { @include anim.pulsate('heartbeat', 1.5s); }
.variant-pulsate-bck.is-animating { @include anim.pulsate('pulsate-bck', 0.5s); }
.variant-pulsate-fwd.is-animating { @include anim.pulsate('pulsate-fwd', 0.5s); }
.variant-ping.is-animating { @include anim.pulsate('ping', 0.8s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-pulsate {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  border-radius: 16px;

  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #ef4444;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRollIn.vue
````vue
<template>
  <div class="ho-animista-roll-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Roll In Animations
    </h1>

    <p class="demo-description">
      4種類のロール入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RollInVariant = 'top' | 'right' | 'bottom' | 'left'

const allVariants: RollInVariant[] = [
  'top',
  'right',
  'bottom',
  'left',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RollInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.roll-in('top', 0.6s); }
  .demo-box.variant-right { @include anim.roll-in('right', 0.6s); }
  .demo-box.variant-bottom { @include anim.roll-in('bottom', 0.6s); }
  .demo-box.variant-left { @include anim.roll-in('left', 0.6s); }
}

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.roll-in('top', 0.6s); }
.variant-right.is-animating { @include anim.roll-in('right', 0.6s); }
.variant-bottom.is-animating { @include anim.roll-in('bottom', 0.6s); }
.variant-left.is-animating { @include anim.roll-in('left', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-roll-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f472b6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f472b6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRollInBlurred.vue
````vue
<template>
  <div class="ho-animista-roll-in-blurred">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Roll In Blurred Animations
    </h1>

    <p class="demo-description">
      4種類のブラーロール入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RollInBlurredVariant = 'top' | 'right' | 'bottom' | 'left'

const allVariants: RollInBlurredVariant[] = [
  'top',
  'right',
  'bottom',
  'left',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RollInBlurredVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.roll-in-blurred('top', 0.65s); }
  .demo-box.variant-right { @include anim.roll-in-blurred('right', 0.65s); }
  .demo-box.variant-bottom { @include anim.roll-in-blurred('bottom', 0.65s); }
  .demo-box.variant-left { @include anim.roll-in-blurred('left', 0.65s); }
}

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.roll-in-blurred('top', 0.65s); }
.variant-right.is-animating { @include anim.roll-in-blurred('right', 0.65s); }
.variant-bottom.is-animating { @include anim.roll-in-blurred('bottom', 0.65s); }
.variant-left.is-animating { @include anim.roll-in-blurred('left', 0.65s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-roll-in-blurred {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #fb923c;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #fb923c;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRollOut.vue
````vue
<template>
  <div class="ho-animista-roll-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Roll Out Animations
    </h1>

    <p class="demo-description">
      4種類のロール退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Directional Rolls (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RollOutVariant
  = | 'left'
    | 'top'
    | 'right'
    | 'bottom'

const allVariants: RollOutVariant[] = [
  'left',
  'top',
  'right',
  'bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RollOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-left { @include anim.roll-out('left', 0.6s); }
  .demo-box.variant-top { @include anim.roll-out('top', 0.6s); }
  .demo-box.variant-right { @include anim.roll-out('right', 0.6s); }
  .demo-box.variant-bottom { @include anim.roll-out('bottom', 0.6s); }
}

// Directional Rolls (4 patterns)
.variant-left.is-animating { @include anim.roll-out('left', 0.6s); }
.variant-top.is-animating { @include anim.roll-out('top', 0.6s); }
.variant-right.is-animating { @include anim.roll-out('right', 0.6s); }
.variant-bottom.is-animating { @include anim.roll-out('bottom', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-roll-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #a855f7;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #a855f7;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRollOutBlurred.vue
````vue
<template>
  <div class="ho-animista-roll-out-blurred">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Roll Out Blurred Animations
    </h1>

    <p class="demo-description">
      4種類のブラーロール退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Directional Blurred Rolls (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RollOutBlurredVariant
  = | 'left'
    | 'top'
    | 'right'
    | 'bottom'

const allVariants: RollOutBlurredVariant[] = [
  'left',
  'top',
  'right',
  'bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RollOutBlurredVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-left { @include anim.roll-out-blurred('left', 0.65s); }
  .demo-box.variant-top { @include anim.roll-out-blurred('top', 0.65s); }
  .demo-box.variant-right { @include anim.roll-out-blurred('right', 0.65s); }
  .demo-box.variant-bottom { @include anim.roll-out-blurred('bottom', 0.65s); }
}

// Directional Blurred Rolls (4 patterns)
.variant-left.is-animating { @include anim.roll-out-blurred('left', 0.65s); }
.variant-top.is-animating { @include anim.roll-out-blurred('top', 0.65s); }
.variant-right.is-animating { @include anim.roll-out-blurred('right', 0.65s); }
.variant-bottom.is-animating { @include anim.roll-out-blurred('bottom', 0.65s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-roll-out-blurred {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #6366f1;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #6366f1;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotate.vue
````vue
<template>
  <div class="ho-animista-rotate">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate Animations
    </h1>

    <p class="demo-description">
      21種類の回転アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-center', { 'is-animating': activeVariants.has('hor-center') }]">
                hor-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
                hor-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
                hor-bottom
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vert-center', { 'is-animating': activeVariants.has('vert-center') }]">
                vert-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vert-left', { 'is-animating': activeVariants.has('vert-left') }]">
                vert-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vert-right', { 'is-animating': activeVariants.has('vert-right') }]">
                vert-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal (6 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1', { 'is-animating': activeVariants.has('diagonal-1') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2', { 'is-animating': activeVariants.has('diagonal-2') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-tr', { 'is-animating': activeVariants.has('diagonal-tr') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-br', { 'is-animating': activeVariants.has('diagonal-br') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-bl', { 'is-animating': activeVariants.has('diagonal-bl') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-tl', { 'is-animating': activeVariants.has('diagonal-tl') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RotateVariant
  = 'center' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl'
    | 'hor-center' | 'hor-top' | 'hor-bottom'
    | 'vert-center' | 'vert-left' | 'vert-right'
    | 'diagonal-1' | 'diagonal-2' | 'diagonal-tr' | 'diagonal-br' | 'diagonal-bl' | 'diagonal-tl'

const allVariants: RotateVariant[] = [
  'center', 'top', 'tr', 'right', 'br', 'bottom', 'bl', 'left', 'tl',
  'hor-center', 'hor-top', 'hor-bottom',
  'vert-center', 'vert-left', 'vert-right',
  'diagonal-1', 'diagonal-2', 'diagonal-tr', 'diagonal-br', 'diagonal-bl', 'diagonal-tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.rotate('center', 0.4s); }
  .demo-box.variant-top { @include anim.rotate('top', 0.4s); }
  .demo-box.variant-tr { @include anim.rotate('tr', 0.4s); }
  .demo-box.variant-right { @include anim.rotate('right', 0.4s); }
  .demo-box.variant-br { @include anim.rotate('br', 0.4s); }
  .demo-box.variant-bottom { @include anim.rotate('bottom', 0.4s); }
  .demo-box.variant-bl { @include anim.rotate('bl', 0.4s); }
  .demo-box.variant-left { @include anim.rotate('left', 0.4s); }
  .demo-box.variant-tl { @include anim.rotate('tl', 0.4s); }
  .demo-box.variant-hor-center { @include anim.rotate('hor-center', 0.4s); }
  .demo-box.variant-hor-top { @include anim.rotate('hor-top', 0.4s); }
  .demo-box.variant-hor-bottom { @include anim.rotate('hor-bottom', 0.4s); }
  .demo-box.variant-vert-center { @include anim.rotate('vert-center', 0.4s); }
  .demo-box.variant-vert-left { @include anim.rotate('vert-left', 0.4s); }
  .demo-box.variant-vert-right { @include anim.rotate('vert-right', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1 { @include anim.rotate('diagonal-1', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2 { @include anim.rotate('diagonal-2', 0.4s); }
  .demo-box.flip-card.variant-diagonal-tr { @include anim.rotate('diagonal-tr', 0.4s); }
  .demo-box.flip-card.variant-diagonal-br { @include anim.rotate('diagonal-br', 0.4s); }
  .demo-box.flip-card.variant-diagonal-bl { @include anim.rotate('diagonal-bl', 0.4s); }
  .demo-box.flip-card.variant-diagonal-tl { @include anim.rotate('diagonal-tl', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
// Basic Directions (9 patterns)
.variant-center.is-animating { @include anim.rotate('center', 0.6s); }
.variant-top.is-animating { @include anim.rotate('top', 0.6s); }
.variant-tr.is-animating { @include anim.rotate('tr', 0.6s); }
.variant-right.is-animating { @include anim.rotate('right', 0.6s); }
.variant-br.is-animating { @include anim.rotate('br', 0.6s); }
.variant-bottom.is-animating { @include anim.rotate('bottom', 0.6s); }
.variant-bl.is-animating { @include anim.rotate('bl', 0.6s); }
.variant-left.is-animating { @include anim.rotate('left', 0.6s); }
.variant-tl.is-animating { @include anim.rotate('tl', 0.6s); }

// Horizontal (3 patterns)
.variant-hor-center.is-animating { @include anim.rotate('hor-center', 0.6s); }
.variant-hor-top.is-animating { @include anim.rotate('hor-top', 0.6s); }
.variant-hor-bottom.is-animating { @include anim.rotate('hor-bottom', 0.6s); }

// Vertical (3 patterns)
.variant-vert-center.is-animating { @include anim.rotate('vert-center', 0.6s); }
.variant-vert-left.is-animating { @include anim.rotate('vert-left', 0.6s); }
.variant-vert-right.is-animating { @include anim.rotate('vert-right', 0.6s); }

// Diagonal (6 patterns) - 3D Card Flip Effect
.variant-diagonal-1.is-animating { @include anim.rotate('diagonal-1', 0.6s); }
.variant-diagonal-2.is-animating { @include anim.rotate('diagonal-2', 0.6s); }
.variant-diagonal-tr.is-animating { @include anim.rotate('diagonal-tr', 0.6s); }
.variant-diagonal-br.is-animating { @include anim.rotate('diagonal-br', 0.6s); }
.variant-diagonal-bl.is-animating { @include anim.rotate('diagonal-bl', 0.6s); }
.variant-diagonal-tl.is-animating { @include anim.rotate('diagonal-tl', 0.6s); }

.flip-front {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.flip-back {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// 各diagonal回転に合わせた裏面の初期回転
.variant-diagonal-1 .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-diagonal-2 .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }
.variant-diagonal-tr .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-diagonal-br .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }
.variant-diagonal-bl .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-diagonal-tl .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }

// 3D Card Flip Container (Diagonal variants only)
.demo-box.flip-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

// Card Face Styles
.flip-face {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

// ============================================
// Demo Box Styles
// ============================================

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotate90.vue
````vue
<template>
  <div class="ho-animista-rotate-90">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate 90° Animations
    </h1>

    <p class="demo-description">
      22種類の90度回転アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center Rotation (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-cw', { 'is-animating': activeVariants.has('cw') }]">
                cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ccw', { 'is-animating': activeVariants.has('ccw') }]">
                ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Corner Rotation (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-cw', { 'is-animating': activeVariants.has('tr-cw') }]">
                tr-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-ccw', { 'is-animating': activeVariants.has('tr-ccw') }]">
                tr-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-cw', { 'is-animating': activeVariants.has('br-cw') }]">
                br-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-ccw', { 'is-animating': activeVariants.has('br-ccw') }]">
                br-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-cw', { 'is-animating': activeVariants.has('bl-cw') }]">
                bl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-ccw', { 'is-animating': activeVariants.has('bl-ccw') }]">
                bl-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-cw', { 'is-animating': activeVariants.has('tl-cw') }]">
                tl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-ccw', { 'is-animating': activeVariants.has('tl-ccw') }]">
                tl-ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Edge Rotation (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-cw', { 'is-animating': activeVariants.has('top-cw') }]">
                top-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-ccw', { 'is-animating': activeVariants.has('top-ccw') }]">
                top-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-cw', { 'is-animating': activeVariants.has('right-cw') }]">
                right-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-ccw', { 'is-animating': activeVariants.has('right-ccw') }]">
                right-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-cw', { 'is-animating': activeVariants.has('bottom-cw') }]">
                bottom-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-ccw', { 'is-animating': activeVariants.has('bottom-ccw') }]">
                bottom-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-cw', { 'is-animating': activeVariants.has('left-cw') }]">
                left-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-ccw', { 'is-animating': activeVariants.has('left-ccw') }]">
                left-ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          3D Rotation (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-horizontal-fwd', { 'is-animating': activeVariants.has('horizontal-fwd') }]">
                <div class="cube-face cube-front">
                  hor-fwd
                </div>
                <div class="cube-face cube-back">
                  hor-fwd
                </div>
                <div class="cube-face cube-right">
                  hor-fwd
                </div>
                <div class="cube-face cube-left">
                  hor-fwd
                </div>
                <div class="cube-face cube-top">
                  hor-fwd
                </div>
                <div class="cube-face cube-bottom">
                  hor-fwd
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-horizontal-bck', { 'is-animating': activeVariants.has('horizontal-bck') }]">
                <div class="cube-face cube-front">
                  hor-bck
                </div>
                <div class="cube-face cube-back">
                  hor-bck
                </div>
                <div class="cube-face cube-right">
                  hor-bck
                </div>
                <div class="cube-face cube-left">
                  hor-bck
                </div>
                <div class="cube-face cube-top">
                  hor-bck
                </div>
                <div class="cube-face cube-bottom">
                  hor-bck
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-vertical-fwd', { 'is-animating': activeVariants.has('vertical-fwd') }]">
                <div class="cube-face cube-front">
                  ver-fwd
                </div>
                <div class="cube-face cube-back">
                  ver-fwd
                </div>
                <div class="cube-face cube-right">
                  ver-fwd
                </div>
                <div class="cube-face cube-left">
                  ver-fwd
                </div>
                <div class="cube-face cube-top">
                  ver-fwd
                </div>
                <div class="cube-face cube-bottom">
                  ver-fwd
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-vertical-bck', { 'is-animating': activeVariants.has('vertical-bck') }]">
                <div class="cube-face cube-front">
                  ver-bck
                </div>
                <div class="cube-face cube-back">
                  ver-bck
                </div>
                <div class="cube-face cube-right">
                  ver-bck
                </div>
                <div class="cube-face cube-left">
                  ver-bck
                </div>
                <div class="cube-face cube-top">
                  ver-bck
                </div>
                <div class="cube-face cube-bottom">
                  ver-bck
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type Rotate90Variant
  = 'cw' | 'ccw'
    | 'tr-cw' | 'tr-ccw' | 'br-cw' | 'br-ccw' | 'bl-cw' | 'bl-ccw' | 'tl-cw' | 'tl-ccw'
    | 'top-cw' | 'top-ccw' | 'right-cw' | 'right-ccw' | 'bottom-cw' | 'bottom-ccw' | 'left-cw' | 'left-ccw'
    | 'horizontal-fwd' | 'horizontal-bck' | 'vertical-fwd' | 'vertical-bck'

const allVariants: Rotate90Variant[] = [
  'cw', 'ccw',
  'tr-cw', 'tr-ccw', 'br-cw', 'br-ccw', 'bl-cw', 'bl-ccw', 'tl-cw', 'tl-ccw',
  'top-cw', 'top-ccw', 'right-cw', 'right-ccw', 'bottom-cw', 'bottom-ccw', 'left-cw', 'left-ccw',
  'horizontal-fwd', 'horizontal-bck', 'vertical-fwd', 'vertical-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<Rotate90Variant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-cw { @include anim.rotate-90('cw', 0.4s); }
  .demo-box.variant-ccw { @include anim.rotate-90('ccw', 0.4s); }
  .demo-box.variant-tr-cw { @include anim.rotate-90('tr-cw', 0.4s); }
  .demo-box.variant-tr-ccw { @include anim.rotate-90('tr-ccw', 0.4s); }
  .demo-box.variant-br-cw { @include anim.rotate-90('br-cw', 0.4s); }
  .demo-box.variant-br-ccw { @include anim.rotate-90('br-ccw', 0.4s); }
  .demo-box.variant-bl-cw { @include anim.rotate-90('bl-cw', 0.4s); }
  .demo-box.variant-bl-ccw { @include anim.rotate-90('bl-ccw', 0.4s); }
  .demo-box.variant-tl-cw { @include anim.rotate-90('tl-cw', 0.4s); }
  .demo-box.variant-tl-ccw { @include anim.rotate-90('tl-ccw', 0.4s); }
  .demo-box.variant-top-cw { @include anim.rotate-90('top-cw', 0.4s); }
  .demo-box.variant-top-ccw { @include anim.rotate-90('top-ccw', 0.4s); }
  .demo-box.variant-right-cw { @include anim.rotate-90('right-cw', 0.4s); }
  .demo-box.variant-right-ccw { @include anim.rotate-90('right-ccw', 0.4s); }
  .demo-box.variant-bottom-cw { @include anim.rotate-90('bottom-cw', 0.4s); }
  .demo-box.variant-bottom-ccw { @include anim.rotate-90('bottom-ccw', 0.4s); }
  .demo-box.variant-left-cw { @include anim.rotate-90('left-cw', 0.4s); }
  .demo-box.variant-left-ccw { @include anim.rotate-90('left-ccw', 0.4s); }
  .demo-box.cube-3d.variant-horizontal-fwd { @include anim.rotate-90('horizontal-fwd', 0.4s); }
  .demo-box.cube-3d.variant-horizontal-bck { @include anim.rotate-90('horizontal-bck', 0.4s); }
  .demo-box.cube-3d.variant-vertical-fwd { @include anim.rotate-90('vertical-fwd', 0.4s); }
  .demo-box.cube-3d.variant-vertical-bck { @include anim.rotate-90('vertical-bck', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
// Center Rotation (2 patterns)
.variant-cw.is-animating { @include anim.rotate-90('cw', 0.4s); }
.variant-ccw.is-animating { @include anim.rotate-90('ccw', 0.4s); }

// Corner Rotation (8 patterns)
.variant-tr-cw.is-animating { @include anim.rotate-90('tr-cw', 0.4s); }
.variant-tr-ccw.is-animating { @include anim.rotate-90('tr-ccw', 0.4s); }
.variant-br-cw.is-animating { @include anim.rotate-90('br-cw', 0.4s); }
.variant-br-ccw.is-animating { @include anim.rotate-90('br-ccw', 0.4s); }
.variant-bl-cw.is-animating { @include anim.rotate-90('bl-cw', 0.4s); }
.variant-bl-ccw.is-animating { @include anim.rotate-90('bl-ccw', 0.4s); }
.variant-tl-cw.is-animating { @include anim.rotate-90('tl-cw', 0.4s); }
.variant-tl-ccw.is-animating { @include anim.rotate-90('tl-ccw', 0.4s); }

// Edge Rotation (8 patterns)
.variant-top-cw.is-animating { @include anim.rotate-90('top-cw', 0.4s); }
.variant-top-ccw.is-animating { @include anim.rotate-90('top-ccw', 0.4s); }
.variant-right-cw.is-animating { @include anim.rotate-90('right-cw', 0.4s); }
.variant-right-ccw.is-animating { @include anim.rotate-90('right-ccw', 0.4s); }
.variant-bottom-cw.is-animating { @include anim.rotate-90('bottom-cw', 0.4s); }
.variant-bottom-ccw.is-animating { @include anim.rotate-90('bottom-ccw', 0.4s); }
.variant-left-cw.is-animating { @include anim.rotate-90('left-cw', 0.4s); }
.variant-left-ccw.is-animating { @include anim.rotate-90('left-ccw', 0.4s); }

// 3D Rotation (4 patterns) - 3D Cube Effect
.variant-horizontal-fwd.is-animating { @include anim.rotate-90('horizontal-fwd', 0.4s); }
.variant-horizontal-bck.is-animating { @include anim.rotate-90('horizontal-bck', 0.4s); }
.variant-vertical-fwd.is-animating { @include anim.rotate-90('vertical-fwd', 0.4s); }
.variant-vertical-bck.is-animating { @include anim.rotate-90('vertical-bck', 0.4s); }

// 3D Cube Container
.demo-box.cube-3d {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

// Cube Face Styles
.cube-face {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  backface-visibility: visible;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// Cube Face Positioning & Colors (3D space)
.cube-front {
  transform: translateZ(50px);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.cube-back {
  transform: translateZ(-50px) rotateY(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
}

.cube-right {
  transform: rotateY(90deg) translateZ(50px);
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.cube-left {
  transform: rotateY(-90deg) translateZ(50px);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
}

.cube-top {
  transform: rotateX(90deg) translateZ(50px);
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
}

.cube-bottom {
  transform: rotateX(-90deg) translateZ(50px);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-90 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotateIn.vue
````vue
<template>
  <div class="ho-animista-rotate-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate In Animations
    </h1>

    <p class="demo-description">
      13種類の回転入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center (1 pattern)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Axis Variations (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor', { 'is-animating': activeVariants.has('hor') }]">
                hor
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver', { 'is-animating': activeVariants.has('ver') }]">
                ver
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1', { 'is-animating': activeVariants.has('diag-1') }]">
                diag-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2', { 'is-animating': activeVariants.has('diag-2') }]">
                diag-2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RotateInVariant = 'center' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl' | 'hor' | 'ver' | 'diag-1' | 'diag-2'

const allVariants: RotateInVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
  'hor',
  'ver',
  'diag-1',
  'diag-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.rotate-in('center', 0.6s); }
  .demo-box.variant-top { @include anim.rotate-in('top', 0.6s); }
  .demo-box.variant-right { @include anim.rotate-in('right', 0.6s); }
  .demo-box.variant-bottom { @include anim.rotate-in('bottom', 0.6s); }
  .demo-box.variant-left { @include anim.rotate-in('left', 0.6s); }
  .demo-box.variant-tr { @include anim.rotate-in('tr', 0.6s); }
  .demo-box.variant-br { @include anim.rotate-in('br', 0.6s); }
  .demo-box.variant-bl { @include anim.rotate-in('bl', 0.6s); }
  .demo-box.variant-tl { @include anim.rotate-in('tl', 0.6s); }
  .demo-box.variant-hor { @include anim.rotate-in('hor', 0.6s); }
  .demo-box.variant-ver { @include anim.rotate-in('ver', 0.6s); }
  .demo-box.variant-diag-1 { @include anim.rotate-in('diag-1', 0.6s); }
  .demo-box.variant-diag-2 { @include anim.rotate-in('diag-2', 0.6s); }
}

// Center (1 pattern)
.variant-center.is-animating { @include anim.rotate-in('center', 0.6s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.rotate-in('top', 0.6s); }
.variant-right.is-animating { @include anim.rotate-in('right', 0.6s); }
.variant-bottom.is-animating { @include anim.rotate-in('bottom', 0.6s); }
.variant-left.is-animating { @include anim.rotate-in('left', 0.6s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.rotate-in('tr', 0.6s); }
.variant-br.is-animating { @include anim.rotate-in('br', 0.6s); }
.variant-bl.is-animating { @include anim.rotate-in('bl', 0.6s); }
.variant-tl.is-animating { @include anim.rotate-in('tl', 0.6s); }

// Axis Variations (4 patterns)
.variant-hor.is-animating { @include anim.rotate-in('hor', 0.6s); }
.variant-ver.is-animating { @include anim.rotate-in('ver', 0.6s); }
.variant-diag-1.is-animating { @include anim.rotate-in('diag-1', 0.6s); }
.variant-diag-2.is-animating { @include anim.rotate-in('diag-2', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #60a5fa;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #60a5fa;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotateIn2.vue
````vue
<template>
  <div class="ho-animista-rotate-in-2">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate In 2 Animations
    </h1>

    <p class="demo-description">
      14種類の回転＋Z軸移動入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Rotation (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-cw', { 'is-animating': activeVariants.has('cw') }]">
                cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ccw', { 'is-animating': activeVariants.has('ccw') }]">
                ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Forward/Backward (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd-cw', { 'is-animating': activeVariants.has('fwd-cw') }]">
                fwd-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd-ccw', { 'is-animating': activeVariants.has('fwd-ccw') }]">
                fwd-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck-cw', { 'is-animating': activeVariants.has('bck-cw') }]">
                bck-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck-ccw', { 'is-animating': activeVariants.has('bck-ccw') }]">
                bck-ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Corners (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-cw', { 'is-animating': activeVariants.has('tr-cw') }]">
                tr-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-ccw', { 'is-animating': activeVariants.has('tr-ccw') }]">
                tr-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-cw', { 'is-animating': activeVariants.has('br-cw') }]">
                br-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-ccw', { 'is-animating': activeVariants.has('br-ccw') }]">
                br-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-cw', { 'is-animating': activeVariants.has('bl-cw') }]">
                bl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-ccw', { 'is-animating': activeVariants.has('bl-ccw') }]">
                bl-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-cw', { 'is-animating': activeVariants.has('tl-cw') }]">
                tl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-ccw', { 'is-animating': activeVariants.has('tl-ccw') }]">
                tl-ccw
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RotateIn2Variant = 'cw' | 'ccw' | 'fwd-cw' | 'fwd-ccw' | 'bck-cw' | 'bck-ccw' | 'tr-cw' | 'tr-ccw' | 'br-cw' | 'br-ccw' | 'bl-cw' | 'bl-ccw' | 'tl-cw' | 'tl-ccw'

const allVariants: RotateIn2Variant[] = [
  'cw',
  'ccw',
  'fwd-cw',
  'fwd-ccw',
  'bck-cw',
  'bck-ccw',
  'tr-cw',
  'tr-ccw',
  'br-cw',
  'br-ccw',
  'bl-cw',
  'bl-ccw',
  'tl-cw',
  'tl-ccw',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateIn2Variant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-cw { @include anim.rotate-in-2('cw', 0.6s); }
  .demo-box.variant-ccw { @include anim.rotate-in-2('ccw', 0.6s); }
  .demo-box.variant-fwd-cw { @include anim.rotate-in-2('fwd-cw', 0.6s); }
  .demo-box.variant-fwd-ccw { @include anim.rotate-in-2('fwd-ccw', 0.6s); }
  .demo-box.variant-bck-cw { @include anim.rotate-in-2('bck-cw', 0.6s); }
  .demo-box.variant-bck-ccw { @include anim.rotate-in-2('bck-ccw', 0.6s); }
  .demo-box.variant-tr-cw { @include anim.rotate-in-2('tr-cw', 0.6s); }
  .demo-box.variant-tr-ccw { @include anim.rotate-in-2('tr-ccw', 0.6s); }
  .demo-box.variant-br-cw { @include anim.rotate-in-2('br-cw', 0.6s); }
  .demo-box.variant-br-ccw { @include anim.rotate-in-2('br-ccw', 0.6s); }
  .demo-box.variant-bl-cw { @include anim.rotate-in-2('bl-cw', 0.6s); }
  .demo-box.variant-bl-ccw { @include anim.rotate-in-2('bl-ccw', 0.6s); }
  .demo-box.variant-tl-cw { @include anim.rotate-in-2('tl-cw', 0.6s); }
  .demo-box.variant-tl-ccw { @include anim.rotate-in-2('tl-ccw', 0.6s); }
}

// Basic Rotation (2 patterns)
.variant-cw.is-animating { @include anim.rotate-in-2('cw', 0.6s); }
.variant-ccw.is-animating { @include anim.rotate-in-2('ccw', 0.6s); }

// Forward/Backward (4 patterns)
.variant-fwd-cw.is-animating { @include anim.rotate-in-2('fwd-cw', 0.6s); }
.variant-fwd-ccw.is-animating { @include anim.rotate-in-2('fwd-ccw', 0.6s); }
.variant-bck-cw.is-animating { @include anim.rotate-in-2('bck-cw', 0.6s); }
.variant-bck-ccw.is-animating { @include anim.rotate-in-2('bck-ccw', 0.6s); }

// Diagonal Corners (8 patterns)
.variant-tr-cw.is-animating { @include anim.rotate-in-2('tr-cw', 0.6s); }
.variant-tr-ccw.is-animating { @include anim.rotate-in-2('tr-ccw', 0.6s); }
.variant-br-cw.is-animating { @include anim.rotate-in-2('br-cw', 0.6s); }
.variant-br-ccw.is-animating { @include anim.rotate-in-2('br-ccw', 0.6s); }
.variant-bl-cw.is-animating { @include anim.rotate-in-2('bl-cw', 0.6s); }
.variant-bl-ccw.is-animating { @include anim.rotate-in-2('bl-ccw', 0.6s); }
.variant-tl-cw.is-animating { @include anim.rotate-in-2('tl-cw', 0.6s); }
.variant-tl-ccw.is-animating { @include anim.rotate-in-2('tl-ccw', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-in-2 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f59e0b;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f59e0b;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotateOut.vue
````vue
<template>
  <div class="ho-animista-rotate-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate Out Animations
    </h1>

    <p class="demo-description">
      13種類の回転退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic & Directional (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          3D Rotations (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor', { 'is-animating': activeVariants.has('hor') }]">
                hor
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver', { 'is-animating': activeVariants.has('ver') }]">
                ver
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1', { 'is-animating': activeVariants.has('diag-1') }]">
                diag-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2', { 'is-animating': activeVariants.has('diag-2') }]">
                diag-2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RotateOutVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'hor'
    | 'ver'
    | 'diag-1'
    | 'diag-2'

const allVariants: RotateOutVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
  'hor',
  'ver',
  'diag-1',
  'diag-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.rotate-out('center', 0.6s); }
  .demo-box.variant-top { @include anim.rotate-out('top', 0.6s); }
  .demo-box.variant-tr { @include anim.rotate-out('tr', 0.6s); }
  .demo-box.variant-right { @include anim.rotate-out('right', 0.6s); }
  .demo-box.variant-br { @include anim.rotate-out('br', 0.6s); }
  .demo-box.variant-bottom { @include anim.rotate-out('bottom', 0.6s); }
  .demo-box.variant-bl { @include anim.rotate-out('bl', 0.6s); }
  .demo-box.variant-left { @include anim.rotate-out('left', 0.6s); }
  .demo-box.variant-tl { @include anim.rotate-out('tl', 0.6s); }
  .demo-box.variant-hor { @include anim.rotate-out('hor', 0.5s); }
  .demo-box.variant-ver { @include anim.rotate-out('ver', 0.5s); }
  .demo-box.variant-diag-1 { @include anim.rotate-out('diag-1', 0.5s); }
  .demo-box.variant-diag-2 { @include anim.rotate-out('diag-2', 0.5s); }
}

// Basic & Directional (9 patterns)
.variant-center.is-animating { @include anim.rotate-out('center', 0.6s); }
.variant-top.is-animating { @include anim.rotate-out('top', 0.6s); }
.variant-tr.is-animating { @include anim.rotate-out('tr', 0.6s); }
.variant-right.is-animating { @include anim.rotate-out('right', 0.6s); }
.variant-br.is-animating { @include anim.rotate-out('br', 0.6s); }
.variant-bottom.is-animating { @include anim.rotate-out('bottom', 0.6s); }
.variant-bl.is-animating { @include anim.rotate-out('bl', 0.6s); }
.variant-left.is-animating { @include anim.rotate-out('left', 0.6s); }
.variant-tl.is-animating { @include anim.rotate-out('tl', 0.6s); }

// 3D Rotations (4 patterns)
.variant-hor.is-animating { @include anim.rotate-out('hor', 0.5s); }
.variant-ver.is-animating { @include anim.rotate-out('ver', 0.5s); }
.variant-diag-1.is-animating { @include anim.rotate-out('diag-1', 0.5s); }
.variant-diag-2.is-animating { @include anim.rotate-out('diag-2', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #ec4899;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #ec4899;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotateOut2.vue
````vue
<template>
  <div class="ho-animista-rotate-out-2">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate Out 2 Animations
    </h1>

    <p class="demo-description">
      12種類の45度回転退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-cw', { 'is-animating': activeVariants.has('cw') }]">
                cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ccw', { 'is-animating': activeVariants.has('ccw') }]">
                ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Corner Rotations (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-cw', { 'is-animating': activeVariants.has('tr-cw') }]">
                tr-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-ccw', { 'is-animating': activeVariants.has('tr-ccw') }]">
                tr-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-cw', { 'is-animating': activeVariants.has('br-cw') }]">
                br-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-ccw', { 'is-animating': activeVariants.has('br-ccw') }]">
                br-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-cw', { 'is-animating': activeVariants.has('bl-cw') }]">
                bl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-ccw', { 'is-animating': activeVariants.has('bl-ccw') }]">
                bl-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-cw', { 'is-animating': activeVariants.has('tl-cw') }]">
                tl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-ccw', { 'is-animating': activeVariants.has('tl-ccw') }]">
                tl-ccw
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RotateOut2Variant
  = | 'cw'
    | 'ccw'
    | 'bck'
    | 'fwd'
    | 'tr-cw'
    | 'tr-ccw'
    | 'br-cw'
    | 'br-ccw'
    | 'bl-cw'
    | 'bl-ccw'
    | 'tl-cw'
    | 'tl-ccw'

const allVariants: RotateOut2Variant[] = [
  'cw',
  'ccw',
  'bck',
  'fwd',
  'tr-cw',
  'tr-ccw',
  'br-cw',
  'br-ccw',
  'bl-cw',
  'bl-ccw',
  'tl-cw',
  'tl-ccw',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateOut2Variant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-cw { @include anim.rotate-out-2('cw', 0.6s); }
  .demo-box.variant-ccw { @include anim.rotate-out-2('ccw', 0.6s); }
  .demo-box.variant-bck { @include anim.rotate-out-2('bck-cw', 0.5s); }
  .demo-box.variant-fwd { @include anim.rotate-out-2('fwd-cw', 0.5s); }
  .demo-box.variant-tr-cw { @include anim.rotate-out-2('tr-cw', 0.6s); }
  .demo-box.variant-tr-ccw { @include anim.rotate-out-2('tr-ccw', 0.6s); }
  .demo-box.variant-br-cw { @include anim.rotate-out-2('br-cw', 0.6s); }
  .demo-box.variant-br-ccw { @include anim.rotate-out-2('br-ccw', 0.6s); }
  .demo-box.variant-bl-cw { @include anim.rotate-out-2('bl-cw', 0.6s); }
  .demo-box.variant-bl-ccw { @include anim.rotate-out-2('bl-ccw', 0.6s); }
  .demo-box.variant-tl-cw { @include anim.rotate-out-2('tl-cw', 0.6s); }
  .demo-box.variant-tl-ccw { @include anim.rotate-out-2('tl-ccw', 0.6s); }
}

// Basic (4 patterns)
.variant-cw.is-animating { @include anim.rotate-out-2('cw', 0.6s); }
.variant-ccw.is-animating { @include anim.rotate-out-2('ccw', 0.6s); }
.variant-bck.is-animating { @include anim.rotate-out-2('bck-cw', 0.5s); }
.variant-fwd.is-animating { @include anim.rotate-out-2('fwd-cw', 0.5s); }

// Corner Rotations (8 patterns)
.variant-tr-cw.is-animating { @include anim.rotate-out-2('tr-cw', 0.6s); }
.variant-tr-ccw.is-animating { @include anim.rotate-out-2('tr-ccw', 0.6s); }
.variant-br-cw.is-animating { @include anim.rotate-out-2('br-cw', 0.6s); }
.variant-br-ccw.is-animating { @include anim.rotate-out-2('br-ccw', 0.6s); }
.variant-bl-cw.is-animating { @include anim.rotate-out-2('bl-cw', 0.6s); }
.variant-bl-ccw.is-animating { @include anim.rotate-out-2('bl-ccw', 0.6s); }
.variant-tl-cw.is-animating { @include anim.rotate-out-2('tl-cw', 0.6s); }
.variant-tl-ccw.is-animating { @include anim.rotate-out-2('tl-ccw', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-out-2 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #8b5cf6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #8b5cf6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotateScale.vue
````vue
<template>
  <div class="ho-animista-rotate-scale">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate Scale Animations
    </h1>

    <p class="demo-description">
      10種類の回転＋スケールアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-up', { 'is-animating': activeVariants.has('up') }]">
                up
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-down', { 'is-animating': activeVariants.has('down') }]">
                down
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-up-hor', { 'is-animating': activeVariants.has('up-hor') }]">
                up-hor
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-down-hor', { 'is-animating': activeVariants.has('down-hor') }]">
                down-hor
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-up-ver', { 'is-animating': activeVariants.has('up-ver') }]">
                up-ver
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-down-ver', { 'is-animating': activeVariants.has('down-ver') }]">
                down-ver
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal (4 patterns) - 3D Card Flip Effect
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-diag-1', { 'is-animating': activeVariants.has('up-diag-1') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-diag-1', { 'is-animating': activeVariants.has('down-diag-1') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-diag-2', { 'is-animating': activeVariants.has('up-diag-2') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-diag-2', { 'is-animating': activeVariants.has('down-diag-2') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type RotateScaleVariant
  = 'up' | 'down'
    | 'up-hor' | 'down-hor'
    | 'up-ver' | 'down-ver'
    | 'up-diag-1' | 'down-diag-1' | 'up-diag-2' | 'down-diag-2'

const allVariants: RotateScaleVariant[] = [
  'up', 'down',
  'up-hor', 'down-hor',
  'up-ver', 'down-ver',
  'up-diag-1', 'down-diag-1', 'up-diag-2', 'down-diag-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateScaleVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-up { @include anim.rotate-scale('up', 0.4s); }
  .demo-box.variant-down { @include anim.rotate-scale('down', 0.4s); }
  .demo-box.variant-up-hor { @include anim.rotate-scale('up-hor', 0.4s); }
  .demo-box.variant-down-hor { @include anim.rotate-scale('down-hor', 0.4s); }
  .demo-box.variant-up-ver { @include anim.rotate-scale('up-ver', 0.4s); }
  .demo-box.variant-down-ver { @include anim.rotate-scale('down-ver', 0.4s); }
  .demo-box.flip-card.variant-up-diag-1 { @include anim.rotate-scale('up-diag-1', 0.4s); }
  .demo-box.flip-card.variant-down-diag-1 { @include anim.rotate-scale('down-diag-1', 0.4s); }
  .demo-box.flip-card.variant-up-diag-2 { @include anim.rotate-scale('up-diag-2', 0.4s); }
  .demo-box.flip-card.variant-down-diag-2 { @include anim.rotate-scale('down-diag-2', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
// Basic (2 patterns)
.variant-up.is-animating { @include anim.rotate-scale('up', 0.65s); }
.variant-down.is-animating { @include anim.rotate-scale('down', 0.65s); }

// Horizontal (2 patterns)
.variant-up-hor.is-animating { @include anim.rotate-scale('up-hor', 0.65s); }
.variant-down-hor.is-animating { @include anim.rotate-scale('down-hor', 0.65s); }

// Vertical (2 patterns)
.variant-up-ver.is-animating { @include anim.rotate-scale('up-ver', 0.65s); }
.variant-down-ver.is-animating { @include anim.rotate-scale('down-ver', 0.65s); }

// Diagonal (4 patterns) - 3D Card Flip Effect
.variant-up-diag-1.is-animating { @include anim.rotate-scale('up-diag-1', 0.65s); }
.variant-down-diag-1.is-animating { @include anim.rotate-scale('down-diag-1', 0.65s); }
.variant-up-diag-2.is-animating { @include anim.rotate-scale('up-diag-2', 0.65s); }
.variant-down-diag-2.is-animating { @include anim.rotate-scale('down-diag-2', 0.65s); }

// 3D Card Flip Container (Diagonal variants only)
.demo-box.flip-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

// Card Face Styles
.flip-face {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

.flip-front {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.flip-back {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// 各diagonal回転に合わせた裏面の初期回転
.variant-up-diag-1 .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-down-diag-1 .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-up-diag-2 .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }
.variant-down-diag-2 .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-scale {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaScaleDown.vue
````vue
<template>
  <div class="ho-animista-scale-down">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Scale Down Animations
    </h1>

    <p class="demo-description">
      15種類のスケールダウンアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <!-- Basic Directions -->
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Horizontal Scaling -->
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Scaling (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-center', { 'is-animating': activeVariants.has('hor-center') }]">
                hor-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-left', { 'is-animating': activeVariants.has('hor-left') }]">
                hor-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-right', { 'is-animating': activeVariants.has('hor-right') }]">
                hor-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Scaling -->
      <div class="animation-section">
        <h2 class="section-title">
          Vertical Scaling (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-center', { 'is-animating': activeVariants.has('ver-center') }]">
                ver-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-top', { 'is-animating': activeVariants.has('ver-top') }]">
                ver-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-bottom', { 'is-animating': activeVariants.has('ver-bottom') }]">
                ver-bottom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ScaleDownVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'hor-center'
    | 'hor-left'
    | 'hor-right'
    | 'ver-center'
    | 'ver-top'
    | 'ver-bottom'

const allVariants: ScaleDownVariant[] = [
  'center', 'top', 'tr', 'right', 'br', 'bottom', 'bl', 'left', 'tl',
  'hor-center', 'hor-left', 'hor-right',
  'ver-center', 'ver-top', 'ver-bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ScaleDownVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.scale-down('center', 0.4s); }
  .demo-box.variant-top { @include anim.scale-down('top', 0.4s); }
  .demo-box.variant-tr { @include anim.scale-down('tr', 0.4s); }
  .demo-box.variant-right { @include anim.scale-down('right', 0.4s); }
  .demo-box.variant-br { @include anim.scale-down('br', 0.4s); }
  .demo-box.variant-bottom { @include anim.scale-down('bottom', 0.4s); }
  .demo-box.variant-bl { @include anim.scale-down('bl', 0.4s); }
  .demo-box.variant-left { @include anim.scale-down('left', 0.4s); }
  .demo-box.variant-tl { @include anim.scale-down('tl', 0.4s); }
  .demo-box.variant-hor-center { @include anim.scale-down('hor-center', 0.4s); }
  .demo-box.variant-hor-left { @include anim.scale-down('hor-left', 0.4s); }
  .demo-box.variant-hor-right { @include anim.scale-down('hor-right', 0.4s); }
  .demo-box.variant-ver-center { @include anim.scale-down('ver-center', 0.4s); }
  .demo-box.variant-ver-top { @include anim.scale-down('ver-top', 0.4s); }
  .demo-box.variant-ver-bottom { @include anim.scale-down('ver-bottom', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
.variant-center.is-animating { @include anim.scale-down('center', 0.5s); }
.variant-top.is-animating { @include anim.scale-down('top', 0.5s); }
.variant-tr.is-animating { @include anim.scale-down('tr', 0.5s); }
.variant-right.is-animating { @include anim.scale-down('right', 0.5s); }
.variant-br.is-animating { @include anim.scale-down('br', 0.5s); }
.variant-bottom.is-animating { @include anim.scale-down('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.scale-down('bl', 0.5s); }
.variant-left.is-animating { @include anim.scale-down('left', 0.5s); }
.variant-tl.is-animating { @include anim.scale-down('tl', 0.5s); }
.variant-hor-center.is-animating { @include anim.scale-down('hor-center', 0.5s); }
.variant-hor-left.is-animating { @include anim.scale-down('hor-left', 0.5s); }
.variant-hor-right.is-animating { @include anim.scale-down('hor-right', 0.5s); }
.variant-ver-center.is-animating { @include anim.scale-down('ver-center', 0.5s); }
.variant-ver-top.is-animating { @include anim.scale-down('ver-top', 0.5s); }
.variant-ver-bottom.is-animating { @include anim.scale-down('ver-bottom', 0.5s); }

.ho-animista-scale-down {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaScaleIn.vue
````vue
<template>
  <div class="ho-animista-scale-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Scale In Animations
    </h1>

    <p class="demo-description">
      15種類のスケール入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center (1 pattern)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Variations (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-center', { 'is-animating': activeVariants.has('hor-center') }]">
                hor-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-left', { 'is-animating': activeVariants.has('hor-left') }]">
                hor-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-right', { 'is-animating': activeVariants.has('hor-right') }]">
                hor-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical Variations (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-center', { 'is-animating': activeVariants.has('ver-center') }]">
                ver-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-top', { 'is-animating': activeVariants.has('ver-top') }]">
                ver-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-bottom', { 'is-animating': activeVariants.has('ver-bottom') }]">
                ver-bottom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ScaleInVariant = 'center' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl' | 'hor-center' | 'hor-left' | 'hor-right' | 'ver-center' | 'ver-top' | 'ver-bottom'

const allVariants: ScaleInVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
  'hor-center',
  'hor-left',
  'hor-right',
  'ver-center',
  'ver-top',
  'ver-bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ScaleInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.scale-in('center', 0.5s); }
  .demo-box.variant-top { @include anim.scale-in('top', 0.5s); }
  .demo-box.variant-right { @include anim.scale-in('right', 0.5s); }
  .demo-box.variant-bottom { @include anim.scale-in('bottom', 0.5s); }
  .demo-box.variant-left { @include anim.scale-in('left', 0.5s); }
  .demo-box.variant-tr { @include anim.scale-in('tr', 0.5s); }
  .demo-box.variant-br { @include anim.scale-in('br', 0.5s); }
  .demo-box.variant-bl { @include anim.scale-in('bl', 0.5s); }
  .demo-box.variant-tl { @include anim.scale-in('tl', 0.5s); }
  .demo-box.variant-hor-center { @include anim.scale-in('hor-center', 0.5s); }
  .demo-box.variant-hor-left { @include anim.scale-in('hor-left', 0.5s); }
  .demo-box.variant-hor-right { @include anim.scale-in('hor-right', 0.5s); }
  .demo-box.variant-ver-center { @include anim.scale-in('ver-center', 0.5s); }
  .demo-box.variant-ver-top { @include anim.scale-in('ver-top', 0.5s); }
  .demo-box.variant-ver-bottom { @include anim.scale-in('ver-bottom', 0.5s); }
}

// Center (1 pattern)
.variant-center.is-animating { @include anim.scale-in('center', 0.5s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.scale-in('top', 0.5s); }
.variant-right.is-animating { @include anim.scale-in('right', 0.5s); }
.variant-bottom.is-animating { @include anim.scale-in('bottom', 0.5s); }
.variant-left.is-animating { @include anim.scale-in('left', 0.5s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.scale-in('tr', 0.5s); }
.variant-br.is-animating { @include anim.scale-in('br', 0.5s); }
.variant-bl.is-animating { @include anim.scale-in('bl', 0.5s); }
.variant-tl.is-animating { @include anim.scale-in('tl', 0.5s); }

// Horizontal Variations (3 patterns)
.variant-hor-center.is-animating { @include anim.scale-in('hor-center', 0.5s); }
.variant-hor-left.is-animating { @include anim.scale-in('hor-left', 0.5s); }
.variant-hor-right.is-animating { @include anim.scale-in('hor-right', 0.5s); }

// Vertical Variations (3 patterns)
.variant-ver-center.is-animating { @include anim.scale-in('ver-center', 0.5s); }
.variant-ver-top.is-animating { @include anim.scale-in('ver-top', 0.5s); }
.variant-ver-bottom.is-animating { @include anim.scale-in('ver-bottom', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-scale-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #34d399;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #34d399;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaScaleOut.vue
````vue
<template>
  <div class="ho-animista-scale-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Scale Out Animations
    </h1>

    <p class="demo-description">
      15種類のスケール退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic & Directional (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-horizontal', { 'is-animating': activeVariants.has('horizontal') }]">
                horizontal
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-left', { 'is-animating': activeVariants.has('hor-left') }]">
                hor-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-right', { 'is-animating': activeVariants.has('hor-right') }]">
                hor-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vertical', { 'is-animating': activeVariants.has('vertical') }]">
                vertical
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-top', { 'is-animating': activeVariants.has('ver-top') }]">
                ver-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-bottom', { 'is-animating': activeVariants.has('ver-bottom') }]">
                ver-bottom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ScaleOutVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'horizontal'
    | 'hor-left'
    | 'hor-right'
    | 'vertical'
    | 'ver-top'
    | 'ver-bottom'

const allVariants: ScaleOutVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
  'horizontal',
  'hor-left',
  'hor-right',
  'vertical',
  'ver-top',
  'ver-bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ScaleOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.scale-out('center', 0.5s); }
  .demo-box.variant-top { @include anim.scale-out('top', 0.5s); }
  .demo-box.variant-tr { @include anim.scale-out('tr', 0.5s); }
  .demo-box.variant-right { @include anim.scale-out('right', 0.5s); }
  .demo-box.variant-br { @include anim.scale-out('br', 0.5s); }
  .demo-box.variant-bottom { @include anim.scale-out('bottom', 0.5s); }
  .demo-box.variant-bl { @include anim.scale-out('bl', 0.5s); }
  .demo-box.variant-left { @include anim.scale-out('left', 0.5s); }
  .demo-box.variant-tl { @include anim.scale-out('tl', 0.5s); }
  .demo-box.variant-horizontal { @include anim.scale-out('horizontal', 0.5s); }
  .demo-box.variant-hor-left { @include anim.scale-out('hor-left', 0.5s); }
  .demo-box.variant-hor-right { @include anim.scale-out('hor-right', 0.5s); }
  .demo-box.variant-vertical { @include anim.scale-out('vertical', 0.5s); }
  .demo-box.variant-ver-top { @include anim.scale-out('ver-top', 0.5s); }
  .demo-box.variant-ver-bottom { @include anim.scale-out('ver-bottom', 0.5s); }
}

// Basic & Directional (9 patterns)
.variant-center.is-animating { @include anim.scale-out('center', 0.5s); }
.variant-top.is-animating { @include anim.scale-out('top', 0.5s); }
.variant-tr.is-animating { @include anim.scale-out('tr', 0.5s); }
.variant-right.is-animating { @include anim.scale-out('right', 0.5s); }
.variant-br.is-animating { @include anim.scale-out('br', 0.5s); }
.variant-bottom.is-animating { @include anim.scale-out('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.scale-out('bl', 0.5s); }
.variant-left.is-animating { @include anim.scale-out('left', 0.5s); }
.variant-tl.is-animating { @include anim.scale-out('tl', 0.5s); }

// Horizontal (3 patterns)
.variant-horizontal.is-animating { @include anim.scale-out('horizontal', 0.5s); }
.variant-hor-left.is-animating { @include anim.scale-out('hor-left', 0.5s); }
.variant-hor-right.is-animating { @include anim.scale-out('hor-right', 0.5s); }

// Vertical (3 patterns)
.variant-vertical.is-animating { @include anim.scale-out('vertical', 0.5s); }
.variant-ver-top.is-animating { @include anim.scale-out('ver-top', 0.5s); }
.variant-ver-bottom.is-animating { @include anim.scale-out('ver-bottom', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-scale-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f59e0b;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f59e0b;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaScaleUp.vue
````vue
<template>
  <div class="ho-animista-scale-up">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Scale Up Animations
    </h1>

    <p class="demo-description">
      15種類のスケールアップアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <!-- Basic Directions -->
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Horizontal Scaling -->
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Scaling (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-center', { 'is-animating': activeVariants.has('hor-center') }]">
                hor-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-left', { 'is-animating': activeVariants.has('hor-left') }]">
                hor-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-right', { 'is-animating': activeVariants.has('hor-right') }]">
                hor-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Scaling -->
      <div class="animation-section">
        <h2 class="section-title">
          Vertical Scaling (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-center', { 'is-animating': activeVariants.has('ver-center') }]">
                ver-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-top', { 'is-animating': activeVariants.has('ver-top') }]">
                ver-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-bottom', { 'is-animating': activeVariants.has('ver-bottom') }]">
                ver-bottom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ScaleUpVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'hor-center'
    | 'hor-left'
    | 'hor-right'
    | 'ver-center'
    | 'ver-top'
    | 'ver-bottom'

const basicVariants: ScaleUpVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const horizontalVariants: ScaleUpVariant[] = [
  'hor-center',
  'hor-left',
  'hor-right',
]

const verticalVariants: ScaleUpVariant[] = [
  'ver-center',
  'ver-top',
  'ver-bottom',
]

// アニメーションモード（通常 or ホバー）
const isHoverMode = ref(false)

// アニメーション中のバリアントを管理
const activeVariants = ref<Set<ScaleUpVariant>>(new Set())

const replayAll = async () => {
  // 一旦全てクリア
  activeVariants.value.clear()

  await nextTick()

  const allVariants: ScaleUpVariant[] = [
    ...basicVariants,
    ...horizontalVariants,
    ...verticalVariants,
  ]

  // 各要素を順番にアニメーション
  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

// ホバーモードに切り替えた時にアニメーション状態をクリア
watch(isHoverMode, (newValue) => {
  if (newValue) {
    // ホバーモードに切り替えた時は全てのアニメーション状態をクリア
    activeVariants.value.clear()
  }
})

// 初回表示時に全てアニメーション
onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// アニメーションクラス
// 使い方：
// 1. DOMに variant-center などのクラスを付与
// 2. アニメーション開始時に is-animating クラスを追加
// 3. SCSS側で各バリアントごとにアニメーションを定義
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center {
    @include anim.scale-up('center', 0.4s);
  }

  .demo-box.variant-top {
    @include anim.scale-up('top', 0.4s);
  }

  .demo-box.variant-tr {
    @include anim.scale-up('tr', 0.4s);
  }

  .demo-box.variant-right {
    @include anim.scale-up('right', 0.4s);
  }

  .demo-box.variant-br {
    @include anim.scale-up('br', 0.4s);
  }

  .demo-box.variant-bottom {
    @include anim.scale-up('bottom', 0.4s);
  }

  .demo-box.variant-bl {
    @include anim.scale-up('bl', 0.4s);
  }

  .demo-box.variant-left {
    @include anim.scale-up('left', 0.4s);
  }

  .demo-box.variant-tl {
    @include anim.scale-up('tl', 0.4s);
  }

  .demo-box.variant-hor-center {
    @include anim.scale-up('hor-center', 0.4s);
  }

  .demo-box.variant-hor-left {
    @include anim.scale-up('hor-left', 0.4s);
  }

  .demo-box.variant-hor-right {
    @include anim.scale-up('hor-right', 0.4s);
  }

  .demo-box.variant-ver-center {
    @include anim.scale-up('ver-center', 0.4s);
  }

  .demo-box.variant-ver-top {
    @include anim.scale-up('ver-top', 0.4s);
  }

  .demo-box.variant-ver-bottom {
    @include anim.scale-up('ver-bottom', 0.4s);
  }
}

// Basic Directions (9種類)
// 通常モード（Auto Play）時のアニメーション
.variant-center.is-animating {
  @include anim.scale-up('center', 0.5s);
}

.variant-top.is-animating {
  @include anim.scale-up('top', 0.5s);
}

.variant-tr.is-animating {
  @include anim.scale-up('tr', 0.5s);
}

.variant-right.is-animating {
  @include anim.scale-up('right', 0.5s);
}

.variant-br.is-animating {
  @include anim.scale-up('br', 0.5s);
}

.variant-bottom.is-animating {
  @include anim.scale-up('bottom', 0.5s);
}

.variant-bl.is-animating {
  @include anim.scale-up('bl', 0.5s);
}

.variant-left.is-animating {
  @include anim.scale-up('left', 0.5s);
}

.variant-tl.is-animating {
  @include anim.scale-up('tl', 0.5s);
}

// Horizontal (3種類)
.variant-hor-center.is-animating {
  @include anim.scale-up('hor-center', 0.5s);
}

.variant-hor-left.is-animating {
  @include anim.scale-up('hor-left', 0.5s);
}

.variant-hor-right.is-animating {
  @include anim.scale-up('hor-right', 0.5s);
}

// Vertical (3種類)
.variant-ver-center.is-animating {
  @include anim.scale-up('ver-center', 0.5s);
}

.variant-ver-top.is-animating {
  @include anim.scale-up('ver-top', 0.5s);
}

.variant-ver-bottom.is-animating {
  @include anim.scale-up('ver-bottom', 0.5s);
}

// =====================ページ用のスタイル=======================
.ho-animista-scale-up {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls {
  margin-bottom: 24px;
}

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active {
    transform: translateY(0);
  }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaShadowDrop.vue
````vue
<template>
  <div class="ho-animista-shadow-drop">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Shadow Drop Animations
    </h1>

    <p class="demo-description">
      11種類のシャドウ出現アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (5 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Combined Directions (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-lr', { 'is-animating': activeVariants.has('lr') }]">
                lr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tb', { 'is-animating': activeVariants.has('tb') }]">
                tb
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ShadowDropVariant = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'lr' | 'tb' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: ShadowDropVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'lr',
  'tb',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ShadowDropVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.shadow-drop('center', 0.4s); }
  .demo-box.variant-top { @include anim.shadow-drop('top', 0.4s); }
  .demo-box.variant-right { @include anim.shadow-drop('right', 0.4s); }
  .demo-box.variant-bottom { @include anim.shadow-drop('bottom', 0.4s); }
  .demo-box.variant-left { @include anim.shadow-drop('left', 0.4s); }
  .demo-box.variant-lr { @include anim.shadow-drop('lr', 0.4s); }
  .demo-box.variant-tb { @include anim.shadow-drop('tb', 0.4s); }
  .demo-box.variant-tr { @include anim.shadow-drop('tr', 0.4s); }
  .demo-box.variant-br { @include anim.shadow-drop('br', 0.4s); }
  .demo-box.variant-bl { @include anim.shadow-drop('bl', 0.4s); }
  .demo-box.variant-tl { @include anim.shadow-drop('tl', 0.4s); }
}

// Basic Directions (5 patterns)
.variant-center.is-animating { @include anim.shadow-drop('center', 0.4s); }
.variant-top.is-animating { @include anim.shadow-drop('top', 0.4s); }
.variant-right.is-animating { @include anim.shadow-drop('right', 0.4s); }
.variant-bottom.is-animating { @include anim.shadow-drop('bottom', 0.4s); }
.variant-left.is-animating { @include anim.shadow-drop('left', 0.4s); }

// Combined Directions (2 patterns)
.variant-lr.is-animating { @include anim.shadow-drop('lr', 0.4s); }
.variant-tb.is-animating { @include anim.shadow-drop('tb', 0.4s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.shadow-drop('tr', 0.4s); }
.variant-br.is-animating { @include anim.shadow-drop('br', 0.4s); }
.variant-bl.is-animating { @include anim.shadow-drop('bl', 0.4s); }
.variant-tl.is-animating { @include anim.shadow-drop('tl', 0.4s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-shadow-drop {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaShadowDrop2.vue
````vue
<template>
  <div class="ho-animista-shadow-drop-2">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Shadow Drop 2 Animations
    </h1>

    <p class="demo-description">
      11種類のシャドウ＋Z軸移動アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (5 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Combined Directions (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-lr', { 'is-animating': activeVariants.has('lr') }]">
                lr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tb', { 'is-animating': activeVariants.has('tb') }]">
                tb
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ShadowDrop2Variant = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'lr' | 'tb' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: ShadowDrop2Variant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'lr',
  'tb',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ShadowDrop2Variant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.shadow-drop-2('center', 0.4s); }
  .demo-box.variant-top { @include anim.shadow-drop-2('top', 0.4s); }
  .demo-box.variant-right { @include anim.shadow-drop-2('right', 0.4s); }
  .demo-box.variant-bottom { @include anim.shadow-drop-2('bottom', 0.4s); }
  .demo-box.variant-left { @include anim.shadow-drop-2('left', 0.4s); }
  .demo-box.variant-lr { @include anim.shadow-drop-2('lr', 0.4s); }
  .demo-box.variant-tb { @include anim.shadow-drop-2('tb', 0.4s); }
  .demo-box.variant-tr { @include anim.shadow-drop-2('tr', 0.4s); }
  .demo-box.variant-br { @include anim.shadow-drop-2('br', 0.4s); }
  .demo-box.variant-bl { @include anim.shadow-drop-2('bl', 0.4s); }
  .demo-box.variant-tl { @include anim.shadow-drop-2('tl', 0.4s); }
}

// Basic Directions (5 patterns)
.variant-center.is-animating { @include anim.shadow-drop-2('center', 0.4s); }
.variant-top.is-animating { @include anim.shadow-drop-2('top', 0.4s); }
.variant-right.is-animating { @include anim.shadow-drop-2('right', 0.4s); }
.variant-bottom.is-animating { @include anim.shadow-drop-2('bottom', 0.4s); }
.variant-left.is-animating { @include anim.shadow-drop-2('left', 0.4s); }

// Combined Directions (2 patterns)
.variant-lr.is-animating { @include anim.shadow-drop-2('lr', 0.4s); }
.variant-tb.is-animating { @include anim.shadow-drop-2('tb', 0.4s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.shadow-drop-2('tr', 0.4s); }
.variant-br.is-animating { @include anim.shadow-drop-2('br', 0.4s); }
.variant-bl.is-animating { @include anim.shadow-drop-2('bl', 0.4s); }
.variant-tl.is-animating { @include anim.shadow-drop-2('tl', 0.4s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-shadow-drop-2 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaShadowInset.vue
````vue
<template>
  <div class="ho-animista-shadow-inset">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Shadow Inset Animations
    </h1>

    <p class="demo-description">
      11種類の内側シャドウアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (5 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Combined Directions (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-lr', { 'is-animating': activeVariants.has('lr') }]">
                lr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tb', { 'is-animating': activeVariants.has('tb') }]">
                tb
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ShadowInsetVariant = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'lr' | 'tb' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: ShadowInsetVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'lr',
  'tb',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ShadowInsetVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.shadow-inset('center', 0.4s); }
  .demo-box.variant-top { @include anim.shadow-inset('top', 0.4s); }
  .demo-box.variant-right { @include anim.shadow-inset('right', 0.4s); }
  .demo-box.variant-bottom { @include anim.shadow-inset('bottom', 0.4s); }
  .demo-box.variant-left { @include anim.shadow-inset('left', 0.4s); }
  .demo-box.variant-lr { @include anim.shadow-inset('lr', 0.4s); }
  .demo-box.variant-tb { @include anim.shadow-inset('tb', 0.4s); }
  .demo-box.variant-tr { @include anim.shadow-inset('tr', 0.4s); }
  .demo-box.variant-br { @include anim.shadow-inset('br', 0.4s); }
  .demo-box.variant-bl { @include anim.shadow-inset('bl', 0.4s); }
  .demo-box.variant-tl { @include anim.shadow-inset('tl', 0.4s); }
}

// Basic Directions (5 patterns)
.variant-center.is-animating { @include anim.shadow-inset('center', 0.4s); }
.variant-top.is-animating { @include anim.shadow-inset('top', 0.4s); }
.variant-right.is-animating { @include anim.shadow-inset('right', 0.4s); }
.variant-bottom.is-animating { @include anim.shadow-inset('bottom', 0.4s); }
.variant-left.is-animating { @include anim.shadow-inset('left', 0.4s); }

// Combined Directions (2 patterns)
.variant-lr.is-animating { @include anim.shadow-inset('lr', 0.4s); }
.variant-tb.is-animating { @include anim.shadow-inset('tb', 0.4s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.shadow-inset('tr', 0.4s); }
.variant-br.is-animating { @include anim.shadow-inset('br', 0.4s); }
.variant-bl.is-animating { @include anim.shadow-inset('bl', 0.4s); }
.variant-tl.is-animating { @include anim.shadow-inset('tl', 0.4s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-shadow-inset {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaShadowPop.vue
````vue
<template>
  <div class="ho-animista-shadow-pop">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Shadow Pop Animations
    </h1>

    <p class="demo-description">
      4種類のレイヤードシャドウアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ShadowPopVariant = 'tr' | 'br' | 'bl' | 'tl'

const allVariants: ShadowPopVariant[] = [
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ShadowPopVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-tr { @include anim.shadow-pop('tr', 0.3s); }
  .demo-box.variant-br { @include anim.shadow-pop('br', 0.3s); }
  .demo-box.variant-bl { @include anim.shadow-pop('bl', 0.3s); }
  .demo-box.variant-tl { @include anim.shadow-pop('tl', 0.3s); }
}

.variant-tr.is-animating { @include anim.shadow-pop('tr', 0.3s); }
.variant-br.is-animating { @include anim.shadow-pop('br', 0.3s); }
.variant-bl.is-animating { @include anim.shadow-pop('bl', 0.3s); }
.variant-tl.is-animating { @include anim.shadow-pop('tl', 0.3s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-shadow-pop {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaShake.vue
````vue
<template>
  <div class="ho-animista-shake">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Shake Animations
    </h1>

    <p class="demo-description">
      11種類のシェイクアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Shake (11 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-horizontal', { 'is-animating': activeVariants.has('horizontal') }]">
                HORIZONTAL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vertical', { 'is-animating': activeVariants.has('vertical') }]">
                VERTICAL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-lr', { 'is-animating': activeVariants.has('lr') }]">
                LR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                TR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                RIGHT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                BR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                BOTTOM
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                BL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                LEFT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                TL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ShakeVariant
  = | 'horizontal'
    | 'vertical'
    | 'lr'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: ShakeVariant[] = [
  'horizontal',
  'vertical',
  'lr',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ShakeVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-horizontal { @include anim.shake('horizontal', 0.8s); }
  .demo-box.variant-vertical { @include anim.shake('vertical', 0.8s); }
  .demo-box.variant-lr { @include anim.shake('lr', 0.8s); }
  .demo-box.variant-top { @include anim.shake('top', 0.8s); }
  .demo-box.variant-tr { @include anim.shake('tr', 0.8s); }
  .demo-box.variant-right { @include anim.shake('right', 0.8s); }
  .demo-box.variant-br { @include anim.shake('br', 0.8s); }
  .demo-box.variant-bottom { @include anim.shake('bottom', 0.8s); }
  .demo-box.variant-bl { @include anim.shake('bl', 0.8s); }
  .demo-box.variant-left { @include anim.shake('left', 0.8s); }
  .demo-box.variant-tl { @include anim.shake('tl', 0.8s); }
}

// Shake Variations (11 patterns)
.variant-horizontal.is-animating { @include anim.shake('horizontal', 0.8s); }
.variant-vertical.is-animating { @include anim.shake('vertical', 0.8s); }
.variant-lr.is-animating { @include anim.shake('lr', 0.8s); }
.variant-top.is-animating { @include anim.shake('top', 0.8s); }
.variant-tr.is-animating { @include anim.shake('tr', 0.8s); }
.variant-right.is-animating { @include anim.shake('right', 0.8s); }
.variant-br.is-animating { @include anim.shake('br', 0.8s); }
.variant-bottom.is-animating { @include anim.shake('bottom', 0.8s); }
.variant-bl.is-animating { @include anim.shake('bl', 0.8s); }
.variant-left.is-animating { @include anim.shake('left', 0.8s); }
.variant-tl.is-animating { @include anim.shake('tl', 0.8s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-shake {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  border-radius: 16px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #8b5cf6;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlide.vue
````vue
<template>
  <div class="ho-animista-slide">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Animations
    </h1>

    <p class="demo-description">
      9種類のスライドアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          All Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideVariant = 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl' | 'center'

const allVariants: SlideVariant[] = [
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
  'center',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.slide('top', 0.4s); }
  .demo-box.variant-tr { @include anim.slide('tr', 0.4s); }
  .demo-box.variant-right { @include anim.slide('right', 0.4s); }
  .demo-box.variant-br { @include anim.slide('br', 0.4s); }
  .demo-box.variant-bottom { @include anim.slide('bottom', 0.4s); }
  .demo-box.variant-bl { @include anim.slide('bl', 0.4s); }
  .demo-box.variant-left { @include anim.slide('left', 0.4s); }
  .demo-box.variant-tl { @include anim.slide('tl', 0.4s); }
  .demo-box.variant-center { @include anim.slide('center', 0.4s); }
}

.variant-top.is-animating { @include anim.slide('top', 0.5s); }
.variant-tr.is-animating { @include anim.slide('tr', 0.5s); }
.variant-right.is-animating { @include anim.slide('right', 0.5s); }
.variant-br.is-animating { @include anim.slide('br', 0.5s); }
.variant-bottom.is-animating { @include anim.slide('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.slide('bl', 0.5s); }
.variant-left.is-animating { @include anim.slide('left', 0.5s); }
.variant-tl.is-animating { @include anim.slide('tl', 0.5s); }
.variant-center.is-animating { @include anim.slide('center', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideBck.vue
````vue
<template>
  <div class="ho-animista-slide-bck">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Backward Animations
    </h1>

    <p class="demo-description">
      9種類のスライド後方アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          All Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideBckVariant = 'center' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl'

const allVariants: SlideBckVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideBckVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.slide-bck('center', 0.4s); }
  .demo-box.variant-top { @include anim.slide-bck('top', 0.4s); }
  .demo-box.variant-tr { @include anim.slide-bck('tr', 0.4s); }
  .demo-box.variant-right { @include anim.slide-bck('right', 0.4s); }
  .demo-box.variant-br { @include anim.slide-bck('br', 0.4s); }
  .demo-box.variant-bottom { @include anim.slide-bck('bottom', 0.4s); }
  .demo-box.variant-bl { @include anim.slide-bck('bl', 0.4s); }
  .demo-box.variant-left { @include anim.slide-bck('left', 0.4s); }
  .demo-box.variant-tl { @include anim.slide-bck('tl', 0.4s); }
}

.variant-center.is-animating { @include anim.slide-bck('center', 0.5s); }
.variant-top.is-animating { @include anim.slide-bck('top', 0.5s); }
.variant-tr.is-animating { @include anim.slide-bck('tr', 0.5s); }
.variant-right.is-animating { @include anim.slide-bck('right', 0.5s); }
.variant-br.is-animating { @include anim.slide-bck('br', 0.5s); }
.variant-bottom.is-animating { @include anim.slide-bck('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.slide-bck('bl', 0.5s); }
.variant-left.is-animating { @include anim.slide-bck('left', 0.5s); }
.variant-tl.is-animating { @include anim.slide-bck('tl', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-bck {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideFwd.vue
````vue
<template>
  <div class="ho-animista-slide-fwd">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Forward Animations
    </h1>

    <p class="demo-description">
      9種類のスライド前方アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          All Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideFwdVariant = 'center' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl'

const allVariants: SlideFwdVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideFwdVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.slide-fwd('center', 0.4s); }
  .demo-box.variant-top { @include anim.slide-fwd('top', 0.4s); }
  .demo-box.variant-tr { @include anim.slide-fwd('tr', 0.4s); }
  .demo-box.variant-right { @include anim.slide-fwd('right', 0.4s); }
  .demo-box.variant-br { @include anim.slide-fwd('br', 0.4s); }
  .demo-box.variant-bottom { @include anim.slide-fwd('bottom', 0.4s); }
  .demo-box.variant-bl { @include anim.slide-fwd('bl', 0.4s); }
  .demo-box.variant-left { @include anim.slide-fwd('left', 0.4s); }
  .demo-box.variant-tl { @include anim.slide-fwd('tl', 0.4s); }
}

.variant-center.is-animating { @include anim.slide-fwd('center', 0.5s); }
.variant-top.is-animating { @include anim.slide-fwd('top', 0.5s); }
.variant-tr.is-animating { @include anim.slide-fwd('tr', 0.5s); }
.variant-right.is-animating { @include anim.slide-fwd('right', 0.5s); }
.variant-br.is-animating { @include anim.slide-fwd('br', 0.5s); }
.variant-bottom.is-animating { @include anim.slide-fwd('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.slide-fwd('bl', 0.5s); }
.variant-left.is-animating { @include anim.slide-fwd('left', 0.5s); }
.variant-tl.is-animating { @include anim.slide-fwd('tl', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-fwd {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideIn.vue
````vue
<template>
  <div class="ho-animista-slide-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide In Animations
    </h1>

    <p class="demo-description">
      8種類のスライド入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideInVariant = 'top' | 'right' | 'bottom' | 'left' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: SlideInVariant[] = [
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 120)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.slide-in('top', 0.5s); }
  .demo-box.variant-right { @include anim.slide-in('right', 0.5s); }
  .demo-box.variant-bottom { @include anim.slide-in('bottom', 0.5s); }
  .demo-box.variant-left { @include anim.slide-in('left', 0.5s); }
  .demo-box.variant-tr { @include anim.slide-in('tr', 0.5s); }
  .demo-box.variant-br { @include anim.slide-in('br', 0.5s); }
  .demo-box.variant-bl { @include anim.slide-in('bl', 0.5s); }
  .demo-box.variant-tl { @include anim.slide-in('tl', 0.5s); }
}

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.slide-in('top', 0.5s); }
.variant-right.is-animating { @include anim.slide-in('right', 0.5s); }
.variant-bottom.is-animating { @include anim.slide-in('bottom', 0.5s); }
.variant-left.is-animating { @include anim.slide-in('left', 0.5s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.slide-in('tr', 0.5s); }
.variant-br.is-animating { @include anim.slide-in('br', 0.5s); }
.variant-bl.is-animating { @include anim.slide-in('bl', 0.5s); }
.variant-tl.is-animating { @include anim.slide-in('tl', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #06b6d4;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #06b6d4;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideInBck.vue
````vue
<template>
  <div class="ho-animista-slide-in-bck">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide In Backward Animations
    </h1>

    <p class="demo-description">
      9種類の後方スライド入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center (1 pattern)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideInBckVariant = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: SlideInBckVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideInBckVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.slide-in-bck('center', 0.6s); }
  .demo-box.variant-top { @include anim.slide-in-bck('top', 0.6s); }
  .demo-box.variant-right { @include anim.slide-in-bck('right', 0.6s); }
  .demo-box.variant-bottom { @include anim.slide-in-bck('bottom', 0.6s); }
  .demo-box.variant-left { @include anim.slide-in-bck('left', 0.6s); }
  .demo-box.variant-tr { @include anim.slide-in-bck('tr', 0.6s); }
  .demo-box.variant-br { @include anim.slide-in-bck('br', 0.6s); }
  .demo-box.variant-bl { @include anim.slide-in-bck('bl', 0.6s); }
  .demo-box.variant-tl { @include anim.slide-in-bck('tl', 0.6s); }
}

// Center (1 pattern)
.variant-center.is-animating { @include anim.slide-in-bck('center', 0.6s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.slide-in-bck('top', 0.6s); }
.variant-right.is-animating { @include anim.slide-in-bck('right', 0.6s); }
.variant-bottom.is-animating { @include anim.slide-in-bck('bottom', 0.6s); }
.variant-left.is-animating { @include anim.slide-in-bck('left', 0.6s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.slide-in-bck('tr', 0.6s); }
.variant-br.is-animating { @include anim.slide-in-bck('br', 0.6s); }
.variant-bl.is-animating { @include anim.slide-in-bck('bl', 0.6s); }
.variant-tl.is-animating { @include anim.slide-in-bck('tl', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-in-bck {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f97316;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f97316;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideInBlurred.vue
````vue
<template>
  <div class="ho-animista-slide-in-blurred">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide In Blurred Animations
    </h1>

    <p class="demo-description">
      8種類のブラースライド入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideInBlurredVariant = 'top' | 'right' | 'bottom' | 'left' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: SlideInBlurredVariant[] = [
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideInBlurredVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 120)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.slide-in-blurred('top', 0.6s); }
  .demo-box.variant-right { @include anim.slide-in-blurred('right', 0.6s); }
  .demo-box.variant-bottom { @include anim.slide-in-blurred('bottom', 0.6s); }
  .demo-box.variant-left { @include anim.slide-in-blurred('left', 0.6s); }
  .demo-box.variant-tr { @include anim.slide-in-blurred('tr', 0.6s); }
  .demo-box.variant-br { @include anim.slide-in-blurred('br', 0.6s); }
  .demo-box.variant-bl { @include anim.slide-in-blurred('bl', 0.6s); }
  .demo-box.variant-tl { @include anim.slide-in-blurred('tl', 0.6s); }
}

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.slide-in-blurred('top', 0.6s); }
.variant-right.is-animating { @include anim.slide-in-blurred('right', 0.6s); }
.variant-bottom.is-animating { @include anim.slide-in-blurred('bottom', 0.6s); }
.variant-left.is-animating { @include anim.slide-in-blurred('left', 0.6s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.slide-in-blurred('tr', 0.6s); }
.variant-br.is-animating { @include anim.slide-in-blurred('br', 0.6s); }
.variant-bl.is-animating { @include anim.slide-in-blurred('bl', 0.6s); }
.variant-tl.is-animating { @include anim.slide-in-blurred('tl', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-in-blurred {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #a855f7;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #a855f7;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideInElliptic.vue
````vue
<template>
  <div class="ho-animista-slide-in-elliptic">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide In Elliptic Animations
    </h1>

    <p class="demo-description">
      8種類の楕円軌道スライド入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Top Elliptic (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                top-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                top-bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Right Elliptic (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                right-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                right-bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Bottom Elliptic (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                bottom-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                bottom-bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Left Elliptic (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                left-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                left-bck
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideInEllipticVariant = 'top-fwd' | 'top-bck' | 'right-fwd' | 'right-bck' | 'bottom-fwd' | 'bottom-bck' | 'left-fwd' | 'left-bck'

const allVariants: SlideInEllipticVariant[] = [
  'top-fwd',
  'top-bck',
  'right-fwd',
  'right-bck',
  'bottom-fwd',
  'bottom-bck',
  'left-fwd',
  'left-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideInEllipticVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top-fwd { @include anim.slide-in-elliptic('top-fwd', 0.7s); }
  .demo-box.variant-top-bck { @include anim.slide-in-elliptic('top-bck', 0.7s); }
  .demo-box.variant-right-fwd { @include anim.slide-in-elliptic('right-fwd', 0.7s); }
  .demo-box.variant-right-bck { @include anim.slide-in-elliptic('right-bck', 0.7s); }
  .demo-box.variant-bottom-fwd { @include anim.slide-in-elliptic('bottom-fwd', 0.7s); }
  .demo-box.variant-bottom-bck { @include anim.slide-in-elliptic('bottom-bck', 0.7s); }
  .demo-box.variant-left-fwd { @include anim.slide-in-elliptic('left-fwd', 0.7s); }
  .demo-box.variant-left-bck { @include anim.slide-in-elliptic('left-bck', 0.7s); }
}

// Top Elliptic (2 patterns)
.variant-top-fwd.is-animating { @include anim.slide-in-elliptic('top-fwd', 0.7s); }
.variant-top-bck.is-animating { @include anim.slide-in-elliptic('top-bck', 0.7s); }

// Right Elliptic (2 patterns)
.variant-right-fwd.is-animating { @include anim.slide-in-elliptic('right-fwd', 0.7s); }
.variant-right-bck.is-animating { @include anim.slide-in-elliptic('right-bck', 0.7s); }

// Bottom Elliptic (2 patterns)
.variant-bottom-fwd.is-animating { @include anim.slide-in-elliptic('bottom-fwd', 0.7s); }
.variant-bottom-bck.is-animating { @include anim.slide-in-elliptic('bottom-bck', 0.7s); }

// Left Elliptic (2 patterns)
.variant-left-fwd.is-animating { @include anim.slide-in-elliptic('left-fwd', 0.7s); }
.variant-left-bck.is-animating { @include anim.slide-in-elliptic('left-bck', 0.7s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-in-elliptic {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #22d3ee;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #22d3ee;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideInFwd.vue
````vue
<template>
  <div class="ho-animista-slide-in-fwd">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide In Forward Animations
    </h1>

    <p class="demo-description">
      9種類の前方スライド入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center (1 pattern)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideInFwdVariant = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: SlideInFwdVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideInFwdVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.slide-in-fwd('center', 0.4s); }
  .demo-box.variant-top { @include anim.slide-in-fwd('top', 0.4s); }
  .demo-box.variant-right { @include anim.slide-in-fwd('right', 0.4s); }
  .demo-box.variant-bottom { @include anim.slide-in-fwd('bottom', 0.4s); }
  .demo-box.variant-left { @include anim.slide-in-fwd('left', 0.4s); }
  .demo-box.variant-tr { @include anim.slide-in-fwd('tr', 0.4s); }
  .demo-box.variant-br { @include anim.slide-in-fwd('br', 0.4s); }
  .demo-box.variant-bl { @include anim.slide-in-fwd('bl', 0.4s); }
  .demo-box.variant-tl { @include anim.slide-in-fwd('tl', 0.4s); }
}

// Center (1 pattern)
.variant-center.is-animating { @include anim.slide-in-fwd('center', 0.4s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.slide-in-fwd('top', 0.4s); }
.variant-right.is-animating { @include anim.slide-in-fwd('right', 0.4s); }
.variant-bottom.is-animating { @include anim.slide-in-fwd('bottom', 0.4s); }
.variant-left.is-animating { @include anim.slide-in-fwd('left', 0.4s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.slide-in-fwd('tr', 0.4s); }
.variant-br.is-animating { @include anim.slide-in-fwd('br', 0.4s); }
.variant-bl.is-animating { @include anim.slide-in-fwd('bl', 0.4s); }
.variant-tl.is-animating { @include anim.slide-in-fwd('tl', 0.4s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-in-fwd {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #84cc16;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #84cc16;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideOut.vue
````vue
<template>
  <div class="ho-animista-slide-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Out Animations
    </h1>

    <p class="demo-description">
      8種類の方向別スライド退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Directional Slides (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideOutVariant
  = | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: SlideOutVariant[] = [
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.slide-out('top', 0.5s); }
  .demo-box.variant-tr { @include anim.slide-out('tr', 0.5s); }
  .demo-box.variant-right { @include anim.slide-out('right', 0.5s); }
  .demo-box.variant-br { @include anim.slide-out('br', 0.5s); }
  .demo-box.variant-bottom { @include anim.slide-out('bottom', 0.5s); }
  .demo-box.variant-bl { @include anim.slide-out('bl', 0.5s); }
  .demo-box.variant-left { @include anim.slide-out('left', 0.5s); }
  .demo-box.variant-tl { @include anim.slide-out('tl', 0.5s); }
}

// Directional Slides (8 patterns)
.variant-top.is-animating { @include anim.slide-out('top', 0.5s); }
.variant-tr.is-animating { @include anim.slide-out('tr', 0.5s); }
.variant-right.is-animating { @include anim.slide-out('right', 0.5s); }
.variant-br.is-animating { @include anim.slide-out('br', 0.5s); }
.variant-bottom.is-animating { @include anim.slide-out('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.slide-out('bl', 0.5s); }
.variant-left.is-animating { @include anim.slide-out('left', 0.5s); }
.variant-tl.is-animating { @include anim.slide-out('tl', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #f59e0b;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #f59e0b;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideOutBck.vue
````vue
<template>
  <div class="ho-animista-slide-out-bck">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Out Backward Animations
    </h1>

    <p class="demo-description">
      9種類の後方スライド退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center & Directional Backward Slides (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideOutBckVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: SlideOutBckVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideOutBckVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.slide-out-bck('center', 0.5s); }
  .demo-box.variant-top { @include anim.slide-out-bck('top', 0.5s); }
  .demo-box.variant-tr { @include anim.slide-out-bck('tr', 0.5s); }
  .demo-box.variant-right { @include anim.slide-out-bck('right', 0.5s); }
  .demo-box.variant-br { @include anim.slide-out-bck('br', 0.5s); }
  .demo-box.variant-bottom { @include anim.slide-out-bck('bottom', 0.5s); }
  .demo-box.variant-bl { @include anim.slide-out-bck('bl', 0.5s); }
  .demo-box.variant-left { @include anim.slide-out-bck('left', 0.5s); }
  .demo-box.variant-tl { @include anim.slide-out-bck('tl', 0.5s); }
}

// Center & Directional Backward Slides (9 patterns)
.variant-center.is-animating { @include anim.slide-out-bck('center', 0.5s); }
.variant-top.is-animating { @include anim.slide-out-bck('top', 0.5s); }
.variant-tr.is-animating { @include anim.slide-out-bck('tr', 0.5s); }
.variant-right.is-animating { @include anim.slide-out-bck('right', 0.5s); }
.variant-br.is-animating { @include anim.slide-out-bck('br', 0.5s); }
.variant-bottom.is-animating { @include anim.slide-out-bck('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.slide-out-bck('bl', 0.5s); }
.variant-left.is-animating { @include anim.slide-out-bck('left', 0.5s); }
.variant-tl.is-animating { @include anim.slide-out-bck('tl', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-out-bck {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #3b82f6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #3b82f6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideOutBlurred.vue
````vue
<template>
  <div class="ho-animista-slide-out-blurred">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Out Blurred Animations
    </h1>

    <p class="demo-description">
      8種類のブラースライド退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Directional Blurred Slides (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideOutBlurredVariant
  = | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: SlideOutBlurredVariant[] = [
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideOutBlurredVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top { @include anim.slide-out-blurred('top', 0.45s); }
  .demo-box.variant-tr { @include anim.slide-out-blurred('tr', 0.45s); }
  .demo-box.variant-right { @include anim.slide-out-blurred('right', 0.45s); }
  .demo-box.variant-br { @include anim.slide-out-blurred('br', 0.45s); }
  .demo-box.variant-bottom { @include anim.slide-out-blurred('bottom', 0.45s); }
  .demo-box.variant-bl { @include anim.slide-out-blurred('bl', 0.45s); }
  .demo-box.variant-left { @include anim.slide-out-blurred('left', 0.45s); }
  .demo-box.variant-tl { @include anim.slide-out-blurred('tl', 0.45s); }
}

// Directional Blurred Slides (8 patterns)
.variant-top.is-animating { @include anim.slide-out-blurred('top', 0.45s); }
.variant-tr.is-animating { @include anim.slide-out-blurred('tr', 0.45s); }
.variant-right.is-animating { @include anim.slide-out-blurred('right', 0.45s); }
.variant-br.is-animating { @include anim.slide-out-blurred('br', 0.45s); }
.variant-bottom.is-animating { @include anim.slide-out-blurred('bottom', 0.45s); }
.variant-bl.is-animating { @include anim.slide-out-blurred('bl', 0.45s); }
.variant-left.is-animating { @include anim.slide-out-blurred('left', 0.45s); }
.variant-tl.is-animating { @include anim.slide-out-blurred('tl', 0.45s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-out-blurred {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #ec4899;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #ec4899;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideOutElliptic.vue
````vue
<template>
  <div class="ho-animista-slide-out-elliptic">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Out Elliptic Animations
    </h1>

    <p class="demo-description">
      8種類の楕円軌道スライド退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Elliptic Slides (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                top-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                top-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                right-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                right-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                bottom-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                bottom-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                left-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                left-fwd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideOutEllipticVariant
  = | 'top-bck'
    | 'top-fwd'
    | 'right-bck'
    | 'right-fwd'
    | 'bottom-bck'
    | 'bottom-fwd'
    | 'left-bck'
    | 'left-fwd'

const allVariants: SlideOutEllipticVariant[] = [
  'top-bck',
  'top-fwd',
  'right-bck',
  'right-fwd',
  'bottom-bck',
  'bottom-fwd',
  'left-bck',
  'left-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideOutEllipticVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top-bck { @include anim.slide-out-elliptic('top-bck', 0.7s); }
  .demo-box.variant-top-fwd { @include anim.slide-out-elliptic('top-fwd', 0.7s); }
  .demo-box.variant-right-bck { @include anim.slide-out-elliptic('right-bck', 0.7s); }
  .demo-box.variant-right-fwd { @include anim.slide-out-elliptic('right-fwd', 0.7s); }
  .demo-box.variant-bottom-bck { @include anim.slide-out-elliptic('bottom-bck', 0.7s); }
  .demo-box.variant-bottom-fwd { @include anim.slide-out-elliptic('bottom-fwd', 0.7s); }
  .demo-box.variant-left-bck { @include anim.slide-out-elliptic('left-bck', 0.7s); }
  .demo-box.variant-left-fwd { @include anim.slide-out-elliptic('left-fwd', 0.7s); }
}

// Elliptic Slides (8 patterns)
.variant-top-bck.is-animating { @include anim.slide-out-elliptic('top-bck', 0.7s); }
.variant-top-fwd.is-animating { @include anim.slide-out-elliptic('top-fwd', 0.7s); }
.variant-right-bck.is-animating { @include anim.slide-out-elliptic('right-bck', 0.7s); }
.variant-right-fwd.is-animating { @include anim.slide-out-elliptic('right-fwd', 0.7s); }
.variant-bottom-bck.is-animating { @include anim.slide-out-elliptic('bottom-bck', 0.7s); }
.variant-bottom-fwd.is-animating { @include anim.slide-out-elliptic('bottom-fwd', 0.7s); }
.variant-left-bck.is-animating { @include anim.slide-out-elliptic('left-bck', 0.7s); }
.variant-left-fwd.is-animating { @include anim.slide-out-elliptic('left-fwd', 0.7s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-out-elliptic {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #14b8a6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #14b8a6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideOutFwd.vue
````vue
<template>
  <div class="ho-animista-slide-out-fwd">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Out Forward Animations
    </h1>

    <p class="demo-description">
      9種類の前方スライド退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Center & Directional Forward Slides (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideOutFwdVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: SlideOutFwdVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideOutFwdVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center { @include anim.slide-out-fwd('center', 0.7s); }
  .demo-box.variant-top { @include anim.slide-out-fwd('top', 0.7s); }
  .demo-box.variant-tr { @include anim.slide-out-fwd('tr', 0.7s); }
  .demo-box.variant-right { @include anim.slide-out-fwd('right', 0.7s); }
  .demo-box.variant-br { @include anim.slide-out-fwd('br', 0.7s); }
  .demo-box.variant-bottom { @include anim.slide-out-fwd('bottom', 0.7s); }
  .demo-box.variant-bl { @include anim.slide-out-fwd('bl', 0.7s); }
  .demo-box.variant-left { @include anim.slide-out-fwd('left', 0.7s); }
  .demo-box.variant-tl { @include anim.slide-out-fwd('tl', 0.7s); }
}

// Center & Directional Forward Slides (9 patterns)
.variant-center.is-animating { @include anim.slide-out-fwd('center', 0.7s); }
.variant-top.is-animating { @include anim.slide-out-fwd('top', 0.7s); }
.variant-tr.is-animating { @include anim.slide-out-fwd('tr', 0.7s); }
.variant-right.is-animating { @include anim.slide-out-fwd('right', 0.7s); }
.variant-br.is-animating { @include anim.slide-out-fwd('br', 0.7s); }
.variant-bottom.is-animating { @include anim.slide-out-fwd('bottom', 0.7s); }
.variant-bl.is-animating { @include anim.slide-out-fwd('bl', 0.7s); }
.variant-left.is-animating { @include anim.slide-out-fwd('left', 0.7s); }
.variant-tl.is-animating { @include anim.slide-out-fwd('tl', 0.7s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-out-fwd {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #06b6d4;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #06b6d4;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlideRotate.vue
````vue
<template>
  <div class="ho-animista-slide-rotate">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Rotate Animations
    </h1>

    <p class="demo-description">
      12種類のスライド＋回転アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Top (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
                hor-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-t-bck', { 'is-animating': activeVariants.has('hor-t-bck') }]">
                hor-t-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-t-fwd', { 'is-animating': activeVariants.has('hor-t-fwd') }]">
                hor-t-fwd
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical Right (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-right', { 'is-animating': activeVariants.has('ver-right') }]">
                ver-right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-r-bck', { 'is-animating': activeVariants.has('ver-r-bck') }]">
                ver-r-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-r-fwd', { 'is-animating': activeVariants.has('ver-r-fwd') }]">
                ver-r-fwd
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Bottom (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
                hor-bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-b-bck', { 'is-animating': activeVariants.has('hor-b-bck') }]">
                hor-b-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-b-fwd', { 'is-animating': activeVariants.has('hor-b-fwd') }]">
                hor-b-fwd
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical Left (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-left', { 'is-animating': activeVariants.has('ver-left') }]">
                ver-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-l-bck', { 'is-animating': activeVariants.has('ver-l-bck') }]">
                ver-l-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-l-fwd', { 'is-animating': activeVariants.has('ver-l-fwd') }]">
                ver-l-fwd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideRotateVariant
  = 'hor-top' | 'hor-t-bck' | 'hor-t-fwd'
    | 'ver-right' | 'ver-r-bck' | 'ver-r-fwd'
    | 'hor-bottom' | 'hor-b-bck' | 'hor-b-fwd'
    | 'ver-left' | 'ver-l-bck' | 'ver-l-fwd'

const allVariants: SlideRotateVariant[] = [
  'hor-top', 'hor-t-bck', 'hor-t-fwd',
  'ver-right', 'ver-r-bck', 'ver-r-fwd',
  'hor-bottom', 'hor-b-bck', 'hor-b-fwd',
  'ver-left', 'ver-l-bck', 'ver-l-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideRotateVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 120)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-hor-top { @include anim.slide-rotate('hor-top', 0.4s); }
  .demo-box.variant-hor-t-bck { @include anim.slide-rotate('hor-t-bck', 0.4s); }
  .demo-box.variant-hor-t-fwd { @include anim.slide-rotate('hor-t-fwd', 0.4s); }
  .demo-box.variant-ver-right { @include anim.slide-rotate('ver-right', 0.4s); }
  .demo-box.variant-ver-r-bck { @include anim.slide-rotate('ver-r-bck', 0.4s); }
  .demo-box.variant-ver-r-fwd { @include anim.slide-rotate('ver-r-fwd', 0.4s); }
  .demo-box.variant-hor-bottom { @include anim.slide-rotate('hor-bottom', 0.4s); }
  .demo-box.variant-hor-b-bck { @include anim.slide-rotate('hor-b-bck', 0.4s); }
  .demo-box.variant-hor-b-fwd { @include anim.slide-rotate('hor-b-fwd', 0.4s); }
  .demo-box.variant-ver-left { @include anim.slide-rotate('ver-left', 0.4s); }
  .demo-box.variant-ver-l-bck { @include anim.slide-rotate('ver-l-bck', 0.4s); }
  .demo-box.variant-ver-l-fwd { @include anim.slide-rotate('ver-l-fwd', 0.4s); }
}

// Horizontal Top (3 patterns)
.variant-hor-top.is-animating { @include anim.slide-rotate('hor-top', 0.5s); }
.variant-hor-t-bck.is-animating { @include anim.slide-rotate('hor-t-bck', 0.5s); }
.variant-hor-t-fwd.is-animating { @include anim.slide-rotate('hor-t-fwd', 0.5s); }

// Vertical Right (3 patterns)
.variant-ver-right.is-animating { @include anim.slide-rotate('ver-right', 0.5s); }
.variant-ver-r-bck.is-animating { @include anim.slide-rotate('ver-r-bck', 0.5s); }
.variant-ver-r-fwd.is-animating { @include anim.slide-rotate('ver-r-fwd', 0.5s); }

// Horizontal Bottom (3 patterns)
.variant-hor-bottom.is-animating { @include anim.slide-rotate('hor-bottom', 0.5s); }
.variant-hor-b-bck.is-animating { @include anim.slide-rotate('hor-b-bck', 0.5s); }
.variant-hor-b-fwd.is-animating { @include anim.slide-rotate('hor-b-fwd', 0.5s); }

// Vertical Left (3 patterns)
.variant-ver-left.is-animating { @include anim.slide-rotate('ver-left', 0.5s); }
.variant-ver-l-bck.is-animating { @include anim.slide-rotate('ver-l-bck', 0.5s); }
.variant-ver-l-fwd.is-animating { @include anim.slide-rotate('ver-l-fwd', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-rotate {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlitIn.vue
````vue
<template>
  <div class="ho-animista-slit-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slit In Animations
    </h1>

    <p class="demo-description">
      4種類のスリット入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          All Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vertical', { 'is-animating': activeVariants.has('vertical') }]">
                vertical
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-horizontal', { 'is-animating': activeVariants.has('horizontal') }]">
                horizontal
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diagonal-1', { 'is-animating': activeVariants.has('diagonal-1') }]">
                diagonal-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diagonal-2', { 'is-animating': activeVariants.has('diagonal-2') }]">
                diagonal-2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlitInVariant = 'vertical' | 'horizontal' | 'diagonal-1' | 'diagonal-2'

const allVariants: SlitInVariant[] = [
  'vertical',
  'horizontal',
  'diagonal-1',
  'diagonal-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlitInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 200)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-vertical { @include anim.slit-in('vertical', 0.45s); }
  .demo-box.variant-horizontal { @include anim.slit-in('horizontal', 0.45s); }
  .demo-box.variant-diagonal-1 { @include anim.slit-in('diagonal-1', 0.45s); }
  .demo-box.variant-diagonal-2 { @include anim.slit-in('diagonal-2', 0.45s); }
}

.variant-vertical.is-animating { @include anim.slit-in('vertical', 0.45s); }
.variant-horizontal.is-animating { @include anim.slit-in('horizontal', 0.45s); }
.variant-diagonal-1.is-animating { @include anim.slit-in('diagonal-1', 0.45s); }
.variant-diagonal-2.is-animating { @include anim.slit-in('diagonal-2', 0.45s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slit-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #14b8a6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #14b8a6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSlitOut.vue
````vue
<template>
  <div class="ho-animista-slit-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slit Out Animations
    </h1>

    <p class="demo-description">
      4種類のスリット退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Slit Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vertical', { 'is-animating': activeVariants.has('vertical') }]">
                vertical
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-horizontal', { 'is-animating': activeVariants.has('horizontal') }]">
                horizontal
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diagonal-1', { 'is-animating': activeVariants.has('diagonal-1') }]">
                diagonal-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diagonal-2', { 'is-animating': activeVariants.has('diagonal-2') }]">
                diagonal-2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlitOutVariant
  = | 'vertical'
    | 'horizontal'
    | 'diagonal-1'
    | 'diagonal-2'

const allVariants: SlitOutVariant[] = [
  'vertical',
  'horizontal',
  'diagonal-1',
  'diagonal-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlitOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-vertical { @include anim.slit-out('vertical', 0.5s); }
  .demo-box.variant-horizontal { @include anim.slit-out('horizontal', 0.5s); }
  .demo-box.variant-diagonal-1 { @include anim.slit-out('diagonal-1', 0.5s); }
  .demo-box.variant-diagonal-2 { @include anim.slit-out('diagonal-2', 0.5s); }
}

// Slit Directions (4 patterns)
.variant-vertical.is-animating { @include anim.slit-out('vertical', 0.5s); }
.variant-horizontal.is-animating { @include anim.slit-out('horizontal', 0.5s); }
.variant-diagonal-1.is-animating { @include anim.slit-out('diagonal-1', 0.5s); }
.variant-diagonal-2.is-animating { @include anim.slit-out('diagonal-2', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slit-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #8b5cf6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #8b5cf6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSwing.vue
````vue
<template>
  <div class="ho-animista-swing">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Swing Animations
    </h1>

    <p class="demo-description">
      16種類のスイングアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Top & Bottom (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Right & Left (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Top-Right & Bottom-Left (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-right-fwd', { 'is-animating': activeVariants.has('top-right-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-right-bck', { 'is-animating': activeVariants.has('top-right-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-left-fwd', { 'is-animating': activeVariants.has('bottom-left-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-left-bck', { 'is-animating': activeVariants.has('bottom-left-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Bottom-Right & Top-Left (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-right-fwd', { 'is-animating': activeVariants.has('bottom-right-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-right-bck', { 'is-animating': activeVariants.has('bottom-right-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-left-fwd', { 'is-animating': activeVariants.has('top-left-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-left-bck', { 'is-animating': activeVariants.has('top-left-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SwingVariant
  = 'top-fwd' | 'top-bck' | 'top-right-fwd' | 'top-right-bck'
    | 'right-fwd' | 'right-bck' | 'bottom-right-fwd' | 'bottom-right-bck'
    | 'bottom-fwd' | 'bottom-bck' | 'bottom-left-fwd' | 'bottom-left-bck'
    | 'left-fwd' | 'left-bck' | 'top-left-fwd' | 'top-left-bck'

const allVariants: SwingVariant[] = [
  'top-fwd', 'top-bck',
  'bottom-fwd', 'bottom-bck',
  'right-fwd', 'right-bck',
  'left-fwd', 'left-bck',
  'top-right-fwd', 'top-right-bck',
  'bottom-left-fwd', 'bottom-left-bck',
  'bottom-right-fwd', 'bottom-right-bck',
  'top-left-fwd', 'top-left-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SwingVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Swing Card Container
// ============================================
.demo-box.swing-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

.front-text,
.back-text {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

// ============================================
// Top & Bottom (4 patterns)
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.swing-card.variant-top-fwd { @include anim.swing('top-fwd', 0.4s); }
  .demo-box.swing-card.variant-top-bck { @include anim.swing('top-bck', 0.4s); }
  .demo-box.swing-card.variant-bottom-fwd { @include anim.swing('bottom-fwd', 0.4s); }
  .demo-box.swing-card.variant-bottom-bck { @include anim.swing('bottom-bck', 0.4s); }
  .demo-box.swing-card.variant-right-fwd { @include anim.swing('right-fwd', 0.4s); }
  .demo-box.swing-card.variant-right-bck { @include anim.swing('right-bck', 0.4s); }
  .demo-box.swing-card.variant-left-fwd { @include anim.swing('left-fwd', 0.4s); }
  .demo-box.swing-card.variant-left-bck { @include anim.swing('left-bck', 0.4s); }
  .demo-box.swing-card.variant-top-right-fwd { @include anim.swing('top-right-fwd', 0.4s); }
  .demo-box.swing-card.variant-top-right-bck { @include anim.swing('top-right-bck', 0.4s); }
  .demo-box.swing-card.variant-bottom-left-fwd { @include anim.swing('bottom-left-fwd', 0.4s); }
  .demo-box.swing-card.variant-bottom-left-bck { @include anim.swing('bottom-left-bck', 0.4s); }
  .demo-box.swing-card.variant-bottom-right-fwd { @include anim.swing('bottom-right-fwd', 0.4s); }
  .demo-box.swing-card.variant-bottom-right-bck { @include anim.swing('bottom-right-bck', 0.4s); }
  .demo-box.swing-card.variant-top-left-fwd { @include anim.swing('top-left-fwd', 0.4s); }
  .demo-box.swing-card.variant-top-left-bck { @include anim.swing('top-left-bck', 0.4s); }
}

.variant-top-fwd.is-animating { @include anim.swing('top-fwd', 0.4s); }

.variant-top-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-bck.is-animating { @include anim.swing('top-bck', 0.4s); }

.variant-top-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-fwd.is-animating { @include anim.swing('bottom-fwd', 0.4s); }

.variant-bottom-fwd .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-bck.is-animating { @include anim.swing('bottom-bck', 0.4s); }

.variant-bottom-bck .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Right & Left (4 patterns)
// ============================================
.variant-right-fwd.is-animating { @include anim.swing('right-fwd', 0.4s); }

.variant-right-fwd .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-right-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-right-bck.is-animating { @include anim.swing('right-bck', 0.4s); }

.variant-right-bck .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-right-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-fwd.is-animating { @include anim.swing('left-fwd', 0.4s); }

.variant-left-fwd .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-bck.is-animating { @include anim.swing('left-bck', 0.4s); }

.variant-left-bck .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal (8 patterns)
// ============================================
.variant-top-right-fwd.is-animating { @include anim.swing('top-right-fwd', 0.4s); }

.variant-top-right-fwd .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-right-fwd .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-right-bck.is-animating { @include anim.swing('top-right-bck', 0.4s); }

.variant-top-right-bck .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-right-bck .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-fwd.is-animating { @include anim.swing('bottom-left-fwd', 0.4s); }

.variant-bottom-left-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-fwd .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-bck.is-animating { @include anim.swing('bottom-left-bck', 0.4s); }

.variant-bottom-left-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-bck .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-fwd.is-animating { @include anim.swing('bottom-right-fwd', 0.4s); }

.variant-bottom-right-fwd .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-fwd .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-bck.is-animating { @include anim.swing('bottom-right-bck', 0.4s); }

.variant-bottom-right-bck .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-bck .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-fwd.is-animating { @include anim.swing('top-left-fwd', 0.4s); }

.variant-top-left-fwd .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-fwd .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-bck.is-animating { @include anim.swing('top-left-bck', 0.4s); }

.variant-top-left-bck .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-bck .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-swing {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSwingIn.vue
````vue
<template>
  <div class="ho-animista-swing-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Swing In Animations
    </h1>

    <p class="demo-description">
      8種類のスイング入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Top Swing (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                top-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                top-bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Right Swing (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                right-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                right-bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Bottom Swing (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                bottom-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                bottom-bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Left Swing (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                left-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                left-bck
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SwingInVariant = 'top-fwd' | 'top-bck' | 'right-fwd' | 'right-bck' | 'bottom-fwd' | 'bottom-bck' | 'left-fwd' | 'left-bck'

const allVariants: SwingInVariant[] = [
  'top-fwd',
  'top-bck',
  'right-fwd',
  'right-bck',
  'bottom-fwd',
  'bottom-bck',
  'left-fwd',
  'left-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SwingInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 120)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top-fwd { @include anim.swing-in('top-fwd', 0.6s); }
  .demo-box.variant-top-bck { @include anim.swing-in('top-bck', 0.6s); }
  .demo-box.variant-right-fwd { @include anim.swing-in('right-fwd', 0.6s); }
  .demo-box.variant-right-bck { @include anim.swing-in('right-bck', 0.6s); }
  .demo-box.variant-bottom-fwd { @include anim.swing-in('bottom-fwd', 0.6s); }
  .demo-box.variant-bottom-bck { @include anim.swing-in('bottom-bck', 0.6s); }
  .demo-box.variant-left-fwd { @include anim.swing-in('left-fwd', 0.6s); }
  .demo-box.variant-left-bck { @include anim.swing-in('left-bck', 0.6s); }
}

// Top Swing (2 patterns)
.variant-top-fwd.is-animating { @include anim.swing-in('top-fwd', 0.6s); }
.variant-top-bck.is-animating { @include anim.swing-in('top-bck', 0.6s); }

// Right Swing (2 patterns)
.variant-right-fwd.is-animating { @include anim.swing-in('right-fwd', 0.6s); }
.variant-right-bck.is-animating { @include anim.swing-in('right-bck', 0.6s); }

// Bottom Swing (2 patterns)
.variant-bottom-fwd.is-animating { @include anim.swing-in('bottom-fwd', 0.6s); }
.variant-bottom-bck.is-animating { @include anim.swing-in('bottom-bck', 0.6s); }

// Left Swing (2 patterns)
.variant-left-fwd.is-animating { @include anim.swing-in('left-fwd', 0.6s); }
.variant-left-bck.is-animating { @include anim.swing-in('left-bck', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-swing-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #38bdf8;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #38bdf8;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSwingOut.vue
````vue
<template>
  <div class="ho-animista-swing-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Swing Out Animations
    </h1>

    <p class="demo-description">
      8種類のスイング退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Directional Swings (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                top-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                top-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                right-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                right-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                bottom-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                bottom-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                left-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                left-fwd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SwingOutVariant
  = | 'top-bck'
    | 'top-fwd'
    | 'right-bck'
    | 'right-fwd'
    | 'bottom-bck'
    | 'bottom-fwd'
    | 'left-bck'
    | 'left-fwd'

const allVariants: SwingOutVariant[] = [
  'top-bck',
  'top-fwd',
  'right-bck',
  'right-fwd',
  'bottom-bck',
  'bottom-fwd',
  'left-bck',
  'left-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SwingOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top-bck { @include anim.swing-out('top-bck', 0.45s); }
  .demo-box.variant-top-fwd { @include anim.swing-out('top-fwd', 0.45s); }
  .demo-box.variant-right-bck { @include anim.swing-out('right-bck', 0.45s); }
  .demo-box.variant-right-fwd { @include anim.swing-out('right-fwd', 0.45s); }
  .demo-box.variant-bottom-bck { @include anim.swing-out('bottom-bck', 0.45s); }
  .demo-box.variant-bottom-fwd { @include anim.swing-out('bottom-fwd', 0.45s); }
  .demo-box.variant-left-bck { @include anim.swing-out('left-bck', 0.45s); }
  .demo-box.variant-left-fwd { @include anim.swing-out('left-fwd', 0.45s); }
}

// Directional Swings (8 patterns)
.variant-top-bck.is-animating { @include anim.swing-out('top-bck', 0.45s); }
.variant-top-fwd.is-animating { @include anim.swing-out('top-fwd', 0.45s); }
.variant-right-bck.is-animating { @include anim.swing-out('right-bck', 0.45s); }
.variant-right-fwd.is-animating { @include anim.swing-out('right-fwd', 0.45s); }
.variant-bottom-bck.is-animating { @include anim.swing-out('bottom-bck', 0.45s); }
.variant-bottom-fwd.is-animating { @include anim.swing-out('bottom-fwd', 0.45s); }
.variant-left-bck.is-animating { @include anim.swing-out('left-bck', 0.45s); }
.variant-left-fwd.is-animating { @include anim.swing-out('left-fwd', 0.45s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-swing-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #84cc16;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #84cc16;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSwirlIn.vue
````vue
<template>
  <div class="ho-animista-swirl-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Swirl In Animations
    </h1>

    <p class="demo-description">
      18種類のスワール入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic Forward/Backward (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Directional (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                top-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                top-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                right-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                right-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                bottom-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                bottom-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                left-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                left-bck
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-fwd', { 'is-animating': activeVariants.has('tr-fwd') }]">
                tr-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-bck', { 'is-animating': activeVariants.has('tr-bck') }]">
                tr-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-fwd', { 'is-animating': activeVariants.has('br-fwd') }]">
                br-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-bck', { 'is-animating': activeVariants.has('br-bck') }]">
                br-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-fwd', { 'is-animating': activeVariants.has('bl-fwd') }]">
                bl-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-bck', { 'is-animating': activeVariants.has('bl-bck') }]">
                bl-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-fwd', { 'is-animating': activeVariants.has('tl-fwd') }]">
                tl-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-bck', { 'is-animating': activeVariants.has('tl-bck') }]">
                tl-bck
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SwirlInVariant = 'fwd' | 'bck' | 'top-fwd' | 'top-bck' | 'right-fwd' | 'right-bck' | 'bottom-fwd' | 'bottom-bck' | 'left-fwd' | 'left-bck' | 'tr-fwd' | 'tr-bck' | 'br-fwd' | 'br-bck' | 'bl-fwd' | 'bl-bck' | 'tl-fwd' | 'tl-bck'

const allVariants: SwirlInVariant[] = [
  'fwd',
  'bck',
  'top-fwd',
  'top-bck',
  'right-fwd',
  'right-bck',
  'bottom-fwd',
  'bottom-bck',
  'left-fwd',
  'left-bck',
  'tr-fwd',
  'tr-bck',
  'br-fwd',
  'br-bck',
  'bl-fwd',
  'bl-bck',
  'tl-fwd',
  'tl-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SwirlInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-fwd { @include anim.swirl-in('fwd', 0.6s); }
  .demo-box.variant-bck { @include anim.swirl-in('bck', 0.6s); }
  .demo-box.variant-top-fwd { @include anim.swirl-in('top-fwd', 0.6s); }
  .demo-box.variant-top-bck { @include anim.swirl-in('top-bck', 0.6s); }
  .demo-box.variant-right-fwd { @include anim.swirl-in('right-fwd', 0.6s); }
  .demo-box.variant-right-bck { @include anim.swirl-in('right-bck', 0.6s); }
  .demo-box.variant-bottom-fwd { @include anim.swirl-in('bottom-fwd', 0.6s); }
  .demo-box.variant-bottom-bck { @include anim.swirl-in('bottom-bck', 0.6s); }
  .demo-box.variant-left-fwd { @include anim.swirl-in('left-fwd', 0.6s); }
  .demo-box.variant-left-bck { @include anim.swirl-in('left-bck', 0.6s); }
  .demo-box.variant-tr-fwd { @include anim.swirl-in('tr-fwd', 0.6s); }
  .demo-box.variant-tr-bck { @include anim.swirl-in('tr-bck', 0.6s); }
  .demo-box.variant-br-fwd { @include anim.swirl-in('br-fwd', 0.6s); }
  .demo-box.variant-br-bck { @include anim.swirl-in('br-bck', 0.6s); }
  .demo-box.variant-bl-fwd { @include anim.swirl-in('bl-fwd', 0.6s); }
  .demo-box.variant-bl-bck { @include anim.swirl-in('bl-bck', 0.6s); }
  .demo-box.variant-tl-fwd { @include anim.swirl-in('tl-fwd', 0.6s); }
  .demo-box.variant-tl-bck { @include anim.swirl-in('tl-bck', 0.6s); }
}

// Basic Forward/Backward (2 patterns)
.variant-fwd.is-animating { @include anim.swirl-in('fwd', 0.6s); }
.variant-bck.is-animating { @include anim.swirl-in('bck', 0.6s); }

// Directional (8 patterns)
.variant-top-fwd.is-animating { @include anim.swirl-in('top-fwd', 0.6s); }
.variant-top-bck.is-animating { @include anim.swirl-in('top-bck', 0.6s); }
.variant-right-fwd.is-animating { @include anim.swirl-in('right-fwd', 0.6s); }
.variant-right-bck.is-animating { @include anim.swirl-in('right-bck', 0.6s); }
.variant-bottom-fwd.is-animating { @include anim.swirl-in('bottom-fwd', 0.6s); }
.variant-bottom-bck.is-animating { @include anim.swirl-in('bottom-bck', 0.6s); }
.variant-left-fwd.is-animating { @include anim.swirl-in('left-fwd', 0.6s); }
.variant-left-bck.is-animating { @include anim.swirl-in('left-bck', 0.6s); }

// Diagonal (8 patterns)
.variant-tr-fwd.is-animating { @include anim.swirl-in('tr-fwd', 0.6s); }
.variant-tr-bck.is-animating { @include anim.swirl-in('tr-bck', 0.6s); }
.variant-br-fwd.is-animating { @include anim.swirl-in('br-fwd', 0.6s); }
.variant-br-bck.is-animating { @include anim.swirl-in('br-bck', 0.6s); }
.variant-bl-fwd.is-animating { @include anim.swirl-in('bl-fwd', 0.6s); }
.variant-bl-bck.is-animating { @include anim.swirl-in('bl-bck', 0.6s); }
.variant-tl-fwd.is-animating { @include anim.swirl-in('tl-fwd', 0.6s); }
.variant-tl-bck.is-animating { @include anim.swirl-in('tl-bck', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-swirl-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #ec4899;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #ec4899;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaSwirlOut.vue
````vue
<template>
  <div class="ho-animista-swirl-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Swirl Out Animations
    </h1>

    <p class="demo-description">
      18種類の回転とスケールを組み合わせた退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Basic (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Directional Swirls (16 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                top-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                top-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-bck', { 'is-animating': activeVariants.has('tr-bck') }]">
                tr-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-fwd', { 'is-animating': activeVariants.has('tr-fwd') }]">
                tr-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                right-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                right-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-bck', { 'is-animating': activeVariants.has('br-bck') }]">
                br-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-fwd', { 'is-animating': activeVariants.has('br-fwd') }]">
                br-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                bottom-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                bottom-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-bck', { 'is-animating': activeVariants.has('bl-bck') }]">
                bl-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-fwd', { 'is-animating': activeVariants.has('bl-fwd') }]">
                bl-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                left-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                left-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-bck', { 'is-animating': activeVariants.has('tl-bck') }]">
                tl-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-fwd', { 'is-animating': activeVariants.has('tl-fwd') }]">
                tl-fwd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SwirlOutVariant
  = | 'bck'
    | 'fwd'
    | 'top-bck'
    | 'top-fwd'
    | 'tr-bck'
    | 'tr-fwd'
    | 'right-bck'
    | 'right-fwd'
    | 'br-bck'
    | 'br-fwd'
    | 'bottom-bck'
    | 'bottom-fwd'
    | 'bl-bck'
    | 'bl-fwd'
    | 'left-bck'
    | 'left-fwd'
    | 'tl-bck'
    | 'tl-fwd'

const allVariants: SwirlOutVariant[] = [
  'bck',
  'fwd',
  'top-bck',
  'top-fwd',
  'tr-bck',
  'tr-fwd',
  'right-bck',
  'right-fwd',
  'br-bck',
  'br-fwd',
  'bottom-bck',
  'bottom-fwd',
  'bl-bck',
  'bl-fwd',
  'left-bck',
  'left-fwd',
  'tl-bck',
  'tl-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SwirlOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-bck { @include anim.swirl-out('bck', 0.6s); }
  .demo-box.variant-fwd { @include anim.swirl-out('fwd', 0.6s); }
  .demo-box.variant-top-bck { @include anim.swirl-out('top-bck', 0.6s); }
  .demo-box.variant-top-fwd { @include anim.swirl-out('top-fwd', 0.6s); }
  .demo-box.variant-tr-bck { @include anim.swirl-out('tr-bck', 0.6s); }
  .demo-box.variant-tr-fwd { @include anim.swirl-out('tr-fwd', 0.6s); }
  .demo-box.variant-right-bck { @include anim.swirl-out('right-bck', 0.6s); }
  .demo-box.variant-right-fwd { @include anim.swirl-out('right-fwd', 0.6s); }
  .demo-box.variant-br-bck { @include anim.swirl-out('br-bck', 0.6s); }
  .demo-box.variant-br-fwd { @include anim.swirl-out('br-fwd', 0.6s); }
  .demo-box.variant-bottom-bck { @include anim.swirl-out('bottom-bck', 0.6s); }
  .demo-box.variant-bottom-fwd { @include anim.swirl-out('bottom-fwd', 0.6s); }
  .demo-box.variant-bl-bck { @include anim.swirl-out('bl-bck', 0.6s); }
  .demo-box.variant-bl-fwd { @include anim.swirl-out('bl-fwd', 0.6s); }
  .demo-box.variant-left-bck { @include anim.swirl-out('left-bck', 0.6s); }
  .demo-box.variant-left-fwd { @include anim.swirl-out('left-fwd', 0.6s); }
  .demo-box.variant-tl-bck { @include anim.swirl-out('tl-bck', 0.6s); }
  .demo-box.variant-tl-fwd { @include anim.swirl-out('tl-fwd', 0.6s); }
}

// Basic (2 patterns)
.variant-bck.is-animating { @include anim.swirl-out('bck', 0.6s); }
.variant-fwd.is-animating { @include anim.swirl-out('fwd', 0.6s); }

// Directional Swirls (16 patterns)
.variant-top-bck.is-animating { @include anim.swirl-out('top-bck', 0.6s); }
.variant-top-fwd.is-animating { @include anim.swirl-out('top-fwd', 0.6s); }
.variant-tr-bck.is-animating { @include anim.swirl-out('tr-bck', 0.6s); }
.variant-tr-fwd.is-animating { @include anim.swirl-out('tr-fwd', 0.6s); }
.variant-right-bck.is-animating { @include anim.swirl-out('right-bck', 0.6s); }
.variant-right-fwd.is-animating { @include anim.swirl-out('right-fwd', 0.6s); }
.variant-br-bck.is-animating { @include anim.swirl-out('br-bck', 0.6s); }
.variant-br-fwd.is-animating { @include anim.swirl-out('br-fwd', 0.6s); }
.variant-bottom-bck.is-animating { @include anim.swirl-out('bottom-bck', 0.6s); }
.variant-bottom-fwd.is-animating { @include anim.swirl-out('bottom-fwd', 0.6s); }
.variant-bl-bck.is-animating { @include anim.swirl-out('bl-bck', 0.6s); }
.variant-bl-fwd.is-animating { @include anim.swirl-out('bl-fwd', 0.6s); }
.variant-left-bck.is-animating { @include anim.swirl-out('left-bck', 0.6s); }
.variant-left-fwd.is-animating { @include anim.swirl-out('left-fwd', 0.6s); }
.variant-tl-bck.is-animating { @include anim.swirl-out('tl-bck', 0.6s); }
.variant-tl-fwd.is-animating { @include anim.swirl-out('tl-fwd', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-swirl-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #10b981;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #10b981;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #10b981 0%, #059669 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaTextPopUp.vue
````vue
<template>
  <div class="ho-animista-text-pop-up">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Text Pop-Up Animations
    </h1>

    <p class="demo-description">
      8種類のテキストポップアップアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Text Pop-Up (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                TR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                RIGHT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                BR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                BOTTOM
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                BL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                LEFT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                TL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type PopUpVariant
  = | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: PopUpVariant[] = [
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<PopUpVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-top { @include anim.text-pop-up('top', 0.5s); }
  .demo-text.variant-tr { @include anim.text-pop-up('tr', 0.5s); }
  .demo-text.variant-right { @include anim.text-pop-up('right', 0.5s); }
  .demo-text.variant-br { @include anim.text-pop-up('br', 0.5s); }
  .demo-text.variant-bottom { @include anim.text-pop-up('bottom', 0.5s); }
  .demo-text.variant-bl { @include anim.text-pop-up('bl', 0.5s); }
  .demo-text.variant-left { @include anim.text-pop-up('left', 0.5s); }
  .demo-text.variant-tl { @include anim.text-pop-up('tl', 0.5s); }
}

// Text Pop-Up Variations (8 patterns)
.variant-top.is-animating { @include anim.text-pop-up('top', 0.5s); }
.variant-tr.is-animating { @include anim.text-pop-up('tr', 0.5s); }
.variant-right.is-animating { @include anim.text-pop-up('right', 0.5s); }
.variant-br.is-animating { @include anim.text-pop-up('br', 0.5s); }
.variant-bottom.is-animating { @include anim.text-pop-up('bottom', 0.5s); }
.variant-bl.is-animating { @include anim.text-pop-up('bl', 0.5s); }
.variant-left.is-animating { @include anim.text-pop-up('left', 0.5s); }
.variant-tl.is-animating { @include anim.text-pop-up('tl', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-text-pop-up {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #06b6d4;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaTextShadowDrop.vue
````vue
<template>
  <div class="ho-animista-text-shadow-drop">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Text Shadow Drop Animations
    </h1>

    <p class="demo-description">
      9種類のテキストシャドウドロップアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Text Shadow Drop (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                CENTER
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                TR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                RIGHT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                BR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                BOTTOM
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                BL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                LEFT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                TL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ShadowDropVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: ShadowDropVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ShadowDropVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-center { @include anim.text-shadow-drop('center', 0.6s); }
  .demo-text.variant-top { @include anim.text-shadow-drop('top', 0.6s); }
  .demo-text.variant-tr { @include anim.text-shadow-drop('tr', 0.6s); }
  .demo-text.variant-right { @include anim.text-shadow-drop('right', 0.6s); }
  .demo-text.variant-br { @include anim.text-shadow-drop('br', 0.6s); }
  .demo-text.variant-bottom { @include anim.text-shadow-drop('bottom', 0.6s); }
  .demo-text.variant-bl { @include anim.text-shadow-drop('bl', 0.6s); }
  .demo-text.variant-left { @include anim.text-shadow-drop('left', 0.6s); }
  .demo-text.variant-tl { @include anim.text-shadow-drop('tl', 0.6s); }
}

// Text Shadow Drop Variations (9 patterns)
.variant-center.is-animating { @include anim.text-shadow-drop('center', 0.6s); }
.variant-top.is-animating { @include anim.text-shadow-drop('top', 0.6s); }
.variant-tr.is-animating { @include anim.text-shadow-drop('tr', 0.6s); }
.variant-right.is-animating { @include anim.text-shadow-drop('right', 0.6s); }
.variant-br.is-animating { @include anim.text-shadow-drop('br', 0.6s); }
.variant-bottom.is-animating { @include anim.text-shadow-drop('bottom', 0.6s); }
.variant-bl.is-animating { @include anim.text-shadow-drop('bl', 0.6s); }
.variant-left.is-animating { @include anim.text-shadow-drop('left', 0.6s); }
.variant-tl.is-animating { @include anim.text-shadow-drop('tl', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-text-shadow-drop {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #ef4444;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaTextShadowPop.vue
````vue
<template>
  <div class="ho-animista-text-shadow-pop">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Text Shadow Pop Animations
    </h1>

    <p class="demo-description">
      8種類のテキストシャドウポップアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Text Shadow Pop (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                TR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                RIGHT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                BR
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                BOTTOM
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                BL
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                LEFT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                TL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ShadowPopVariant
  = | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'

const allVariants: ShadowPopVariant[] = [
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<ShadowPopVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-top { @include anim.text-shadow-pop('top', 0.6s); }
  .demo-text.variant-tr { @include anim.text-shadow-pop('tr', 0.6s); }
  .demo-text.variant-right { @include anim.text-shadow-pop('right', 0.6s); }
  .demo-text.variant-br { @include anim.text-shadow-pop('br', 0.6s); }
  .demo-text.variant-bottom { @include anim.text-shadow-pop('bottom', 0.6s); }
  .demo-text.variant-bl { @include anim.text-shadow-pop('bl', 0.6s); }
  .demo-text.variant-left { @include anim.text-shadow-pop('left', 0.6s); }
  .demo-text.variant-tl { @include anim.text-shadow-pop('tl', 0.6s); }
}

// Text Shadow Pop Variations (8 patterns)
.variant-top.is-animating { @include anim.text-shadow-pop('top', 0.6s); }
.variant-tr.is-animating { @include anim.text-shadow-pop('tr', 0.6s); }
.variant-right.is-animating { @include anim.text-shadow-pop('right', 0.6s); }
.variant-br.is-animating { @include anim.text-shadow-pop('br', 0.6s); }
.variant-bottom.is-animating { @include anim.text-shadow-pop('bottom', 0.6s); }
.variant-bl.is-animating { @include anim.text-shadow-pop('bl', 0.6s); }
.variant-left.is-animating { @include anim.text-shadow-pop('left', 0.6s); }
.variant-tl.is-animating { @include anim.text-shadow-pop('tl', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-text-shadow-pop {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #f97316;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaTiltIn.vue
````vue
<template>
  <div class="ho-animista-tilt-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Tilt In Animations
    </h1>

    <p class="demo-description">
      12種類のティルト入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Top Variations (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-1', { 'is-animating': activeVariants.has('top-1') }]">
                top-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-2', { 'is-animating': activeVariants.has('top-2') }]">
                top-2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Right Variations (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-1', { 'is-animating': activeVariants.has('right-1') }]">
                right-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-2', { 'is-animating': activeVariants.has('right-2') }]">
                right-2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Bottom Variations (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-1', { 'is-animating': activeVariants.has('bottom-1') }]">
                bottom-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-2', { 'is-animating': activeVariants.has('bottom-2') }]">
                bottom-2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Left Variations (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-1', { 'is-animating': activeVariants.has('left-1') }]">
                left-1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-2', { 'is-animating': activeVariants.has('left-2') }]">
                left-2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type TiltInVariant = 'tr' | 'br' | 'bl' | 'tl' | 'top-1' | 'top-2' | 'right-1' | 'right-2' | 'bottom-1' | 'bottom-2' | 'left-1' | 'left-2'

const allVariants: TiltInVariant[] = [
  'tr',
  'br',
  'bl',
  'tl',
  'top-1',
  'top-2',
  'right-1',
  'right-2',
  'bottom-1',
  'bottom-2',
  'left-1',
  'left-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<TiltInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-tr { @include anim.tilt-in('tr', 0.6s); }
  .demo-box.variant-br { @include anim.tilt-in('br', 0.6s); }
  .demo-box.variant-bl { @include anim.tilt-in('bl', 0.6s); }
  .demo-box.variant-tl { @include anim.tilt-in('tl', 0.6s); }
  .demo-box.variant-top-1 { @include anim.tilt-in('top-1', 0.6s); }
  .demo-box.variant-top-2 { @include anim.tilt-in('top-2', 0.6s); }
  .demo-box.variant-right-1 { @include anim.tilt-in('right-1', 0.6s); }
  .demo-box.variant-right-2 { @include anim.tilt-in('right-2', 0.6s); }
  .demo-box.variant-bottom-1 { @include anim.tilt-in('bottom-1', 0.6s); }
  .demo-box.variant-bottom-2 { @include anim.tilt-in('bottom-2', 0.6s); }
  .demo-box.variant-left-1 { @include anim.tilt-in('left-1', 0.6s); }
  .demo-box.variant-left-2 { @include anim.tilt-in('left-2', 0.6s); }
}

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.tilt-in('tr', 0.6s); }
.variant-br.is-animating { @include anim.tilt-in('br', 0.6s); }
.variant-bl.is-animating { @include anim.tilt-in('bl', 0.6s); }
.variant-tl.is-animating { @include anim.tilt-in('tl', 0.6s); }

// Top Variations (2 patterns)
.variant-top-1.is-animating { @include anim.tilt-in('top-1', 0.6s); }
.variant-top-2.is-animating { @include anim.tilt-in('top-2', 0.6s); }

// Right Variations (2 patterns)
.variant-right-1.is-animating { @include anim.tilt-in('right-1', 0.6s); }
.variant-right-2.is-animating { @include anim.tilt-in('right-2', 0.6s); }

// Bottom Variations (2 patterns)
.variant-bottom-1.is-animating { @include anim.tilt-in('bottom-1', 0.6s); }
.variant-bottom-2.is-animating { @include anim.tilt-in('bottom-2', 0.6s); }

// Left Variations (2 patterns)
.variant-left-1.is-animating { @include anim.tilt-in('left-1', 0.6s); }
.variant-left-2.is-animating { @include anim.tilt-in('left-2', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-tilt-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #c084fc 0%, #a855f7 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #c084fc;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #c084fc;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #c084fc 0%, #a855f7 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaTiltInFwd.vue
````vue
<template>
  <div class="ho-animista-tilt-in-fwd">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Tilt In Forward Animations
    </h1>

    <p class="demo-description">
      4種類の前方ティルト入場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type TiltInFwdVariant = 'tr' | 'br' | 'bl' | 'tl'

const allVariants: TiltInFwdVariant[] = [
  'tr',
  'br',
  'bl',
  'tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<TiltInFwdVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-tr { @include anim.tilt-in-fwd('tr', 0.6s); }
  .demo-box.variant-br { @include anim.tilt-in-fwd('br', 0.6s); }
  .demo-box.variant-bl { @include anim.tilt-in-fwd('bl', 0.6s); }
  .demo-box.variant-tl { @include anim.tilt-in-fwd('tl', 0.6s); }
}

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.tilt-in-fwd('tr', 0.6s); }
.variant-br.is-animating { @include anim.tilt-in-fwd('br', 0.6s); }
.variant-bl.is-animating { @include anim.tilt-in-fwd('bl', 0.6s); }
.variant-tl.is-animating { @include anim.tilt-in-fwd('tl', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-tilt-in-fwd {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #4ade80;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #4ade80;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaTrackingIn.vue
````vue
<template>
  <div class="ho-animista-tracking-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Tracking In Animations
    </h1>

    <p class="demo-description">
      8種類の文字間隔変化アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Tracking In Expand (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand', { 'is-animating': activeVariants.has('expand') }]">
                EXPAND
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd', { 'is-animating': activeVariants.has('expand-fwd') }]">
                EXPAND FWD
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd-top', { 'is-animating': activeVariants.has('expand-fwd-top') }]">
                EXPAND FWD TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd-bottom', { 'is-animating': activeVariants.has('expand-fwd-bottom') }]">
                EXPAND FWD BOTTOM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation-section">
        <h2 class="section-title">
          Tracking In Contract (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract', { 'is-animating': activeVariants.has('contract') }]">
                CONTRACT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck', { 'is-animating': activeVariants.has('contract-bck') }]">
                CONTRACT BCK
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck-top', { 'is-animating': activeVariants.has('contract-bck-top') }]">
                CONTRACT BCK TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck-bottom', { 'is-animating': activeVariants.has('contract-bck-bottom') }]">
                CONTRACT BCK BOTTOM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type TrackingInVariant
  = | 'expand'
    | 'expand-fwd'
    | 'expand-fwd-top'
    | 'expand-fwd-bottom'
    | 'contract'
    | 'contract-bck'
    | 'contract-bck-top'
    | 'contract-bck-bottom'

const allVariants: TrackingInVariant[] = [
  'expand',
  'expand-fwd',
  'expand-fwd-top',
  'expand-fwd-bottom',
  'contract',
  'contract-bck',
  'contract-bck-top',
  'contract-bck-bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<TrackingInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-expand { @include anim.tracking-in('expand', 0.7s); }
  .demo-text.variant-expand-fwd { @include anim.tracking-in('expand-fwd', 1s); }
  .demo-text.variant-expand-fwd-top { @include anim.tracking-in('expand-fwd-top', 1s); }
  .demo-text.variant-expand-fwd-bottom { @include anim.tracking-in('expand-fwd-bottom', 1s); }
  .demo-text.variant-contract { @include anim.tracking-in('contract', 0.7s); }
  .demo-text.variant-contract-bck { @include anim.tracking-in('contract-bck', 1s); }
  .demo-text.variant-contract-bck-top { @include anim.tracking-in('contract-bck-top', 1s); }
  .demo-text.variant-contract-bck-bottom { @include anim.tracking-in('contract-bck-bottom', 1s); }
}

// Tracking In Expand Variations (4 patterns)
.variant-expand.is-animating { @include anim.tracking-in('expand', 0.7s); }
.variant-expand-fwd.is-animating { @include anim.tracking-in('expand-fwd', 1s); }
.variant-expand-fwd-top.is-animating { @include anim.tracking-in('expand-fwd-top', 1s); }
.variant-expand-fwd-bottom.is-animating { @include anim.tracking-in('expand-fwd-bottom', 1s); }

// Tracking In Contract Variations (4 patterns)
.variant-contract.is-animating { @include anim.tracking-in('contract', 0.7s); }
.variant-contract-bck.is-animating { @include anim.tracking-in('contract-bck', 1s); }
.variant-contract-bck-top.is-animating { @include anim.tracking-in('contract-bck-top', 1s); }
.variant-contract-bck-bottom.is-animating { @include anim.tracking-in('contract-bck-bottom', 1s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-tracking-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #ec4899;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaTrackingOut.vue
````vue
<template>
  <div class="ho-animista-tracking-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Tracking Out Animations
    </h1>

    <p class="demo-description">
      8種類の文字間隔変化退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Tracking Out Contract (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract', { 'is-animating': activeVariants.has('contract') }]">
                CONTRACT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck', { 'is-animating': activeVariants.has('contract-bck') }]">
                CONTRACT BCK
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck-top', { 'is-animating': activeVariants.has('contract-bck-top') }]">
                CONTRACT BCK TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck-bottom', { 'is-animating': activeVariants.has('contract-bck-bottom') }]">
                CONTRACT BCK BOTTOM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation-section">
        <h2 class="section-title">
          Tracking Out Expand (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand', { 'is-animating': activeVariants.has('expand') }]">
                EXPAND
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd', { 'is-animating': activeVariants.has('expand-fwd') }]">
                EXPAND FWD
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd-top', { 'is-animating': activeVariants.has('expand-fwd-top') }]">
                EXPAND FWD TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd-bottom', { 'is-animating': activeVariants.has('expand-fwd-bottom') }]">
                EXPAND FWD BOTTOM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type TrackingOutVariant
  = | 'contract'
    | 'contract-bck'
    | 'contract-bck-top'
    | 'contract-bck-bottom'
    | 'expand'
    | 'expand-fwd'
    | 'expand-fwd-top'
    | 'expand-fwd-bottom'

const allVariants: TrackingOutVariant[] = [
  'contract',
  'contract-bck',
  'contract-bck-top',
  'contract-bck-bottom',
  'expand',
  'expand-fwd',
  'expand-fwd-top',
  'expand-fwd-bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<TrackingOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-contract { @include anim.tracking-out('contract', 0.7s); }
  .demo-text.variant-contract-bck { @include anim.tracking-out('contract-bck', 1s); }
  .demo-text.variant-contract-bck-top { @include anim.tracking-out('contract-bck-top', 1s); }
  .demo-text.variant-contract-bck-bottom { @include anim.tracking-out('contract-bck-bottom', 1s); }
  .demo-text.variant-expand { @include anim.tracking-out('expand', 0.7s); }
  .demo-text.variant-expand-fwd { @include anim.tracking-out('expand-fwd', 1s); }
  .demo-text.variant-expand-fwd-top { @include anim.tracking-out('expand-fwd-top', 1s); }
  .demo-text.variant-expand-fwd-bottom { @include anim.tracking-out('expand-fwd-bottom', 1s); }
}

// Tracking Out Contract Variations (4 patterns)
.variant-contract.is-animating { @include anim.tracking-out('contract', 0.7s); }
.variant-contract-bck.is-animating { @include anim.tracking-out('contract-bck', 1s); }
.variant-contract-bck-top.is-animating { @include anim.tracking-out('contract-bck-top', 1s); }
.variant-contract-bck-bottom.is-animating { @include anim.tracking-out('contract-bck-bottom', 1s); }

// Tracking Out Expand Variations (4 patterns)
.variant-expand.is-animating { @include anim.tracking-out('expand', 0.7s); }
.variant-expand-fwd.is-animating { @include anim.tracking-out('expand-fwd', 1s); }
.variant-expand-fwd-top.is-animating { @include anim.tracking-out('expand-fwd-top', 1s); }
.variant-expand-fwd-bottom.is-animating { @include anim.tracking-out('expand-fwd-bottom', 1s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-tracking-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #10b981;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaVibrate.vue
````vue
<template>
  <div class="ho-animista-vibrate">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Vibrate Animations
    </h1>

    <p class="demo-description">
      3種類のバイブレーションアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Vibrate (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-1', { 'is-animating': activeVariants.has('1') }]">
                VIBRATE 1
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-2', { 'is-animating': activeVariants.has('2') }]">
                VIBRATE 2
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-3', { 'is-animating': activeVariants.has('3') }]">
                VIBRATE 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type VibrateVariant = '1' | '2' | '3'

const allVariants: VibrateVariant[] = ['1', '2', '3']

const isHoverMode = ref(false)
const activeVariants = ref<Set<VibrateVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-1 { @include anim.vibrate('1', 0.3s); }
  .demo-box.variant-2 { @include anim.vibrate('2', 0.3s); }
  .demo-box.variant-3 { @include anim.vibrate('3', 0.3s); }
}

// Vibrate Variations (3 patterns)
.variant-1.is-animating { @include anim.vibrate('1', 0.3s); }
.variant-2.is-animating { @include anim.vibrate('2', 0.3s); }
.variant-3.is-animating { @include anim.vibrate('3', 0.3s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-vibrate {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  border-radius: 16px;

  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #f59e0b;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/app/components/ho/animista/HoAnimistaWobble.vue
````vue
<template>
  <div class="ho-animista-wobble">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Wobble Animations
    </h1>

    <p class="demo-description">
      4種類のウォブルアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Wobble (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
                HOR BOTTOM
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
                HOR TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-left', { 'is-animating': activeVariants.has('ver-left') }]">
                VER LEFT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-right', { 'is-animating': activeVariants.has('ver-right') }]">
                VER RIGHT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type WobbleVariant = 'hor-bottom' | 'hor-top' | 'ver-left' | 'ver-right'

const allVariants: WobbleVariant[] = ['hor-bottom', 'hor-top', 'ver-left', 'ver-right']

const isHoverMode = ref(false)
const activeVariants = ref<Set<WobbleVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-hor-bottom { @include anim.wobble('hor-bottom', 0.8s); }
  .demo-box.variant-hor-top { @include anim.wobble('hor-top', 0.8s); }
  .demo-box.variant-ver-left { @include anim.wobble('ver-left', 0.8s); }
  .demo-box.variant-ver-right { @include anim.wobble('ver-right', 0.8s); }
}

// Wobble Variations (4 patterns)
.variant-hor-bottom.is-animating { @include anim.wobble('hor-bottom', 0.8s); }
.variant-hor-top.is-animating { @include anim.wobble('hor-top', 0.8s); }
.variant-ver-left.is-animating { @include anim.wobble('ver-left', 0.8s); }
.variant-ver-right.is-animating { @include anim.wobble('ver-right', 0.8s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-wobble {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #1f2937;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  border-radius: 16px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: #06b6d4;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
````

## File: layers/showcases/package.json
````json
{
  "name": "vket-boilerplate-nuxt-showcases",
  "private": true,
  "type": "module",
  "version": "1.0.1",
  "packageManager": "bun@1.3.9",
  "scripts": {
    "postinstall": "if [ -x ../base/node_modules/.bin/nuxt ]; then ../base/node_modules/.bin/nuxt prepare; elif command -v nuxt >/dev/null 2>&1; then nuxt prepare; else echo 'skip nuxt prepare: nuxt not installed'; fi",
    "dev": "cross-env VITE_OUTPUT_ENV=\"$target\" nuxt dev",
    "dev:local": "cross-env VITE_OUTPUT_ENV=local nuxt dev",
    "build": "cross-env VITE_OUTPUT_ENV=\"$target\" nuxt build",
    "build:local": "cross-env VITE_OUTPUT_ENV=local nuxt build",
    "generate": "cross-env VITE_OUTPUT_ENV=\"$target\" nuxt generate",
    "generate:local": "cross-env VITE_OUTPUT_ENV=local nuxt generate",
    "preview": "nuxt preview",
    "typecheck": "cross-env VITE_OUTPUT_ENV=local nuxt typecheck",
    "analyze": "cross-env VITE_OUTPUT_ENV=local nuxt analyze",
    "lint": "bun lint:eslint && bun lint:stylelint",
    "lint:eslint": "eslint --cache --cache-strategy content ./app",
    "lint:stylelint": "stylelint --cache --cache-strategy content './app/**/*.{css,scss,sass,vue}'",
    "fix": "bun fix:eslint && bun fix:stylelint",
    "fix:eslint": "eslint --cache --cache-strategy content --fix ./app",
    "fix:stylelint": "stylelint --cache-strategy content --fix './app/**/*.{css,scss,sass,vue}'",
    "test:ut": "cmd='vitest run --dir ./app/test' bun exec-test",
    "test:watch": "cmd='vitest --dir ./app/test' bun exec-test",
    "test:ui": "cmd='vitest --ui --dir ./app/test' bun exec-test",
    "test:coverage": "cmd='vitest run --dir ./app/test --coverage' bun exec-test",
    "exec-test": "baseDir='./app/test' ext='\\.spec\\.ts' bun exec-if-file-exists",
    "exec-if-file-exists": "[ \"$(find $baseDir | grep \"${ext}$\" | wc -l)\" -gt 0 ] && $cmd || true",
    "package-update": "bunx npm-check-updates -i",
    "clean-install": "bun run ../../scripts/clean_install.js",
    "allclean-install": "bun run ../../scripts/clean_install.js all"
  },
  "dependencies": {
    "vket-boilerplate-nuxt-base": "workspace:*"
  }
}
````

## File: layers/showcases/app/components/ho/animista/HoAnimista.vue
````vue
<i18n lang="yaml">
ja:
  title: Animista
  description: Animista由来のCSSアニメーションデモ集
  animations:
    title: アニメーション一覧
    scaleUp:
      name: Scale Up
      description: スケールアップアニメーション（15パターン）
    scaleDown:
      name: Scale Down
      description: スケールダウンアニメーション（15パターン）
    rotate:
      name: Rotate
      description: 回転アニメーション（4パターン）
    rotateScale:
      name: Rotate Scale
      description: 回転＋スケールアニメーション（6パターン）
    rotate90:
      name: Rotate 90°
      description: 90度回転アニメーション（8パターン）
    flip:
      name: Flip
      description: フリップアニメーション（16パターン）
    flip2:
      name: Flip 2
      description: フリップ＋移動アニメーション（16パターン）
    flipScale:
      name: Flip Scale
      description: フリップ＋スケールアニメーション（8パターン）
    flipScale2:
      name: Flip Scale 2
      description: フリップ＋スケール＋移動アニメーション（4パターン）
    swing:
      name: Swing
      description: スイングアニメーション（16パターン）
    slide:
      name: Slide
      description: スライドアニメーション（9パターン）
    slideBck:
      name: Slide Backward
      description: スライド後方アニメーション（9パターン）
    slideFwd:
      name: Slide Forward
      description: スライド前方アニメーション（9パターン）
    slideRotate:
      name: Slide Rotate
      description: スライド＋回転アニメーション（12パターン）
    shadowDrop:
      name: Shadow Drop
      description: シャドウ出現アニメーション（11パターン）
    shadowDrop2:
      name: Shadow Drop 2
      description: シャドウ＋Z軸移動アニメーション（11パターン）
    shadowPop:
      name: Shadow Pop
      description: レイヤードシャドウアニメーション（4パターン）
    shadowInset:
      name: Shadow Inset
      description: 内側シャドウアニメーション（11パターン）
    scaleIn:
      name: Scale In
      description: スケール入場アニメーション（15パターン）
    rotateIn:
      name: Rotate In
      description: 回転入場アニメーション（13パターン）
    rotateIn2:
      name: Rotate In 2
      description: 回転＋Z軸入場アニメーション（14パターン）
    swirlIn:
      name: Swirl In
      description: スワール入場アニメーション（18パターン）
    flipIn:
      name: Flip In
      description: フリップ入場アニメーション（8パターン）
    slitIn:
      name: Slit In
      description: スリット入場アニメーション（4パターン）
    slideIn:
      name: Slide In
      description: スライド入場アニメーション（8パターン）
    slideInFwd:
      name: Slide In Forward
      description: 前方スライド入場アニメーション（9パターン）
    slideInBck:
      name: Slide In Backward
      description: 後方スライド入場アニメーション（9パターン）
    slideInBlurred:
      name: Slide In Blurred
      description: ブラースライド入場アニメーション（8パターン）
    slideInElliptic:
      name: Slide In Elliptic
      description: 楕円軌道スライド入場アニメーション（8パターン）
    rollIn:
      name: Roll In
      description: ロール入場アニメーション（4パターン）
    rollInBlurred:
      name: Roll In Blurred
      description: ブラーロール入場アニメーション（4パターン）
    tiltIn:
      name: Tilt In
      description: ティルト入場アニメーション（12パターン）
    tiltInFwd:
      name: Tilt In Forward
      description: 前方ティルト入場アニメーション（4パターン）
    swingIn:
      name: Swing In
      description: スイング入場アニメーション（8パターン）
    bounceIn:
      name: Bounce In
      description: バウンス入場アニメーション（6パターン）
    fadeIn:
      name: Fade In
      description: フェード入場アニメーション（11パターン）
    puffIn:
      name: Puff In
      description: パフ入場アニメーション（11パターン）
    flickerIn:
      name: Flicker In
      description: フリッカー入場アニメーション（2パターン）
    bounceOut:
      name: Bounce Out
      description: バウンス退場アニメーション（6パターン）
    fadeOut:
      name: Fade Out
      description: フェード退場アニメーション（11パターン）
    flickerOut:
      name: Flicker Out
      description: フリッカー退場アニメーション（2パターン）
    scaleOut:
      name: Scale Out
      description: スケール退場アニメーション（15パターン）
    rotateOut:
      name: Rotate Out
      description: 回転退場アニメーション（13パターン）
    rotateOut2:
      name: Rotate Out 2
      description: 45度回転退場アニメーション（12パターン）
    swirlOut:
      name: Swirl Out
      description: スワール退場アニメーション（18パターン）
    flipOut:
      name: Flip Out
      description: フリップ退場アニメーション（8パターン）
    slitOut:
      name: Slit Out
      description: スリット退場アニメーション（4パターン）
    slideOut:
      name: Slide Out
      description: スライド退場アニメーション（8パターン）
    slideOutBck:
      name: Slide Out Backward
      description: 後方スライド退場アニメーション（9パターン）
    slideOutFwd:
      name: Slide Out Forward
      description: 前方スライド退場アニメーション（9パターン）
    slideOutBlurred:
      name: Slide Out Blurred
      description: ブラースライド退場アニメーション（8パターン）
    slideOutElliptic:
      name: Slide Out Elliptic
      description: 楕円軌道スライド退場アニメーション（8パターン）
    rollOut:
      name: Roll Out
      description: ロール退場アニメーション（4パターン）
    rollOutBlurred:
      name: Roll Out Blurred
      description: ブラーロール退場アニメーション（4パターン）
    swingOut:
      name: Swing Out
      description: スイング退場アニメーション（8パターン）
    puffOut:
      name: Puff Out
      description: パフ退場アニメーション（11パターン）
    trackingIn:
      name: Tracking In
      description: 文字間隔変化入場アニメーション（8パターン）
    trackingOut:
      name: Tracking Out
      description: 文字間隔変化退場アニメーション（8パターン）
    focusIn:
      name: Focus In
      description: テキストフォーカス入場アニメーション（5パターン）
    blurOut:
      name: Blur Out
      description: テキストブラー退場アニメーション（5パターン）
    flicker:
      name: Flicker
      description: テキストフリッカーグローアニメーション（2パターン）
    textShadowDrop:
      name: Text Shadow Drop
      description: テキストシャドウドロップアニメーション（9パターン）
    textShadowPop:
      name: Text Shadow Pop
      description: テキストシャドウポップアニメーション（8パターン）
    textPopUp:
      name: Text Pop Up
      description: テキストポップアップアニメーション（8パターン）
    vibrate:
      name: Vibrate
      description: バイブレーションアニメーション（3パターン）
    attnFlicker:
      name: Attention Flicker
      description: アテンションフリッカーアニメーション（5パターン）
    shake:
      name: Shake
      description: シェイクアニメーション（11パターン）
    jello:
      name: Jello
      description: ゼリー状アニメーション（4パターン）
    wobble:
      name: Wobble
      description: ウォブルアニメーション（4パターン）
    attnBounce:
      name: Attention Bounce
      description: バウンスアテンションアニメーション（4パターン）
    pulsate:
      name: Pulsate
      description: パルスアニメーション（4パターン）
    blink:
      name: Blink
      description: ブリンクアニメーション（2パターン）
    kenBurns:
      name: Ken Burns
      description: ケン・バーンズエフェクトアニメーション（8パターン）
    bgPan:
      name: Background Pan
      description: 背景パンアニメーション（8パターン）
    colorChange:
      name: Color Change
      description: 背景色変化アニメーション（4パターン）
en:
  title: Animista
  description: CSS animation demos from Animista
  animations:
    title: Animation List
    scaleUp:
      name: Scale Up
      description: Scale up animations (15 patterns)
    scaleDown:
      name: Scale Down
      description: Scale down animations (15 patterns)
    rotate:
      name: Rotate
      description: Rotate animations (21 patterns)
    rotateScale:
      name: Rotate Scale
      description: Rotate scale animations (10 patterns)
    rotate90:
      name: Rotate 90°
      description: 90° rotation animations (8 patterns)
    flip:
      name: Flip
      description: Flip animations (16 patterns)
    flip2:
      name: Flip 2
      description: Flip + translation animations (16 patterns)
    flipScale:
      name: Flip Scale
      description: Flip + scale animations (8 patterns)
    flipScale2:
      name: Flip Scale 2
      description: Flip + scale + translation animations (4 patterns)
    swing:
      name: Swing
      description: Swing animations (16 patterns)
    slide:
      name: Slide
      description: Slide animations (9 patterns)
    slideBck:
      name: Slide Backward
      description: Slide backward animations (9 patterns)
    slideFwd:
      name: Slide Forward
      description: Slide forward animations (9 patterns)
    slideRotate:
      name: Slide Rotate
      description: Slide + rotation animations (12 patterns)
    shadowDrop:
      name: Shadow Drop
      description: Shadow drop animations (11 patterns)
    shadowDrop2:
      name: Shadow Drop 2
      description: Shadow drop + Z-axis animations (11 patterns)
    shadowPop:
      name: Shadow Pop
      description: Layered shadow pop animations (4 patterns)
    shadowInset:
      name: Shadow Inset
      description: Inset shadow animations (11 patterns)
    scaleIn:
      name: Scale In
      description: Scale entrance animations (15 patterns)
    rotateIn:
      name: Rotate In
      description: Rotate entrance animations (13 patterns)
    rotateIn2:
      name: Rotate In 2
      description: Rotate + Z-axis entrance animations (14 patterns)
    swirlIn:
      name: Swirl In
      description: Swirl entrance animations (18 patterns)
    flipIn:
      name: Flip In
      description: Flip entrance animations (8 patterns)
    slitIn:
      name: Slit In
      description: Slit entrance animations (4 patterns)
    slideIn:
      name: Slide In
      description: Slide entrance animations (8 patterns)
    slideInFwd:
      name: Slide In Forward
      description: Forward slide entrance animations (9 patterns)
    slideInBck:
      name: Slide In Backward
      description: Backward slide entrance animations (9 patterns)
    slideInBlurred:
      name: Slide In Blurred
      description: Blurred slide entrance animations (8 patterns)
    slideInElliptic:
      name: Slide In Elliptic
      description: Elliptic slide entrance animations (8 patterns)
    rollIn:
      name: Roll In
      description: Roll entrance animations (4 patterns)
    rollInBlurred:
      name: Roll In Blurred
      description: Blurred roll entrance animations (4 patterns)
    tiltIn:
      name: Tilt In
      description: Tilt entrance animations (12 patterns)
    tiltInFwd:
      name: Tilt In Forward
      description: Forward tilt entrance animations (4 patterns)
    swingIn:
      name: Swing In
      description: Swing entrance animations (8 patterns)
    bounceIn:
      name: Bounce In
      description: Bounce entrance animations (6 patterns)
    fadeIn:
      name: Fade In
      description: Fade entrance animations (11 patterns)
    puffIn:
      name: Puff In
      description: Puff entrance animations (11 patterns)
    flickerIn:
      name: Flicker In
      description: Flicker entrance animations (2 patterns)
    bounceOut:
      name: Bounce Out
      description: Bounce exit animations (6 patterns)
    fadeOut:
      name: Fade Out
      description: Fade exit animations (11 patterns)
    flickerOut:
      name: Flicker Out
      description: Flicker exit animations (2 patterns)
    scaleOut:
      name: Scale Out
      description: Scale exit animations (15 patterns)
    rotateOut:
      name: Rotate Out
      description: Rotate exit animations (13 patterns)
    rotateOut2:
      name: Rotate Out 2
      description: 45° rotate exit animations (12 patterns)
    swirlOut:
      name: Swirl Out
      description: Swirl exit animations (18 patterns)
    flipOut:
      name: Flip Out
      description: Flip exit animations (8 patterns)
    slitOut:
      name: Slit Out
      description: Slit exit animations (4 patterns)
    slideOut:
      name: Slide Out
      description: Slide exit animations (8 patterns)
    slideOutBck:
      name: Slide Out Backward
      description: Backward slide exit animations (9 patterns)
    slideOutFwd:
      name: Slide Out Forward
      description: Forward slide exit animations (9 patterns)
    slideOutBlurred:
      name: Slide Out Blurred
      description: Blurred slide exit animations (8 patterns)
    slideOutElliptic:
      name: Slide Out Elliptic
      description: Elliptic slide exit animations (8 patterns)
    rollOut:
      name: Roll Out
      description: Roll exit animations (4 patterns)
    rollOutBlurred:
      name: Roll Out Blurred
      description: Blurred roll exit animations (4 patterns)
    swingOut:
      name: Swing Out
      description: Swing exit animations (8 patterns)
    puffOut:
      name: Puff Out
      description: Puff exit animations (11 patterns)
    trackingIn:
      name: Tracking In
      description: Text tracking entrance animations (8 patterns)
    trackingOut:
      name: Tracking Out
      description: Text tracking exit animations (8 patterns)
    focusIn:
      name: Focus In
      description: Text focus entrance animations (5 patterns)
    blurOut:
      name: Blur Out
      description: Text blur exit animations (5 patterns)
    flicker:
      name: Flicker
      description: Text flicker glow animations (2 patterns)
    textShadowDrop:
      name: Text Shadow Drop
      description: Text shadow drop animations (9 patterns)
    textShadowPop:
      name: Text Shadow Pop
      description: Text shadow pop animations (8 patterns)
    textPopUp:
      name: Text Pop Up
      description: Text pop-up animations (8 patterns)
    vibrate:
      name: Vibrate
      description: Vibration attention animations (3 patterns)
    attnFlicker:
      name: Attention Flicker
      description: Attention flicker animations (5 patterns)
    shake:
      name: Shake
      description: Shake attention animations (11 patterns)
    jello:
      name: Jello
      description: Jello attention animations (4 patterns)
    wobble:
      name: Wobble
      description: Wobble attention animations (4 patterns)
    attnBounce:
      name: Attention Bounce
      description: Bounce attention animations (4 patterns)
    pulsate:
      name: Pulsate
      description: Pulsate attention animations (4 patterns)
    blink:
      name: Blink
      description: Blink attention animations (2 patterns)
    kenBurns:
      name: Ken Burns
      description: Ken Burns effect animations (8 patterns)
    bgPan:
      name: Background Pan
      description: Background pan animations (8 patterns)
    colorChange:
      name: Color Change
      description: Background color change animations (4 patterns)
</i18n>

<template>
  <div class="ho-animista">
    <div class="container">
      <!-- ヘッダー -->
      <div class="header-controls">
        <button
          class="back-button"
          @click="emit('back')"
        >
          ← Back
        </button>
      </div>

      <header class="header">
        <h1 class="title">
          {{ t('title') }}
        </h1>
        <p class="description">
          {{ t('description') }}
        </p>
        <p class="reference">
          Reference: <a
            href="https://animista.net/play/basic"
            target="_blank"
            rel="noopener noreferrer"
          >animista.net</a>
        </p>
      </header>

      <!-- カテゴリナビゲーション -->
      <nav class="category-navigation">
        <div
          v-for="category in categories"
          :key="category.key"
          class="category-section"
        >
          <button
            class="category-title"
            @click="toggleCategory(category.key)"
          >
            <span class="category-icon">{{ category.icon }}</span>
            <span class="category-name">{{ category.name }}</span>
            <span class="category-count">({{ category.items.length }})</span>
            <span :class="['category-arrow', { expanded: expandedCategory === category.key }]">▼</span>
          </button>
          <Transition name="accordion">
            <div
              v-show="expandedCategory === category.key"
              class="category-items"
            >
              <button
                v-for="item in category.items"
                :key="item.value"
                :class="['animation-button', { active: currentView === item.value }]"
                @click="handleSelectAnimation(item.value)"
              >
                <span class="animation-icon">{{ item.icon }}</span>
                <span class="animation-label">{{ t(`animations.${item.key}.name`) }}</span>
              </button>
            </div>
          </Transition>
        </div>
      </nav>
    </div>

    <!-- アニメーション詳細 -->
    <HoAnimistaScaleUp
      v-if="currentView === 'scale-up'"
      @back="handleBackToList"
    />
    <HoAnimistaScaleDown
      v-else-if="currentView === 'scale-down'"
      @back="handleBackToList"
    />
    <HoAnimistaRotate
      v-else-if="currentView === 'rotate'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateScale
      v-else-if="currentView === 'rotate-scale'"
      @back="handleBackToList"
    />
    <HoAnimistaRotate90
      v-else-if="currentView === 'rotate-90'"
      @back="handleBackToList"
    />
    <HoAnimistaFlip
      v-else-if="currentView === 'flip'"
      @back="handleBackToList"
    />
    <HoAnimistaFlip2
      v-else-if="currentView === 'flip-2'"
      @back="handleBackToList"
    />
    <HoAnimistaFlipScale
      v-else-if="currentView === 'flip-scale'"
      @back="handleBackToList"
    />
    <HoAnimistaFlipScale2
      v-else-if="currentView === 'flip-scale-2'"
      @back="handleBackToList"
    />
    <HoAnimistaSwing
      v-else-if="currentView === 'swing'"
      @back="handleBackToList"
    />
    <HoAnimistaSlide
      v-else-if="currentView === 'slide'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideBck
      v-else-if="currentView === 'slide-bck'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideFwd
      v-else-if="currentView === 'slide-fwd'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideRotate
      v-else-if="currentView === 'slide-rotate'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowDrop
      v-else-if="currentView === 'shadow-drop'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowDrop2
      v-else-if="currentView === 'shadow-drop-2'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowPop
      v-else-if="currentView === 'shadow-pop'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowInset
      v-else-if="currentView === 'shadow-inset'"
      @back="handleBackToList"
    />
    <HoAnimistaScaleIn
      v-else-if="currentView === 'scale-in'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateIn
      v-else-if="currentView === 'rotate-in'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateIn2
      v-else-if="currentView === 'rotate-in-2'"
      @back="handleBackToList"
    />
    <HoAnimistaSwirlIn
      v-else-if="currentView === 'swirl-in'"
      @back="handleBackToList"
    />
    <HoAnimistaFlipIn
      v-else-if="currentView === 'flip-in'"
      @back="handleBackToList"
    />
    <HoAnimistaSlitIn
      v-else-if="currentView === 'slit-in'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideIn
      v-else-if="currentView === 'slide-in'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideInFwd
      v-else-if="currentView === 'slide-in-fwd'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideInBck
      v-else-if="currentView === 'slide-in-bck'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideInBlurred
      v-else-if="currentView === 'slide-in-blurred'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideInElliptic
      v-else-if="currentView === 'slide-in-elliptic'"
      @back="handleBackToList"
    />
    <HoAnimistaRollIn
      v-else-if="currentView === 'roll-in'"
      @back="handleBackToList"
    />
    <HoAnimistaRollInBlurred
      v-else-if="currentView === 'roll-in-blurred'"
      @back="handleBackToList"
    />
    <HoAnimistaTiltIn
      v-else-if="currentView === 'tilt-in'"
      @back="handleBackToList"
    />
    <HoAnimistaTiltInFwd
      v-else-if="currentView === 'tilt-in-fwd'"
      @back="handleBackToList"
    />
    <HoAnimistaSwingIn
      v-else-if="currentView === 'swing-in'"
      @back="handleBackToList"
    />
    <HoAnimistaBounceIn
      v-else-if="currentView === 'bounce-in'"
      @back="handleBackToList"
    />
    <HoAnimistaFadeIn
      v-else-if="currentView === 'fade-in'"
      @back="handleBackToList"
    />
    <HoAnimistaPuffIn
      v-else-if="currentView === 'puff-in'"
      @back="handleBackToList"
    />
    <HoAnimistaFlickerIn
      v-else-if="currentView === 'flicker-in'"
      @back="handleBackToList"
    />
    <HoAnimistaBounceOut
      v-else-if="currentView === 'bounce-out'"
      @back="handleBackToList"
    />
    <HoAnimistaFadeOut
      v-else-if="currentView === 'fade-out'"
      @back="handleBackToList"
    />
    <HoAnimistaFlickerOut
      v-else-if="currentView === 'flicker-out'"
      @back="handleBackToList"
    />
    <HoAnimistaScaleOut
      v-else-if="currentView === 'scale-out'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateOut
      v-else-if="currentView === 'rotate-out'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateOut2
      v-else-if="currentView === 'rotate-out-2'"
      @back="handleBackToList"
    />
    <HoAnimistaSwirlOut
      v-else-if="currentView === 'swirl-out'"
      @back="handleBackToList"
    />
    <HoAnimistaFlipOut
      v-else-if="currentView === 'flip-out'"
      @back="handleBackToList"
    />
    <HoAnimistaSlitOut
      v-else-if="currentView === 'slit-out'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideOut
      v-else-if="currentView === 'slide-out'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideOutBck
      v-else-if="currentView === 'slide-out-bck'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideOutFwd
      v-else-if="currentView === 'slide-out-fwd'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideOutBlurred
      v-else-if="currentView === 'slide-out-blurred'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideOutElliptic
      v-else-if="currentView === 'slide-out-elliptic'"
      @back="handleBackToList"
    />
    <HoAnimistaRollOut
      v-else-if="currentView === 'roll-out'"
      @back="handleBackToList"
    />
    <HoAnimistaRollOutBlurred
      v-else-if="currentView === 'roll-out-blurred'"
      @back="handleBackToList"
    />
    <HoAnimistaSwingOut
      v-else-if="currentView === 'swing-out'"
      @back="handleBackToList"
    />
    <HoAnimistaPuffOut
      v-else-if="currentView === 'puff-out'"
      @back="handleBackToList"
    />
    <HoAnimistaTrackingIn
      v-else-if="currentView === 'tracking-in'"
      @back="handleBackToList"
    />
    <HoAnimistaTrackingOut
      v-else-if="currentView === 'tracking-out'"
      @back="handleBackToList"
    />
    <HoAnimistaBlurOut
      v-else-if="currentView === 'blur-out'"
      @back="handleBackToList"
    />
    <HoAnimistaFlicker
      v-else-if="currentView === 'flicker'"
      @back="handleBackToList"
    />
    <HoAnimistaFocusIn
      v-else-if="currentView === 'focus-in'"
      @back="handleBackToList"
    />
    <HoAnimistaTextShadowDrop
      v-else-if="currentView === 'text-shadow-drop'"
      @back="handleBackToList"
    />
    <HoAnimistaTextShadowPop
      v-else-if="currentView === 'text-shadow-pop'"
      @back="handleBackToList"
    />
    <HoAnimistaTextPopUp
      v-else-if="currentView === 'text-pop-up'"
      @back="handleBackToList"
    />
    <HoAnimistaVibrate
      v-else-if="currentView === 'vibrate'"
      @back="handleBackToList"
    />
    <HoAnimistaAttnFlicker
      v-else-if="currentView === 'attn-flicker'"
      @back="handleBackToList"
    />
    <HoAnimistaShake
      v-else-if="currentView === 'shake'"
      @back="handleBackToList"
    />
    <HoAnimistaJello
      v-else-if="currentView === 'jello'"
      @back="handleBackToList"
    />
    <HoAnimistaWobble
      v-else-if="currentView === 'wobble'"
      @back="handleBackToList"
    />
    <HoAnimistaAttnBounce
      v-else-if="currentView === 'attn-bounce'"
      @back="handleBackToList"
    />
    <HoAnimistaPulsate
      v-else-if="currentView === 'pulsate'"
      @back="handleBackToList"
    />
    <HoAnimistaBlink
      v-else-if="currentView === 'blink'"
      @back="handleBackToList"
    />
    <HoAnimistaKenBurns
      v-else-if="currentView === 'ken-burns'"
      @back="handleBackToList"
    />
    <HoAnimistaBgPan
      v-else-if="currentView === 'bg-pan'"
      @back="handleBackToList"
    />
    <HoAnimistaColorChange
      v-else-if="currentView === 'color-change'"
      @back="handleBackToList"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  back: []
}>()

type ViewType = 'scale-up' | 'scale-down' | 'rotate' | 'rotate-scale' | 'rotate-90' | 'flip' | 'flip-2' | 'flip-scale' | 'flip-scale-2' | 'swing' | 'slide' | 'slide-bck' | 'slide-fwd' | 'slide-rotate' | 'shadow-drop' | 'shadow-drop-2' | 'shadow-pop' | 'shadow-inset' | 'scale-in' | 'rotate-in' | 'rotate-in-2' | 'swirl-in' | 'flip-in' | 'slit-in' | 'slide-in' | 'slide-in-fwd' | 'slide-in-bck' | 'slide-in-blurred' | 'slide-in-elliptic' | 'roll-in' | 'roll-in-blurred' | 'tilt-in' | 'tilt-in-fwd' | 'swing-in' | 'bounce-in' | 'fade-in' | 'puff-in' | 'flicker-in' | 'fade-out' | 'flicker-out' | 'scale-out' | 'rotate-out' | 'rotate-out-2' | 'swirl-out' | 'flip-out' | 'slit-out' | 'slide-out' | 'slide-out-bck' | 'slide-out-fwd' | 'slide-out-blurred' | 'slide-out-elliptic' | 'bounce-out' | 'roll-out' | 'roll-out-blurred' | 'swing-out' | 'puff-out' | 'tracking-in' | 'tracking-out' | 'blur-out' | 'flicker' | 'focus-in' | 'text-shadow-drop' | 'text-shadow-pop' | 'text-pop-up' | 'vibrate' | 'attn-flicker' | 'shake' | 'jello' | 'wobble' | 'attn-bounce' | 'pulsate' | 'blink' | 'ken-burns' | 'bg-pan' | 'color-change'

const currentView = ref<ViewType>('scale-up')
const expandedCategory = ref<string>('basic')

const categories = [
  {
    name: 'Basic',
    key: 'basic',
    icon: '⚡',
    items: [
      { value: 'scale-up', key: 'scaleUp', icon: '📐' },
      { value: 'scale-down', key: 'scaleDown', icon: '🔽' },
      { value: 'rotate', key: 'rotate', icon: '🔄' },
      { value: 'rotate-scale', key: 'rotateScale', icon: '↩️' },
      { value: 'rotate-90', key: 'rotate90', icon: '⤴️' },
      { value: 'flip', key: 'flip', icon: '🔃' },
      { value: 'flip-2', key: 'flip2', icon: '🔂' },
      { value: 'flip-scale', key: 'flipScale', icon: '🔀' },
      { value: 'flip-scale-2', key: 'flipScale2', icon: '🔁' },
      { value: 'swing', key: 'swing', icon: '⚖️' },
      { value: 'slide', key: 'slide', icon: '➡️' },
      { value: 'slide-bck', key: 'slideBck', icon: '⬅️' },
      { value: 'slide-fwd', key: 'slideFwd', icon: '⤴️' },
      { value: 'slide-rotate', key: 'slideRotate', icon: '🔃' },
      { value: 'shadow-drop', key: 'shadowDrop', icon: '💧' },
      { value: 'shadow-drop-2', key: 'shadowDrop2', icon: '💦' },
      { value: 'shadow-pop', key: 'shadowPop', icon: '⭐' },
      { value: 'shadow-inset', key: 'shadowInset', icon: '🔲' },
    ],
  },
  {
    name: 'Entrance',
    key: 'entrance',
    icon: '👋',
    items: [
      { value: 'scale-in', key: 'scaleIn', icon: '📏' },
      { value: 'rotate-in', key: 'rotateIn', icon: '🔄' },
      { value: 'rotate-in-2', key: 'rotateIn2', icon: '🌀' },
      { value: 'swirl-in', key: 'swirlIn', icon: '🌪️' },
      { value: 'flip-in', key: 'flipIn', icon: '🔃' },
      { value: 'slit-in', key: 'slitIn', icon: '✂️' },
      { value: 'slide-in', key: 'slideIn', icon: '🔽' },
      { value: 'slide-in-fwd', key: 'slideInFwd', icon: '⤵️' },
      { value: 'slide-in-bck', key: 'slideInBck', icon: '⤴️' },
      { value: 'slide-in-blurred', key: 'slideInBlurred', icon: '💨' },
      { value: 'slide-in-elliptic', key: 'slideInElliptic', icon: '🌊' },
      { value: 'roll-in', key: 'rollIn', icon: '🎲' },
      { value: 'roll-in-blurred', key: 'rollInBlurred', icon: '🎰' },
      { value: 'tilt-in', key: 'tiltIn', icon: '🎭' },
      { value: 'tilt-in-fwd', key: 'tiltInFwd', icon: '🎪' },
      { value: 'swing-in', key: 'swingIn', icon: '🎢' },
      { value: 'bounce-in', key: 'bounceIn', icon: '🎾' },
      { value: 'fade-in', key: 'fadeIn', icon: '👻' },
      { value: 'puff-in', key: 'puffIn', icon: '💨' },
      { value: 'flicker-in', key: 'flickerIn', icon: '✨' },
    ],
  },
  {
    name: 'Exit',
    key: 'exit',
    icon: '👋',
    items: [
      { value: 'scale-out', key: 'scaleOut', icon: '📉' },
      { value: 'rotate-out', key: 'rotateOut', icon: '🔄' },
      { value: 'rotate-out-2', key: 'rotateOut2', icon: '🌀' },
      { value: 'swirl-out', key: 'swirlOut', icon: '🌪️' },
      { value: 'flip-out', key: 'flipOut', icon: '🔃' },
      { value: 'slit-out', key: 'slitOut', icon: '✂️' },
      { value: 'slide-out', key: 'slideOut', icon: '📤' },
      { value: 'slide-out-bck', key: 'slideOutBck', icon: '⬅️' },
      { value: 'slide-out-fwd', key: 'slideOutFwd', icon: '➡️' },
      { value: 'slide-out-blurred', key: 'slideOutBlurred', icon: '💨' },
      { value: 'slide-out-elliptic', key: 'slideOutElliptic', icon: '🌊' },
      { value: 'bounce-out', key: 'bounceOut', icon: '🚀' },
      { value: 'roll-out', key: 'rollOut', icon: '🎲' },
      { value: 'roll-out-blurred', key: 'rollOutBlurred', icon: '🎰' },
      { value: 'swing-out', key: 'swingOut', icon: '⚖️' },
      { value: 'fade-out', key: 'fadeOut', icon: '💭' },
      { value: 'puff-out', key: 'puffOut', icon: '💨' },
      { value: 'flicker-out', key: 'flickerOut', icon: '🌟' },
    ],
  },
  {
    name: 'Text',
    key: 'text',
    icon: '📝',
    items: [
      { value: 'tracking-in', key: 'trackingIn', icon: '🔤' },
      { value: 'tracking-out', key: 'trackingOut', icon: '🔡' },
      { value: 'focus-in', key: 'focusIn', icon: '🔍' },
      { value: 'blur-out', key: 'blurOut', icon: '🌫️' },
      { value: 'flicker', key: 'flicker', icon: '✨' },
      { value: 'text-shadow-drop', key: 'textShadowDrop', icon: '💧' },
      { value: 'text-shadow-pop', key: 'textShadowPop', icon: '⭐' },
      { value: 'text-pop-up', key: 'textPopUp', icon: '🎈' },
    ],
  },
  {
    name: 'Attention',
    key: 'attention',
    icon: '🎯',
    items: [
      { value: 'vibrate', key: 'vibrate', icon: '📳' },
      { value: 'shake', key: 'shake', icon: '🔔' },
      { value: 'jello', key: 'jello', icon: '🍮' },
      { value: 'wobble', key: 'wobble', icon: '🌊' },
      { value: 'attn-bounce', key: 'attnBounce', icon: '🏀' },
      { value: 'pulsate', key: 'pulsate', icon: '💓' },
      { value: 'blink', key: 'blink', icon: '👁️' },
      { value: 'attn-flicker', key: 'attnFlicker', icon: '💡' },
    ],
  },
  {
    name: 'Background',
    key: 'background',
    icon: '🎨',
    items: [
      { value: 'ken-burns', key: 'kenBurns', icon: '🎬' },
      { value: 'bg-pan', key: 'bgPan', icon: '🖼️' },
      { value: 'color-change', key: 'colorChange', icon: '🌈' },
    ],
  },
] as const

const toggleCategory = (categoryKey: string) => {
  expandedCategory.value = expandedCategory.value === categoryKey ? '' : categoryKey
}

const handleSelectAnimation = (animationType: string) => {
  currentView.value = animationType as ViewType
}

const handleBackToList = () => {
  currentView.value = 'scale-up'
}
</script>

<style lang="scss" scoped>
.ho-animista {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-controls {
  margin-bottom: 24px;
}

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.header {
  margin-bottom: 60px;
  text-align: center;
}

.title {
  margin-bottom: 16px;

  font-size: 48px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.description {
  font-size: 20px;
  color: rgb(255 255 255 / 90%);
}

.reference {
  margin-top: 12px;
  font-size: 16px;
  color: rgb(255 255 255 / 80%);

  a {
    color: white;
    text-decoration: underline;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
}

.section {
  margin-bottom: 60px;
}

.section-title {
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.animation-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.animation-card {
  cursor: pointer;

  display: flex;
  gap: 20px;
  align-items: center;

  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;

  font-family: inherit;
  color: inherit;
  text-align: left;
  text-decoration: none;

  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
  }
}

.card-icon {
  flex-shrink: 0;
  font-size: 40px;
}

.card-content {
  flex: 1;
}

.card-title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
}

.card-description {
  font-size: 14px;
  color: #6b7280;
}

.card-arrow {
  flex-shrink: 0;
  font-size: 24px;
  color: #9ca3af;
  transition: transform 0.3s ease;

  .animation-card:hover & {
    transform: translateX(4px);
  }
}

.category-navigation {
  margin-bottom: 40px;
}

.category-section {
  margin-bottom: 16px;
  border-radius: 12px;
  background: rgb(255 255 255 / 5%);

  &:last-child {
    margin-bottom: 0;
  }
}

.category-title {
  cursor: pointer;

  display: flex;
  gap: 12px;
  align-items: center;

  width: 100%;
  padding: 16px 20px;
  border: 2px solid rgb(255 255 255 / 20%);
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: left;

  background: rgb(255 255 255 / 8%);

  transition: all 0.3s ease;

  &:hover {
    border-color: rgb(255 255 255 / 40%);
    background: rgb(255 255 255 / 12%);
  }
}

.category-icon {
  font-size: 24px;
}

.category-name {
  flex: 1;
  font-weight: inherit;
}

.category-count {
  font-size: 14px;
  color: rgb(255 255 255 / 70%);
}

.category-arrow {
  font-size: 14px;
  color: rgb(255 255 255 / 70%);
  transition: transform 0.3s ease;

  &.expanded {
    transform: rotate(180deg);
  }
}

.category-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 20px;
}

// アコーディオンアニメーション
.accordion-enter-active,
.accordion-leave-active {
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 1000px;
  opacity: 1;
}

.animation-button {
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  padding: 10px 18px;
  border: 2px solid rgb(255 255 255 / 30%);
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  color: white;

  background: rgb(255 255 255 / 5%);

  transition: all 0.3s ease;

  &:hover {
    border-color: rgb(255 255 255 / 60%);
    background: rgb(255 255 255 / 10%);
    box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
  }
}

.animation-icon {
  font-size: 18px;
}

.animation-label {
  font-weight: inherit;
}
</style>
````
