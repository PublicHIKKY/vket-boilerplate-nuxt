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
  align-items: center;
  background: v.$black-undercoat;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: v.$zindex-dialog;

  > .dialog-window {
    background-color: v.$white;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
    padding: 10px;
    width: auto;
  }
}
</style>
