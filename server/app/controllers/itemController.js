const Item = require("../models/item");

const itemController = {};

itemController.list = (req, res) => {
  Item.find()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.json(err);
    });
};

itemController.create = (req, res) => {
  const body = req.body;
  const item = new Item(body);
  item
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.json(err);
    });
};

itemController.show = (req, res) => {
  const radio = req.params.radio;
  Item.find({ type: radio })
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.json(err);
    });
};

itemController.search = (req, res) => {
  const value = req.params.value;
  Item.find()
    .then((items) => {
      const result = items.filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({ message: "This item is currently unavailable" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = itemController;
