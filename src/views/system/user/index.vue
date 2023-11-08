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
import {h, onMounted, ref} from "vue";
import SysForm from "/@/views/system/components/SysForm.vue";
import {listUserApi} from "/@/api/user";

const showModal = ref(false)
const tableData = ref([])
const pagination = {
  pageSize: 10
}
const tableColumns = [
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
    "key": "action",
    render (row) {
      return h(
          NButton,
          {
            type: 'primary',
            onClick: () => {
              console.log(row)
            }
          },
          {
            default: () => '修改'
          }
      )
    }
  }
]

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

const listUser = () => {
  console.log('listUser')
  listUserApi({page: 1, size: 10}).then(res => {
    console.log(res)
    tableData.value = res.list
  })
}



onMounted(() => {
  listUser()
})

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
          <n-data-table :data="tableData"
                        :columns="tableColumns"
                        :pagination="pagination">
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
