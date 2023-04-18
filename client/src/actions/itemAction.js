import axios from "axios";

export const asyncGetItems = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3099/items")
      .then((response) => {
        const result = response.data;
        dispatch(getItems(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

const getItems = (data) => {
  return {
    type: "GET_ITEM",
    payload: data,
  };
};

export const asyncShowItems = (radio) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3099/items/${radio}`)
      .then((response) => {
        const result = response.data;
        dispatch(getItems(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const asyncSearchItem = (value) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3099/items/search/${value}`)
      .then((response) => {
        const result = response.data;
        if (Array.isArray(result)) {
          dispatch(searchItem(result));
        } else {
          dispatch(searchItem2(result));
        }
        // dispatch(searchItem(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

const searchItem = (data) => {
  return {
    type: "GET_SEARCHES",
    payload: data,
  };
};

const searchItem2 = (data) => {
  return {
    type: "GET_ERROR",
    payload: data,
  };
};
