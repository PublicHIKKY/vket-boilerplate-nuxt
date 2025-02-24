type ShareProps = {
  text?: string
  twitterHashtags?: string[] // NOTE: `xHashtags`にリネームしたいけど、後方互換性のために残す
  shareUrl?: string
}

const useSocialShareLink = () => {
  const i18n = useI18n()
  const config = useRuntimeConfig()
  const route = useRoute()
  const currentPath = computed(() => {
    const path = !route
      ? `${config.public.NUXT_ENV_BASE_URL}`
      : route.path.slice(-4) === '/en/'
        ? route.path.slice(0, -1)
        : route.path.slice(-1) === '/' || route.path.slice(-3) === '/en'
          ? route.path
          : `${route.path}/`
    return `${config.public.NUXT_ENV_BASE_URL}${path}`
  })

  const getShareUrl = (target: string, props?: ShareProps) => {
    const shareText
      = props?.text
        ?? (i18n.locale.value === 'ja'
          ? encodeURIComponent(`${currentPath.value} をシェア`)
          : encodeURIComponent(`Share ${currentPath.value}`))

    const xUrlSearchParam = new URLSearchParams({
      url: props?.shareUrl ? props?.shareUrl : currentPath.value,
      text: `${shareText}\n`,
    })
    if (props?.twitterHashtags && props.twitterHashtags.length > 0) {
      xUrlSearchParam.set('hashtags', props.twitterHashtags.join())
    }
    const xUrl = `https://x.com/intent/tweet?${xUrlSearchParam.toString()}`

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentPath.value}&t=${shareText}`
    const lineUrl = `http://line.me/R/msg/text/?${shareText}`

    switch (target) {
      case 'x':
      case 'twitter':
        return xUrl
      case 'facebook':
        return facebookUrl
      case 'line':
        return lineUrl
      default:
        return ''
    }
  }

  return {
    getShareUrl,
  }
}

export default useSocialShareLink
