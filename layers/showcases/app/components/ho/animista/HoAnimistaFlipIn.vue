<template>
  <div class="ho-animista-flip-in">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip In Animations
    </h1>

    <p class="demo-description">
      8種類のフリップ入場アニメーションのデモ。SCSS mixinで実装されています。
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
          Horizontal Flip (2 patterns)
        </h2>
        <div class="grid">
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
          Vertical Flip (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-left', { 'is-animating': activeVariants.has('ver-left') }]">
                ver-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-right', { 'is-animating': activeVariants.has('ver-right') }]">
                ver-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Diagonal Flip (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1-tr', { 'is-animating': activeVariants.has('diag-1-tr') }]">
                diag-1-tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-1-bl', { 'is-animating': activeVariants.has('diag-1-bl') }]">
                diag-1-bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2-tl', { 'is-animating': activeVariants.has('diag-2-tl') }]">
                diag-2-tl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-diag-2-br', { 'is-animating': activeVariants.has('diag-2-br') }]">
                diag-2-br
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

type FlipInVariant = 'hor-top' | 'hor-bottom' | 'ver-left' | 'ver-right' | 'diag-1-tr' | 'diag-1-bl' | 'diag-2-tl' | 'diag-2-br'

const allVariants: FlipInVariant[] = [
  'hor-top',
  'hor-bottom',
  'ver-left',
  'ver-right',
  'diag-1-tr',
  'diag-1-bl',
  'diag-2-tl',
  'diag-2-br',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipInVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
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
  .demo-box.variant-hor-top { @include anim.flip-in('hor-top', 0.5s); }
  .demo-box.variant-hor-bottom { @include anim.flip-in('hor-bottom', 0.5s); }
  .demo-box.variant-ver-left { @include anim.flip-in('ver-left', 0.5s); }
  .demo-box.variant-ver-right { @include anim.flip-in('ver-right', 0.5s); }
  .demo-box.variant-diag-1-tr { @include anim.flip-in('diag-1-tr', 0.5s); }
  .demo-box.variant-diag-1-bl { @include anim.flip-in('diag-1-bl', 0.5s); }
  .demo-box.variant-diag-2-tl { @include anim.flip-in('diag-2-tl', 0.5s); }
  .demo-box.variant-diag-2-br { @include anim.flip-in('diag-2-br', 0.5s); }
}

// Horizontal Flip (2 patterns)
.variant-hor-top.is-animating { @include anim.flip-in('hor-top', 0.5s); }
.variant-hor-bottom.is-animating { @include anim.flip-in('hor-bottom', 0.5s); }

// Vertical Flip (2 patterns)
.variant-ver-left.is-animating { @include anim.flip-in('ver-left', 0.5s); }
.variant-ver-right.is-animating { @include anim.flip-in('ver-right', 0.5s); }

// Diagonal Flip (4 patterns)
.variant-diag-1-tr.is-animating { @include anim.flip-in('diag-1-tr', 0.5s); }
.variant-diag-1-bl.is-animating { @include anim.flip-in('diag-1-bl', 0.5s); }
.variant-diag-2-tl.is-animating { @include anim.flip-in('diag-2-tl', 0.5s); }
.variant-diag-2-br.is-animating { @include anim.flip-in('diag-2-br', 0.5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flip-in {
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
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}
</style>
