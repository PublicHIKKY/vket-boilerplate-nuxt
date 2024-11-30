<template>
  <button
    class="ha-base-button"
    :disabled="disabled"
    :type="type"
    @click="onClick"
  >
    <slot>button label</slot>
  </button>
</template>

<script setup lang="ts">
export type ButtonType = 'button' | 'reset' | 'submit'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    type?: ButtonType
  }>(),
  {
    disabled: false,
    type: 'button',
  },
)
const emit = defineEmits<{
  (e: 'click', _e: MouseEvent): void
}>()
const onClick = (event: MouseEvent): void => {
  if (props.disabled) return
  emit('click', event)
}
</script>

<style lang="scss" scoped>
.ha-base-button {
  max-height: 100%;
  max-width: 100%;
}
</style>
