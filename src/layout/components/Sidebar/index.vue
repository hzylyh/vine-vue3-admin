<script setup lang="ts">
import {Component, computed, h, onMounted, ref, watch} from "vue";
import {NIcon, NMenu} from "naive-ui";
import {RouterLink} from "vue-router";
import {MenuOption} from 'naive-ui'
import router from "@/router";

const props = defineProps<{routes: MenuOption[]}>()

// const isCollapse = computed(() => appStore.sidebar.collapsed)
const activeMenu = computed(() => router.currentRoute.value.name as string)
// const

// 组件需要解决的问题
// 1. 菜单项获取
// 2. 导航跟另外的tab页签的联动，也就是通信问题
// 3. 导航栏的展开与收起

onMounted(() => {
  console.log(props.routes)
  console.log(router.currentRoute)
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}


function renderMenuLabel(option: MenuOption) {
  if ('type' in option) {
    if (option['type'] === 'route') {
      return h(
          RouterLink,
          {
            to: {
              name: option.name
            }
          },
          {default: () => option.label as string}
      )
    } else if (option['type'] === 'link') {
      return h(
          'a',
          {href: option.path, target: '_blank'},
          option.label as string
      )
    }
  }
  return option.label as string
}

const handleUpdate = (key: string, item: MenuOption) => {
  console.log(key, item)
}
</script>

<template>
  <n-menu :options="routes"
          v-model:value="activeMenu"
          key-field="name"
          label-field="label"
          @update:value="handleUpdate"
          :render-label="renderMenuLabel"/>
</template>

<style scoped>

</style>
