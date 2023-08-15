<script setup lang="ts">
import {NLayout, NLayoutSider, NLayoutContent, NLayoutHeader, NIcon, NScrollbar} from 'naive-ui'
import {VSidebar, VTabView, VHeader, VContent} from './components'
import {useAppStore} from "@/stores/modules/app"
import {MenuSharp} from "@vicons/ionicons5";
import {Breadcrumb, ThemeMode, UserAvatar} from "@/layout/components/Header/components";


const appStore = useAppStore()
</script>

<template>
<!--  TODO: 待外部封一层布局组件，将小组件的layout相关的组件移除-->
  <n-layout class="h-full" has-sider position="absolute">
    <n-layout-sider bordered
                    collapse-mode="width"
                    :collapsed-width="64"
                    :width="240"
                    :collapsed="appStore.sidebar.collapsed"
                    @collapse="appStore.toggleSidebar"
                    @expand="appStore.closeSidebar">
      <v-sidebar/>
    </n-layout-sider>
    <n-layout embedded>
      <n-layout-header class="flex justify-between h-[56px] p-x-4"
                       bordered>
        <v-header></v-header>
      </n-layout-header>
      <v-tab-view class=""></v-tab-view>
      <n-layout-content embedded>
        <v-content></v-content>
      </n-layout-content>

    </n-layout>
  </n-layout>

</template>

<style scoped>

</style>
