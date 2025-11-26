<template>
  <span class="ha-component-name">
    <ClientOnly>
      <slot />
    </ClientOnly>
  </span>
</template>

<script setup lang="ts">
import { FunctionalComponent } from 'vue'

type Props = {
  // Define your props here
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@use '@/assets/styles/custom/variables_new' as v;

.ha-component-name {
  // Add your styles here
  all: inherit;

  inset: auto;
  transform: none;

  margin: 0;
  padding: 0;
}
</style>
