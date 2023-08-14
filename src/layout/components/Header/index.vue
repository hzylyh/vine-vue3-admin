<script setup lang="ts">

import {MenuSharp} from "@vicons/ionicons5";
import {NIcon, NImage, NLayoutHeader} from "naive-ui";
import {useAppStore} from "@/stores/modules/app";
import {ThemeMode} from "./components"

defineOptions({ name: 'VineHeader' });

const appStore = useAppStore()
</script>

<template>
  <n-layout-header class="flex justify-between h-[56px] p-x-4">
    <div class="flex h-full items-center"
         @click="appStore.toggleSidebar">
      <n-icon size="36" :class="appStore.sidebar.collapsed ? 'rotate-90' : ''">
        <menu-sharp/>
      </n-icon>
    </div>
    <div class="flex h-full space-x-2 items-center">
      <theme-mode></theme-mode>
      <n-image :preview-disabled="true"
               class="rounded-full"
               width="33"
               src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <div class="text-xl">
        hzy
      </div>
    </div>
  </n-layout-header>
</template>

<style scoped>

</style>
