<script setup lang="ts">
defineOptions({ name: 'ThemeContainer' });
interface Props {
  inverted?: boolean;
}

withDefaults(defineProps<Props>(), {
  inverted: false
});
</script>

<template>
  <div class="dark:bg-dark dark:text-white dark:text-opacity-82 transition-all"
       :class="inverted ? 'bg-#001428 text-white' : 'bg-white text-#333639'">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
