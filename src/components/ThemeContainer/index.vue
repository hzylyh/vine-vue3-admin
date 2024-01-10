<script setup lang="ts">
import {useThemeVars} from "naive-ui";
import { Themes } from '/@/enums/themes'

defineOptions({ name: 'ThemeContainer' });
interface Props {
  mode?: Themes;
}

withDefaults(defineProps<Props>(), {
  mode: Themes.light
});

</script>

<template>
<!--  <div :class="mode ? 'bg-#18181C text-white' : 'bg-white text-#333639'">-->
  <div class="">
<!--  <div style="background-color: var(&#45;&#45;n-color); color: var(&#45;&#45;n-text-color)">-->
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
