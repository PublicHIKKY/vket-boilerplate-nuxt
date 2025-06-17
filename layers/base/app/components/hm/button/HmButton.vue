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
  cursor: pointer;
  min-width: 96px;
  border-radius: 6px;
  line-height: 1;

  &.-md {
    height: 48px;
    padding: 0 36px;
    font-size: 16px;
  }

  &.-sm {
    height: 30px;
    padding: 0 12px;
    font-size: 12px;
  }

  &.-primary:not(.-outline) {
    color: v.$white;
    background-color: v.$primary-button-default-color;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$primary-button-active-color;
    }
  }

  &.-primary.-outline {
    border: 2px solid v.$primary-button-default-color;
    color: v.$primary-button-default-color;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$primary-button-default-color;
    }
  }

  &.-secondary:not(.-outline) {
    color: v.$white;
    background-color: v.$secondary-button-default-color;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      background-color: v.$secondary-button-active-color;
    }
  }

  &.-secondary.-outline {
    border: 2px solid v.$secondary-button-default-color;
    color: v.$secondary-button-default-color;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$secondary-button-default-color;
    }
  }

  &.-danger:not(.-outline) {
    color: v.$white;
    background-color: v.$red;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-danger.-outline {
    border: 2px solid v.$red;
    color: v.$red;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$red;
    }
  }

  &.-warning:not(.-outline) {
    color: v.$white;
    background: #a18d0a;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-warning.-outline {
    border: 2px solid #a18d0a;
    color: #a18d0a;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background: #a18d0a;
    }
  }

  &.-success:not(.-outline) {
    color: v.$white;
    background: v.$green;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-success.-outline {
    border: 2px solid v.$green;
    color: v.$green;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background: v.$green;
    }
  }

  &.-info:not(.-outline) {
    color: v.$white;
    background-color: v.$blue-1;
    transition: 0.2s opacity;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }

  &.-info.-outline {
    border: 2px solid v.$blue-1;
    color: v.$blue-1;
    background-color: v.$white;
    transition: 0.2s background-color, 0.2s color;

    &:hover,
    &:focus,
    &:active {
      color: v.$white;
      background-color: v.$blue-1;
    }
  }

  &.-primary.-disabled,
  &.-secondary.-disabled,
  &.-danger.-disabled,
  &.-warning.-disabled,
  &.-success.-disabled,
  &.-info.-disabled {
    pointer-events: none;

    border-color: v.$button-disabled-color;

    color: v.$white;

    opacity: 0.5;
    background-color: v.$button-disabled-color;
  }
}
</style>
