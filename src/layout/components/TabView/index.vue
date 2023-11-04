<script setup lang="ts">

import {MenuOption, NButton, NTab, NTabs} from "naive-ui";
import ThemeContainer from '@/components/ThemeContainer/index.vue'
import {computed, reactive, ref, watch} from "vue";
import router from "@/router";
import {useAppStore} from "@/stores/modules/app";

defineOptions({name: 'VTabView'})

const appStore = useAppStore()

const route = reactive([
  {name: 'Dashboard'},
  {name: 'User'}
])

const activeTab = computed(() => appStore.activeMenu)

const activeTab1 = ref("")
//
// watch(activeTab, (newValue: MenuOption) => {
//       activeTab1.value = newValue.value.path
// },
//     {deep: true})

// const handleUpdate = (value: string) => {
//   appStore.toggleMenu()
//   router.push({name: value})
// }
</script>

<template>
  <theme-container>
    <n-tabs class="w-full"
            v-model:value="activeTab1"
            type="card"
            size="small"
            closable
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
