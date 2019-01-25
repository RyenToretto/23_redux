import React from "react"
import ReactDOM from 'react-dom';
import App from './App/App';

// 5. 引入 store 并传入组件，组件得以 this.props.store.xxx 操作
import store from "./redux/store"

// 6. 引入 react-redux 中的 Provider 对 组件进行包装，处理 store 相关事务
import {Provider} from "react-redux"

ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('root')
);
