<script setup lang="ts">
import {NButton, NCard, NForm, NFormItemGi, NGrid, NInput, NModal, NPagination, NTable} from "naive-ui";
import {ref} from "vue";
import SysForm from "@/views/system/components/SysForm.vue";

const showModal = ref(false)
</script>

<template>
  <div class="flex ">
    <div class="basis-1/4">
      ddd
    </div>
    <div class="basis-3/4">
      <sys-form>
        <template #search>
          <n-button type="primary"
                    @click="showModal = true">新增
          </n-button>
        </template>
        <template #data>
          <n-table :single-line="false">
            <thead>
            <tr>
              <th>用户编号</th>
              <th>用户名</th>
              <th>昵称</th>
              <th>手机号</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>放弃</td>
              <td>反常的</td>
              <td>彻底废除</td>
              <td>...</td>
              <td>
                <n-button text type="primary">
                  修改
                </n-button>
                <n-button text type="primary">
                  删除
                </n-button>
              </td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
            </tbody>
          </n-table>
          <n-pagination v-model:page="page" :page-count="100" />
        </template>
      </sys-form>
    </div>
  </div>

  <div>
    <n-modal v-model:show="showModal">
      <n-card :cols:="24" :x-gap="24">
        <n-form ref="formRef"
                :model="model"
                :rules="rules"
                :size="size"
                label-placement="left">
          <n-grid>
            <n-form-item-gi :span="12">
              <n-input></n-input>
            </n-form-item-gi>
            <n-form-item-gi :span="12">
              <n-input></n-input>
            </n-form-item-gi>
          </n-grid>
        </n-form>
      </n-card>

    </n-modal>
  </div>
</template>

<style scoped>

</style>
