import {
    combineReducers
} from 'redux';
import { reducer as formReducer} from 'redux-form';

import fetchDataReducer from './modules/card_data';
import fetchSingleUserData from './modules/profile_data';
import authenticationData from './modules/authenticate';
import tagData from './modules/tags';
import client from '../config/apolloClient';
import shareData from './modules/share_data';

export default combineReducers({
    apollo: client.reducer(),
    cardAndUserData: fetchDataReducer,
    singleUserData: fetchSingleUserData,
    auth: authenticationData,
    form: formReducer,
    tags: tagData,
    share: shareData
});