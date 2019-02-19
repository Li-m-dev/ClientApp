import axios from 'axios';

export const GET_MEMBERSHIPTYPES = 'GET_MEMBERSHIPTYPES';
export const SELECT_MEMBERSHIPTYPE = 'SELECT_MEMBERSHIPTYPE';
export const GET_MEMBERSHIPPACKAGES = 'GET_MEMBERSHIPPACKAGES';
export const SELECT_MEMBERSHIPPACKAGE = 'SELECT_MEMBERSHIPPACKAGE';
export const ADD_MEMBERSHIPASSIGNMENT = 'ADD_MEMBERSHIPASSIGNMENT';

export const SELECT_PAYWITHCARD = 'SELECT_PAYWITHCARD';

const ROOT_API_URL = 'https://localhost:44350/api';
// `https://tscramembershipportalapi-dev.azurewebsites.net/api`;

export function fetchMembershipTypes() {
    return function (dispatch) {
        axios.get(`${ROOT_API_URL}/GetMembershipTypes`)
            .then((response) => dispatch({
                type: GET_MEMBERSHIPTYPES,
                membershipTypes: response.data
            })).catch((response) => {
                console.log(response);
            })
    }
}
export function selectMembershipType(selectedMembershipTypeObject) {
    return function (dispatch) {
        dispatch({
            type: SELECT_MEMBERSHIPTYPE,
            selectedMembershipType: selectedMembershipTypeObject
        })
    }
}
export function fetchMembershipPackages(membershipTypeId) {
    return function (dispatch) {
        axios.get(`${ROOT_API_URL}/GetMembershipPackages?membershipTypeId=${membershipTypeId}`)
            .then((response) => dispatch({
                type: GET_MEMBERSHIPPACKAGES,
                membershipPackages: response.data
            })).catch((response) => {
                console.log(response);
            })
    }
}
export function selectMembershipPackage(selectedMembershipPackageObject) {
    return function (dispatch) {
        dispatch({
            type: SELECT_MEMBERSHIPPACKAGE,
            selectedMembershipPackage: selectedMembershipPackageObject
        })
    }
}
export function addMembershipAssignment(model) {
    return function (dispatch) {
        axios.post(`${ROOT_API_URL}/CreateMembershipAssignment`, model)
            .then((response) => dispatch({
                type: ADD_MEMBERSHIPASSIGNMENT,
                newAccount: response.data
            })).catch((response) => {
                console.log(response);
            })
    }
}

export function selectPaywithCard(selectedPaywithcardObject) {
    return function (dispatch) {
        dispatch({
            type: SELECT_PAYWITHCARD,
            selectedPaywithCard: selectedPaywithcardObject
        })
    }
}