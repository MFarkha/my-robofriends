import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('returns initial state in case of undefined and empty object', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    });
    it('returns initial state in case of undefined and empty object 2', () => {
        expect(reducers.searchRobots()).toEqual(initialStateSearch);
    });

    it('handles CHANGE_SEARCH_FIELD event', () => {
        const mockAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: 'searchString'
        }
        const expectedState = Object.assign({}, initialStateSearch, {
            searchField: 'searchString'
        });
        expect(reducers.searchRobots(initialStateSearch, mockAction))
            .toEqual(expectedState);
    })
});

describe('requestRobots', () => {
    const initialStateRequest = {
        isPending: false,
        robots: [],
        error: ''
    };
    it('returns initial state in case of undefined and empty object', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRequest);
    });

    it('returns initial state in case of undefined and empty object 2', () => {
        expect(reducers.requestRobots()).toEqual(initialStateRequest);
    });

    it('handles REQUEST_ROBOTS_PENDING event', () => {
        const mockAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        const expectedState = Object.assign({}, initialStateRequest, { isPending: true });

        expect(reducers.requestRobots(initialStateRequest, mockAction))
            .toEqual(expectedState);
    });

    it('handles REQUEST_ROBOTS_SUCCESS event', () => {
        const payload = {
            id: 1,
            name: 'John Snow',
            email: 'john@example.com'
        }
        const mockAction = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: payload
        }
        const expectedState = Object.assign({}, initialStateRequest, { isPending: false, robots: payload });
        expect(reducers.requestRobots(initialStateRequest, mockAction))
            .toEqual(expectedState);
    });

    it('handles REQUEST_ROBOTS_FAILED event', () => {
        const mockAction = {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'some error'
        }
        const expectedState = Object.assign({}, initialStateRequest, { isPending: false, error: 'some error' });
        expect(reducers.requestRobots(initialStateRequest, mockAction))
            .toEqual(expectedState);
    });

});
