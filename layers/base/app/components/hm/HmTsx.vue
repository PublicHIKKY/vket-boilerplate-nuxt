<template>
  <div class="hm-tsx">
    <DefaultSlot />
  </div>
</template>

<script lang="tsx" setup>
const slots = useSlots()
const defaultSlot = slots.default ? slots.default() : null

const DefaultSlot = () => {
  return <>{defaultSlot}</>
}
</script>
