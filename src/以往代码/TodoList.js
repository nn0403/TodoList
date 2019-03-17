import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js';
import './style.css';
import axios from "axios";

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
                                    <TodoItem
                                        key = { index }
                                        content = { item }
                                          index = { index }
                                              deleteItem = { this.handleItemDelete.bind(this) }
                                    />
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    componentDidMount() {
        axios.get('/api/todolist').then( (res) => {
            console.log(res.data);
            this.setState(() => ({
                list: [...res.data]
            }))
        }).catch( () => {
            console.log('失败执行');
        })
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