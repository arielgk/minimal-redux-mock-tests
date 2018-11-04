import * as types from "./actionTypes.js";
import ItemApi from "../api/ItemApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export const getItems = () => {
  return dispatch => {
    return ItemApi.getAllItems()
      .then(res => {
        dispatch({ type: types.GET_ITEMS_SUCCESS, items: res });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const addItem = item => {
  return dispatch => {
    dispatch(beginAjaxCall());

    ItemApi.saveItem(item)
      .then(res => {
        dispatch({ type: types.ADD_ITEM_SUCCESS, item: res });
      })
      .catch(error => {
        dispatch(ajaxCallError());
      });
  };
};
