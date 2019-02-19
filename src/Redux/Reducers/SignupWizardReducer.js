import { TOGGLE_SIGNUP_WIZARD, SIGNUP_STEP } from '../Actions/SignupWizardActions';

export const reducer = (state = { isSignupWizardOpen: false, signupStep: 1  }, action) => {
    switch (action.type) {
        case TOGGLE_SIGNUP_WIZARD:
            return {
                ...state,
                isSignupWizardOpen: action.wizardToggle
            };
        case SIGNUP_STEP:
            return {
                ...state,
                signupStep: action.signupStep
            };
        default:
            return state;
    }
}
