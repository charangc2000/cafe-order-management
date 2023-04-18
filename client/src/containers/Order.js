import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircleFilled } from "@ant-design/icons";
import { Card, Space } from "antd";
import "../App.css";
import { asyncSetDeliverItem } from "../actions/deliverAction";
import { asyncDeleteOrder } from "../actions/orderAction";
import statusSet from "../actions/statusAction";

const Order = (props) => {
  const { orders } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleCheckClick = (order) => {
    const formData = {
      name: order.name,
      orderId: order._id,
    };
    dispatch(asyncSetDeliverItem(formData));
    dispatch(asyncDeleteOrder(order._id));
    dispatch(statusSet(true));
  };

  return (
    <div>
      {orders.length > 0 && <h2>Orders</h2>}
      {orders.length > 0 &&
        orders.map((order, i) => {
          return (
            <Space key={i}>
              <Card
                key={order._id}
                hoverable={true}
                style={{
                  backgroundColor: "burlywood",
                }}
              >
                <span style={{ fontSize: 20 }}>#{i + 1}</span>
                <span style={{ fontWeight: "bold" }}>{order.name}</span>
                {i + 1 === 1 && (
                  <CheckCircleFilled
                    onClick={() => {
                      handleCheckClick(order);
                    }}
                    style={{ color: "green", fontSize: 25 }}
                  />
                )}
              </Card>
            </Space>
          );
        })}
    </div>
  );
};

export default Order;
