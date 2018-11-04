import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Items from "./components/items/Items";
import initialState from "./reducers/initialState";
import { getItems } from "./actions/itemsActions";
import "./style.css";
const store = configureStore(initialState);

if (window.location.pathname === "/") {
  store.dispatch(getItems());
}

render(
  <Provider store={store}>
    <Items />
  </Provider>,
  document.getElementById("root")
);
