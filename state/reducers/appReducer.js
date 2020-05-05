import {combineReducers} from 'redux';

import propertyReducer from './propertyReducer';
import selectedReducer from './selectedReducer';

export default combineReducers({
    property:propertyReducer,
    selectedProperty:selectedReducer
});