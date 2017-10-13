import { combineReducers } from 'redux';

import fetchDataReducer from './modules/card_data';

export default combineReducers({
    cardAndUserData: fetchDataReducer
});