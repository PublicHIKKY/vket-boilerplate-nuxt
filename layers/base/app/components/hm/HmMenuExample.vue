<template>
  <section class="hm-menu-example">
    <Menu
      as="div"
      class="menu-container"
    >
      <MenuButton class="button">
        Menu
      </MenuButton>
      <MenuItems class="menu-items">
        <MenuItem
          v-slot="{ active }"
          class="item"
        >
          <span :class="`span ${active ? '-active' : ''}`">Hello</span>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          class="item"
        >
          <span :class="`span ${active ? '-active' : ''}`">Howdy!</span>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          class="item"
        >
          <span :class="`span ${active ? '-active' : ''}`">Yo!</span>
        </MenuItem>
        <MenuItem
          disabled
          class="item -disable"
        >
          <span>:D</span>
        </MenuItem>
      </MenuItems>
    </Menu>
  </section>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<style lang="scss" scoped>
.menu-container {
  > .button {
    padding: 4px;
    border: solid 1px;
    border-radius: 8px;
  }

  > .menu-items {
    display: flex;
    flex-direction: column;
    padding: 8px 4px 8px 16px;
  }
}

.menu-items {
  > .item {
    padding: 4px;
    border: solid;
    border-color: #0ff;

    &.-active {
      border-color: #00f;
    }

    &.-disable {
      border: none;
    }
  }
}
</style>
