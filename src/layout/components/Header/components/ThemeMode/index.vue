<script setup lang="ts">
import {Moon, Sunny} from "@vicons/ionicons5";
import {NIcon} from "naive-ui";
import {useThemeStore} from "@/stores/modules/theme";

defineOptions({name: 'ThemeMode'})

const themeStore = useThemeStore()

function handleChangeTheme() {
  themeStore.toggleTheme()
}
</script>

<template>
  <div class="flex-center text-18px cursor-pointer"
       @click="handleChangeTheme">
    <n-icon size="25">
      <sunny v-if="!themeStore.darkMode"/>
      <moon v-else/>
    </n-icon>
  </div>
</template>

<style scoped>

</style>
