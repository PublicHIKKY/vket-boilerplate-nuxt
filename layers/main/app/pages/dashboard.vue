<i18n lang="yaml">
ja:
  seo:
    title: ダッシュボード
    description: ダッシュボードページです。
  welcome: ようこそ
  loginSuccess: ログインに成功しました
  logout: ログアウト
en:
  seo:
    title: Dashboard
    description: Dashboard page.
  welcome: Welcome
  loginSuccess: Login successful
  logout: Logout
</i18n>

<template>
  <div class="dashboard-page">
    <div class="dashboard-container">
      <div class="dashboard-card">
        <div class="dashboard-header">
          <div class="dashboard-icon">
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
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h1 class="dashboard-title">
            {{ i18n.t('welcome') }}
          </h1>
          <p class="dashboard-subtitle">
            {{ i18n.t('loginSuccess') }}
          </p>
        </div>

        <div class="dashboard-content">
          <p class="dashboard-message">
            ダッシュボードへようこそ。ログインに成功しました。
          </p>
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
definePageMeta({
  layout: 'auth',
})

const i18n = useI18n()
const router = useRouter()
const localePath = useLocalePath()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

const onLogout = async () => {
  await router.push(localePath('/login'))
}
</script>

<style lang="scss" scoped>
.dashboard-page {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: linear-gradient(150deg, #eff6ff 0%, #e0e7ff 100%);
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 448px;
}

.dashboard-card {
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 32px;
  border-radius: 16px;

  background: #fff;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 10%),
    0 8px 10px -6px rgb(0 0 0 / 10%);
}

.dashboard-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.dashboard-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  border-radius: 14px;

  color: #fff;

  background: #10b981;
}

.dashboard-title {
  margin: 0;

  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #101828;
}

.dashboard-subtitle {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #4a5565;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.dashboard-message {
  margin: 0;

  font-size: 16px;
  line-height: 24px;
  color: #364153;
  text-align: center;
}

.logout-button {
  cursor: pointer;

  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5dc;
  border-radius: 10px;

  font-size: 16px;
  line-height: 24px;
  color: #364153;

  background: #fff;

  transition:
    background 0.2s,
    border-color 0.2s;

  &:hover {
    border-color: #9ca3af;
    background: #f9fafb;
  }
}
</style>
