import { describe, expect, it, vi, beforeEach } from 'vitest'
import { useToast, toastInjectionKey, type ToastComposable } from '#base/app/composables/useToast'

// $toastのモック - 固定インスタンス
const mockToast = {
  info: vi.fn(),
  success: vi.fn(),
  error: vi.fn(),
  warning: vi.fn(),
}

// useNuxtAppのモック
vi.mock('nuxt/app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('nuxt/app')>()
  return {
    ...actual,
    useNuxtApp: vi.fn(() => ({
      $toast: mockToast,
    })),
  }
})

// テストで使用するためにモックを取得
const { useNuxtApp } = await import('nuxt/app')
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseNuxtApp = useNuxtApp as any

describe('useToast composable', () => {
  beforeEach(() => {
    // 各モック関数の呼び出し履歴だけをクリア
    mockToast.info.mockClear()
    mockToast.success.mockClear()
    mockToast.error.mockClear()
    mockToast.warning.mockClear()
    mockUseNuxtApp.mockClear()
  })

  describe('useToast', () => {
    it('addToast関数を返す', () => {
      const { addToast } = useToast()
      expect(typeof addToast).toBe('function')
    })

    it('useNuxtAppから$toastを取得する', () => {
      useToast()
      expect(useNuxtApp).toHaveBeenCalled()
    })
  })

  describe('addToast', () => {
    it('デフォルトでinfoタイプのtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Test message')

      expect(mockToast.info).toHaveBeenCalledWith('Test message', {
        delay: undefined,
        closeButton: false,
      })
    })

    it('指定したタイプのtoastを表示する', () => {
      const { addToast } = useToast()

      addToast('Success message', 'success')
      expect(mockToast.success).toHaveBeenCalledWith('Success message', {
        delay: undefined,
        closeButton: false,
      })

      addToast('Error message', 'error')
      expect(mockToast.error).toHaveBeenCalledWith('Error message', {
        delay: undefined,
        closeButton: false,
      })

      addToast('Warning message', 'warning')
      expect(mockToast.warning).toHaveBeenCalledWith('Warning message', {
        delay: undefined,
        closeButton: false,
      })
    })

    it('時間を指定してtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Timed message', 'info', 5000)

      expect(mockToast.info).toHaveBeenCalledWith('Timed message', {
        delay: 5000,
        closeButton: false,
      })
    })

    it('閉じるボタンを有効にしてtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Closable message', 'info', undefined, true)

      expect(mockToast.info).toHaveBeenCalledWith('Closable message', {
        delay: undefined,
        closeButton: true,
      })
    })

    it('すべてのオプションを指定してtoastを表示する', () => {
      const { addToast } = useToast()
      addToast('Full options message', 'success', 3000, true)

      expect(mockToast.success).toHaveBeenCalledWith('Full options message', {
        delay: 3000,
        closeButton: true,
      })
    })

    it('各toastタイプが正しく呼ばれる', () => {
      const { addToast } = useToast()

      const types: ('info' | 'success' | 'error' | 'warning')[] = [
        'info',
        'success',
        'error',
        'warning',
      ]

      types.forEach((type) => {
        addToast(`${type} message`, type)
        expect(mockToast[type]).toHaveBeenCalledWith(`${type} message`, {
          delay: undefined,
          closeButton: false,
        })
      })
    })

    it('undefinedタイプの場合infoを使用', () => {
      const { addToast } = useToast()
      addToast('Default message', undefined)

      expect(mockToast.info).toHaveBeenCalledWith('Default message', {
        delay: undefined,
        closeButton: false,
      })
    })

    it('isClosableのデフォルト値はfalse', () => {
      const { addToast } = useToast()
      addToast('Message without closable param', 'info', 1000)

      expect(mockToast.info).toHaveBeenCalledWith('Message without closable param', {
        delay: 1000,
        closeButton: false,
      })
    })
  })

  describe('型定義', () => {
    it('ToastComposable型が正しく推論される', () => {
      const toast: ToastComposable = useToast()
      expect(toast).toHaveProperty('addToast')
      expect(typeof toast.addToast).toBe('function')
    })

    it('toastInjectionKeyがSymbolである', () => {
      expect(typeof toastInjectionKey).toBe('symbol')
      expect(toastInjectionKey.toString()).toContain('toast')
    })
  })

  describe('デフォルトエクスポート', () => {
    it('useToastがデフォルトエクスポートされている', async () => {
      const defaultExport = (await import('#base/app/composables/useToast')).default
      expect(defaultExport).toBe(useToast)
    })
  })

  describe('エラーハンドリング', () => {
    it('$toastが存在しない場合でもエラーにならない', () => {
      // useNuxtAppのモックを一時的に上書き
      mockUseNuxtApp.mockReturnValueOnce({
        $toast: undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)

      expect(() => {
        const { addToast } = useToast()
        // $toastがundefinedでもエラーにならないかテスト
        expect(addToast).toBeDefined()
      }).not.toThrow()
    })

    it('無効なtoastタイプでもエラーにならない', () => {
      const { addToast } = useToast()

      expect(() => {
        // 型安全でないが、ランタイムでのテスト
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        addToast('Test', 'invalid' as any)
      }).not.toThrow()
    })
  })
})
