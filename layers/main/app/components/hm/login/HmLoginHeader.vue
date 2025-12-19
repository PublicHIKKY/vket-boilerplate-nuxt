<i18n lang="yaml">
ja:
  title: 勤怠管理システム
  subtitle: ログインして開始
en:
  title: Attendance Management System
  subtitle: Login to start
</i18n>

<template>
  <div class="hm-login-header">
    <div class="icon">
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
    <h1 class="title">
      {{ i18n.t('title') }}
    </h1>
    <p class="subtitle">
      {{ i18n.t('subtitle') }}
    </p>
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()
</script>

<style scoped lang="scss">
.hm-login-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  > .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    border-radius: 14px;

    color: #fff;

    background: #4f39f6;
  }

  > .title {
    margin: 0;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #101828;
  }

  > .subtitle {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: #4a5565;
  }
}
</style>
