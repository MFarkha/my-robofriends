import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type searchRobotsState = {
    searchField?: string,
}

const initialState: searchRobotsState = {
    searchField: '',
}

export const searchRobotsSlice = createSlice({
    name: 'searchRobots',
    initialState,
    reducers: {
        robotsSearched(state, action: PayloadAction<string>) {
            state.searchField = action.payload
        }
    }
});

export const { robotsSearched } = searchRobotsSlice.actions

export const selectSearchField = (state: RootState) => state.searchRobots.searchField

export default searchRobotsSlice.reducer