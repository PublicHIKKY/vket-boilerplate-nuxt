<template>
  <div class="ho-animista-rotate-out-2">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate Out 2 Animations
    </h1>

    <p class="demo-description">
      12種類の45度回転退場アニメーションのデモ。SCSS mixinで実装されています。
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
          Basic (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-cw', { 'is-animating': activeVariants.has('cw') }]">
                cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ccw', { 'is-animating': activeVariants.has('ccw') }]">
                ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bck', { 'is-animating': activeVariants.has('bck') }]">
                bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-fwd', { 'is-animating': activeVariants.has('fwd') }]">
                fwd
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Corner Rotations (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-cw', { 'is-animating': activeVariants.has('tr-cw') }]">
                tr-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-ccw', { 'is-animating': activeVariants.has('tr-ccw') }]">
                tr-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-cw', { 'is-animating': activeVariants.has('br-cw') }]">
                br-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-ccw', { 'is-animating': activeVariants.has('br-ccw') }]">
                br-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-cw', { 'is-animating': activeVariants.has('bl-cw') }]">
                bl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-ccw', { 'is-animating': activeVariants.has('bl-ccw') }]">
                bl-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-cw', { 'is-animating': activeVariants.has('tl-cw') }]">
                tl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-ccw', { 'is-animating': activeVariants.has('tl-ccw') }]">
                tl-ccw
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

type RotateOut2Variant
  = | 'cw'
    | 'ccw'
    | 'bck'
    | 'fwd'
    | 'tr-cw'
    | 'tr-ccw'
    | 'br-cw'
    | 'br-ccw'
    | 'bl-cw'
    | 'bl-ccw'
    | 'tl-cw'
    | 'tl-ccw'

const allVariants: RotateOut2Variant[] = [
  'cw',
  'ccw',
  'bck',
  'fwd',
  'tr-cw',
  'tr-ccw',
  'br-cw',
  'br-ccw',
  'bl-cw',
  'bl-ccw',
  'tl-cw',
  'tl-ccw',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateOut2Variant>>(new Set())

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
  .demo-box.variant-cw { @include anim.rotate-out-2('cw', 0.6s); }
  .demo-box.variant-ccw { @include anim.rotate-out-2('ccw', 0.6s); }
  .demo-box.variant-bck { @include anim.rotate-out-2('bck-cw', 0.5s); }
  .demo-box.variant-fwd { @include anim.rotate-out-2('fwd-cw', 0.5s); }
  .demo-box.variant-tr-cw { @include anim.rotate-out-2('tr-cw', 0.6s); }
  .demo-box.variant-tr-ccw { @include anim.rotate-out-2('tr-ccw', 0.6s); }
  .demo-box.variant-br-cw { @include anim.rotate-out-2('br-cw', 0.6s); }
  .demo-box.variant-br-ccw { @include anim.rotate-out-2('br-ccw', 0.6s); }
  .demo-box.variant-bl-cw { @include anim.rotate-out-2('bl-cw', 0.6s); }
  .demo-box.variant-bl-ccw { @include anim.rotate-out-2('bl-ccw', 0.6s); }
  .demo-box.variant-tl-cw { @include anim.rotate-out-2('tl-cw', 0.6s); }
  .demo-box.variant-tl-ccw { @include anim.rotate-out-2('tl-ccw', 0.6s); }
}

// Basic (4 patterns)
.variant-cw.is-animating { @include anim.rotate-out-2('cw', 0.6s); }
.variant-ccw.is-animating { @include anim.rotate-out-2('ccw', 0.6s); }
.variant-bck.is-animating { @include anim.rotate-out-2('bck-cw', 0.5s); }
.variant-fwd.is-animating { @include anim.rotate-out-2('fwd-cw', 0.5s); }

// Corner Rotations (8 patterns)
.variant-tr-cw.is-animating { @include anim.rotate-out-2('tr-cw', 0.6s); }
.variant-tr-ccw.is-animating { @include anim.rotate-out-2('tr-ccw', 0.6s); }
.variant-br-cw.is-animating { @include anim.rotate-out-2('br-cw', 0.6s); }
.variant-br-ccw.is-animating { @include anim.rotate-out-2('br-ccw', 0.6s); }
.variant-bl-cw.is-animating { @include anim.rotate-out-2('bl-cw', 0.6s); }
.variant-bl-ccw.is-animating { @include anim.rotate-out-2('bl-ccw', 0.6s); }
.variant-tl-cw.is-animating { @include anim.rotate-out-2('tl-cw', 0.6s); }
.variant-tl-ccw.is-animating { @include anim.rotate-out-2('tl-ccw', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-out-2 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
    color: #8b5cf6;
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
    color: #8b5cf6;
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

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
