<script setup lang="ts">
import {NForm, NFormItem, NInput, NIcon, NButton} from "naive-ui";
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules
} from 'naive-ui'
import {PersonCircleOutline, LockClosedOutline} from '@vicons/ionicons5'
import {addDemoApi} from "@/api/demo";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/modules/user";
import type {LoginRequest} from "@/api/login/types/login";

const router = useRouter()
/** 登录按钮 Loading */
const loading = ref(false)

/** 登录表单数据 */
const loginFormData: LoginRequest = reactive({
  username: "admin",
  password: "12345678"
})

const formRef = ref<FormInst | null>(null)
// const rPasswordFormItemRef = ref<FormItemInst | null>(null)
// const message = useMessage()

const rules: FormRules = {
  username: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入用户名')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur']
    },

  ]
}

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      // message.success('验证成功')
    } else {
      console.log(errors)
      // message.error('验证失败')
    }
  })
}

const handleLogin = () => {
  console.log(loginFormData)
  formRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true
      useUserStore()
          .login(loginFormData)
          .then(() => {
            router.push({ path: "/" })
          })
          .catch((err) => {
            // createCode()
            console.error(err)
            loginFormData.password = ""
          })
          .finally(() => {
            loading.value = false
          })
    } else {
      console.error("表单校验不通过")
    }
  })
  // addDemoApi().then(res => {
  //   console.log(res)
  // })
  // console.log(modelRef.value)
}

</script>

<template>
  <div class="flex flex-row h-full items-center justify-center">
    <div class="h-300px w-450px border p-3">
      <div class="border-b text-4xl text-center pb-2">宙腾CMS</div>
      <div class="py-6">
        <n-form ref="formRef"
               :label-width="86"
               label-placement="left"
               :model="loginFormData"
               :rules="rules">
          <n-form-item path="username">
            <n-input v-model:value="loginFormData.username"
                    placeholder="用户名">
              <template #prefix>
                <n-icon :component="PersonCircleOutline"/>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input v-model:value="loginFormData.password"
                    type="password"
                    placeholder="密码"
                    @keydown.enter.prevent>
              <template #prefix>
                <n-icon :component="LockClosedOutline"/>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="primary"
                     :loading="loading"
                     class="w-full"
            @click="handleLogin">登录
            </n-button>
          </n-form-item>
        </n-form>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
