import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetItems, asyncShowItems } from "../actions/itemAction";
import { Table, Card } from "antd";
import Search from "./Search";
import Order from "./Order";
import "../App.css";

const TableContainer = (props) => {
  const [radioAddress, setRadioAddress] = useState("");

  const { items, orders } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleRadioChange = (e) => {
    setRadioAddress(e.target.value);
  };

  useEffect(() => {
    dispatch(asyncGetItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(asyncShowItems(radioAddress));
  }, [dispatch, radioAddress]);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Price", dataIndex: "price", key: "price" },
  ];

  const tableData = () => {
    const result = [];
    for (let i = 0; i < items.length; i++) {
      result.push({
        key: items[i]._id,
        name: items[i].name,
        type: items[i].type,
        price: items[i].price,
      });
    }
    return result;
  };

  const totalAmount = orders.reduce((total, currentValue) => {
    return (total = total + currentValue.price);
  }, 0);

  return (
    <div>
      <input
        type="radio"
        value="drink"
        name="submitted"
        onChange={handleRadioChange}
        checked={radioAddress === "drink"}
      />
      drink
      <input
        type="radio"
        value="food"
        name="submitted"
        onChange={handleRadioChange}
        checked={radioAddress === "food"}
      />
      food
      <div className="add-cards">
        <Table
          style={{ width: 300 }}
          size="small"
          pagination={false}
          columns={columns}
          dataSource={tableData()}
        />
        {totalAmount > 0 && (
          <Card
            style={{
              // backgroundColor: "bisque",
              width: 350,
              height: 150,
              // borderColor: "black",
            }}
            hoverable={true}
          >
            {totalAmount > 0 && <h1>Amount Due-{totalAmount}Rs</h1>}
          </Card>
        )}
      </div>
      <br />
      <Search />
      <br />
      <Order />
      <br />
    </div>
  );
};

export default TableContainer;
