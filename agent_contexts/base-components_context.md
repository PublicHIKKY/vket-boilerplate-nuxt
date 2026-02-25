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
- Only files matching these patterns are included: layers/base/app/components/**/*, layers/base/app/layouts/**/*, layers/base/app/pages/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  base/
    app/
      components/
        ha/
          base/
            HaBaseButton.vue
            HaBaseInput.vue
          HaContainer.vue
          HaDialog.vue
          HaDialogElement.vue
          HaHamburger.vue
          HaImage.vue
          HaLabel.vue
          HaLink.vue
          HaLoading.vue
          HaLoadingIcon.vue
          HaModal.vue
          HaSelectBox.vue
          HaSkewBackground.vue
          HaTag.vue
          HaTextarea.vue
          HaVideo.vue
        hm/
          button/
            HmButton.vue
            HmButtonClose.vue
            HmButtonFavorite.vue
          icon/
            HmIconUser.vue
          input/
            HmInputCheckbox.vue
            HmInputDatetime.vue
            HmInputFile.vue
            HmInputRadio.vue
            HmInputRadioChangeable.vue
            HmInputSingleImage.vue
            HmInputText.vue
          HmAccordion.vue
          HmAutoCarousel.vue
          HmClipping.vue
          HmDialogElement.vue
          HmMenuExample.vue
          HmNoteList.vue
          HmPaging.vue
          HmPicture.vue
          HmPopup.vue
          HmSkeletonScreen.vue
          HmSlider.vue
          HmSliderItem.vue
          HmSocialShareLink.vue
          HmTab.vue
          HmTsx.vue
      layouts/
        default.vue
```

# Files

## File: layers/base/app/components/ha/base/HaBaseButton.vue
```vue
<template>
  <button
    class="ha-base-button"
    :disabled="disabled"
    :type="type"
    @click="onClick"
  >
    <slot>button label</slot>
  </button>
</template>

<script setup lang="ts">
export type ButtonType = 'button' | 'reset' | 'submit'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    type?: ButtonType
  }>(),
  {
    disabled: false,
    type: 'button',
  },
)
const emit = defineEmits<{
  (e: 'click', _e: MouseEvent): void
}>()
const onClick = (event: MouseEvent): void => {
  if (props.disabled) return
  emit('click', event)
}
</script>

<style lang="scss" scoped>
.ha-base-button {
  max-width: 100%;
  max-height: 100%;
}
</style>
```

## File: layers/base/app/components/ha/base/HaBaseInput.vue
```vue
<template>
  <input
    :id="props.id"
    v-bind="valueProp"
    class="ha-base-input"
    :type="props.type"
    :accept="props.accept"
    :autocomplete="props.autocomplete"
    :autofocus="props.autofocus"
    :capture="capture_"
    :checked="props.checked"
    :disabled="props.disabled"
    :list="props.list"
    :max="props.max"
    :maxLength="props.maxLength"
    :min="props.min"
    :minLength="props.minLength"
    :multiple="props.multiple"
    :name="props.name"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :required="props.required"
    :size="props.size"
    :files="props.files"
    @input="onInput"
    @change="onChange"
  />
</template>

<script setup lang="ts">
export type InputType
  = | 'button'
    | 'checkbox'
    | 'email'
    | 'file'
    | 'number'
    | 'password'
    | 'radio'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'time'

