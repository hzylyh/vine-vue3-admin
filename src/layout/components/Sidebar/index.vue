<script setup lang="ts">
import {Component, computed, h, ref, watch} from "vue";
import {NIcon, NMenu} from "naive-ui";
import {RouterLink} from "vue-router";
// import {BookmarkOutline, CaretDownOutline} from "@vicons/ionicons5";
import {useAppStore} from "@/stores/modules/app"
import { type MenuInst, MenuOption } from 'naive-ui'

const appStore = useAppStore()

const isCollapse = computed(() => appStore.sidebar.collapsed)
const activeMenu = computed(() => appStore.activeMenu)
// const

const menuOptions: MenuOption[] = [
  {
    label: '仪表盘',
    type: 'route',
    path: 'Dashboard',
    key: 'dashboard',
    // icon: renderIcon(CaretDownOutline)
  },
  {
    label: '系统管理',
    key: 'system',
    children: [
      {
        label: '用户管理',
        type: 'route',
        path: 'User',
        key: 'user',
      },
      {
        label: '角色管理',
        key: 'beverage',
      },
      {
        label: '权限管理',
        key: 'food',
      }
    ]
  }
]

const selectedKey = ref('user')
// const menuInstRef = ref<MenuInst | null>(null)


watch(activeMenu, (newValue: MenuOption) => {
      console.log(newValue)
    },
    {deep: true})

function selectAndExpand (key: string) {
  selectedKey.value = key
  // menuInstRef.value?.showOption(key)
}

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}


function renderMenuLabel(option: MenuOption) {
  if ('type' in option) {
    if (option['type'] === 'route') {
      return h(RouterLink, {
            to: {
              name: option.path
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

// function renderMenuIcon(option: MenuOption) {
//   // 渲染图标占位符以保持缩进
//   if (option.key === 'sheep-man') return true
//   // 返回 falsy 值，不再渲染图标及占位符
//   if (option.key === 'food') return null
//   return h(NIcon,
//       {components: VNOoption.icon})
// }

// function expandIcon() {
//   return h(NIcon, null, {default: () => h(CaretDownOutline)})
// }

const handleUpdate = (key: string, item: MenuOption) => {
  appStore.toggleMenu(item)
  selectAndExpand(key)
}
</script>

<template>
  <n-menu
      v-model:value="selectedKey"
      :collapsed="isCollapse"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-label="renderMenuLabel"
      :on-update:value="handleUpdate"
  />
</template>

<style scoped>

</style>
