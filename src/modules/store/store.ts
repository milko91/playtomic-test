import { createStore, combineReducers, compose } from 'redux';

import { securityManagementModule } from '../security-management';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({ securityManagementModule });

export const store = createStore(rootReducer, composeEnhancers());
