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
    text: string
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
