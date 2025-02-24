import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast: {
        success: (message: string) => {
          console.warn(`[toast success]: ${message}`)
        },
        error: (message: string) => {
          console.error(`[toast error]: ${message}`)
        },
      },
    },
  }
})
