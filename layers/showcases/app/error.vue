<i18n lang="yaml">
ja:
  title: "エラーが発生しました"
  back_home: "ホームに戻る"
  back_previous: "前のページに戻る"
  error_404: "ページが見つかりません"
  error_500: "サーバーエラー"
  error_other: "予期しないエラー"
  description_404: "お探しのページは見つかりませんでした。URLをご確認いただくか、ホームページに戻ってもう一度お試しください。"
  description_500: "サーバーに問題が発生しています。しばらく時間をおいてから再度お試しください。"
  description_other: "申し訳ございませんが、予期しないエラーが発生しました。"
  details: "エラー内容"
en:
  title: "An error occurred"
  back_home: "Back to Home"
  back_previous: "Go Back"
  error_404: "Page Not Found"
  error_500: "Server Error"
  error_other: "Unexpected Error"
  description_404: "The page you are looking for could not be found. Please check the URL or return to the home page and try again."
  description_500: "There is a problem with the server. Please try again after some time."
  description_other: "We apologize, but an unexpected error has occurred."
  details: "Error Details"
</i18n>

<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-icon">
        <div class="error-code">
          {{ error.statusCode }}
        </div>
      </div>

      <h1 class="error-title">
        {{ getErrorTitle() }}
      </h1>

      <p class="error-description">
        {{ getErrorDescription() }}
      </p>

      <div class="error-actions">
        <button
          class="error-button -primary"
          @click="handleClearError"
        >
          {{ t('back_home') }}
        </button>

        <button
          class="error-button -secondary"
          @click="goBack"
        >
          {{ t('back_previous') }}
        </button>
      </div>

      <div class="error-details">
        <details v-if="error.message">
          <summary>{{ t('details') }}</summary>
          <pre class="error-message">{{ error.message }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const { t } = useI18n()

const getErrorTitle = (): string => {
  if (props.error.statusCode === 404) {
    return t('error_404')
  }
  if (props.error.statusCode === 500) {
    return t('error_500')
  }
  return t('error_other')
}

const getErrorDescription = (): string => {
  if (props.error.statusCode === 404) {
    return t('description_404')
  }
  if (props.error.statusCode === 500) {
    return t('description_500')
  }
  return t('description_other')
}

const handleClearError = async (): Promise<void> => {
  await clearError({ redirect: '/' })
}

const goBack = async (): Promise<void> => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    await navigateTo('/')
  }
}
</script>

<style scoped lang="scss">
@use '#showcases/app/assets/styles/variables' as v;
@use '#showcases/app/assets/styles/mixins' as m;

.error-page {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: v.space(4);

  color: #333;

  background-color: #f8f9fa;
}

.error-container {
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.error-icon {
  margin-bottom: v.space(6);
}

.error-code {
  display: inline-block;

  width: 120px;
  height: 120px;
  margin: 0 auto v.space(4);
  border: 4px solid #dc3545;
  border-radius: 50%;

  font-size: 48px;
  font-weight: bold;
  line-height: 112px;
  color: #dc3545;

  background-color: rgba(#dc3545, 0.1);

  @include m.sp {
    width: 80px;
    height: 80px;
    font-size: 32px;
    line-height: 72px;
  }
}

.error-title {
  margin-bottom: v.space(4);
  font-size: 32px;
  font-weight: bold;
  color: #212529;

  @include m.sp {
    font-size: 24px;
  }
}

.error-description {
  margin-bottom: v.space(8);
  font-size: 16px;
  line-height: 1.6;
  color: #6c757d;

  @include m.sp {
    margin-bottom: v.space(6);
    font-size: 14px;
  }
}

.error-actions {
  display: flex;
  gap: v.space(4);
  justify-content: center;
  margin-bottom: v.space(8);

  @include m.sp {
    flex-direction: column;
    align-items: center;
  }
}

.error-button {
  cursor: pointer;

  padding: v.space(3) v.space(6);
  border: 2px solid transparent;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  transition: all 0.3s ease;

  @include m.sp {
    width: 100%;
    max-width: 280px;
  }

  &.-primary {
    border-color: #007bff;
    color: #fff;
    background-color: #007bff;

    @include m.hover {
      border-color: #0056b3;
      background-color: #0056b3;
    }
  }

  &.-secondary {
    border-color: #6c757d;
    color: #6c757d;
    background-color: transparent;

    @include m.hover {
      color: #fff;
      background-color: #6c757d;
    }
  }
}

.error-details {
  margin-top: v.space(6);
  text-align: left;

  details {
    padding: v.space(2);
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: #fff;

    summary {
      cursor: pointer;
      margin-bottom: v.space(2);
      font-weight: 500;
      color: #007bff;

      @include m.hover {
        color: #0056b3;
      }
    }
  }
}

.error-message {
  overflow-x: auto;

  padding: v.space(3);
  border-radius: 4px;

  font-family: monospace;
  font-size: 12px;
  line-height: 1.4;
  color: #495057;

  background-color: #f8f9fa;

  @include m.sp {
    font-size: 11px;
  }
}
</style>
