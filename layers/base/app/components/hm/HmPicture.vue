<template>
  <picture classs="hm-picture">
    <source
      media="(max-width: 767px)"
      :srcset="imageUrlSp"
      class="src"
      @error="onError"
    />
    <HaImage
      :is-lazy="isLazy"
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
