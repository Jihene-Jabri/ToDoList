import { combineReducers } from "redux";
import taskReducer from "./taskreducer";

const rootReducer = combineReducers({ taskReducer });

export default rootReducer;
