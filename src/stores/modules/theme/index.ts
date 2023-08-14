/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/8/13 16:19
 * @Path: src/stores/modules/theme/index.ts
 */

import {defineStore} from "pinia";
import { darkTheme } from 'naive-ui';
import {ref} from "vue";

export const useThemeStore = defineStore('theme', () => {

  const darkMode = ref(false)

  const naiveTheme = () => {
    return darkMode.value ? darkTheme : undefined
  }

  const toggleTheme = () => {
    darkMode.value = !darkMode.value
  }

  return {darkMode, naiveTheme, toggleTheme}
})
