const Deliver = require("../models/deliver");

const deliverController = {};

deliverController.list = (req, res) => {
  Deliver.find()
    .then((deliver) => {
      res.json(deliver);
    })
    .catch((err) => {
      res.json(err);
    });
};

deliverController.create = (req, res) => {
  const body = req.body;
  const deliver = new Deliver(body);
  deliver
    .save()
    .then((deliver) => {
      res.json(deliver);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = deliverController;
