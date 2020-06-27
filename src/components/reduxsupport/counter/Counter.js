import React from 'react';
import { connect } from 'react-redux';

import '../../../index.css';

import {mapStateToProps, mapDispatchToProps} from "./Container";

// App.js
export class Counter extends React.Component {
    render() {
        return (
            <div className="App-body">
                <h5>{this.props.counterReducer.title || 'Welcome!'}</h5>

                {this.props.counterReducer.title ? (
                    <button className="App-graphicalCalc-numeric-button" onClick={this.props.handleClose}>welcome</button>
                ) : (
                    <button className="App-graphicalCalc-numeric-button"
                        onClick={() => this.props.handleActivate({ title: 'Message!' })}>
                        show message
                    </button>
                )}
                <div>
                    <a className="App-link" href="/">Back to Main Page</a>
                </div>
            </div>
        );
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default AppContainer;