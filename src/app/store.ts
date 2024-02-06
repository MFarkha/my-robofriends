import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';

import searchRobotsReducer, {
  searchRobotsState,
} from "../features/searchRobots/searchRobotsSlice";
import requestRobotsReducer, {
  requestRobotsState,
} from "../features/requestRobots/requestRobotsSlice";

export const store = configureStore({
  reducer: {
    searchRobots: searchRobotsReducer,
    requestRobots: requestRobotsReducer,
  },
  // middleware: (getDefaultMiddleware) => (
  //     getDefaultMiddleware().concat(logger)
  // ),
});
export type RootState = ReturnType<typeof store.getState>;
export const rootState = store.getState();
export type AppState = searchRobotsState & requestRobotsState;
export type AppDispatch = typeof store.dispatch;
export interface IRobot {
  name: string;
  id: number;
  email: string;
}
