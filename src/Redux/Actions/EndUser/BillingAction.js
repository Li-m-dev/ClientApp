import axios from 'axios';

export const SELECT_PAYMENT = 'SELECT_PAYMENT';

const ROOT_API_URL = 'https://localhost:44350/api';
//`https://tscramembershipportalapi-dev.azurewebsites.net/api`;

export function selectPayment(selectedPaymentObject) {
    return function (dispatch) {
        dispatch({
            type: SELECT_PAYMENT,
            selectedPayment: selectedPaymentObject
        })
    }
}

