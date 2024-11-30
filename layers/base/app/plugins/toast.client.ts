import { defineNuxtPlugin } from 'nuxt/app'
import Vue3Toastify, { toast, UpdateOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin(({ vueApp }) => {
  const options: UpdateOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
    autoClose: 3000,
  }
  vueApp.use(Vue3Toastify, options)

  return {
    provide: { toast },
  }
})
