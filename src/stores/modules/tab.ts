/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/11/5 09:14
 * @Path: src/stores/modules/tab.ts
 */

import {defineStore} from "pinia";
import {getCachedViews, setCachedViews} from "/@/utils/cache/local-storage";


interface TabInfo {
  name: string;
}

interface TabState {
  /** 多页签数据 */
  tabs: TabInfo[];
  /** 多页签首页 */
  // homeTab: App.GlobalTabRoute;
  /** 当前激活状态的页签(路由fullPath) */
  activeTab: string;
}

export const useTabStore = defineStore('tab', () => {
  // 当前在访问的页签列表
  const tabs: TabInfo[] = getCachedViews();

  const addTab = (tab: TabInfo) => {
    debugger
    tabs.push(tab);
    setCachedViews(tabs);
    console.log(tab)
  }

  const removeTab = (tab: TabInfo) => {
    const index = tabs.findIndex(item => item.name === tab.name);
    tabs.splice(index, 1);
    setCachedViews(tabs);
  }

  return  {tabs, addTab, removeTab}
})
