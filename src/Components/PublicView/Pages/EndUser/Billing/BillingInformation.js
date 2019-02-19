import React from 'react';
import { connect } from 'react-redux';
import {selectPayment } from '../../../../../Redux/Actions/EndUser/BillingAction';
import { fetchStates } from '../../../../../Redux/Actions/CommonActions';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Input } from '@progress/kendo-react-inputs';
import CardPayment from './CardPayment';
import ACHPayment from './ACHPayment';
import CheckPayment from './CheckPayment';

class BillingInformation extends React.Component {
    constructor(props) {
        super(props);
        //this.handleInputChange = this.handleInputChange.bind(this);  
        this.state = {
            BillingAddress1:"",
            BillingAddress2:"",
            BillingCity:"",
            BillingZip :"",
            Phone:"",
            BillingStateId: 1,
            PaidByUser:""
        };
        
    }
    // handleInputChange(event) {
    //     event.preventDefault();
    //     this.setState({ PaywithCard: event.target.value.PaywithCard })
    //   }
    componentDidMount() {
       
        this.props.fetchStates();
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
    handleState = (event) => {
        this.setState({
            BillingStateId: event.target.value.stateID   
     })
    }

    render() {
        return (
            <div className="billinFormContainer">
                <form className="billingForm" onSubmit={this.handleSubmit}> 
                    <div className="billingInformationTop">
                        <h1><span className="blue">Billing Information</span></h1>
                        <h3>Enter your <span className="blue">Billing</span> Address</h3>
                        <div className="row">
                            <div className="">
                                <label>Address1</label>
                                <Input
                                    validityStyles={false}
                                    value={this.state.BillingAddress1}
                                    onChange={this.handleChange}
                                    name="BillingAddress1"
                                    style={{ width: "250px" }}
                                    minLength={2}
                                    required={true}
                                />
                            </div>
                            <div className="">
                                <label>Address2</label>
                                <Input
                                    validityStyles={false}
                                    value={this.state.BillingAddress2}
                                    onChange={this.handleChange}
                                    name="BillingAddress2"
                                    style={{ width: "250px" }}
                               
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                <label>City</label>
                                <Input
                                    validityStyles={false}
                                    value={this.state.BillingCity}
                                    onChange={this.handleChange}
                                    name="BillingCity"
                                    style={{ width: "250px" }}
                                    minLength={2}
                                    required={true}
                                />
                            </div>
                            <div className="">
                                <label>State </label>
                                    <ComboBox data={this.props.common.states}
                                        textField="stateDesc"
                                        dataItemKey="stateID"
                                        onChange={this.handleState}
                                        value={this.stateID}
                                        style={{ width: "100px" }}
                                    />
                             </div>
                            <div className="billingZip">
                                <label>Zip</label>
                                <Input
                                    validityStyles={false}
                                    value={this.state.BillingZip}
                                    onChange={this.handleChange}
                                    name="BillingZip"
                                    style={{ width: "200px" }}
                                    minLength={2}
                                    required={true}
                                />
                            </div>
                            <div className="">
                                <label>Phone</label>
                                <Input
                                    validityStyles={false}
                                    value={this.state.Phone}
                                    onChange={this.handleChange}
                                    name="Phone"
                                    style={{ width: "200px" }}
                                    minLength={2}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.billing.selectedPayment=="Card" && <CardPayment />}
                        {this.props.billing.selectedPayment=="ACH" && <ACHPayment />}
                        {this.props.billing.selectedPayment=="Check" && <CheckPayment />}
                    </div>
                    <div style={{ paddingLeft: "60px", marginTop: "10px" }}>
                        <p>When you have answered all the fields, click the BLUE "Next Step" to continue!</p>
                    </div>
                 </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        membership: state.membership,
        common: state.common,
        billing: state.billing
     }
}

export default connect(mapStateToProps, { fetchStates, CardPayment, ACHPayment, CheckPayment, selectPayment})(BillingInformation);

