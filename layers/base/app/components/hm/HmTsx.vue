<template>
  <div class="hm-tsx">
    <DefaultSlot />
  </div>
</template>

<script lang="tsx" setup>
import { Fragment } from 'vue'

const slots = useSlots() as { default?: () => unknown }
const defaultSlot = slots.default ? slots.default() : null

const DefaultSlot = () => {
  return <Fragment>{defaultSlot}</Fragment>
}
</script>
