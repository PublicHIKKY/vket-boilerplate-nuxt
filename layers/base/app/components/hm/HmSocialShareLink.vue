<template>
  <!--
  - [x] Composition APIで書けている
  - [-] Nuxt.jsに依存していない
  - [-] unplugin-auto-import を導入する前提の書き方ができている
  - [-] ロジック観点でのリファクタリング(FS主管)が完了している
  - [-] デザイン観点でのリファクタリング(DD主管)が完了している
  - [-] 適切にコメントが記載されている
  - [-] Unit Testを通過している
  - [-] storiesが適切に記載されている
 -->
  <HaLink
    class="hm-social-share-link"
    :to="url"
    :blank="true"
  >
    <slot />
  </HaLink>
</template>

<script setup lang="ts">
const _shareTargetServices = {
  0: 'twitter',
  1: 'facebook',
  2: 'line',
} as const
type SharedTarget =
  (typeof _shareTargetServices)[keyof typeof _shareTargetServices]

const props = defineProps<{
  name: SharedTarget | null
  text?: string
  twitterHashtags?: string[]
  shareUrl?: string
}>()

const socialShareLink = useSocialShareLink()
const url = computed(() => socialShareLink.getShareUrl(props.name || '', props))
</script>
