<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <!-- Logo Section -->
        <div class="logo-section">
          <div class="logo-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
            勤怠管理システム
          </h1>
          <p class="logo-subtitle">
            ログインして開始
          </p>
        </div>

        <!-- Form Section -->
        <form
          class="login-form"
          @submit.prevent
        >
          <!-- Email Field -->
          <div class="form-group">
            <label class="form-label">メールアドレス</label>
            <div class="input-wrapper">
              <svg
                class="input-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              </svg>
              <input
                type="email"
                class="form-input"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label class="form-label">パスワード</label>
            <div class="input-wrapper">
              <svg
                class="input-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              </svg>
              <input
                type="password"
                class="form-input"
                placeholder="••••••••"
              />
            </div>
          </div>

          <!-- Options Row -->
          <div class="options-row">
            <label class="checkbox-label">
              <input
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-text">ログイン状態を保持</span>
            </label>
            <a
              href="#"
              class="forgot-link"
            >パスワードを忘れた</a>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="submit-button"
          >
            ログイン
          </button>
        </form>

        <!-- Register Link -->
        <p class="register-text">
          アカウントをお持ちでない方は<a
            href="#"
            class="register-link"
          >こちら</a>
        </p>
      </div>

      <!-- Footer -->
      <p class="footer-text">
        © 2025 勤怠管理システム. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

useSeoMeta({
  title: 'ログイン | 勤怠管理システム',
  description: '勤怠管理システムへログインしてください。',
})
</script>

<style lang="scss" scoped>
@use '@main/assets/styles/variables' as v;
@use '@main/assets/styles/mixins' as m;

// Local color variables for this design
$login-primary: #4f39f6;
$login-primary-hover: #4330d9;
$login-bg-start: #eff6ff;
$login-bg-end: #e0e7ff;
$login-text-dark: #101828;
$login-text-gray: #4a5565;
$login-text-label: #364153;
$login-border: #d1d5dc;
$login-placeholder: rgb(10 10 10 / 50%);

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: 16px;

  background: linear-gradient(150deg, $login-bg-start 0%, $login-bg-end 100%);
}

.login-container {
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  max-width: 448px;
}

.login-card {
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 32px;
  padding-bottom: 32px;
  border-radius: 16px;

  background-color: v.$white;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 10%),
    0 8px 10px -6px rgb(0 0 0 / 10%);
}

// Logo Section
.logo-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  border-radius: 14px;

  background-color: $login-primary;
}

.logo-title {
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-dark;
}

.logo-subtitle {
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-gray;
}

// Form Section
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
  font-weight: 400;
  line-height: 24px;
  color: $login-text-label;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  pointer-events: none;
  position: absolute;
  left: 12px;
}

.form-input {
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
}

// Options Row
.options-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

  background-color: v.$white;

  transition: all 0.2s ease;

  &::after {
    content: '';

    transform: rotate(45deg);

    display: none;

    width: 4px;
    height: 8px;
    margin-bottom: 2px;
    border: solid v.$white;
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
}

.checkbox-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-label;
}

.forgot-link {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-primary;
  text-decoration: none;

  transition: opacity 0.2s ease;

  @include m.hover {
    opacity: 0.8;
  }
}

// Submit Button
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
  color: v.$white;

  background-color: $login-primary;

  transition: background-color 0.2s ease;

  @include m.hover {
    background-color: $login-primary-hover;
  }

  &:active {
    background-color: #3f2dc5;
  }
}

// Register Link
.register-text {
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-gray;
  text-align: center;
}

.register-link {
  color: $login-primary;
  text-decoration: none;
  transition: opacity 0.2s ease;

  @include m.hover {
    opacity: 0.8;
  }
}

// Footer
.footer-text {
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-gray;
  text-align: center;
}

// Responsive adjustments
@include m.sp {
  .login-card {
    gap: 24px;
    padding: 24px;
  }

  .options-row {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}

@include m.xs {
  .login-page {
    padding: 12px;
  }

  .login-card {
    padding: 20px;
  }

  .form-label,
  .checkbox-text,
  .forgot-link,
  .register-text,
  .footer-text {
    font-size: 14px;
  }
}
</style>
