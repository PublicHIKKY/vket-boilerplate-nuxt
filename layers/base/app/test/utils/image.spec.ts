import { describe, expect, it, vi, beforeEach } from 'vitest'
import { getImageUrl, toImage } from '#base/app/utils/image'

// HTMLImageElement mock interface
type EventHandler = (...args: unknown[]) => void
interface MockHTMLImageElement {
  addEventListener: (event: string, handler: EventHandler) => void
  removeEventListener: (event: string, handler: EventHandler) => void
  src: string
  onload: (() => void) | null
  onerror: ((error: unknown) => void) | null
}

describe('image.ts', () => {
  const mockObjectURL = 'blob:http://localhost:3000/test-blob-url'
  let lastImage: (MockHTMLImageElement & { listeners: Record<string, EventHandler | undefined> }) | null

  beforeEach(() => {
    vi.clearAllMocks()
    // URL.createObjectURL と URL.revokeObjectURL のモック
    global.URL.createObjectURL = vi.fn(() => mockObjectURL)
    global.URL.revokeObjectURL = vi.fn()

    // Image クラスのモック
    class LocalImageMock implements MockHTMLImageElement {
      listeners: Record<string, EventHandler | undefined> = {}
      src = ''
      onload: (() => void) | null = null
      onerror: ((error?: unknown) => void) | null = null

      constructor() {
        // テスト検証用に最後に生成されたインスタンスを参照する
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        lastImage = this
      }

      addEventListener = vi.fn((event: string, handler: EventHandler) => {
        this.listeners[event] = handler
        if (event === 'load') this.onload = handler as () => void
        if (event === 'error') this.onerror = handler as (error?: unknown) => void
      })

      removeEventListener = vi.fn((event: string, handler: EventHandler) => {
        if (this.listeners[event] === handler) this.listeners[event] = undefined
        if (event === 'load' && this.onload === handler) this.onload = null
        if (event === 'error' && this.onerror === handler) this.onerror = null
      })
    }

    vi.stubGlobal('Image', LocalImageMock as unknown as typeof Image)
  })

  describe('getImageUrl', () => {
    it('FileオブジェクトからURLを生成する', () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const result = getImageUrl(file)

      expect(global.URL.createObjectURL).toHaveBeenCalledWith(file)
      expect(result).toBe(mockObjectURL)
    })

    it('BlobオブジェクトからURLを生成する', () => {
      const blob = new Blob(['test'], { type: 'image/png' })
      const result = getImageUrl(blob)

      expect(global.URL.createObjectURL).toHaveBeenCalledWith(blob)
      expect(result).toBe(mockObjectURL)
    })

    it('Image要素が作成され、適切なイベントリスナーが設定される', () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      getImageUrl(file)

      const mockImage = lastImage!
      expect(mockImage.addEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(mockImage.addEventListener).toHaveBeenCalledWith('error', expect.any(Function))
      expect(mockImage.src).toBe(mockObjectURL)
    })
  })

  describe('toImage', () => {
    it('FileからHTMLImageElementを生成する', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['load']?.()
      const result = await promise

      expect(result).toBe(lastImage)
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(file)
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('BlobからHTMLImageElementを生成する', async () => {
      const blob = new Blob(['test'], { type: 'image/png' })
      const promise = toImage(blob)
      lastImage?.listeners['load']?.()
      const result = await promise

      expect(result).toBe(lastImage)
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(blob)
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('画像読み込みエラー時にPromiseをrejectする', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['error']?.('Image load failed')

      await expect(promise).rejects.toThrow('Image load failed')
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('画像のsrcにcreateObjectURLの結果が設定される', () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      void toImage(file)

      expect(lastImage?.src).toBe(mockObjectURL)
    })

    it('成功時にイベントリスナーが削除される', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['load']?.()
      await promise

      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('error', expect.any(Function))
    })

    it('エラー時にイベントリスナーが削除される', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const promise = toImage(file)
      lastImage?.listeners['error']?.('Error')
      await expect(promise).rejects.toThrow()

      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(lastImage?.removeEventListener).toHaveBeenCalledWith('error', expect.any(Function))
    })
  })
})
