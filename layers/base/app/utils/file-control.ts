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
