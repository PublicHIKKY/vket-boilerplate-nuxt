<i18n lang="yaml">
ja:
  copyright: (C) 2025 勤怠管理システム. All rights reserved.
en:
  copyright: (C) 2025 Attendance Management System. All rights reserved.
</i18n>

<template>
  <div class="ht-login">
    <div class="container">
      <HoLoginCard @submit="emit('submit')" />
      <p class="copyright">
        {{ i18n.t('copyright') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
type Emits = {
  (e: 'submit'): void
}

const i18n = useI18n()
const emit = defineEmits<Emits>()
</script>

<style lang="scss" scoped>
.ht-login {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: linear-gradient(150deg, #eff6ff 0%, #e0e7ff 100%);

  > .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 448px;

    > .copyright {
      margin: 0;

      font-size: 16px;
      line-height: 24px;
      color: #4a5565;
      text-align: center;
    }
  }
}
</style>
