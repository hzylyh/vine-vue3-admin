<script setup lang="ts">
import {h, ref} from "vue";
import {MenuOption, NIcon, NMenu} from "naive-ui";
import {RouterLink} from "vue-router";
import {BookmarkOutline, CaretDownOutline} from "@vicons/ionicons5";
import {useAppStore} from "@/stores/modules/app"

const appStore = useAppStore()
const menuOptions: MenuOption[] = [
  {
    label: '首页',
    type: 'route',
    path: 'Dashboard',
    key: 'dashboard'
  },
  {
    label: '用户管理',
    type: 'route',
    path: 'User',
    key: 'user'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            type: 'link',
            path: 'https://www.baidu.com',
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

function renderMenuLabel(option: MenuOption) {
  if ('type' in option) {
    if (option['type'] === 'route') {
      return h(RouterLink, {
            to: {
              name: option.path
            }
          },
          {default: () => option.label as string}
      )
    } else if (option['type'] === 'link') {
      return h(
          'a',
          {href: option.path, target: '_blank'},
          option.label as string
      )
    }
  }
  return option.label as string
}

function renderMenuIcon(option: MenuOption) {
  // 渲染图标占位符以保持缩进
  if (option.key === 'sheep-man') return true
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'food') return null
  return h(NIcon, null, {default: () => h(BookmarkOutline)})
}

function expandIcon() {
  return h(NIcon, null, {default: () => h(CaretDownOutline)})
}
</script>

<template>
  <n-menu
      :collapsed="appStore.sidebar.collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-label="renderMenuLabel"
      :render-icon="renderMenuIcon"
      :expand-icon="expandIcon"
  />
</template>

<style scoped>

</style>
