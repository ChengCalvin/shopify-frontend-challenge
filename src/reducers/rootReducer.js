import { combineReducers } from "redux";

import nominee from "./nomineeReducers";

const rootReducer = combineReducers({ nominee });

export default rootReducer;
