<template>
  <ul class="hm-note-list">
    <li
      v-for="(text, index) in list"
      :key="`note-${index}`"
      class="item"
    >
      {{ text }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  list: string[]
}>()
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-note-list {
  font-size: 14px;
  line-height: 1.3;

  > .item {
    margin-bottom: 4px;

    &::before {
      content: '※';
      margin-right: 0.3em;
    }
  }
}
</style>
