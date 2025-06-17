import { readFileAsBlob, getFileByURL, getExtFromType, getBase64ByFile, getFileByBase64 } from '#base/app/utils/file-control'

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

describe('getFileByURL', () => {
  it('should return File object when URL is valid', async () => {
    // Mock fetch
    const mockBlob = new Blob(['test content'], { type: 'image/png' })
    global.fetch = vi.fn().mockResolvedValue({
      blob: () => Promise.resolve(mockBlob),
    })

    const result = await getFileByURL('https://example.com/test.png')

    expect(result).toBeInstanceOf(File)
    expect(result?.name).toBe('newFile.png')
    expect(result?.type).toBe('image/png')
  })

  it('should return null when server-side', async () => {
    // Mock server environment
    vi.stubGlobal('import.meta', { server: true })

    const result = await getFileByURL('https://example.com/test.png')

    expect(result).toBeNull()
  })

  it('should return null when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Fetch failed'))

    const result = await getFileByURL('https://example.com/test.png')

    expect(result).toBeNull()
  })
})

describe('getExtFromType', () => {
  it('should extract extension from MIME type', () => {
    expect(getExtFromType('image/png')).toBe('.png')
    expect(getExtFromType('image/jpeg')).toBe('.jpeg')
    expect(getExtFromType('text/plain')).toBe('.plain')
    expect(getExtFromType('application/pdf')).toBe('.pdf')
  })
})

describe('getBase64ByFile', () => {
  it('should convert File to base64', async () => {
    const file = new File(['test content'], 'test.txt', { type: 'text/plain' })

    // Mock FileReader
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as any,
      result: 'data:text/plain;base64,dGVzdCBjb250ZW50',
    }

    global.FileReader = vi.fn(() => mockFileReader) as any

    const promise = getBase64ByFile(file)

    // Simulate FileReader onload event
    mockFileReader.onload({ target: { result: 'data:text/plain;base64,dGVzdCBjb250ZW50' } })

    const result = await promise
    expect(result).toBe('data:text/plain;base64,dGVzdCBjb250ZW50')
  })

  it('should handle non-string result', async () => {
    const file = new File(['test content'], 'test.txt', { type: 'text/plain' })

    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as any,
      result: new ArrayBuffer(8),
    }

    global.FileReader = vi.fn(() => mockFileReader) as any

    const promise = getBase64ByFile(file)

    await expect(async () => {
      mockFileReader.onload({ target: { result: new ArrayBuffer(8) } })
      await promise
    }).rejects.toThrow('Failed to get base64')
  })
})

describe('getFileByBase64', () => {
  it('should convert base64 to File', () => {
    const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='

    const result = getFileByBase64(base64, 'test.png')

    expect(result).toBeInstanceOf(File)
    expect(result?.name).toBe('test.png')
    expect(result?.type).toBe('image/png')
  })

  it('should use default filename when not provided', () => {
    const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='

    const result = getFileByBase64(base64)

    expect(result?.name).toBe('file')
  })

  it('should return null for invalid base64', () => {
    const invalidBase64 = 'invalid-base64'

    const result = getFileByBase64(invalidBase64)

    expect(result).toBeNull()
  })

  it('should return null for malformed base64', () => {
    const malformedBase64 = 'data:image/png;base64,'

    const result = getFileByBase64(malformedBase64)

    expect(result).toBeNull()
  })

  it('should handle missing MIME type', () => {
    const base64WithoutMime = 'data:;base64,dGVzdA=='

    const result = getFileByBase64(base64WithoutMime)

    expect(result?.type).toBe('image/png') // デフォルトのMIMEタイプ
  })
})
