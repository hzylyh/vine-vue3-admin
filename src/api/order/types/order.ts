
// 新增工单
export interface AddOrderRequest {
  /** 工单名称 */
  name: string
  /** 工单类型 */
  type: string
  /** 设备ID */
  equipmentID: string
  /** 责任人 */
  userID: string
  /** 工单描述 */
  describe: string
  /** 优先级 */
  priority: string
}

export interface AddOrderResponse {
  orderNo: string
}

export interface UpdateOrderRequest {
  /** 订单号 */
  orderNo: string
  /** 订单状态 */
  status: number
  /** 订单类型 */
  type: number
  /** 订单金额 */
  amount: number
  /** 订单创建时间 */
  createTime: string
  /** 订单支付时间 */
  payTime: string
  /** 订单支付状态 */
  payStatus: number
  /** 订单支付方式 */
  payType: number
}

export interface UpdateOrderResponse {
  orderNo: string
}

export interface DeleteOrderRequest {
  /** 订单号 */
  orderNo: string
}

export interface DeleteOrderResponse {
  orderNo: string
}

export interface GetOrderRequest {
  /** 订单号 */
  orderNo: string
}

export interface GetOrderResponse {
  orderNo: string
  status: number
  type: number
  amount: number
  createTime: string
  payTime: string
  payStatus: number
  payType: number
}

export interface ListOrderRequest {
  /** 页码 */
  pageNum: number
  /** 每页数量 */
  pageSize: number
}

export interface ListOrderResponse<T> {
  list: T[]
  total: number
}