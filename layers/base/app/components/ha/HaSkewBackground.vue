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
