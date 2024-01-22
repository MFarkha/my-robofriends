import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

// const logger = createLogger();
const rootReducers = combineReducers({ searchRobots, requestRobots })
// const store = createStore(rootReducers, applyMiddleware(thunk, logger));

// const store = createStore(
//   combineReducers(reducers),
//   normalizedInitialState,
//   enhancer
// );

const store = configureStore({
  reducer: rootReducers,
  // middleware: () => [thunk, logger],
  middleware: () => [thunk],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
