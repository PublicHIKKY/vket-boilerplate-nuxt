<template>
  <div class="ho-animista-rotate">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate Animations
    </h1>

    <p class="demo-description">
      21種類の回転アニメーションのデモ。SCSS mixinで実装されています。
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
          Basic Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-center', { 'is-animating': activeVariants.has('hor-center') }]">
                hor-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
                hor-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
                hor-bottom
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vert-center', { 'is-animating': activeVariants.has('vert-center') }]">
                vert-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vert-left', { 'is-animating': activeVariants.has('vert-left') }]">
                vert-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-vert-right', { 'is-animating': activeVariants.has('vert-right') }]">
                vert-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal (6 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1', { 'is-animating': activeVariants.has('diagonal-1') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2', { 'is-animating': activeVariants.has('diagonal-2') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-tr', { 'is-animating': activeVariants.has('diagonal-tr') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-br', { 'is-animating': activeVariants.has('diagonal-br') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-bl', { 'is-animating': activeVariants.has('diagonal-bl') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-tl', { 'is-animating': activeVariants.has('diagonal-tl') }]">
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

type RotateVariant
  = 'center' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl'
    | 'hor-center' | 'hor-top' | 'hor-bottom'
    | 'vert-center' | 'vert-left' | 'vert-right'
    | 'diagonal-1' | 'diagonal-2' | 'diagonal-tr' | 'diagonal-br' | 'diagonal-bl' | 'diagonal-tl'

const allVariants: RotateVariant[] = [
  'center', 'top', 'tr', 'right', 'br', 'bottom', 'bl', 'left', 'tl',
  'hor-center', 'hor-top', 'hor-bottom',
  'vert-center', 'vert-left', 'vert-right',
  'diagonal-1', 'diagonal-2', 'diagonal-tr', 'diagonal-br', 'diagonal-bl', 'diagonal-tl',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<RotateVariant>>(new Set())

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
  .demo-box.variant-center { @include anim.rotate('center', 0.4s); }
  .demo-box.variant-top { @include anim.rotate('top', 0.4s); }
  .demo-box.variant-tr { @include anim.rotate('tr', 0.4s); }
  .demo-box.variant-right { @include anim.rotate('right', 0.4s); }
  .demo-box.variant-br { @include anim.rotate('br', 0.4s); }
  .demo-box.variant-bottom { @include anim.rotate('bottom', 0.4s); }
  .demo-box.variant-bl { @include anim.rotate('bl', 0.4s); }
  .demo-box.variant-left { @include anim.rotate('left', 0.4s); }
  .demo-box.variant-tl { @include anim.rotate('tl', 0.4s); }
  .demo-box.variant-hor-center { @include anim.rotate('hor-center', 0.4s); }
  .demo-box.variant-hor-top { @include anim.rotate('hor-top', 0.4s); }
  .demo-box.variant-hor-bottom { @include anim.rotate('hor-bottom', 0.4s); }
  .demo-box.variant-vert-center { @include anim.rotate('vert-center', 0.4s); }
  .demo-box.variant-vert-left { @include anim.rotate('vert-left', 0.4s); }
  .demo-box.variant-vert-right { @include anim.rotate('vert-right', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1 { @include anim.rotate('diagonal-1', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2 { @include anim.rotate('diagonal-2', 0.4s); }
  .demo-box.flip-card.variant-diagonal-tr { @include anim.rotate('diagonal-tr', 0.4s); }
  .demo-box.flip-card.variant-diagonal-br { @include anim.rotate('diagonal-br', 0.4s); }
  .demo-box.flip-card.variant-diagonal-bl { @include anim.rotate('diagonal-bl', 0.4s); }
  .demo-box.flip-card.variant-diagonal-tl { @include anim.rotate('diagonal-tl', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
// Basic Directions (9 patterns)
.variant-center.is-animating { @include anim.rotate('center', 0.6s); }
.variant-top.is-animating { @include anim.rotate('top', 0.6s); }
.variant-tr.is-animating { @include anim.rotate('tr', 0.6s); }
.variant-right.is-animating { @include anim.rotate('right', 0.6s); }
.variant-br.is-animating { @include anim.rotate('br', 0.6s); }
.variant-bottom.is-animating { @include anim.rotate('bottom', 0.6s); }
.variant-bl.is-animating { @include anim.rotate('bl', 0.6s); }
.variant-left.is-animating { @include anim.rotate('left', 0.6s); }
.variant-tl.is-animating { @include anim.rotate('tl', 0.6s); }

// Horizontal (3 patterns)
.variant-hor-center.is-animating { @include anim.rotate('hor-center', 0.6s); }
.variant-hor-top.is-animating { @include anim.rotate('hor-top', 0.6s); }
.variant-hor-bottom.is-animating { @include anim.rotate('hor-bottom', 0.6s); }

// Vertical (3 patterns)
.variant-vert-center.is-animating { @include anim.rotate('vert-center', 0.6s); }
.variant-vert-left.is-animating { @include anim.rotate('vert-left', 0.6s); }
.variant-vert-right.is-animating { @include anim.rotate('vert-right', 0.6s); }

// Diagonal (6 patterns) - 3D Card Flip Effect
.variant-diagonal-1.is-animating { @include anim.rotate('diagonal-1', 0.6s); }
.variant-diagonal-2.is-animating { @include anim.rotate('diagonal-2', 0.6s); }
.variant-diagonal-tr.is-animating { @include anim.rotate('diagonal-tr', 0.6s); }
.variant-diagonal-br.is-animating { @include anim.rotate('diagonal-br', 0.6s); }
.variant-diagonal-bl.is-animating { @include anim.rotate('diagonal-bl', 0.6s); }
.variant-diagonal-tl.is-animating { @include anim.rotate('diagonal-tl', 0.6s); }

.flip-front {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.flip-back {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// 各diagonal回転に合わせた裏面の初期回転
.variant-diagonal-1 .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-diagonal-2 .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }
.variant-diagonal-tr .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-diagonal-br .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }
.variant-diagonal-bl .flip-back { transform: rotate3d(1, 1, 0, 180deg); }
.variant-diagonal-tl .flip-back { transform: rotate3d(-1, 1, 0, 180deg); }

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

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate {
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

// ============================================
// Demo Box Styles
// ============================================

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

  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
