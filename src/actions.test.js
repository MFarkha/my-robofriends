import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants.js';

import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import * as actions from './actions';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('setSearchField', () => {
    it('sets searchField succesfully', () => {
        const mockText = 'something text';
        expect(actions.setSearchField(mockText)).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: mockText
        })
    });
});

describe('requestRobots', () => {
    it('puts request for robots', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots(fetch));
        const action = store.getActions();
        // console.log('action:', action);
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        };
        expect(action[0]).toEqual(expectedAction);
    });
    it('dispatch request for robots succesfully', () => {
        const store = mockStore();
        const expectedAction = {
            type: REQUEST_ROBOTS_SUCCESS
        };
        expect.assertions(2);
        return store.dispatch(actions.requestRobots(fetch))
            .then((data) => {
                expect(data.type).toEqual(expectedAction.type);
                expect(data.payload.length).toEqual(10);
            })
    });
    it('returns an error if the request for robots was unsuccefull', () => {
        const store = mockStore();
        const expectedAction = {
            type: REQUEST_ROBOTS_FAILED
        };
        const mockFetch = jest.fn()
            .mockReturnValue(Promise.resolve({ ok: false })); //simulate unssuccesfull fetch response
        expect.assertions(1);
        return store.dispatch(actions.requestRobots(mockFetch))
            .then((data) => {
                expect(data.type).toEqual(expectedAction.type);
            })
    });

});

