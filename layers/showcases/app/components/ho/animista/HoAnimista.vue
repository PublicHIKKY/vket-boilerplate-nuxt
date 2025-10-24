<i18n lang="yaml">
ja:
  title: Animista
  description: Animista由来のCSSアニメーションデモ集
  animations:
    title: アニメーション一覧
    scaleUp:
      name: Scale Up
      description: スケールアップアニメーション（15パターン）
    scaleDown:
      name: Scale Down
      description: スケールダウンアニメーション（15パターン）
    rotate:
      name: Rotate
      description: 回転アニメーション（4パターン）
    rotateScale:
      name: Rotate Scale
      description: 回転＋スケールアニメーション（6パターン）
    rotate90:
      name: Rotate 90°
      description: 90度回転アニメーション（8パターン）
    flip:
      name: Flip
      description: フリップアニメーション（4パターン）
en:
  title: Animista
  description: CSS animation demos from Animista
  animations:
    title: Animation List
    scaleUp:
      name: Scale Up
      description: Scale up animations (15 patterns)
    scaleDown:
      name: Scale Down
      description: Scale down animations (15 patterns)
    rotate:
      name: Rotate
      description: Rotate animations (4 patterns)
    rotateScale:
      name: Rotate Scale
      description: Rotate scale animations (6 patterns)
    rotate90:
      name: Rotate 90°
      description: 90° rotation animations (8 patterns)
    flip:
      name: Flip
      description: Flip animations (4 patterns)
</i18n>

<template>
  <div class="ho-animista">
    <div class="container">
      <!-- ヘッダー -->
      <div class="header-controls">
        <button
          class="back-button"
          @click="emit('back')"
        >
          ← Back
        </button>
      </div>

      <header class="header">
        <h1 class="title">
          {{ t('title') }}
        </h1>
        <p class="description">
          {{ t('description') }}
        </p>
      </header>

      <!-- タブナビゲーション -->
      <nav class="tab-navigation">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="['tab-button', { active: currentView === tab.value }]"
          @click="handleSelectAnimation(tab.value)"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-label">{{ t(`animations.${tab.key}.name`) }}</span>
        </button>
      </nav>
    </div>

    <!-- アニメーション詳細 -->
    <HoAnimistaScaleUp
      v-if="currentView === 'scale-up'"
      @back="handleBackToList"
    />
    <HoAnimistaScaleDown
      v-else-if="currentView === 'scale-down'"
      @back="handleBackToList"
    />
    <HoAnimistaRotate
      v-else-if="currentView === 'rotate'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateScale
      v-else-if="currentView === 'rotate-scale'"
      @back="handleBackToList"
    />
    <HoAnimistaRotate90
      v-else-if="currentView === 'rotate-90'"
      @back="handleBackToList"
    />
    <HoAnimistaFlip
      v-else-if="currentView === 'flip'"
      @back="handleBackToList"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  back: []
}>()

type ViewType = 'scale-up' | 'scale-down' | 'rotate' | 'rotate-scale' | 'rotate-90' | 'flip'

const currentView = ref<ViewType>('scale-up')

const tabs = [
  { value: 'scale-up', key: 'scaleUp', icon: '📐' },
  { value: 'scale-down', key: 'scaleDown', icon: '🔽' },
  { value: 'rotate', key: 'rotate', icon: '🔄' },
  { value: 'rotate-scale', key: 'rotateScale', icon: '↩️' },
  { value: 'rotate-90', key: 'rotate90', icon: '⤴️' },
  { value: 'flip', key: 'flip', icon: '🔃' },
] as const

const handleSelectAnimation = (animationType: string) => {
  currentView.value = animationType as ViewType
}

const handleBackToList = () => {
  currentView.value = 'scale-up'
}
</script>

<style lang="scss" scoped>
.ho-animista {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-controls {
  margin-bottom: 24px;
}

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

.header {
  margin-bottom: 60px;
  text-align: center;
}

.title {
  margin-bottom: 16px;

  font-size: 48px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.description {
  font-size: 20px;
  color: rgb(255 255 255 / 90%);
}

.section {
  margin-bottom: 60px;
}

.section-title {
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.animation-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.animation-card {
  cursor: pointer;

  display: flex;
  gap: 20px;
  align-items: center;

  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;

  font-family: inherit;
  color: inherit;
  text-align: left;
  text-decoration: none;

  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
  }
}

.card-icon {
  flex-shrink: 0;
  font-size: 40px;
}

.card-content {
  flex: 1;
}

.card-title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
}

.card-description {
  font-size: 14px;
  color: #6b7280;
}

.card-arrow {
  flex-shrink: 0;
  font-size: 24px;
  color: #9ca3af;
  transition: transform 0.3s ease;

  .animation-card:hover & {
    transform: translateX(4px);
  }
}

.tab-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;

  margin-bottom: 40px;
}

.tab-button {
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  padding: 12px 24px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(255 255 255 / 10%);
    box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
  }

  &.active {
    color: #667eea;
    background: white;
    box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
  }
}

.tab-icon {
  font-size: 20px;
}

.tab-label {
  font-weight: inherit;
}
</style>
