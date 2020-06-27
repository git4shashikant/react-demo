import React, {Component} from 'react';

class IncrementButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
        return <div className="App-body">
            <div className="App-graphicalCalc-enter">
                <button className="App-graphicalCalc-numeric-button" onClick={() => this.setState({value: this.state.value + 1})}>
                    {this.state.value}
                </button>
                <button className="App-graphicalCalc-numeric-button" onClick={() => this.setState({value: 0})}>
                    reset
                </button>
            </div>
            <div>
                <a className="App-link" href="/">Back to Main Page</a>
            </div>
        </div>
    }
}

export default IncrementButton;