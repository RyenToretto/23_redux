import React, { PureComponent } from 'react';

// 7. 编写页面
import * as actions from "../redux/actions"

import './css/base.css';
import './css/index.css';

class App extends PureComponent {
    addNumber = () => {
        const number = this.refs.numberSelect.value * 1;
        
        // 8. 引入 actions 通过 this.props.store.getState() 和 .dispatch 进行逻辑编程
        this.props.store.dispatch(actions.increment(number))
    };
    
    decNumber = () => {
        const number = this.refs.numberSelect.value * 1;
        this.props.store.dispatch(actions.decrement(number))
    };
    
    addNumberOdd = () => {
        const number = this.refs.numberSelect.value * 1;
        const count = this.props.store.getState();
        if(count%2===1) {
            this.props.store.dispatch(actions.increment(number))
        }
    };
    
    addNumberAsync = () => {
        console.log("开始计时-------31");
        setTimeout(() => {
            console.log("时间到-------33");
            const number = this.refs.numberSelect.value * 1;
            this.props.store.dispatch(actions.increment(number))
        }, 1000)
    };
    
    render () {
        const count = this.props.store.getState();
        console.log('App render()', count);
        return (
            <div>
                <p>click {count}</p>
                <div>
                    <select ref='numberSelect'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    
                    <button onClick={this.addNumber}>+</button>&nbsp;
                    <button onClick={this.decNumber}>-</button>&nbsp;
                    <button onClick={this.addNumberOdd}>add Number if odd</button>&nbsp;
                    <button onClick={this.addNumberAsync}>add Number async</button>&nbsp;
                </div>
            </div>
        )
    }
}

export default App;
