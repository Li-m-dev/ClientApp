export const REQUEST_HOME = 'REQUEST_HOME';

export function fetchHomes() {
    return function (dispatch) { 
        dispatch({
            type: REQUEST_HOME,
            home: "hi"
        })
    }
}