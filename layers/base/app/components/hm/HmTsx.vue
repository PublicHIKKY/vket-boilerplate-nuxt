<template>
  <div class="hm-tsx">
    <DefaultSlot />
  </div>
</template>

<script lang="ts" setup>
import { Fragment, h } from 'vue'

const slots = useSlots()

const DefaultSlot = () => h(Fragment, {}, slots.default?.())
</script>
