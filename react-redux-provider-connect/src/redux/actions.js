// 2. 定义 操作状态时要用到的 操作和数据
import {INCREMENT, DECREMENT} from "./action-types";

// 是给 项目组件 引入并使用的
// 返回一个对象, 用于
// 必须有 type 属性
// 其他属性，全部表示 集中管理的数据 && 当前操作需要用到的数据
export const increment = (number)=>({type: INCREMENT, number});
export const decrement = (number)=>({type: DECREMENT, number});