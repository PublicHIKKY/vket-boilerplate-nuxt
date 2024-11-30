/**
 * runtimeConfig・appConfigに置けない・置かない定数を置く場所。
 * 内容がこれなのでユニットテストは必要ない。
 */
export const constant = {
  images: {
    none: '/images/no-image.png',
    none1x1: '/images/no-image_1x1.jpg',
    noneCustom: '/images/no-image-custom.png',
  },
} as const
