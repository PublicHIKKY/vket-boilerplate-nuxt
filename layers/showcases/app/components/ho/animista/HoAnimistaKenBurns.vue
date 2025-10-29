<template>
  <div class="ho-animista-ken-burns">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Ken Burns Animations
    </h1>

    <p class="demo-description">
      8種類のケン・バーンズエフェクトアニメーションのデモ。背景画像のズーム＆パン効果をSCSSで実装しています。
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
          Ken Burns Effect (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                <span class="variant-label">TOP</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-right', { 'is-animating': activeVariants.has('top-right') }]">
                <span class="variant-label">TOP RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                <span class="variant-label">RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-right', { 'is-animating': activeVariants.has('bottom-right') }]">
                <span class="variant-label">BOTTOM RIGHT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                <span class="variant-label">BOTTOM</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-left', { 'is-animating': activeVariants.has('bottom-left') }]">
                <span class="variant-label">BOTTOM LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                <span class="variant-label">LEFT</span>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-left', { 'is-animating': activeVariants.has('top-left') }]">
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

type KenBurnsVariant = 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left'

const allVariants: KenBurnsVariant[] = ['top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left']

const isHoverMode = ref(false)
const activeVariants = ref<Set<KenBurnsVariant>>(new Set())

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
  .demo-box.variant-top { @include anim.ken-burns('top', 5s); }
  .demo-box.variant-top-right { @include anim.ken-burns('top-right', 5s); }
  .demo-box.variant-right { @include anim.ken-burns('right', 5s); }
  .demo-box.variant-bottom-right { @include anim.ken-burns('bottom-right', 5s); }
  .demo-box.variant-bottom { @include anim.ken-burns('bottom', 5s); }
  .demo-box.variant-bottom-left { @include anim.ken-burns('bottom-left', 5s); }
  .demo-box.variant-left { @include anim.ken-burns('left', 5s); }
  .demo-box.variant-top-left { @include anim.ken-burns('top-left', 5s); }
}

// Ken Burns Variations (8 patterns)
.variant-top.is-animating { @include anim.ken-burns('top', 5s); }
.variant-top-right.is-animating { @include anim.ken-burns('top-right', 5s); }
.variant-right.is-animating { @include anim.ken-burns('right', 5s); }
.variant-bottom-right.is-animating { @include anim.ken-burns('bottom-right', 5s); }
.variant-bottom.is-animating { @include anim.ken-burns('bottom', 5s); }
.variant-bottom-left.is-animating { @include anim.ken-burns('bottom-left', 5s); }
.variant-left.is-animating { @include anim.ken-burns('left', 5s); }
.variant-top-left.is-animating { @include anim.ken-burns('top-left', 5s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-ken-burns {
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
    color: #1f2937;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.hover-wrapper {
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

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-position: center;
  background-size: cover;

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
