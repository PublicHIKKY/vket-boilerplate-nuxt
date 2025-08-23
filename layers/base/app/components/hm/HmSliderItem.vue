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
