import React from 'react';
import axios from 'axios';

export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log('state', this.state)

    }

    handleSubmit(event) {
        const response = axios.post('https://tscramembershipportalapi-dev.azurewebsites.net/api/account/ForgotPassword', {
            'email': this.state.email
        }).then(() => {
            console.log('response', response);
            // if good response need to show "email has been sent" otherwise show an error
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className="homeContainer">
                <div className="homeWelcomeContent">
                    <h1>
                        Reset Your Password
                    </h1>
                    <p>Please enter the email address associated with the account that needs the password reset. An email will be sent to that account with a link that will take you to a page where you can set a new password.</p>
                    <div className="homeBtnContainer2">
                        <form className="menuLogin">
                            <label>Email</label>
                            <input type="email" name="email" id="passwordResetEmail" value={this.state.email} placeholder="Enter Email Address" onChange={this.handleInputChange} />
                            <button type="button" onClick={this.handleSubmit}>Send Password Reset Email</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

//export default withRouter(AccountCreate)