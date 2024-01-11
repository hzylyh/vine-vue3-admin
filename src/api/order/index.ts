import { request } from "/@/utils/service"
import type * as Order from "./types/order"

export function addOrderApi(data: Order.AddOrderRequest) {
  return request<Order.AddOrderResponse>({
    url: '/order/add',
    method: 'post',
    data
  })
}

export function updateOrderApi(data: Order.UpdateOrderRequest) {
  return request<Order.UpdateOrderResponse>({
    url: '/order/update',
    method: 'post',
    data
  })
}

export function deleteOrderApi(data: Order.DeleteOrderRequest) {
  return request<Order.DeleteOrderResponse>({
    url: '/order/delete',
    method: 'post',
    data
  })
}

export function getOrderApi(data: Order.GetOrderRequest) {
  return request<Order.GetOrderResponse<any>>({
    url: '/order/detail',
    method: 'post',
    data
  })
}

export function listOrderApi(data: Order.ListOrderRequest) {
  return request<Order.ListOrderResponse<any>>({
    url: '/order/list',
    method: 'post',
    data
  })
}