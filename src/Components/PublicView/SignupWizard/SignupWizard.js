import React from 'react';
import { connect } from 'react-redux';

import SignupWizardLayout from './SignupWizardLayout';

import './signupWizard.css';
import { toggleSignupWizard } from '../../Actions/SignupWizardActions';

class SignupWizard extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSignupWizard = this.toggleSignupWizard.bind(this);
    }

    toggleSignupWizard(event) {

        event.preventDefault();
        this.props.toggleSignupWizard(this.props.signupWizard.isSignupWizardOpen);
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleSignupWizard}>popup</button>
                {this.props.signupWizard.isSignupWizardOpen ?
                    <div className="signupWizardPopup" >
                        <SignupWizardLayout />
                    </div>
                : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { signupWizard: state.signupWizard }
}

export default connect(mapStateToProps, { toggleSignupWizard })(SignupWizard);