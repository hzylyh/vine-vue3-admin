<script setup lang="ts">

import {MenuSharp} from "@vicons/ionicons5";
import {NIcon, NLayoutHeader} from "naive-ui";
import {useAppStore} from "@/stores/modules/app";
import {ThemeMode, Breadcrumb, UserAvatar} from "./components"

defineOptions({ name: 'VHeader' });

const appStore = useAppStore()
</script>

<template>
  <div class="flex space-x-4 h-full items-center">
    <div class="flex h-full items-center" @click="appStore.toggleSidebar">
      <n-icon size="36" :class="appStore.sidebar.collapsed ? 'rotate-90' : ''">
        <menu-sharp/>
      </n-icon>
    </div>
    <breadcrumb></breadcrumb>
  </div>
  <div class="flex h-full space-x-6 items-center">
    <theme-mode></theme-mode>
    <user-avatar></user-avatar>
  </div>
</template>

<style scoped>

</style>
