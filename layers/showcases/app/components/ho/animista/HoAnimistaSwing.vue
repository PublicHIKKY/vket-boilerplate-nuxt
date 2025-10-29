<template>
  <div class="ho-animista-swing">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Swing Animations
    </h1>

    <p class="demo-description">
      16種類のスイングアニメーションのデモ。SCSS mixinで実装されています。
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
          Top & Bottom (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-fwd', { 'is-animating': activeVariants.has('top-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-bck', { 'is-animating': activeVariants.has('top-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-fwd', { 'is-animating': activeVariants.has('bottom-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-bck', { 'is-animating': activeVariants.has('bottom-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Right & Left (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-right-fwd', { 'is-animating': activeVariants.has('right-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-right-bck', { 'is-animating': activeVariants.has('right-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-left-fwd', { 'is-animating': activeVariants.has('left-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-left-bck', { 'is-animating': activeVariants.has('left-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Top-Right & Bottom-Left (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-right-fwd', { 'is-animating': activeVariants.has('top-right-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-right-bck', { 'is-animating': activeVariants.has('top-right-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-left-fwd', { 'is-animating': activeVariants.has('bottom-left-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-left-bck', { 'is-animating': activeVariants.has('bottom-left-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Bottom-Right & Top-Left (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-right-fwd', { 'is-animating': activeVariants.has('bottom-right-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-bottom-right-bck', { 'is-animating': activeVariants.has('bottom-right-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-left-fwd', { 'is-animating': activeVariants.has('top-left-fwd') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
                  B
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'swing-card', 'variant-top-left-bck', { 'is-animating': activeVariants.has('top-left-bck') }]">
                <div class="front-text">
                  A
                </div>
                <div class="back-text">
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

type SwingVariant
  = 'top-fwd' | 'top-bck' | 'top-right-fwd' | 'top-right-bck'
    | 'right-fwd' | 'right-bck' | 'bottom-right-fwd' | 'bottom-right-bck'
    | 'bottom-fwd' | 'bottom-bck' | 'bottom-left-fwd' | 'bottom-left-bck'
    | 'left-fwd' | 'left-bck' | 'top-left-fwd' | 'top-left-bck'

const allVariants: SwingVariant[] = [
  'top-fwd', 'top-bck',
  'bottom-fwd', 'bottom-bck',
  'right-fwd', 'right-bck',
  'left-fwd', 'left-bck',
  'top-right-fwd', 'top-right-bck',
  'bottom-left-fwd', 'bottom-left-bck',
  'bottom-right-fwd', 'bottom-right-bck',
  'top-left-fwd', 'top-left-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<SwingVariant>>(new Set())

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
// Swing Card Container
// ============================================
.demo-box.swing-card {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

.front-text,
.back-text {
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
// Top & Bottom (4 patterns)
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.swing-card.variant-top-fwd { @include anim.swing('top-fwd', 0.4s); }
  .demo-box.swing-card.variant-top-bck { @include anim.swing('top-bck', 0.4s); }
  .demo-box.swing-card.variant-bottom-fwd { @include anim.swing('bottom-fwd', 0.4s); }
  .demo-box.swing-card.variant-bottom-bck { @include anim.swing('bottom-bck', 0.4s); }
  .demo-box.swing-card.variant-right-fwd { @include anim.swing('right-fwd', 0.4s); }
  .demo-box.swing-card.variant-right-bck { @include anim.swing('right-bck', 0.4s); }
  .demo-box.swing-card.variant-left-fwd { @include anim.swing('left-fwd', 0.4s); }
  .demo-box.swing-card.variant-left-bck { @include anim.swing('left-bck', 0.4s); }
  .demo-box.swing-card.variant-top-right-fwd { @include anim.swing('top-right-fwd', 0.4s); }
  .demo-box.swing-card.variant-top-right-bck { @include anim.swing('top-right-bck', 0.4s); }
  .demo-box.swing-card.variant-bottom-left-fwd { @include anim.swing('bottom-left-fwd', 0.4s); }
  .demo-box.swing-card.variant-bottom-left-bck { @include anim.swing('bottom-left-bck', 0.4s); }
  .demo-box.swing-card.variant-bottom-right-fwd { @include anim.swing('bottom-right-fwd', 0.4s); }
  .demo-box.swing-card.variant-bottom-right-bck { @include anim.swing('bottom-right-bck', 0.4s); }
  .demo-box.swing-card.variant-top-left-fwd { @include anim.swing('top-left-fwd', 0.4s); }
  .demo-box.swing-card.variant-top-left-bck { @include anim.swing('top-left-bck', 0.4s); }
}

.variant-top-fwd.is-animating { @include anim.swing('top-fwd', 0.4s); }

.variant-top-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-bck.is-animating { @include anim.swing('top-bck', 0.4s); }

.variant-top-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-fwd.is-animating { @include anim.swing('bottom-fwd', 0.4s); }

.variant-bottom-fwd .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-bck.is-animating { @include anim.swing('bottom-bck', 0.4s); }

.variant-bottom-bck .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Right & Left (4 patterns)
// ============================================
.variant-right-fwd.is-animating { @include anim.swing('right-fwd', 0.4s); }

.variant-right-fwd .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-right-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-right-bck.is-animating { @include anim.swing('right-bck', 0.4s); }

.variant-right-bck .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-right-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-fwd.is-animating { @include anim.swing('left-fwd', 0.4s); }

.variant-left-fwd .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-bck.is-animating { @include anim.swing('left-bck', 0.4s); }

.variant-left-bck .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-left-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal (8 patterns)
// ============================================
.variant-top-right-fwd.is-animating { @include anim.swing('top-right-fwd', 0.4s); }

.variant-top-right-fwd .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-right-fwd .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-right-bck.is-animating { @include anim.swing('top-right-bck', 0.4s); }

.variant-top-right-bck .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-right-bck .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-fwd.is-animating { @include anim.swing('bottom-left-fwd', 0.4s); }

.variant-bottom-left-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-fwd .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-bck.is-animating { @include anim.swing('bottom-left-bck', 0.4s); }

.variant-bottom-left-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-left-bck .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-fwd.is-animating { @include anim.swing('bottom-right-fwd', 0.4s); }

.variant-bottom-right-fwd .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-fwd .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-bck.is-animating { @include anim.swing('bottom-right-bck', 0.4s); }

.variant-bottom-right-bck .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-bottom-right-bck .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-fwd.is-animating { @include anim.swing('top-left-fwd', 0.4s); }

.variant-top-left-fwd .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-fwd .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-bck.is-animating { @include anim.swing('top-left-bck', 0.4s); }

.variant-top-left-bck .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-top-left-bck .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-swing {
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

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
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
