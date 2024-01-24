import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants';

import { IAppState, IRobot } from './store'; 

type AppAction = {
    type?: string,
    payload?: string
};

const initialStateSearch = {
    searchField: ''
};

export const searchRobots = (state: IAppState = initialStateSearch, action:AppAction = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

const initialStateRequest = {
    isPending: false,
    robots: [] as Array<IRobot>,
    error: ''
};
export const requestRobots = (state: IAppState = initialStateRequest, action: AppAction = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { isPending: false, robots: action.payload });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload, robots: [] });
        default:
            return state;
    }
};