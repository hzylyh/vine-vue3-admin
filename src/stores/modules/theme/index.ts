/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/8/13 16:19
 * @Path: src/stores/modules/theme/index.ts
 */
import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import { darkTheme, lightTheme } from "naive-ui";
import darkVar from "./darkVar";
import lightVar from "./lightVar";
import { Themes } from '/@/enums/themes'

const naiveThemes = new Map([
  [Themes.dark, darkTheme],
  [Themes.light, lightTheme]
])

const themeVar = new Map([
  [Themes.dark, darkVar],
  [Themes.light, lightVar]
])

export const useThemeStore = defineStore('theme', () => {
  const theme: Ref<Themes> = ref(Themes.light)

  const naiveTheme = ref(null);

  const themeOverrides = ref({})

  function getSystemTheme() {
    const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
    return themeMedia ? Themes.dark : Themes.light;
  }

  function changeTheme(name: Themes) {
    theme.value = name;
    themeOverrides.value = themeVar.get(name);
    naiveTheme.value = naiveThemes.get(name)
  }

  const systemTheme = getSystemTheme()
  changeTheme(systemTheme)

  return { theme, naiveTheme, themeOverrides, changeTheme }
})
