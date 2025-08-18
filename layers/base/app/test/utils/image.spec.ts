import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { getImageUrl, toImage } from '#base/app/utils/image'

// HTMLImageElement mock interface
interface MockHTMLImageElement {
  addEventListener: ReturnType<typeof vi.fn>
  removeEventListener: ReturnType<typeof vi.fn>
  src: string
  onload: (() => void) | null
  onerror: ((error: unknown) => void) | null
}

describe('image.ts', () => {
  const mockObjectURL = 'blob:http://localhost:3000/test-blob-url'

  beforeEach(() => {
    vi.clearAllMocks()
    // URL.createObjectURL と URL.revokeObjectURL のモック
    global.URL.createObjectURL = vi.fn(() => mockObjectURL)
    global.URL.revokeObjectURL = vi.fn()

    // Image クラスのモック
    global.Image = vi.fn((): MockHTMLImageElement => ({
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      src: '',
      onload: null,
      onerror: null,
    })) as unknown as typeof Image
  })

  afterEach(() => {
    vi.restoreAllMocks()
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
      const mockImage: MockHTMLImageElement = {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        src: '',
        onload: null,
        onerror: null,
      }
      global.Image = vi.fn(() => mockImage) as unknown as typeof Image

      getImageUrl(file)

      expect(global.Image).toHaveBeenCalled()
      expect(mockImage.addEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(mockImage.addEventListener).toHaveBeenCalledWith('error', expect.any(Function))
      expect(mockImage.src).toBe(mockObjectURL)
    })
  })

  describe('toImage', () => {
    it('FileからHTMLImageElementを生成する', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const mockImage: MockHTMLImageElement = {
        addEventListener: vi.fn((event: string, callback: () => void) => {
          if (event === 'load') {
            // 非同期でload eventを発火
            setTimeout(() => callback(), 0)
          }
        }),
        removeEventListener: vi.fn(),
        src: '',
        onload: null,
        onerror: null,
      }
      global.Image = vi.fn(() => mockImage) as unknown as typeof Image

      const promise = toImage(file)
      const result = await promise

      expect(result).toBe(mockImage)
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(file)
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('BlobからHTMLImageElementを生成する', async () => {
      const blob = new Blob(['test'], { type: 'image/png' })
      const mockImage: MockHTMLImageElement = {
        addEventListener: vi.fn((event: string, callback: () => void) => {
          if (event === 'load') {
            setTimeout(() => callback(), 0)
          }
        }),
        removeEventListener: vi.fn(),
        src: '',
        onload: null,
        onerror: null,
      }
      global.Image = vi.fn(() => mockImage) as unknown as typeof Image

      const promise = toImage(blob)
      const result = await promise

      expect(result).toBe(mockImage)
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(blob)
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('画像読み込みエラー時にPromiseをrejectする', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const mockImage: MockHTMLImageElement = {
        addEventListener: vi.fn((event: string, callback: (error?: string) => void) => {
          if (event === 'error') {
            setTimeout(() => callback('Image load failed'), 0)
          }
        }),
        removeEventListener: vi.fn(),
        src: '',
        onload: null,
        onerror: null,
      }
      global.Image = vi.fn(() => mockImage) as unknown as typeof Image

      const promise = toImage(file)

      await expect(promise).rejects.toThrow('Image load failed')
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectURL)
    })

    it('画像のsrcにcreateObjectURLの結果が設定される', () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const mockImage: MockHTMLImageElement = {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        src: '',
        onload: null,
        onerror: null,
      }
      global.Image = vi.fn(() => mockImage) as unknown as typeof Image

      void toImage(file)

      expect(mockImage.src).toBe(mockObjectURL)
    })

    it('成功時にイベントリスナーが削除される', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const mockImage: MockHTMLImageElement = {
        addEventListener: vi.fn((event: string, callback: () => void) => {
          if (event === 'load') {
            setTimeout(() => callback(), 0)
          }
        }),
        removeEventListener: vi.fn(),
        src: '',
        onload: null,
        onerror: null,
      }
      global.Image = vi.fn(() => mockImage) as unknown as typeof Image

      await toImage(file)

      expect(mockImage.removeEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(mockImage.removeEventListener).toHaveBeenCalledWith('error', expect.any(Function))
    })

    it('エラー時にイベントリスナーが削除される', async () => {
      const file = new File(['test'], 'test.png', { type: 'image/png' })
      const mockImage: MockHTMLImageElement = {
        addEventListener: vi.fn((event: string, callback: (error?: string) => void) => {
          if (event === 'error') {
            setTimeout(() => callback('Error'), 0)
          }
        }),
        removeEventListener: vi.fn(),
        src: '',
        onload: null,
        onerror: null,
      }
      global.Image = vi.fn(() => mockImage) as unknown as typeof Image

      try {
        await toImage(file)
      } catch (_error) {
        // エラーを無視
      }

      expect(mockImage.removeEventListener).toHaveBeenCalledWith('load', expect.any(Function))
      expect(mockImage.removeEventListener).toHaveBeenCalledWith('error', expect.any(Function))
    })
  })
})
