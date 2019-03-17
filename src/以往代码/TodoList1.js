import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js';
import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = { // 组件状态
            inputValue: '',
            list: []
        }
    };

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insert">请输入内容</label>
                    <input
                        ref = {(input) => { this.input = input }}
                        id='insert'
                        className="input"
                        type="text" value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    };

    handleButtonClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    };

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list
        });
        console.log(index);
    }
}

export default TodoList;