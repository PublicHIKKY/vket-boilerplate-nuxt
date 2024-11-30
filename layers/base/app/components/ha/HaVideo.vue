<template>
  <video
    ref="haVideoRef"
    class="ha-video"
    :src="src"
    :autoplay="autoplay"
    :autopictureinpicture="autopictureinpicture"
    :controls="controls"
    :disablepictureinpicture="disablepictureinpicture"
    :controlslist="controlslist"
    :crossorigin="crossorigin"
    :disableremoteplayback="disableremoteplayback"
    :x-webkit-airplay="disableremoteplayback ? 'deny' : false"
    :width="width"
    :height="height"
    :loop="loop"
    :muted="muted"
    :playsinline="playsinline"
    :poster="poster"
    :preload="preload"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    height: string
    width: string
    play: boolean
    autoplay: boolean
    autopictureinpicture?: boolean
    controls: boolean
    disablepictureinpicture?: boolean
    disableremoteplayback?: boolean
    loop?: boolean
    muted: boolean
    playsinline: boolean
    poster?: string
    // nodownload, nofullscreen, noremoteplayback
    controlslist?: string
    // anonymous, use-credentials
    crossorigin?: string
    // none, metadata, auto
    preload: string
  }>(),
  {
    height: '',
    width: '',
    autoplay: false,
    play: false,
    autopictureinpicture: false,
    controls: false,
    disablepictureinpicture: false,
    disableremoteplayback: false,
    loop: false,
    muted: false,
    playsinline: false,
    poster: '',
    controlslist: '',
    crossorigin: '',
    preload: 'auto',
  },
)
const emit = defineEmits<{
  (
    emit:
      | 'progress'
      | 'suspend'
      | 'durationchange'
      | 'loadedmetadata'
      | 'loadeddata'
      | 'canplay'
      | 'playing'
      | 'pause'
      | 'ended'
      | 'seeking'
      | 'timeupdate'
      | 'volumechange'
      | 'ratechange'
      | 'waiting',
    e: Event
  ): void
}>()

const haVideoRef = ref<HTMLVideoElement | null>(null)

// note: HaVideoがmounted後にpropsを変えないとwatchされない
watch(props, async () => {
  if (haVideoRef.value === null) {
    return
  }

  if (props.play) {
    await haVideoRef.value.play()
  }
  else {
    haVideoRef.value.pause()
  }
})

onMounted(() => {
  haVideoRef.value?.addEventListener('progress', (e: Event) =>
    emit('progress', e),
  )
  haVideoRef.value?.addEventListener('suspend', (e: Event) =>
    emit('suspend', e),
  )
  haVideoRef.value?.addEventListener('durationchange', (e: Event) =>
    emit('durationchange', e),
  )
  haVideoRef.value?.addEventListener('loadedmetadata', (e: Event) =>
    emit('loadedmetadata', e),
  )
  haVideoRef.value?.addEventListener('loadeddata', (e: Event) =>
    emit('loadeddata', e),
  )
  haVideoRef.value?.addEventListener('canplay', (e: Event) =>
    emit('canplay', e),
  )
  haVideoRef.value?.addEventListener('playing', (e: Event) =>
    emit('playing', e),
  )
  haVideoRef.value?.addEventListener('pause', (e: Event) => emit('pause', e))
  haVideoRef.value?.addEventListener('ended', (e: Event) => emit('ended', e))
  haVideoRef.value?.addEventListener('seeking', (e: Event) =>
    emit('seeking', e),
  )
  haVideoRef.value?.addEventListener('timeupdate', (e: Event) =>
    emit('timeupdate', e),
  )
  haVideoRef.value?.addEventListener('volumechange', (e: Event) =>
    emit('volumechange', e),
  )
  haVideoRef.value?.addEventListener('ratechange', (e: Event) =>
    emit('ratechange', e),
  )
  haVideoRef.value?.addEventListener('waiting', (e: Event) =>
    emit('waiting', e),
  )
})
</script>
