import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, IRobot } from '../../app/store';

const ROBOTS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const requestRobots = createAsyncThunk(
    'requestRobots',
    async () => {
        const response = await fetch(ROBOTS_API_URL);
        if (!response.ok) {
            throw new Error('failed to fetch a data')
        }
        return response.json();
    }
)
  
export type requestRobotsState = {
    isPending: boolean,
    robots: Array<IRobot>,
    error: string
};

const initialState: requestRobotsState = {
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobotsSlice = createSlice({
    name: 'requestRobots',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(requestRobots.pending, (state, action) => {
            state.isPending = true
          })
          .addCase(requestRobots.fulfilled, (state, action) => {
            state.isPending = false
            if (action.payload.length===0) {
                state.error = 'error: empty results received'
            } else {
                state.robots = action.payload
            }
          })
          .addCase(requestRobots.rejected, (state, action) => {
            state.isPending = false
            state.error = action.error.message as string
          })
    }
})

export default requestRobotsSlice.reducer

export const selectRobots = (state: RootState) => state.requestRobots
