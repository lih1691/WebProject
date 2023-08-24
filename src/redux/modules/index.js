import { combineReducers } from "redux/modules/index";
import base from './base';
import auth from './auth'

export default combineReducers({
    base,
    auth
});