type Props = {
  type: InputType
  accept?: string
  autocomplete?: string
  autofocus?: boolean
  capture?: boolean | 'user' | 'environment'
  checked?: boolean
  disabled?: boolean
  id?: string
  list?: string
  max?: number | string
  maxLength?: number
  min?: number | string
  minLength?: number
  multiple?: boolean
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  size?: number
  value?: string | number | boolean
  modelValue?: string | number | boolean
  files?: FileList | undefined
}
type Emits = {
  (
    e: 'update:modelValue' | 'update:value',
    eventValue: string | number | boolean
  ): void
  (e: 'input' | 'change', event: Event): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const typeofInputValue = () => {
  if (props.type === 'checkbox') return 'boolean'

  if (props.type === 'radio' && typeof props.value === 'number') return 'number'

  return 'string'
}

const onInput = (event: Event) => {
  emit('input', event)
  if (event.target instanceof HTMLInputElement) {
    const returnType = typeofInputValue()

    const checked = event.target.checked
    if (returnType === 'boolean') {
      emit('update:modelValue', checked)
      emit('update:value', checked)
      return
    }

    const value = event.target.value
    if (returnType === 'number') {
      emit('update:modelValue', Number(value))
      emit('update:value', Number(value))
      return
    }

    emit('update:modelValue', value)
    emit('update:value', value)
  }
}

const onChange = (event: Event) => {
  emit('change', event)
}

const valueProp = computed(() => {
  /*
   * props.value の型にbooleanが含まれているからかflagとして解釈されている？
   * 指定しない時のデフォルト値がundefinedでなくfalseになってつらいので対処
   */
  if (props.type === 'file' && props.value === false) return {}
  if (props.modelValue !== undefined) return { value: props.modelValue }
  return {
    value: props.value,
  }
})

/**
 * https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/capture
 * capture属性はどうも論理属性でなくなっていて？  falseでもカメラが起動するので対応
 */
const capture_ = computed<'user' | 'environment' | true | undefined>(() => {
  switch (props.capture) {
    case false:
      return undefined
    default:
      return props.capture
  }
})
</script>

<style lang="scss" scoped>
.ha-base-input {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>
```

## File: layers/base/app/components/ha/HaContainer.vue
```vue
<template>
  <div class="ha-container">
    <slot />
  </div>
</template>

<style lang="scss">
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-container {
  min-width: v.$pc-content-min-width;
  max-width: v.$pc-content-max-width;
  margin: 0 auto;
  padding: 0 40px;

  @include m.sp {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
```

## File: layers/base/app/components/ha/HaDialog.vue
```vue
<template>
  <div
    class="ha-dialog"
    @click.self="handleCloseDialog"
  >
    <div class="dialog-window">
      <slot>no content.</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleCloseDialog = () => emit('close')
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-dialog {
  position: fixed;
  z-index: v.$zindex-dialog;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: v.$black-undercoat;

  > .dialog-window {
    overflow: auto;

    width: auto;
    max-width: 100%;
    max-height: 100%;
    padding: 10px;

    background-color: v.$white;
  }
}
</style>
```

## File: layers/base/app/components/ha/HaDialogElement.vue
```vue
<!--
HaDialogとの違いとして、HaDialogElementは別階層の別要素のz-indexの影響により、それよりも下に表示されてしまう
と言った現象が起きません(dialog要素は常に最前面に表示される)。
-->
<template>
  <dialog
    ref="dialog"
    class="ha-dialog-element"
    :closedby
    @click.stop
  >
    <component
      :is="props.closeButtonHtmlTag"
      ref="close"
      class="close"
      :aria-label="
        i18n.locale.value === 'ja' ? `ダイアログを閉じる` : `Close the dialog`
      "
      @click="closeDialog"
    >
      <slot name="close">
        <RiCloseLine class="icon" />
      </slot>
    </component>
    <div
      tabindex="0"
      class="inner"
      role="presentation"
    >
      <slot name="inner" />
    </div>
    <div
      tabindex="0"
      @focus="handleEndFocus"
    ></div>
  </dialog>
</template>

<script lang="ts" setup>
import RiCloseLine from '~icons/ri/close-line'

export type Props = {
  closeButtonHtmlTag?: string
  closedby: 'any' | 'closerequest' | 'none' | undefined
}
const props = withDefaults(defineProps<Props>(), {
  closeButtonHtmlTag: 'button',
})

// aria-label用のi18n
const i18n = useI18n()

// dialog要素をrefにする
const dialog = ref<HTMLDialogElement>()
const isActive = ref(false)

const emit = defineEmits<{
  (e: 'open' | 'close'): void
}>()

// dialogを開く関数
const openDialog = () => {
  isActive.value = true
  if (!dialog.value) {
    throw new Error('dialog要素はnull (HaDialogElement openDialog)')
  }
  dialog.value.addEventListener('keydown', (e) => {
    if (dialog.value?.open && e.key === 'Escape') {
      e.stopPropagation()
      closeDialog()
    }
  })
  if (typeof dialog.value.showModal === 'function') {
    dialog.value.showModal()
  } else {
    console.error('dialog要素はHTMLDialogElementではありません (HaDialogElement openDialog)')
  }
  dialog.value.addEventListener('close', resetPageScrolling)
  onOpen()
}

// dialogを閉じる関数
const closeDialog = () => {
  if (!dialog.value) {
    throw new Error('dialog要素はnull (HaDialogElement closeDialog)')
  }
  dialog.value.close()
  onClose()
  isActive.value = false
}

const stopPageScrolling = () => {
  // html要素とbody要素の両方にoverflowを記述
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const resetPageScrolling = () => {
  // html要素とbody要素の両方のoverflowを元に戻す
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

const onOpen = () => {
  stopPageScrolling()
  emit('open')
}

const onClose = () => {
  resetPageScrolling()
  emit('close')
}

// ダイアログ内のフォーカスを制御する
const close = ref<HTMLElement>()
const handleEndFocus = () => {
  close.value?.focus()
}

onBeforeUnmount(resetPageScrolling)

defineExpose({
  openDialog,
  closeDialog,
  isActive,
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.open {
  cursor: pointer;
}

.ha-dialog-element {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  width: 90%;
  max-width: initial; // dialogのデフォルトのmax-widthをリセット
  height: max-content; // autoにすると、十分に画面縦幅がある場合でもダイアログに縦スクロールが生まれる場合がある
  max-height: initial; // dialogのデフォルトのmax-heightをリセット
  padding: 0; // dialogのデフォルトのpaddingをリセット

  opacity: 0;
  background-color: rgb(
    0 0 0 / 0%
  ); // dialogにデフォルトで指定される白の背景色を透明にする

  &::backdrop {
    cursor: pointer;
    background-color: rgb(0 0 0 / 80%);
  }

  &[open] {
    animation: fade-in 0.3s forwards;
  }

  > .inner {
    overflow-y: auto;

    width: 100%;
    height: max-content;
    max-height: 100vh; // 先祖要素にmax-contentを指定した場合、その子孫要素の単位に%を使うとwebkitで値が0になる場合があるためvhを使用

    background-color: #fff;

    &:focus-visible {
      outline: none;
    }
  }

  > .close {
    cursor: pointer;

    position: absolute;
    top: 2%;
    right: 2%;

    aspect-ratio: 1;
    width: 20px;

    > .icon {
      font-size: 24px;

      &:deep(path) {
        fill: v.$black;
      }
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
```

## File: layers/base/app/components/ha/HaHamburger.vue
```vue
<template>
  <div
    class="ha-humberger-button"
    :class="{ ['-open']: isOpen }"
    @click="onClick"
  >
    <div class="line" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  isOpen: boolean
}

type Emits = {
  (emit: 'click'): void
}

defineProps<Props>()

const emits = defineEmits<Emits>()

const onClick = () => emits('click')
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-humberger-button {
  $height: 2px;

  cursor: pointer;
  position: relative;
  width: 30px;
  height: 20px;

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  .line,
  &::before,
  &::after {
    content: '';

    position: absolute;

    display: block;

    width: 100%;
    height: $height;

    background: v.$white;

    transition: transform ease 0.1s;
  }

  .line {
    top: 50%;
  }

  &.-open {
    &::before {
      top: 50%;
      transform: rotateZ(45deg);
    }

    &::after {
      top: 50%;
      transform: rotateZ(-45deg);
    }

    .line {
      display: none;
    }
  }
}
</style>
```

## File: layers/base/app/components/ha/HaImage.vue
```vue
<template>
  <img
    ref="imageElement"
    class="ha-image"
    :loading="isLazy ? 'lazy' : 'eager'"
    :fetchpriority="fetchPriority"
    :src="imageUrl"
    :alt="alt || ''"
    :role="alt ? 'img' : 'presentation'"
    :decoding="decoding"
    @error="onError"
    @load="onImageLoad"
  />
</template>

<script setup lang="ts">
import defaultNoImage from '@@/public/images/no-image.png'

const props = withDefaults(
  defineProps<{
    /**
     * src 属性に渡されるもの。
     * 無指定で '/images/no-image.png'、
     * エラー時に「無」の画像に置き換えられる。
     */
    src?: string | null
    alt?: string | null
    /** デフォルト有効(loading="eager") :is-lazy="true" でloading="lazy" */
    isLazy?: boolean
    fetchPriority?: 'low' | 'high' | 'auto' | null
    decoding?: 'sync' | 'async' | 'auto'
    /** エラー時の置き換え「無」画像のurl */
    noImage?: string
  }>(),
  {
    src: '',
    alt: null,
    isLazy: false,
    fetchPriority: 'low',
    decoding: 'auto',
    noImage: '',
  },
)
const hasError = ref(false)
const onError = () => {
  hasError.value = true
}

const imageUrl = computed(() =>
  hasError.value
    ? props.noImage || defaultNoImage
    : props.src || defaultNoImage,
)

// imgにwidthとheightを自動付与する
const imageElement = ref<HTMLImageElement | null>(null)
const onImageLoad = (): void => {
  if (imageElement.value) {
    const width = imageElement.value.naturalWidth
    const height = imageElement.value.naturalHeight
    imageElement.value.width = width
    imageElement.value.height = height
  }
}
</script>
```

## File: layers/base/app/components/ha/HaLabel.vue
```vue
<template>
  <div
    class="ha-label"
    :style="style"
  >
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
export type BackgroundColorMap = Record<string, string>
/**
 * Mapping text to background-color.
 *
 * テキストで背景をスイッチしたいときに指定します。
 * もしcolorMap[text]が存在しなければfallbackColorにフォールバックします。
 */
const props = withDefaults(
  defineProps<{
    text?: string
    colorMap?: BackgroundColorMap
    fallbackColor?: string
  }>(),
  {
    text: '',
    colorMap: undefined,
    fallbackColor: 'black',
  },
)
const style = computed(() => ({
  'background-color': props.colorMap?.[props.text] ?? props.fallbackColor,
}))
</script>
```

## File: layers/base/app/components/ha/HaLink.vue
```vue
<template>
  <component
    :is="component"
    class="ha-link"
    v-bind="{ [isNuxtLink ? 'to' : 'href']: linkTo }"
    :target="blank ? '_blank' : undefined"
    :rel="rel"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { LocationQuery, stringifyQuery } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to: string
    blank?: boolean
    rel?: HTMLAnchorElement['rel']
    forceAnchorLink?: boolean
    noLocale?: boolean
    // toにqueryパラメータを入れてしまうと、localePathで消えるため、こちらのパラメータを使用してリンクを生成
    query?: LocationQuery
    /*
     * toにhashパラメータを入れてしまうと、localePathで消えるため、こちらのパラメータを使用してリンクを生成
     * 使う場合は「#」を先頭につけること
     */
    hash?: string
  }>(),
  {
    blank: false,
    rel: undefined,
    forceAnchorLink: false,
    noLocale: false,
    query: undefined,
    hash: undefined,
  },
)
const isExternalReference = computed(() => !!props.to?.match(/^https?:\/\//))
const isNuxtLink = computed(
  // FIXME: isNuxtEnvironment() が壊れている
  () =>
    /* isNuxtEnvironment() && */ !props.forceAnchorLink
    && !isExternalReference.value,
)
const component = computed(() =>
  isNuxtLink.value ? resolveComponent('nuxt-link') : 'a',
)
const linkTo = computed(() => {
  if (!isNuxtLink.value) {
    return toUrl(props)
  }

  const localePath = useLocalePath()
  return localePath({ path: props.to, query: props.query, hash: props.hash })
})
const toUrl = ({
  to,
  query,
  hash,
}: {
  to: string
  query?: LocationQuery
  hash?: string
}) => {
  const queryStr = query ? `?${stringifyQuery(query)}` : ''
  return `${to}${queryStr}${hash ?? ''}`
}
</script>
```

## File: layers/base/app/components/ha/HaLoading.vue
```vue
<template>
  <div
    v-if="loading"
    class="ha-loading"
  >
    <template v-if="cover">
      <div class="cover" />
    </template>
    <div class="loader spinner-container">
      <svg
        class="spinner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 70"
        width="120px"
        height="120px"
      >
        <path
          d="M65,35c0-16.57-13.43-30-30-30S5,18.43,5,35H0C0,15.67,15.67,0,35,0s35,15.67,35,35h-5Z"
          style="fill: #0583f2"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0,35,35"
            to="360,35,35"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    manual?: boolean
    cover?: boolean
  }>(),
  {
    manual: false,
    cover: false,
  },
)

/*
 * ここでの `manual` とは auto start の意味であり、Nuxtのloading機能を使わず
 * 自前で（外側からv-ifを使って）loadingを出すためのもの
 */
const loading = ref(props.manual)
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.ha-loading {
  position: fixed;
  z-index: v.$zindex-loading;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: rgb(0 0 0 / 70%);

  > .cover {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: v.$white;
  }
}

.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  margin: auto;

  > .spinner {
    display: block;

    width: 120px;
    max-width: 50%;
    height: 120px;
    max-height: 50%;
    margin: auto;
  }
}
</style>
```

## File: layers/base/app/components/ha/HaLoadingIcon.vue
```vue
<template>
  <div class="ha-loading-icon" />
</template>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.ha-loading-icon {
  position: absolute;
  inset: 0;

  width: 36px;
  height: 36px;
  margin: auto;
  border: 2px solid v.$white;
  border-bottom-color: transparent;
  border-radius: 9999px;

  animation: ha-loading-icon 0.7s infinite linear;
}

@keyframes ha-loading-icon {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
```

## File: layers/base/app/components/ha/HaModal.vue
```vue
<template>
  <!-- モーダルを開くボタン -->
  <button
    class="open"
    type="button"
    :aria-controls="'popup' + props.index.toString()"
    aria-expanded="false"
    @click="togglePopup"
  >
    <slot name="button">
      <span class="text">モーダルを開く</span>
    </slot>
  </button>
  <!-- モーダル -->
  <section
    :id="'popup' + props.index.toString()"
    class="ha-modal"
    :aria-hidden="!popupVisibility"
  >
    <button
      ref="close"
      class="close"
      type="button"
      :aria-label="
        i18n.locale.value === 'ja' ? `モーダルを閉じる` : `Close the dialog`
      "
      @click="togglePopup"
    >
      <!-- 閉じるボタンのアイコン -->
      <slot name="close">
        <RiCloseLine class="icon" />
      </slot>
    </button>
    <div
      class="inner"
      role="presentation"
    >
      <!-- モーダルの背景 -->
      <div
        class="background"
        aria-hidden="true"
        @click="togglePopup"
      ></div>
      <div
        class="modal"
        role="presentation"
      >
        <slot name="inner">
          <div>モーダルの中身</div>
        </slot>
      </div>
    </div>
    <div
      tabindex="0"
      class="modal-end"
      @focus="handleEndFocus"
    ></div>
  </section>
</template>

<script lang="ts" setup>
import RiCloseLine from '~icons/ri/close-line'

type Props = {
  index: string
}
const props = defineProps<Props>()
const i18n = useI18n()

/* ポップアップの開閉はrefで制御 */
const popupVisibility = ref(false)
const togglePopup = () => {
  // html要素とbody要素の両方にoverflowを記述
  if (!popupVisibility.value) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
  popupVisibility.value = !popupVisibility.value
}
/* フォーカスを制御する要素を定義 */
const close = ref<HTMLElement | null>(null)
// modal-endにフォーカスが当たったらcloseにフォーカスを移す(ポップアップを開いている最中にポップアップの外にアクセスさせない)
const handleEndFocus = () => {
  if (close.value === null) {
    throw new Error('close要素はnull')
  }
  close.value.focus()
}

/* モーダルが開いている状態でESCキーを押すとモーダルを閉じる */
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (popupVisibility.value === true && e.key === 'Escape') {
      popupVisibility.value = false
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  })
})

defineExpose({
  close,
  handleEndFocus,
  togglePopup,
  popupVisibility,
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.open {
  display: block;
  width: max-content;
  max-width: 100%;
}

.ha-modal {
  position: fixed;
  z-index: 2147483647;
  inset: 0;

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.4s, opacity 0.4s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.4s, opacity 0.4s;
  }

  > .inner {
    position: absolute;
    inset: 0;

    > .background {
      position: absolute;
      inset: 0;
    }

    > .modal {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;

      overflow-y: auto; /* モーダルの中身はスクロール可能に */

      width: 90%;
      height: 90vh;
    }
  }

  > .close {
    position: absolute;
    z-index: 2;
    top: 2%;
    right: 2%;

    aspect-ratio: 1/1;

    > .icon {
      font-size: 24px;

      &:deep(path) {
        fill: v.$white;
      }
    }
  }
}
</style>
```

## File: layers/base/app/components/ha/HaSelectBox.vue
```vue
<template>
  <div class="ha-select-box">
    <select
      v-model="innerValue"
      :name="validatorName"
      :disabled="disabled"
      :required="required"
      class="select"
      :class="[{ '-error': !!errorMessage }, { '-small': small }]"
    >
      <option
        :disabled="disabledPlaceholder"
        :value="null"
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :disabled="option.disabled"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <span
      v-if="validatorRules && errorMessage"
      class="error"
    >{{
      errorMessage
    }}</span>
  </div>
</template>

<script lang="ts">
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

export type Option = {
  value: number | string | null
  text: string
  disabled?: boolean
}

type FieldInput = string | number | null

export type Props = {
  modelValue?: number | string | null
  validatorName: string
  validatorRules?:
    | ZodType<string, ZodTypeDef, FieldInput>
    | ZodEffects<ZodType<string, ZodTypeDef, FieldInput>>
  options: readonly Option[]
  placeholder?: string
  disabledPlaceholder?: boolean
  disabled?: boolean
  required?: boolean
  small?: boolean
  keepValueOnUnmount?: boolean
}

export default defineComponent({
  name: 'HaSelectBox',
})
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<Props>(),
  {
    modelValue: null,
    validatorRules: undefined,
    placeholder: '---Select---',
    disabledPlaceholder: false,
    disabled: false,
    required: false,
    small: false,
    keepValueOnUnmount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'input', value: number | string | null): void
}>()

const { value: fieldValue, errorMessage } = useField(
  toRef(props, 'validatorName'),
  props.validatorRules,
  {
    initialValue: props.modelValue,
    keepValueOnUnmount: props.keepValueOnUnmount,
    syncVModel: true,
  },
)

const innerValue = computed({
  get(): number | string | null {
    return fieldValue.value
  },
  set(value: number | string | null): void {
    emit('update:modelValue', value)
    fieldValue.value = value
    emit('input', value)
  },
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-select-box {
  position: relative;

  > .select {
    cursor: pointer;

    width: 100%;
    height: 44px;
    padding: 8px 16px;
    border: 1px solid v.$primary-color;
    border-radius: 4px;

    font-size: 15px;
    line-height: 1;
    color: v.$black;
    text-overflow: ellipsis;

    background-color: v.$white;
    outline: none;

    &::placeholder {
      color: v.$gray;
    }

    &:disabled {
      border-color: rgb(0 0 0 / 12%);
      color: v.$gray;
      opacity: 0.5;
      background-color: v.$gray-2;
    }

    &:focus {
      border-color: v.$primary-color;
    }

    &.-error {
      border: 2px solid v.$red;

      &:focus {
        border: 2px solid v.$red;
      }
    }

    &.-small {
      height: 30px;
      padding: 0 10px;
    }
  }

  > .error {
    display: block;

    width: fit-content;
    min-height: 20px;
    margin-top: 8px;

    font-size: 10px;
    font-weight: 400;
    color: v.$red;
  }

  @include m.sp {
    > .select {
      font-size: v.$base-font-size;
    }
  }

  // ヘッダー検索窓用設定
  &.-search {
    > .select {
      border-color: v.$gray-2;
    }

    > .error {
      display: none;
    }
  }
}
</style>
```

## File: layers/base/app/components/ha/HaSkewBackground.vue
```vue
<template>
  <div
    class="ha-skew"
    :style="backStyle"
  >
    <div
      class="content"
      :style="contentStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ValueOf } from '#base/app/utils/types/types'

const _AXIS = {
  x: 'x',
  y: 'y',
  z: 'z',
} as const

type Props = {
  deg: number
  axis: ValueOf<typeof _AXIS>
}

const props = defineProps<Props>()

const skew: Record<ValueOf<typeof _AXIS>, string> = {
  x: 'skewX',
  y: 'skewY',
  z: 'skewZ',
} as const

const backStyle = computed(() => ({
  transform: `${skew[props.axis]}(${props.deg}deg)`,
}))
const contentStyle = computed(() => ({
  transform: `${skew[props.axis]}(${props.deg * -1}deg)`,
}))
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-skew,
.content {
  height: 100%;
}
</style>
```

## File: layers/base/app/components/ha/HaTag.vue
```vue
<template>
  <span
    class="ha-tag"
    :class="[
      `-${category}`,
      {
        '-disabled': disabled,
        '-clickable': clickable,
      },
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { ValueOf } from '#base/app/utils/types/types'
/**
 * src/components/ha/HaTag.vueにて
 * TAG_TYPEをscript setup内のローカルで宣言するとテストで落ちる。
 * その為、scriptタグを別で設置して宣言する
 * ※このscriptタグにはsetupは付けないこと。prettierで同一scriptタグに整形される為。
 */

const TAG_TYPE = {
  PRIMARY: 'primary',
  PINK: 'pink',
  OUTLINE: 'outline',
  GRAY: 'gray',
  DANGER: 'danger',
} as const
</script>

<script setup lang="ts">
type Props = {
  disabled?: boolean
  category?: ValueOf<typeof TAG_TYPE>
  clickable?: boolean
}

type Emits = {
  (emit: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  category: TAG_TYPE.PRIMARY,
})

const emits = defineEmits<Emits>()

const onClick = () => {
  if (props.disabled) return false
  return emits('click')
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use 'sass:color';

.ha-tag {
  display: inline-block;

  width: fit-content;
  padding: v.space(1) v.space(2);
  border-radius: 4px;

  font-size: 12px;
  line-height: 1;

  transition: color 0.2s ease, background-color 0.2s ease;

  &.-clickable {
    cursor: pointer;
  }

  &.-primary {
    font-weight: 600;
    color: v.$white;
    background-color: v.$primary-color;

    &.-clickable:hover {
      background-color: v.$yellow;
      box-shadow: 0 0 6px v.$yellow;
    }

    &.-disabled {
      color: v.$gray-3;
      background-color: v.$button-disabled-color;
    }
  }

  &.-pink {
    color: v.$white;
    background-color: v.$pink;

    &.-clickable:hover {
      background-color: color.adjust(
        v.$pink,
        $saturation: 10%,
        $lightness: 10%
      );
      box-shadow: 0 0 6px v.$pink;
    }

    &.-disabled {
      color: v.$gray-3;
      background-color: v.$button-disabled-color;
    }
  }

  &.-outline {
    border: v.$pink 1px solid;
    color: v.$pink;
    background-color: transparent;

    &.-clickable:hover {
      color: v.$white;
      background-color: v.$pink;
    }

    &.-disabled {
      color: v.$gray-3;
      background-color: v.$button-disabled-color;
    }
  }

  &.-gray {
    color: v.$white;
    background-color: v.$gray;

    &.-clickable:hover {
      background-color: color.adjust(
        v.$gray,
        $saturation: 10%,
        $lightness: 10%
      );
    }

    &.-disabled {
      color: v.$gray-3;
      background-color: v.$button-disabled-color;
    }
  }

  &.-danger {
    color: v.$white;
    background-color: v.$red;

    &.-clickable:hover {
      background-color: color.adjust(v.$red, $saturation: 10%, $lightness: 10%);
    }

    &.-disabled {
      color: v.$gray-3;
      background-color: v.$button-disabled-color;
    }
  }
}
</style>
```

## File: layers/base/app/components/ha/HaTextarea.vue
```vue
<template>
  <div class="ha-textarea">
    <label
      class="label"
      :class="[errorMessage ? '-error' : '']"
    >
      <template v-if="counter">
        <span class="counter">{{ count }}</span>
      </template>
      <textarea
        v-model="text"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :rows="rows"
        class="input"
      />
    </label>
    <p :class="['error-container', { '-hide': hideDetails }]">
      <span
        v-if="errorMessage"
        class="error"
      >{{ errorMessage }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

type FieldInput = string | number | null

const props = withDefaults(
  defineProps<{
    placeholder?: string
    type?: string
    validatorName?: string
    validatorRules?:
      | ZodType<string, ZodTypeDef, FieldInput>
      | ZodEffects<ZodType<string, ZodTypeDef, FieldInput>>
    required?: boolean
    modelValue?: string | number
    disabled?: boolean
    rows?: number
    counter?: boolean | { max: number }
    hideDetails?: boolean
    keepValueOnUnmount?: boolean
  }>(),
  {
    placeholder: 'Input Text',
    type: 'text',
    validatorName: 'FileInput',
    validatorRules: undefined,
    required: false,
    modelValue: '',
    disabled: false,
    rows: 5,
    counter: false,
    hideDetails: false,
    keepValueOnUnmount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'input', text: string): void
  (e: 'validate', isValid: boolean): void
}>()

const fieldOptions = {
  initialValue: props.modelValue,
  keepValueOnUnmount: props.keepValueOnUnmount,
}

const { value: fieldValue, errorMessage } = useField(
  toRef(props, 'validatorName'), props.validatorRules, fieldOptions,
)

const text = computed({
  get(): string {
    if (fieldValue.value === null) {
      return ''
    }
    return '' + fieldValue.value
  },
  set(text: string): void {
    emit('update:modelValue', text)
    emit('input', text)
    fieldValue.value = text
    emit('validate', !!errorMessage.value)
  },
})

/** 肩に表示する文字数カウント文字列 */
const count = computed((): string | number => {
  const inputLength = text.value.length
  const max = typeof props.counter === 'object' ? props.counter.max : undefined
  const maxRuleLength = max ?? getMax(props.validatorRules?._def)
  return maxRuleLength ? `${inputLength}/${maxRuleLength}` : inputLength
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.ha-textarea {
  > .label {
    position: relative;

    display: block;

    width: 100%;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    background-color: v.$white;

    &:disabled {
      border-color: rgb(0 0 0 / 12%);
    }

    &:active,
    &:focus,
    &:hover,
    &:focus-within {
      border-color: v.$primary-color;

      .ha-textarea {
        &__input {
          caret-color: v.$primary-color;
        }
      }
    }

    &.-error {
      border-color: v.$red;

      > .input {
        caret-color: v.$red;
      }
    }
  }

  > .label > .counter {
    position: absolute;
    top: -18px;
    right: 0;

    display: block;

    font-size: 11px;
    text-align: right;
  }

  > .label > .input {
    width: 100%;
    padding: 9px 12px 11px;

    font-size: 16px;
    line-height: 24px;
    color: v.$black;

    &::placeholder {
      color: v.$gray-1;
    }

    &::selection {
      color: v.$white;
      background-color: v.$primary-color;
    }
  }

  > .error-container {
    display: block;
    min-height: 20px;
    margin-top: 8px;

    > .error {
      display: block;

      width: fit-content;

      font-size: 12px;
      font-weight: 400;
      color: v.$red;
    }

    &.-hide {
      display: none;
      min-height: auto;
      margin-top: 0;
    }
  }
}
</style>
```

## File: layers/base/app/components/ha/HaVideo.vue
```vue
<template>
  <video
    ref="haVideoRef"
    class="ha-video"
    :src="src"
    :autoplay="autoplay"
    :autopictureinpicture="autopictureinpicture"
    :controls="controls"
    :disablepictureinpicture="disablepictureinpicture"
    :controlslist="controlslist"
    :crossorigin="crossorigin"
    :disableremoteplayback="disableremoteplayback"
    :x-webkit-airplay="disableremoteplayback ? 'deny' : false"
    :width="width"
    :height="height"
    :loop="loop"
    :muted="muted"
    :playsinline="playsinline"
    :poster="poster"
    :preload="preload"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    height?: string
    width?: string
    play?: boolean
    autoplay?: boolean
    autopictureinpicture?: boolean
    controls?: boolean
    disablepictureinpicture?: boolean
    disableremoteplayback?: boolean
    loop?: boolean
    muted?: boolean
    playsinline?: boolean
    poster?: string
    // nodownload, nofullscreen, noremoteplayback
    controlslist?: string
    // anonymous, use-credentials
    crossorigin?: string
    // none, metadata, auto
    preload?: string
  }>(),
  {
    height: '',
    width: '',
    autoplay: false,
    play: false,
    autopictureinpicture: false,
    controls: false,
    disablepictureinpicture: false,
    disableremoteplayback: false,
    loop: false,
    muted: false,
    playsinline: false,
    poster: '',
    controlslist: '',
    crossorigin: '',
    preload: 'auto',
  },
)
const emit = defineEmits<{
  (
    emit:
      | 'progress'
      | 'suspend'
      | 'durationchange'
      | 'loadedmetadata'
      | 'loadeddata'
      | 'canplay'
      | 'playing'
      | 'pause'
      | 'ended'
      | 'seeking'
      | 'timeupdate'
      | 'volumechange'
      | 'ratechange'
      | 'waiting',
    e: Event
  ): void
}>()

const haVideoRef = ref<HTMLVideoElement | null>(null)

// note: HaVideoがmounted後にpropsを変えないとwatchされない
watch(props, async () => {
  if (haVideoRef.value === null) {
    return
  }

  if (props.play) {
    await haVideoRef.value.play()
  } else {
    haVideoRef.value.pause()
  }
})

onMounted(() => {
  haVideoRef.value?.addEventListener('progress', (e: Event) =>
    emit('progress', e),
  )
  haVideoRef.value?.addEventListener('suspend', (e: Event) =>
    emit('suspend', e),
  )
  haVideoRef.value?.addEventListener('durationchange', (e: Event) =>
    emit('durationchange', e),
  )
  haVideoRef.value?.addEventListener('loadedmetadata', (e: Event) =>
    emit('loadedmetadata', e),
  )
  haVideoRef.value?.addEventListener('loadeddata', (e: Event) =>
    emit('loadeddata', e),
  )
  haVideoRef.value?.addEventListener('canplay', (e: Event) =>
    emit('canplay', e),
  )
  haVideoRef.value?.addEventListener('playing', (e: Event) =>
    emit('playing', e),
  )
  haVideoRef.value?.addEventListener('pause', (e: Event) => emit('pause', e))
  haVideoRef.value?.addEventListener('ended', (e: Event) => emit('ended', e))
  haVideoRef.value?.addEventListener('seeking', (e: Event) =>
    emit('seeking', e),
  )
  haVideoRef.value?.addEventListener('timeupdate', (e: Event) =>
    emit('timeupdate', e),
  )
  haVideoRef.value?.addEventListener('volumechange', (e: Event) =>
    emit('volumechange', e),
  )
  haVideoRef.value?.addEventListener('ratechange', (e: Event) =>
    emit('ratechange', e),
  )
  haVideoRef.value?.addEventListener('waiting', (e: Event) =>
    emit('waiting', e),
  )
})
</script>
```

## File: layers/base/app/components/hm/button/HmButton.vue
```vue
<template>
  <HaBaseButton
    :class="[
      'hm-button',
      `-${color}`,
      `-${size}`,
      { '-disabled': disabled },
      { '-outline': outline },
    ]"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </HaBaseButton>
</template>

<script lang="ts">
import { ButtonType } from '#base/app/components/ha/base/HaBaseButton.vue'

export default defineComponent({
  name: 'HmButton',
})
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: ButtonType
    disabled?: boolean
    outline?: boolean
    size?: 'md' | 'sm'
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info'
  }>(),
  {
    type: 'button',
    disabled: false,
    outline: false,
    size: 'md',
    color: 'primary',
  },
)

const emit = defineEmits<{
  (e: 'click'): void
}>()

function onClick(): void {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-button {
  cursor: pointer;
  min-width: 96px;
  border-radius: 6px;
  line-height: 1;

  &.-md {
    height: 48px;
    padding: 0 36px;
    font-size: 16px;
  }

  &.-sm {
    height: 30px;
    padding: 0 12px;
    font-size: 12px;
  }

  &.-primary:not(.-outline) {
    color: v.$white;
    background-color: v.$primary-button-default-color;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$primary-button-active-color;
    }
  }

  &.-primary.-outline {
    border: 2px solid v.$primary-button-default-color;
    color: v.$primary-button-default-color;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$primary-button-default-color;
    }
  }

  &.-secondary:not(.-outline) {
    color: v.$white;
    background-color: v.$secondary-button-default-color;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$secondary-button-active-color;
    }
  }

  &.-secondary.-outline {
    border: 2px solid v.$secondary-button-default-color;
    color: v.$secondary-button-default-color;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$secondary-button-default-color;
    }
  }

  &.-danger:not(.-outline) {
    color: v.$white;
    background-color: v.$red;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-danger.-outline {
    border: 2px solid v.$red;
    color: v.$red;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$red;
    }
  }

  &.-warning:not(.-outline) {
    color: v.$white;
    background: #a18d0a;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-warning.-outline {
    border: 2px solid #a18d0a;
    color: #a18d0a;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background: #a18d0a;
    }
  }

  &.-success:not(.-outline) {
    color: v.$white;
    background: v.$green;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-success.-outline {
    border: 2px solid v.$green;
    color: v.$green;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background: v.$green;
    }
  }

  &.-info:not(.-outline) {
    color: v.$white;
    background-color: v.$blue-1;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-info.-outline {
    border: 2px solid v.$blue-1;
    color: v.$blue-1;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$blue-1;
    }
  }

  &.-primary.-disabled,
  &.-secondary.-disabled,
  &.-danger.-disabled,
  &.-warning.-disabled,
  &.-success.-disabled,
  &.-info.-disabled {
    pointer-events: none;

    border-color: v.$button-disabled-color;

    color: v.$white;

    opacity: 0.5;
    background-color: v.$button-disabled-color;
  }
}
</style>
```

## File: layers/base/app/components/hm/button/HmButtonClose.vue
```vue
<template>
  <HaBaseButton
    class="hm-button-close"
    @click="onClick"
  >
    <IconClose
      :style="{
        width: width,
        height: height,
      }"
    />
  </HaBaseButton>
</template>

<script setup lang="ts">
import IconClose from '#base/app/assets/icons/icon-close.svg'

type Emits = {
  (e: 'click'): () => void
}

const emit = defineEmits<Emits>()
const onClick = () => emit('click')

type Props = {
  width?: string
  height?: string
}

withDefaults(defineProps<Props>(), {
  width: '20px',
  height: '20px',
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use 'sass:color';

.hm-button-close {
  :deep(circle) {
    transition: fill 0.2s ease;
  }

  &:hover :deep(circle) {
    // note: opacityだと後ろのborderが見えてしまうのでsvgの色を変更
    fill: color.adjust(v.$gray-1, $lightness: 5%);
  }
}
</style>
```

## File: layers/base/app/components/hm/button/HmButtonFavorite.vue
```vue
<template>
  <div
    class="hm-button-favorite"
    :class="{ '-disabled': disabled }"
  >
    <div
      class="button"
      @click="onClick"
    >
      <IconFavorite
        class="favorite-icon"
        :class="{ '-active': value, '-disabled': disabled }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconFavorite from '#base/app/assets/icons/icon-heart.svg'

const props = withDefaults(
  defineProps<{
    value: boolean
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)
const emit = defineEmits<{
  (event: 'input', value: boolean): void
}>()

const onClick = () => {
  if (props.disabled) return
  emit('input', !props.value)
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-button-favorite {
  > .button {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  &.-disabled {
    > .button {
      cursor: not-allowed;
    }
  }

  .button:deep(.body) {
    fill: none;
  }

  .button:deep(.border) {
    fill: #f5f5f5;
  }
}

.favorite-icon:not(.-disabled) {
  filter: drop-shadow(0 0 3px rgba(#fff, 0.75));

  .body {
    fill: #fff;
    transition: fill 0.1s ease-in;
  }

  &.-active,
  &:hover {
    .border,
    .body {
      fill: #f2509c;
    }
  }
}

.favorite-icon.-disabled {
  .body {
    fill: v.$gray-3;
    transition: fill 0.1s ease-in;
  }
}
</style>
```

## File: layers/base/app/components/hm/icon/HmIconUser.vue
```vue
<template>
  <span class="hm-icon-user">
    <HaImage
      class="image"
      :src="props.src"
      :noImage="noImage"
      :draggable="false"
    />
  </span>
</template>

<script lang="ts" setup>
import noImage from '#base/public/images/no-image_1x1.jpg'

type Props = {
  src: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
// NOTE:
// 汎用性を持たせるためにサイズについては、srcに設定した画像サイズを可能な範囲で反映するように作成しています。
// プロジェクトの要件などで「設定した画像のサイズに関わらず固定の値を設定したい」場合は適宜CSSを変更してください。
.hm-icon-user {
  user-select: none;

  overflow: hidden;
  display: inline-block;

  aspect-ratio: 1 / 1;
  min-width: 24px;
  border-radius: 50%;

  > .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
```

## File: layers/base/app/components/hm/input/HmInputCheckbox.vue
```vue
<template>
  <label
    class="hm-input-checkbox"
    :class="{ ['-disabled']: disabled }"
  >
    <HaBaseInput
      v-model="innerValue"
      type="checkbox"
      class="button"
      :name="name"
      :disabled="disabled"
      :required="required"
      :checked="innerValue"
    />
    <div class="content">
      <slot />
    </div>
    <span
      v-if="validatorRules && errorMessage"
      class="error"
    >{{
      errorMessage
    }}</span>
  </label>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

const props = withDefaults(
  defineProps<{
    validatorName?: string
    validatorRules?:
      | ZodType<boolean, ZodTypeDef, boolean>
      | ZodEffects<ZodType<boolean, ZodTypeDef, boolean>>
    name: string
    modelValue?: boolean
    required?: boolean
    disabled?: boolean
  }>(),
  {
    validatorName: 'checkbox',
    validatorRules: undefined,
    modelValue: false,
    required: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'validate' | 'input', value: boolean): void
}>()

const { value: fieldValue, errorMessage } = useField(
  toRef(props, 'validatorName'),
  props.validatorRules,
  { initialValue: props.modelValue },
)

const innerValue = computed({
  get(): boolean {
    return props.modelValue
  },
  set(value: boolean): void {
    emit('update:modelValue', value)
    emit('input', value)
    fieldValue.value = value
    emit('validate', !!errorMessage.value)
  },
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-checkbox {
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &.-disabled {
    cursor: default;
    color: v.$gray-1;
  }

  > .button {
    display: none;
  }

  > .button:checked + .content {
    &::after {
      display: block;
    }
  }

  > .error {
    display: block;

    width: 100%;
    margin-top: 8px;

    font-size: 10px;
    font-weight: 400;
    color: v.$red;
  }

  > .content {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-left: 34px;

    &::before {
      content: '';

      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      width: 24px;
      height: 24px;
      border: 1px solid v.$primary-color;
      border-radius: 20%;

      background-color: v.$white;
    }

    &::after {
      content: '';

      position: absolute;
      top: 50%;
      left: 11px;
      transform: translate(-50%, -50%) rotate(-140deg);

      display: none;

      width: 10px;
      height: 14px;
      border-top: 4px solid v.$primary-color;
      border-left: 4px solid v.$primary-color;
    }
  }

  &.-disabled > .content {
    &::before {
      border: 1px solid v.$gray-1;
    }

    &::after {
      border-top: 4px solid v.$gray-1;
      border-left: 4px solid v.$gray-1;
    }
  }

  // ヘッダー検索窓用設定
  &.-search {
    > .content {
      padding-left: 28px;

      &::before {
        width: 20px;
        height: 20px;
        border: 3px solid v.$gray-2;
        background-color: transparent;
      }

      &::after {
        top: 45%;
        left: 10px;
      }
    }

    > .error {
      display: none;
    }
  }
}
</style>
```

## File: layers/base/app/components/hm/input/HmInputDatetime.vue
```vue
<template>
  <div
    :name="validatorName"
    class="hm-input-datetime"
  >
    <label
      :class="[
        errorMessage
          ? 'hm-input-datetime__label --error'
          : 'hm-input-datetime__label',
      ]"
    >
      <HaBaseInput
        v-model="date"
        :type="type"
        :disabled="disabled"
        :required="required"
        :min="min"
        :max="max"
        class="hm-input-datetime__input"
        @keyup.enter="enter"
      />
    </label>
    <p
      class="error-container"
      :class="{ '-hide': hideDetails }"
    >
      <template v-if="errorMessage">
        <span class="error">{{ errorMessage }}</span>
      </template>
    </p>
  </div>
</template>

<script lang="ts">
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

export default defineComponent({
  name: 'HmInputDatetime',
})

export type Props = {
  type?: 'datetime-local' | 'date' | 'time'
  validatorName?: string
  validatorRules?:
    | ZodType<string, ZodTypeDef, string>
    | ZodEffects<ZodType<string, ZodTypeDef, string>>
  required?: boolean
  modelValue?: string
  disabled?: boolean
  // FIXME: 型定義をstringからyyyy-mm-ddなどinput type=dateが許容している物にする
  min?: number | string
  // FIXME: 型定義をstringからyyyy-mm-ddなどinput type=dateが許容している物にする
  max?: number | string
  keyupEnter?: boolean
  validateOnMount?: boolean
  hideDetails?: boolean
  error?: string | undefined
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<Props>(),
  {
    type: 'datetime-local',
    validatorName: 'dateLocal',
    validatorRules: undefined,
    required: false,
    modelValue: '',
    disabled: false,
    min: undefined,
    max: undefined,
    keyupEnter: false,
    validateOnMount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'input', value: string): void
  (e: 'validation', isValid: boolean): void
  (e: 'enter'): void
}>()

const { value: fieldValue, errorMessage: _errorMessage } = useField(
  toRef(props, 'validatorName'),
  props.validatorRules,
  { initialValue: props.modelValue, validateOnMount: props.validateOnMount },
)

const date = computed({
  get: () => {
    if (props.modelValue === undefined) return ''
    if (props.type === 'datetime-local')
      return formatDate('YYYY-MM-DD HH:mm', props.modelValue)
    if (props.type === 'date') return formatDate('YYYY-MM-DD', props.modelValue)
    if (props.type === 'time')
      return formatDate('HH:mm', `1970-00-00 ${props.modelValue}`)
    return ''
  },
  set: (date: string) => {
    emit('update:modelValue', date)
    emit('input', date)
    fieldValue.value = date
    emit('validation', !!errorMessage.value)
  },
})

const errorMessage = computed(() => {
  if (props.error) return props.error
  return _errorMessage.value
})

const enter = () => {
  if (props.keyupEnter) {
    emit('enter')
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-datetime {
  &__label {
    position: relative;

    display: block;

    width: 100%;
    height: 44px;
    padding: 9px 12px 11px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    background-color: v.$white;

    &:disabled {
      border-color: rgb(0 0 0 / 12%);
    }

    &:active,
    &:focus,
    &:hover,
    &:focus-within {
      border-color: v.$primary-color;

      .hm-input-datetime {
        &__input {
          caret-color: v.$primary-color;
        }
      }
    }

    &.--error {
      border-color: v.$red;

      .hm-input-datetime {
        &__input {
          caret-color: v.$red;
        }
      }
    }
  }

  &__counter {
    position: absolute;
    top: -18px;
    right: 0;

    display: block;

    font-size: 11px;
    text-align: right;
  }

  &__input {
    width: 100%;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      color: v.$gray-1;
    }

    &::selection {
      color: v.$white;
      background-color: v.$primary-color;
    }
  }
}

.error-container {
  display: block;
  min-height: 20px;
  margin-top: 8px;

  &.-hide {
    display: none;
  }

  > .error {
    display: block;

    width: fit-content;

    font-size: 12px;
    font-weight: 400;
    color: v.$red;
  }
}
</style>
```

## File: layers/base/app/components/hm/input/HmInputFile.vue
```vue
<template>
  <!-- TODO: エラーメッセージの表示をする際に、必要に応じてHmInputTextBase.vue同様の修正(DOM構造とエラーmsgのstyle)を行う -->
  <label
    ref="box"
    :class="['hm-input-file', { '-dragover': isDragOver }]"
    @dragenter.prevent="toggleDragOver(true)"
    @dragleave.prevent="toggleDragOver(false)"
    @dragover.prevent
    @drop.prevent="onDrop($event)"
  >
    <HaBaseInput
      ref="fileInput"
      class="input"
      type="file"
      name="file"
      :accept="accept"
      :multiple="multiple"
      :files="files"
      :required="required"
      @click="onClick"
      @change="onChange($event)"
    />
    <div class="image-box">
      <slot>
        <div class="inner">
          <span class="text"> Select file or drag it! </span>
        </div>
      </slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { z } from 'zod/v3'
import { isValueOf } from '#base/app/utils/zod'

const htmlInputElementAndFilesSchema = z.instanceof(HTMLInputElement).and(
  z.object({
    files: z.instanceof(FileList),
  }),
)

type Props = {
  required?: boolean
  accept?: string
  multiple?: boolean
  propFiles?: FileList
}
const props = withDefaults(defineProps<Props>(), {
  required: false,
  accept: '',
  multiple: false,
  propFiles: undefined,
})

type Emits = {
  (e: 'input:multiple' | 'input:single', files: FileList): void
  (e: 'cancel'): void
}
const emit = defineEmits<Emits>()

const fileInput = ref<HTMLInputElement>()
const isDragOver = ref(false)
const clickListener = ref<((evt: Event) => void) | null>(null)

const files = computed({
  get: () => props.propFiles,
  set: (files?: FileList) => {
    if (!files) return
    if (props.multiple) {
      emit('input:multiple', files)
    }
    if (!props.multiple) {
      emit('input:single', files)
    }
  },
})

onMounted(() => {
  if (!isValueOf(htmlInputElementAndFilesSchema, fileInput.value)) {
    return
  }

  clickListener.value = () => {
    window.onfocus = () => {
      setTimeout(() => {
        if (fileInput.value?.files?.length === 0) {
          emit('cancel')
        }
      }, 500)
    }
    window.onload = null
  }
  fileInput.value.addEventListener('click', clickListener.value)
})

onUnmounted(() => {
  if (
    isValueOf(htmlInputElementAndFilesSchema, fileInput.value)
    && clickListener.value
  ) {
    fileInput.value.removeEventListener('click', clickListener.value)
  }
})

const toggleDragOver = (isDragover: boolean) => {
  isDragOver.value = isDragover
}

const onDrop = (event: DragEvent) => {
  toggleDragOver(false)
  if (event?.dataTransfer) {
    files.value = event?.dataTransfer?.files
  }
}

const onChange = (event: Event) => {
  const target: (EventTarget & { files?: FileList }) | null = event?.target
  if (target !== null && !(target?.files instanceof FileList)) {
    throw new Error('Illegal. This functions is only for file input elements')
  }
  if (target?.files) {
    files.value = target.files
  }
}

const onClick = () => {
  // todo: 同じファイルを二回開けないのでclick時空にする
  if (fileInput.value instanceof HTMLInputElement) {
    fileInput.value.value = ''
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/mixins' as m;
@use '#base/app/assets/styles/variables' as v;

.hm-input-file {
  cursor: pointer;
  align-items: center;
  width: 100%;
  height: 100%;

  &.-dragover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.7;
  }

  @include m.sp {
    &:hover {
      opacity: inherit;
    }

    &:active {
      opacity: 0.7;
    }
  }

  > .input {
    display: none;
    width: 0;
    height: 0;
    visibility: hidden;
  }

  > .error {
    display: block;

    width: fit-content;

    font-size: 10px;
    font-weight: 400;
    color: v.$red;
  }
}

.image-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  > .inner {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-color: #d5d5d5;
  }

  > .inner > .text {
    color: v.$base-font-color;
  }
}
</style>
```

## File: layers/base/app/components/hm/input/HmInputRadio.vue
```vue
<template>
  <label class="hm-input-radio">
    <HaBaseInput
      type="radio"
      class="button"
      :modelValue="value"
      :name="name"
      :checked="checked"
      @change="onChange"
    />
    <div class="content">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    value: string | number
    checked?: boolean
  }>(),
  {
    checked: false,
  },
)
const emit = defineEmits<{
  (e: 'change', value: number): void
}>()
function onChange(e: Event): void {
  if (e.target instanceof HTMLInputElement) {
    emit('change', Number(e.target.value))
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-radio {
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  > .button {
    display: none;
  }

  > .content {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-left: 34px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      border-radius: 50%;
    }

    &::before {
      left: 0;
      transform: translateY(-50%);

      width: 24px;
      height: 24px;
      border: 2px solid v.$blue;

      background-color: v.$white;
    }

    &::after {
      left: 12px;
      transform: translate(-50%, -50%);

      display: none;

      width: 14px;
      height: 14px;

      background-color: v.$primary-color;
    }
  }

  > .button:checked + .content::after {
    display: block;
  }
}
</style>
```

## File: layers/base/app/components/hm/input/HmInputRadioChangeable.vue
```vue
<template>
  <div class="hm-input-radio-changeable">
    <div
      v-for="(option, index) in props.options"
      :key="option.value"
      ref="radiobuttons"
      class="radio"
    >
      <HaBaseInput
        :id="option.value"
        class="input"
        type="radio"
        :name="props.name"
        :value="option.value"
        :modelValue="option.value"
        :checked="option.checked"
        :disabled="option.disabled"
        required
        @change="onChange($event)"
      />
      <label
        :for="option.value"
        class="label"
        :class="`option-${index}`"
      >
        <template v-if="option.before">
          <ClientOnly>
            <component
              :is="option.before"
              class="before"
            />
          </ClientOnly>
        </template>
        {{ option.label }}
        <template v-if="option.after">
          <ClientOnly>
            <component
              :is="option.after"
              class="after"
            />
          </ClientOnly>
        </template>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod/v3'

type Radio = {
  label: string
  value: string
  checked?: boolean
  disabled?: boolean
  before?: Component
  after?: Component
}

type Props = {
  name: string
  options: Radio[]
}
const props = defineProps<Props>()

const radiobuttons = ref<HTMLDivElement[]>()

/** props.optionsを監視し、親コンポーネントでの変更をラジオボタンに反映する */
watch(toRef(props.options), (_next, _prev) => {
  // チェックされているオブジェクトを探す
  const checkedOptions
    = props.options.find(element => element.checked)
      ?? raiseError('HmInputRadioChangeable: watch: checkedOptions')

  // チェック対象を探す
  const buttons
    = radiobuttons.value
      ?? raiseError('HmInputRadioChangeable: watch: radiobuttons')
  const checkTarget
    = buttons.find(
      // チェックされているオブジェクトとidが同じものがチェック対象
      element => element.children[0]?.id === checkedOptions?.value,
    ) ?? raiseError('HmInputRadioChangeable: watch: checkTarget')

  // 探したチェック対象をチェック済にする
  const checkbox = z
    .object({ checked: z.boolean() })
    .parse(checkTarget.children[0])
  checkbox.checked = true
})

type Emits = {
  (e: 'change', value: string): void
}
const emit = defineEmits<Emits>()
const onChange = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit('change', e.target.value)
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-radio-changeable {
  display: flex;
  width: 100%;

  .radio {
    flex: 1;

    > .label {
      cursor: pointer;
      user-select: none;

      display: block;

      height: 100%;
      padding: v.space(2) 0;
      border: solid 1px v.$navy-2;

      text-align: center;
      white-space: pre-wrap;

      background-color: v.$navy-1;

      &:hover {
        background-color: v.$green-4;
      }
    }
  }
}

.input {
  display: none;

  &:checked,
  &:hover,
  &:focus {
    + .label {
      border-color: v.$blue;
      background-color: v.$green-4;
    }
  }
}
</style>
```

## File: layers/base/app/components/hm/input/HmInputSingleImage.vue
```vue
<i18n lang="yaml">
ja:
  explain: "画像を切り抜く範囲を指定して、「切り抜く」ボタンをクリックしてください。マウスホイールで拡大・縮小できます。"
en:
  explain: "Please adjust the crop area and click the 'Crop' button. Scroll the mouse wheel to zoom in and out."
</i18n>

<template>
  <div
    class="hm-input-single-image"
    :class="{ '-rounded': previewRounded }"
  >
    <div class="wrapper">
      <HmInputFile
        ref="input"
        :required="isRequired"
        :accept="accept"
        class="hm-single-image-uploader"
        :class="{ '-rounded': previewRounded }"
        :propFiles="fileList"
        @input:single="changeImage"
        @cancel="cancel"
      >
        <template v-if="imageUrl">
          <HaImage
            :key="imageUrl"
            :src="imageUrl"
            :alt="imageAlt"
            class="preview"
            :class="[previewRounded ? '-rounded' : '']"
          />
        </template>
        <template v-else>
          <slot name="noImage" />
        </template>
        <slot />
      </HmInputFile>
    </div>
    <p class="error-container">
      <template v-if="error">
        <span class="error">{{ error }}</span>
      </template>
    </p>
    <template v-if="imageUrl && isRemovable">
      <button
        type="button"
        class="remove"
        @click="removeImage"
      />
    </template>
    <template v-if="showCropper">
      <HaDialog
        class="ha-dialog"
        @close="cancelCropper"
      >
        <div class="crop-container">
          <p class="message">
            {{ i18n.t('explain') }}
          </p>
          <HmClipping
            :src="cropImage || ''"
            :width="cropWidth"
            :height="cropHeight"
            :ext="cropExt"
            :autoZoom="true"
            class="main"
            @clipped="onClipped"
          />
        </div>
      </HaDialog>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'
import { ZodEffects, ZodOptional, ZodType, ZodTypeDef } from 'zod/v3'

const i18n = useI18n()

export type Props = {
  validatorName?: string
  imageAlt?: string
  optionalAccept?: string
  modelValue?: File
  defaultImageUrl: string | null
  validatorRules?:
    | ZodType<File, ZodTypeDef, File>
    | ZodEffects<ZodEffects<ZodOptional<ZodType<File, ZodTypeDef, File>>>>
  error?: string | undefined
  previewRounded?: boolean
  isRemovable?: boolean
  isRequired?: boolean
  needCropper?: boolean
  cropWidth?: number
  cropHeight?: number
  cropExt?: string
}
const props = withDefaults(defineProps<Props>(), {
  validatorName: 'SingleImageInput',
  imageAlt: 'uploaded image',
  optionalAccept: '',
  modelValue: undefined,
  validatorRules: undefined,
  error: undefined,
  previewRounded: false,
  isRemovable: false,
  isRequired: true,
  needCropper: false,
  cropWidth: 0,
  cropHeight: 0,
  cropExt: 'jpeg',
})

type Emits = {
  (e: 'update:model-value', image?: File): void
  (e: 'remove'): void
}
const emit = defineEmits<Emits>()

const fileList = computed(() => {
  if (!value.value) return undefined
  const dt = new DataTransfer()
  dt.items.add(value.value)
  return dt.files
})

const imageUrl = computed(() =>
  value.value ? readFileAsBlob(value.value) : props.defaultImageUrl,
)

const showCropper = ref(false)
const cropImage = ref<string>()

const { value, errorMessage, validate } = useField<File | undefined>(
  toRef(props, 'validatorName'),
  props.validatorRules,
  { initialValue: props.modelValue, syncVModel: false },
)

/** 外からエラーメッセージを上書きするパターン用エスケープハッチ */
const error = computed(() => errorMessage.value || props.error)

const accept = computed(() => {
  const defaultAccept = 'image/png,image/jpeg'
  if (!props.optionalAccept) return defaultAccept
  return `${defaultAccept}, ${props.optionalAccept}`
})

const changeImage = async (images: FileList | null) => {
  if (images === null) {
    return
  }

  // note: ファイルが空の場合、cancelメソッドが叩かれる。この分岐は正常系では通らない
  const image = images[0]
  if (!image) {
    return
  }

  if (!props.needCropper) {
    await returnImage(image)
    return
  }
  if (!props.cropWidth && !props.cropHeight) {
    await openCropper(image)
    return
  }

  /*
   * note: Cropサイズが指定されている場合、画像がそのサイズと同じならクロッパーを表示しない
   * note: Cropサイズが指定されている場合、画像がそのサイズより小さいならアラートを表示
   */
  const imgEl = new Image()
  imgEl.src = URL.createObjectURL(image)
  imgEl.onerror = () => {
    alert('image loading failed / 画像の読み込みに失敗しました')
  }
  imgEl.onload = async () => {
    if (props.cropWidth && props.cropHeight) {
      if (
        imgEl.width === props.cropWidth
        && imgEl.height === props.cropHeight
      ) {
        await returnImage(image)
        return
      } else if (
        imgEl.width < props.cropWidth
        || imgEl.height < props.cropHeight
      ) {
        alert(
          `${props.cropWidth}px x ${props.cropHeight}px以上の画像を指定してください`,
        )
        return
      }
      await openCropper(image)
      return
    }

    if (props.cropWidth) {
      if (imgEl.width === props.cropWidth) {
        await returnImage(image)
        return
      } else if (imgEl.width < props.cropWidth) {
        alert(`幅${props.cropWidth}px以上の画像を指定してください`)
        return
      }
      await openCropper(image)
      return
    }

    if (props.cropHeight) {
      if (imgEl.height === props.cropHeight) {
        await returnImage(image)
        return
      } else if (imgEl.height < props.cropHeight) {
        alert(`高さ${props.cropHeight}px以上の画像を指定してください`)
        return
      }
      await openCropper(image)
    }
  }
}

const openCropper = (image: File) => {
  const reader = new FileReader()
  reader.readAsDataURL(image)
  return new Promise<void>((resolve, _reject) => {
    reader.onload = () => {
      cropImage.value
        = typeof reader.result === 'string' ? `${reader.result}` : ''
      showCropper.value = true
      return resolve()
    }
  })
}

const cancelCropper = () => {
  cancel()
  closeCropper()
}

const closeCropper = () => {
  showCropper.value = false
}

const onClipped = async (images: File[]) => {
  if (!images[0]) return
  await returnImage(images[0])
  closeCropper()
}

const returnImage = (image: File) => {
  return emitImage(image)
}

const removeImage = async () => {
  emit('remove')
  await emitImage()
}

const emitImage = async (image?: File) => {
  value.value = image
  const result = await validate()
  if (result.valid) emit('update:model-value', image)
}

const cancel = () => {
  emit('update:model-value', undefined)
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.hm-input-single-image {
  position: relative;

  display: block;

  width: fit-content;
  max-width: 100%;
  height: fit-content;
  max-height: 100%;
  margin: auto;

  > .wrapper {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - 28px);
    height: calc(100% - 28px);
    margin: 0 auto;
  }

  > .wrapper > .uploader {
    display: block;
    width: 100%;
    height: 100%;
  }

  > .remove {
    position: absolute;
    top: 0;
    right: 0;

    display: block;

    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: v.$black;

    &::before,
    &::after {
      content: '';

      position: relative;

      display: block;

      width: 30px;
      border-top: 3px solid v.$white;
    }

    &::before {
      top: 1px;
      left: 1px;
      transform: rotate(45deg);
      height: 1px;
    }

    &::after {
      top: -1px;
      right: -1px;
      transform: rotate(-45deg);
      height: 2px;
    }
  }

  .error-container {
    display: block;

    min-height: 20px;
    margin-top: 8px;

    font-size: 12px;
    font-weight: 400;
    color: v.$red;
  }
}

.crop-message {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 16px;
  color: v.$base-font-color;
}

.crop-container {
  height: 100%;
  padding: 30px;

  @include m.sp {
    font-size: 10px;
  }

  > .main {
    height: calc(100% - 90px);
  }
}

.preview {
  max-height: 100%;
  object-fit: cover;
}

.ha-dialog {
  padding: 30px;

  &:deep(.dialog-window) {
    height: 100%;
  }
}
</style>
```

## File: layers/base/app/components/hm/input/HmInputText.vue
```vue
<template>
  <div
    tag="div"
    class="hm-input-text"
  >
    <label :class="['label', { '-error': error }, { '-small': small }]">
      <template v-if="counter">
        <span class="counter">{{ count }}</span>
      </template>
      <template v-if="isLazy">
        <template v-if="isTrim">
          <HaBaseInput
            v-model.trim.lazy="text"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :min="typeof min === 'boolean' ? undefined : min"
            class="input"
            :class="{ '-small': small }"
            :name="name"
            :list="list"
            @keyup.enter="enter"
          />
        </template>
        <template v-else>
          <HaBaseInput
            v-model.lazy="text"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :min="typeof min === 'boolean' ? undefined : min"
            class="input"
            :class="{ '-small': small }"
            :name="name"
            :list="list"
            @keyup.enter="enter"
          />
        </template>
      </template>
      <template v-else-if="isTrim">
        <HaBaseInput
          v-model.trim="text"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :min="typeof min === 'boolean' ? undefined : min"
          class="input"
          :class="{ '-small': small }"
          :name="name"
          :list="list"
          @keyup.enter="enter"
        />
      </template>
      <template v-else>
        <HaBaseInput
          v-model="text"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :min="typeof min === 'boolean' ? undefined : min"
          class="input"
          :class="{ '-small': small }"
          :name="name"
          :list="list"
          @keyup.enter="enter"
        />
      </template>
    </label>
    <template v-if="!noValidate">
      <p :class="['error-container', { '-hide': hideDetails }]">
        <template v-if="error">
          <span class="error">{{ error }}</span>
        </template>
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { InputType } from '#base/app/components/ha/base/HaBaseInput.vue'
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

type FieldInput = string | number | null

const props = withDefaults(
  defineProps<{
    placeholder?: string
    type?: InputType
    validatorName?: string
    validatorRules?:
      | ZodType<string, ZodTypeDef, FieldInput>
      | ZodEffects<ZodType<string, ZodTypeDef, FieldInput>>
    required?: boolean
    modelValue?: FieldInput
    disabled?: boolean
    counter?: boolean | { max: number }
    min?: number | boolean
    keyupEnter?: boolean
    isLazy?: boolean
    isTrim?: boolean
    small?: boolean
    name?: string | undefined
    error?: string | undefined
    hideDetails?: boolean
    list?: string | undefined
    keepValueOnUnmount?: boolean
    validateOnMount?: boolean
  }>(),
  {
    placeholder: 'Input Text',
    type: 'text',
    validatorName: 'FileInput',
    validatorRules: undefined,
    required: false,
    modelValue: '',
    disabled: false,
    counter: false,
    min: false,
    keyupEnter: false,
    isLazy: false,
    isTrim: false,
    small: false,
    name: undefined,
    error: undefined,
    hideDetails: false,
    list: undefined,
    keepValueOnUnmount: false,
    validateOnMount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'validate', isValid: boolean): void
  (e: 'enter'): void
}>()

/**
 * v-if によってフォームが再表示された場合など、
 * レンダリング時にmodelValueがから出ない場合にバリデーションを実行する
 */
const validateOnMount
  = props.validateOnMount
    && typeof props.modelValue?.toString() === 'string'
    && props.modelValue.toString().length > 0

const { value, errorMessage } = useField(
  toRef(props, 'validatorName'),
  props.validatorRules,
  { initialValue: props.modelValue, validateOnMount },
)

const text = computed({
  get(): string {
    if (value.value === null) return ''
    return '' + value.value
  },
  set(text: string): void {
    emit('update:modelValue', text)
    value.value = text
    emit('validate', !!errorMessage.value)
  },
})

/** バリデーションがない場合、エラー領域を出さない */
const noValidate = computed(
  () =>
    props.validatorName === 'FileInput' && props.validatorRules === undefined,
)

/** 肩に表示する文字数カウント文字列 */
const count = computed((): string | number => {
  const inputLength = text.value.length
  const max = typeof props.counter === 'object' ? props.counter.max : undefined
  const maxRuleLength = max ?? getMax(props.validatorRules?._def)
  return maxRuleLength ? `${inputLength}/${maxRuleLength}` : inputLength
})

/** 外からエラーメッセージを上書きするパターン用エスケープハッチ */
const error = computed(() => errorMessage.value || props.error)

function enter(): void {
  if (props.keyupEnter) {
    emit('enter')
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-text {
  > .label {
    position: relative;

    display: block;

    width: 100%;
    height: 44px;
    border: 1px solid #d5d5d5;
    border-radius: 4px;

    background-color: v.$white;

    &:disabled {
      border-color: rgb(0 0 0 / 12%);
    }

    &:active,
    &:focus,
    &:hover,
    &:focus-within {
      border-color: v.$primary-color;

      .hm-input-text {
        > .input {
          caret-color: v.$primary-color;
        }
      }
    }

    &.-error {
      border-color: v.$red;

      .hm-input-text {
        > .input {
          caret-color: v.$red;
        }
      }
    }

    &.-small {
      height: 30px;
    }
  }

  > .label > .counter {
    position: absolute;
    top: -18px;
    right: 0;

    display: block;

    font-size: 11px;
    text-align: right;
  }

  > .label > .input {
    width: 100%;
    padding: 9px 12px 11px;

    font-size: 16px;
    line-height: 24px;
    color: v.$black;

    &::placeholder {
      color: v.$gray-1;
    }

    &::selection {
      color: v.$white;
      background-color: v.$primary-color;
    }

    &:disabled {
      height: 100%;
      padding: 0 12px;
      background: rgb(0 0 0 / 12.6%);
    }

    &.-small {
      padding: 0 11px;
      font-size: 12px;
      line-height: 28px;
    }
  }

  > .error-container {
    display: block;
    min-height: 20px;
    margin-top: 8px;

    > .error {
      display: block;

      width: fit-content;

      font-size: 12px;
      font-weight: 400;
      color: v.$red;
    }
  }

  > .error-container.-hide {
    display: none;
    min-height: auto;
    margin-top: 0;
  }

  // カタログヘッダー検索窓用設定
  &.-search {
    > .label {
      border-color: v.$gray-2;

      > .input {
        padding-right: 72px;
      }
    }
  }
}

// input type=numberの時に出るスピンボタンを消す
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
```

## File: layers/base/app/components/hm/HmAccordion.vue
```vue
<template>
  <button
    :id="props.buttonname"
    ref="accordionTrigger"
    class="accordion-trigger"
    :aria-expanded="isOpen"
    role="tab"
    :aria-controls="props.panelname"
    type="button"
    @click="changeExpanded"
  >
    <slot name="title"></slot>
    <slot name="icon"></slot>
  </button>
  <div
    :id="props.panelname"
    ref="accordionBody"
    class="accordion-body"
    role="tabpanel"
    :aria-labelledby="props.buttonname"
  >
    <div class="accordion-inner">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  buttonname: string
  panelname: string
  open?: boolean
}>()

const accordionTrigger = ref<HTMLButtonElement | null>(null)
const accordionBody = ref<HTMLDivElement | null>(null)
const isOpen = ref(false)

onMounted(() => {
  if (accordionBody.value && !props.open) {
    accordionBody.value.setAttribute('hidden', 'until-found')
  } else {
    isOpen.value = true
  }
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach(() => {
      if (
        accordionBody.value
        && accordionTrigger.value
        && !accordionBody.value.getAttribute('hidden')
        && accordionTrigger.value.getAttribute('aria-expanded') === 'false'
      ) {
        isOpen.value = !isOpen.value
      }
    })
  })
  const config = {
    attributes: true, // 属性の変更を監視
    childList: false, // 直下子要素の変更を監視
    subtree: false, // 全ての子孫要素の変更を監視
    characterData: false, // テキストの変更を監視
  }
  if (accordionBody.value && accordionBody.value instanceof HTMLElement) {
    observer.observe(accordionBody.value, config)
  }
})

const changeExpanded = () => {
  isOpen.value = !isOpen.value
  if (accordionBody.value && isOpen.value) {
    accordionBody.value.removeAttribute('hidden')
  } else if (isOpen.value) {
    setTimeout(() => {
      if (accordionBody.value) {
        accordionBody.value.setAttribute('hidden', 'until-found')
      }
    }, 300)
  }
}
</script>

<style scoped lang="scss">
.accordion-trigger {
  position: relative;
  width: 100%;

  &[aria-expanded='true'] {
    + .accordion-body {
      grid-template-rows: 1fr;
    }
  }

  &[aria-expanded='false'] {
    + .accordion-body {
      grid-template-rows: 0fr;
    }
  }
}

.accordion-body {
  display: grid;
  transition: grid-template-rows 0.3s;

  .accordion-inner {
    overflow: hidden;
  }
}
</style>
```

## File: layers/base/app/components/hm/HmAutoCarousel.vue
```vue
<template>
  <div
    :class="['hm-auto-carousel', `-${props.orientation}`]"
    role="presentation"
    :style="{
      '--direction': direction,
      '--duration': `${props.duration}s`,
    }"
  >
    <ul
      class="list -before"
      aria-hidden="true"
    >
      <slot />
    </ul>
    <ul class="list">
      <slot />
    </ul>
    <ul
      class="list -after"
      aria-hidden="true"
    >
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal-left' | 'horizontal-right' | 'vertical-top' | 'vertical-bottom'
    duration?: number
  }>(),
  {
    orientation: 'horizontal-left',
    duration: 30,
  },
)

const direction = computed(() => {
  return ['horizontal-left', 'vertical-top'].includes(props.orientation) ? -1 : 1
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.hm-auto-carousel {
  position: relative;
  overflow: clip;
  display: flex;

  &.-horizontal-left,
  &.-horizontal-right{
    flex-direction:row;

    >.list {
    transform:translateX(-100%);

    display: flex;
    flex-shrink: 0;

    width: max-content;

    animation: horizontal var(--duration) linear infinite;
    }
  }

  &.-vertical-top,
  &.-vertical-bottom{
    flex-direction:column;

    >.list {
    transform:translateY(-100%);

    display: flex;
    flex-direction:column;
    flex-shrink: 0;

    height: max-content;

    animation: vertical var(--duration) linear infinite;
    }
  }
}

@keyframes horizontal {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(calc(-100% + (100% * var(--direction))));
  }
}

@keyframes vertical {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(calc(-100% + (100% * var(--direction))));
  }
}
</style>
```

## File: layers/base/app/components/hm/HmClipping.vue
```vue
<template>
  <div class="hm-clipping">
    <div class="cropper-container">
      <Cropper
        ref="cropper"
        class="cropper"
        :src="src"
        :autoZoom="autoZoom"
        :stencilSize="{
          width: width,
          height: height,
        }"
        v-bind="cropperOptions"
        defaultBoundaries="fit"
        :imageRestriction="imageRestriction"
        :style="forceStyle"
        @change="onChange"
      />
    </div>
    <template v-if="src">
      <HaBaseButton
        class="button"
        @click="clip"
      >
        <!-- {{ i18n.t('label') }} -->
        切り抜く
      </HaBaseButton>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

type Props = {
  src: string
  width?: number
  height?: number
  cropperAreaHeight?: number
  doResize?: boolean
  stencil?: string
  imageRestriction?: 'fill-area' | 'fit-area' | 'stencil' | 'none'
  autoZoom?: boolean
  ext?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 256,
  height: 256,
  cropperAreaHeight: undefined,
  doResize: true,
  stencil: 'RectangleStencil',
  imageRestriction: 'stencil',
  autoZoom: false,
  ext: 'jpeg',
})

type Emits = {
  (e: 'clipped', image: File[]): void
}
const emit = defineEmits<Emits>()

const croppedImage = ref<File[]>([])

const forceStyle = computed(() => {
  if (props.cropperAreaHeight === undefined) return {}
  const cropperAreaHeight = props.cropperAreaHeight || props.height * 1.4
  return {
    height: `${cropperAreaHeight}px`,
  }
})
const cropperOptions = computed(() => {
  return props.doResize
    ? {
        canvas: {
          width: props.width,
          height: props.height,
        },
      }
    : {}
})

const onChange = ({ canvas }: { canvas: HTMLCanvasElement }) => {
  /*
   * this.coordinates = coordinates
   * note: canvas to DataURI
   * this.croppedImage = canvas.toDataURL(`image/${this.ext}`)
   */
  const data = canvas.toDataURL(`image/${props.ext}`)
  // note: DataURL to File
  const bytes = atob(data.split(',')[1] ?? raiseError('Invalid bytes'))
  const mime
    = data.split(',')[0]?.split(':')[1]?.split(';')[0]
      ?? raiseError('Invalid mime')
  const name = `tmp-${new Date().getTime()}.${mime.split('/')[1]}`
  const writer = new Uint8Array(new ArrayBuffer(bytes.length))
  for (let i = 0; i < bytes.length; i++) {
    writer[i] = bytes.charCodeAt(i)
  }
  const file = new File([writer.buffer], name, { type: mime })
  croppedImage.value[0] = file
}

const clip = () => {
  emit('clipped', croppedImage.value)
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.hm-clipping {
  width: 100%;
  height: 100%;

  > .cropper-container {
    height: calc(100% - 70px);
    min-height: 300px;
    margin-bottom: 20px;
    padding: v.space(2);

    background: #000;
  }

  > .cropper-container > .cropper {
    height: 100%;
    background: #000;
  }

  > .button {
    width: 100%;
    padding: v.$space-small;
    color: v.$white;
    background-color: v.$primary-button-default-color;

    :hover {
      background-color: v.$primary-button-active-color;
    }
  }
}
</style>
```

## File: layers/base/app/components/hm/HmDialogElement.vue
```vue
<!--
HaDialogとの違いとして、HmDialogElementは別階層の別要素のz-indexの影響により、それよりも下に表示されてしまう
と言った現象が起きません(dialog要素は常に最前面に表示される)。
 -->
<template>
  <!-- ダイアログを開くボタン -->
  <component
    :is="props.openButtonHtmlTag"
    :tabindex="props.openButtonHtmlTag !== 'button' ? 0 : undefined"
    class="open"
    aria-expanded="false"
    @click.stop="openDialog"
  >
    <slot name="open">
      <span class="text">{{
        i18n.locale.value === 'ja' ? 'ダイアログを開く' : 'Open the dialog'
      }}</span>
    </slot>
  </component>
  <!-- ダイアログ -->
  <template v-if="isActive">
    <HaDialogElement
      ref="dialog"
      :closeButtonHtmlTag="props.closeButtonHtmlTag"
      :closedby="props.closedby"
    >
      <template
        v-if="$slots.close"
        #close
      >
        <slot name="close"></slot>
      </template>
      <template #inner>
        <slot name="inner"></slot>
      </template>
    </HaDialogElement>
  </template>
</template>

<script lang="ts" setup>
import HaDialogElement from '#base/app/components/ha/HaDialogElement.vue'
// import RiCloseLine from '~icons/ri/close-line'

export type Props = {
  openButtonHtmlTag?: string
  closeButtonHtmlTag?: string
  closedby?: 'any' | 'closerequest' | 'none' | undefined
}
const props = withDefaults(defineProps<Props>(), {
  openButtonHtmlTag: 'button',
  closeButtonHtmlTag: 'button',
  closedby: 'any',
})

// aria-label用のi18n
const i18n = useI18n()

// dialog要素をrefにする
const dialog = ref<InstanceType<typeof HaDialogElement>>()
const isActive = ref(false)

// dialogを開く関数
const openDialog = async () => {
  isActive.value = true
  await nextTick()
  if (!dialog.value) {
    throw new Error('dialogコンポーネントはnull (HmDialogElement openDialog)')
  }
  dialog.value.openDialog()
}

// dialogを閉じる関数
const closeDialog = () => {
  if (!dialog.value) {
    throw new Error('dialogコンポーネントはnull (HmDialogElement closeDialog)')
  }
  dialog.value.closeDialog()
  isActive.value = false
}

defineExpose({
  openDialog,
  closeDialog,
  isActive,
})
</script>

<style lang="scss" scoped>
.open {
  cursor: pointer;
}
</style>
```

## File: layers/base/app/components/hm/HmMenuExample.vue
```vue
<template>
  <section class="hm-menu-example">
    <Menu
      as="div"
      class="menu-container"
    >
      <MenuButton class="button">
        Menu
      </MenuButton>
      <MenuItems class="menu-items">
        <MenuItem
          v-slot="{ active }"
          class="item"
        >
          <span :class="`span ${active ? '-active' : ''}`">Hello</span>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          class="item"
        >
          <span :class="`span ${active ? '-active' : ''}`">Howdy!</span>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          class="item"
        >
          <span :class="`span ${active ? '-active' : ''}`">Yo!</span>
        </MenuItem>
        <MenuItem
          disabled
          class="item -disable"
        >
          <span>:D</span>
        </MenuItem>
      </MenuItems>
    </Menu>
  </section>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<style lang="scss" scoped>
.menu-container {
  > .button {
    padding: 4px;
    border: solid 1px;
    border-radius: 8px;
  }

  > .menu-items {
    display: flex;
    flex-direction: column;
    padding: 8px 4px 8px 16px;
  }
}

.menu-items {
  > .item {
    padding: 4px;
    border: solid;
    border-color: #0ff;

    &.-active {
      border-color: #00f;
    }

    &.-disable {
      border: none;
    }
  }
}
</style>
```

## File: layers/base/app/components/hm/HmNoteList.vue
```vue
<template>
  <ul class="hm-note-list">
    <li
      v-for="(text, index) in list"
      :key="`note-${index}`"
      class="item"
    >
      {{ text }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  list: string[]
}>()
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-note-list {
  font-size: 14px;
  line-height: 1.3;

  > .item {
    margin-bottom: 4px;

    &::before {
      content: '※';
      margin-right: 0.3em;
    }
  }
}
</style>
```

## File: layers/base/app/components/hm/HmPaging.vue
```vue
<i18n lang="yaml">
ja:
  next: 次へ
  prev: 前へ
en:
  next: Next
  prev: Prev
</i18n>

<template>
  <nav
    aria-label="Pagination Navigation"
    class="pagination"
  >
    <!-- 前へ -->
    <HaLink
      :to="route.path"
      :query="createPageQuery(currentPage - 1)"
      class="pagination-prev"
      :class="{
        ['link-disabled text-disabled']: currentPage <= 1,
      }"
      :aria-disabled="currentPage >= totalPages"
      @click="goToPage(currentPage - 1)"
    >
      <slot name="prev-icon">
        &lt;
      </slot>
      {{ i18n.t('prev') }}
    </HaLink>
    <!-- 各ページへのリンク表示 -->
    <ul class="pagination-list">
      <li
        v-for="(page, i) in pages"
        :key="`${page}_${i}`"
        :aria-disabled="currentPage == page"
        @click="goToPage(Number(page))"
      >
        <HaLink
          class="pagination-item"
          :class="{
            ['link-disabled active']: currentPage == page,
            ['link-disabled ellipsis']: page == '...',
          }"
          :to="route.path"
          :query="createPageQuery(Number(page))"
        >
          {{ page }}
        </HaLink>
      </li>
    </ul>
    <!-- 次へ -->
    <HaLink
      :to="route.path"
      :query="createPageQuery(currentPage + 1)"
      class="pagination-next"
      :class="{ ['link-disabled']: currentPage >= totalPages }"
      :aria-disabled="currentPage >= totalPages"
      @click="goToPage(currentPage + 1)"
    >
      {{ i18n.t('next') }}
      <slot name="next-icon">
        &gt;
      </slot>
    </HaLink>
  </nav>
</template>

<script lang="ts" setup>
import { Paging } from '#base/app/utils/response'

export type PageChangedEventObject = {
  page: number // 新しいページ番号
  offset: number // 新しいページのオフセット
}

const i18n = useI18n()
const route = useRoute()

const props = withDefaults(
  defineProps<{
    paging: Paging
    totalVisible?: number
    ellipsis?: string
  }>(),
  {
    totalVisible: 7,
    ellipsis: '...',
  },
)

const emit = defineEmits<{
  (e: 'changed', paging: PageChangedEventObject): void
}>()

const currentPage = computed(
  () => Math.ceil(props.paging.offset / props.paging.limit) + 1,
)
const totalPages = computed(() =>
  Math.ceil(props.paging.total / props.paging.limit),
)

const createPageQuery = (page: number) => {
  return { ...route.query, page: page.toString() }
}

const createRange = (length: number, start = 0): number[] => {
  return Array.from({ length }, (_, i) => start + i)
}

/*
 * 表示すべきページ番号の配列を作成 ( ロジックの大元はVuetifyライブラリのPaginationコンポーネント参考 )
 * https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VPagination/VPagination.tsx
 */
const pages = computed(() => {
  if (
    totalPages.value <= 0
    || isNaN(totalPages.value)
    || isNaN(currentPage.value)
    || totalPages.value > Number.MAX_SAFE_INTEGER
  )
    return []

  if (props.totalVisible <= 0) return []
  if (props.totalVisible === 1) return [currentPage.value]
  if (totalPages.value <= props.totalVisible) {
    return createRange(totalPages.value, 1)
  }

  // 表示するページ数とellipsisの合計数量を固定するためのロジック ( これがないとページ遷移のたびにページボタンの位置がずれて使いにくい )
  const even = props.totalVisible % 2 === 0
  const middle = even
    ? props.totalVisible / 2
    : Math.floor(props.totalVisible / 2)
  const left = even ? middle : middle + 1
  const right = totalPages.value - middle

  if (left - currentPage.value >= 0) {
    return [
      ...createRange(Math.max(1, props.totalVisible - 1), 1),
      props.ellipsis,
      totalPages.value,
    ]
  } else if (currentPage.value - right >= (even ? 1 : 0)) {
    const rangeLength = props.totalVisible - 1
    const rangeStart = totalPages.value - rangeLength + 1
    return [1, props.ellipsis, ...createRange(rangeLength, rangeStart)]
  } else {
    const rangeLength = Math.max(1, props.totalVisible - 3)
    const rangeStart
      = rangeLength === 1
        ? currentPage.value
        : currentPage.value - Math.ceil(rangeLength / 2) + 1
    return [
      1,
      props.ellipsis,
      ...createRange(rangeLength, rangeStart),
      props.ellipsis,
      totalPages.value,
    ]
  }
})

// ページ番号がクリックされた時に実行される関数
const goToPage = (page: number) => {
  // 有効なページ番号の時のみ処理を行う
  if (page >= 1 && page <= totalPages.value) {
    const newOffset = (page - 1) * props.paging.limit
    emit('changed', { page, offset: newOffset })
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.pagination {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .link-disabled {
    pointer-events: none;
    cursor: default;
  }

  .pagination-prev,
  .pagination-next {
    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;

    width: auto;
    height: 32px;
    padding: 4px 8px;

    color: v.$base-font-color;

    :deep(svg path) {
      fill: v.$base-font-color;
    }

    &.text-disabled {
      color: v.$button-disabled-color;

      :deep(svg path) {
        fill: v.$button-disabled-color;
      }
    }

    &:hover {
      color: v.$primary-button-default-color;

      :deep(svg path) {
        fill: v.$primary-button-default-color;
      }
    }
  }

  .pagination-list {
    user-select: none;

    display: flex;
    gap: 4px;

    padding: 0;

    list-style: none;

    .pagination-item {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 30px;
      height: 30px;
      border-radius: 50%;

      color: v.$base-font-color;

      background: v.$white;

      &.active {
        font-weight: bold;
        color: v.$white;
        background-color: v.$primary-button-default-color;
      }

      &:hover:not(.active) {
        color: v.$white;
        background-color: v.$primary-button-default-color;
      }

      &.ellipsis {
        pointer-events: none;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 30px;

        background: none;
      }
    }
  }
}
</style>
```

## File: layers/base/app/components/hm/HmPicture.vue
```vue
<template>
  <picture classs="hm-picture">
    <source
      media="(max-width: 767px)"
      :srcset="imageUrlSp"
      class="src"
      @error="onError"
    />
    <HaImage
      :isLazy="isLazy"
      :fetchpriority="fetchPriority"
      :src="srcPc"
      :alt="alt ? alt : ''"
      :decoding="decoding"
    />
  </picture>
</template>

<script setup lang="ts">
import defaultNoImage from '@@/public/images/no-image.png'

const props = withDefaults(
  defineProps<{
    srcPc?: string | null
    srcSp?: string | null
    alt?: string | null
    isLazy?: boolean
    fetchPriority?: 'low' | 'high' | 'auto' | null
    decoding?: 'sync' | 'async' | 'auto'
    noImage?: string
  }>(),
  {
    srcPc: '',
    srcSp: '',
    alt: null,
    isLazy: true,
    fetchPriority: 'low',
    decoding: 'auto',
    noImage: '',
  },
)

// エラーハンドリング
const hasError = ref(false)
const onError = () => {
  hasError.value = true
}

// SP用の画像URL
const imageUrlSp = computed(() =>
  hasError.value
    ? props.noImage || defaultNoImage
    : props.srcSp || defaultNoImage,
)
</script>
```

## File: layers/base/app/components/hm/HmPopup.vue
```vue
<template>
  <HaDialog
    class="hm-popup"
    @closeDialog="closeDislog"
  >
    <template v-if="title">
      <span class="hm-popup-title">
        {{ title }}
      </span>
    </template>
    <template v-if="description">
      <p class="hm-popup-description">
        {{ description }}
      </p>
    </template>
    <template v-if="cancelText || confirmText">
      <div class="hm-popup-wrapper">
        <template v-if="cancelText">
          <div class="hm-popup-button">
            <HmButton
              color="warning"
              class="item"
              @click="onCancel"
            >
              {{ cancelText }}
            </HmButton>
          </div>
        </template>
        <template v-if="confirmText">
          <div class="hm-popup-button">
            <HmButton
              class="item"
              @click="onConfirm"
            >
              {{ confirmText }}
            </HmButton>
          </div>
        </template>
      </div>
    </template>
  </HaDialog>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
    cancelText?: string
    confirmText?: string
  }>(),
  {
    title: '',
    description: '',
    cancelText: '',
    confirmText: '',
  },
)

const emits = defineEmits<{
  (e: 'close' | 'cancel' | 'confirm'): void
}>()

const closeDislog = () => {
  emits('close')
}
const onCancel = () => {
  emits('cancel')
}
const onConfirm = () => {
  emits('confirm')
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-popup {
  &:deep(.dialog-window) {
    width: fit-content;
    max-width: 90%;
    height: auto;
  }
}

.hm-popup-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  color: v.$black-1;
  letter-spacing: 0.01em;
}

.hm-popup-description {
  width: 100%;
  height: fit-content;
  margin-top: 32px;

  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  color: v.$black-1;
}

.hm-popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 32px;
}

.hm-popup-button {
  width: fit-content;
  margin: 0 12px;
}
</style>
```

## File: layers/base/app/components/hm/HmSkeletonScreen.vue
```vue
<template>
  <div class="hm-skeleton-screen">
    <template v-if="isLoadingContent">
      <div class="skeleton-screen">
        <!-- NOTE: brタグはテキスト1行分の高さを確保している -->
        <br />
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup lang="ts">
type Props = {
  isLoadingContent: boolean
  borderRadius?: string
}

withDefaults(defineProps<Props>(), {
  borderRadius: '10px',
  height: 'auto',
  width: '100%',
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.hm-skeleton-screen {
  width: 100%;
  height: inherit;

  /** @see https://nishinatoshiharu.com/css-skeleton-screen/#CSS の item__detail */
  > .skeleton-screen {
    position: relative;

    overflow: hidden;

    width: 100%;
    height: inherit;
    // stylelint-disable-next-line
    border-radius: v-bind(borderRadius);

    background: v.$gray-1;
  }

  .skeleton-screen::before {
    content: '';

    position: absolute;

    display: block;

    width: 100%;
    height: inherit;

    background: linear-gradient(
      90deg,
      transparent,
      rgb(255 255 255 / 50%),
      transparent
    );

    animation: loading 1s linear infinite;
  }
}
</style>
```

## File: layers/base/app/components/hm/HmSlider.vue
```vue
<template>
  <div
    class="slider-wrap"
    :style="{
      '--slide-amount': props.amount,
      '--width-pc': props.widthPc,
      '--width-sp': props.widthSp,
    }"
    role="presentation"
  >
    <div
      class="slider-body"
      role="presentation"
    >
      <div
        ref="slider"
        class="slider-inner"
        role="presentation"
        :style="{
          '--gap-pc': props.gapPc,
          '--gap-sp': props.gapSp,
        }"
        @touchstart="startDragging"
        @touchmove="inDragging"
        @touchend="endDragging"
        @mousedown="startDragging"
        @mousemove="inDragging"
        @mouseup="endDragging"
        @mouseleave="endDragging"
      >
        <template v-if="props.loop">
          <div
            ref="clonedSlideBefore"
            class="slider -before"
            :class="{
              '-center': props.center ? true : false,
            }"
            role="presentation"
            aria-hidden="true"
          >
            <slot name="item"></slot>
          </div>
        </template>
        <div
          :id="props.slidename"
          ref="receivedSlideItemsContainer"
          class="slider"
          :class="{
            '-center': props.center,
          }"
          role="presentation"
        >
          <slot name="item"></slot>
        </div>
        <template v-if="props.loop">
          <div
            ref="clonedSlideAfter"
            class="slider -after"
            :class="{
              '-center': props.center,
            }"
            role="presentation"
            aria-hidden="true"
          >
            <slot name="item"></slot>
          </div>
        </template>
      </div>
    </div>
    <template v-if="props.pagination">
      <ol
        class="slider-pagination"
        role="tablist"
      >
        <li
          v-for="index in props.amount"
          :key="index"
          class="slider-pagination-item"
          role="presentation"
        >
          <button
            :aria-label="
              i18n.locale.value === 'ja'
                ? `スライド${index}枚目を表示する`
                : `Display slide ${index}`
            "
            :aria-controls="props.itemsId[index - 1]"
            :aria-selected="index === Math.abs(currentSlide) + 1"
            role="tab"
            class="slider-pagination-button"
            type="button"
            @click="jumpSlider(index - 1), stopAutoPlay()"
          >
            <slot name="pagination"></slot>
          </button>
        </li>
      </ol>
    </template>
    <template v-if="props.arrow">
      <button
        class="slider-arrow button--previous"
        :aria-label="
          i18n.locale.value === 'ja'
            ? `スライドを1枚戻す`
            : `Show previous slide`
        "
        :aria-controls="props.slidename"
        :disabled="!props.loop && disabledPrevious"
        type="button"
        @click="moveSlider('previous'), stopAutoPlay()"
      >
        <slot name="navigationprevious"></slot>
      </button>
      <button
        class="slider-arrow button--next"
        :aria-label="
          i18n.locale.value === 'ja' ? `スライドを1枚進める` : `Show next slide`
        "
        :aria-controls="props.slidename"
        :disabled="!props.loop && disabledNext"
        type="button"
        @click="moveSlider('next'), stopAutoPlay()"
      >
        <slot name="navigationnext"></slot>
      </button>
    </template>
    <template v-if="props.page">
      <div
        role="progressbar"
        class="slider-page"
        aria-valuemin="1"
        :aria-valuemax="props.amount"
        :aria-valuenow="Math.abs(currentSlide) + 1"
      >
        <span
          class="slider-page-start"
          role="presentation"
        >{{
          Math.abs(currentSlide) + 1
        }}</span>
        <span
          class="slider-page-total"
          role="presentation"
        >{{
          props.amount
        }}</span>
      </div>
    </template>
    <template v-if="props.autoplay">
      <button
        type="button"
        :aria-controls="props.slidename"
        :aria-label="
          i18n.locale.value === 'ja'
            ? `スライドの自動再生を開始する`
            : `Start automatic playback of slides`
        "
        @click="startAutoPlay"
      >
        <slot name="autoplaystart"></slot>
      </button>
      <button
        type="button"
        :aria-controls="props.slidename"
        :aria-label="
          i18n.locale.value === 'ja'
            ? `スライドの自動再生を停止する`
            : `Stop automatic playback of slides`
        "
        @click="stopAutoPlay"
      >
        <slot name="autoplaystop"></slot>
      </button>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  slidename: string
  itemsId: string[]
  arrow: boolean
  pagination: boolean
  amount: number
  loop: boolean
  center: boolean
  page: boolean
  autoplay: boolean
  interval: number
  gapPc: string
  gapSp: string
  widthPc: string
  widthSp: string
  duration: number
  easing: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
  draggable: boolean
}>()
const i18n = useI18n()
const slider = ref<HTMLElement | null>(null) // スライド直上の親要素
const currentSlide = ref(0) // 現在のスライド番号
const disabledNext = ref(false) // ループしない場合に次へボタンをdisabledにするフラグ
const disabledPrevious = ref(false) // ループしない場合に前へボタンをdisabledにするフラグ
const previousX = ref(0) // アニメーションタイムラインのスライド開始位置
const nextX = ref(0) // アニメーションタイムラインのスライド終了位置
const clonedSlideBefore = ref<HTMLElement | null>(null) // ループする場合の前のスライド
const clonedSlideAfter = ref<HTMLElement | null>(null) // ループする場合の後のスライド
const receivedSlideItemsContainer = ref<HTMLElement | null>(null) // アクティブなスライドを判定するために受け取ったスライド要素を全て格納

