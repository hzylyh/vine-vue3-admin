<script setup lang="ts">
import { Moon, Sunny } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { Themes } from '/@/enums/themes'
import { useThemeStore } from '/@/stores/modules/theme'

defineOptions({name: 'ThemeMode'})

const themeStore = useThemeStore()

function handleChangeTheme() {
  const theme = themeStore.theme === Themes.light ? Themes.dark : Themes.light
  themeStore.changeTheme(theme)
}
</script>

<template>
  <div class="flex-center text-18px cursor-pointer"
       @click="handleChangeTheme">
    <n-icon size="25">
      <sunny v-if="themeStore.theme === Themes.light" />
      <moon v-else />
    </n-icon>
  </div>
</template>

<style scoped>
</style>
