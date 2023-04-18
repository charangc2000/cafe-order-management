import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { asyncGetDeliverItems } from "./actions/deliverAction";
import { asyncGetOrders } from "./actions/orderAction";
import App from "./App";
import configureStore from "./store/configureStore";

const store = configureStore();

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(asyncGetOrders());
store.dispatch(asyncGetDeliverItems());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
