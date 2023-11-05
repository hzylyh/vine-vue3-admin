<script setup lang="ts">

import {MenuOption, NButton, NTab, NTabs} from "naive-ui";
import ThemeContainer from '@/components/ThemeContainer/index.vue'
import {computed, reactive, watch} from "vue";
import router from "@/router";
import {useTabStore} from "@/stores/modules/tab";

defineOptions({name: 'VTabView'})

const tabStore = useTabStore()

/*const tabs = reactive([
  {name: 'Dashboard'},
  // {name: 'User'}
])*/

const tabs = computed(() => tabStore.tabs)

const activeTab = computed(() => router.currentRoute.value.name as string)

watch(router.currentRoute, (newValue) => {
  console.log(newValue)
  // 如果当前tabs不包含当前路由，就添加进去
  if (!tabs.value.some(item => item.name === newValue.name)) {
    tabs.value.push({name: newValue.name})
  }
}, {deep: true})

// 处理tab切换
const handleUpdate = (value: string) => {
  router.push({name: value})
}

// 处理tab关闭，暂未处理
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
      <n-tab v-for="(item, index) in tabs"
             :name="item.name"
             :key="index">
        {{ item.name }}
      </n-tab>
    </n-tabs>
  </theme-container>

</template>

<style scoped>

</style>
