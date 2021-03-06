import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './root_reducer';
import client from '../config/apolloClient';

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, client.middleware())) 
);