#### 关于 redux 开发 
    首先要知道，使用 redux，成功将 状态 state 集中管理到 store 中，组件中根据需要引入 store，进行 读、写
      一、 基本原理
          1. 状态 state 交给谁去集中管理？
              交给 store
                  通过向组件传递一个 store 参数
                  组件内部进行 this.props.store 进行操作
                      2. 对 store 进行配置，即 定义操作 state 的方法
                              根据现有的 state 和 action 来生成新的 state, 并由 store 集中管理                 
                          3. 读： this.props.store.getState()
                          4. 写，调用哪种方法操作 state： this.props.store.dispatch({type: "increment", number})
                          5. 注意： 仅仅修改了状态，页面并不会刷新，需要 store.subcribe() 来订阅 store 的改变，刷新页面
	  二、 以上是原理，通常进行一下封装
              操作状态(action) 的所有 type ---- action-type.js
              暴露给组件调用的方法(同步操作、异步操作) ---- actions.js
              配置不同 action 行为 进行不同的响应 ---- reducer.js
              根据 定义的 reducer 生成 store，以备传入组件 ---- store.js
    由于以上编程的话，耦合性太强，直接操作 store 不大好
      三、 所以使用 yarn add react-redux 提供的 <Provider store={store}/> 和 connect()(UI组件) 进一步封装
	      1. 组件定义时，包装一层
	          <Provider store={store}>
                  <App/>
              </Provider>
              根据现有的 state 和 action 来生成新的 state, 并由 store 集中管理  
	      2. 关于 App.jsx 组件的定义
	          
	      3. 在组件的 .jsx 定义时，传入 store 参数，内部进行 this.store.getState()、dispatch() 等操作
	      4. 啊
	      5. 1
	      6. 2
	      7. 3
--------------------------------------------
######---- yarn add redux    // createStore

######---- yarn add -D redux-devtools-extension    // 调试工具

--------------------------------------------
#### /src/redux/action-types.js
      1. 定义 对状态的相关操作
            export const INCREMENT = "increment";
            export const DECREMENT = "decrement";
        
#### /src/redux/actions.js
      2. 定义 操作状态时要用到的 操作和数据
         // 增加同步 action-creator
            import {INCREMENT, DECREMENT} from "./action-types";
            export const increment = (number)=>({type: INCREMENT, number});
            export const decrement = (number)=>({type: DECREMENT, number});
         // 增加异步 action    使用 redux 中间件为前提： 使用 redux-thunk 支持异步编程
         // 返回一个函数    函数还会接收一个参数 dispatch, 该函数中可以执行异步代码，有了结果后再分发同步 action
            export const incrementAsync = (number)=>{
                return dispatch=>{
                    setTimeout(()=>{
                        dispatch(increment(number))
                    }, 1000)
                }
            }
#### /src/redux/reducer.js
      3. store 配置
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
            
#### /src/redux/store.js
      4. 生成 store 对象，以供 项目 引入，并传入组件
        组件因此可以 this.props.store.xxx 操作
######---- yarn add redux-thunk    // 使得 dispatch() 的参数可以接收一个函数，异步的最后还是要 dispatch 同步 action

            import {createStore} from "redux"
            import thunk from "redux-thunk"
            
            import reducer from "./reducer"

            export default createStore(reducer, applyMiddleware(thunk))    // 第二参数声明使用中间件
            
#### /src/index.js
            import React from "react"
            import ReactDOM from 'react-dom';
            import App from './App/App';
      5. 引入 store 并传入组件
            import store from "./redux/store"

      6. 引入 react-redux 中的 Provider 对 组件进行包装，处理 store 相关事务
        // 组件得以 this.props.store.xxx 操作
######---- yarn add react-redux    // connect, Provider
            import {Provider} from "react-redux"

            ReactDOM.render(
                (<Provider store={store}>
                    <App/>
                </Provider>),
                document.getElementById('root')
            );
    
#### /src/App/App.js
            import React, { PureComponent } from 'react';
      7. 为 UI 组件进行 传值 state 及相关方法 配置 - 生成一个新组件
            import {connect} from "react-redux"
            import {increment, decrement} from "../redux/actions"

            import Counter from "./Counter/Counter"

            import './css/base.css';
            import './css/index.css';

            export default connect(state=>({count: state}), {increment, decrement})(Counter);
#### /src/App/Counter/Counter.js
      8. 编写页面
         import React, { PureComponent } from 'react';

         export default class Counter extends PureComponent {...

      9. 直接通过传入的 count、increment、decrement 进行编程
            ...
            const count = this.props.count;
            if(count%2===1) {
                this.props.increment(number)
            }
            ...
