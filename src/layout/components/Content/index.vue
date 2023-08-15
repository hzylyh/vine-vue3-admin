<script setup lang="ts">

import {NLayout, NLayoutContent} from "naive-ui";
import ThemeContainer from "@/components/ThemeContainer/index.vue";

defineOptions({name: 'VContent'})
</script>

<template>
  <theme-container>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath"/>
    </router-view>
  </theme-container>
</template>

<style scoped>

</style>
