import {
    combineReducers
} from 'redux';
import { reducer as formReducer} from 'redux-form';

import fetchDataReducer from './modules/card_data';
import fetchSingleUserData from './modules/profile_data';
import authenticationData from './modules/authenticate';
import client from '../config/apolloClient';

export default combineReducers({
    apollo: client.reducer(),
    cardAndUserData: fetchDataReducer,
    singleUserData: fetchSingleUserData,
    auth: authenticationData,
    form: formReducer
});