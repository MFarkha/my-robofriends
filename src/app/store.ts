import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';

// import { createLogger } from 'redux-logger';
// const logger = createLogger();
const rootReducers = combineReducers({ searchRobots, requestRobots })

export const store = configureStore({
    reducer: rootReducers,
    // middleware: () => [logger],
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export interface IRobot {
    name: string,
    id: number,
    email: string
}

export interface IAppState {
    isPending?: boolean,
    searchField?: string,
    robots?: Array<IRobot>,
    error?: string
}

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
