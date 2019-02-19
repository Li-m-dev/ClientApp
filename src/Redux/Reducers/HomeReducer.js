import { REQUEST_HOME } from '../Actions/HomeActions';

export const reducer = (state = { home: "set" }, action) => {
    switch (action.type) {
        case REQUEST_HOME:
            return {
                ...state,
                home: action.home
            };
        default:
            return state;
    }
}