// 矢印でスライドを移動させる関数
const moveSlider = async (direction: 'previous' | 'next') => {
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  if (direction === 'previous') {
    updateCurrentSlide('previous')
  } else if (direction === 'next') {
    updateCurrentSlide('next')
  }
  // loopがfalseのとき、currentIndex次第でボタンのdisabledを制御する
  if (!props.loop) {
    controlButton()
  }
  if (slider.value instanceof HTMLElement === false) {
    throw new Error('slider要素はHTMLElementではありません')
  }
  await slideX(slider.value, previousX.value, nextX.value)
  // アクティブなスライドを更新
  setActiveSlide()
}

// スライドアニメーション
const slideX = (target: HTMLElement | null, from: number, to: number) => {
  return target?.animate(
    [
      { transform: `translateX(${from}%)` },
      { transform: `translateX(${to}%)` },
    ],
    {
      duration: props.duration,
      iterations: 1,
      easing: props.easing,
      fill: 'both',
    },
  ).finished
}

// loopがfalseな場合にボタンのdisabledを制御する関数
const controlButton = () => {
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  if (currentSlide.value === 0) {
    // 1枚目表示中は戻るボタンをdisabledにする
    disabledNext.value = false
    disabledPrevious.value = true
  } else if (currentSlide.value * -1 === props.amount - 1) {
    // 最後のスライド表示中は進むボタンをdisabledにする
    disabledNext.value = true
    disabledPrevious.value = false
  } else {
    // それ以外はdisabledを解除する
    disabledNext.value = false
    disabledPrevious.value = false
  }
}

