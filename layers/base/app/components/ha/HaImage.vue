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
import { constant } from '#base/app/utils/constant'

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

const imageUrl = computed(() => {
  if (hasError.value) {
    return props.noImage || constant.images.none
  }
  return props.src || constant.images.none
})

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
