import { GET_STATES, SELECT_STATE} from '../Actions/CommonActions';
export const reducer = (state = { states: [], selectedState: null}, action) => {
    switch (action.type) {
        case GET_STATES:
            return {
                ...state,
                states: action.states
            };
        case SELECT_STATE:
            return {
                ...state,
                selectedState: action.selectedState
            };
            default:
            return state;
    }
}
