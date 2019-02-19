import React from 'react';
import queryString from 'query-string';
import '../../Home/AccountComponents/account.css'

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            passwordConfirm: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        let params = queryString.parse(this.props.location.search)

        console.log('props', this.props)
        console.log('params', params);
        // const response = axios.post('https://tscramembershipportalapi-dev.azurewebsites.net/api/account/register', {
        //     Email: this.state.email,
        //     Password: this.state.password
        // }, config).then(() => {
        //     console.log('response', response);
        //     console.log("props: ", this.props)
        //     this.props.history.push('/registerConfirmation');
        // });
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <h1>
                    Change your password
                </h1>
                <h3>Set your login email and password.</h3>
                <div >
                    <form >
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

//export default withRouter(RegisterConfirmation)