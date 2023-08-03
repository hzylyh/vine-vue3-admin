<script setup lang="ts">
import {NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu} from 'naive-ui'
import {Sidebar} from './components'
import { useAppStore } from "@/stores/modules/app"


const appStore = useAppStore()
</script>

<template>
  <NLayout class="h-full" has-sider>
    <NLayoutSider bordered
                  collapse-mode="width"
                  :collapsed-width="64"
                  :width="240"
                  :collapsed="appStore.sidebar.collapsed"
                  show-trigger
                  @collapse="appStore.toggleSidebar"
                  @expand="appStore.closeSidebar">
      <Sidebar />
    </NLayoutSider>
    <NLayout embedded>
      <NLayoutHeader class="h-[64px]">
        header
      </NLayoutHeader>
      <NLayoutContent embedded>
        <RouterView v-slot="{ Component, route }">
          <component :is="Component" :key="route.fullPath"/>
        </RouterView>
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<style scoped>

</style>
