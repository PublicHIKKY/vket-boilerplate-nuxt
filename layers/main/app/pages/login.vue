<i18n lang="yaml">
ja:
  seo:
    title: ログイン
    description: 勤怠管理システムへログインしてください。
  error:
    login: ログインに失敗しました。
  success:
    login: ログインしました。
en:
  seo:
    title: Login
    description: Login to the attendance management system.
  error:
    login: Login failed.
  success:
    login: Logged in successfully.
</i18n>

<template>
  <HtLogin
    :isLoading="isLoading"
    :errorMessage="errorMessage"
    @submit="handleLogin"
  />
</template>

<script setup lang="ts">
import { useLoginForm, loginFormInjectionKey } from '#main/app/composables/auth/form/useLoginForm'
import { useAuth } from '@/composables/core/useAuth'

definePageMeta({
  layout: false,
})

const i18n = useI18n()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

// Login form composable (provide for child components)
const loginForm = useLoginForm()
provide(loginFormInjectionKey, loginForm)

// Auth composable
const { login, loading, error } = useAuth()

// Computed
const isLoading = computed(() => loading.value)
const errorMessage = computed(() => error.value ?? undefined)

// Submit handler
const handleLogin = async () => {
  // Validate form
  const isValid = await loginForm.validateForm()
  if (!isValid) return

  const success = await login({
    email: loginForm.formData.email,
    password: loginForm.formData.password,
    rememberMe: loginForm.formData.rememberMe,
  })

  if (success) {
    await navigateTo('/dashboard')
  }
}
</script>

<style lang="scss" scoped>
// スタイルはHtLoginに移動済みのため不要
</style>
