import axios from "axios";

export const asyncGetDeliverItems = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3099/deliverItems")
      .then((response) => {
        const result = response.data;
        dispatch(getDeliverItem(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

const getDeliverItem = (data) => {
  return {
    type: "ADD_DELIVER",
    payload: data,
  };
};

export const asyncSetDeliverItem = (formData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3099/deliverItems", formData)
      .then((response) => {
        const result = response.data;
        dispatch(setDeliverItem(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

const setDeliverItem = (data) => {
  return {
    type: "SET_DELIVER",
    payload: data,
  };
};
