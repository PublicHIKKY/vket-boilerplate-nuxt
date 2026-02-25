This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: layers/showcases/app/components/ho/animista/HoAnimistaFlipScale2.vue
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  showcases/
    app/
      components/
        ho/
          animista/
            HoAnimistaFlipScale2.vue
```

# Files

## File: layers/showcases/app/components/ho/animista/HoAnimistaFlipScale2.vue
```vue
<template>
  <div class="ho-animista-flip-scale-2">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Flip Scale 2 Animations
    </h1>

    <p class="demo-description">
      4種類のフリップ＋スケール＋移動アニメーションのデモ。SCSS mixinで実装されています。
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
          All Patterns (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'flip-card', 'variant-hor-top', { 'is-animating': activeVariants.has('hor-top') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-ver-right', { 'is-animating': activeVariants.has('ver-right') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-hor-bottom', { 'is-animating': activeVariants.has('hor-bottom') }]">
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
              <div :class="['demo-box', 'flip-card', 'variant-ver-left', { 'is-animating': activeVariants.has('ver-left') }]">
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

type FlipScale2Variant = 'hor-top' | 'ver-right' | 'hor-bottom' | 'ver-left'

const allVariants: FlipScale2Variant[] = [
  'hor-top',
  'ver-right',
  'hor-bottom',
  'ver-left',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<FlipScale2Variant>>(new Set())

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
// All Patterns (4 patterns)
// ============================================

.hover-wrapper.hover-mode:hover {
  .demo-box.flip-card.variant-hor-top { @include anim.flip-scale-2('hor-top', 0.4s); }
  .demo-box.flip-card.variant-ver-right { @include anim.flip-scale-2('ver-right', 0.4s); }
  .demo-box.flip-card.variant-hor-bottom { @include anim.flip-scale-2('hor-bottom', 0.4s); }
  .demo-box.flip-card.variant-ver-left { @include anim.flip-scale-2('ver-left', 0.4s); }
}

.variant-hor-top.is-animating { @include anim.flip-scale-2('hor-top', 0.5s); }

.variant-hor-top .front-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-top .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right.is-animating { @include anim.flip-scale-2('ver-right', 0.5s); }

.variant-ver-right .front-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-right .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom.is-animating { @include anim.flip-scale-2('hor-bottom', 0.5s); }

.variant-hor-bottom .front-text {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-hor-bottom .back-text {
  transform: rotateX(180deg);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left.is-animating { @include anim.flip-scale-2('ver-left', 0.5s); }

.variant-ver-left .front-text {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.variant-ver-left .back-text {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-flip-scale-2 {
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
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
```
