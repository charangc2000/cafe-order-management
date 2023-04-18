const searchInitialState = [];

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case "GET_SEARCHES": {
      return [...action.payload];
    }
    case "GET_ERROR": {
      return [action.payload];
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
