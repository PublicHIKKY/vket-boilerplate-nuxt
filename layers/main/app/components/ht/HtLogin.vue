<i18n lang="yaml">
ja:
  footerText: © 2025 勤怠管理システム. All rights reserved.
en:
  footerText: © 2025 Attendance Management System. All rights reserved.
</i18n>

<template>
  <div class="ht-login">
    <div class="login-container">
      <HoLoginCard
        :isLoading="isLoading"
        :errorMessage="errorMessage"
        @submit="onSubmit"
      />

      <!-- Footer -->
      <p class="footer-text">
        {{ i18n.t('footerText') }}
      </p>
    </div>
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
$login-bg-start: #eff6ff;
$login-bg-end: #e0e7ff;
$login-text-gray: #4a5565;

.ht-login {
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

.footer-text {
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: $login-text-gray;
  text-align: center;
}

// Responsive
@include m.xs {
  .ht-login {
    padding: 12px;
  }

  .footer-text {
    font-size: 14px;
  }
}
</style>
