import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";
import base from './base';
import auth from './auth'
import user from './user'
import { penderReducer } from 'redux-pender';

export default combineReducers({
    base,
    auth,
    user,
    pender: penderReducer
});