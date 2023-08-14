<script setup lang="ts">
import {NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NIcon, NImage} from 'naive-ui'
import {MenuSharp} from "@vicons/ionicons5";
import {Sidebar} from './components'
import {useAppStore} from "@/stores/modules/app"


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
      <n-layout-header class="flex justify-between h-[56px]">
        <div class="flex h-full items-center"
             @click="appStore.toggleSidebar">
          <n-icon size="36" :class="appStore.sidebar.collapsed ? 'rotate-90' : ''">
            <MenuSharp/>
          </n-icon>
        </div>
        <div class="flex h-full items-center">
          <n-image :preview-disabled="true"
                  class="rounded-full"
                  width="40"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <div class="">
            hzy
          </div>
        </div>
      </n-layout-header>
      <n-layout-content embedded>
        <RouterView v-slot="{ Component, route }">
          <component :is="Component" :key="route.fullPath"/>
        </RouterView>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>

</style>
