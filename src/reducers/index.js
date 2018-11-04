import { combineReducers } from "redux";
import items from "./itemsReducer";
import ajaxStatus from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  items,
  ajaxStatus
});

export default rootReducer;
