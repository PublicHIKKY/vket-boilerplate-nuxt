<i18n lang="yaml">
ja:
  email: メールアドレス
  password: パスワード
  rememberMe: ログイン状態を保持
  forgotPassword: パスワードを忘れた
  login: ログイン
  loggingIn: ログイン中...
  register: アカウントをお持ちでない方は
  registerLink: こちら
en:
  email: Email Address
  password: Password
  rememberMe: Remember me
  forgotPassword: Forgot password
  login: Login
  loggingIn: Logging in...
  register: Don't have an account?
  registerLink: Sign up
</i18n>

<template>
  <form
    class="hm-login-form"
    @submit.prevent="emit('submit')"
  >
    <!-- メールアドレス -->
    <div class="form-group">
      <label class="label">{{ i18n.t('email') }}</label>
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
          :value="email"
          type="email"
          class="input"
          :class="{ '-error': emailError }"
          placeholder="your.email@example.com"
          @input="emit('update:email', ($event.target as HTMLInputElement).value)"
        />
      </div>
      <span
        v-if="emailError"
        class="error-message"
      >
        {{ emailError }}
      </span>
    </div>

    <!-- パスワード -->
    <div class="form-group">
      <label class="label">{{ i18n.t('password') }}</label>
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
          :value="password"
          type="password"
          class="input"
          :class="{ '-error': passwordError }"
          placeholder="••••••••"
          @input="emit('update:password', ($event.target as HTMLInputElement).value)"
        />
      </div>
      <span
        v-if="passwordError"
        class="error-message"
      >
        {{ passwordError }}
      </span>
    </div>

    <!-- チェックボックスとリンク -->
    <div class="options">
      <label class="checkbox-label">
        <input
          :checked="rememberMe"
          type="checkbox"
          class="checkbox-input"
          @change="emit('update:rememberMe', ($event.target as HTMLInputElement).checked)"
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
      v-if="error"
      class="login-error"
    >
      {{ error }}
    </div>

    <!-- ログインボタン -->
    <button
      type="submit"
      class="submit-button"
      :disabled="loading"
    >
      {{ loading ? i18n.t('loggingIn') : i18n.t('login') }}
    </button>

    <!-- フッターリンク -->
    <p class="footer-text">
      {{ i18n.t('register') }}<a
        href="#"
        class="register-link"
      >{{ i18n.t('registerLink') }}</a>
    </p>
  </form>
</template>

<script setup lang="ts">
const i18n = useI18n()

type Props = {
  email: string
  password: string
  rememberMe: boolean
  emailError?: string | null
  passwordError?: string | null
  error?: string | null
  loading: boolean
}

type Emits = {
  (e: 'update:email' | 'update:password', value: string): void
  (e: 'update:rememberMe', value: boolean): void
  (e: 'submit'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<style scoped lang="scss">
.hm-login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;

  > .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > .label {
      font-size: 16px;
      line-height: 24px;
      color: #364153;
    }

    > .input-wrapper {
      position: relative;

      > .input-icon {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);

        color: #9ca3af;
      }

      > .input {
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

        &.-error {
          border-color: #ef4444;
        }
      }
    }

    > .error-message {
      font-size: 14px;
      line-height: 20px;
      color: #ef4444;
    }
  }

  > .options {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .checkbox-label {
      cursor: pointer;
      display: flex;
      gap: 8px;
      align-items: center;

      > .checkbox-input {
        cursor: pointer;
        width: 16px;
        height: 16px;
        accent-color: #4f39f6;
      }

      > .checkbox-text {
        font-size: 16px;
        line-height: 24px;
        color: #364153;
      }
    }

    > .forgot-link {
      font-size: 16px;
      line-height: 24px;
      color: #4f39f6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > .login-error {
    padding: 12px;
    border-radius: 8px;

    font-size: 14px;
    line-height: 20px;
    color: #ef4444;
    text-align: center;

    background: #fef2f2;
  }

  > .submit-button {
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

  > .footer-text {
    margin: 0;

    font-size: 16px;
    line-height: 24px;
    color: #4a5565;
    text-align: center;

    > .register-link {
      color: #4f39f6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
