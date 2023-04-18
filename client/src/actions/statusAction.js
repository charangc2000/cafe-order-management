const statusSet = (status) => {
  return {
    type: "SET_STATUS",
    payload: status,
  };
};

export default statusSet;
