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
      description: フリップアニメーション（16パターン）
    flip2:
      name: Flip 2
      description: フリップ＋移動アニメーション（16パターン）
    flipScale:
      name: Flip Scale
      description: フリップ＋スケールアニメーション（8パターン）
    flipScale2:
      name: Flip Scale 2
      description: フリップ＋スケール＋移動アニメーション（4パターン）
    swing:
      name: Swing
      description: スイングアニメーション（16パターン）
    slide:
      name: Slide
      description: スライドアニメーション（9パターン）
    slideBck:
      name: Slide Backward
      description: スライド後方アニメーション（9パターン）
    slideFwd:
      name: Slide Forward
      description: スライド前方アニメーション（9パターン）
    slideRotate:
      name: Slide Rotate
      description: スライド＋回転アニメーション（12パターン）
    shadowDrop:
      name: Shadow Drop
      description: シャドウ出現アニメーション（11パターン）
    shadowDrop2:
      name: Shadow Drop 2
      description: シャドウ＋Z軸移動アニメーション（11パターン）
    shadowPop:
      name: Shadow Pop
      description: レイヤードシャドウアニメーション（4パターン）
    shadowInset:
      name: Shadow Inset
      description: 内側シャドウアニメーション（11パターン）
    scaleIn:
      name: Scale In
      description: スケール入場アニメーション（15パターン）
    rotateIn:
      name: Rotate In
      description: 回転入場アニメーション（13パターン）
    rotateIn2:
      name: Rotate In 2
      description: 回転＋Z軸入場アニメーション（14パターン）
    swirlIn:
      name: Swirl In
      description: スワール入場アニメーション（18パターン）
    flipIn:
      name: Flip In
      description: フリップ入場アニメーション（8パターン）
    slitIn:
      name: Slit In
      description: スリット入場アニメーション（4パターン）
    bounceIn:
      name: Bounce In
      description: バウンス入場アニメーション（6パターン）
    fadeIn:
      name: Fade In
      description: フェード入場アニメーション（11パターン）
    flickerIn:
      name: Flicker In
      description: フリッカー入場アニメーション（2パターン）
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
      description: Rotate animations (21 patterns)
    rotateScale:
      name: Rotate Scale
      description: Rotate scale animations (10 patterns)
    rotate90:
      name: Rotate 90°
      description: 90° rotation animations (8 patterns)
    flip:
      name: Flip
      description: Flip animations (16 patterns)
    flip2:
      name: Flip 2
      description: Flip + translation animations (16 patterns)
    flipScale:
      name: Flip Scale
      description: Flip + scale animations (8 patterns)
    flipScale2:
      name: Flip Scale 2
      description: Flip + scale + translation animations (4 patterns)
    swing:
      name: Swing
      description: Swing animations (16 patterns)
    slide:
      name: Slide
      description: Slide animations (9 patterns)
    slideBck:
      name: Slide Backward
      description: Slide backward animations (9 patterns)
    slideFwd:
      name: Slide Forward
      description: Slide forward animations (9 patterns)
    slideRotate:
      name: Slide Rotate
      description: Slide + rotation animations (12 patterns)
    shadowDrop:
      name: Shadow Drop
      description: Shadow drop animations (11 patterns)
    shadowDrop2:
      name: Shadow Drop 2
      description: Shadow drop + Z-axis animations (11 patterns)
    shadowPop:
      name: Shadow Pop
      description: Layered shadow pop animations (4 patterns)
    shadowInset:
      name: Shadow Inset
      description: Inset shadow animations (11 patterns)
    scaleIn:
      name: Scale In
      description: Scale entrance animations (15 patterns)
    rotateIn:
      name: Rotate In
      description: Rotate entrance animations (13 patterns)
    rotateIn2:
      name: Rotate In 2
      description: Rotate + Z-axis entrance animations (14 patterns)
    swirlIn:
      name: Swirl In
      description: Swirl entrance animations (18 patterns)
    flipIn:
      name: Flip In
      description: Flip entrance animations (8 patterns)
    slitIn:
      name: Slit In
      description: Slit entrance animations (4 patterns)
    bounceIn:
      name: Bounce In
      description: Bounce entrance animations (6 patterns)
    fadeIn:
      name: Fade In
      description: Fade entrance animations (11 patterns)
    flickerIn:
      name: Flicker In
      description: Flicker entrance animations (2 patterns)
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
    <HoAnimistaFlip2
      v-else-if="currentView === 'flip-2'"
      @back="handleBackToList"
    />
    <HoAnimistaFlipScale
      v-else-if="currentView === 'flip-scale'"
      @back="handleBackToList"
    />
    <HoAnimistaFlipScale2
      v-else-if="currentView === 'flip-scale-2'"
      @back="handleBackToList"
    />
    <HoAnimistaSwing
      v-else-if="currentView === 'swing'"
      @back="handleBackToList"
    />
    <HoAnimistaSlide
      v-else-if="currentView === 'slide'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideBck
      v-else-if="currentView === 'slide-bck'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideFwd
      v-else-if="currentView === 'slide-fwd'"
      @back="handleBackToList"
    />
    <HoAnimistaSlideRotate
      v-else-if="currentView === 'slide-rotate'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowDrop
      v-else-if="currentView === 'shadow-drop'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowDrop2
      v-else-if="currentView === 'shadow-drop-2'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowPop
      v-else-if="currentView === 'shadow-pop'"
      @back="handleBackToList"
    />
    <HoAnimistaShadowInset
      v-else-if="currentView === 'shadow-inset'"
      @back="handleBackToList"
    />
    <HoAnimistaScaleIn
      v-else-if="currentView === 'scale-in'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateIn
      v-else-if="currentView === 'rotate-in'"
      @back="handleBackToList"
    />
    <HoAnimistaRotateIn2
      v-else-if="currentView === 'rotate-in-2'"
      @back="handleBackToList"
    />
    <HoAnimistaSwirlIn
      v-else-if="currentView === 'swirl-in'"
      @back="handleBackToList"
    />
    <HoAnimistaFlipIn
      v-else-if="currentView === 'flip-in'"
      @back="handleBackToList"
    />
    <HoAnimistaSlitIn
      v-else-if="currentView === 'slit-in'"
      @back="handleBackToList"
    />
    <HoAnimistaBounceIn
      v-else-if="currentView === 'bounce-in'"
      @back="handleBackToList"
    />
    <HoAnimistaFadeIn
      v-else-if="currentView === 'fade-in'"
      @back="handleBackToList"
    />
    <HoAnimistaFlickerIn
      v-else-if="currentView === 'flicker-in'"
      @back="handleBackToList"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  back: []
}>()

