const itemInitialState = [];

const itemReducer = (state = itemInitialState, action) => {
  switch (action.type) {
    case "GET_ITEM": {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default itemReducer;
