const Order = require("../models/order");

const orderController = {};

orderController.list = (req, res) => {
  Order.find()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.json(err);
    });
};

orderController.create = (req, res) => {
  const body = req.body;
  const order = new Order(body);
  order
    .save()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.json(err);
    });
};

orderController.destroy = (req, res) => {
  const id = req.params.id;
  Order.findByIdAndDelete(id)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = orderController;
