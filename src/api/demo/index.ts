/*
 * @Description:
 * @Author: Ethan Howard
 * @Github: https://github.com/hzylyh
 * @Date: 2023/8/3 10:40
 * @Path: src/api/demo/index.ts
 */
import { request } from "@/utils/service"
import type * as Demo from "./types/demo"
import type {ListDemoResponse} from "./types/demo";

/** 样例-新增 */
export function addDemoApi(data: Demo.AddDemoRequest) {
  return request({
    url: "/demo/add",
    method: "post",
    data
  })
}

/** 样例-修改 */
export function updateDemoApi(data: Demo.UpdateDemoRequest) {
  return request({
    url: "/demo/update",
    method: "post",
    data
  })
}

/** 样例-删除 */
export function deleteDemoApi(data: Demo.DeleteDemoRequest) {
  return request({
    url: "/demo/delete",
    method: "post",
    data
  })
}

/** 样例-详情 */
export function getDemoApi(data: Demo.DetailDemoRequest) {
  return request({
    url: "/demo/detail",
    method: "post",
    data
  })
}

/** 样例-列表 */
export function listDemoApi() {
  return request<Demo.ListDemoResponse>({
    url: "/demo/list",
    method: "post"
  })
}
