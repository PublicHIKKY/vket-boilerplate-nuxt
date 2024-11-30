<template>
  <component
    :is="component"
    class="ha-link"
    v-bind="{ [isNuxtLink ? 'to' : 'href']: linkTo }"
    :target="blank ? '_blank' : undefined"
    :rel="rel"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { LocationQuery, stringifyQuery } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to: string
    blank?: boolean
    rel?: HTMLAnchorElement['rel']
    forceAnchorLink?: boolean
    noLocale?: boolean
    // toにqueryパラメータを入れてしまうと、localePathで消えるため、こちらのパラメータを使用してリンクを生成
    query?: LocationQuery
    // toにhashパラメータを入れてしまうと、localePathで消えるため、こちらのパラメータを使用してリンクを生成
    // 使う場合は「#」を先頭につけること
    hash?: string
  }>(),
  {
    blank: false,
    rel: undefined,
    forceAnchorLink: false,
    noLocale: false,
    query: undefined,
    hash: undefined,
  },
)
const isExternalReference = computed(() => !!props.to?.match(/^https?:\/\//))
const isNuxtLink = computed(
  // FIXME: isNuxtEnvironment() が壊れている
  () =>
    /* isNuxtEnvironment() && */ !props.forceAnchorLink
    && !isExternalReference.value,
)
const component = computed(() =>
  isNuxtLink.value ? resolveComponent('nuxt-link') : 'a',
)
const linkTo = computed(() => {
  if (!isNuxtLink.value) {
    return toUrl(props)
  }

  const localePath = useLocalePath()
  return localePath({ path: props.to, query: props.query, hash: props.hash })
})
const toUrl = ({
  to,
  query,
  hash,
}: {
  to: string
  query?: LocationQuery
  hash?: string
}) => {
  const queryStr = query ? `?${stringifyQuery(query)}` : ''
  return `${to}${queryStr}${hash ?? ''}`
}
</script>
