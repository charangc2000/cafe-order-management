import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncSearchItem } from "../actions/itemAction";
import { asyncSetOrders } from "../actions/orderAction";
import { Card, Button, Space, Alert } from "antd";
import "../App.css";
import { asyncGetDeliverItems } from "../actions/deliverAction";
import statusSet from "../actions/statusAction";

const Search = (props) => {
  const { searchItem, deliverItems, status } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState({});

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(asyncGetDeliverItems());
  }, [dispatch]);

  useEffect(() => {
    if (deliverItems.length > 0) {
      setItem(deliverItems[deliverItems.length - 1]);
    }
  }, [dispatch, deliverItems]);

  useEffect(() => {
    dispatch(asyncSearchItem(value));
  }, [dispatch, value]);

  const handleAddClick = (item) => {
    const OrderData = {
      name: item.name,
      itemId: item._id,
      price: item.price,
    };
    dispatch(asyncSetOrders(OrderData));
    setValue("");
    setToggle(true);
  };

  return (
    <div>
      <div className="add-cards">
        <input
          style={{ width: 400, height: 30, borderRadius: 5 }}
          type="search"
          value={value}
          placeholder="search item here......"
          onChange={handleChange}
        />
        {toggle && (
          <Alert
            message="Order Added...!!!"
            type="success"
            showIcon
            action={
              <Button
                size="small"
                type="text"
                onClick={() => {
                  setToggle(false);
                }}
              >
                ok
              </Button>
            }
          />
        )}
        {Object.keys(item).length > 0 && status && (
          <Alert
            message={`The ${item.name} order is ready...!!!`}
            type="success"
            showIcon
            action={
              <Button
                onClick={() => {
                  dispatch(statusSet(false));
                }}
                type="text"
                size="small"
              >
                X
              </Button>
            }
          />
        )}
      </div>
      <br />
      {searchItem.map((item, i) => {
        if (item.hasOwnProperty("message")) {
          return (
            <p style={{ color: "red" }} key={i}>
              {item.message}
            </p>
          );
        } else {
          return (
            <Card
              style={{
                width: 400,
                height: 80,
                backgroundColor: "rgb(214, 230, 249)",
              }}
              hoverable={true}
              key={item._id}
            >
              <Space size={180} align="center">
                <h3>{item.name}</h3>
                <Button
                  onClick={() => {
                    handleAddClick(item);
                  }}
                  style={{ backgroundColor: "darkblue", color: "white" }}
                >
                  Add
                </Button>
              </Space>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default Search;
