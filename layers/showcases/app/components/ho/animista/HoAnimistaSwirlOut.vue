<template>
  <div class="ho-animista-swirl-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Swirl Out Animations
    </h1>

    <p class="demo-description">
      18種類の回転とスケールを組み合わせた退場アニメーションのデモ。SCSS mixinで実装されています。
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
          Basic (2 patterns)
        </h2>
        <div class="grid">
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
          Directional Swirls (16 patterns)
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
              <div :class="['demo-box', 'variant-tr-bck', { 'is-animating': activeVariants.has('tr-bck') }]">
                tr-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-fwd', { 'is-animating': activeVariants.has('tr-fwd') }]">
                tr-fwd
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
              <div :class="['demo-box', 'variant-br-bck', { 'is-animating': activeVariants.has('br-bck') }]">
                br-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-fwd', { 'is-animating': activeVariants.has('br-fwd') }]">
                br-fwd
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
              <div :class="['demo-box', 'variant-bl-bck', { 'is-animating': activeVariants.has('bl-bck') }]">
                bl-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-fwd', { 'is-animating': activeVariants.has('bl-fwd') }]">
                bl-fwd
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
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-bck', { 'is-animating': activeVariants.has('tl-bck') }]">
                tl-bck
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-fwd', { 'is-animating': activeVariants.has('tl-fwd') }]">
                tl-fwd
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

type SwirlOutVariant
  = | 'bck'
    | 'fwd'
    | 'top-bck'
    | 'top-fwd'
    | 'tr-bck'
    | 'tr-fwd'
    | 'right-bck'
    | 'right-fwd'
    | 'br-bck'
    | 'br-fwd'
    | 'bottom-bck'
    | 'bottom-fwd'
    | 'bl-bck'
    | 'bl-fwd'
    | 'left-bck'
    | 'left-fwd'
    | 'tl-bck'
    | 'tl-fwd'

const allVariants: SwirlOutVariant[] = [
  'bck',
  'fwd',
  'top-bck',
  'top-fwd',
  'tr-bck',
  'tr-fwd',
  'right-bck',
  'right-fwd',
  'br-bck',
  'br-fwd',
  'bottom-bck',
  'bottom-fwd',
  'bl-bck',
  'bl-fwd',
  'left-bck',
  'left-fwd',
  'tl-bck',
  'tl-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SwirlOutVariant>>(new Set())

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
  .demo-box.variant-bck { @include anim.swirl-out('bck', 0.6s); }
  .demo-box.variant-fwd { @include anim.swirl-out('fwd', 0.6s); }
  .demo-box.variant-top-bck { @include anim.swirl-out('top-bck', 0.6s); }
  .demo-box.variant-top-fwd { @include anim.swirl-out('top-fwd', 0.6s); }
  .demo-box.variant-tr-bck { @include anim.swirl-out('tr-bck', 0.6s); }
  .demo-box.variant-tr-fwd { @include anim.swirl-out('tr-fwd', 0.6s); }
  .demo-box.variant-right-bck { @include anim.swirl-out('right-bck', 0.6s); }
  .demo-box.variant-right-fwd { @include anim.swirl-out('right-fwd', 0.6s); }
  .demo-box.variant-br-bck { @include anim.swirl-out('br-bck', 0.6s); }
  .demo-box.variant-br-fwd { @include anim.swirl-out('br-fwd', 0.6s); }
  .demo-box.variant-bottom-bck { @include anim.swirl-out('bottom-bck', 0.6s); }
  .demo-box.variant-bottom-fwd { @include anim.swirl-out('bottom-fwd', 0.6s); }
  .demo-box.variant-bl-bck { @include anim.swirl-out('bl-bck', 0.6s); }
  .demo-box.variant-bl-fwd { @include anim.swirl-out('bl-fwd', 0.6s); }
  .demo-box.variant-left-bck { @include anim.swirl-out('left-bck', 0.6s); }
  .demo-box.variant-left-fwd { @include anim.swirl-out('left-fwd', 0.6s); }
  .demo-box.variant-tl-bck { @include anim.swirl-out('tl-bck', 0.6s); }
  .demo-box.variant-tl-fwd { @include anim.swirl-out('tl-fwd', 0.6s); }
}

// Basic (2 patterns)
.variant-bck.is-animating { @include anim.swirl-out('bck', 0.6s); }
.variant-fwd.is-animating { @include anim.swirl-out('fwd', 0.6s); }

// Directional Swirls (16 patterns)
.variant-top-bck.is-animating { @include anim.swirl-out('top-bck', 0.6s); }
.variant-top-fwd.is-animating { @include anim.swirl-out('top-fwd', 0.6s); }
.variant-tr-bck.is-animating { @include anim.swirl-out('tr-bck', 0.6s); }
.variant-tr-fwd.is-animating { @include anim.swirl-out('tr-fwd', 0.6s); }
.variant-right-bck.is-animating { @include anim.swirl-out('right-bck', 0.6s); }
.variant-right-fwd.is-animating { @include anim.swirl-out('right-fwd', 0.6s); }
.variant-br-bck.is-animating { @include anim.swirl-out('br-bck', 0.6s); }
.variant-br-fwd.is-animating { @include anim.swirl-out('br-fwd', 0.6s); }
.variant-bottom-bck.is-animating { @include anim.swirl-out('bottom-bck', 0.6s); }
.variant-bottom-fwd.is-animating { @include anim.swirl-out('bottom-fwd', 0.6s); }
.variant-bl-bck.is-animating { @include anim.swirl-out('bl-bck', 0.6s); }
.variant-bl-fwd.is-animating { @include anim.swirl-out('bl-fwd', 0.6s); }
.variant-left-bck.is-animating { @include anim.swirl-out('left-bck', 0.6s); }
.variant-left-fwd.is-animating { @include anim.swirl-out('left-fwd', 0.6s); }
.variant-tl-bck.is-animating { @include anim.swirl-out('tl-bck', 0.6s); }
.variant-tl-fwd.is-animating { @include anim.swirl-out('tl-fwd', 0.6s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-swirl-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
    color: #10b981;
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
    color: #10b981;
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

  background: linear-gradient(135deg, #10b981 0%, #059669 100%);

  &.is-animating {
    pointer-events: none;
  }
}
</style>
