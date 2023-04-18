const orderInitialState = [];

const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case "GET_ORDER": {
      return [...action.payload];
    }
    case "SET_ORDER": {
      return [...state, action.payload];
    }
    case "REMOVE_ORDER": {
      return [
        ...state.filter((order) => {
          return order._id !== action.payload._id;
        }),
      ];
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;
