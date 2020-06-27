import React, {Component} from 'react'
import * as Constants from '../Constants';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            name: '',
            department: '',
            role: '',
            technologies: [],
            gender: '',
            notes: '',
            availableRoles: []
        };
    }

    componentDidMount() {
        this.setState({availableRoles: Constants.managementRoles});
    }

    handleDeptChange(event) {
        let deptSelected = event.target.value;
        this.setState({department: event.target.value});

        switch (deptSelected) {
            case Constants.DEPT_MGMT:
                this.setState({availableRoles: Constants.managementRoles});
                break;
            case Constants.DEPT_DEVOPS:
                this.setState({availableRoles: Constants.devOpsRoles});
                break;
            case Constants.DEPT_SALES:
                this.setState({availableRoles: Constants.salesRoles});
                break;
            case Constants.DEPT_TECH:
                this.setState({availableRoles: Constants.technicalRoles});
                break;
            default:
        }
    }

    handleRoleChange(event) {
        this.setState({role: event.target.value});
    }

    handleRadioClick(event) {
        this.setState({gender: event.target.value});
    }

    handleTech(event) {
        this.setState({technologies: this.state.technologies.concat(event.target.value)});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
        })
        console.log(this.state);
    }

    handleClear() {
        this.setState({
            name: '',
            department: 'M',
            role: '',
            technologies: [],
            gender: '',
            notes: ''
        })
    }

    render() {
        return (
            <div className="App-body">
                <div className="App-form">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div className="App-form-div">
                            <label className="App-form-label">
                                Name:
                                <input className="App-form-field" type="text" value={this.state.name}
                                       onChange={event => this.setState({name: event.target.value})}/>
                            </label>
                        </div>
                        <div className="App-form-div">
                            <label className="App-form-label">
                                Department:
                                <select className="App-form-field" onChange={event => this.handleDeptChange(event)}>
                                    <option key='M' defaultValue value='M' >Management</option>
                                    <option key='D' value='D'>DevOps</option>
                                    <option key='S' value='S'>Sales</option>
                                    <option key='T' value='T'>Technical</option>
                                </select>
                            </label>
                        </div>
                        <div className="App-form-div">
                            <label className="App-form-label">
                                Roles:
                                <select className="App-form-field" value={this.state.role} onChange={event => this.handleRoleChange(event)}>
                                    {
                                        this.state.availableRoles.map( availableRole =>
                                        <option key={availableRole} value={availableRole}>{availableRole}</option>
                                        )
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="App-form-div">
                            <label className="App-form-label"> Technologies:
                                <div>
                                    {
                                        Constants.technologies.map(technology =>
                                            <label key={technology} className="App-form-label">
                                                <div>
                                                <input type="checkbox" value={technology} onChange={event => this.handleTech(event)}/>
                                                    {technology}
                                                </div>
                                            </label>
                                        )
                                    }
                                </div>
                            </label>
                        </div>
                        <div className="App-form-div">
                            <div>
                                <label className="App-form-label">
                                    <input type="radio" value="Male" checked={this.state.gender === 'Male'} onChange={event => this.handleRadioClick(event)}/>
                                    Male
                                </label>
                                <label className="App-form-label">
                                    <input type="radio" value="Female" checked={this.state.gender === 'Female'} onChange={event => this.handleRadioClick(event)}/>
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="App-form-div">
                            <label className="App-form-label">
                                Notes:
                                <textarea className="App-form-field" onChange={event => this.setState({notes: event.target.value})}/>
                            </label>
                        </div>
                        <button>Submit</button> <button onClick={event => this.handleClear(event)}>Clear</button>
                    </form>
                </div>
                <div>
                    <a className="App-link" href="/">Back to Main Page</a>
                </div>
        </div>);
    }
}

export default Form;