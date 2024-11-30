/**
 * @remark aタグを生成して、そのaタグをクリックすることで外部リンクをさせる
 * @param url URL
 * @param blank 新しいタブで開くかどうか(default: true)
 * @param rel rel属性(default: 'norefferer noopener')
 * @param referrerPolicy referrerPolicy属性(default: 'strict-origin-when-cross-origin')
 */
export const makeAnchorElement = (
  url: string,
  blank = true,
  rel = 'norefferer noopener',
  referrerPolicy = 'strict-origin-when-cross-origin',
): HTMLAnchorElement | null => {
  if (!window || !url) return null
  const aElement = document.createElement('a')
  aElement.href = url
  aElement.classList.add('link-via-element-element')
  aElement.referrerPolicy = referrerPolicy
  aElement.rel = rel
  if (blank) aElement.target = '_blank'
  return aElement
}

export const linkViaElement = (
  url: string,
  blank = true,
  rel = 'norefferer noopener',
  referrerPolicy = 'strict-origin-when-cross-origin',
) => {
  const aElement = makeAnchorElement(url, blank, rel, referrerPolicy)
  if (aElement === null) {
    throw new Error('some message')
  }
  aElement.click()
  aElement.remove()
}
