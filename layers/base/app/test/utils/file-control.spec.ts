import { readFileAsBlob, getExtFromType, getBase64ByFile } from '#base/app/utils/file-control'
import { beforeEach, afterEach, describe, it, test, expect, vi } from 'vitest'

// NOTE: JSDOMでURL.createObjectURLはサポートされていない。その為、本来URL.createObjectURLが返してくれるURLを偽装してテストする。
beforeEach(() => {
  // NOTE: URL.createObjectURLが本来動作すれば次のようなドメイン配下のURLが発行される。例）62a0f348-495f-4221-b768-7b08c2759e08
  URL.createObjectURL = vi.fn(() => 'dummy-for-objectURL')
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('readFileAsBlob', () => {
  // NOTE: 実際にテストで画像を渡せないので、下準備としてFile型のダミーを作成する
  const file = new File([''], 'test.png')
  // NOTE: URLかどうかを正規表現で識別
  const validUrlRegex = /^(http|https):\/\/[^ "]+$/
  const objectUrl = readFileAsBlob(file)
  // NOTE: readFileAsBlob(file)にて画像のオブジェクトURLが作成されるか、返される文字列がURL形式であることをテストする。
  expect(validUrlRegex.test(objectUrl)).toBe(true)
})

describe('getExtFromType', () => {
  test('image/pngから.pngを取得できる', () => {
    const ext = getExtFromType('image/png')
    expect(ext).toBe('.png')
  })

  test('image/jpegから.jpegを取得できる', () => {
    const ext = getExtFromType('image/jpeg')
    expect(ext).toBe('.jpeg')
  })

  test('application/pdfから.pdfを取得できる', () => {
    const ext = getExtFromType('application/pdf')
    expect(ext).toBe('.pdf')
  })

  test('text/plainから.plainを取得できる', () => {
    const ext = getExtFromType('text/plain')
    expect(ext).toBe('.plain')
  })

  test('video/mp4から.mp4を取得できる', () => {
    const ext = getExtFromType('video/mp4')
    expect(ext).toBe('.mp4')
  })
})

describe('getBase64ByFile', () => {
  test('Fileオブジェクトからbase64文字列を取得できる', async () => {
    // FileReaderのモック
    const mockResult = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAA='
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as ((e: ProgressEvent<FileReader>) => void) | null,
      result: mockResult,
    }

    vi.spyOn(globalThis, 'FileReader').mockImplementation(() => {
      setTimeout(() => {
        if (mockFileReader.onload) {
          mockFileReader.onload({
            target: { result: mockResult },
          } as ProgressEvent<FileReader>)
        }
      }, 0)
      return mockFileReader as unknown as FileReader
    })

    const file = new File(['test content'], 'test.png', { type: 'image/png' })
    const base64 = await getBase64ByFile(file)

    expect(base64).toBe(mockResult)
    expect(mockFileReader.readAsDataURL).toHaveBeenCalledWith(file)
  })

  test('FileReaderのresultがstring以外の場合はエラーがthrowされる', async () => {
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as ((e: ProgressEvent<FileReader>) => void) | null,
      result: null,
    }

    vi.spyOn(globalThis, 'FileReader').mockImplementation(() => {
      queueMicrotask(() => {
        if (mockFileReader.onload) {
          mockFileReader.onload({
            target: { result: null },
          } as ProgressEvent<FileReader>)
        }
      })
      return mockFileReader as unknown as FileReader
    })

    const file = new File(['test content'], 'test.png', { type: 'image/png' })

    await expect(getBase64ByFile(file)).rejects.toThrow('Failed to get base64')
  })

  test('空のFileオブジェクトでも動作する', async () => {
    const mockResult = 'data:application/octet-stream;base64,'
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as ((e: ProgressEvent<FileReader>) => void) | null,
      result: mockResult,
    }

    vi.spyOn(globalThis, 'FileReader').mockImplementation(() => {
      setTimeout(() => {
        if (mockFileReader.onload) {
          mockFileReader.onload({
            target: { result: mockResult },
          } as ProgressEvent<FileReader>)
        }
      }, 0)
      return mockFileReader as unknown as FileReader
    })

    const file = new File([''], 'empty.txt', { type: 'text/plain' })
    const base64 = await getBase64ByFile(file)

    expect(base64).toBe(mockResult)
  })
})
