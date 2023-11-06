<script setup lang="ts">

import {NTab, NTabs} from "naive-ui";
import {computed, watch} from "vue";
import router from "@/router";
import {useTabStore} from "@/stores/modules/tab";

defineOptions({name: 'VTabView'})

const tabStore = useTabStore()

const tabs = computed(() => tabStore.tabs)

const activeTab = computed(() => router.currentRoute.value.name as string)

watch(router.currentRoute, (newValue) => {
  // 如果当前tabs不包含当前路由，就添加进去
  if (!tabs.value.some(item => item.name === newValue.name)) {
    tabStore.addTab({name: newValue.name as string})
  }
}, {deep: true})

// 处理tab切换
const handleUpdate = (value: string) => {
  router.push({name: value})
}

// 处理tab关闭
const handleClose = (name: string) => {
  const nameIndex = tabs.value.findIndex((info) => info.name === name)
  tabStore.removeTab({name: name})
  if (name === activeTab.value) {
    router.push({name: tabs.value[Math.min(nameIndex, tabs.value.length - 1)].name})
  }
}

</script>

<template>
  <n-tabs class="w-full"
          v-model:value="activeTab"
          type="card"
          size="small"
          closable
          @close="handleClose"
          @update:value="handleUpdate">
    <n-tab v-for="(item, index) in tabs"
           :name="item.name"
           :key="index">
      {{ item.name }}
    </n-tab>
  </n-tabs>

</template>

<style scoped>

</style>
