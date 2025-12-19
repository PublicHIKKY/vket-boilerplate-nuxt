<i18n lang="yaml">
ja:
  logoTitle: 勤怠管理システム
  logoSubtitle: ログインして開始
  registerText: アカウントをお持ちでない方は
  registerLink: こちら
en:
  logoTitle: Attendance Management System
  logoSubtitle: Login to get started
  registerText: Don't have an account?
  registerLink: Sign up here
</i18n>

<template>
  <div class="ho-login-card">
    <!-- Logo Section -->
    <div class="logo-section">
      <div class="logo-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="white"
            stroke-width="2"
          />
          <polyline
            points="12,7 12,12 16,12"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h1 class="logo-title">
        {{ i18n.t('logoTitle') }}
      </h1>
      <p class="logo-subtitle">
        {{ i18n.t('logoSubtitle') }}
      </p>
    </div>

    <!-- Form Section -->
    <HoLoginForm
      :isLoading="isLoading"
      :errorMessage="errorMessage"
      @submit="onSubmit"
    />

    <!-- Register Link -->
    <p class="register-text">
      {{ i18n.t('registerText') }}<a
        href="#"
        class="register-link"
      >{{ i18n.t('registerLink') }}</a>
    </p>
  </div>
</template>

<script setup lang="ts">
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

const onSubmit = () => {
  emit('submit')
}
</script>

<style lang="scss" scoped>
@use '@main/assets/styles/variables' as v;
@use '@main/assets/styles/mixins' as m;

// Local color variables matching login.vue design
$login-primary: #4f39f6;
$login-text-dark: #101828;
$login-text-gray: #4a5565;

.ho-login-card {
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 32px;
  border-radius: 16px;

  background-color: white;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 10%),
    0 8px 10px -6px rgb(0 0 0 / 10%);
}

.logo-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  > .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    border-radius: 14px;

    background-color: $login-primary;
  }

  > .logo-title {
    margin: 0;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: $login-text-dark;
  }

  > .logo-subtitle {
    margin: 0;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: $login-text-gray;
  }
}

.register-text {
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-gray;
  text-align: center;

  > .register-link {
    color: $login-primary;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
}

// Responsive
@include m.sp {
  .ho-login-card {
    gap: 24px;
    padding: 24px;
  }
}

@include m.xs {
  .ho-login-card {
    padding: 20px;
  }

  .register-text {
    font-size: 14px;
  }
}
</style>
