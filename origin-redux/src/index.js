import React from "react"
import ReactDOM from 'react-dom';
import App from './App/App';

// 5. 引入 store 并传入组件，组件得以 this.props.store.xxx 操作
import store from "./redux/store"

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// 6. 监听 状态的更新，一旦数据发生变化就 render 到页面上
store.subscribe(()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
});