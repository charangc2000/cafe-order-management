const deliverInitialState = [];

const deliverReducer = (state = deliverInitialState, action) => {
  switch (action.type) {
    case "ADD_DELIVER": {
      return [...action.payload];
    }
    case "SET_DELIVER": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default deliverReducer;
