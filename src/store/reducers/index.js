import { combineReducers } from "redux";
import login from "./login";
import user from "./user";
import errors from "./errors";

export default combineReducers({
    login,
    user,
    errors
});