// ページネーションでスライドを移動させる関数
const jumpSlider = async (index: number) => {
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  if (slider.value instanceof HTMLElement === false) {
    throw new Error('slider要素はHTMLElementではありません')
  }
  updateCurrentSlide('pagination', index)
  controlButton()
  if (slider.value instanceof HTMLElement) {
    await slideX(slider.value, previousX.value, nextX.value)
    // アクティブなスライドを更新
    setActiveSlide()
  }
}

// currentSlideを更新する関数
const updateCurrentSlide = (
  type: 'next' | 'previous' | 'pagination',
  index?: number,
) => {
  const backToFirstSlideNoLoop = () => {
    previousX.value = ((100 / props.amount) * props.amount - 1) * -1
    currentSlide.value = 0
    nextX.value = 0
  }

  const slideNextByArrowNoLoop = () => {
    previousX.value = (100 / props.amount) * currentSlide.value
    currentSlide.value -= 1
    nextX.value = (100 / props.amount) * currentSlide.value
  }

  const slideNextByArrowLoop = () => {
    if (currentSlide.value * -1 === props.amount - 1) {
      previousX.value = 100 / props.amount
      currentSlide.value = 0
      nextX.value = 0
    } else {
      previousX.value = (100 / props.amount) * currentSlide.value
      currentSlide.value -= 1
      nextX.value = (100 / props.amount) * currentSlide.value
    }
  }

  const slideBackByArrowNoLoop = () => {
    previousX.value = (100 / props.amount) * currentSlide.value
    currentSlide.value += 1
    nextX.value = (100 / props.amount) * currentSlide.value
  }

  const slideBackByArrowLoop = () => {
    if (currentSlide.value === 0) {
      previousX.value = (100 / props.amount) * props.amount * -1
      currentSlide.value = props.amount * -1 + 1
      nextX.value = (100 / props.amount) * currentSlide.value
    } else {
      previousX.value = (100 / props.amount) * currentSlide.value
      currentSlide.value += 1
      nextX.value = (100 / props.amount) * currentSlide.value
    }
  }

  const slideJumpByPagination = () => {
    previousX.value = (100 / props.amount) * currentSlide.value
    if (index === undefined) return
    currentSlide.value = index * -1
    nextX.value = (100 / props.amount) * currentSlide.value
  }

  // ループがfalseで最後のスライドの場合、最初に戻す(自動再生時のみこの条件に一致する)
  if (
    type === 'next'
    && props.loop === false
    && Math.abs(currentSlide.value) === props.amount - 1
  ) {
    return backToFirstSlideNoLoop()
  }

  // 矢印による次に進む操作かつループがfalseの場合
  if (type === 'next' && props.loop === false) {
    return slideNextByArrowNoLoop()
  }

  // 矢印による次に進む操作かつループがtrueの場合
  if (type === 'next' && props.loop) {
    return slideNextByArrowLoop()
  }

  // 矢印による前に戻る操作かつループがfalseの場合
  if (type === 'previous' && props.loop === false) {
    return slideBackByArrowNoLoop()
  }

  // 矢印による前に戻る操作かつループがtrueの場合
  if (type === 'previous' && props.loop) {
    return slideBackByArrowLoop()
  }

  // ページネーションによるスライド移動の場合
  if (type === 'pagination' && index !== undefined) {
    return slideJumpByPagination()
  }
}

