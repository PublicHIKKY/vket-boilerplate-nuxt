<i18n lang="yaml">
ja:
  explain: 画像を切り抜く範囲を指定して、「切り抜く」ボタンをクリックしてください。マウスホイールで拡大・縮小できます。
en:
  explain: Please adjust the crop area and click the 'Crop' button. Scroll the mouse wheel to zoom in and out.
</i18n>

<template>
  <div
    class="hm-input-single-image"
    :class="{ '-rounded': previewRounded }"
  >
    <div class="wrapper">
      <HmInputFile
        ref="input"
        :required="isRequired"
        :accept="accept"
        class="hm-single-image-uploader"
        :class="{ '-rounded': previewRounded }"
        :prop-files="fileList"
        @input:single="changeImage"
        @cancel="cancel"
      >
        <template v-if="imageUrl">
          <HaImage
            :key="imageUrl"
            :src="imageUrl"
            :alt="imageAlt"
            class="preview"
            :class="[previewRounded ? '-rounded' : '']"
          />
        </template>
        <template v-else>
          <slot name="noImage" />
        </template>
        <slot />
      </HmInputFile>
    </div>
    <p class="error-container">
      <template v-if="error">
        <span class="error">{{ error }}</span>
      </template>
    </p>
    <template v-if="imageUrl && isRemovable">
      <button
        class="remove"
        @click="removeImage"
      />
    </template>
    <template v-if="showCropper">
      <HaDialog
        class="ha-dialog"
        @close="cancelCropper"
      >
        <div class="crop-container">
          <p class="message">
            {{ i18n.t('explain') }}
          </p>
          <HmClipping
            :src="cropImage || ''"
            :width="cropWidth"
            :height="cropHeight"
            :ext="cropExt"
            :auto-zoom="true"
            class="main"
            @clipped="onClipped"
          />
        </div>
      </HaDialog>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useField } from 'vee-validate'
import { z, ZodEffects, ZodOptional, ZodType, ZodTypeDef } from 'zod'

const i18n = useI18n()

type Props = {
  validatorName?: string
  imageAlt?: string
  optionalAccept?: string
  modelValue?: File
  defaultImageUrl: string | null
  validatorRules?:
    | ZodType<File, ZodTypeDef, File>
    | ZodEffects<ZodEffects<ZodOptional<ZodType<File, ZodTypeDef, File>>>>
  error?: string | undefined
  previewRounded?: boolean
  isRemovable?: boolean
  isRequired?: boolean
  needCropper?: boolean
  cropWidth?: number
  cropHeight?: number
  cropExt?: string
}
const props = withDefaults(defineProps<Props>(), {
  validatorName: 'SingleImageInput',
  imageAlt: 'uploaded image',
  optionalAccept: '',
  modelValue: undefined,
  validatorRules: undefined,
  error: undefined,
  previewRounded: false,
  isRemovable: false,
  isRequired: true,
  needCropper: false,
  cropWidth: 0,
  cropHeight: 0,
  cropExt: 'jpeg',
})

type Emits = {
  (e: 'update:model-value', image?: File): void
}
const emit = defineEmits<Emits>()

const fileList = computed(() => {
  if (!props.modelValue) return undefined
  const dt = new DataTransfer()
  dt.items.add(props.modelValue)
  return dt.files
})

const imageUrl = computed(() =>
  props.modelValue ? readFileAsBlob(props.modelValue) : props.defaultImageUrl,
)

const showCropper = ref(false)
const cropImage = ref<string>()

const { value, errorMessage, validate } = useField<File | undefined>(
  toRef(props, 'validatorName'),
  props.validatorRules
    ? toTypedSchema(props.validatorRules)
    : toTypedSchema(z.unknown()),
  { initialValue: props.modelValue, syncVModel: false },
)

/** 外からエラーメッセージを上書きするパターン用エスケープハッチ */
const error = computed(() => errorMessage.value || props.error)

const accept = computed(() => {
  const defaultAccept = 'image/png,image/jpeg'
  if (!props.optionalAccept) return defaultAccept
  return `${defaultAccept}, ${props.optionalAccept}`
})

