import React from 'react';
import '../../../index.css';
import {handleIncrement, handleDecrement, handleStop} from "./ToggleActions";

import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "../toggle/Container";

export class Toggle extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    componentDidMount() {
        this.setState({number: 0});
    }

    render() {
        return (
            <div className="App-body">
                <div>
                    <input type="text" defaultValue={this.props.number}/>
                    <div>
                        <button className="App-graphicalCalc-numeric-button"
                                onClick={handleIncrement}>Increment</button>
                    </div>
                    <div>
                        <button className="App-graphicalCalc-numeric-button"
                                onClick={handleDecrement}>Decrement</button>
                    </div>
                    <div>
                        <button className="App-graphicalCalc-numeric-button"
                                onClick={handleStop}>Stop</button>
                    </div>
                </div>
                <div>
                    <a className="App-link" href="/">Back to Main Page</a>
                </div>
            </div>
        );
    }
}

const toggleContainer = connect(mapStateToProps, mapDispatchToProps)(Toggle);

export default toggleContainer;