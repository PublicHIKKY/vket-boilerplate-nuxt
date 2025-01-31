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
    <HmSlider
      class="news-slider"
      slidename="slider1"
      :items-id="['slide1-1', 'slide1-2', 'slide1-3']"
      :arrow="true"
      :pagination="true"
      :amount="3"
      :loop="true"
      :center="false"
      :page="true"
      :autoplay="true"
      :interval="7000"
      gap-pc="0"
      gap-sp="0"
      width-pc="50"
      width-sp="100"
      :duration="500"
      easing="ease-in-out"
      :draggable="true"
    >
      <template #item>
        <HmSliderItem
          id="slider1-1"
        >
          1
        </HmSliderItem>
        <HmSliderItem
          id="slider1-2"
        >
          2
        </HmSliderItem>
        <HmSliderItem
          id="slider1-3"
        >
          3
        </HmSliderItem>
      </template>
    </HmSlider>
    <HmSlider
      class="news-slider"
      slidename="slider2"
      :items-id="['slide2-1', 'slide2-2', 'slide2-3', 'slide2-4']"
      :arrow="true"
      :pagination="true"
      :amount="4"
      :loop="true"
      :center="true"
      :page="false"
      :autoplay="true"
      :interval="7000"
      gap-pc="0"
      gap-sp="0"
      width-pc="100"
      width-sp="100"
      :duration="500"
      easing="ease-in-out"
      :draggable="true"
    >
      <template #item>
        <HmSliderItem
          id="slider2-1"
        >
          1
        </HmSliderItem>
        <HmSliderItem
          id="slider2-2"
        >
          2
        </HmSliderItem>
        <HmSliderItem
          id="slider2-3"
        >
          3
        </HmSliderItem>
        <HmSliderItem
          id="slider2-4"
        >
          4
        </HmSliderItem>
      </template>
    </HmSlider>
    <!-- <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
      <NuxtPage />
    </NuxtLayout> -->
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
  }
  else {
    return currentFullPath.value
      .replace(/\/en(\/|$)/, '/')
      .replace(/\/{2,}/, '/')
  }
})

const currentEnFullPath = computed(() => {
  if (currentLang.value === 'en') {
    return currentFullPath.value
  }
  else {
    const path = route.fullPath.endsWith('/')
      ? route.fullPath
      : `${route.fullPath}/`
    return `${useRuntimeConfig().public.url}/en${path}`
  }
})
</script>
