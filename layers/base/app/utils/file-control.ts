/**
 * @param {File} file
 * @returns {string}
 * @description fileオブジェクトをimgタグで表示させたいときに使う
 */
export function readFileAsBlob(file: File) {
  const imgEl = new Image()
  imgEl.src = URL.createObjectURL(file)
  imgEl.onload = () => {
    URL.revokeObjectURL(imgEl.src)
  }
  return imgEl.src
}

/**
 * base64テキストからFileオブジェクトを生成
 * @param {string} base64 - dataURL形式のbase64文字列
 * @param {string} [fileName] - ファイル名（省略時は'file'）
 * @returns {File | null} 生成されたFileオブジェクト、失敗時はnull
 */
export const getFileByBase64 = (base64: string, fileName = 'file'): File | null => {
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
  }
  catch (error) {
    console.error(error)
    return null
  }
}
