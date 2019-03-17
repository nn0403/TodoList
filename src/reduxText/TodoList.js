import React, { Component, Fragment } from 'react';
import  'antd/dist/antd.css';
import { List, Button, Input } from 'antd'
import { getInputChangeAction, getButtonClickAction } from "./store/actionCreators";
import store from './store'



class TodoList extends Component {
    constructor(props) {
        super(props);




        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    render () {
        return(
            <Fragment>
                <Input
                    placeholder="Basic usage"
                       style = {{ width: '300px', margin: '10px' }}
                       onChange = { this.handleInputChange }
                />
                <Button
                    type="primary"
                    style = {{ marginTop: '10px' }}
                    onClick={ this.handleButtonClick }
                >提交</Button>
                <List
                    style = {{ width: '300px', marginLeft: '10px' }}
                    bordered
                    dataSource={ [] }
                    renderItem={item => (<List.Item>{ item }</List.Item>)}
                />
            </Fragment>
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        console.log(store.getState());
    };

    handleButtonClick() {
        const action = getButtonClickAction;
        store.dispatch(action);
    }
}

export default TodoList;