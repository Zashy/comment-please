import ActionTypes from '../constants/action-types';
import fetch from 'isomorphic-fetch';

/*
    generic fetchData function for fetching API data from a url
    dispactches events using the provided ACTION_TYPE
*/
export function fetchData(url, ACTION_TYPE) {


    return (dispatch) => {
        dispatch(requestData());

        return fetch(url, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((req) => req.json())
            .then((json) => dispatch(receiveData(json, ACTION_TYPE)))
            .catch((err) => dispatch(receiveError(err, ACTION_TYPE)));
    };
}

/*
    generic requestData action to notify any listeners of a data request
*/
function requestData() {
    return {
        type: ActionTypes.REQUEST_DATA,
        payload: null
    };
}

/*
    generic receive data action to notify any listeners data with the ACTION_TYPE was received
    or if an error occurred
 */
function receiveData(data, ACTION_TYPE) {
    // todo: Create logging for api transactions

    if (data && data.errorMessage) {
        return {
            type: ActionTypes.RECEIVE_DATA,
            payload: data

        };
    }

    return {
        type: ACTION_TYPE,
        payload: data
    };
}

/*
    generic receive error action, for now it logs the error to the console
 */
function receiveError(err, ACTION_TYPE) {
    console.log(err);
    console.log(err.stack);
}

