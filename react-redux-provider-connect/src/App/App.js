import React, { PureComponent } from 'react';

// 7. 为 UI 组件进行 传值 state 及相关方法 配置
import {connect} from "react-redux"
import {increment, decrement} from "../redux/actions"

import Counter from "./Counter/Counter"

import './css/base.css';
import './css/index.css';

export default connect(state=>({count: state}), {increment, decrement})(Counter);
