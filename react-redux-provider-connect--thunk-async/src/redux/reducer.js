import {INCREMENT, DECREMENT} from "./action-types"

// 3. store 配置
// 根据现有的 state 和 action 来生成新的 state, 并由 store 集中管理
export default function count(state=66, action) {
    switch (action.type) {
        case INCREMENT:{
            return state + action.number
        }
        case DECREMENT:{
            return state - action.number
        }
        default:
            return state
    }
}
