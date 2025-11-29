<template>
  <div class="ho-animista-rotate-scale">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate Scale Animations
    </h1>

    <p class="demo-description">
      10種類の回転＋スケールアニメーションのデモ。SCSS mixinで実装されています。
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
              <div :class="['demo-box', 'variant-up', { 'is-animating': activeVariants.has('up') }]">
                up
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-down', { 'is-animating': activeVariants.has('down') }]">
                down
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-up-hor', { 'is-animating': activeVariants.has('up-hor') }]">
                up-hor
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-down-hor', { 'is-animating': activeVariants.has('down-hor') }]">
                down-hor
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-up-ver', { 'is-animating': activeVariants.has('up-ver') }]">
                up-ver
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-down-ver', { 'is-animating': activeVariants.has('down-ver') }]">
                down-ver
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal (4 patterns) - 3D Card Flip Effect
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-diag-1', { 'is-animating': activeVariants.has('up-diag-1') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-diag-1', { 'is-animating': activeVariants.has('down-diag-1') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-up-diag-2', { 'is-animating': activeVariants.has('up-diag-2') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-down-diag-2', { 'is-animating': activeVariants.has('down-diag-2') }]">
                <div class="flip-face flip-front">
                  A
                </div>
                <div class="flip-face flip-back">
                  B
                </div>
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

type RotateScaleVariant
  = 'up' | 'down'
    | 'up-hor' | 'down-hor'
    | 'up-ver' | 'down-ver'
    | 'up-diag-1' | 'down-diag-1' | 'up-diag-2' | 'down-diag-2'

const allVariants: RotateScaleVariant[] = [
  'up', 'down',
  'up-hor', 'down-hor',
  'up-ver', 'down-ver',
  'up-diag-1', 'down-diag-1', 'up-diag-2', 'down-diag-2',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateScaleVariant>>(new Set())

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

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-up { @include anim.rotate-scale('up', 0.4s); }
  .demo-box.variant-down { @include anim.rotate-scale('down', 0.4s); }
  .demo-box.variant-up-hor { @include anim.rotate-scale('up-hor', 0.4s); }
  .demo-box.variant-down-hor { @include anim.rotate-scale('down-hor', 0.4s); }
  .demo-box.variant-up-ver { @include anim.rotate-scale('up-ver', 0.4s); }
  .demo-box.variant-down-ver { @include anim.rotate-scale('down-ver', 0.4s); }
  .demo-box.flip-card.variant-up-diag-1 { @include anim.rotate-scale('up-diag-1', 0.4s); }
  .demo-box.flip-card.variant-down-diag-1 { @include anim.rotate-scale('down-diag-1', 0.4s); }
  .demo-box.flip-card.variant-up-diag-2 { @include anim.rotate-scale('up-diag-2', 0.4s); }
  .demo-box.flip-card.variant-down-diag-2 { @include anim.rotate-scale('down-diag-2', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
// Basic (2 patterns)
.variant-up.is-animating { @include anim.rotate-scale('up', 0.65s); }
.variant-down.is-animating { @include anim.rotate-scale('down', 0.65s); }

// Horizontal (2 patterns)
.variant-up-hor.is-animating { @include anim.rotate-scale('up-hor', 0.65s); }
.variant-down-hor.is-animating { @include anim.rotate-scale('down-hor', 0.65s); }

// Vertical (2 patterns)
.variant-up-ver.is-animating { @include anim.rotate-scale('up-ver', 0.65s); }
.variant-down-ver.is-animating { @include anim.rotate-scale('down-ver', 0.65s); }

// Diagonal (4 patterns) - 3D Card Flip Effect
.variant-up-diag-1.is-animating { @include anim.rotate-scale('up-diag-1', 0.65s); }
.variant-down-diag-1.is-animating { @include anim.rotate-scale('down-diag-1', 0.65s); }
.variant-up-diag-2.is-animating { @include anim.rotate-scale('up-diag-2', 0.65s); }
.variant-down-diag-2.is-animating { @include anim.rotate-scale('down-diag-2', 0.65s); }

// 3D Card Flip Container (Diagonal variants only)
.demo-box.flip-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

// Card Face Styles
.flip-face {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;

  font-size: 32px;
  font-weight: bold;
  color: #1f2937;

  backface-visibility: hidden;
}

.flip-front {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.flip-back {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// 各diagonal回転に合わせた裏面の初期回転
.variant-up-diag-1 .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-down-diag-1 .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-up-diag-2 .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }
.variant-down-diag-2 .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-scale {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    color: #667eea;
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
    color: #667eea;
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
  color: #1f2937;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
