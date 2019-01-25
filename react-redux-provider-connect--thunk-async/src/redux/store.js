// 4. 生成 store 对象，以供 项目 引入，并传入组件
// 组件因此可以 this.props.store.xxx 操作
import {createStore, applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"

export default createStore(reducer, applyMiddleware(thunk))    // 第二参数声明使用中间件
