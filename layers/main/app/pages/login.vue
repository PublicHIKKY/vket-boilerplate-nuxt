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
            勤怠管理システム
          </h1>
          <p class="login-subtitle">
            ログインして開始
          </p>
        </div>

        <!-- フォーム部分 -->
        <div class="login-form">
          <!-- メールアドレス -->
          <div class="form-group">
            <label class="form-label">メールアドレス</label>
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
                type="email"
                class="form-input"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <!-- パスワード -->
          <div class="form-group">
            <label class="form-label">パスワード</label>
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
                type="password"
                class="form-input"
                placeholder="••••••••"
              />
            </div>
          </div>

          <!-- チェックボックスとリンク -->
          <div class="form-options">
            <label class="checkbox-label">
              <input
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-text">ログイン状態を保持</span>
            </label>
            <a
              href="#"
              class="forgot-link"
            >パスワードを忘れた</a>
          </div>

          <!-- ログインボタン -->
          <button
            type="submit"
            class="login-button"
          >
            ログイン
          </button>
        </div>

        <!-- フッターリンク -->
        <p class="login-footer-text">
          アカウントをお持ちでない方は<a
            href="#"
            class="register-link"
          >こちら</a>
        </p>
      </div>

      <!-- コピーライト -->
      <p class="copyright">
        © 2025 勤怠管理システム. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
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

  &:hover {
    background: #3d2bd4;
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
