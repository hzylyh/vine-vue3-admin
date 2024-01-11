/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/10/30 21:57
 * @Path: src/api/user/types/user.ts
 */

export interface ListUserRequest {
  /** 页码 */
  pageNum: number
  /** 每页数量 */
  pageSize: number
}

export interface ListUserResponseData<T> {
  /** 总数 */
  total: number
  /** 列表 */
  list: T[]
}

export interface User {
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
  /** 角色 */
  roles: string[]
}