// アクティブなスライドに-activeクラスを付与し、それ以外のスライドをアクセシビリティツリーから除外する関数
const setActiveSlide = () => {
  const sliderItems = receivedSlideItemsContainer.value?.querySelectorAll<HTMLElement>('.slider-item')
  if (sliderItems) {
    sliderItems.forEach((item: HTMLElement, index: number) => {
      if (index === Math.abs(currentSlide.value)) {
        item.classList.add('-active')
        item.removeAttribute('aria-hidden')
      } else {
        item.classList.remove('-active')
        item.setAttribute('aria-hidden', 'true')
      }
    })
  }
}

// 複製されたスライドからid属性を除去する関数
const removeId = () => {
  if (props.loop) {
    if (!clonedSlideBefore.value) {
      throw new Error('clonedSlideBefore要素はnull')
    }
    if (!clonedSlideAfter.value) {
      throw new Error('clonedSlideBefore要素はnull')
    }
    // clonedSlideBefore.valueの子要素の,slider-item全てからid属性を除去する
    const clonedSlideBeforeItems
      = clonedSlideBefore.value.querySelectorAll<HTMLElement>('.slider-item')
    clonedSlideBeforeItems.forEach((item: HTMLElement) => {
      item.removeAttribute('id')
    })
    // clonedSlideBefore.valueの子要素の.slider-item全てからid属性を除去する
    const clonedSlideAfterItems
      = clonedSlideAfter.value.querySelectorAll<HTMLElement>('.slider-item')
    clonedSlideAfterItems.forEach((item: HTMLElement) => {
      item.removeAttribute('id')
    })
  }
}

