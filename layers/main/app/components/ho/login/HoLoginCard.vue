<i18n lang="yaml">
ja: {}
en: {}
</i18n>

<template>
  <div class="ho-login-card">
    <HmLoginHeader />
    <HmLoginForm
      :email="loginComposable.form.email.value"
      :password="loginComposable.form.password.value"
      :rememberMe="loginComposable.form.rememberMe.value"
      :emailError="loginComposable.form.emailError.value"
      :passwordError="loginComposable.form.passwordError.value"
      :error="loginComposable.error.value"
      :loading="loginComposable.loading.value"
      @update:email="loginComposable.form.email.value = $event"
      @update:password="loginComposable.form.password.value = $event"
      @update:rememberMe="loginComposable.form.rememberMe.value = $event"
      @submit="emit('submit')"
    />
  </div>
</template>

<script setup lang="ts">
import { loginInjectionKey, type LoginComposable } from '@/composables/useLogin'

type Emits = {
  (e: 'submit'): void
}

const emit = defineEmits<Emits>()

// Ho層でinject可能
const loginComposable = inject<LoginComposable>(loginInjectionKey)!
</script>

<style lang="scss" scoped>
.ho-login-card {
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
</style>
