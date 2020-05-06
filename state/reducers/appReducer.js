import {combineReducers} from 'redux';

import propertyReducer from './propertyReducer';
import selectedReducer from './selectedReducer';
import filterReducer from './filterReducer';
import FavouriteReducer from './FavouriteReducer';

export default combineReducers({
    property:propertyReducer,
    selectedProperty:selectedReducer,
    filter:filterReducer
});