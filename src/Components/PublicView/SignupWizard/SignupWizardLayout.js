import React from 'react';
import { connect } from 'react-redux';
import { signupPlus, signupSubtract } from '../../../Redux/Actions/SignupWizardActions';
import FreeWizardNav from './FreeAccount/Nav/FreeWizardNav';
import StandardWizardNav from './StandardAccount/Nav/StandardWizardNav';
import MembershipAssignment from '../Pages/EndUser/Signup/MembershipAssignment';
import BillingInformation from '../Pages/EndUser/Billing/BillingInformation';

import './signupWizard.css';

class SignupWizardLayout extends React.Component {
    constructor(props) {
        super(props);

        this.plus = this.plus.bind(this);
        this.subtract = this.subtract.bind(this);
        this.wizardPages = this.wizardPages.bind(this);
    }

    wizardPages(step) {
        switch (step) {
            case 1:
                return (
                    <MembershipAssignment />
                );
            case 2:
                return (
                    <BillingInformation />
                );
            case 3:
                return 3;
            case 4:
                return 4;
            default:
                return "Error";
        }
    }

    plus() {
        this.props.signupPlus(this.props.signupWizard.signupStep)
    }

    subtract() {
        this.props.signupSubtract(this.props.signupWizard.signupStep)
    }

    render() {
        return (
            <div className="height100percent">
                {false ? <FreeWizardNav /> : <StandardWizardNav />}
                <div className="row height100percent">
                    <div className="col-md-7">
                        {this.wizardPages(this.props.signupWizard.signupStep)}
                    </div>
                    <div className="col-md-5">
                        <div className="cowBackground">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { signupWizard: state.signupWizard }
}

export default connect(mapStateToProps, { signupPlus, signupSubtract })(SignupWizardLayout);