type ViewType = 'scale-up' | 'scale-down' | 'rotate' | 'rotate-scale' | 'rotate-90' | 'flip' | 'flip-2' | 'flip-scale' | 'flip-scale-2' | 'swing' | 'slide' | 'slide-bck' | 'slide-fwd' | 'slide-rotate' | 'shadow-drop' | 'shadow-drop-2' | 'shadow-pop' | 'shadow-inset' | 'scale-in' | 'rotate-in' | 'rotate-in-2' | 'swirl-in' | 'flip-in' | 'slit-in' | 'bounce-in' | 'fade-in' | 'flicker-in'

const currentView = ref<ViewType>('scale-up')

const tabs = [
  { value: 'scale-up', key: 'scaleUp', icon: '📐' },
  { value: 'scale-down', key: 'scaleDown', icon: '🔽' },
  { value: 'rotate', key: 'rotate', icon: '🔄' },
  { value: 'rotate-scale', key: 'rotateScale', icon: '↩️' },
  { value: 'rotate-90', key: 'rotate90', icon: '⤴️' },
  { value: 'flip', key: 'flip', icon: '🔃' },
  { value: 'flip-2', key: 'flip2', icon: '🔂' },
  { value: 'flip-scale', key: 'flipScale', icon: '🔀' },
  { value: 'flip-scale-2', key: 'flipScale2', icon: '🔁' },
  { value: 'swing', key: 'swing', icon: '⚖️' },
  { value: 'slide', key: 'slide', icon: '➡️' },
  { value: 'slide-bck', key: 'slideBck', icon: '⬅️' },
  { value: 'slide-fwd', key: 'slideFwd', icon: '⤴️' },
  { value: 'slide-rotate', key: 'slideRotate', icon: '🔃' },
  { value: 'shadow-drop', key: 'shadowDrop', icon: '💧' },
  { value: 'shadow-drop-2', key: 'shadowDrop2', icon: '💦' },
  { value: 'shadow-pop', key: 'shadowPop', icon: '⭐' },
  { value: 'shadow-inset', key: 'shadowInset', icon: '🔲' },
  { value: 'scale-in', key: 'scaleIn', icon: '📏' },
  { value: 'rotate-in', key: 'rotateIn', icon: '🔄' },
  { value: 'rotate-in-2', key: 'rotateIn2', icon: '🌀' },
  { value: 'swirl-in', key: 'swirlIn', icon: '🌪️' },
  { value: 'flip-in', key: 'flipIn', icon: '🔃' },
  { value: 'slit-in', key: 'slitIn', icon: '✂️' },
  { value: 'bounce-in', key: 'bounceIn', icon: '🎾' },
  { value: 'fade-in', key: 'fadeIn', icon: '👻' },
  { value: 'flicker-in', key: 'flickerIn', icon: '✨' },
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
