### yarn add redux    // createStore
### yarn add -D redux-devtools-extension    // 调试工具

## /src/redux/action-types.js
    # 1. 定义 对状态的相关操作
            export const INCREMENT = "increment";
            export const DECREMENT = "decrement";
        
## /src/redux/actions.js
    # 2. 定义 操作状态时要用到的 操作和数据
            import {INCREMENT, DECREMENT} from "./action-types";
            export const increment = (number)=>({type: INCREMENT, number});
            export const decrement = (number)=>({type: DECREMENT, number});
    
## /src/redux/reducer.js
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
            
## /src/redux/store.js
    # 4. 生成 store 对象，以供 项目 引入，并传入组件
        组件因此可以 this.props.store.xxx 操作
            import {createStore} from "redux"
            import reducer from "./reducer"

            export default createStore(reducer)
            
## /src/index.js
            import React from "react"
            import ReactDOM from 'react-dom';
            import App from './App/App';
    # 5. 引入 store 并传入组件
            import store from "./redux/store"

    # 6. 引入 react-redux 中的 Provider 对 组件进行包装，处理 store 相关事务
    // 组件得以 this.props.store.xxx 操作
    yarn add react-redux    // connect, Provider
            import {Provider} from "react-redux"

            ReactDOM.render(
                (<Provider store={store}>
                    <App/>
                </Provider>),
                document.getElementById('root')
            );
    
## /src/App/App.js
            import React, { PureComponent } from 'react';
    # 7. 为 UI 组件进行 传值 state 及相关方法 配置
            import {connect} from "react-redux"
            import {increment, decrement} from "../redux/actions"

            import Counter from "./Counter/Counter"

            import './css/base.css';
            import './css/index.css';

            export default connect(state=>({count: state}), {increment, decrement})(Counter);
## /src/App/Counter/Counter.js
    # 8. 编写页面
         import React, { PureComponent } from 'react';

         export default class Counter extends PureComponent {...

    # 9. 直接通过传入的 count、increment、decrement 进行编程
            ...
            const count = this.props.count;
            if(count%2===1) {
                this.props.increment(number)
            }
            ...
