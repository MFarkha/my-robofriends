import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants';

import { AppState, IRobot, AppActionData } from './store';

const initialStateSearch = {
    searchField: ''
};

const initialAction = {
    type: ''
}

export const searchRobots = (state: AppState = initialStateSearch, action: AppActionData = initialAction) => {
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
export const requestRobots = (state: AppState = initialStateRequest, action: AppActionData = initialAction) => {
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