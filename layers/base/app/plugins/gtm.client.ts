import { createGtm } from '@gtm-support/vue-gtm'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(({ vueApp }) => {
  const config = useRuntimeConfig()
  const gtm = createGtm({ id: config.public.gtmId })
  vueApp.use(gtm)
  return {
    provide: {
      gtm,
    },
  }
})
