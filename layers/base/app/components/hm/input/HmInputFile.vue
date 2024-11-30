<template>
  <!-- TODO: エラーメッセージの表示をする際に、必要に応じてHmInputTextBase.vue同様の修正(DOM構造とエラーmsgのstyle)を行う -->
  <label
    ref="box"
    :class="['hm-input-file', { '-dragover': isDragOver }]"
    @dragenter.prevent="toggleDragOver(true)"
    @dragleave.prevent="toggleDragOver(false)"
    @dragover.prevent
    @drop.prevent="onDrop($event)"
  >
    <HaBaseInput
      ref="fileInput"
      class="input"
      type="file"
      name="file"
      :accept="accept"
      :multiple="multiple"
      :files="files"
      :required="required"
      @click="onClick"
      @change="onChange($event)"
    />
    <div class="image-box">
      <slot>
        <div class="inner">
          <span class="text"> Select file or drag it! </span>
        </div>
      </slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { z } from 'zod'
import { isValueOf } from '#base/app/utils/zod'

const htmlInputElementAndFilesSchema = z.instanceof(HTMLInputElement).and(
  z.object({
    files: z.instanceof(FileList),
  }),
)

type Props = {
  required?: boolean
  accept?: string
  multiple?: boolean
  propFiles?: FileList
}
const props = withDefaults(defineProps<Props>(), {
  required: false,
  accept: '',
  multiple: false,
  propFiles: undefined,
})

type Emits = {
  (e: 'input:multiple' | 'input:single', files: FileList): void
  (e: 'cancel'): void
}
const emit = defineEmits<Emits>()

const fileInput = ref<HTMLInputElement>()
const isDragOver = ref(false)
const clickListener = ref<((evt: Event) => void) | null>(null)

const files = computed({
  get: () => props.propFiles,
  set: (files?: FileList) => {
    if (!files) return
    if (props.multiple) {
      emit('input:multiple', files)
    }
    if (!props.multiple) {
      emit('input:single', files)
    }
  },
})

onMounted(() => {
  if (!isValueOf(htmlInputElementAndFilesSchema, fileInput.value)) {
    return
  }

  clickListener.value = () => {
    window.onfocus = () => {
      setTimeout(() => {
        if (fileInput.value?.files?.length === 0) {
          emit('cancel')
        }
      }, 500)
    }
    window.onload = null
  }
  fileInput.value.addEventListener('click', clickListener.value)
})

onUnmounted(() => {
  if (
    isValueOf(htmlInputElementAndFilesSchema, fileInput.value)
    && clickListener.value
  ) {
    fileInput.value.removeEventListener('click', clickListener.value)
  }
})

const toggleDragOver = (isDragover: boolean) => {
  isDragOver.value = isDragover
}

const onDrop = (event: DragEvent) => {
  toggleDragOver(false)
  if (event?.dataTransfer) {
    files.value = event?.dataTransfer?.files
  }
}

const onChange = (event: Event) => {
  const target: (EventTarget & { files?: FileList }) | null = event?.target
  if (target !== null && !(target?.files instanceof FileList)) {
    throw new Error('Illegal. This functions is only for file input elements')
  }
  if (target?.files) {
    files.value = target.files
  }
}

const onClick = () => {
  // todo: 同じファイルを二回開けないのでclick時空にする
  if (fileInput.value instanceof HTMLInputElement) {
    fileInput.value.value = ''
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/mixins' as m;
@use '#base/app/assets/styles/variables' as v;

.hm-input-file {
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: 100%;

  &.-dragover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.7;
  }

  @include m.sp {
    &:hover {
      opacity: inherit;
    }

    &:active {
      opacity: 0.7;
    }
  }

  > .input {
    display: none;
    height: 0;
    visibility: hidden;
    width: 0;
  }

  > .error {
    color: v.$red;
    display: block;
    font-size: 10px;
    font-weight: 400;
    width: fit-content;
  }
}

.image-box {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  > .inner {
    align-items: center;
    background-color: #d5d5d5;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  > .inner > .text {
    color: v.$base-font-color;
  }
}
</style>
