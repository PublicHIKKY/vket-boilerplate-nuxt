<template>
  <HaBaseButton
    :class="[
      'hm-button',
      `-${color}`,
      `-${size}`,
      { '-disabled': disabled },
      { '-outline': outline },
    ]"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </HaBaseButton>
</template>

<script lang="ts">
import { ButtonType } from '#base/app/components/ha/base/HaBaseButton.vue'

export default defineComponent({
  name: 'HmButton',
})
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: ButtonType
    disabled?: boolean
    outline?: boolean
    size?: 'md' | 'sm'
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info'
  }>(),
  {
    type: 'button',
    disabled: false,
    outline: false,
    size: 'md',
    color: 'primary',
  },
)

const emit = defineEmits<{
  (e: 'click'): void
}>()

function onClick(): void {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-button {
  border-radius: 6px;
  cursor: pointer;
  line-height: 1;
  min-width: 96px;

  &.-md {
    font-size: 16px;
    height: 48px;
    padding: 0 36px;
  }

  &.-sm {
    font-size: 12px;
    height: 30px;
    padding: 0 12px;
  }

  &.-primary:not(.-outline) {
    background-color: v.$primary-button-default-color;
    color: v.$white;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$primary-button-active-color;
    }
  }

  &.-primary.-outline {
    background-color: v.$white;
    border: 2px solid v.$primary-button-default-color;
    color: v.$primary-button-default-color;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$primary-button-default-color;
      color: v.$white;
    }
  }

  &.-secondary:not(.-outline) {
    background-color: v.$secondary-button-default-color;
    color: v.$white;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$secondary-button-active-color;
    }
  }

  &.-secondary.-outline {
    background-color: v.$white;
    border: 2px solid v.$secondary-button-default-color;
    color: v.$secondary-button-default-color;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$secondary-button-default-color;
      color: v.$white;
    }
  }

  &.-danger:not(.-outline) {
    background-color: v.$red;
    color: v.$white;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-danger.-outline {
    background-color: v.$white;
    border: 2px solid v.$red;
    color: v.$red;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$red;
      color: v.$white;
    }
  }

  &.-warning:not(.-outline) {
    background: #a18d0a;
    color: v.$white;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-warning.-outline {
    background-color: v.$white;
    border: 2px solid #a18d0a;
    color: #a18d0a;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      background: #a18d0a;
      color: v.$white;
    }
  }

  &.-success:not(.-outline) {
    background: v.$green;
    color: v.$white;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-success.-outline {
    background-color: v.$white;
    border: 2px solid v.$green;
    color: v.$green;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      background: v.$green;
      color: v.$white;
    }
  }

  &.-info:not(.-outline) {
    background-color: v.$blue-1;
    color: v.$white;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-info.-outline {
    background-color: v.$white;
    border: 2px solid v.$blue-1;
    color: v.$blue-1;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$blue-1;
      color: v.$white;
    }
  }

  &.-primary.-disabled,
  &.-secondary.-disabled,
  &.-danger.-disabled,
  &.-warning.-disabled,
  &.-success.-disabled,
  &.-info.-disabled {
    background-color: v.$button-disabled-color;
    border-color: v.$button-disabled-color;
    color: v.$white;
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
