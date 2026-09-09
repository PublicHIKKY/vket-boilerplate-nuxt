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
import { LocationQuery, parseQuery, stringifyQuery } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to: string
    blank?: boolean
    rel?: HTMLAnchorElement['rel']
    forceAnchorLink?: boolean
    noLocale?: boolean
    // to に ?query / #hash を直接書ける。以下 2 つは後方互換のために残してある
    query?: LocationQuery
    // 「#」を先頭につけること
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
  // 文字列を渡せば ufo の parsePath が query / hash を分離し、ロケール prefix も正しく付く
  return localePath(toUrl(props))
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
  // prop の指定が無ければ to をそのまま返す。既存の to を再エンコードしない
  if (!query && hash === undefined) {
    return to
  }

  const [beforeHash = '', ...hashParts] = to.split('#')
  const embeddedHash = hashParts.length > 0 ? `#${hashParts.join('#')}` : ''
  const [path = '', ...queryParts] = beforeHash.split('?')
  const embeddedQuery = queryParts.join('?')

  // 同じキーは prop 側を優先する
  const mergedQuery = { ...parseQuery(embeddedQuery), ...query }
  const queryStr
    = Object.keys(mergedQuery).length > 0 ? `?${stringifyQuery(mergedQuery)}` : ''

  return `${path}${queryStr}${hash ?? embeddedHash}`
}
</script>
