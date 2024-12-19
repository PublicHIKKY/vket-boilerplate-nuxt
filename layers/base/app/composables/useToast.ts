import { useNuxtApp } from 'nuxt/app'
import { InjectionKey } from 'vue'
import { z } from 'zod'
import { ensureValueOf } from '#base/app/utils/zod'

export const useToast = () => {
  const { $toast } = useNuxtApp()

  /**
   * toast追加
   */
  const addToast = (
    text: string,
    type?: 'info' | 'success' | 'error' | 'warning',
    time?: number,
    isClosable = false,
  ) => {
    ensureValueOf(z.function(), $toast)
    ensureValueOf(z.function(), $toast.info)
    ensureValueOf(z.function(), $toast.success)
    ensureValueOf(z.function(), $toast.warning)
    ensureValueOf(z.function(), $toast.error)

    $toast[type ?? 'info'](text, {
      delay: time,
      closeButton: isClosable,
    })
  }

  return {
    addToast,
  }
}

export default useToast

export type ToastComposable = ReturnType<typeof useToast>

export const toastInjectionKey: InjectionKey<ToastComposable> = Symbol('toast')
