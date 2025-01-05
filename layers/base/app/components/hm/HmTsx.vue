<template>
  <div class="hm-tsx">
    <DefaultSlot />
  </div>
</template>

<script lang="tsx" setup>
const slots = useSlots() as { default?: () => unknown }
const defaultSlot = slots.default ? slots.default() : null

const DefaultSlot = () => {
  return <>{defaultSlot}</>
}
</script>
