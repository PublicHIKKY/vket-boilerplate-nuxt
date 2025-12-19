<i18n lang="yaml">
ja:
  seo:
    title: ダッシュボード
    description: 勤怠管理システムのダッシュボードです。
  welcome: ようこそ
  welcomeMessage: ログインに成功しました。
  logout: ログアウト
en:
  seo:
    title: Dashboard
    description: Attendance management system dashboard.
  welcome: Welcome
  welcomeMessage: Login successful.
  logout: Logout
</i18n>

<template>
  <div class="dashboard-page">
    <div class="dashboard-container">
      <div class="dashboard-card">
        <div class="dashboard-header">
          <div class="success-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#10B981"
                stroke-width="2"
              />
              <path
                d="M8 12L11 15L16 9"
                stroke="#10B981"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1 class="dashboard-title">
            {{ i18n.t('welcome') }}, {{ userName }}
          </h1>
          <p class="dashboard-message">
            {{ i18n.t('welcomeMessage') }}
          </p>
        </div>

        <div class="user-info">
          <div class="info-item">
            <span class="info-label">Email:</span>
            <span class="info-value">{{ userEmail }}</span>
          </div>
        </div>

        <button
          type="button"
          class="logout-button"
          @click="onLogout"
        >
          {{ i18n.t('logout') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '@/composables/core/useAuth'

definePageMeta({
  layout: false,
})

const i18n = useI18n()
const { user, logout } = useAuth()

useSeoMeta({
  title: `${i18n.t('seo.title')} | 勤怠管理システム`,
  description: i18n.t('seo.description'),
})

const userName = computed(() => user.value?.name ?? '')
const userEmail = computed(() => user.value?.email ?? '')

const onLogout = async () => {
  logout()
  await navigateTo('/login')
}
</script>

<style lang="scss" scoped>
@use '@main/assets/styles/variables' as v;
@use '@main/assets/styles/mixins' as m;

$dashboard-primary: #10b981;
$dashboard-bg-start: #ecfdf5;
$dashboard-bg-end: #d1fae5;
$dashboard-text-dark: #101828;
$dashboard-text-gray: #4a5565;

.dashboard-page {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: 16px;

  background: linear-gradient(150deg, $dashboard-bg-start 0%, $dashboard-bg-end 100%);
}

.dashboard-container {
  width: 100%;
  max-width: 480px;
}

.dashboard-card {
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 40px;
  border-radius: 16px;

  background-color: v.$white;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 10%),
    0 8px 10px -6px rgb(0 0 0 / 10%);
}

.dashboard-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  text-align: center;
}

.success-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 50%;

  background-color: $dashboard-bg-start;
}

.dashboard-title {
  margin: 0;

  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: $dashboard-text-dark;
}

.dashboard-message {
  margin: 0;
  font-size: 16px;
  color: $dashboard-text-gray;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 20px;
  border-radius: 12px;

  background-color: #f9fafb;
}

.info-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

.info-label {
  font-size: 14px;
  font-weight: 500;
  color: $dashboard-text-gray;
}

.info-value {
  font-size: 14px;
  color: $dashboard-text-dark;
}

.logout-button {
  cursor: pointer;

  width: 100%;
  height: 48px;
  padding: 0;
  border: 1px solid #d1d5dc;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 400;
  color: $dashboard-text-dark;

  background-color: v.$white;

  transition: background-color 0.2s ease;

  @include m.hover {
    background-color: #f9fafb;
  }
}

@include m.sp {
  .dashboard-card {
    gap: 24px;
    padding: 24px;
  }

  .dashboard-title {
    font-size: 20px;
  }
}
</style>
