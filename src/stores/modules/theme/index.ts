/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/8/13 16:19
 * @Path: src/stores/modules/theme/index.ts
 */

import {defineStore} from "pinia";
import { darkTheme } from 'naive-ui';

export const useThemeStore = defineStore('theme', () => {

  const darkMode = false

  const naiveTheme = () => {
    return darkMode ? darkTheme : undefined
  }

  return {darkMode, naiveTheme}
})