// ドラッグとスワイプでスライドを移動させる関数
let startX = 0
let moveX = 0
let isDragging = false
let movingRight = false

// ドラッグとスワイプ開始時の処理
const startDragging = (event: MouseEvent | TouchEvent) => {
  // タッチデバイスでない場合はevent.preventDefault()を実行 (タッチデバイス時にはスクロールを防げる + スライドが<a>だった場合に遷移できないため)
  if (event instanceof MouseEvent) {
    event.preventDefault()
  }
  if (!props.draggable) return
  // ドラッグ開始地点を保存
  if (event instanceof MouseEvent) {
    startX = event.pageX
  } else if (event instanceof TouchEvent && event.touches[0]) {
    startX = event.touches[0].pageX
  } else {
    return
  }
  isDragging = true
}

// ドラッグ中の処理
const inDragging = (event: MouseEvent | TouchEvent) => {
  // タッチデバイスでない場合はevent.preventDefault()を実行 (タッチデバイス時にはスクロールを防げる + スライドが<a>だった場合に遷移できないため)
  if (event instanceof MouseEvent) {
    event.preventDefault()
  }
  if (!props.draggable) return
  if (!isDragging) return
  // 移動距離を計算
  if (event instanceof MouseEvent) {
    moveX = (startX - event.pageX) * -1
  } else if (event instanceof TouchEvent && event.touches[0]) {
    moveX = (startX - event.touches[0].pageX) * -1
  } else {
    // 未知のイベント型に対するエラー処理
    return
  }
  // 左右どちらに移動しているか判別
  movingRight = moveX < 0
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  slider.value.style.translate = `${moveX * 0.3}px`
}

