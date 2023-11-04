<script setup lang="ts">
import {NLayout, NLayoutSider, NLayoutContent, NLayoutHeader, MenuOption, NIcon} from 'naive-ui'
import {VSidebar, VTabView, VHeader, VContent} from './components'
import {useAppStore} from "@/stores/modules/app"
import {
  BookmarkOutline,
  SpeedometerOutline,
  CogOutline,
  AccessibilityOutline,
  PeopleOutline,
  CaretDownOutline
} from "@vicons/ionicons5";
import {Component, h} from "vue";

const appStore = useAppStore()

// const menuOptions: MenuOption[] = [
//     {
//       label: '仪表盘',
//       type: 'route',
//       name: 'Dashboard',
//       icon: renderIcon(SpeedometerOutline)
//     },
// ]
const menu: MenuOption[] = [
  {
    label: '仪表盘',
    type: 'route',
    name: 'Dashboard',
    key: 'Dashboard',
    icon: renderIcon(SpeedometerOutline)
  },
  {
    label: '系统管理',
    key: 'system',
    icon: renderIcon(CogOutline),
    children: [
      {
        label: '用户管理',
        type: 'route',
        name: 'User',
        key: 'User',
        icon: renderIcon(AccessibilityOutline)
      },
      {
        label: '角色管理',
        name: 'Role',
        key: 'Role',
        icon: renderIcon(PeopleOutline)
      },
      {
        label: '权限管理',
        name: 'Permission',
        key: 'Permission',
        icon: renderIcon(BookmarkOutline)
      }
    ]
  }
]


function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}
</script>

<template>
  <!--  TODO: 待外部封一层布局组件，将小组件的layout相关的组件移除-->
  <n-layout class="h-full" has-sider position="absolute">
    <n-layout-sider bordered
                    collapse-mode="width"
                    :collapsed-width="64"
                    :width="240"
                    :collapsed="appStore.sidebar.collapsed"
                    @collapse="appStore.toggleSidebar"
                    @expand="appStore.closeSidebar">
      <v-sidebar :routes="menu"/>
    </n-layout-sider>
    <n-layout embedded>
      <n-layout-header class="flex justify-between h-[56px] p-x-4"
                       bordered>
        <v-header></v-header>
      </n-layout-header>
      <v-tab-view class=""></v-tab-view>
      <n-layout-content embedded>
        <v-content></v-content>
      </n-layout-content>

    </n-layout>
  </n-layout>

</template>

<style scoped>

</style>
