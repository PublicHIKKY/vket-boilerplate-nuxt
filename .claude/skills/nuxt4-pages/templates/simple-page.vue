<i18n lang="yaml">
ja:
  seo:
    title: ページタイトル
    description: ページの説明文をここに記述します。
en:
  seo:
    title: Page Title
    description: Page description goes here.
</i18n>

<template>
  <HtPageName />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'public', // または 'account', 'default'
})

// composables
const i18n = useI18n()

// SEO設定
useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})
</script>