const changeImage = async (images: FileList | null) => {
  if (images === null) {
    return
  }

  // note: ファイルが空の場合、cancelメソッドが叩かれる。この分岐は正常系では通らない
  const image = images[0]
  if (!image) {
    return
  }

  if (!props.needCropper) {
    await returnImage(image)
    return
  }
  if (!props.cropWidth && !props.cropHeight) {
    await openCropper(image)
    return
  }

  /*
   * note: Cropサイズが指定されている場合、画像がそのサイズと同じならクロッパーを表示しない
   * note: Cropサイズが指定されている場合、画像がそのサイズより小さいならアラートを表示
   */
  const imgEl = new Image()
  imgEl.src = URL.createObjectURL(image)
  imgEl.onload = async () => {
    if (props.cropWidth && props.cropHeight) {
      if (
        imgEl.width === props.cropWidth
        && imgEl.height === props.cropHeight
      ) {
        await returnImage(image)
        return
      } else if (
        imgEl.width < props.cropWidth
        || imgEl.height < props.cropHeight
      ) {
        alert(
          `${props.cropWidth}px x ${props.cropHeight}px以上の画像を指定してください`,
        )
        return
      }
      await openCropper(image)
      return
    }

    if (props.cropWidth) {
      if (imgEl.width === props.cropWidth) {
        await returnImage(image)
        return
      } else if (imgEl.width < props.cropWidth) {
        alert(`幅${props.cropWidth}px以上の画像を指定してください`)
        return
      }
      await openCropper(image)
      return
    }

    if (props.cropHeight) {
      if (imgEl.height === props.cropHeight) {
        await returnImage(image)
        return
      } else if (imgEl.height < props.cropHeight) {
        alert(`高さ${props.cropHeight}px以上の画像を指定してください`)
        return
      }
      await openCropper(image)
    }
  }
}

const openCropper = (image: File) => {
  const reader = new FileReader()
  reader.readAsDataURL(image)
  return new Promise<void>((resolve, _reject) => {
    reader.onload = () => {
      cropImage.value
        = typeof reader.result === 'string' ? `${reader.result}` : ''
      showCropper.value = true
      return resolve()
    }
  })
}

const cancelCropper = () => {
  cancel()
  closeCropper()
}

const closeCropper = () => {
  showCropper.value = false
}

const onClipped = async (images: File[]) => {
  if (!images[0]) return
  await returnImage(images[0])
  closeCropper()
}

const returnImage = (image: File) => {
  return emitImage(image)
}

const removeImage = async () => {
  await emitImage()
}

const emitImage = async (image?: File) => {
  value.value = image
  const result = await validate()
  if (result.valid) emit('update:model-value', image)
}

const cancel = () => {
  emit('update:model-value', undefined)
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.hm-input-single-image {
  display: block;
  height: fit-content;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  width: fit-content;

  > .wrapper {
    align-items: center;
    display: flex;
    height: calc(100% - 28px);
    justify-content: center;
    margin: 0 auto;
    position: relative;
    width: calc(100% - 28px);
  }

  > .wrapper > .uploader {
    display: block;
    height: 100%;
    width: 100%;
  }

  > .remove {
    background-color: v.$black;
    border-radius: 50%;
    display: block;
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    &::before,
    &::after {
      border-top: 3px solid v.$white;
      content: '';
      display: block;
      position: relative;
      width: 30px;
    }

    &::before {
      height: 1px;
      left: 1px;
      top: 1px;
      transform: rotate(45deg);
    }

    &::after {
      height: 2px;
      right: -1px;
      top: -1px;
      transform: rotate(-45deg);
    }
  }

  .error-container {
    color: v.$red;
    display: block;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    min-height: 20px;
  }
}

.crop-message {
  color: v.$base-font-color;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 16px;
}

.crop-container {
  height: 100%;
  padding: 30px;

  @include m.sp {
    font-size: 10px;
  }

  > .main {
    height: calc(100% - 90px);
  }
}

.preview {
  max-height: 100%;
  object-fit: cover;
}

.ha-dialog {
  padding: 30px;

  &:deep(.dialog-window) {
    height: 100%;
  }
}
</style>
