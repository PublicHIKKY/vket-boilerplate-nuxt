<template>
  <ul class="tablist">
    <li
      v-for="(value, key) in tabStatus"
      :key="key"
      role="presentation"
      class="item"
    >
      <button
        :id="'tab' + key"
        class="tab"
        role="tab"
        :aria-expanded="value"
        :aria-controls="'panel' + key"
        @click="changeTab(key)"
      >
        <slot :name="'tab' + key" />
      </button>
    </li>
  </ul>
  <div
    class="panel-container"
    role="presentation"
  >
    <div
      v-for="(value, key) in tabStatus"
      :id="'panel' + key"
      :key="key"
      class="tabpanel"
      role="tabpanel"
      :aria-labelledby="'tab' + key"
      :aria-hidden="!value"
    >
      <slot :name="'panel' + key" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  amount: number
}>()
// タブのindexと開閉状態を表すbooleanを格納するオブジェクトのためのrefで、props.amountの数だけオブジェクトを作る
const tabStatus = ref(range(0, props.amount - 1).map((_, i) => i === 1))

// タブをクリックしたとき、クリックしたタブのindexと一致するパネルの表示状態がtrueになるようにする
const changeTab = (index: number): void => {
  for (const i of range(0, tabStatus.value.length - 1)) {
    tabStatus.value[i] = false
  }
  tabStatus.value[index] = true
}
</script>

<style scoped lang="scss">
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.panel-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.tabpanel {
  display: none;
  grid-area: 1 / 1 / 2 / 2;
  opacity: 0;
  transition: opacity 0.3s, display 0.3s;
  transition-behavior: allow-discrete; // display:block -> noneにdurationを効かせる(transitionのショートハンドで上書きされないようにtransitionより下に書く)
  &[aria-hidden='false'] {
    display: block;
    opacity: 1;
    transition: opacity 0.3s, display 0.3s;
    transition-behavior: allow-discrete; // display:block -> noneにdurationを効かせる(transitionのショートハンドで上書きされないようにtransitionより下に書く)
  }
}
</style>
