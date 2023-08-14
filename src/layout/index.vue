<script setup lang="ts">
import {NLayout, NLayoutSider, NLayoutContent} from 'naive-ui'
import {Sidebar} from './components'
import {useAppStore} from "@/stores/modules/app"
import {VineHeader} from './components'


const appStore = useAppStore()
</script>

<template>
  <n-layout class="h-full" has-sider>
    <n-layout-sider bordered
                  collapse-mode="width"
                  :collapsed-width="64"
                  :width="240"
                  :collapsed="appStore.sidebar.collapsed"
                  @collapse="appStore.toggleSidebar"
                  @expand="appStore.closeSidebar">
      <Sidebar/>
    </n-layout-sider>
    <n-layout embedded>
      <vine-header></vine-header>
      <n-layout-content embedded>
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.fullPath"/>
        </router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>

</style>
