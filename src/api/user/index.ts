/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/10/30 21:56
 * @Path: src/api/user/index.ts
 */

import { request } from "/@/utils/service"
import type * as User from "./types/user"

/** 新增用户 */
export function addUserApi(data: User.User) {
  return request<User.User>({
    url: "/user/add",
    method: "post",
    data
  })
}

/** 更新用户 */
export function updateUserApi(data: User.User) {
  return request<User.User>({
    url: "/user/update",
    method: "post",
    data
  })
}

/** 删除用户 */
export function deleteUserApi(data: User.User) {
  return request<User.User>({
    url: "/user/delete",
    method: "post",
    data
  })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<User.UserInfoResponseData>({
    url: "/users/info",
    method: "get"
  })
}

/** 获取用户列表 */
export function listUserApi(data: User.ListUserRequest) {
  return request<User.ListUserResponseData<any>>({
    url: "/user/list",
    method: "post",
    data: data
  })
}
