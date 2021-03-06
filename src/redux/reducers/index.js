import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer/UsersReducer";

const rootReducer = combineReducers({ UsersReducer });

export default rootReducer;