// ドラッグ終了時の処理
const endDragging = async (event: MouseEvent | TouchEvent) => {
  // タッチデバイスでない場合はevent.preventDefault()を実行 (タッチデバイス時にはスクロールを防げる + スライドが<a>だった場合に遷移できないため)
  if (event instanceof MouseEvent) {
    event.preventDefault()
  }
  if (!props.draggable) return
  if (!isDragging) return
  isDragging = false

  if (movingRight && moveX < -50) {
    // 現在のスライドが最後のスライドの場合はreturn
    if (!props.loop && Math.abs(currentSlide.value) === props.amount - 1) {
      if (!slider.value) {
        throw new Error('slider要素はnull')
      }
      slider.value.style.translate = '0px'
      return
    }
    await moveSlider('next')
  } else if (movingRight === false && moveX > 50) {
    // 現在のスライドが最初のスライドの場合はreturn
    if (props.loop === false && currentSlide.value === 0) {
      if (!slider.value) {
        throw new Error('slider要素はnull')
      }
      slider.value.style.translate = '0px'
      return
    }
    await moveSlider('previous')
  }

  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  slider.value.style.translate = '0px'

  stopAutoPlay()
  moveX = 0
}

// スライダーを自動再生する関数
let timer: number | undefined
const startAutoPlay = () => {
  timer = window.setInterval(() => {
    void moveSlider('next')
  }, props.interval)
}

