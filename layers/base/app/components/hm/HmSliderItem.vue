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
