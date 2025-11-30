<template>
  <div class="ho-animista-flip">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip Animations
    </h1>

    <p class="demo-description">
      16種類のフリップアニメーションのデモ。SCSS mixinで実装されています。
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
          Horizontal (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-bottom', { 'is-animating': activeVariants.has('horizontal-bottom') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-top', { 'is-animating': activeVariants.has('horizontal-top') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-bck', { 'is-animating': activeVariants.has('horizontal-bck') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-horizontal-fwd', { 'is-animating': activeVariants.has('horizontal-fwd') }]">
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
          Vertical (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-vertical-right', { 'is-animating': activeVariants.has('vertical-right') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-vertical-left', { 'is-animating': activeVariants.has('vertical-left') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-vertical-bck', { 'is-animating': activeVariants.has('vertical-bck') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-vertical-fwd', { 'is-animating': activeVariants.has('vertical-fwd') }]">
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
          Diagonal 1 (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-tr', { 'is-animating': activeVariants.has('diagonal-1-tr') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-bl', { 'is-animating': activeVariants.has('diagonal-1-bl') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-bck', { 'is-animating': activeVariants.has('diagonal-1-bck') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-1-fwd', { 'is-animating': activeVariants.has('diagonal-1-fwd') }]">
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
          Diagonal 2 (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-br', { 'is-animating': activeVariants.has('diagonal-2-br') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-tl', { 'is-animating': activeVariants.has('diagonal-2-tl') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-bck', { 'is-animating': activeVariants.has('diagonal-2-bck') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-diagonal-2-fwd', { 'is-animating': activeVariants.has('diagonal-2-fwd') }]">
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

type FlipVariant
  = 'horizontal-bottom' | 'horizontal-top' | 'horizontal-bck' | 'horizontal-fwd'
    | 'vertical-right' | 'vertical-left' | 'vertical-bck' | 'vertical-fwd'
    | 'diagonal-1-tr' | 'diagonal-1-bl' | 'diagonal-1-bck' | 'diagonal-1-fwd'
    | 'diagonal-2-br' | 'diagonal-2-tl' | 'diagonal-2-bck' | 'diagonal-2-fwd'

const allVariants: FlipVariant[] = [
  'horizontal-bottom', 'horizontal-top', 'horizontal-bck', 'horizontal-fwd',
  'vertical-right', 'vertical-left', 'vertical-bck', 'vertical-fwd',
  'diagonal-1-tr', 'diagonal-1-bl', 'diagonal-1-bck', 'diagonal-1-fwd',
  'diagonal-2-br', 'diagonal-2-tl', 'diagonal-2-bck', 'diagonal-2-fwd',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipVariant>>(new Set())

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
// Flip Card Container
// ============================================
.demo-box.flip-card {
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
// Horizontal (4 patterns)
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.flip-card.variant-horizontal-bottom { @include anim.flip('horizontal-bottom', 0.4s); }
  .demo-box.flip-card.variant-horizontal-top { @include anim.flip('horizontal-top', 0.4s); }
  .demo-box.flip-card.variant-horizontal-bck { @include anim.flip('horizontal-bck', 0.4s); }
  .demo-box.flip-card.variant-horizontal-fwd { @include anim.flip('horizontal-fwd', 0.4s); }
  .demo-box.flip-card.variant-vertical-right { @include anim.flip('vertical-right', 0.4s); }
  .demo-box.flip-card.variant-vertical-left { @include anim.flip('vertical-left', 0.4s); }
  .demo-box.flip-card.variant-vertical-bck { @include anim.flip('vertical-bck', 0.4s); }
  .demo-box.flip-card.variant-vertical-fwd { @include anim.flip('vertical-fwd', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-tr { @include anim.flip('diagonal-1-tr', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-bl { @include anim.flip('diagonal-1-bl', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-bck { @include anim.flip('diagonal-1-bck', 0.4s); }
  .demo-box.flip-card.variant-diagonal-1-fwd { @include anim.flip('diagonal-1-fwd', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-br { @include anim.flip('diagonal-2-br', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-tl { @include anim.flip('diagonal-2-tl', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-bck { @include anim.flip('diagonal-2-bck', 0.4s); }
  .demo-box.flip-card.variant-diagonal-2-fwd { @include anim.flip('diagonal-2-fwd', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
.variant-horizontal-bottom.is-animating { @include anim.flip('horizontal-bottom', 0.4s); }

.variant-horizontal-bottom .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-bottom .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-top.is-animating { @include anim.flip('horizontal-top', 0.4s); }

.variant-horizontal-top .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-top .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-bck.is-animating { @include anim.flip('horizontal-bck', 0.4s); }

.variant-horizontal-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-bck .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-fwd.is-animating { @include anim.flip('horizontal-fwd', 0.4s); }

.variant-horizontal-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-horizontal-fwd .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Vertical (4 patterns)
// ============================================
.variant-vertical-right.is-animating { @include anim.flip('vertical-right', 0.4s); }

.variant-vertical-right .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-right .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-left.is-animating { @include anim.flip('vertical-left', 0.4s); }

.variant-vertical-left .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-left .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-bck.is-animating { @include anim.flip('vertical-bck', 0.4s); }

.variant-vertical-bck .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-bck .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-fwd.is-animating { @include anim.flip('vertical-fwd', 0.4s); }

.variant-vertical-fwd .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-vertical-fwd .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal 1 (4 patterns)
// ============================================
.variant-diagonal-1-tr.is-animating { @include anim.flip('diagonal-1-tr', 0.4s); }

.variant-diagonal-1-tr .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-tr .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bl.is-animating { @include anim.flip('diagonal-1-bl', 0.4s); }

.variant-diagonal-1-bl .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bl .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bck.is-animating { @include anim.flip('diagonal-1-bck', 0.4s); }

.variant-diagonal-1-bck .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-bck .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-fwd.is-animating { @include anim.flip('diagonal-1-fwd', 0.4s); }

.variant-diagonal-1-fwd .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-1-fwd .back-text {
  transform: rotate3d(1, 1, 0, 180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Diagonal 2 (4 patterns)
// ============================================
.variant-diagonal-2-br.is-animating { @include anim.flip('diagonal-2-br', 0.4s); }

.variant-diagonal-2-br .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-br .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-tl.is-animating { @include anim.flip('diagonal-2-tl', 0.4s); }

.variant-diagonal-2-tl .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-tl .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-bck.is-animating { @include anim.flip('diagonal-2-bck', 0.4s); }

.variant-diagonal-2-bck .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-bck .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-fwd.is-animating { @include anim.flip('diagonal-2-fwd', 0.4s); }

.variant-diagonal-2-fwd .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-diagonal-2-fwd .back-text {
  transform: rotate3d(-1, 1, 0, 180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.ho-animista-flip {
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
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
