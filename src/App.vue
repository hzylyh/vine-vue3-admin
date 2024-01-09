<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
import { useThemeStore } from '/@/stores/modules/theme'

const themeStore = useThemeStore()

</script>

<template>
  <n-config-provider :theme="themeStore.naiveTheme"
                     class="h-full">
    <router-view />
  </n-config-provider>
</template>

<style scoped>
</style>
