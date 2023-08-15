<script setup lang="ts">

import {NTab, NTabs} from "naive-ui";
import ThemeContainer from '@/components/ThemeContainer/index.vue'

defineOptions({name: 'VTabView'})
</script>

<template>
  <theme-container>
    <n-tabs class="w-full"
            type="card"
            closable>
      <n-tab name="幸福">
        寂寞围绕着电视
      </n-tab>
      <n-tab name="的">
        垂死坚持
      </n-tab>
      <n-tab name="旁边">
        在两点半消失
      </n-tab>
    </n-tabs>
  </theme-container>

</template>

<style scoped>

</style>
