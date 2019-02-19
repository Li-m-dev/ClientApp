import React from 'react';
import './account.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class AccountCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordConfirm: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleInputChange(event) {
        console.log('handle input change event', event);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // console.log('target', target);
        // console.log('value', value);
        // console.log('name', name);
        this.setState({
            [name]: value
        });
        // console.log('state', this.state)
    }

    handleSubmit(event) {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        const response = axios.post('https://localhost:44350/api/account/register', {
            Email: this.state.email,
            Password: this.state.password
        }, config).then(() => {
            console.log('response', response);
            console.log("props: ", this.props)
            this.props.history.push('/registerConfirmation');
        });
        event.preventDefault();
    }

    handleSubmit2(event) {
        // alert('A name was submitted: ' + this.state);
        console.log('state', this.state)

        const response = axios.get('https://tscramembershipportalapi-dev.azurewebsites.net/api/account/testget').then(() => {
            // console.log('response', response);

        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>
                    Create Your Account
                </h1>
                <h3>Set your login email and password.</h3>
                <div className="homeBtnContainer2">
                    <form className="menuLogin createAccountForm">
                        <div className="inline">
                            <label>Email</label>
                            <input type="email" name="email" id="registerEmail" value={this.state.email} placeholder="Enter Email Address" onChange={this.handleInputChange} />
                        </div>
                        <div className="inline">
                            <label>Password</label>
                            <input type="password" name="password" id="registerPassword" value={this.state.password} placeholder="Enter Password" onChange={this.handleInputChange} />
                        </div>
                        <div className="inline">
                            <label>Confirm Password</label>
                            <input type="password" name="passwordConfirm" id="confirmRegisterPassword" value={this.state.passwordConfirm} placeholder="Confirm Password" onChange={this.handleInputChange} />
                        </div>
                        <div className="inline">
                            <button className="btnPrimary" type="button" onClick={this.handleSubmit}>Submit</button>
                        </div>
            
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AccountCreate);

