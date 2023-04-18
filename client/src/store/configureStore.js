import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import deliverReducer from "../reducers/deliverReducer";
import itemReducer from "../reducers/itemReducer";
import orderReducer from "../reducers/orderReducer";
import searchReducer from "../reducers/searchReducer";
import statusReducer from "../reducers/statusReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      items: itemReducer,
      orders: orderReducer,
      searchItem: searchReducer,
      deliverItems: deliverReducer,
      status: statusReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
