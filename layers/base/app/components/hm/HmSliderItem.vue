<template>
  <div
    :id="props.id"
    class="slider-item"
    role="tabpalel"
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
  height: 100%;
  width: 100%;
}
</style>
