import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    ROBOTS_API_URL
} from './constants';

import { AppDispatch } from './store';

export const setSearchField = (text: string) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
};
type AppFetchFunc = typeof fetch;

export function requestRobots(fetch_func: AppFetchFunc) {
    return (dispatch: AppDispatch) => {
        dispatch( { type: REQUEST_ROBOTS_PENDING } );
        return fetch_func(ROBOTS_API_URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Wrong Url - unable to fetch API data');
                }
            })
            .then(data => {
                return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
            })
            .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
    }
}