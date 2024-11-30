import { defineNuxtPlugin } from 'nuxt/app'

let fetchApi: typeof $fetch

export default defineNuxtPlugin(() => {
  fetchApi = $fetch
  return {
    provide: {
      fetchApi: $fetch,
    },
  }
})

export const pluginFetchApi = () => {
  return {
    fetchApi,
  }
}
