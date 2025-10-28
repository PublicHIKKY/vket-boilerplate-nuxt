<template>
  <div class="ho-animista-slide-in-fwd">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Slide In Forward Animations
    </h1>

    <p class="demo-description">
      9種類の前方スライド入場アニメーションのデモ。SCSS mixinで実装されています。
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
          Center (1 pattern)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
              center
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
              top
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
              right
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
              bottom
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
              left
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Directions (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
              tr
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
              br
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
              bl
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
              tl
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

type SlideInFwdVariant = 'center' | 'top' | 'right' | 'bottom' | 'left' | 'tr' | 'br' | 'bl' | 'tl'

const allVariants: SlideInFwdVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
]

const activeVariants = ref<Set<SlideInFwdVariant>>(new Set())

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

// Center (1 pattern)
.variant-center.is-animating { @include anim.slide-in-fwd('center', 0.4s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.slide-in-fwd('top', 0.4s); }
.variant-right.is-animating { @include anim.slide-in-fwd('right', 0.4s); }
.variant-bottom.is-animating { @include anim.slide-in-fwd('bottom', 0.4s); }
.variant-left.is-animating { @include anim.slide-in-fwd('left', 0.4s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.slide-in-fwd('tr', 0.4s); }
.variant-br.is-animating { @include anim.slide-in-fwd('br', 0.4s); }
.variant-bl.is-animating { @include anim.slide-in-fwd('bl', 0.4s); }
.variant-tl.is-animating { @include anim.slide-in-fwd('tl', 0.4s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-slide-in-fwd {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
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
    color: #84cc16;
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
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
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
}
</style>
