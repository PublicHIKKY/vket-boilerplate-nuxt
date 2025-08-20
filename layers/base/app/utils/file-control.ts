/**
 * @param {File} file
 * @returns {string}
 * @description fileオブジェクトをimgタグで表示させたいときに使う
 */
export function readFileAsBlob(file: File): string {
  const imgEl = new Image()
  imgEl.src = URL.createObjectURL(file)
  imgEl.onload = () => {
    URL.revokeObjectURL(imgEl.src)
  }
  return imgEl.src
}

/**
 * blobのtypeから拡張子取得
 * @param {string} type - MIMEタイプ (例: "image/png")
 * @returns {string} 拡張子 (例: ".png")
 * @description MIMEタイプからファイル拡張子を取得する
 */
export const getExtFromType = (type: string): string => '.' + type.split('/')[1]

/**
 * fileからbase64取得
 * @param {File} file - 変換するFileオブジェクト
 * @returns {Promise<string | undefined>} base64エンコードされたデータURL、エラー時にはundefined
 * @description Fileオブジェクトからbase64エンコードされたデータURLを取得する
 */
export const getBase64ByFile = (file: File): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    // 画像のBufferを取得してemit
    reader.onload = (e) => {
      const result = e?.target?.result
      if (typeof result !== 'string') {
        reject(new TypeError('Failed to get base64'))
        return
      }
      resolve(result)
    }

    reader.readAsDataURL(file)
  })
}

/**
 * base64テキストからFileオブジェクトを生成
 * @param {string} base64 - dataURL形式のbase64文字列
 * @param {string} [fileName] - ファイル名（省略時は'file'）
 * @returns {File | null} 生成されたFileオブジェクト、失敗時はnull
 */
export const getFileByBase64 = (base64: string, fileName: string = 'file'): File | null => {
  const arr = base64.split(',')
  if (arr.length < 2) return null
  const mimeMatch = arr[0]?.match(/:(.*?);/)
  const mime = mimeMatch && mimeMatch[1] ? mimeMatch[1] : 'image/png'
  if (!arr[1]) return null
  try {
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], fileName, { type: mime })
  } catch (error) {
    console.error(error)
    return null
  }
}
