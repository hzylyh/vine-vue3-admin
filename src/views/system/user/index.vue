<script setup lang="ts">
import {
  NButton,
  NCard,
  NDataTable,
  NForm,
  NFormItemGi,
  NGi,
  NGrid,
  NInput,
  NModal,
} from "naive-ui";
import type { DataTableColumns } from 'naive-ui'
import {h, onMounted, reactive, ref} from "vue";
import SysForm from "@/views/system/components/SysForm.vue";
import {listUserApi} from "@/api/user";

const showModal = ref(false)
const tableData = ref([] as userInfo[])
const pagination = {
  pageSize: 10
}

type userInfo = {
  username: string,
  phone: string,
  email: string,
  status: string,
}

const tableColumns = reactive<DataTableColumns>(
    [
      {
        "title": "用户名",
        "key": "username",
      },
      {
        "title": "手机号",
        "key": "phone",
      },
      {
        "title": "邮箱地址",
        "key": "email",
      },
      {
        "title": "状态",
        "key": "status",
      },
      {
        "title": "操作",
        "key": "status",
        render (row) {
          return h(
              NButton,
              {
                strong: true,
                tertiary: true,
                size: 'small',
                onClick: () => {
                  console.log(row)
                }
              },
              { default: () => 'Play' }
          )
        }
      }
    ]
)

// 新增用户表单
const handleAddUser = () => {
  showModal.value = true
}

const handleAddUserSubmit = () => {
  console.log('handleAddUserSubmit')
}

const handleAddUserCancel = () => {
  showModal.value = false
}


// 用户列表查询
const listUser = () => {
  console.log('listUser')
  listUserApi({page: 1, size: 10}).then(res => {
    console.log(res)
    tableData.value = res.list
  })
}

// 页面加载完成后执行
onMounted(() => {
  listUser()
})

</script>

<template>
  <div class="flex ">
<!--    <div class="basis-1/4">-->
<!--      ddd-->
<!--    </div>-->
    <div class="basis-full p-4">
      <sys-form>
        <template #search>
          <n-button type="primary"
                    @click="showModal = true">新增
          </n-button>
        </template>
        <template #data>
          <n-data-table :data="tableData"
                        :columns="tableColumns"
                        :pagination="pagination">
          </n-data-table>
        </template>
      </sys-form>
    </div>
  </div>

  <div>
    <n-modal v-model:show="showModal"
             transform-origin="center">
      <n-card class="w-800px"
              title="新增用户">
        <n-form ref="formRef"
                :model="model"
                :rules="rules"
                :size="size"
                label-placement="left">
          <n-grid :cols:="24"
                  :x-gap="18">
            <n-form-item-gi
                label="用户名"
                :span="12">
              <n-input></n-input>
            </n-form-item-gi>
            <n-form-item-gi
                label="密码"
                :span="12">
              <n-input></n-input>
            </n-form-item-gi>
            <n-form-item-gi
                label="手机号码"
                :span="12">
              <n-input></n-input>
            </n-form-item-gi>
            <n-form-item-gi
                label="邮箱"
                :span="12">
              <n-input></n-input>
            </n-form-item-gi>
            <n-gi :span="24">
              <div class="flex justify-end">
                <n-button round
                          type="primary"
                          @click="handleAddUser">
                  确认
                </n-button>
              </div>
            </n-gi>
          </n-grid>
        </n-form>
      </n-card>

    </n-modal>
  </div>
</template>

<style scoped>

</style>
