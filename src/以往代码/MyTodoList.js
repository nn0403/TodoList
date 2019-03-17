import React, { Component, Fragment} from 'react';

class MyTodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: []
        }
    };

    render() {
        return(
            <Fragment>
                <input type="text"
                       onChange = { this.handleInputChange.bind(this) }
                />
                <button onClick = { this.handleButtonClick.bind(this) }>提交</button>
                <ul>
                    {
                        this.state.list.map( (item, index) => {
                            return(
                                <li
                                    key = { index }
                                    onClick = { this.handleItemDelete.bind(this, index) }
                                > { item } </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleButtonClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}

export default MyTodoList;