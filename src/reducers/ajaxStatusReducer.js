import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const actionTypeEndsWithSuccess = actionType => {
  return actionType.substring(actionType.length - 8) === "_SUCCESS";
};

export default (state = initialState.ajaxStatus, action) => {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (
    action.type === types.AJAX_CALL_ERROR ||
    actionTypeEndsWithSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
};
