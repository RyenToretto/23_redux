// 8.编写页面
import React, { PureComponent } from 'react';

export default class Counter extends PureComponent {
    addNumber = () => {
        const number = this.refs.numberSelect.value * 1;
        this.props.increment(number)
    };
    
    decNumber = () => {
        const number = this.refs.numberSelect.value * 1;
        this.props.decrement(number)
    };
    
    addNumberOdd = () => {
        const number = this.refs.numberSelect.value * 1;
        
        // 9. 直接通过传入的 count、increment、decrement 进行编程
        const count = this.props.count;
        if(count%2===1) {
            this.props.increment(number)
        }
    };
    
    addNumberAsync = () => {
        const number = this.refs.numberSelect.value * 1;
        this.props.incrementAsync(number)
    };
    
    render () {
        const count = this.props.count;
        
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
