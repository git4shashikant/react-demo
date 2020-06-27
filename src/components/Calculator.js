import React from 'react';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calcFunction: '',
            number1 : '',
            number2 : '',
            result: '',
            isHidden: true
        }
    }

    calculation() {
        console.log("Number1: ", this.state.number1, " Number2: ", this.state.number2);
        if (this.state.calcFunction === '+') {
            this.setState({  result: parseFloat(this.state.number1) + parseFloat(this.state.number2) })
        } else if (this.state.calcFunction === '-') {
            this.setState({ result: parseFloat(this.state.number1) - parseFloat(this.state.number2) })
        } if (this.state.calcFunction === '*') {
            this.setState({ result: parseFloat(this.state.number1) * parseFloat(this.state.number2) })
        } if (this.state.calcFunction === '/') {
            this.setState({ result: parseFloat(this.state.number1) / parseFloat(this.state.number2) })
        } else {
            console.log("Please select a valid numeric operation");
        }

        console.log(this.state)
    }

    onSelectionChange(event) {
        if (event.target.value !== 'Select Operation') {
            this.setState({isHidden: false})
        } else {
            this.setState({isHidden: true})
        }

        this.setState({calcFunction: event.target.value})
    }

    render() {
        return (
            <div className="App-body">
                <div>
                    <select onChange={event => this.onSelectionChange(event)}>
                        <option>Select Operation</option>
                        <option defaultValue value="+" >Sum (+)</option>
                        <option value="-">Subtraction (-)</option>
                        <option value="*">Multiplication (*)</option>
                        <option value="/">Division (/)</option>
                    </select>
                </div>
                <div hidden={this.state.isHidden}>
                    <input className="App-text" type="text" defaultValue={this.state.number1} onChange={event => this.setState({number1 : event.target.value})} />
                    {this.state.calcFunction}
                    <input className="App-text" type="text" defaultValue={this.state.number2 } onChange={event => this.setState({number2 : event.target.value})} onBlur={this.calculation.bind(this)}/>
                    =
                    <input type="text" defaultValue={this.state.result} onChange={event => this.setState({result : event.target.value})}/>
                </div>
                <div>
                    <a className="App-link" href="/">Back to Main Page</a>
                </div>
            </div>
        )
    }
}

export default Calculator;