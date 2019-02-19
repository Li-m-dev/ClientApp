import axios from 'axios';

export const GET_STATES = 'GET_STATES';
export const SELECT_STATE = 'SELECT_STATE';


const ROOT_API_URL = 'https://localhost:44350/api';
//`https://tscramembershipportalapi-dev.azurewebsites.net/api`;

export function fetchStates() {
    return function (dispatch) {
        axios.get(`${ROOT_API_URL}/GetStates`)
            .then((response) => dispatch({
                type: GET_STATES,
                states: response.data
            })).catch((response) => {
                console.log(response);
            })
    }
}
export function selectState(selectedStateObject) {
    return function (dispatch) {
        dispatch({
            type: SELECT_STATE,
            selectedState: selectedStateObject
        })
    }
}

