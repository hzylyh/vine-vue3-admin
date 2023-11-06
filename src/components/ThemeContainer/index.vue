<script setup lang="ts">
import {useThemeVars} from "naive-ui";

defineOptions({ name: 'ThemeContainer' });
interface Props {
  mode?: boolean;
}

withDefaults(defineProps<Props>(), {
  mode: false
});

</script>

<template>
  <div :class="mode ? 'bg-#18181C text-white' : 'bg-white text-#333639'">
<!--  <div style="background-color: var(&#45;&#45;n-color); color: var(&#45;&#45;n-text-color)">-->
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
