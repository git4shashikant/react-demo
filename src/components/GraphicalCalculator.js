import React from 'react';
import * as Constants from '../Constants'

class GraphicalCalculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            function: '',
            previous: '',
            next: '',
            display: '',
            displayNextToggle: false,
            isDisplayResult: false
        }
    }

    onNumberClick(event) {
        if (this.state.isDisplayResult) {
            this.setState({previous: event.target.value});
            this.setState({display: event.target.value});
            this.setState({isDisplayResult: false});

            return;
        }

        if (this.state.display === ''){
            if (this.state.displayNextToggle) {
                this.setState({next: event.target.value});
                this.setState({display: event.target.value});
            } else {
                this.setState({previous: event.target.value});
                this.setState({display: event.target.value});
            }
        } else {
            if (this.state.displayNextToggle) {
                this.setState({next: this.state.next + '' + event.target.value});
                this.setState({display: this.state.next + '' + event.target.value});
            } else {
                this.setState({previous: this.state.previous + '' + event.target.value});
                this.setState({display: this.state.previous + '' + event.target.value});
            }
        }
    }

    onFunctionClick(event) {
        if (this.state.previous === '') {
            return;
        }

        if (this.state.function === '') {
            this.setState({displayNextToggle: true});
        }

        if (this.state.next !== '') {
            this.calculation();
            this.setState({function: event.target.value});
            return;
        }

        this.setState({function: event.target.value});
        this.setState({display: event.target.value});

        if (this.state.isDisplayResult) {
            this.setState({isDisplayResult: false});
        }
    }

    onClear(event) {
        if (event.target.value === Constants.FUNC_TYPE_CLEAR) {
            this.setState({function: ''});
            this.setState({previous: ''});
            this.setState({next: ''});
            this.setState({display: ''});
            this.setState({displayNextToggle: false});
            this.setState({isDisplayResult: false});
        }
    }

    onEqualsClick(event) {
        if (event.target.value === 'E' && this.state.function !== '' && this.state.previous !== '' && this.state.next !== '') {
            this.calculation();
            this.setState({function: ''});
            this.setState({next: ''});
            this.setState({displayNextToggle: false});
            this.setState({isDisplayResult: true});
        }
    }

    calculation() {
        let selectedFunc = this.state.function;
        switch (selectedFunc) {
            case Constants.FUNC_TYPE_SUM:
                this.setState({ display: parseFloat(this.state.previous) + parseFloat(this.state.next)});
                this.setState({ previous: parseFloat(this.state.previous) + parseFloat(this.state.next)});
                this.setState({ next: ''});
                break;
            case Constants.FUNC_TYPE_SUB:
                this.setState({ display: parseFloat(this.state.previous) - parseFloat(this.state.next)});
                this.setState({ previous: parseFloat(this.state.previous) - parseFloat(this.state.next)});
                this.setState({ next: ''});
                break;
            case Constants.FUNC_TYPE_MUL:
                this.setState({ display: parseFloat(this.state.previous) * parseFloat(this.state.next)});
                this.setState({ previous: parseFloat(this.state.previous) * parseFloat(this.state.next)});
                this.setState({ next: ''});
                break;
            case Constants.FUNC_TYPE_DIV:
                this.setState({ display: parseFloat(this.state.previous) / parseFloat(this.state.next)});
                this.setState({ previous: parseFloat(this.state.previous) / parseFloat(this.state.next)});
                this.setState({ next: ''});
                break;
            default:
                console.log("Please select a valid numeric operation");
        }
    }

    render() {
        return (
            <div className="App-body">
                <div id="calculator" className="App-graphicalCalc">
                    <div id="display">
                        <input defaultValue={this.state.display} className="App-graphicalCalc-display"/>
                    </div>
                    <div id="functions">
                        <button value="+" className="App-graphicalCalc-function-button" onClick={event => this.onFunctionClick(event)}>+</button>
                        <button value="-" className="App-graphicalCalc-function-button" onClick={event => this.onFunctionClick(event)}>-</button>
                        <button value="*" className="App-graphicalCalc-function-button" onClick={event => this.onFunctionClick(event)}>*</button>
                        <button value="/" className="App-graphicalCalc-function-button" onClick={event => this.onFunctionClick(event)}>/</button>
                    </div>
                    <div id="keypad">
                        <div id="numbers" className="App-graphicalCalc-number">
                            <div>
                                <button value="1" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>1</button>
                                <button value="2" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>2</button>
                                <button value="3" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>3</button>
                            </div>
                            <div>
                                <button value="4" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>4</button>
                                <button value="5" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>5</button>
                                <button value="6" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>6</button>
                            </div>
                            <div>
                                <button value="7" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>7</button>
                                <button value="8" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>8</button>
                                <button value="9" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>9</button>
                            </div>
                            <div>
                                <button value="." className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>.</button>
                                <button value="0" className="App-graphicalCalc-numeric-button" onClick={event => this.onNumberClick(event)}>0</button>
                                <button value="AC" className="App-graphicalCalc-numeric-button" onClick={event => this.onClear(event)}>AC</button>
                            </div>
                        </div>
                        <div id="enter" className="App-graphicalCalc-enter">
                            <button value="E" className="App-graphicalCalc-enter-button" onClick={event => this.onEqualsClick(event)}>=</button>
                        </div>
                    </div>
                </div>
                <div>
                    <a className="App-link" href="/">Back to Main Page</a>
                </div>
            </div>
        );
    }
}

export default GraphicalCalculator;