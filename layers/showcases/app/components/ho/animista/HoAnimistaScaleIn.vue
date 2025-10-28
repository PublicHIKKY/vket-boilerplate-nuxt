<template>
  <div class="ho-animista-scale-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Scale In Animations
    </h1>

    <p class="demo-description">
      15種類のスケール入場アニメーションのデモ。SCSS mixinで実装されています。
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

      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Variations (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['demo-box', 'variant-hor-center', { 'is-animating': activeVariants.has('hor-center') }]">
              hor-center
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-hor-left', { 'is-animating': activeVariants.has('hor-left') }]">
              hor-left
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-hor-right', { 'is-animating': activeVariants.has('hor-right') }]">
              hor-right
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Vertical Variations (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['demo-box', 'variant-ver-center', { 'is-animating': activeVariants.has('ver-center') }]">
              ver-center
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-ver-top', { 'is-animating': activeVariants.has('ver-top') }]">
              ver-top
            </div>
          </div>
          <div class="animation-item">
            <div :class="['demo-box', 'variant-ver-bottom', { 'is-animating': activeVariants.has('ver-bottom') }]">
              ver-bottom
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

type ScaleInVariant = 'center' | 'top' | 'tr' | 'right' | 'br' | 'bottom' | 'bl' | 'left' | 'tl' | 'hor-center' | 'hor-left' | 'hor-right' | 'ver-center' | 'ver-top' | 'ver-bottom'

const allVariants: ScaleInVariant[] = [
  'center',
  'top',
  'right',
  'bottom',
  'left',
  'tr',
  'br',
  'bl',
  'tl',
  'hor-center',
  'hor-left',
  'hor-right',
  'ver-center',
  'ver-top',
  'ver-bottom',
]

const activeVariants = ref<Set<ScaleInVariant>>(new Set())

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
.variant-center.is-animating { @include anim.scale-in('center', 0.5s); }

// Basic Directions (4 patterns)
.variant-top.is-animating { @include anim.scale-in('top', 0.5s); }
.variant-right.is-animating { @include anim.scale-in('right', 0.5s); }
.variant-bottom.is-animating { @include anim.scale-in('bottom', 0.5s); }
.variant-left.is-animating { @include anim.scale-in('left', 0.5s); }

// Diagonal Directions (4 patterns)
.variant-tr.is-animating { @include anim.scale-in('tr', 0.5s); }
.variant-br.is-animating { @include anim.scale-in('br', 0.5s); }
.variant-bl.is-animating { @include anim.scale-in('bl', 0.5s); }
.variant-tl.is-animating { @include anim.scale-in('tl', 0.5s); }

// Horizontal Variations (3 patterns)
.variant-hor-center.is-animating { @include anim.scale-in('hor-center', 0.5s); }
.variant-hor-left.is-animating { @include anim.scale-in('hor-left', 0.5s); }
.variant-hor-right.is-animating { @include anim.scale-in('hor-right', 0.5s); }

// Vertical Variations (3 patterns)
.variant-ver-center.is-animating { @include anim.scale-in('ver-center', 0.5s); }
.variant-ver-top.is-animating { @include anim.scale-in('ver-top', 0.5s); }
.variant-ver-bottom.is-animating { @include anim.scale-in('ver-bottom', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-scale-in {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
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
    color: #34d399;
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

  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
}
</style>
