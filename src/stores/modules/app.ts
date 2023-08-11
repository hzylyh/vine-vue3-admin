/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/8/3 16:17
 * @Path: src/stores/modules/app.ts
 */

import {defineStore} from "pinia";
import {SIDEBAR_CLOSED, SIDEBAR_OPENED} from "@/constants/app-key";
import {reactive, watch} from "vue";
import {getSidebarStatus, setSidebarStatus} from "@/utils/cache/local-storage";

interface Sidebar {
  collapsed: boolean
}

/** 设置侧边栏状态本地缓存 */
function handleSidebarStatus(opened: boolean) {
  opened ? setSidebarStatus(SIDEBAR_OPENED) : setSidebarStatus(SIDEBAR_CLOSED)
}

export const useAppStore = defineStore('app', () => {
  /** 侧边栏状态 */
  const sidebar: Sidebar = reactive({
    collapsed: getSidebarStatus() !== SIDEBAR_CLOSED
  })

  /** 监听侧边栏 opened 状态 */
  watch(
    () => sidebar.collapsed,
    (opened) => handleSidebarStatus(opened)
  )

  /** 切换侧边栏 */
  const toggleSidebar = () => {
    sidebar.collapsed = !sidebar.collapsed
  }
  /** 关闭侧边栏 */
  const closeSidebar = () => {
    sidebar.collapsed = false
  }

  return {sidebar, toggleSidebar, closeSidebar}
})
