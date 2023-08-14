<script setup lang="ts">
import {RouterView} from 'vue-router'
import {darkTheme, NConfigProvider} from 'naive-ui'
import {useThemeStore} from "@/stores/modules/theme";

const theme = useThemeStore()

</script>

<template>
  <n-config-provider :theme="theme.darkMode ? darkTheme : undefined"
                   class="h-full">
    <router-view/>
  </n-config-provider>
</template>

<style scoped>

</style>
