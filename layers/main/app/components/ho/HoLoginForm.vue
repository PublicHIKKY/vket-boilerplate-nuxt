<i18n lang="yaml">
ja:
  emailLabel: メールアドレス
  passwordLabel: パスワード
  forgotPassword: パスワードを忘れた
  loginButton: ログイン
  loggingIn: ログイン中...
en:
  emailLabel: Email Address
  passwordLabel: Password
  forgotPassword: Forgot Password
  loginButton: Login
  loggingIn: Logging in...
</i18n>

<template>
  <form
    class="ho-login-form"
    @submit.prevent="onSubmit"
  >
    <!-- Email Field -->
    <div class="form-group">
      <label class="form-label">{{ i18n.t('emailLabel') }}</label>
      <HmLoginInput
        v-model="formData.email"
        type="email"
        :disabled="isLoading"
      />
      <p
        v-if="errors.email"
        class="error-text"
      >
        {{ errors.email }}
      </p>
    </div>

    <!-- Password Field -->
    <div class="form-group">
      <label class="form-label">{{ i18n.t('passwordLabel') }}</label>
      <HmLoginInput
        v-model="formData.password"
        type="password"
        :disabled="isLoading"
      />
      <p
        v-if="errors.password"
        class="error-text"
      >
        {{ errors.password }}
      </p>
    </div>

    <!-- Options Row -->
    <div class="options-row">
      <HmLoginCheckbox
        v-model="formData.rememberMe"
        :disabled="isLoading"
      />
      <a
        href="#"
        class="forgot-link"
      >{{ i18n.t('forgotPassword') }}</a>
    </div>

    <!-- Error Message -->
    <p
      v-if="errorMessage"
      class="error-message"
    >
      {{ errorMessage }}
    </p>

    <!-- Submit Button -->
    <button
      type="submit"
      class="submit-button"
      :disabled="isLoading"
    >
      <span v-if="isLoading">{{ i18n.t('loggingIn') }}</span>
      <span v-else>{{ i18n.t('loginButton') }}</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { loginFormInjectionKey } from '#main/app/composables/auth/form/useLoginForm'

type Props = {
  isLoading?: boolean
  errorMessage?: string
}

type Emits = {
  (emit: 'submit'): void
}

const i18n = useI18n()
withDefaults(defineProps<Props>(), {
  isLoading: false,
  errorMessage: undefined,
})
const emit = defineEmits<Emits>()

// Inject form state from useLoginForm composable
const loginForm = inject(loginFormInjectionKey)!
const { formData, errors } = loginForm

// Handle form submission
const onSubmit = () => {
  emit('submit')
}
</script>

<style lang="scss" scoped>
@use '@main/assets/styles/variables' as v;
@use '@main/assets/styles/mixins' as m;

// Local color variables matching login.vue design
$login-primary: #4f39f6;
$login-primary-hover: #4330d9;
$login-primary-active: #3f2dc5;
$login-text-label: #364153;
$login-error-text: #dc2626;
$login-error-bg: #fef2f2;

.ho-login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;

  > .form-label {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: $login-text-label;
  }

  > .error-text {
    margin: 0;
    font-size: 14px;
    color: $login-error-text;
  }
}

.options-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  > .forgot-link {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: $login-primary;
    text-decoration: none;

    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
}

.error-message {
  margin: 0;
  padding: 12px;
  border-radius: 8px;

  font-size: 14px;
  color: $login-error-text;

  background-color: $login-error-bg;
}

.submit-button {
  cursor: pointer;

  width: 100%;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: white;

  background-color: $login-primary;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: $login-primary-hover;
  }

  &:active {
    background-color: $login-primary-active;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
