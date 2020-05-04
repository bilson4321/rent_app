import {combineReducers} from 'redux';

import Favourite from './FavouriteReducer';


export default combineReducers({
    favourite:Favourite
});