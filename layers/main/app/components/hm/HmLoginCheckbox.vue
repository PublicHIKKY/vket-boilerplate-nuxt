<i18n lang="yaml">
ja:
  rememberMe: ログイン状態を保持
en:
  rememberMe: Remember me
</i18n>

<template>
  <label class="hm-login-checkbox">
    <input
      :checked="modelValue"
      type="checkbox"
      class="checkbox-input"
      :disabled="disabled"
      @change="handleChange"
    />
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">
      <slot>{{ label || i18n.t('rememberMe') }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
const i18n = useI18n()

type Props = {
  modelValue?: boolean
  label?: string
  disabled?: boolean
}

type Emits = {
  (e: 'update:modelValue', value: boolean): void
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: undefined,
  disabled: false,
})

const emit = defineEmits<Emits>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/custom/variables_new' as v;
@use '@/assets/styles/mixins' as m;

// Local color variables matching login.vue design
$login-border: #d1d5dc;
$login-primary: #4f39f6;
$login-text-label: #364153;

.hm-login-checkbox {
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;

  &:has(.checkbox-input:disabled) {
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.checkbox-input {
  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;

  clip-path: inset(50%);
}

.checkbox-custom {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border: 1px solid $login-border;
  border-radius: 3px;

  background-color: white;

  transition: all 0.2s ease;

  &::after {
    content: '';

    transform: rotate(45deg);

    display: none;

    width: 4px;
    height: 8px;
    margin-bottom: 2px;
    border: solid white;
    border-width: 0 2px 2px 0;
  }

  .checkbox-input:checked + & {
    border-color: $login-primary;
    background-color: $login-primary;

    &::after {
      display: block;
    }
  }

  .checkbox-input:focus + & {
    box-shadow: 0 0 0 2px rgba($login-primary, 0.2);
  }

  .checkbox-input:disabled + & {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.checkbox-text {
  user-select: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-label;

  @include m.xs {
    font-size: 14px;
  }
}
</style>
