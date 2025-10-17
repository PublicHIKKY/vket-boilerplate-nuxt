<template>
  <NuxtLayout>
    <div class="animation-demo">
      <h1 class="demo-title">
        SCSS Mixin - Scale Up Demo
      </h1>

      <HmButton class="test">
        テスト
      </HmButton>

      <div class="demo-controls">
        <button
          class="replay-button"
          @click="replayAll"
        >
          🔄 Replay All
        </button>
      </div>

      <div class="animation-grid">
        <!-- Basic Directions -->
        <div class="animation-section">
          <h2 class="section-title">
            Basic Directions (9 patterns)
          </h2>
          <div class="grid">
            <div
              v-for="variant in basicVariants"
              :key="variant"
              class="animation-item"
            >
              <div
                :class="['demo-box', `variant-${variant}`, { 'is-animating': activeVariants.has(variant) }]"
              >
                {{ variant }}
              </div>
            </div>
          </div>
        </div>

        <!-- Horizontal Scaling -->
        <div class="animation-section">
          <h2 class="section-title">
            Horizontal Scaling (3 patterns)
          </h2>
          <div class="grid">
            <div
              v-for="variant in horizontalVariants"
              :key="variant"
              class="animation-item"
            >
              <div
                :class="['demo-box', `variant-${variant}`, { 'is-animating': activeVariants.has(variant) }]"
              >
                {{ variant }}
              </div>
            </div>
          </div>
        </div>

        <!-- Vertical Scaling -->
        <div class="animation-section">
          <h2 class="section-title">
            Vertical Scaling (3 patterns)
          </h2>
          <div class="grid">
            <div
              v-for="variant in verticalVariants"
              :key="variant"
              class="animation-item"
            >
              <div
                :class="['demo-box', `variant-${variant}`, { 'is-animating': activeVariants.has(variant) }]"
              >
                {{ variant }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NuxtRouteAnnouncer />
  </NuxtLayout>
</template>

<script setup lang="ts">
type ScaleUpVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'hor-center'
    | 'hor-left'
    | 'hor-right'
    | 'ver-center'
    | 'ver-top'
    | 'ver-bottom'

const basicVariants: ScaleUpVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const horizontalVariants: ScaleUpVariant[] = [
  'hor-center',
  'hor-left',
  'hor-right',
]

const verticalVariants: ScaleUpVariant[] = [
  'ver-center',
  'ver-top',
  'ver-bottom',
]

// アニメーション中のバリアントを管理
const activeVariants = ref<Set<ScaleUpVariant>>(new Set())

const replayAll = async () => {
  // 一旦全てクリア
  activeVariants.value.clear()

  await nextTick()

  const allVariants: ScaleUpVariant[] = [
    ...basicVariants,
    ...horizontalVariants,
    ...verticalVariants,
  ]

  // 各要素を順番にアニメーション
  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

// 初回表示時に全てアニメーション
onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations' as anim;

.test {
  @include anim.scale-up-hover('center');
}

.animation-demo {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.demo-title {
  margin-bottom: 20px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
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

  &:active {
    transform: translateY(0);
  }
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

  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  // 各バリアントごとのアニメーション設定
  &.is-animating {
    // Basic Directions
    &.variant-center { @include anim.scale-up('center', 0.5s); }
    &.variant-top { @include anim.scale-up('top', 0.5s); }
    &.variant-tr { @include anim.scale-up('tr', 0.5s); }
    &.variant-right { @include anim.scale-up('right', 0.5s); }
    &.variant-br { @include anim.scale-up('br', 0.5s); }
    &.variant-bottom { @include anim.scale-up('bottom', 0.5s); }
    &.variant-bl { @include anim.scale-up('bl', 0.5s); }
    &.variant-left { @include anim.scale-up('left', 0.5s); }
    &.variant-tl { @include anim.scale-up('tl', 0.5s); }

    // Horizontal
    &.variant-hor-center { @include anim.scale-up('hor-center', 0.5s); }
    &.variant-hor-left { @include anim.scale-up('hor-left', 0.5s); }
    &.variant-hor-right { @include anim.scale-up('hor-right', 0.5s); }

    // Vertical
    &.variant-ver-center { @include anim.scale-up('ver-center', 0.5s); }
    &.variant-ver-top { @include anim.scale-up('ver-top', 0.5s); }
    &.variant-ver-bottom { @include anim.scale-up('ver-bottom', 0.5s); }
  }
}
</style>
