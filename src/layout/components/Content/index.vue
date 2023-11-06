<script setup lang="ts">

import {NLayout, NLayoutContent} from "naive-ui";
import ThemeContainer from "@/components/ThemeContainer/index.vue";
import {useThemeStore} from "@/stores/modules/theme";

defineOptions({name: 'VContent'})

const theme = useThemeStore()

</script>

<template>
<!--  <theme-container :mode="theme.darkMode">-->
<!--    <router-view v-slot="{ Component, route }">-->
<!--      <component :is="Component" :key="route.fullPath"/>-->
<!--    </router-view>-->
<!--  </theme-container>-->
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.fullPath"/>
  </router-view>
</template>

<style scoped>

</style>
