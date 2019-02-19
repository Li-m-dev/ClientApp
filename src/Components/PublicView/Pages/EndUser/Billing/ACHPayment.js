import React from 'react';
import { connect } from 'react-redux';
import { Input } from '@progress/kendo-react-inputs';
import {selectPayment } from '../../../../../Redux/Actions/EndUser/BillingAction';

class ACHPayment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            NameOnAccount:"",
            AccountNumber:"",
            ConfirmAccountNumber:"",
            RoutingNumber :"",
            IsAutoRenew:true,
            PaywithCard : false,
        };
    }
   
    componentDidMount() {

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    handleCardClick = (event) => {
        this.props.selectPayment("Card")
    }
    handleCheckClick= (event) => {
        this.props.selectPayment("Check")
    }


    render() {
        return (
            <div className="paymentContainer"> 
                <h3>Enter your Bank Information</h3>
                <div className="">
                    <div className="">
                        <label>Name on Account</label>
                        <Input
                            validityStyles={false}
                            value={this.state.NameOnAccount}
                            onChange={this.handleChange}
                            name="NameOnAccount"
                            style={{ width: "250px" }}
                            minLength={2}
                            required={true}
                        />
                    </div>
                </div>
                <div className="accountNumber">
                    <div className="">
                        <label>Account Number</label>
                        <Input
                            validityStyles={false}
                            value={this.state.AccountNumber}
                            onChange={this.handleChange}
                            name="AccountNumber"
                            style={{ width: "250px" }}
                               
                        />
                    </div>
                    <div className="">
                        <label>Confirm Account Number</label>
                        <Input
                            validityStyles={false}
                            value={this.state.ConfirmAccountNumber}
                            onChange={this.handleChange}
                            name="ConfirmAccountNumber"
                            style={{ width: "250px" }}
                            minLength={2}
                            required={true}
                        />
                    </div>
                </div>
                <div className="routingNumber">
                   
                    <div className="">
                        <label>Routing Number</label>
                        <Input
                            validityStyles={false}
                            value={this.state.RoutingNumber}
                            onChange={this.handleChange}
                            name="RoutingNumber"
                            style={{ width: "250px" }}
                            minLength={2}
                            required={true}
                        />
                    </div>
                    <div className="">                            
                        <Input
                            type="checkbox"
                            validityStyles={false}
                            checked={this.state.IsAutoRenew}
                            onChange={this.handleChange}
                            name="IsAutoRenew"
                            //style={{ width: "100%" }}
                            // minLength={2}
                            required={true}
                        />
                        <label>Would you like to set your membership to auto-renew every year</label>
                    </div>
                </div>
                <div className="row vertHorzCenter">   
                    <button type="submit" className="signUpBtns">NEXT STEP</button> 
                    <button className="secondary" onClick={this.handleCardClick}>Pay With Card</button>
                    <button className="secondary" onClick={this.handleCheckClick}>Mail A Check</button> 
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        membership: state.membership
     }
}

export default connect(mapStateToProps, {selectPayment })(ACHPayment);

