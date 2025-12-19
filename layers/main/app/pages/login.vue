<i18n lang="yaml">
ja:
  seo:
    title: ログイン
    description: ログインページです。
en:
  seo:
    title: Login
    description: Login page.
</i18n>

<template>
  <HtLogin @submit="onSubmit" />
</template>

<script setup lang="ts">
import { useLogin, loginInjectionKey } from '@/composables/useLogin'

definePageMeta({
  layout: 'auth',
})

const i18n = useI18n()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

// Composable
const loginComposable = useLogin()
provide(loginInjectionKey, loginComposable)

// フォーム送信処理
const onSubmit = async () => {
  await loginComposable.login()
}
</script>
