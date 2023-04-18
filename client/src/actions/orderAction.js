import axios from "axios";

export const asyncGetOrders = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3099/orders")
      .then((response) => {
        const result = response.data;
        dispatch(getOrders(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

const getOrders = (data) => {
  return {
    type: "GET_ORDER",
    payload: data,
  };
};

export const asyncSetOrders = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3099/orders", data)
      .then((response) => {
        const result = response.data;
        dispatch(setOrders(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

const setOrders = (data) => {
  return {
    type: "SET_ORDER",
    payload: data,
  };
};

export const asyncDeleteOrder = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3099/orders/${id}`)
      .then((response) => {
        const result = response.data;
        dispatch(removeOrderItem(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

const removeOrderItem = (data) => {
  return {
    type: "REMOVE_ORDER",
    payload: data,
  };
};
