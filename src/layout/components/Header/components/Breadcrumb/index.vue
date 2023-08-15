<script setup lang="ts">

import {NBreadcrumb, NBreadcrumbItem, NIcon} from "naive-ui";
import { AccessibilitySharp } from '@vicons/ionicons5'

defineOptions({name: 'Breadcrumb'})

</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item>
      <n-icon :component="AccessibilitySharp" /> 北京总行</n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="AccessibilitySharp" /> 天津分行</n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="AccessibilitySharp" /> 平山道支行</n-breadcrumb-item>
  </n-breadcrumb>
</template>

<style scoped>

</style>
