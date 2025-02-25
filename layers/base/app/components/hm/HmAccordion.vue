<template>
  <button
    :id="props.buttonname"
    ref="accordionTrigger"
    class="accordion-trigger"
    :aria-expanded="isOpen"
    role="tab"
    :aria-controls="props.panelname"
    type="button"
    @click="changeExpanded"
  >
    <slot name="title"></slot>
    <slot name="icon"></slot>
  </button>
  <div
    :id="props.panelname"
    ref="accordionBody"
    class="accordion-body"
    role="tabpanel"
    :aria-labelledby="props.buttonname"
  >
    <div class="accordion-inner">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  buttonname: string
  panelname: string
  open?: boolean
}>()

const accordionTrigger = ref<HTMLButtonElement | null>(null)
const accordionBody = ref<HTMLDivElement | null>(null)
const isOpen = ref(false)

onMounted(() => {
  if (accordionBody.value && !props.open) {
    accordionBody.value.setAttribute('hidden', 'until-found')
  } else {
    isOpen.value = true
  }
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach(() => {
      if (
        accordionBody.value
        && accordionTrigger.value
        && !accordionBody.value.getAttribute('hidden')
        && accordionTrigger.value.getAttribute('aria-expanded') === 'false'
      ) {
        isOpen.value = !isOpen.value
      }
    })
  })
  const config = {
    attributes: true, // 属性の変更を監視
    childList: false, // 直下子要素の変更を監視
    subtree: false, // 全ての子孫要素の変更を監視
    characterData: false, // テキストの変更を監視
  }
  if (accordionBody.value) {
    observer.observe(accordionBody.value, config)
  }
})

const changeExpanded = () => {
  isOpen.value = !isOpen.value
  if (accordionBody.value && isOpen.value) {
    accordionBody.value.removeAttribute('hidden')
  } else if (isOpen.value) {
    setTimeout(() => {
      if (accordionBody.value) {
        accordionBody.value.setAttribute('hidden', 'until-found')
      }
    }, 300)
  }
}

const closeAccordion = () => {
  isOpen.value = false
  setTimeout(() => {
    if (accordionBody.value) {
      accordionBody.value.setAttribute('hidden', 'until-found')
    }
  }, 300)
}

defineExpose({ closeAccordion })
</script>

<style scoped lang="scss">
.accordion-trigger {
  position: relative;
  width: 100%;

  &[aria-expanded='true'] {
    + .accordion-body {
      grid-template-rows: 1fr;
    }
  }

  &[aria-expanded='false'] {
    + .accordion-body {
      grid-template-rows: 0fr;
    }
  }
}

.accordion-body {
  display: grid;
  transition: grid-template-rows 0.3s;

  .accordion-inner {
    overflow: hidden;
  }
}
</style>
