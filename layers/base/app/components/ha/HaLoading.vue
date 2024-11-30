<template>
  <div
    v-if="loading"
    class="ha-loading"
  >
    <template v-if="cover">
      <div class="cover" />
    </template>
    <div class="loader spinner-container">
      <svg
        class="spinner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 70"
        width="120px"
        height="120px"
      >
        <path
          d="M65,35c0-16.57-13.43-30-30-30S5,18.43,5,35H0C0,15.67,15.67,0,35,0s35,15.67,35,35h-5Z"
          style="fill: #0583f2"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0,35,35"
            to="360,35,35"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    manual?: boolean
    cover?: boolean
  }>(),
  {
    manual: false,
    cover: false,
  },
)

// ここでの `manual` とは auto start の意味であり、Nuxtのloading機能を使わず
// 自前で（外側からv-ifを使って）loadingを出すためのもの
const loading = ref(props.manual)
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.ha-loading {
  align-items: center;
  background: rgb(0 0 0 / 70%);
  display: flex;
  height: 100vh;
  inset: 0;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: v.$zindex-loading;

  > .cover {
    background-color: v.$white;
    height: 100vh;
    position: absolute;
    width: 100vw;
  }
}

.spinner-container {
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: center;
  margin: auto;
  width: 120px;

  > .spinner {
    display: block;
    height: 120px;
    margin: auto;
    max-height: 50%;
    max-width: 50%;
    width: 120px;
  }
}
</style>
