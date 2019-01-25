### yarn add redux
### yarn add -D redux-devtools-extension    // 调试工具
## action-types.js
    # 1. 定义 对状态的相关操作
            export const INCREMENT = "increment";
            export const DECREMENT = "decrement";
        
## actions.js
    # 2. 定义 操作状态时要用到的 操作和数据
            import {INCREMENT, DECREMENT} from "./action-types";
            export const increment = (number)=>({type: INCREMENT, number});
            export const decrement = (number)=>({type: DECREMENT, number});
    
## reducer.js
    # 3. store 配置
        根据现有的 state 和 action 来生成新的 state, 并由 store 集中管理
            import {INCREMENT, DECREMENT} from "./action-types"
            export default function count(state=66, action) {
                switch (action.type) {
                    case INCREMENT:{
                        console.log(state+action.number);
                        return state+action.number
                    }
                    case DECREMENT:{
                        return state-action.number
                    }
                    default:
                        return state
                }
            }
            
## store.js
    # 4. 生成 store 对象，以供 项目 引入，并传入组件
        组件因此可以 this.props.store.xxx 操作
            import {createStore} from "redux"
            import reducer from "./reducer"

            export default createStore(reducer)
            
## index.js
            import React from "react"
            import ReactDOM from 'react-dom';
            import App from './App/App';
    # 5. 引入 store 并传入组件，组件得以 this.props.store.xxx 操作
            import store from "./redux/store"
            ReactDOM.render(<App store={store}/>, document.getElementById('root'));

    # 6. 监听 状态的更新，一旦数据发生变化就 render 到页面上
            store.subscribe(()=>{
                ReactDOM.unmountComponentAtNode(document.getElementById('root'));
                ReactDOM.render(<App store={store}/>, document.getElementById('root'))
            });
    
## App.js
            import React, { PureComponent } from 'react';
    # 7. 编写页面
    # 8. 引入 actions 通过 this.props.store.getState() 和 .dispatch 进行逻辑编程
            import * as actions from "../redux/actions"
            this.props.store.dispatch(actions.increment(number))    // 调用 store 管理 INCREMENT 的 action 进行 number 的操作
            