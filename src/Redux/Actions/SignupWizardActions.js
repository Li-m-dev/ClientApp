export const TOGGLE_SIGNUP_WIZARD = 'TOGGLE_SIGNUP_WIZARD';
export const SIGNUP_STEP = 'SIGNUP_STEP';

export function toggleSignupWizard(wizardToggle) {
    return function (dispatch) {
        dispatch({
            type: TOGGLE_SIGNUP_WIZARD,
            wizardToggle: !wizardToggle
        })
    }
}

export function signupPlus(step) {
    return function (dispatch) {
        if (step + 1 > 4) {
            dispatch({
                type: SIGNUP_STEP,
                signupStep: step
            })
        } else {
            dispatch({
                type: SIGNUP_STEP,
                signupStep: ++step
            })
        }
    }
}

export function signupSubtract(step) {
    return function (dispatch) {
        if (step - 1 < 1) {
            dispatch({
                type: SIGNUP_STEP,
                signupStep: step
            })
        } else {
            dispatch({
                type: SIGNUP_STEP,
                signupStep: --step
            })
        }
    }
}