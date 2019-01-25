// 4. 生成 store 对象，以供 项目 引入，并传入组件
// 组件因此可以 this.props.store.xxx 操作
import {createStore} from "redux"
import reducer from "./reducer"

export default createStore(reducer)
