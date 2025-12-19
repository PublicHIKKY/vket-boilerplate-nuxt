<i18n lang="yaml">
ja:
  seo:
    title: ログイン
    description: ログインページです。
  title: 勤怠管理システム
  subtitle: ログインして開始
  email: メールアドレス
  password: パスワード
  rememberMe: ログイン状態を保持
  forgotPassword: パスワードを忘れた
  login: ログイン
  loggingIn: ログイン中...
  register: アカウントをお持ちでない方は
  registerLink: こちら
  copyright: © 2025 勤怠管理システム. All rights reserved.
  error:
    login: ログインに失敗しました
en:
  seo:
    title: Login
    description: Login page.
  title: Attendance Management System
  subtitle: Login to start
  email: Email Address
  password: Password
  rememberMe: Remember me
  forgotPassword: Forgot password
  login: Login
  loggingIn: Logging in...
  register: Don't have an account?
  registerLink: Sign up
  copyright: © 2025 Attendance Management System. All rights reserved.
  error:
    login: Login failed
</i18n>

<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <!-- ヘッダー部分 -->
        <div class="login-header">
          <div class="login-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h1 class="login-title">
            {{ i18n.t('title') }}
          </h1>
          <p class="login-subtitle">
            {{ i18n.t('subtitle') }}
          </p>
        </div>

        <!-- フォーム部分 -->
        <form
          class="login-form"
          @submit.prevent="onSubmit"
        >
          <!-- メールアドレス -->
          <div class="form-group">
            <label class="form-label">{{ i18n.t('email') }}</label>
            <div class="input-wrapper">
              <svg
                class="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect
                  width="20"
                  height="16"
                  x="2"
                  y="4"
                  rx="2"
                />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                v-model="loginComposable.form.email"
                type="email"
                class="form-input"
                :class="{ 'is-error': loginComposable.form.emailError }"
                placeholder="your.email@example.com"
              />
            </div>
            <span
              v-if="loginComposable.form.emailError"
              class="error-message"
            >
              {{ loginComposable.form.emailError }}
            </span>
          </div>

          <!-- パスワード -->
          <div class="form-group">
            <label class="form-label">{{ i18n.t('password') }}</label>
            <div class="input-wrapper">
              <svg
                class="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect
                  width="18"
                  height="11"
                  x="3"
                  y="11"
                  rx="2"
                  ry="2"
                />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                v-model="loginComposable.form.password"
                type="password"
                class="form-input"
                :class="{ 'is-error': loginComposable.form.passwordError }"
                placeholder="••••••••"
              />
            </div>
            <span
              v-if="loginComposable.form.passwordError"
              class="error-message"
            >
              {{ loginComposable.form.passwordError }}
            </span>
          </div>

          <!-- チェックボックスとリンク -->
          <div class="form-options">
            <label class="checkbox-label">
              <input
                v-model="loginComposable.form.rememberMe"
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-text">{{ i18n.t('rememberMe') }}</span>
            </label>
            <a
              href="#"
              class="forgot-link"
            >{{ i18n.t('forgotPassword') }}</a>
          </div>

          <!-- エラーメッセージ -->
          <div
            v-if="loginComposable.error"
            class="login-error"
          >
            {{ loginComposable.error }}
          </div>

          <!-- ログインボタン -->
          <button
            type="submit"
            class="login-button"
            :disabled="loginComposable.loading"
          >
            {{ loginComposable.loading ? i18n.t('loggingIn') : i18n.t('login') }}
          </button>
        </form>

        <!-- フッターリンク -->
        <p class="login-footer-text">
          {{ i18n.t('register') }}<a
            href="#"
            class="register-link"
          >{{ i18n.t('registerLink') }}</a>
        </p>
      </div>

      <!-- コピーライト -->
      <p class="copyright">
        {{ i18n.t('copyright') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLogin, loginInjectionKey } from '@/composables/useLogin'

definePageMeta({
  layout: 'auth',
})

const i18n = useI18n()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

// Composable
const loginComposable = useLogin()
provide(loginInjectionKey, loginComposable)

// フォーム送信処理
const onSubmit = async () => {
  await loginComposable.login()
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: linear-gradient(150deg, #eff6ff 0%, #e0e7ff 100%);
}

.login-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 448px;
}

.login-card {
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 32px;
  padding-bottom: 0;
  border-radius: 16px;

  background: #fff;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 10%),
    0 8px 10px -6px rgb(0 0 0 / 10%);
}

.login-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.login-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  border-radius: 14px;

  color: #fff;

  background: #4f39f6;
}

.login-title {
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #101828;
}

.login-subtitle {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #4a5565;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 16px;
  line-height: 24px;
  color: #364153;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);

  color: #9ca3af;
}

.form-input {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid #d1d5dc;
  border-radius: 10px;

  font-size: 16px;
  line-height: normal;
  color: #0a0a0a;

  background: #fff;

  &::placeholder {
    color: rgb(10 10 10 / 50%);
  }

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }

  &.is-error {
    border-color: #ef4444;
  }
}

.error-message {
  font-size: 14px;
  line-height: 20px;
  color: #ef4444;
}

.form-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-label {
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
}

.checkbox-input {
  cursor: pointer;
  width: 16px;
  height: 16px;
  accent-color: #4f39f6;
}

.checkbox-text {
  font-size: 16px;
  line-height: 24px;
  color: #364153;
}

.forgot-link {
  font-size: 16px;
  line-height: 24px;
  color: #4f39f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.login-error {
  padding: 12px;
  border-radius: 8px;

  font-size: 14px;
  line-height: 20px;
  color: #ef4444;
  text-align: center;

  background: #fef2f2;
}

.login-button {
  cursor: pointer;

  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;

  font-size: 16px;
  line-height: 24px;
  color: #fff;

  background: #4f39f6;

  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #3d2bd4;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
}

.login-footer-text {
  margin: 0;

  font-size: 16px;
  line-height: 24px;
  color: #4a5565;
  text-align: center;
}

.register-link {
  color: #4f39f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.copyright {
  margin: 0;

  font-size: 16px;
  line-height: 24px;
  color: #4a5565;
  text-align: center;
}
</style>
