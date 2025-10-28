<template>
  <div class="ho-animista-bg-pan">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Background Pan Animations
    </h1>

    <p class="demo-description">
      8種類の背景パンアニメーションのデモ。背景位置の移動エフェクトをSCSSで実装しています。
    </p>

    <div class="demo-controls">
      <button
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <div class="animation-section">
        <h2 class="section-title">
          Background Pan (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                <span class="variant-label">LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                <span class="variant-label">RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                <span class="variant-label">TOP</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                <span class="variant-label">BOTTOM</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                <span class="variant-label">TOP RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                <span class="variant-label">BOTTOM RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                <span class="variant-label">BOTTOM LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div class="demo-wrapper">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                <span class="variant-label">TOP LEFT</span>
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

type BgPanVariant = 'left' | 'right' | 'top' | 'bottom' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: BgPanVariant[] = ['left', 'right', 'top', 'bottom', 'tr', 'br', 'bl', 'tl']

const activeVariants = ref<Set<BgPanVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

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

// Background Pan Variations (8 patterns)
.variant-left.is-animating { @include anim.bg-pan('left', 8s); }
.variant-right.is-animating { @include anim.bg-pan('right', 8s); }
.variant-top.is-animating { @include anim.bg-pan('top', 8s); }
.variant-bottom.is-animating { @include anim.bg-pan('bottom', 8s); }
.variant-tr.is-animating { @include anim.bg-pan('tr', 8s); }
.variant-br.is-animating { @include anim.bg-pan('br', 8s); }
.variant-bl.is-animating { @include anim.bg-pan('bl', 8s); }
.variant-tl.is-animating { @include anim.bg-pan('tl', 8s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-bg-pan {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
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
    color: #1f2937;
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
  justify-content: center;
  margin-bottom: 40px;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.demo-wrapper {
  overflow: hidden;

  width: 240px;
  height: 180px;
  border-radius: 16px;

  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
}

.demo-box {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: repeating-linear-gradient(
    45deg,
    #667eea 0,
    #667eea 40px,
    #764ba2 40px,
    #764ba2 80px,
    #f093fb 80px,
    #f093fb 120px,
    #f5576c 120px,
    #f5576c 160px
  );
  background-position: center;
  background-size: 400% 400%;

  &.is-animating {
    pointer-events: none;
  }
}

.variant-label {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px 16px;
  border-radius: 8px;

  font-size: 12px;
  font-weight: bold;
  color: white;

  background: rgb(0 0 0 / 50%);
  backdrop-filter: blur(4px);
}
</style>
