import {SELECT_PAYMENT } from '../../Actions/EndUser/BillingAction';
export const reducer = (state = {selectedPayment:"Card"}, action) => {
    switch (action.type) {
        case SELECT_PAYMENT:
            return {
                ...state,
                selectedPayment: action.selectedPayment
            };  
            default:
            return state;
    }
}
