import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from './root_reducer';

export default createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger())
);