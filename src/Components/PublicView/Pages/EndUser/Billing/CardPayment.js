import React from 'react';
import { connect } from 'react-redux';
import { Input } from '@progress/kendo-react-inputs';
import { selectPayment } from '../../../../../Redux/Actions/EndUser/BillingAction';
import { signupPlus, signupSubtract } from '../../../../../Redux/Actions/SignupWizardActions';

class CardPayment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            NameOnCard:"",
            CardNumber:"",
            ExpirationDate:"",
            CvcCode :"",
            IsAutoRenew:true,
        };
    }
   
    componentDidMount() {

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    backBtnClick = () => {
        this.props.signupSubtract(this.props.signupWizard.signupStep);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signupPlus(this.props.signupWizard.signupStep);
        console.log(this.state);
    }
    handleACHClick = (event) => {
        this.props.selectPayment("ACH")
    }
    handleCheckClick= (event) => {
        this.props.selectPayment("Check")
    }

    render() {
        return (
            <div className="paymentContainer">
                <h3>Enter your Card Information</h3>
                <div className="">
                    <div className="">
                        <label>Full Name on Card</label>
                        <Input
                            validityStyles={false}
                            value={this.state.NameOnCard}
                            onChange={this.handleChange}
                            name="NameOnCard"
                            style={{ width: "250px" }}
                            minLength={2}
                            required={true}
                        />
                    </div>
                </div>
                <div className="cardNumber">
                    <div className="">
                            <label>Card Number</label>
                            <Input
                                validityStyles={false}
                                value={this.state.CardNumber}
                                onChange={this.handleChange}
                                name="CardNumber"
                                style={{ width: "250px" }}
                                
                            />
                    </div>
                    <div className="">
                        <label>Expiration Date</label>
                        <Input
                            validityStyles={false}
                            value={this.state.ExpirationDate}
                            onChange={this.handleChange}
                            name="ExpirationDate"
                            style={{ width: "100px" }}
                            minLength={2}
                            required={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="">
                        <label>CVC Code</label>
                        <Input
                            validityStyles={false}
                            value={this.state.CvcCode}
                            onChange={this.handleChange}
                            name="CVCCode"
                            style={{ width: "150px" }}
                            minLength={2}
                            required={true}
                        />
                    </div>
                    <div className="">
                        <Input
                            type="checkbox"
                            // validityStyles={false}
                            checked={this.state.IsAutoRenew}
                            onChange={this.handleChange}
                            name="IsAutoRenew"
                            // style={{ width: "100%" }}
                            // minLength={2}
                            //required={true}
                        />
                        <label>Would you like to set your membership to auto-renew every year</label>
                    </div>
                </div>
                <div className="row vertHorzCenter">
                    <button type="submit" className="signUpBtns">NEXT STEP</button> 
                    <button className="signUpBtns" onClick={this.backBtnClick}>Back</button> 
                    <button href="#" className="secondary" onClick={this.handleACHClick}>Pay From Bank</button>
                    <button href="#" className="secondary" onClick={this.handleCheckClick}>Mail A Check</button> 
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        membership: state.membership,
        billing: state.billing,
        signupWizard: state.signupWizard
     }
}

export default connect(mapStateToProps, { selectPayment, signupPlus, signupSubtract })(CardPayment);

