<script setup lang="ts">

import {
  type DataTableColumns,
  NButton,
  NCard,
  NDataTable,
  NForm,
  NFormItemGi,
  NGi,
  NGrid,
  NInput,
  NModal
} from 'naive-ui'
import SysForm from "/@/components/SysForm/index.vue";
import { h, onMounted, reactive, ref } from 'vue'
import {
  addOrderApi,
  listOrderApi,
  reviewOrderApi,
} from '/@/api/order'
import type {
  AddOrderRequest,
  ListOrderRequest,
  ReviewOrderRequest,
} from '/@/api/order/types/order'
import type { RowData } from 'naive-ui/lib/data-table/src/interface'


const showModal = ref(false)
const tableData = ref([])
const pagination = {
  pageSize: 10
}

// TODO: 后续从后台字典接口获取
const statusMap = new Map([["0", "待审批"], ["1", "待处理"], ["2", "已完成"], ["3", "延期"], ["4", "已取消"]])
const typeMap = new Map([["0", "故障工单"], ["1", "计划工单"]])

let formData = reactive<AddOrderRequest>({
  name: "",
  type: "",
  equipmentID: "",
  userID: "",
  describe: "",
  priority: "",
})

const tableColumns = reactive<DataTableColumns<RowData>>(
  [
    {
      "title": "工单编号",
      "key": "id",
    },
    {
      "title": "工单名称",
      "key": "name",
    },
    {
      "title": "工单类型",
      "key": "type",
      render: (row) => {
        return typeMap.get(row.type)
      }
    },
    {
      "title": "责任人",
      "key": "username",
    },
    {
      "title": "状态",
      "key": "status",
      render: (row) => {
        return statusMap.get(row.status)
      }
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
              handleReviewOrder(row.id)
            }
          },
          { default: () => '审批' }
        )
      }
    }
  ]
)

onMounted (() => {
  const reqInfo: ListOrderRequest = {
    pageNum: 1,
    pageSize: 10
  }
  listOrderApi(reqInfo).then(res => {
    tableData.value = res.list
  })
})

const handleAddOrder = () => {
  console.log(formData)
  addOrderApi(formData).then(() => {
    showModal.value = false
  })

}

const handleReviewOrder = (orderId: number) => {
  let reqInfo: ReviewOrderRequest = {
    id: orderId,
  }
  reviewOrderApi(reqInfo).then((res) => {
    console.log(res)
  })
}
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
              title="新增">
        <n-form ref="formRef"
                :model="formData"
                :rules="rules"
                :size="size"
                label-width="86px"
                label-placement="left">
          <n-grid :cols:="24"
                  :x-gap="18">
            <n-form-item-gi
              label="工单名称"
              :span="12">
              <n-input v-model:value="formData.name"></n-input>
            </n-form-item-gi>
            <n-form-item-gi
              label="工单类型"
              :span="12">
              <n-input v-model:value="formData.type"></n-input>
            </n-form-item-gi>
            <n-form-item-gi
              label="关联设备"
              :span="12">
              <n-input v-model:value="formData.equipmentID"></n-input>
            </n-form-item-gi>
            <n-form-item-gi
              label="责任人"
              :span="12">
              <n-input v-model:value="formData.userID"></n-input>
            </n-form-item-gi>
            <n-form-item-gi
              label="优先级"
              :span="12">
              <n-input v-model:value="formData.priority"></n-input>
            </n-form-item-gi>
            <n-form-item-gi
              label="任务描述"
              :span="24">
              <n-input v-model:value="formData.describe"></n-input>
            </n-form-item-gi>
            <n-gi :span="24">
              <div class="flex justify-end">
                <n-button round
                          type="primary"
                          @click="handleAddOrder">
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