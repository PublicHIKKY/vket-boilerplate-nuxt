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
