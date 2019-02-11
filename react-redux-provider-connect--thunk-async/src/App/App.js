import React, { PureComponent } from 'react';

// 7. 为 UI 组件进行 传值 state 及相关方法 配置 - 生成一个新组件
import {connect} from "react-redux"
import {increment, decrement, incrementAsync} from "../redux/actions"

import Counter from "./Counter/Counter"

import './css/base.css';
import './css/index.css';

export default connect(
    state=>({count: state}),
    {increment, decrement, incrementAsync}
)(Counter);

/**** 是以下代码的简写版本
 function mapStateToprops(state) {
    return {
        count: state
    }
 }
 
 function mapDispatchToProps (dispatch) {
    return {
        increment: number => dispatch(increment(number)),
        decrement: number => dispatch(decrement(number)),
    }
 }
 
 export default connect(
    mapStateToprops, // 用来确定向UI组件传递哪些一般属性
    mapDispatchToProps // 用来确定向UI组件传递哪些函数属性
 )(Counter)
 
 
 connect是一个函数, 它执行返回也是一个函数, 这个函数执行返回是一个新的组件
 class 'Connect(Counter)' extends Component {
    // 内部可以看到store
    render() {
        const props1 = mapStateToprops(store.getState())

        return <Counter {...props1}/>
    }
 }
 ****/
