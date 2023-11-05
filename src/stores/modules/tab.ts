/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/11/5 09:14
 * @Path: src/stores/modules/tab.ts
 */

import {defineStore} from "pinia";
import {getCachedViews} from "@/utils/cache/local-storage";


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
  const tabs = getCachedViews();

  const addTab = (tab: TabInfo) => {
    // if (isInTabRoutes(tab)) return;
    // tabs.push(tab);
    // localStg.set('multiTabRoutes', tabs);
    // setCachedViews(tabs);
    console.log(tab)
  }

  return  {tabs, addTab}
})
