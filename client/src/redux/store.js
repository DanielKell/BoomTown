import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from './root_reducer';
import client from '../config/apolloClient';

export default createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger(), client.middleware()) //Remove logger at release
);