<!-- NOTE: 既存コンポーネントのため、現在のディレクトリルールに沿ってリファクタリングをする -->
<i18n lang="yaml">
ja:
  title: ページタイトル
  description: ページの説明文
  section:
    title: セクションタイトル
    button: アクション
en:
  title: Page Title
  description: Page description
  section:
    title: Section Title
    button: Action
</i18n>

<template>
  <div class="ht-component-name">
    <div class="page-title">
      {{ i18n.t('title') }}
    </div>
    <div class="page-description">
      {{ i18n.t('description') }}
    </div>

    <div class="content">
      <template v-if="state.loading">
        <HoContentLoading />
      </template>
      <template v-else-if="state.error">
        <div class="error">
          {{ state.error.message }}
        </div>
      </template>
      <template v-else>
        <div class="section">
          <p class="section-title">
            {{ i18n.t('section.title') }}
          </p>

          <!-- Use organism components here -->
          <HoComponentExample />

        <div class="button-area">
          <HoCommonButton
            color="primary"
            class="button"
            @click="onAction"
          >
            <span class="text">{{ i18n.t('section.button') }}</span>
          </HoCommonButton>
        </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composables
// import { useFeature } from '@/composables/useFeature'

const i18n = useI18n()
// const { data, updateData } = useFeature()

// State
const state = reactive({
  loading: false,
  error: null as Error | null,
})

// Methods
const onAction = async () => {
  try {
    state.loading = true
    // Implement your logic here
  } catch (error) {
    state.error = error as Error
  } finally {
    state.loading = false
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.ht-component-name {
  > .page-title {
    font-size: v.size-per-vw(40);
    font-weight: 700;
    margin-bottom: v.space(4);
  }

  > .page-description {
    font-size: v.size-per-vw(16);
    color: v.$secondary-color-3;
    margin-bottom: v.space(8);
  }

  > .content {
    > .section {
      margin-bottom: v.space(8);

      > .section-title {
        font-size: v.size-per-vw(24);
        font-weight: 700;
        margin-bottom: v.space(4);
      }

      > .button-area {
        margin-top: v.space(6);
        display: flex;
        justify-content: center;

        > .button {
          > .text {
            font-size: v.size-per-vw(18);
            font-weight: bold;
          }
        }
      }
    }
  }

  @include m.sp {
    > .page-title {
      font-size: v.size-per-vw(32);
    }

    > .content {
      > .section {
        margin-bottom: v.space(6);
      }
    }
  }
}
</style>
