<template>
  <div
    class="ha-dialog"
    @click.self="handleCloseDialog"
  >
    <div class="dialog-window">
      <slot>no content.</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleCloseDialog = () => emit('close')
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-dialog {
  position: fixed;
  z-index: v.$zindex-dialog;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: v.$black-undercoat;

  > .dialog-window {
    overflow: auto;

    width: auto;
    max-width: 100%;
    max-height: 100%;
    padding: 10px;

    background-color: v.$white;
  }
}
</style>
