import { legacy_createStore as createStore } from 'redux';
// import { createStore } from "@reduxjs/toolkit";

import rootReducer from './reducers/index';

const store = createStore(rootReducer)

export default store;
