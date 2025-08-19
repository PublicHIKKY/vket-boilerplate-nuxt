import { createGtm } from '@gtm-support/vue-gtm'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  createGtm({ id: config.public?.gtmId, enabled: true })
})
