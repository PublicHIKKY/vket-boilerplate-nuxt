<template>
  <div class="hm-clipping">
    <div class="cropper-container">
      <Cropper
        ref="cropper"
        class="cropper"
        :src="src"
        :auto-zoom="autoZoom"
        :stencil-size="{
          width: width,
          height: height,
        }"
        v-bind="cropperOptions"
        default-boundaries="fit"
        :image-restriction="imageRestriction"
        :style="forceStyle"
        @change="onChange"
      />
    </div>
    <template v-if="src">
      <HaBaseButton
        class="button"
        @click="clip"
      >
        <!-- {{ i18n.t('label') }} -->
        切り抜く
      </HaBaseButton>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

type Props = {
  src: string
  width?: number
  height?: number
  cropperAreaHeight?: number
  doResize?: boolean
  stencil?: string
  imageRestriction?: 'fill-area' | 'fit-area' | 'stencil' | 'none'
  autoZoom?: boolean
  ext?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 256,
  height: 256,
  cropperAreaHeight: undefined,
  doResize: true,
  stencil: 'RectangleStencil',
  imageRestriction: 'stencil',
  autoZoom: false,
  ext: 'jpeg',
})

type Emits = {
  (e: 'clipped', image: File[]): void
}
const emit = defineEmits<Emits>()

const croppedImage = ref<File[]>([])

const forceStyle = computed(() => {
  if (props.cropperAreaHeight === undefined) return {}
  const cropperAreaHeight = props.cropperAreaHeight || props.height * 1.4
  return {
    height: `${cropperAreaHeight}px`,
  }
})
const cropperOptions = computed(() => {
  return props.doResize
    ? {
        canvas: {
          width: props.width,
          height: props.height,
        },
      }
    : {}
})

const onChange = ({ canvas }: { canvas: HTMLCanvasElement }) => {
  /*
   * this.coordinates = coordinates
   * note: canvas to DataURI
   * this.croppedImage = canvas.toDataURL(`image/${this.ext}`)
   */
  const data = canvas.toDataURL(`image/${props.ext}`)
  // note: DataURL to File
  const bytes = atob(data.split(',')[1] ?? raiseError('Invalid bytes'))
  const mime
    = data.split(',')[0]?.split(':')[1]?.split(';')[0]
      ?? raiseError('Invalid mime')
  const name = `tmp-${new Date().getTime()}.${mime.split('/')[1]}`
  const writer = new Uint8Array(new ArrayBuffer(bytes.length))
  for (let i = 0; i < bytes.length; i++) {
    writer[i] = bytes.charCodeAt(i)
  }
  const file = new File([writer.buffer], name, { type: mime })
  croppedImage.value[0] = file
}

const clip = () => {
  emit('clipped', croppedImage.value)
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.hm-clipping {
  height: 100%;
  width: 100%;

  > .cropper-container {
    background: #000;
    height: calc(100% - 70px);
    margin-bottom: 20px;
    min-height: 300px;
    padding: v.space(2);
  }

  > .cropper-container > .cropper {
    background: #000;
    height: 100%;
  }

  > .button {
    background-color: v.$primary-button-default-color;
    color: v.$white;
    padding: v.$space-small;
    width: 100%;

    :hover {
      background-color: v.$primary-button-active-color;
    }
  }
}
</style>
