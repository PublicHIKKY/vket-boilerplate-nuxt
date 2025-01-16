<i18n lang="yaml">
ja:
  next: 次へ
  prev: 前へ
en:
  next: Next
  prev: Prev
</i18n>

<template>
  <nav
    aria-label="Pagination Navigation"
    class="pagination"
  >
    <!-- 前へ -->
    <HaLink
      :to="$route.path"
      :query="{ page: String(currentPage - 1) }"
      class="pagination-prev"
      :class="{
        ['link-disabled text-disabled']: currentPage <= 1,
      }"
      :aria-disabled="currentPage >= totalPages"
      @click="goToPage(currentPage - 1)"
    >
      <slot name="prev-icon">
        &lt;
      </slot>
      {{ i18n.t('prev') }}
    </HaLink>
    <!-- 各ページへのリンク表示 -->
    <ul class="pagination-list">
      <li
        v-for="(page, i) in pages"
        :key="`${page}_${i}`"
        :aria-disabled="currentPage == page"
        @click="goToPage(Number(page))"
      >
        <HaLink
          class="pagination-item"
          :class="{
            ['link-disabled active']: currentPage == page,
            ['link-disabled ellipsis']: page == '...',
          }"
          :to="route.path"
          :query="createPageQuery(Number(page))"
        >
          {{ page }}
        </HaLink>
      </li>
    </ul>
    <!-- 次へ -->
    <HaLink
      :to="route.path"
      :query="createPageQuery(currentPage + 1)"
      class="pagination-next"
      :class="{ ['link-disabled']: currentPage >= totalPages }"
      :aria-disabled="currentPage >= totalPages"
      @click="goToPage(currentPage + 1)"
    >
      {{ i18n.t('next') }}
      <slot name="next-icon">
        &gt;
      </slot>
    </HaLink>
  </nav>
</template>

<script lang="ts" setup>
import { Paging } from '#base/app/utils/response'

export type PageChangedEventObject = {
  page: number // 新しいページ番号
  offset: number // 新しいページのオフセット
}

const i18n = useI18n()
const route = useRoute()

const props = withDefaults(
  defineProps<{
    paging: Paging
    totalVisible?: number
    ellipsis?: string
  }>(),
  {
    totalVisible: 7,
    ellipsis: '...',
  },
)

const emit = defineEmits<{
  (e: 'changed', paging: PageChangedEventObject): void
}>()

const currentPage = computed(
  () => Math.ceil(props.paging.offset / props.paging.limit) + 1,
)
const totalPages = computed(() =>
  Math.ceil(props.paging.total / props.paging.limit),
)

const createPageQuery = (page: number) => {
  return { ...route.query, page: page.toString() }
}

const createRange = (length: number, start = 0): number[] => {
  return Array.from({ length }, (_, i) => start + i)
}

/*
 * 表示すべきページ番号の配列を作成 ( ロジックの大元はVuetifyライブラリのPaginationコンポーネント参考 )
 * https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VPagination/VPagination.tsx
 */
const pages = computed(() => {
  if (
    totalPages.value <= 0
    || isNaN(totalPages.value)
    || isNaN(currentPage.value)
    || totalPages.value > Number.MAX_SAFE_INTEGER
  )
    return []

  if (props.totalVisible <= 0) return []
  if (props.totalVisible === 1) return [currentPage.value]
  if (totalPages.value <= props.totalVisible) {
    return createRange(totalPages.value, 1)
  }

  // 表示するページ数とellipsisの合計数量を固定するためのロジック ( これがないとページ遷移のたびにページボタンの位置がずれて使いにくい )
  const even = props.totalVisible % 2 === 0
  const middle = even
    ? props.totalVisible / 2
    : Math.floor(props.totalVisible / 2)
  const left = even ? middle : middle + 1
  const right = totalPages.value - middle

  if (left - currentPage.value >= 0) {
    return [
      ...createRange(Math.max(1, props.totalVisible - 1), 1),
      props.ellipsis,
      totalPages.value,
    ]
  } else if (currentPage.value - right >= (even ? 1 : 0)) {
    const rangeLength = props.totalVisible - 1
    const rangeStart = totalPages.value - rangeLength + 1
    return [1, props.ellipsis, ...createRange(rangeLength, rangeStart)]
  } else {
    const rangeLength = Math.max(1, props.totalVisible - 3)
    const rangeStart
      = rangeLength === 1
        ? currentPage.value
        : currentPage.value - Math.ceil(rangeLength / 2) + 1
    return [
      1,
      props.ellipsis,
      ...createRange(rangeLength, rangeStart),
      props.ellipsis,
      totalPages.value,
    ]
  }
})

// ページ番号がクリックされた時に実行される関数
const goToPage = (page: number) => {
  // 有効なページ番号の時のみ処理を行う
  if (page >= 1 && page <= totalPages.value) {
    const newOffset = (page - 1) * props.paging.limit
    emit('changed', { page, offset: newOffset })
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.pagination {
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;

  .link-disabled {
    cursor: default;
    pointer-events: none;
  }

  .pagination-prev,
  .pagination-next {
    align-items: center;
    color: v.$base-font-color;
    cursor: pointer;
    display: flex;
    height: 32px;
    padding: 4px 8px;
    user-select: none;
    width: auto;

    :deep(svg path) {
      fill: v.$base-font-color;
    }

    &.text-disabled {
      color: v.$button-disabled-color;

      :deep(svg path) {
        fill: v.$button-disabled-color;
      }
    }

    &:hover {
      color: v.$primary-button-default-color;

      :deep(svg path) {
        fill: v.$primary-button-default-color;
      }
    }
  }

  .pagination-list {
    display: flex;
    gap: 4px;
    list-style: none;
    padding: 0;
    user-select: none;

    .pagination-item {
      align-items: center;
      background: v.$white;
      border-radius: 50%;
      color: v.$base-font-color;
      cursor: pointer;
      display: flex;
      height: 30px;
      justify-content: center;
      width: 30px;

      &.active {
        background-color: v.$primary-button-default-color;
        color: v.$white;
        font-weight: bold;
      }

      &:hover:not(.active) {
        background-color: v.$primary-button-default-color;
        color: v.$white;
      }

      &.ellipsis {
        align-items: center;
        background: none;
        display: flex;
        justify-content: center;
        pointer-events: none;
        width: 30px;
      }
    }
  }
}
</style>
