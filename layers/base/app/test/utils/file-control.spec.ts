import { getBase64ByFile, getExtFromType, getFileByBase64, readFileAsBlob } from '#base/app/utils/file-control'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

// NOTE: JSDOMでURL.createObjectURLはサポートされていない。その為、本来URL.createObjectURLが返してくれるURLを偽装してテストする。
beforeEach(() => {
  // NOTE: URL.createObjectURLが本来動作すれば次のようなドメイン配下のURLが発行される。例）62a0f348-495f-4221-b768-7b08c2759e08
  URL.createObjectURL = vi.fn(() => 'blob:dummy-for-objectURL')
  URL.revokeObjectURL = vi.fn()
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('readFileAsBlob', () => {
  // NOTE: 実際にテストで画像を渡せないので、下準備としてFile型のダミーを作成する
  const file = new File([''], 'test.png')
  const objectUrl = readFileAsBlob(file)
  // NOTE: readFileAsBlob(file)にて画像のオブジェクトURLが作成されるか、返される文字列がURL形式であることをテストする。
  expect(objectUrl.startsWith('blob:')).toBe(true)
})

test('readFileAsBlobは画像load後にObject URLを解放する', () => {
  class MockImage {
    static latest: MockImage | undefined
    src = ''
    onload: (() => void) | null = null
    constructor() {
      MockImage.latest = this
    }
  }
  vi.stubGlobal('Image', MockImage)

  expect(readFileAsBlob(new File(['image'], 'test.png'))).toBe('blob:dummy-for-objectURL')
  MockImage.latest?.onload?.()
  expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:dummy-for-objectURL')
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
    class MockFileReader {
      result: string | ArrayBuffer | null = mockResult
      onload: ((e: ProgressEvent<FileReader>) => void) | null = null
      readAsDataURL(_file: File) {
        setTimeout(() => {
          this.onload?.({ target: { result: this.result } } as ProgressEvent<FileReader>)
        }, 0)
      }
    }

    vi.stubGlobal('FileReader', MockFileReader as unknown as typeof FileReader)

    const file = new File(['test content'], 'test.png', { type: 'image/png' })
    const base64 = await getBase64ByFile(file)

    expect(base64).toBe(mockResult)
  })

  test('FileReaderのresultがstring以外の場合はエラーがthrowされる', async () => {
    class MockFileReader {
      result: string | ArrayBuffer | null = null
      onload: ((e: ProgressEvent<FileReader>) => void) | null = null
      readAsDataURL = vi.fn(() => {
        queueMicrotask(() => {
          this.onload?.({ target: { result: this.result } } as ProgressEvent<FileReader>)
        })
      })
    }

    vi.stubGlobal('FileReader', MockFileReader as unknown as typeof FileReader)

    const file = new File(['test content'], 'test.png', { type: 'image/png' })

    await expect(getBase64ByFile(file)).rejects.toThrow('Failed to get base64')
  })

  test('空のFileオブジェクトでも動作する', async () => {
    const mockResult = 'data:application/octet-stream;base64,'
    class MockFileReader {
      result: string | ArrayBuffer | null = mockResult
      onload: ((e: ProgressEvent<FileReader>) => void) | null = null
      readAsDataURL = vi.fn(() => {
        setTimeout(() => {
          this.onload?.({ target: { result: this.result } } as ProgressEvent<FileReader>)
        }, 0)
      })
    }

    vi.stubGlobal('FileReader', MockFileReader as unknown as typeof FileReader)

    const file = new File([''], 'empty.txt', { type: 'text/plain' })
    const base64 = await getBase64ByFile(file)

    expect(base64).toBe(mockResult)
  })
})

describe('getFileByBase64', () => {
  test('MIME typeとファイル名を保ったFileを生成する', async () => {
    const file = getFileByBase64('data:text/plain;base64,SGVsbG8=', 'hello.txt')
    expect(file).toBeInstanceOf(File)
    expect(file).toMatchObject({ name: 'hello.txt', type: 'text/plain', size: 5 })
    expect(await file?.text()).toBe('Hello')
  })

  test('ファイル名とMIME typeが無い場合は既定値を使う', () => {
    const file = getFileByBase64('data;base64,QQ==')
    expect(file).toMatchObject({ name: 'file', type: 'image/png', size: 1 })
  })

  test('data部がない入力を拒否する', () => {
    expect(getFileByBase64('invalid')).toBeNull()
    expect(getFileByBase64('data:image/png;base64,')).toBeNull()
  })

  test('不正なbase64を捕捉してnullを返す', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined)
    expect(getFileByBase64('data:image/png;base64,%%%')).toBeNull()
    expect(consoleError).toHaveBeenCalledOnce()
  })
})
