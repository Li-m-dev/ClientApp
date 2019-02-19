import React from 'react';
import { connect } from 'react-redux';

import { toggleSignupWizard } from '../../../../../Redux/Actions/SignupWizardActions';

class FreeWizardNav extends React.Component {

    render() {
        return (
            <div className="wizardNav">
                <div className="progressContainer">
                    <img src="/images/wizardCheckmark.png" alt="checked" />
                    <div className="activeWizardNav">
                        <p className="header">Step 1: Account Info</p>
                        <p>input your account Information</p>
                    </div>
                </div>
                <div className="progressContainer">
                    {this.props.signupWizard.signupStep > 1 ? <img src="/images/wizardCheckmark.png" alt="checked" /> : <img src="/images/wizardCircle.png" alt="Not Checked" />}
                    <div className={this.props.signupWizard.signupStep > 1 ? "activeWizardNav" : null}>
                        <p className="header">Step 2: Billin Info</p>
                        <p>Input your Payment Information</p>
                    </div>
                </div>
                <div className="progressContainer">
                    {this.props.signupWizard.signupStep > 2 ? <img src="/images/wizardCheckmark.png" alt="checked" /> : <img src="/images/wizardCircle.png" alt="Not Checked" />}
                    <div className={this.props.signupWizard.signupStep > 2 ? "activeWizardNav" : null}>
                        <p className="header">Step: 3 Add-ons</p>
                        <p>Buy Membership Addons</p>
                    </div>
                </div>
                <div className="progressContainer">
                    {this.props.signupWizard.signupStep > 3 ? <img src="/images/wizardCheckmark.png" alt="checked" /> : <img src="/images/wizardCircle.png" alt="Not Checked" />}
                    <div className={this.props.signupWizard.signupStep > 3 ? "activeWizardNav" : null}>
                        <p className="header">Step 4: Confirm</p>
                        <p>Confirm Your Membership</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { signupWizard: state.signupWizard }
}

export default connect(mapStateToProps, { toggleSignupWizard })(FreeWizardNav);