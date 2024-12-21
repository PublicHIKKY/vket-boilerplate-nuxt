import { useNuxtApp } from 'nuxt/app'
import { InjectionKey } from 'vue'

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
