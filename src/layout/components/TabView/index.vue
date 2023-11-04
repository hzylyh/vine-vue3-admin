<script setup lang="ts">

import {MenuOption, NButton, NTab, NTabs} from "naive-ui";
import ThemeContainer from '@/components/ThemeContainer/index.vue'
import {computed, reactive} from "vue";
import router from "@/router";

defineOptions({name: 'VTabView'})

const route = reactive([
  {name: 'Dashboard'},
  {name: 'User'}
])

const activeTab = computed(() => router.currentRoute.value.name)

// 处理tab切换
const handleUpdate = (value: string) => {
  // appStore.toggleMenu()
  router.push({name: value})
}

// 处理tab关闭
const handleClose = (name: string) => {
  console.log(name)
}

</script>

<template>
  <theme-container>
    <n-tabs class="w-full"
            v-model:value="activeTab"
            type="card"
            size="small"
            closable
            @close="handleClose"
            @update:value="handleUpdate">
      <n-tab v-for="(item, index) in route"
             :name="item.name"
             :key="index">
        {{ item.name }}
      </n-tab>
    </n-tabs>
  </theme-container>

</template>

<style scoped>

</style>
