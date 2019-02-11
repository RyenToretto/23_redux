// 4. 生成 store 对象，以供 项目 引入，并传入组件
// 组件因此可以 this.props.store.xxx 操作
import {createStore, applyMiddleware} from "redux"

import reducer from "./reducer"   // 配置action 的响应

import thunk from "redux-thunk"    // 中间件，
// 使得 dispatch() 的参数可以接收一个函数，实现异步，其实还是要 dispatch 同步 action

export default createStore(reducer, applyMiddleware(thunk))    // 第二参数声明使用中间件
