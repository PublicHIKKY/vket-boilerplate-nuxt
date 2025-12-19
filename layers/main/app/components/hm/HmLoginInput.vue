<i18n lang="yaml">
ja:
  emailPlaceholder: your.email@example.com
  passwordPlaceholder: ••••••••
en:
  emailPlaceholder: your.email@example.com
  passwordPlaceholder: ••••••••
</i18n>

<template>
  <div class="hm-login-input">
    <svg
      class="input-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Email Icon -->
      <template v-if="type === 'email'">
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
          stroke="#9CA3AF"
          stroke-width="2"
        />
        <path
          d="M2 7L12 13L22 7"
          stroke="#9CA3AF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </template>
      <!-- Password Icon -->
      <template v-else-if="type === 'password'">
        <rect
          x="3"
          y="11"
          width="18"
          height="11"
          rx="2"
          stroke="#9CA3AF"
          stroke-width="2"
        />
        <path
          d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
          stroke="#9CA3AF"
          stroke-width="2"
          stroke-linecap="round"
        />
      </template>
    </svg>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="computedPlaceholder"
      :disabled="disabled"
      class="form-input"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()

type Props = {
  modelValue: string
  type: 'email' | 'password'
  placeholder?: string
  disabled?: boolean
}

type Emits = {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emit = defineEmits<Emits>()

// Computed placeholder - use custom placeholder or default i18n placeholder
const computedPlaceholder = computed(() => {
  if (props.placeholder) {
    return props.placeholder
  }
  return props.type === 'email'
    ? i18n.t('emailPlaceholder')
    : i18n.t('passwordPlaceholder')
})

// Input handler
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
@use '@main/assets/styles/variables' as v;
@use '@main/assets/styles/mixins' as m;

// Local color variables matching login.vue design
$login-border: #d1d5dc;
$login-placeholder: rgb(10 10 10 / 50%);
$login-primary: #4f39f6;
$login-text-dark: #101828;

.hm-login-input {
  position: relative;
  display: flex;
  align-items: center;

  > .input-icon {
    pointer-events: none;
    position: absolute;
    left: 12px;
  }

  > .form-input {
    width: 100%;
    height: 49px;
    padding: 12px 16px 12px 40px;
    border: 1px solid $login-border;
    border-radius: 10px;

    font-size: 16px;
    color: $login-text-dark;

    background-color: v.$white;
    outline: none;

    transition: border-color 0.2s ease;

    &::placeholder {
      color: $login-placeholder;
    }

    &:focus {
      border-color: $login-primary;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
}
</style>
