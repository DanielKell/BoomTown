import { combineReducers } from 'redux';

import fetchDataReducer from './modules/card_data';
import fetchSingleUserData from './modules/profile_data';

export default combineReducers({
    cardAndUserData: fetchDataReducer,
    singleUserData: fetchSingleUserData
});