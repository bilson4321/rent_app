import { createStore } from 'redux';

import propertyAppReducer from './../reducers/propertyAppReducer';

const store=createStore(propertyAppReducer)

export default store;