<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-row-reverse pb-2">
      <slot name="search"></slot>
    </div>
    <div>
      <slot name="data"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
