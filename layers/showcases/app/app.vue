<i18n lang="yaml">
  ja:
    site:
      title: Vket Boilerplate Nuxt
      title_template: "{title} - HIKKY Web Frontend"
      description: Vketのサイト開発で活用しているボイラープレート
  en:
    site:
      title: Vket Boilerplate Nuxt
      title_template: "{title} - HIKKY Web Frontend"
      description: A boilerplate used for Vket site development
</i18n>

<template>
  <Head>
    <Link
      rel="alternate"
      hreflang="ja"
      :href="currentJaFullPath"
    />
    <Link
      rel="alternate"
      hreflang="en"
      :href="currentEnFullPath"
    />
    <Link
      rel="alternate"
      hreflang="x-default"
      :href="currentJaFullPath"
    />
    <template v-if="currentLang === 'ja'">
      <Link
        rel="canonical"
        :href="currentJaFullPath"
      />
    </template>
    <template v-if="currentLang === 'en'">
      <Link
        rel="canonical"
        :href="currentEnFullPath"
      />
    </template>
  </Head>
  <div class="app">
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const i18n = useI18n()
const currentFullPath = ref(`${useRuntimeConfig().public.url}${route.fullPath}`)
const currentLang = ref(i18n.locale.value)

const currentJaFullPath = computed(() => {
  if (currentLang.value === 'ja') {
    return currentFullPath.value
  } else {
    return currentFullPath.value
      .replace(/\/en(\/|$)/, '/')
      .replace(/\/{2,}/, '/')
  }
})

const currentEnFullPath = computed(() => {
  if (currentLang.value === 'en') {
    return currentFullPath.value
  } else {
    const path = route.fullPath.endsWith('/')
      ? route.fullPath
      : `${route.fullPath}/`
    return `${useRuntimeConfig().public.url}/en${path}`
  }
})

useHeadSafe({
  htmlAttrs: {
    lang: currentLang.value,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? i18n.t('site.title_template', { title: titleChunk })
      : i18n.t('site.title')
  },
  meta: [
    {
      name: 'description',
      content: i18n.t('site.description'),
    },
    {
      property: 'og:description',
      content: i18n.t('site.description'),
    },
    {
      property: 'og:site_name',
      content: i18n.t('site.title'),
    },
  ],
})
</script>
