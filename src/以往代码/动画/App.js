import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };

        this.handleToggle = this.handleToggle.bind(this)
    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in = { this.state.show }
                    timeout = { 1000 }

                >
                    <div>Hello</div>
                </CSSTransition>
                <button onClick={this.handleToggle}>Toggle</button>
            </Fragment>
        )
    }

    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

export default App;