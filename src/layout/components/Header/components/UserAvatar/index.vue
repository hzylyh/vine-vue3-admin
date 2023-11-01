<script setup lang="ts">

import {NDropdown, NIcon, NImage} from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import type {Component} from "vue";
import {h} from "vue";

defineOptions({ name: 'UserAvatar' });


const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    label: '个人中心',
    key: 'user-center',
    icon: renderIcon(UserIcon),
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
];
</script>

<template>
  <n-dropdown :options="options">
    <div class="flex p-2 space-x-2 cursor-pointer hover:bg-gray-200">
      <n-image :preview-disabled="true"
               class="rounded-full"
               width="33"
               src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <div class="text-xl">
        hzy
      </div>
    </div>
  </n-dropdown>

</template>

<style scoped>

</style>