// スライダーの自動再生を停止する関数
const stopAutoPlay = () => {
  if (!props.autoplay) return
  clearInterval(timer)
}

// スライダーを初期化
onMounted(async () => {
  setActiveSlide()
  removeId()
  await nextTick()
  controlButton()
  if (props.autoplay) {
    startAutoPlay()
  }
})
onBeforeUnmount(() => stopAutoPlay())
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.slider-wrap {
  --slide-item-width: var(--width-pc);
  --slide-amount: var(--slide-amount);

  position: relative;
  width: 100%;
  height: 100%;

  @include m.sp {
    --slide-item-width: var(--width-sp);
  }

  .slider-body {
    position: relative;
    container-type: inline-size;
    overflow: clip;
    width: 100%;

    .slider-inner {
      position: relative;
      width: calc(var(--slide-item-width) * var(--slide-amount) * 1%);

      .slider {
        display: flex;
        align-items: stretch;
        width: 100%;
        height: 100%;

        &.-center {
          transform: translateX(
            calc((100 - var(--slide-item-width)) / 2 * 1cqi)
          );
        }

        &.-before {
          position: absolute;
          top: 0;
          left: 0;
          translate: -100% 0;
        }

        &.-after {
          position: absolute;
          top: 0;
          left: 0;
          translate: 100% 0;
        }
      }

      :deep(.slider-item) {
        flex-shrink: 0;
        width: calc(100% / var(--slide-amount));
        padding-inline: calc(var(--gap-pc) * 0.5);

        @include m.sp {
          padding-inline: calc(var(--gap-sp) * 0.5);
        }
      }
    }
  }
}
</style>
```

## File: layers/base/app/components/hm/HmSliderItem.vue
```vue
<template>
  <div
    :id="props.id"
    class="slider-item"
    role="tabpanel"
  >
    <div
      class="slider-content"
      role="presentation"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: string
}>()
</script>

<style lang="scss" scoped>
.slider-content {
  width: 100%;
  height: 100%;
}
</style>
```

## File: layers/base/app/components/hm/HmSocialShareLink.vue
```vue
<template>
  <!--
  - [x] Composition APIで書けている
  - [-] Nuxt.jsに依存していない
  - [-] unplugin-auto-import を導入する前提の書き方ができている
  - [-] ロジック観点でのリファクタリング(FS主管)が完了している
  - [-] デザイン観点でのリファクタリング(DD主管)が完了している
  - [-] 適切にコメントが記載されている
  - [-] Unit Testを通過している
  - [-] storiesが適切に記載されている
 -->
  <HaLink
    class="hm-social-share-link"
    :to="url"
    :blank="true"
  >
    <slot />
  </HaLink>
</template>

<script setup lang="ts">
const _shareTargetServices = {
  0: 'twitter',
  1: 'facebook',
  2: 'line',
} as const
type SharedTarget
  = (typeof _shareTargetServices)[keyof typeof _shareTargetServices]

const props = defineProps<{
  name: SharedTarget | null
  text?: string
  twitterHashtags?: string[]
  shareUrl?: string
}>()

const socialShareLink = useSocialShareLink()
const url = computed(() => socialShareLink.getShareUrl(props.name || '', props))
</script>
```

## File: layers/base/app/components/hm/HmTab.vue
```vue
<template>
  <ul class="tablist">
    <li
      v-for="(value, key) in tabStatus"
      :key="key"
      role="presentation"
      class="item"
    >
      <button
        :id="'tab' + key"
        class="tab"
        role="tab"
        :aria-expanded="value"
        :aria-controls="'panel' + key"
        @click="changeTab(key)"
      >
        <slot :name="'tab' + key" />
      </button>
    </li>
  </ul>
  <div
    class="panel-container"
    role="presentation"
  >
    <div
      v-for="(value, key) in tabStatus"
      :id="'panel' + key"
      :key="key"
      class="tabpanel"
      role="tabpanel"
      :aria-labelledby="'tab' + key"
      :aria-hidden="!value"
    >
      <slot :name="'panel' + key" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  amount: number
}>()
// タブのindexと開閉状態を表すbooleanを格納するオブジェクトのためのrefで、props.amountの数だけオブジェクトを作る
const tabStatus = ref(range(0, props.amount - 1).map((_, i) => i === 0))

// タブをクリックしたとき、クリックしたタブのindexと一致するパネルの表示状態がtrueになるようにする
const changeTab = (index: number): void => {
  for (const i of range(0, tabStatus.value.length - 1)) {
    tabStatus.value[i] = false
  }
  tabStatus.value[index] = true
}
</script>

<style scoped lang="scss">
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.panel-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.tabpanel {
  display: none;
  grid-area: 1 / 1 / 2 / 2;

  opacity: 0;

  transition: opacity 0.3s, display 0.3s;
  transition-behavior: allow-discrete; // display:block -> noneにdurationを効かせる(transitionのショートハンドで上書きされないようにtransitionより下に書く)
  &[aria-hidden='false'] {
    display: block;
    opacity: 1;
    transition: opacity 0.3s, display 0.3s;
    transition-behavior: allow-discrete; // display:block -> noneにdurationを効かせる(transitionのショートハンドで上書きされないようにtransitionより下に書く)
  }
}
</style>
```

## File: layers/base/app/components/hm/HmTsx.vue
```vue
<template>
  <div class="hm-tsx">
    <DefaultSlot />
  </div>
</template>

<script lang="ts" setup>
import { Fragment, h } from 'vue'

const slots = useSlots()

const DefaultSlot = () => h(Fragment, {}, slots.default?.())
</script>
```

## File: layers/base/app/layouts/default.vue
```vue
<template>
  <div class="layout -default">
    <h1 class="heading">
      Base App Nuxt3
    </h1>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout.-default {
  overflow-x: hidden;
}
</style>
```
