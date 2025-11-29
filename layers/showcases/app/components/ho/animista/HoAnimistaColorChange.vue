<template>
  <div class="ho-animista-color-change">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Color Change Animations
    </h1>

    <p class="demo-description">
      4種類の背景色変化アニメーションのデモ。2色から5色までのカラートランジションをSCSSで実装しています。
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
          Color Change (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['demo-box', 'variant-2x', { 'is-animating': activeVariants.has('2x') }]">
              <span class="variant-label">2 COLORS</span>
              <span class="color-info">青 → 紫</span>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-3x', { 'is-animating': activeVariants.has('3x') }]">
              <span class="variant-label">3 COLORS</span>
              <span class="color-info">青 → 紫 → 赤</span>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-4x', { 'is-animating': activeVariants.has('4x') }]">
              <span class="variant-label">4 COLORS</span>
              <span class="color-info">青 → 紫 → 赤 → 黄</span>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-5x', { 'is-animating': activeVariants.has('5x') }]">
              <span class="variant-label">5 COLORS</span>
              <span class="color-info">青 → 紫 → 赤 → 黄 → 緑</span>
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

type ColorChangeVariant = '2x' | '3x' | '4x' | '5x'

const allVariants: ColorChangeVariant[] = ['2x', '3x', '4x', '5x']

const activeVariants = ref<Set<ColorChangeVariant>>(new Set())

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

// Color Change Variations (4 patterns)
.variant-2x.is-animating { @include anim.color-change('2x', 4s); }
.variant-3x.is-animating { @include anim.color-change('3x', 6s); }
.variant-4x.is-animating { @include anim.color-change('4x', 8s); }
.variant-5x.is-animating { @include anim.color-change('5x', 10s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-color-change {
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.demo-box {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 180px;
  border-radius: 16px;

  background: #19dcea;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);

  &.is-animating {
    pointer-events: none;
  }
}

.variant-label {
  padding: 8px 16px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: bold;
  color: white;

  background: rgb(0 0 0 / 50%);
  backdrop-filter: blur(4px);
}

.color-info {
  font-size: 12px;
  color: white;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
}
</style>
