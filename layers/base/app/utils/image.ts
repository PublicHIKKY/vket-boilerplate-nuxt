/**
 * fileオブジェクトをimgタグで表示させたいときに使う
 *
 * createObjectURL しつつ、
 * 内部で new Image() して load イベントで自動で revokeObjectURL を実行する
 */
export function getImageUrl(blob: File | Blob): string {
  const imageElement = new Image()
  imageElement.addEventListener('load', () =>
    URL.revokeObjectURL(imageElement.src),
  )
  imageElement.addEventListener('error', (event: ErrorEvent) => {
    URL.revokeObjectURL(imageElement.src)
    console.error(event.error)
  })
  imageElement.src = URL.createObjectURL(blob)
  return imageElement.src
}

/**
 * File | Blob を Image にする
 * @param blob
 * @returns
 */
export function toImage(blob: File | Blob): Promise<HTMLImageElement> {
  const imageElement = new Image()
  return new Promise((resolve, reject) => {
    imageElement.addEventListener('load', () => {
      URL.revokeObjectURL(imageElement.src)
      resolve(imageElement)
    })
    imageElement.addEventListener('error', (event: ErrorEvent) => {
      URL.revokeObjectURL(imageElement.src)
      reject(new Error(event.error))
    })
    imageElement.src = URL.createObjectURL(blob)
  })
}
