import React from 'react';
import { connect } from 'react-redux';
import { Input } from '@progress/kendo-react-inputs';
import {selectPayment } from '../../../../../Redux/Actions/EndUser/BillingAction';

class CardPayment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
  
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
    handleACHClick= (event) => {
        this.props.selectPayment("ACH")
    }

    render() {
        return (
            <div className="paymentContainer"> 
                    <h3>Pay with a check</h3>
                    <div className="row">
                        <div className="col-md-6">
                           <p>Check payments will be address on the memebership confirmation screen.
                               Please continue with set up. Click "Next Step" to continue.
                               </p>
                        </div>
                    </div>
                    <div className="row vertHorzCenter">
                        <button type="submit" className="signUpBtns">NEXT STEP</button> 
                        <button href="#" className="secondary" onClick={this.handleCardClick}>Pay With Card</button>
                        <button href="#" className="secondary" onClick={this.handleACHClick}>Pay From Bank</button> 
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

export default connect(mapStateToProps, {selectPayment })(CardPayment);

