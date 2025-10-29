<template>
  <div class="ho-animista-slide-out-elliptic">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide Out Elliptic Animations
    </h1>

    <p class="demo-description">
      8種類の楕円軌道スライド退場アニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Elliptic Slides (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                top-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                top-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                right-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                right-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                bottom-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                bottom-fwd
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                left-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                left-fwd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type SlideOutEllipticVariant
  = | 'top-bck'
    | 'top-fwd'
    | 'right-bck'
    | 'right-fwd'
    | 'bottom-bck'
    | 'bottom-fwd'
    | 'left-bck'
    | 'left-fwd'

const allVariants: SlideOutEllipticVariant[] = [
  'top-bck',
  'top-fwd',
  'right-bck',
  'right-fwd',
  'bottom-bck',
  'bottom-fwd',
  'left-bck',
  'left-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SlideOutEllipticVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.variant-top-bck { @include anim.slide-out-elliptic('top-bck', 0.7s); }
  .demo-box.variant-top-fwd { @include anim.slide-out-elliptic('top-fwd', 0.7s); }
  .demo-box.variant-right-bck { @include anim.slide-out-elliptic('right-bck', 0.7s); }
  .demo-box.variant-right-fwd { @include anim.slide-out-elliptic('right-fwd', 0.7s); }
  .demo-box.variant-bottom-bck { @include anim.slide-out-elliptic('bottom-bck', 0.7s); }
  .demo-box.variant-bottom-fwd { @include anim.slide-out-elliptic('bottom-fwd', 0.7s); }
  .demo-box.variant-left-bck { @include anim.slide-out-elliptic('left-bck', 0.7s); }
  .demo-box.variant-left-fwd { @include anim.slide-out-elliptic('left-fwd', 0.7s); }
}

// Elliptic Slides (8 patterns)
.variant-top-bck.is-animating { @include anim.slide-out-elliptic('top-bck', 0.7s); }
.variant-top-fwd.is-animating { @include anim.slide-out-elliptic('top-fwd', 0.7s); }
.variant-right-bck.is-animating { @include anim.slide-out-elliptic('right-bck', 0.7s); }
.variant-right-fwd.is-animating { @include anim.slide-out-elliptic('right-fwd', 0.7s); }
.variant-bottom-bck.is-animating { @include anim.slide-out-elliptic('bottom-bck', 0.7s); }
.variant-bottom-fwd.is-animating { @include anim.slide-out-elliptic('bottom-fwd', 0.7s); }
.variant-left-bck.is-animating { @include anim.slide-out-elliptic('left-bck', 0.7s); }
.variant-left-fwd.is-animating { @include anim.slide-out-elliptic('left-fwd', 0.7s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-out-elliptic {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
}

.header-controls { margin-bottom: 24px; }

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #14b8a6;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #14b8a6;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active { transform: translateY(0); }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
